import { Box } from '@chakra-ui/react'

// Static hero image component optimized for LCP
export default function HeroImage({ 
  src, 
  alt, 
  className = "", 
  style = {},
  sizes = "(max-width: 480px) 100vw, (max-width: 768px) 100vw, 100vw",
  priority = true,
  fallbackSrc,
  ...props 
}) {
  // Extract base filename for responsive images
  const getBaseFilename = (imagePath) => {
    const cleanPath = imagePath
      .replace(/^\/assets\/img\//, '')
      .replace(/^\/src\/assets\/img\//, '')
      .replace(/^\/+/, '')
    return cleanPath.replace(/\.(webp|jpg|jpeg|png)$/, '')
  }

  const baseFilename = getBaseFilename(src)
  
  // Generate responsive srcset for different viewport sizes
  const srcSet = [
    `/optimized-images/${baseFilename}-xs.webp 150w`,
    `/optimized-images/${baseFilename}-sm.webp 300w`,
    `/optimized-images/${baseFilename}-md.webp 400w`,
    `/optimized-images/${baseFilename}-lg.webp 800w`,
    `/optimized-images/${baseFilename}-xl.webp 1200w`,
    `/optimized-images/${baseFilename}-2xl.webp 1600w`
  ].join(', ')

  // Use md size as default for faster loading (was lg)
  const defaultSrc = `/optimized-images/${baseFilename}-md.webp`

  const handleError = (e) => {
    console.warn('Hero image failed to load:', defaultSrc)
    if (fallbackSrc && e.target.src !== fallbackSrc) {
      e.target.src = fallbackSrc
    }
  }

  return (
    <img
      src={defaultSrc}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchpriority={priority ? "high" : "auto"}
      decoding={priority ? "sync" : "async"}
      className={`hero-image ${className}`}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        ...style
      }}
      onError={handleError}
      {...props}
    />
  )
} 