import { useEffect, useState } from 'react'
import { Avatar } from '@chakra-ui/react'

export function OptimizedAvatar({ src, size = 'sm', ...props }) {
  const [optimizedSrc, setOptimizedSrc] = useState('')

  useEffect(() => {
    let isMounted = true
    
    // Clean up the source path
    const cleanSrc = src.replace('/src/assets/img/', '')
    
    // Determine the correct path based on environment
    const imagePath = import.meta.env.DEV
      ? `/src/assets/img/${cleanSrc}`
      : `/optimized-images/${cleanSrc.replace(/\.[^/.]+$/, '')}-${size}.webp`

    if (isMounted) {
      setOptimizedSrc(imagePath)
    }

    return () => {
      isMounted = false
    }
  }, [src, size])

  return <Avatar src={optimizedSrc} {...props} />
}

export default OptimizedAvatar 