import { useParams } from 'react-router-dom'
import { getPostBySlug } from '../utils/mdx'
import MDXContent from './MDXContent'

// Blog post data
export const blogPosts = [
  {
    title: 'Understanding Anxiety: A Comprehensive Guide',
    excerpt: 'Learn about the different types of anxiety, their symptoms, and effective coping strategies for managing anxiety in daily life.',
    date: 'March 15, 2024',
    readTime: '5 min',
    author: {
      name: 'Tom Novacek',
      image: '/src/assets/img/tom-home.webp',
      role: 'Licensed Psychotherapist'
    },
    tags: ['Anxiety', 'Mental Health', 'Coping Strategies'],
    image: '/src/assets/img/stress.webp',
    slug: 'understanding-anxiety-comprehensive-guide'
  },
  {
    title: 'The Power of Mindfulness in Therapy',
    excerpt: 'Discover how mindfulness practices can enhance your therapeutic journey and improve your overall well-being.',
    date: 'March 10, 2024',
    readTime: '4 min',
    author: {
      name: 'Tom Novacek',
      image: '/src/assets/img/tom-home.webp',
      role: 'Licensed Psychotherapist'
    },
    tags: ['Mindfulness', 'Therapy', 'Well-being'],
    image: '/src/assets/img/mindfulness.webp',
    slug: 'power-of-mindfulness-in-therapy'
  }
]

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return <div>Post not found</div>
  }

  const { frontmatter, Component } = post

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{frontmatter.title}</h1>
        <div className="flex items-center gap-4 text-gray-600">
          <span>{frontmatter.date}</span>
          <span>•</span>
          <span>{frontmatter.readTime}</span>
        </div>
        <div className="flex gap-2 mt-4">
          {frontmatter.tags.map(tag => (
            <span key={tag} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </header>
      
      <div className="prose max-w-none">
        <MDXContent>
          <Component />
        </MDXContent>
      </div>
    </article>
  )
} 