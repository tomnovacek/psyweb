import { useEffect } from 'react'

export default function StructuredData({ type }) {
  const getStructuredData = () => {
    switch (type) {
      case 'MedicalBusiness':
        return {
          '@context': 'https://schema.org',
          '@type': 'MedicalBusiness',
          name: 'Tomáš Nováček - Professional Psychotherapist',
          description: 'Professional psychotherapy services in Prague. Specializing in individual therapy, couples counseling, and family therapy.',
          url: 'https://tomnovacek.cz',
          telephone: '+420 123 456 789',
          email: 'info@tomnovacek.cz',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Example Street 123',
            addressLocality: 'Prague',
            postalCode: '110 00',
            addressCountry: 'CZ'
          },
          priceRange: '$$',
          openingHours: 'Mo-Fr 09:00-17:00'
        }
      case 'Person':
        return {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Tomáš Nováček',
          jobTitle: 'Professional Psychotherapist',
          worksFor: {
            '@type': 'Organization',
            name: 'Tomáš Nováček - Professional Psychotherapist'
          },
          description: 'Licensed psychotherapist with extensive experience in helping individuals navigate through life\'s challenges and achieve personal growth.',
          url: 'https://tomnovacek.cz',
          sameAs: [
            'https://www.linkedin.com/in/tomnovacek',
            'https://www.facebook.com/tomnovacek'
          ]
        }
      default:
        return null
    }
  }

  useEffect(() => {
    const structuredData = getStructuredData()
    if (!structuredData) return

    // Remove any existing JSON-LD script
    const existingScript = document.querySelector('script[type="application/ld+json"]')
    if (existingScript) {
      existingScript.remove()
    }

    // Create and append new JSON-LD script
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)

    // Cleanup on unmount
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [type])

  return null
} 