import { Box, Image } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { getOptimizedImagePath } from '../utils/getOptimizedImage'

// Critical image component optimized for LCP
export default function CriticalImage({ src, alt, fallbackSrc, ...props }) {
  const [currentSrc, setCurrentSrc] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    // For critical images, try multiple sources in order of preference
    const loadCriticalImage = async () => {
      try {
        // For critical images, construct the optimized path directly
        // This avoids async manifest loading for preloaded images
        const cleanPath = src
          .replace(/^\/assets\/img\//, '')
          .replace(/^\/src\/assets\/img\//, '')
          .replace(/^\/+/, '')
        
        const baseFilename = cleanPath.replace(/\.(webp|jpg|jpeg|png)$/, '')
        const optimizedPath = `/optimized-images/${baseFilename}-md.webp`
        
        // Use the optimized path directly for critical images
        // The browser will use the preloaded version if available
        setCurrentSrc(optimizedPath)
      } catch (err) {
        console.error('Error loading critical image:', err)
        setCurrentSrc(`/src/assets/img/${src}`)
      }
    }

    loadCriticalImage()
  }, [src, fallbackSrc])

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
    <Image
      src={currentSrc || `/src/assets/img/${src}`}
      alt={alt}
      loading="eager"
      fetchpriority="high"
      decoding="sync"
      onError={() => {
        console.error('Failed to load critical image:', currentSrc)
        // Try fallback if available
        if (fallbackSrc && currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc)
        } else {
          setError(true)
        }
      }}
      {...props}
    />
  )
} 