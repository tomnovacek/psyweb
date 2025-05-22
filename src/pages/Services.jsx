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
  FaUserFriends, 
  FaVideo, 
  FaCalendarAlt, 
  FaCashRegister,
  FaCreditCard, 
  FaShieldAlt,
  FaClock,
  FaInfoCircle,
  FaHeartbeat,
  FaUserShield,
  FaExchangeAlt,
  FaBalanceScale,
  FaSeedling,
  FaUsers,
  FaIdCard
} from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'
import SEO from '../components/SEO'
import StructuredData from '../components/StructuredData'

export default function Services() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const headingColor = useColorModeValue('gray.700', 'white')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box bg={bgColor}>
      <SEO
        title="Tomáš Nováček - Psychoterapeut | Brno"
        description="Psychoterapie a poradenství v centru Brna. Nabízím individuální terapii, léčbu úzkosti, podporu při depresi a poradenství při traumatu."
        keywords="psychoterapeutické služby, individuální terapie, léčba úzkosti, podpora při depresi, poradenství při traumatu, Brno, Česká republika"
        url="https://tomnovacek.com/services"
        image="/src/assets/img/room.jpeg"
      />
      <StructuredData type="MedicalBusiness" />
      {/* Hero Section */}
      <Box py={20} bg={cardBg}>
        <Container maxW={'7xl'}>
          <Stack spacing={4} maxW={'3xl'} textAlign={'center'} mx="auto">
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
                Moje služby a podmínky
              </Text>
            </Heading>
            <Text color={textColor} fontSize={'xl'}>
              Nabízím terapeutické sezení na podporu vašeho duševního zdraví a osobního růstu.
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Areas of Expertise */}
      <Box py={20} bg={bgColor}>
        <Container maxW={'7xl'}>
          <Stack spacing={4} maxW={'3xl'} textAlign={'center'} mb={10} mx="auto">
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
                S čím vám mohu pomoci
              </Text>
            </Heading>
            <Text color={textColor} fontSize={'xl'}>
              Specializuji se na pomoc klientům při zvládání různých psychických obtíží a životních změn.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {[
              {
                title: 'Úzkost & Deprese',
                icon: FaHeartbeat
              },
              {
                title: 'Trauma & PTSD',
                icon: FaUserShield
              },
              {
                title: 'Vztahové problémy',
                icon: FaUsers
              },
              {
                title: 'Životní změny',
                icon: FaExchangeAlt
              },
              {
                title: 'Zvládání stresu',
                icon: FaBalanceScale
              },
              {
                title: 'Osobní růst',
                icon: FaSeedling
              },
            ].map((expertise, index) => (
              <Box
                key={index}
                bg={cardBg}
                boxShadow={'xl'}
                rounded={'xl'}
                p={6}
                textAlign="center"
                transition="all 0.3s"
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow: '2xl',
                }}
              >
                <Icon
                  as={expertise.icon}
                  w={8}
                  h={8}
                  color="green.400"
                  mb={3}
                />
                <Text fontSize={'lg'} fontWeight="medium" color={headingColor}>
                  {expertise.title}
                </Text>
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
                  Jak probíhají terapeutická sezení
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
                    <Heading fontSize={'xl'}>Úvodní konzultace</Heading>
                  </Flex>
                  <Text color={textColor} fontSize={'lg'}>
                    Vaše první sezení je příležitostí, abychom se navzájem poznali a prodiskutovali vaše cíle pro terapii. Probereme vaši historii, současné trápění a zformuluje základ plánu terapie.
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
                    <Heading fontSize={'xl'}>Délka a frekvence</Heading>
                  </Flex>
                  <Text color={textColor} fontSize={'lg'}>
                    Standardní sezení trvá 50 minut. Frekvence sezení je obvykle týdenní nebo čtrnáctidenní, v závislosti na vašich potřebách a cílech.
                  </Text>
                </Stack>
              </Box>
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>
                  
      {/* Pricing Section */}
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
                  Ceník služeb
                </Text>
              </Heading>
            </Stack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {[
                {
                  title: 'Individuální terapie',
                  price: '1100 Kč',
                  duration: '50 minut',
                  description: 'Individuální sezení zaměřená na váš osobní růst a uzdravení',
                  icon: FaUserFriends,
                  features: [
                    'Osobní léčebný plán',
                    'Týdenní nebo čtrnáctidenní sezení',
                    'Flexibilní rozvrh',
                    'Dostupná zabezpečená video sezení',
                    'Emailová podpora mezi sezeními',
                  ],
                  badge: 'Nejoblíbenější',
                },
                {
                  title: 'Online terapie',
                  price: '1200 Kč',
                  duration: '50 minut',
                  description: 'Individuální online sezení zaměřená na váš osobní růst a uzdravení',
                  icon: FaVideo,
                  features: [
                    'Hodnocení vztahu',
                    'Rozvoj komunikačních dovedností',
                    'Strategie řešení konfliktů',
                    'Týdenní nebo čtrnáctidenní sezení',
                    'Dostupná zabezpečená video sezení',
                  ],
                  badge: 'Pohodlné',
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
                      to="/calendar"
                      colorScheme={'green'}
                      size={'lg'}
                      leftIcon={<FaCalendarAlt />}
                    >
                      Rezervovat sezení
                    </Button>
                  </Stack>
                </Box>
              ))}
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
                  Platby
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
                  <Icon as={FaIdCard} w={6} h={6} color="green.400" />
                  <Heading fontSize={'xl'}>Platba</Heading>
                </Flex>
                <Text color={textColor} fontSize={'lg'}>
                  Nejse zdravotnické zařízení. Zákazníci platí za sluby přímou platbou.
                </Text>
                <Divider />
                <Flex align="center" gap={3}>
                  <Icon as={FaCashRegister} w={6} h={6} color="green.400" />
                  <Heading fontSize={'xl'}>Platební metody</Heading>
                </Flex>
                <Text color={textColor} fontSize={'lg'}>
                  Platba je možná v hotovosti nebo převodem na můj účet. Posílám fakturu s qr kódem pro zjednodušení zadání platební operace.
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
      <Stack align={'center'} py={10}>
            <Button
              as={RouterLink}
              to="/calendar"
              colorScheme={'green'}
              variant={'solid'}
              size={'lg'}
              _hover={{
                bg: 'green.400',
                color: 'white',
              }}
            >
              Objednat konzultaci
            </Button>
          </Stack>
    </Box>
  )
} 