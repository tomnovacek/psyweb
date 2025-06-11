import { Box, Image, Skeleton } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { getOptimizedImage } from '../utils/getOptimizedImage'

export default function OptimizedImage({ src, alt, priority, ...props }) {
  const [imageSrc, setImageSrc] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const loadImage = async () => {
      try {
        setIsLoading(true)
        setError(false)
        
        // If the path is already optimized, use it directly
        if (src.startsWith('/assets/optimized-images/')) {
          setImageSrc(src)
          setIsLoading(false)
          return
        }
        
        // Always use optimized images, regardless of environment
        const optimizedSrc = await getOptimizedImage(src)
        
        if (!optimizedSrc) {
          throw new Error('Failed to get optimized image path')
        }

        setImageSrc(optimizedSrc)
        setIsLoading(false)
      } catch (err) {
        console.error('Error loading image:', err)
        setError(true)
        setIsLoading(false)
      }
    }

    loadImage()
  }, [src])

  if (error) {
    return (
      <Box
        bg="gray.100"
        display="flex"
        alignItems="center"
        justifyContent="center"
        {...props}
      >
        <Box textAlign="center" p={4}>
          <Box color="gray.500">Image not found</Box>
          <Box fontSize="sm" color="gray.400">{alt}</Box>
        </Box>
      </Box>
    )
  }

  return (
    <Box position="relative" {...props}>
      {isLoading && (
        <Skeleton
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          zIndex={1}
        />
      )}
      <Image
        src={imageSrc}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        onError={() => {
          console.error('Failed to load image:', imageSrc)
          setError(true)
          setIsLoading(false)
        }}
        onLoad={() => {
          setIsLoading(false)
        }}
        {...props}
        style={{
          ...props.style,
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out'
        }}
      />
    </Box>
  )
} 