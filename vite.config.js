import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkFrontmatter from 'remark-frontmatter'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'
import path from 'path'
import { glob } from 'glob'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Function to get all blog post paths
async function getBlogPostPaths() {
  const blogDir = path.join(__dirname, 'src/content/blog')
  const files = await glob('**/*.md', { cwd: blogDir })
  return files.map(file => `/blog/${file.replace(/\.md$/, '')}`)
}

// Custom sitemap plugin
function sitemapPlugin() {
  return {
    name: 'sitemap',
    closeBundle: async () => {
      try {
        const blogPaths = await getBlogPostPaths()
        const routes = [
          '/',
          '/blog',
          '/services',
          '/about',
          '/contact',
          ...blogPaths
        ]

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
  <url>
    <loc>https://psyweb.cz${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`).join('')}
</urlset>`

        // Ensure the dist directory exists
        const distDir = path.join(__dirname, 'dist')
        if (!fs.existsSync(distDir)) {
          fs.mkdirSync(distDir, { recursive: true })
        }

        // Write sitemap to dist directory
        fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap)
        console.log('Sitemap generated successfully')

        // Copy and update image manifest
        const manifestPath = path.join(__dirname, 'public/image-manifest.json')
        if (fs.existsSync(manifestPath)) {
          const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
          // Update image paths to be relative to dist
          Object.keys(manifest.images).forEach(key => {
            manifest.images[key].responsive.forEach(size => {
              size.path = size.path.replace('/optimized-images/', '/assets/optimized-images/')
            })
          })
          fs.writeFileSync(path.join(distDir, 'image-manifest.json'), JSON.stringify(manifest, null, 2))
          console.log('Image manifest updated and copied to dist')
        }

        // Copy images from src/assets/img to dist/assets/img
        const srcImgDir = path.join(__dirname, 'src/assets/img')
        const distImgDir = path.join(distDir, 'assets/img')
        if (!fs.existsSync(distImgDir)) {
          fs.mkdirSync(distImgDir, { recursive: true })
        }
        const files = fs.readdirSync(srcImgDir)
        files.forEach(file => {
          fs.copyFileSync(
            path.join(srcImgDir, file),
            path.join(distImgDir, file)
          )
        })
        console.log('Images copied to dist directory')
      } catch (error) {
        console.error('Error generating sitemap:', error)
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    mdx({
      providerImportSource: '@mdx-js/react',
      remarkPlugins: [
        remarkGfm,
        remarkFrontmatter
      ],
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }]
      ]
    }),
    react(),
    sitemapPlugin()
  ],
  define: {
    'process.env': {},
    global: 'globalThis'
  },
  optimizeDeps: {
    include: [
      'react/jsx-runtime',
      '@mdx-js/react',
      '@mdx-js/rollup',
      'gray-matter',
      'remark-gfm',
      'rehype-slug',
      'rehype-autolink-headings',
      'remark-frontmatter'
    ]
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    copyPublicDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      },
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          chakra: ['@chakra-ui/react', '@emotion/react', '@emotion/styled', 'framer-motion'],
          mdx: ['@mdx-js/react', '@mdx-js/rollup', 'remark-frontmatter'],
          utils: ['gray-matter', 'react-helmet-async', 'buffer']
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.webp')) {
            return 'assets/img/[name][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  server: {
    port: 3000,
    host: true,
    open: true,
    fs: {
      strict: false,
      allow: ['..']
    }
  },
  assetsInclude: ['**/*.mdx', '**/*.webp', '**/*.jpg', '**/*.jpeg', '**/*.png']
})
