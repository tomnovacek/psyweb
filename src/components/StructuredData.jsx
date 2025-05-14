import { Helmet } from 'react-helmet-async'

const StructuredData = ({ type, data }) => {
  const getStructuredData = () => {
    switch (type) {
      case 'Person':
        return {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Tomáš Nováček',
          jobTitle: 'Psychotherapist',
          worksFor: {
            '@type': 'Organization',
            name: 'Tomáš Nováček - Psychotherapy',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Brno',
              addressCountry: 'CZ'
            }
          },
          description: 'Professional psychotherapist specializing in individual therapy, anxiety, depression, and trauma support.',
          image: 'https://tomnovacek.com/src/assets/img/tom-home.webp',
          url: 'https://tomnovacek.com',
          sameAs: [
            'https://www.linkedin.com/in/tomnovacek',
            'https://www.facebook.com/tomnovacek'
          ]
        }

      case 'MedicalBusiness':
        return {
          '@context': 'https://schema.org',
          '@type': 'MedicalBusiness',
          name: 'Tomáš Nováček - Psychotherapy',
          image: 'https://tomnovacek.com/src/assets/img/tom-home.webp',
          url: 'https://tomnovacek.com',
          telephone: '+420123456789',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Sukova 4',
            addressLocality: 'Brno',
            postalCode: '60200',
            addressCountry: 'CZ'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: '49.1917',
            longitude: '16.6075'
          },
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday'
            ],
            opens: '09:00',
            closes: '17:00'
          },
          priceRange: '$$'
        }

      case 'BlogPosting':
        return {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: data.title,
          image: data.image,
          author: {
            '@type': 'Person',
            name: data.author.name
          },
          publisher: {
            '@type': 'Organization',
            name: 'Tomáš Nováček - Psychotherapy',
            logo: {
              '@type': 'ImageObject',
              url: 'https://tomnovacek.com/src/assets/img/CAP.png'
            }
          },
          datePublished: data.date,
          dateModified: data.date,
          description: data.excerpt,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': data.url
          }
        }

      default:
        return null
    }
  }

  const structuredData = getStructuredData()

  if (!structuredData) return null

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  )
}

export default StructuredData 