import { getAllPosts, getPostBySlug } from './mdx'

export const getContentByLanguage = async (language) => {
  const contentPath = language === 'en' ? 'en' : 'cs'
  return {
    posts: await getAllPosts(contentPath),
    getPost: (slug) => getPostBySlug(slug, contentPath)
  }
}

export const getLocalizedPath = (path, language) => {
  if (language === 'en') {
    return path === '/' ? '/en' : `/en${path}`
  }
  return path.replace('/en', '')
}

export const getAlternateLanguagePath = (path, currentLanguage) => {
  return getLocalizedPath(path, currentLanguage === 'en' ? 'cs' : 'en')
} 