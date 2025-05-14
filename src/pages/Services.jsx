import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  useColorModeValue,
  Button,
  List,
  ListItem,
  ListIcon,
  Icon,
  Flex,
  Badge,
  Divider,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { 
  FaUserMd, 
  FaVideo, 
  FaCalendarAlt, 
  FaCreditCard, 
  FaShieldAlt,
  FaClock,
  FaInfoCircle
} from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'

export default function Services() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const headingColor = useColorModeValue('gray.700', 'white')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box bg={bgColor}>
      {/* Hero Section */}
      <Box py={20} bg={cardBg}>
        <Container maxW={'7xl'}>
          <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}
            >
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
                Therapeutic Services
              </Text>
            </Heading>
            <Text color={textColor} fontSize={'xl'}>
              I offer a range of therapeutic services to support your mental health and personal growth journey. Each service is tailored to meet your unique needs and goals.
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Services Section */}
      <Box py={20} bg={bgColor}>
        <Container maxW={'7xl'}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {[
              {
                title: 'Individual Therapy',
                price: 'CZK 1100',
                duration: '50 minutes',
                description: 'One-on-one sessions focused on your personal growth and healing',
                icon: FaUserMd,
                features: [
                  'Personalized treatment plan',
                  'Weekly or bi-weekly sessions',
                  'Flexible scheduling',
                  'Secure video sessions available',
                  'Email support between sessions',
                ],
                badge: 'Most Popular',
              },
              {
                title: 'Online Therapy',
                price: 'CZK 1200',
                duration: '50 minutes',
                description: 'One-on-one sessions online focused on your personal growth and healing',
                icon: FaVideo,
                features: [
                  'Relationship assessment',
                  'Communication skills building',
                  'Conflict resolution strategies',
                  'Weekly or bi-weekly sessions',
                  'Secure video sessions available',
                ],
                badge: 'Convenient',
              },
            ].map((service, index) => (
              <Box
                key={index}
                bg={cardBg}
                boxShadow={'xl'}
                rounded={'xl'}
                p={8}
                position="relative"
                transition="all 0.3s"
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow: '2xl',
                }}
              >
                {service.badge && (
                  <Badge
                    position="absolute"
                    top={4}
                    right={4}
                    colorScheme="green"
                    px={3}
                    py={1}
                    rounded="full"
                    fontSize="sm"
                  >
                    {service.badge}
                  </Badge>
                )}
                <Stack spacing={6}>
                  <Flex align="center" gap={4}>
                    <Icon as={service.icon} w={8} h={8} color="green.400" />
                    <Heading
                      color={headingColor}
                      fontSize={'2xl'}
                      fontFamily={'body'}
                    >
                      {service.title}
                    </Heading>
                  </Flex>
                  <Text color={textColor}>{service.description}</Text>
                  <Box
                    borderWidth={1}
                    borderColor={borderColor}
                    rounded="lg"
                    p={4}
                    bg={useColorModeValue('gray.50', 'gray.700')}
                  >
                    <Text fontSize={'3xl'} fontWeight={'bold'} color={headingColor}>
                      {service.price}
                      <Text as="span" fontSize={'lg'} fontWeight={'normal'} color={textColor}>
                        /{service.duration}
                      </Text>
                    </Text>
                  </Box>
                  <List spacing={3}>
                    {service.features.map((feature, idx) => (
                      <ListItem key={idx}>
                        <ListIcon as={CheckCircleIcon} color="green.400" />
                        {feature}
                      </ListItem>
                    ))}
                  </List>
                  <Button
                    as={RouterLink}
                    to="/contact"
                    colorScheme={'green'}
                    size={'lg'}
                    leftIcon={<FaCalendarAlt />}
                  >
                    Schedule Session
                  </Button>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* What to Expect Section */}
      <Box py={20} bg={cardBg}>
        <Container maxW={'7xl'}>
          <Stack spacing={8}>
            <Stack spacing={4} textAlign={'center'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}
              >
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
                  What to Expect
                </Text>
              </Heading>
            </Stack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Box
                bg={useColorModeValue('gray.50', 'gray.700')}
                p={8}
                rounded="xl"
                boxShadow="md"
              >
                <Stack spacing={4}>
                  <Flex align="center" gap={3}>
                    <Icon as={FaInfoCircle} w={6} h={6} color="green.400" />
                    <Heading fontSize={'xl'}>Initial Consultation</Heading>
                  </Flex>
                  <Text color={textColor} fontSize={'lg'}>
                    Your first session is an opportunity for us to get to know each other and discuss your goals for therapy. We'll review your history, current concerns, and develop a personalized treatment plan.
                  </Text>
                </Stack>
              </Box>
              <Box
                bg={useColorModeValue('gray.50', 'gray.700')}
                p={8}
                rounded="xl"
                boxShadow="md"
              >
                <Stack spacing={4}>
                  <Flex align="center" gap={3}>
                    <Icon as={FaClock} w={6} h={6} color="green.400" />
                    <Heading fontSize={'xl'}>Ongoing Sessions</Heading>
                  </Flex>
                  <Text color={textColor} fontSize={'lg'}>
                    Regular sessions provide a consistent space for growth and healing. We'll work together to develop practical strategies and insights that you can apply in your daily life.
                  </Text>
                </Stack>
              </Box>
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      {/* Insurance & Payment Section */}
      <Box py={20} bg={bgColor}>
        <Container maxW={'7xl'}>
          <Stack spacing={8}>
            <Stack spacing={4} textAlign={'center'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}
              >
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
                  Insurance & Payment
                </Text>
              </Heading>
            </Stack>

            <Box
              bg={cardBg}
              p={8}
              rounded="xl"
              boxShadow="xl"
              maxW="3xl"
              mx="auto"
            >
              <Stack spacing={6}>
                <Flex align="center" gap={3}>
                  <Icon as={FaCreditCard} w={6} h={6} color="green.400" />
                  <Heading fontSize={'xl'}>Payment Information</Heading>
                </Flex>
                <Text color={textColor} fontSize={'lg'}>
                  I am an out-of-network provider. Many insurance plans offer partial reimbursement for out-of-network mental health services. I can provide you with a detailed receipt for insurance reimbursement.
                </Text>
                <Divider />
                <Flex align="center" gap={3}>
                  <Icon as={FaShieldAlt} w={6} h={6} color="green.400" />
                  <Heading fontSize={'xl'}>Accepted Payment Methods</Heading>
                </Flex>
                <Text color={textColor} fontSize={'lg'}>
                  Payment is due at the time of service, and I accept all major credit cards.
                </Text>
                <Button
                  as={RouterLink}
                  to="/contact"
                  colorScheme={'green'}
                  size={'lg'}
                  leftIcon={<FaInfoCircle />}
                  alignSelf={'center'}
                  mt={4}
                >
                  Contact for More Information
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
} 