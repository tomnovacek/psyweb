import { useState, useEffect, useRef } from 'react'
import { Box, Text } from '@chakra-ui/react'

export default function Map() {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const mapRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '200px', // Načíst mapu 200px před tím, než se dostane do viewportu
        threshold: 0.1
      }
    )

    if (mapRef.current) {
      observer.observe(mapRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <Box
      ref={mapRef}
      width="100%"
      height="250px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      position="relative"
      bg="gray.100"
    >
      {/* Placeholder while iframe loads */}
      {!isLoaded && (
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="gray.100"
          zIndex={1}
        >
          <Text color="gray.500">Načítání mapy...</Text>
        </Box>
      )}
      
      {isVisible && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.123456789012!2d16.6075!3d49.1917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4712944c1c1c1c1c%3A0x1234567890abcdef!2sSukova%204%2C%20602%2000%20Brno-st%C5%99ed!5e0!3m2!1scs!2scz!4v1234567890!5m2!1scs!2scz"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Umístění ordinace"
          aria-label="Google Maps zobrazující umístění ordinace"
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </Box>
  )
} 