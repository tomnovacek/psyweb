import {
  Box,
  Stack,
  Text,
  Link,
  useColorModeValue,
  SimpleGrid,
  Heading,
  Icon,
  Container,
} from '@chakra-ui/react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInbox, FaUser } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'
import OptimizedImage from './OptimizedImage'
import Map from './Map'

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.200', 'gray.800')}
      color={useColorModeValue('gray.700', 'gray.200')}
      borderTop={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      width="100vw"
    >
      <Box py={10} px={{ base: 4, md: 8 }}>
        <Container maxW="1680px">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {/* Navigation Links */}
            <Stack align={'flex-start'}>
              <Heading fontSize={'lg'} mb={4}>Navigace</Heading>
              <Link as={RouterLink} to="/">Domů</Link>
              <Link as={RouterLink} to="/about">O mně</Link>
              <Link as={RouterLink} to="/services">Služby</Link>
              <Link as={RouterLink} to="/calendar">Kalendář</Link>
              <Link as={RouterLink} to="/blog">Blog</Link>
            </Stack>

            {/* Google Maps */}
            <Stack align={'center'}>
              <Heading fontSize={'lg'} mb={4}>Mapa</Heading>
              <Box w="100%" minH="300px" maxW="350px">
                <Map />
              </Box>
              <Text fontSize="sm" color="gray.500" mt={2}>
                Sukova 4, 602 00 Brno-střed
              </Text>
            </Stack>

            {/* Contact Information */}
            <Stack align={'flex-end'}>
              <Heading fontSize={'lg'} mb={4}>Kontakt</Heading>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Icon as={FaUser} />
                <Text>Tomáš Nováček</Text>
              </Stack>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Icon as={FaPhone} />
                <Text>+420 602 773 440</Text>
              </Stack>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Icon as={FaEnvelope} />
                <Text><a href="mailto:terapie@tomnovacek.com">terapie@tomnovacek.com</a></Text>
              </Stack>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Icon as={FaMapMarkerAlt} />
                <Text>Sukova 4, Brno, Česká republika</Text>
              </Stack>
              {/* Logo */}
              <Box mt="auto">
                <OptimizedImage
                  src="CAP.png"
                  alt="ČAP Logo"
                  width={200}
                  height={80}
                  style={{ maxWidth: '200px', height: 'auto', display: 'block' }}
                />
              </Box>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>

      <Box
        borderTop={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        py={4}
        px={{ base: 4, md: 8 }}
      >
        <Container maxW="1680px">
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}
          >
            <Text>© 2025 Tom Nováček. Všechna práva vyhrazena</Text>
            <Stack direction={'row'} spacing={6}>
              <Link href={'/gdpr'}>Ochrana osobních údajů</Link>
              <Link href={'/cookies'}>Cookies</Link>
              <Link href={'/legal'}>Právní informace</Link>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
} 