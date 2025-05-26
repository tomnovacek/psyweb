// Map size to suffix
const sizeSuffixMap = {
  'sm': 'sm',
  'md': 'md',
  'lg': 'lg',
  'xl': 'xl',
  'xs': 'xs',
  '2xl': '2xl'
}

export const getOptimizedImagePath = async (src, size = 'md') => {
  if (!src) {
    console.warn('No image source provided')
    return null
  }

  try {
    // Handle Promise input
    const resolvedSrc = await Promise.resolve(src)
    
    if (typeof resolvedSrc !== 'string') {
      console.error('Invalid image source:', resolvedSrc)
      return null
    }

    // Extract filename from path, handling both formats
    const filename = resolvedSrc.includes('/') 
      ? resolvedSrc.split('/').pop()
      : resolvedSrc
    
    // If the filename already includes a size suffix, return it as is
    if (filename.includes('-md.webp') || 
        filename.includes('-sm.webp') || 
        filename.includes('-lg.webp') || 
        filename.includes('-xl.webp') || 
        filename.includes('-2xl.webp') || 
        filename.includes('-xs.webp')) {
      return `/optimized-images/${filename}`
    }
    
    // Get the size suffix
    const suffix = sizeSuffixMap[size] || 'md'
    
    // Return the optimized image path
    const optimizedPath = `/optimized-images/${filename.split('.')[0]}-${suffix}.webp`
    console.log('Using optimized path:', { optimizedPath, size, suffix })
    return optimizedPath
  } catch (error) {
    console.error('Error generating optimized image path:', error)
    return null
  }
} 