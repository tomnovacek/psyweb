import { useTranslation } from 'react-i18next';
import { serialize } from 'next-mdx-remote/serialize'
import matter from 'gray-matter'

// Content directory paths
const CONTENT_DIR = {
  cs: '/content/cs',
  en: '/content/en'
}

/**
 * Get all posts for a specific language
 * @param {string} lang - Language code ('cs' or 'en')
 * @returns {Promise<Array>} Array of posts
 */
export async function getAllPosts(lang = 'cs') {
  try {
    const response = await fetch(`${CONTENT_DIR[lang]}/blog/index.json`);
    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error loading posts:', error);
    return [];
  }
}

/**
 * Get a single post by slug
 * @param {string} slug - Post slug
 * @param {string} lang - Language code ('cs' or 'en')
 * @returns {Promise<Object>} Post data
 */
export async function getPostBySlug(slug, lang = 'cs') {
  try {
    const response = await fetch(`${CONTENT_DIR[lang]}/blog/${slug}.mdx`);
    if (!response.ok) {
      throw new Error(`Failed to fetch post: ${response.statusText}`);
    }
    const content = await response.text();
    return content;
  } catch (error) {
    console.error('Error loading post:', error);
    return null;
  }
}

/**
 * Get a page by slug
 * @param {string} slug - Page slug
 * @param {string} lang - Language code ('cs' or 'en')
 * @returns {Promise<Object>} Page data
 */
export async function getPageBySlug(slug, lang = 'cs') {
  try {
    const response = await fetch(`${CONTENT_DIR[lang]}/${slug}.mdx`);
    if (!response.ok) {
      throw new Error(`Failed to fetch page: ${response.statusText}`);
    }
    const content = await response.text();
    return content;
  } catch (error) {
    console.error('Error loading page:', error);
    return null;
  }
}

export function useLocalizedContent() {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return {
    getAllPosts: () => getAllPosts(lang),
    getPostBySlug: (slug) => getPostBySlug(slug, lang),
    getPageBySlug: (slug) => getPageBySlug(slug, lang)
  };
} 