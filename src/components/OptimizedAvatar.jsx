import { useEffect, useState } from 'react'
import { Avatar, Skeleton } from '@chakra-ui/react'

export function OptimizedAvatar({ src, size = 'sm', ...props }) {
  const [optimizedSrc, setOptimizedSrc] = useState('')
  const [isLoading, setIsLoading] = useState(true)

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

  // Preload the image
  useEffect(() => {
    if (!optimizedSrc) return

    const img = new Image()
    img.src = optimizedSrc
    img.onload = () => setIsLoading(false)
    img.onerror = () => setIsLoading(false)
  }, [optimizedSrc])

  // Get size dimensions based on Chakra UI's Avatar sizes
  const getSize = () => {
    switch (size) {
      case 'xs': return '24px'
      case 'sm': return '32px'
      case 'md': return '40px'
      case 'lg': return '56px'
      case 'xl': return '72px'
      case '2xl': return '96px'
      default: return '32px'
    }
  }

  const avatarSize = getSize()

  return (
    <Skeleton
      isLoaded={!isLoading}
      width={avatarSize}
      height={avatarSize}
      borderRadius="full"
    >
      <Avatar
        src={optimizedSrc}
        size={size}
        {...props}
      />
    </Skeleton>
  )
}

export default OptimizedAvatar 