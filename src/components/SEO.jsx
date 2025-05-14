import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, keywords, url, image, preloadImages = [] }) {
  // Clean up the image path
  const cleanImagePath = image ? image.replace('/src/assets/img/', '') : ''
  
  // Determine the correct image path based on environment
  const imagePath = import.meta.env.DEV
    ? `/src/assets/img/${cleanImagePath}`
    : `/optimized-images/${cleanImagePath.replace(/\.[^/.]+$/, '')}-md.webp`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={imagePath} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={imagePath} />}

      {/* Preload critical images */}
      {preloadImages.map((img, index) => {
        const cleanImgPath = img.replace('/src/assets/img/', '')
        const optimizedPath = import.meta.env.DEV
          ? `/src/assets/img/${cleanImgPath}`
          : `/optimized-images/${cleanImgPath.replace(/\.[^/.]+$/, '')}-md.webp`
        
        return (
          <link
            key={index}
            rel="preload"
            as="image"
            href={optimizedPath}
            type="image/webp"
          />
        )
      })}
    </Helmet>
  )
} 