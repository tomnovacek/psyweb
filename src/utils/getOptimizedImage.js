// Map size to suffix
const sizeSuffixMap = {
  'xs': '-xs',
  'sm': '-sm',
  'md': '-md',
  'lg': '-lg',
  'xl': '-xl',
  '2xl': '-2xl'
}

// Import the image manifest
import imageManifest from '../image-manifest.json'

export async function getOptimizedImage(source, size = 'md') {
  if (!source) {
    console.warn('No image source provided')
    return null
  }

  try {
    // Handle Promise input
    const resolvedSource = await Promise.resolve(source)
    if (!resolvedSource) return null

    // If the path is already optimized, return it as is
    if (resolvedSource.startsWith('/optimized-images/')) {
      return resolvedSource
    }

    // Clean the source path
    const cleanPath = resolvedSource.replace(/^\/?(src\/assets\/img\/)?/, '')
    
    // Extract the base filename without extension and any existing size suffix
    const baseFilename = cleanPath.replace(/\.(webp|jpg|jpeg|png)$/, '')
      .replace(/-[a-z]+$/, '') // Remove any existing size suffix

    // Get the size suffix
    const sizeSuffix = sizeSuffixMap[size] || '-md'

    // Return the optimized image path
    return `/optimized-images/${baseFilename}${sizeSuffix}.webp`
  } catch (error) {
    console.error('Error in getOptimizedImage:', error)
    return null
  }
}

export function getOptimizedImagePath(source, size = 'md') {
  if (!source) return null

  // If the path is already optimized, return it as is
  if (source.startsWith('/optimized-images/')) {
    return source
  }

  // Clean the source path
  const cleanPath = source.replace(/^\/?(src\/assets\/img\/)?/, '')
  
  // Extract the base filename without extension and any existing size suffix
  const baseFilename = cleanPath.replace(/\.(webp|jpg|jpeg|png)$/, '')
    .replace(/-[a-z]+$/, '') // Remove any existing size suffix

  // Get the size suffix
  const sizeSuffix = sizeSuffixMap[size] || '-md'

  // Return the optimized image path
  return `/optimized-images/${baseFilename}${sizeSuffix}.webp`
} 