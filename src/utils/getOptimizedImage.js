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
      ? resolvedSrc.split('/').pop().split('.')[0]
      : resolvedSrc.split('.')[0]
    
    // Get the size suffix
    const suffix = sizeSuffixMap[size] || 'md'
    
    // Return the optimized image path
    const optimizedPath = `/optimized-images/${filename}-${suffix}.webp`
    console.log('Using optimized path:', { optimizedPath, size, suffix })
    return optimizedPath
  } catch (error) {
    console.error('Error generating optimized image path:', error)
    return null
  }
} 