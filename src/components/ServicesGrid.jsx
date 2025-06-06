import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  useColorModeValue,
  Icon,
  Flex,
} from '@chakra-ui/react'
import OptimizedImage from './OptimizedImage'

export default function ServicesGrid({ title, description, services }) {
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const headingColor = useColorModeValue('green.500', 'gray.200')
  const cardBg = useColorModeValue('white', 'gray.800')

  return (
    <Box py={20} bg={useColorModeValue('white', 'gray.900')}>
      <Container maxW={'7xl'}>
        <Stack spacing={4} maxW={'3xl'} textAlign={'center'} mb={8} mx="auto">
          <Heading variant="section" color={headingColor}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'green.400',
                zIndex: -1,
              }}
            >
              {title}
            </Text>
          </Heading>
          <Text color={textColor} fontSize={'xl'}>
            {description}
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {services.map((service, index) => (
            <Box
              key={index}
              bg={cardBg}
              boxShadow={'xl'}
              rounded={'xl'}
              p={6}
              position="relative"
              transition="all 0.3s"
              _hover={{
                transform: 'translateY(-5px)',
                boxShadow: '2xl',
              }}
            >
              <Flex direction={{ base: 'column', md: 'row' }} gap={6}>
                <Box
                  position="relative"
                  width={{ base: '100%', md: '140px' }}
                  height={{ base: '140px', md: '140px' }}
                  borderRadius="lg"
                  overflow="hidden"
                  flexShrink={0}
                >
                  <OptimizedImage
                    src={service.image}
                    alt={service.title}
                    objectFit="cover"
                    width="100%"
                    height="100%"
                  />
                </Box>
                <Box flex="1">
                  <Icon
                    as={service.icon}
                    w={8}
                    h={8}
                    color="green.400"
                    mb={4}
                  />
                  <Heading fontSize={'xl'} mb={4} color={headingColor}>
                    {service.title}
                  </Heading>
                  <Text color={textColor}>
                    {service.description}
                  </Text>
                </Box>
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
} 