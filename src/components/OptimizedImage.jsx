import { useState, useEffect } from 'react'
import { Image, Skeleton } from '@chakra-ui/react'
import { getOptimizedImagePath } from '../utils/getOptimizedImage'

const OptimizedImage = ({
  src,
  alt,
  size = 'md',
  fallbackSrc = '/assets/optimized-images/CAP-md.webp',
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true

    const loadImage = async () => {
      try {
        setIsLoading(true)
        setError(null)
        
        const optimizedPath = await getOptimizedImagePath(src, size)
        if (!optimizedPath) {
          throw new Error('Failed to generate optimized image path')
        }

        // In development, we don't need to check if the image exists
        if (import.meta.env.DEV) {
          if (isMounted) {
            setImageSrc(optimizedPath)
            setIsLoading(false)
          }
          return
        }

        // In production, check if the image exists
        const response = await fetch(optimizedPath)
        if (!response.ok) {
          console.warn(`Image not found at ${optimizedPath}, trying fallback`)
          throw new Error('Failed to load image')
        }

        if (isMounted) {
          setImageSrc(optimizedPath)
          setIsLoading(false)
        }
      } catch (err) {
        if (isMounted) {
          console.error('Error loading optimized image:', { error: err, src, size, fallbackSrc })
          setError(err)
          setImageSrc(fallbackSrc)
          setIsLoading(false)
        }
      }
    }

    loadImage()

    return () => {
      isMounted = false
    }
  }, [src, size, fallbackSrc])

  if (isLoading) {
    return <Skeleton {...props} />
  }

  return (
    <Image
      src={imageSrc || fallbackSrc}
      alt={alt}
      onError={(e) => {
        console.warn(`Failed to load image ${imageSrc}, using fallback`)
        if (imageSrc !== fallbackSrc) {
          setImageSrc(fallbackSrc)
        }
      }}
      {...props}
    />
  )
}

export default OptimizedImage 