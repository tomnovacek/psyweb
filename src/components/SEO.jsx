import { Helmet } from 'react-helmet-async'

const SEO = ({
  title = '',
  description = '',
  keywords = '',
  url = '',
  image = '',
  preloadImages = [],
  children
}) => {
  const siteTitle = 'Tomáš Nováček - Psycholog a terapeut | Brno'
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle

  // Ensure all values are strings
  const safeTitle = String(fullTitle)
  const safeDescription = String(description)
  const safeKeywords = keywords ? String(keywords) : ''
  const safeUrl = String(url)
  const safeImage = image ? String(image) : ''

  // Simple function to construct optimized image paths without async
  const getOptimizedImagePathSync = (imgSrc, size = 'lg') => {
    if (!imgSrc) return null
    
    // Clean the source path
    const cleanPath = imgSrc
      .replace(/^\/assets\/img\//, '')
      .replace(/^\/src\/assets\/img\//, '')
      .replace(/^\/+/, '')
    
    // Extract the base filename without extension
    const baseFilename = cleanPath.replace(/\.(webp|jpg|jpeg|png)$/, '')
    
    // Return the optimized image path
    return `/optimized-images/${baseFilename}-${size}.webp`
  }

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{safeTitle}</title>
      <meta name="description" content={safeDescription} />
      {safeKeywords && <meta name="keywords" content={safeKeywords} />}
      <link rel="canonical" href={safeUrl} />

      {/* Open Graph meta tags */}
      <meta property="og:title" content={safeTitle} />
      <meta property="og:description" content={safeDescription} />
      <meta property="og:url" content={safeUrl} />
      <meta property="og:type" content="website" />
      {safeImage && <meta property="og:image" content={safeImage} />}

      {/* Twitter meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={safeTitle} />
      <meta name="twitter:description" content={safeDescription} />
      {safeImage && <meta name="twitter:image" content={safeImage} />}

      {/* Resource hints for better performance */}
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      
      {/* Preload critical images for LCP */}
      {preloadImages.map((imgSrc, index) => {
        try {
          // Try to get optimized large version for LCP
          const optimizedPath = getOptimizedImagePathSync(imgSrc, 'lg')
          if (typeof optimizedPath === 'string') {
            return (
              <link
                key={`preload-${index}`}
                rel="preload"
                href={optimizedPath}
                as="image"
                type="image/webp"
                fetchpriority="high"
              />
            )
          }
        } catch (error) {
          console.error(`Failed to optimize image path for ${imgSrc}:`, error)
        }
        return null
      })}
      
      {/* Additional meta tags */}
      {children}
    </Helmet>
  )
}

export default SEO 