import { format } from 'date-fns'
import { cs } from 'date-fns/locale'
import matter from 'gray-matter'
import { getOptimizedImagePath } from './imageUtils'

// Import all MDX files
const blogPosts = import.meta.glob('/src/blogPosts/*.mdx', { as: 'raw' })

// Process and validate blog posts
const processedPosts = Object.entries(blogPosts).map(([path, importFn]) => {
  const slug = path.split('/').pop().replace('.mdx', '')
  return {
    slug,
    importFn,
  }
})

// Get all blog posts
export const getAllPosts = async () => {
  const posts = await Promise.all(
    processedPosts.map(async ({ slug, importFn }) => {
      const content = await importFn()
      const { data: frontmatter, content: mdxContent } = matter(content)
      
      // Validate required fields
      if (!frontmatter.title || !frontmatter.date) {
        console.warn(`Post ${slug} is missing required fields`)
        return null
      }

      // Format date
      const date = new Date(frontmatter.date)
      const formattedDate = format(date, 'd. MMMM yyyy', { locale: cs })

      // Use the original image path for the image property
      const imagePath = frontmatter.image ? `/assets/img/${frontmatter.image}` : null

      return {
        slug,
        title: frontmatter.title,
        date: formattedDate,
        readTime: frontmatter.readTime,
        excerpt: frontmatter.excerpt,
        tags: frontmatter.tags || [],
        image: imagePath,
        author: frontmatter.author,
        content: mdxContent,
        status: frontmatter.status || 'draft'
      }
    })
  )

  // Filter out invalid posts
  const validPosts = posts.filter(Boolean)

  // Filter by status based on environment
  const filteredPosts = import.meta.env.PROD
    ? validPosts.filter(post => post.status === 'published')
    : validPosts

  // Sort by date
  return filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date))
}

// Get a single post by slug
export const getPostBySlug = async (slug) => {
  const post = processedPosts.find((p) => p.slug === slug)
  if (!post) return null

  const content = await post.importFn()
  const { data: frontmatter, content: mdxContent } = matter(content)

  // Validate required fields
  if (!frontmatter.title || !frontmatter.date) {
    console.warn(`Post ${slug} is missing required fields`)
    return null
  }

  // Check status in production
  if (import.meta.env.PROD && frontmatter.status !== 'published') {
    console.warn(`Post ${slug} is not published`)
    return null
  }

  // Format date
  const date = new Date(frontmatter.date)
  const formattedDate = format(date, 'd. MMMM yyyy', { locale: cs })

  return {
    slug,
    title: frontmatter.title,
    date: formattedDate,
    readTime: frontmatter.readTime,
    excerpt: frontmatter.excerpt,
    tags: frontmatter.tags || [],
    image: frontmatter.image ? `/assets/img/${frontmatter.image}` : null,
    author: frontmatter.author,
    content: mdxContent,
    status: frontmatter.status || 'draft'
  }
}

// Get posts by tag
export const getPostsByTag = async (tag) => {
  const posts = await getAllPosts()
  return posts.filter((post) => post.tags.includes(tag))
}

// Get all unique tags
export const getAllTags = async () => {
  const posts = await getAllPosts()
  const tags = new Set()
  posts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag))
  })
  return Array.from(tags).sort()
}

// Get related posts
export const getRelatedPosts = async (currentPost, limit = 3) => {
  const posts = await getAllPosts()
  return posts
    .filter((post) => post.slug !== currentPost.slug)
    .filter((post) => post.tags.some((tag) => currentPost.tags.includes(tag)))
    .slice(0, limit)
}

export async function getLatestPosts(count = 3) {
  const posts = await getAllPosts()
  return posts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count)
} 