"use client"
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Flex,
  Icon,
  Spinner,
  Button,
  Link as ChakraLink,
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { FaCalendarAlt, FaEnvelope, FaArrowRight } from 'react-icons/fa'
import NextLink from 'next/link'
import dynamic from 'next/dynamic'
const SEO = dynamic(() => import('@/components/SEO'), { ssr: false })
import SecureEmail from '@/components/SecureEmail'
import SecureEmailButton from '@/components/SecureEmailButton'

export default function Calendar() {
  const [isLoading, setIsLoading] = useState(true)
  const [retryCount, setRetryCount] = useState(0)
  
  // Static colors for Chakra UI v3 compatibility
  const bgColor = 'gray.50'
  const cardBg = 'white'
  const textColor = 'gray.600'
  const headingColor = 'green.600'

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        setRetryCount(prev => prev + 1)
        if (retryCount >= 2) {
          // Simple alert instead of toast for v3 compatibility
          alert("Problém s načítáním kalendáře. Zkuste to prosím znovu nebo nás kontaktujte emailem.")
        }
      }
    }, 10000)
    return () => clearTimeout(timer)
  }, [isLoading, retryCount])

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  return (
    <Box bg={bgColor}>
      <SEO
        title="Rezervace termínu"
        description="Rezervujte si termín terapeutického sezení online. Vyberte si čas, který vám vyhovuje, přímo v kalendáři."
        keywords="rezervace, termín, terapie, online rezervace, kalendář, sezení"
        url="https://tomnovacek.com/calendar"
      >
        <></>
      </SEO>
      <Box py={20}>
        <Container maxW={'7xl'}>
          <Stack gap={4} maxW={'3xl'} textAlign={'center'} mb={10} mx="auto">
            <Heading as="h1">
                Domluvte si sezení
            </Heading>
            <Text color={textColor} fontSize={'xl'}>
              Rezervujte si termín, který vám vyhovuje přímo v kalendáři. <br />
              Pokud nenajdete vyhovující termín, nebo preferujete osobní kontakt emailem, napiště na <SecureEmail email="terapie@tomnovacek.com" displayText="terapie@tomnovacek.com" color="green.400" />.
            </Text>
          </Stack>
          <Box
            bg={cardBg}
            borderRadius="lg"
            overflow="hidden"
            boxShadow="2xl"
            position="relative"
            minH="600px"
          >
            {isLoading && (
              <Flex
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg="whiteAlpha.900"
                zIndex={2}
                direction="column"
                align="center"
                justify="center"
                gap={4}
              >
                <Spinner
                  size="xl"
                  color="green.400"
                />
                <Text color={textColor}>Načítání kalendáře...</Text>
              </Flex>
            )}
            <Box className="calendar-container">
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ00ICmDJd6LyX3TG07oRvH7ni-wewoDDs0x0UXJMlWhkKUk1OBWw9wqj-TyqJgYdLOscITBiFtF?gv=true&color=%234CAF50"
                style={{
                  border: 0,
                  width: '100%',
                  height: '700px',
                  visibility: isLoading ? 'hidden' : 'visible',
                  filter: 'hue-rotate(240deg) saturate(1.2)',
                }}
                allowFullScreen
                onLoad={handleIframeLoad}
                title="Rezervační kalendář"
                loading="lazy"
              />
            </Box>
          </Box>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            gap={4}
            mt={8}
            justify="center"
          >
            <SecureEmailButton
              email="terapie@tomnovacek.com"
              leftIcon={<FaEnvelope />}
              rightIcon={undefined}
              colorScheme="green"
              variant="outline"
              size="lg"
              rounded={'full'}
              px={8}
              _hover={{
                bg: 'green.400',
                color: 'white',
              }}
            >
              Kontaktujte mě emailem
            </SecureEmailButton>
            <NextLink href="/services" passHref legacyBehavior>
              <Button
                as="a"
                colorScheme="green"
                variant="outline"
                size="lg"
                rounded={'full'}
                px={8}
                _hover={{
                  bg: 'green.400',
                  color: 'white',
                }}
              >
                Moje služby
              </Button>
            </NextLink>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
} 