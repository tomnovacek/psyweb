import { Helmet } from 'react-helmet-async'

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  author = 'Tom Novacek',
  siteName = 'Tom Novacek - Psychotherapy',
}) => {
  const defaultDescription = 'Professional psychotherapy services in Prague, Czech Republic. Specializing in individual therapy, anxiety, depression, and trauma support.'
  const defaultKeywords = 'psychotherapy, mental health, therapy, counseling, Prague, Czech Republic, anxiety, depression, trauma, personal growth'
  const defaultImage = '/src/assets/img/tom-home.webp'

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title} | {siteName}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="author" content={author} />

      {/* Open Graph meta tags */}
      <meta property="og:title" content={`${title} | ${siteName}`} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | ${siteName}`} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />

      {/* Additional meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
    </Helmet>
  )
}

export default SEO 