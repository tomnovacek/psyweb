import fs from 'fs'
import path from 'path'
import { glob } from 'glob'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const BASE_URL = 'https://psyweb.cz' // Replace with your actual domain
const LANGUAGES = ['cs', 'en']
const STATIC_PAGES = [
  { path: '/', priority: 1.0 },
  { path: '/sluzby', priority: 0.8 },
  { path: '/blog', priority: 0.8 },
  { path: '/kontakt', priority: 0.7 }
]

// Generate sitemap XML content
function generateSitemapXML(urls) {
  const xmlUrls = urls.map(({ url, lastmod, priority }) => `
    <url>
      <loc>${url}</loc>
      ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
      <priority>${priority}</priority>
    </url>
  `).join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${xmlUrls}
</urlset>`
}

// Generate sitemap index XML
function generateSitemapIndex(sitemaps) {
  const xmlSitemaps = sitemaps.map(sitemap => `
    <sitemap>
      <loc>${sitemap}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </sitemap>
  `).join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${xmlSitemaps}
</sitemapindex>`
}

// Get blog posts from MDX files
async function getBlogPosts() {
  const posts = []
  for (const lang of LANGUAGES) {
    const files = await glob(`src/content/${lang}/blog/*.mdx`)
    for (const file of files) {
      const stats = fs.statSync(file)
      const slug = path.basename(file, '.mdx')
      posts.push({
        path: `/${lang === 'cs' ? '' : 'en/'}blog/${slug}`,
        lastmod: stats.mtime.toISOString(),
        priority: 0.6
      })
    }
  }
  return posts
}

// Generate sitemaps for each language
async function generateLanguageSitemaps() {
  const sitemaps = []
  const posts = await getBlogPosts()

  for (const lang of LANGUAGES) {
    const urls = []
    const prefix = lang === 'cs' ? '' : 'en/'

    // Add static pages
    STATIC_PAGES.forEach(page => {
      urls.push({
        url: `${BASE_URL}/${prefix}${page.path.replace(/^\//, '')}`,
        priority: page.priority
      })
    })

    // Add blog posts
    const langPosts = posts.filter(post => 
      post.path.startsWith(`/${prefix}`)
    )
    langPosts.forEach(post => {
      urls.push({
        url: `${BASE_URL}${post.path}`,
        lastmod: post.lastmod,
        priority: post.priority
      })
    })

    // Generate sitemap XML
    const sitemapContent = generateSitemapXML(urls)
    const sitemapPath = `public/sitemap-${lang}.xml`
    fs.writeFileSync(sitemapPath, sitemapContent)
    sitemaps.push(`${BASE_URL}/sitemap-${lang}.xml`)
  }

  // Generate sitemap index
  const indexContent = generateSitemapIndex(sitemaps)
  fs.writeFileSync('public/sitemap.xml', indexContent)
}

// Generate robots.txt
function generateRobotsTxt() {
  const content = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml`
  fs.writeFileSync('public/robots.txt', content)
}

// Main execution
try {
  await generateLanguageSitemaps()
  generateRobotsTxt()
  console.log('Sitemaps and robots.txt generated successfully!')
} catch (error) {
  console.error('Error generating sitemaps:', error)
  process.exit(1)
} 