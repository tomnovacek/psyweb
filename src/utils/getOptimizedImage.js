// Map size to suffix
const sizeSuffixMap = {
  'xs': '-xs',
  'sm': '-sm',
  'md': '-md',
  'lg': '-lg',
  'xl': '-xl',
  '2xl': '-2xl'
}

// Import the image manifest from public directory using ?url suffix
import imageManifestUrl from '/image-manifest.json?url'

// Cache for the manifest
let manifestCache = null

// Function to load the manifest
async function loadManifest() {
  if (manifestCache) return manifestCache
  
  try {
    const response = await fetch(imageManifestUrl)
    manifestCache = await response.json()
    return manifestCache
  } catch (error) {
    console.error('Error loading image manifest:', error)
    return null
  }
}

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
    const cleanPath = resolvedSource
      .replace(/^\/assets\/img\//, '') // Remove /assets/img/ prefix
      .replace(/^\/src\/assets\/img\//, '') // Remove /src/assets/img/ prefix
      .replace(/^\/+/, '') // Remove leading slashes
    
    // Extract the base filename without extension and any existing size suffix
    const baseFilename = cleanPath.replace(/\.(webp|jpg|jpeg|png)$/, '')
      .replace(/-(xs|sm|md|lg|xl|2xl)$/, '') // Remove only size suffixes

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
  const cleanPath = source
    .replace(/^\/assets\/img\//, '') // Remove /assets/img/ prefix
    .replace(/^\/src\/assets\/img\//, '') // Remove /src/assets/img/ prefix
    .replace(/^\/+/, '') // Remove leading slashes
  
  // Extract the base filename without extension and any existing size suffix
  const baseFilename = cleanPath.replace(/\.(webp|jpg|jpeg|png)$/, '')
    .replace(/-(xs|sm|md|lg|xl|2xl)$/, '') // Remove only size suffixes

  // Get the size suffix
  const sizeSuffix = sizeSuffixMap[size] || '-md'

  // Return the optimized image path
  return `/optimized-images/${baseFilename}${sizeSuffix}.webp`
} 