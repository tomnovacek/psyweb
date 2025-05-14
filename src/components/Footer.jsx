import {
  Box,
  Stack,
  Text,
  Link,
  useColorModeValue,
  SimpleGrid,
  Heading,
  Icon,
} from '@chakra-ui/react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'
import OptimizedImage from './OptimizedImage'

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      borderTop={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      width="100%"
    >
      <Box py={10} px={{ base: 4, md: 8 }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {/* Navigation Links */}
          <Stack align={'flex-start'}>
            <Heading fontSize={'lg'} mb={4}>Navigace</Heading>
            <Link as={RouterLink} to="/">Domů</Link>
            <Link as={RouterLink} to="/about">O mně</Link>
            <Link as={RouterLink} to="/services">Služby</Link>
            <Link as={RouterLink} to="/calendar">Kalendář</Link>
            <Link as={RouterLink} to="/blog">Blog</Link>
            <Link as={RouterLink} to="/contact">Kontakt</Link>
          </Stack>

          {/* Google Maps */}
          <Stack align={'center'}>
            <Heading fontSize={'lg'} mb={4}>Lokace</Heading>
            <Box
              width="100%"
              height="250px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              position="relative"
              bg="gray.100"
            >
              {/* Placeholder while iframe loads */}
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
                onLoad={(e) => {
                  // Hide placeholder when iframe loads
                  e.target.previousSibling.style.display = 'none';
                }}
              />
            </Box>
            <Text fontSize="sm" color="gray.500" mt={2}>
              Sukova 4, 602 00 Brno-střed
            </Text>
          </Stack>

          {/* Contact Information */}
          <Stack align={'flex-end'}>
            <Heading fontSize={'lg'} mb={4}>Kontakt</Heading>
            <Stack direction={'row'} align={'center'} spacing={2}>
              <Icon as={FaPhone} />
              <Text>+420 602 773 440</Text>
            </Stack>
            <Stack direction={'row'} align={'center'} spacing={2}>
              <Icon as={FaEnvelope} />
              <Text>terapie@tomnovacek.com</Text>
            </Stack>
            <Stack direction={'row'} align={'center'} spacing={2}>
              <Icon as={FaMapMarkerAlt} />
              <Text>Brno, Česká republika</Text>
            </Stack>
            {/* Logo */}
            <Box mt="auto">
              <OptimizedImage
                src="/src/assets/img/CAP.png"
                alt="Logo CAP"
                size="xs"
                width="100px"
                height="auto"
              />
            </Box>
          </Stack>
        </SimpleGrid>
      </Box>

      <Box
        borderTop={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        py={4}
        px={{ base: 4, md: 8 }}
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>© 2025 Tom Nováček. Všechna práva vyhrazena</Text>
          <Stack direction={'row'} spacing={6}>
            <Link href={'#'}>Ochrana soukromí</Link>
            <Link href={'#'}>Podmínky služby</Link>
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
} 