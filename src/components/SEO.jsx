import { Helmet } from 'react-helmet-async'
import { getOptimizedImagePath } from '../utils/getOptimizedImage'

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

      {/* Preload critical images */}
      {preloadImages.map((imgSrc, index) => {
        try {
          const optimizedPath = getOptimizedImagePath(imgSrc, 'md')
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