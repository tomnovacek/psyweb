"use client"
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Icon,
  SimpleGrid,
  Link as ChakraLink,
} from '@chakra-ui/react'
import { FaHome, FaArrowLeft, FaSearch, FaEnvelope } from 'react-icons/fa'
import NextLink from 'next/link'
import dynamic from 'next/dynamic'
const SEO = dynamic(() => import('@/components/SEO'), { ssr: false })
import SecureEmail from '@/components/SecureEmail'

export default function NotFound() {
  // Static colors for Chakra UI v3 compatibility
  const bgColor = 'gray.50'
  const cardBg = 'white'
  const textColor = 'gray.600'
  const headingColor = 'green.600'
  const borderColor = 'gray.200'

  return (
    <Box bg={bgColor} minH="calc(100vh - 64px)" display="flex" alignItems="center">
      <SEO
        title="Stránka nenalezena | 404"
        description="Požadovaná stránka nebyla nalezena. Vraťte se na hlavní stránku nebo kontaktujte Tomáše Nováčka."
        keywords="404, stránka nenalezena, chyba, psychoterapie, Brno"
        url="https://tomnovacek.com/404"
      >
        <></>
      </SEO>

      <Container maxW="container.md" py={10}>
        <VStack gap={8} textAlign="center">
          {/* 404 Number */}
          <Box>
            <Heading
              as="h1"
              fontSize={{ base: '8xl', md: '9xl' }}
              fontWeight="bold"
              color={headingColor}
              lineHeight="0.8"
              opacity="0.1"
              position="relative"
            >
              404
            </Heading>
            <Text
              fontSize={{ base: '2xl', md: '3xl' }}
              fontWeight="semibold"
              color={headingColor}
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              whiteSpace="nowrap"
            >
              Stránka nenalezena
            </Text>
          </Box>

          {/* Main Message */}
          <VStack gap={4} maxW="2xl">
            <Heading as="h2" size="xl" color={headingColor}>
              Omlouváme se, ale požadovaná stránka nebyla nalezena
            </Heading>
            <Text fontSize="lg" color={textColor}>
              Stránka, kterou hledáte, možná byla přesunuta, smazána nebo jste zadali nesprávnou adresu.
            </Text>
          </VStack>

          {/* Action Buttons */}
          <HStack gap={4} flexWrap="wrap" justify="center">
            <NextLink href="/" passHref legacyBehavior>
              <Button
                as="a"
                colorScheme="green"
                size="lg"
                rounded="full"
                px={8}
              >
                <Icon as={FaHome} mr={2} />
                Domů
              </Button>
            </NextLink>
            <Button
              onClick={() => window.history.back()}
              colorScheme="green"
              variant="outline"
              size="lg"
              rounded="full"
              px={8}
            >
              <Icon as={FaArrowLeft} mr={2} />
              Zpět
            </Button>
          </HStack>

          {/* Helpful Links */}
          <Box
            bg={cardBg}
            p={8}
            borderRadius="xl"
            border="1px"
            borderColor={borderColor}
            w="full"
            maxW="2xl"
          >
            <VStack gap={6}>
              <Heading as="h3" size="md" color={headingColor}>
                Možná hledáte:
              </Heading>
              
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="full">
                <NextLink href="/services" passHref legacyBehavior>
                  <ChakraLink
                    as="a"
                    p={4}
                    borderRadius="lg"
                    border="1px"
                    borderColor={borderColor}
                    _hover={{
                      bg: 'gray.50',
                      borderColor: 'green.400',
                      transform: 'translateY(-2px)',
                    }}
                    transition="all 0.2s"
                    textAlign="center"
                    display="block"
                  >
                    <VStack gap={2}>
                      <Icon as={FaSearch} color="green.400" boxSize={6} />
                      <Text fontWeight="semibold">Moje služby</Text>
                      <Text fontSize="sm" color={textColor}>
                        Psychoterapie a poradenství
                      </Text>
                    </VStack>
                  </ChakraLink>
                </NextLink>

                <NextLink href="/about" passHref legacyBehavior>
                  <ChakraLink
                    as="a"
                    p={4}
                    borderRadius="lg"
                    border="1px"
                    borderColor={borderColor}
                    _hover={{
                      bg: 'gray.50',
                      borderColor: 'green.400',
                      transform: 'translateY(-2px)',
                    }}
                    transition="all 0.2s"
                    textAlign="center"
                    display="block"
                  >
                    <VStack gap={2}>
                      <Icon as={FaHome} color="green.400" boxSize={6} />
                      <Text fontWeight="semibold">O mně</Text>
                      <Text fontSize="sm" color={textColor}>
                        Informace o terapeutovi
                      </Text>
                    </VStack>
                  </ChakraLink>
                </NextLink>

                <NextLink href="/calendar" passHref legacyBehavior>
                  <ChakraLink
                    as="a"
                    p={4}
                    borderRadius="lg"
                    border="1px"
                    borderColor={borderColor}
                    _hover={{
                      bg: 'gray.50',
                      borderColor: 'green.400',
                      transform: 'translateY(-2px)',
                    }}
                    transition="all 0.2s"
                    textAlign="center"
                    display="block"
                  >
                    <VStack gap={2}>
                      <Icon as={FaSearch} color="green.400" boxSize={6} />
                      <Text fontWeight="semibold">Rezervace</Text>
                      <Text fontSize="sm" color={textColor}>
                        Online kalendář
                      </Text>
                    </VStack>
                  </ChakraLink>
                </NextLink>

                <Box
                  p={4}
                  borderRadius="lg"
                  border="1px"
                  borderColor={borderColor}
                  textAlign="center"
                >
                  <VStack gap={2}>
                    <Icon as={FaEnvelope} color="green.400" boxSize={6} />
                    <Text fontWeight="semibold">Kontakt</Text>
                    <Box fontSize="sm" color={textColor}>
                      <SecureEmail email="terapie@tomnovacek.com" displayText="terapie@tomnovacek.com" />
                    </Box>
                  </VStack>
                </Box>
              </SimpleGrid>
            </VStack>
          </Box>

          {/* Additional Help */}
          <Text fontSize="sm" color={textColor} maxW="md">
            Pokud si myslíte, že se jedná o chybu, neváhejte nás kontaktovat a pomůžeme vám najít to, co hledáte.
          </Text>
        </VStack>
      </Container>
    </Box>
  )
} 