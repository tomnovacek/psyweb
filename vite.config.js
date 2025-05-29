import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkFrontmatter from 'remark-frontmatter'
import { resolve } from 'path'
import { sitemap } from 'vite-plugin-sitemap'

// Function to get all blog post paths
const getBlogPostPaths = () => {
  const blogDir = path.resolve(__dirname, 'src/blogPosts')
  const files = fs.readdirSync(blogDir)
  return files
    .filter(file => file.endsWith('.mdx'))
    .map(file => `/blog/${file.replace('.mdx', '')}`)
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
    sitemap({
      hostname: 'https://tomnovacek.com', // replace with your actual domain
      dynamicRoutes: [
        '/',
        '/about',
        '/services',
        '/calendar',
        '/blog',
        ...getBlogPostPaths()
      ],
      exclude: [
        '/404',
        '/admin'
      ],
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString()
    })
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
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'chakra': ['@chakra-ui/react', '@emotion/react', '@emotion/styled'],
          'animations': ['framer-motion'],
          'mdx': ['@mdx-js/react', '@mdx-js/rollup', 'remark-frontmatter'],
          'utils': ['gray-matter', 'react-helmet-async', 'buffer']
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
