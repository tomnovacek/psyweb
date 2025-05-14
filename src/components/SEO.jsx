import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { getAlternateLanguagePath } from '../utils/content'
import { getOptimizedImagePath } from '../utils/getOptimizedImage'

const SEO = ({
  title = '',
  description = '',
  keywords = '',
  url = '',
  image = '',
  preloadImages = [],
  type = 'website',
  children
}) => {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const currentPath = location.pathname
  const alternatePath = getAlternateLanguagePath(currentPath)
  const currentLang = i18n.language
  const alternateLang = currentLang === 'cs' ? 'en' : 'cs'
  const baseUrl = 'https://psyweb.cz' // Replace with your actual domain

  const defaultTitle = t('seo.defaultTitle', 'Psychoterapie & Osobní růst')
  const defaultDescription = t('seo.defaultDescription', 'Licencovaný psychoterapeut poskytující odbornou pomoc při překonávání životních výzev a dosahování osobního růstu.')
  const defaultImage = `${baseUrl}/assets/og-image.jpg`

  const seo = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    image: image || defaultImage,
    url: `${baseUrl}${currentPath}`,
    type
  }

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={seo.url} />

      {/* Language-specific meta tags */}
      <html lang={currentLang} />
      <link rel="alternate" hrefLang={currentLang} href={seo.url} />
      <link rel="alternate" hrefLang={alternateLang} href={`${baseUrl}${alternatePath}`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${currentLang === 'cs' ? currentPath : alternatePath}`} />

      {/* Open Graph meta tags */}
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content={seo.type} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:locale" content={currentLang === 'cs' ? 'cs_CZ' : 'en_US'} />
      <meta property="og:locale:alternate" content={currentLang === 'cs' ? 'en_US' : 'cs_CZ'} />

      {/* Twitter meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

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