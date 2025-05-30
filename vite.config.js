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
            return 'assets/optimized-images/[name][extname]'
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
  assetsInclude: ['**/*.mdx']
})
