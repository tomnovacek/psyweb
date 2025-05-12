// Import MDX files directly
import anxietyGuide from '../blogPosts/anxiety-guide.mdx'
import mindfulnessTherapy from '../blogPosts/mindfulness-therapy.mdx'
import healthyRelationships from '../blogPosts/healthy-relationships.mdx'

// Map of all posts with their frontmatter
const posts = {
  'anxiety-guide': {
    slug: 'anxiety-guide',
    frontmatter: {
      title: "Understanding Anxiety: A Comprehensive Guide",
      date: "2024-03-15",
      readTime: "10 min read",
      excerpt: "Learn about the different types of anxiety, their symptoms, and effective coping strategies for managing anxiety in daily life.",
      tags: ["Anxiety", "Mental Health", "Self-Care"],
      image: "/src/assets/img/stress.webp",
      author: {
        name: "Tom Novacek",
        role: "Licensed Psychotherapist",
        image: "/src/assets/img/tom-home.webp"
      }
    },
    Component: anxietyGuide
  },
  'mindfulness-therapy': {
    slug: 'mindfulness-therapy',
    frontmatter: {
      title: "The Power of Mindfulness in Therapy",
      date: "2024-03-10",
      readTime: "8 min read",
      excerpt: "Discover how mindfulness practices can enhance your therapeutic journey and improve your overall well-being.",
      tags: ["Mindfulness", "Therapy", "Well-being"],
      image: "/src/assets/img/mindfulness.webp",
      author: {
        name: "Tom Novacek",
        role: "Licensed Psychotherapist",
        image: "/src/assets/img/tom-home.webp"
      }
    },
    Component: mindfulnessTherapy
  },
  'healthy-relationships': {
    slug: 'healthy-relationships',
    frontmatter: {
      title: "Building Healthy Relationships: A Guide to Connection",
      date: "2024-03-05",
      readTime: "12 min read",
      excerpt: "Learn essential strategies for building and maintaining healthy relationships in all areas of your life.",
      tags: ["Relationships", "Communication", "Personal Growth"],
      image: "/src/assets/img/relationships.webp",
      author: {
        name: "Tom Novacek",
        role: "Licensed Psychotherapist",
        image: "/src/assets/img/tom-home.webp"
      }
    },
    Component: healthyRelationships
  }
}

// Debug log to see what files we're getting
console.log('Available MDX files:', Object.keys(posts))

// Simple frontmatter parser
function parseFrontmatter(content) {
  console.log('Parsing frontmatter from:', content.substring(0, 200) + '...') // Debug log
  const match = content.match(/^---\n([\s\S]*?)\n---/)
  if (!match) {
    console.log('No frontmatter found') // Debug log
    return {}
  }
  
  const frontmatter = match[1]
  console.log('Found frontmatter:', frontmatter) // Debug log
  const lines = frontmatter.split('\n')
  const result = {}
  
  lines.forEach(line => {
    const [key, ...valueParts] = line.split(':')
    if (key && valueParts.length) {
      const value = valueParts.join(':').trim()
      try {
        // Try to parse as JSON for arrays and objects
        result[key.trim()] = JSON.parse(value)
      } catch {
        // If not JSON, use as is
        result[key.trim()] = value.replace(/^"|"$/g, '')
      }
    }
  })
  
  console.log('Parsed frontmatter:', result) // Debug log
  return result
}

export function getPostBySlug(slug) {
  const post = posts[slug]
  if (!post) {
    console.log('No post found for slug:', slug) // Debug log
    return null
  }

  console.log('Post content for', slug, ':', post) // Debug log
  
  return post
}

export function getAllPosts() {
  console.log('Getting all posts...') // Debug log
  const allPosts = Object.values(posts)
    .filter(post => {
      console.log('Filtering post:', post) // Debug log
      return post.frontmatter && post.frontmatter.date
    })
    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))

  console.log('All processed posts:', allPosts) // Debug log
  return allPosts
} 