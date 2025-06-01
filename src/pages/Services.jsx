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
  Center
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { 
  FaArrowRight,
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
  FaIdCard,
  FaMoneyBill,
  FaMoneyBillAlt,
  FaHandHoldingHeart
} from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'
import OptimizedImage from '../components/OptimizedImage'
import SEO from '../components/SEO'
import StructuredData from '../components/StructuredData'
import HeroTextBox from '../components/HeroTextBox'
import PricingCard from '../components/PricingCard'
import ServicesGrid from '../components/ServicesGrid'

export default function Services() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  const heroCardBg = useColorModeValue('whiteAlpha.200', 'blackAlpha.200')
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const headingColor = useColorModeValue('green.500', 'gray.200')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box bg={bgColor}>
      <SEO
        title="Služby | Tomáš Nováček - Psychoterapie"
        description="Profesionální psychoterapeutické služby v centru Brna. Individuální terapie pro dospělé, pro podporu osobního růstu, při úzkosti, depresi a vztahových problémech."
        keywords="psychoterapie, poradenství, Brno, individuální terapie, párová terapie, online konzultace"
        image="room.jped"
        preloadImages={[
          'room.jpeg',  // Hero background
          'tom1.png'  // Hero portrait
        ]}
      />
      <StructuredData type="MedicalBusiness" />

      {/* Hero Section */}
      <Box position="relative" width="100%" height={{ base: "auto", md: "calc(100vh - 224px)" }} overflow="hidden">
        {/* Background Image */}
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          zIndex={0}
        >
          <OptimizedImage
            src="/src/assets/img/room.jpeg"
            alt="Terapeutická místnost"
            objectFit="cover"
            width="1920"
            height="1080"
            priority={true}
            fetchpriority="high"
            loading="eager"
            decoding="sync"
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover'
            }}
          />
          <Box
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            bg="blackAlpha.200"
            backdropFilter="blur(3px)"
          />
        </Box>

        {/* Content Container */}
        <Container maxW="7xl" height="100%" position="relative" zIndex={1}>
          <Flex
            height="100%"
            justify="center"
            align="center"
            direction={{ base: 'column', md: 'row' }}
            gap={8}
            pt={{ base: 10, md: 28 }}
            mt={{ base: 0, md: 0 }}
          >
            {/* Text Box */}
            <HeroTextBox
              title="Moje služby"
              titleAccent="Podmínky"
              description="Nabízím terapeutická sezení na podporu vašeho duševního zdraví a osobního růstu. Společně prozkoumáme vaše potřeby a vytvoříme plán, který Vám pomůže, aby jste žili plnější a spokojenější život."
            />

            {/* Portrait Image */}
            <Box
              flex="1"
              maxW="2xl"
              position="relative"
              bg="transparent"
              height="100%"
              minH={{ base: "400px", md: "500px" }}
              display="flex"
            >
              <Box
                width="100%"
                mt="auto"
              >
                <OptimizedImage
                  src="tom1.png"
                  alt="Tom Nováček"
                  objectFit="cover"
                  width="100%"
                  height="auto"
                  priority="true"
                  style={{
                    mixBlendMode: 'normal',
                    backgroundColor: 'transparent',
                    filter: 'brightness(1.1)'
                  }}
                />
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Areas of Expertise */}
      <ServicesGrid
        title="Nejčastější témata"
        description="S klienty se nejčastějí věnujeme následujícím otázkám."
        services={[
          {
            title: 'Osobní rozvoj',
            description: 'Bezpečný prostor pro zpracování traumatických zkušeností.',
            icon: FaSeedling,
            image: 'healing-space.webp'
          },
          {
            title: 'Sebevědomí a vztah k sobě',
            description: 'Bezpečný prostor pro zpracování traumatických zkušeností.',
            icon: FaHandHoldingHeart,
            image: 'safe-space.webp'
          },
          {
            title: 'Úzkost a deprese',
            description: 'Osobní sezení zaměřená na vaše specifické potřeby a cíle.',
            icon: FaUserShield,
            image: 'stress.webp'
          },
          {
            title: 'Stres a jeho zvládání',
            description: 'Podpora při zvládání úzkosti a deprese, rozvoj strategií zvládání.',
            icon: FaHeartbeat,
            image: 'mindfulness.webp'
          },
          {
            title: 'Vztahové poradenství',
            description: 'Podpora párů v budování zdravých a naplňujících vztahů.',
            icon: FaUsers,
            image: 'relationships.webp'
          },
          {
            title: 'Zpracování složitých životních situací',
            description: 'Bezpečný prostor pro zpracování traumatických zkušeností.',
            icon: FaExchangeAlt,
            image: 'family.webp'
          },
        ]}
      />

      {/* What to Expect Section */}
      <Box py={20} bg={cardBg}>
        <Container maxW={'7xl'}>
          <Stack spacing={8}>
            <Stack spacing={4} textAlign={'center'} maxW={'3xl'} mx="auto">
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
                  Jak probíhají terapeutická sezení
                </Text>
              </Heading>
              <Text color={textColor} fontSize={'xl'}>
                Společně vytvoříme bezpečný prostor pro váš osobní růst a uzdravení.
              </Text>
            </Stack>

            <Flex
              direction={{ base: 'column', lg: 'row' }}
              gap={10}
              align="center"
              justify="center"
            >
              <Box flex="1" maxW="2xl">
                <Stack spacing={6}>
                  <Box>
                    <Flex align="center" gap={3} mb={4}>
                      <Icon as={FaInfoCircle} w={8} h={8} color="green.400" />
                      <Heading color={headingColor} fontSize={'xl'}>Úvodní konzultace</Heading>
                    </Flex>
                    <Text color={textColor} fontSize={'lg'}>
                      Vaše první sezení je příležitostí, abychom se navzájem poznali a prodiskutovali vaše cíle pro terapii. Probereme vaši historii, současné trápění a zformuluje základ plánu terapie.
                    </Text>
                  </Box>
                  <Box>
                    <Flex align="center" gap={3} mb={4}>
                      <Icon as={FaClock} w={8} h={8} color="green.400" />
                      <Heading color={headingColor} fontSize={'xl'}>Délka a frekvence</Heading>
                    </Flex>
                    <Text color={textColor} fontSize={'lg'}>
                      Standardní sezení trvá 50 minut. Frekvence sezení je obvykle týdenní nebo čtrnáctidenní, v závislosti na vašich potřebách a cílech.
                    </Text>
                  </Box>
                </Stack>
              </Box>
              <Box
                flex="1"
                maxW="2xl"
                position="relative"
                minH="400px"
                display={{ base: 'none', lg: 'flex' }}
                alignItems="center"
                justifyContent="center"
              >
                <OptimizedImage
                  src="tom1.png"
                  alt="Tom Nováček"
                  objectFit="cover"
                  width="70%"
                  height="70%"
                  borderRadius="lg"
                />
              </Box>
            </Flex>
          </Stack>
        </Container>
      </Box>

      {/* Pricing Section */}
      <Box py={20} bg={bgColor} id="pricing" >
        <Container maxW={'7xl'}>
          <Stack spacing={4} maxW={'3xl'} textAlign={'center'} mb={20} mx="auto">
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
                Ceník služeb
              </Text>
            </Heading>
            <Text color={textColor} fontSize={'xl'}>
              Transparentní ceny pro všechny služby. Platba je možná v hotovosti nebo převodem.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {[
              {
                title: 'Individuální terapie',
                price: '1 100 Kč',
                duration: '50 minut',
                description: 'Standardní terapeutické sezení.',
                features: [
                  'Osobní setkání v terapeutické místnosti',
                  'Individuální přístup',
                  'Bezpečný a důvěrný prostor',
                ],
                icon: FaUserFriends,
                image: 'room.jpeg',
                popular: true
              },
              {
                title: 'Online terapie',
                price: '1 200 Kč',
                duration: '50 minut',
                description: 'Terapeutické sezení přes video hovor pro vaše pohodlí.',
                features: [
                  'Bezpečné video hovory',
                  'Komfort vašeho domova',
                  'Dostupnost odkudkoliv'
                ],
                icon: FaVideo,
                image: 'laptop2.jpg'
              }
            ].map((service, index) => (
              <PricingCard key={index} {...service} />
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Insurance & Payment Section */}
      <Box py={20} bg={cardBg}>
        <Container maxW={'7xl'}>
          <Stack spacing={8}>
            <Stack spacing={4} textAlign={'center'} maxW={'3xl'} mx="auto">
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
                  Platba
                </Text>
              </Heading>
              <Text color={textColor} fontSize={'xl'}>
                Informace o možnostech placení.
              </Text>
            </Stack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Box>
                <Flex align="center" gap={3} mb={4}>
                  <Icon as={FaIdCard} w={8} h={8} color="green.400" />
                  <Heading color={headingColor} fontSize={'xl'}>Zdravotní pojištění</Heading>
                </Flex>
                <Text color={textColor} fontSize={'lg'}>
                  Služby si klienti hradí z vlastních prostředků. Nicméně, některé pojišťovny částečně přispívají na psychoterapii v rámci svych nadstandardních preventivních programů. Jsem registrován v rámci České Asociace pro Psychoterapii tak, aby klienti mohli tyto výhody čerpat. Doporučuji kontaktovat vaši pojišťovnu pro více informací.
                </Text>
              </Box>
              <Box>
                <Flex align="center" gap={3} mb={4}>
                  <Icon as={FaMoneyBillAlt} w={8} h={8} color="green.400" />
                  <Heading color={headingColor} fontSize={'xl'}>Způsoby platby</Heading>
                </Flex>
                <Text color={textColor} fontSize={'lg'}>
                  Platba je možná v hotovosti nebo převodem na účet. Obvykle vystavuji fakturu po sezení a zasílám jí emailem. Pro více informací o platbách mě neváhejte kontaktovat.
                </Text>
              </Box>
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box py={20} bg={bgColor}>
        <Container maxW={'7xl'}>
          <Stack
            spacing={8}
            align="center"
            textAlign="center"
            maxW={'3xl'}
            mx="auto"
          >
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
                Vydejme se spolu na cestu
              </Text>
            </Heading>
            <Text color={textColor} fontSize={'xl'} maxW={'2xl'}>
              První krok je často ten nejtěžší. Domluvte si úvodní konzultaci a společně prozkoumáme, jak vám mohu pomoci.
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}
              pt={4}
            >
              <Button
                as={RouterLink}
                to="/calendar"
                variant="cta"
                leftIcon={<FaCalendarAlt />}
              >
                Objednat konzultaci
              </Button>
              <Button
                as={RouterLink}
                to="/about"
                variant="ctaOutline"
                rightIcon={<FaArrowRight />}
              >
                Více o mně
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
} 