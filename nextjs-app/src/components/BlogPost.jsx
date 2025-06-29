import { useParams } from 'react-router-dom'
import { getPostBySlug } from '../utils/mdx'
import MDXContent from './MDXContent'

// Blog post data
export const blogPosts = [
  {
    title: 'Porozumění úzkosti: Kompletní průvodce',
    excerpt: 'Naučte se o různých typech úzkosti, jejich příznacích a efektivních strategiích zvládání úzkosti v každodenním životě.',
    date: '15. března 2024',
    readTime: '5 min',
    author: {
      name: 'Tom Nováček',
      image: '/src/assets/img/tom1.png',
      role: 'Licencovaný psychoterapeut'
    },
    tags: ['Úzkost', 'Duševní zdraví', 'Strategie zvládání'],
    image: '/src/assets/img/stress.webp',
    slug: 'porozumeni-uzkosti-kompletni-pruvodce'
  },
  {
    title: 'Síla všímavosti v terapii',
    excerpt: 'Objevte, jak mohou praktiky všímavosti posílit vaši terapeutickou cestu a zlepšit celkovou pohodu.',
    date: '10. března 2024',
    readTime: '4 min',
    author: {
      name: 'Tom Nováček',
      image: '/src/assets/img/tom1.png',
      role: 'Licencovaný psychoterapeut'
    },
    tags: ['Všímavost', 'Terapie', 'Pohoda'],
    image: '/src/assets/img/tom1.png',
    slug: 'sila-vsimavosti-v-terapii'
  }
]

const defaultPost = {
  title: 'Článek nenalezen',
  date: new Date().toISOString(),
  readTime: '0 min čtení',
  excerpt: 'Požadovaný článek nebyl nalezen.',
  tags: [],
  image: 'tom1.png',
  author: {
    name: 'Tom Nováček',
    role: 'Licencovaný psychoterapeut',
    image: 'tom1.png'
  }
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return <div>Článek nenalezen</div>
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