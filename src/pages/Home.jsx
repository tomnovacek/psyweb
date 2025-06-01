import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  SimpleGrid,
  Image,
  useColorModeValue,
  Center,
  Flex,
  List,
  ListItem,
  ListIcon,
  Icon,
  Badge,
  Link,
  VStack,
  HStack,
  Divider,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { FaUserFriends, FaHeart, FaBrain, FaBalanceScale, FaComments, FaLightbulb, FaHandHoldingHeart, FaUserMd, FaVideo, FaCalendarAlt, FaCreditCard, FaShieldAlt, FaClock, FaInfoCircle, FaHeartbeat, FaArrowRight, FaUser, FaUserShield, FaExchangeAlt, FaSeedling, FaUsers, FaIdCard, FaMoneyBill, FaMoneyBillAlt } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { getAllPosts, getLatestPosts } from '../utils/blogUtils'
import OptimizedImage from '../components/OptimizedImage'
import OptimizedAvatar from '../components/OptimizedAvatar'
import SEO from '../components/SEO'
import StructuredData from '../components/StructuredData'
import { getOptimizedImagePath } from '../utils/getOptimizedImage'
import BlogCard from '../components/BlogCard'
import HeroTextBox from '../components/HeroTextBox'
import PricingCard from '../components/PricingCard'
import ServicesGrid from '../components/ServicesGrid'
import AboutCard from '../components/AboutCard'

export default function Home() {
  const [newestPosts, setNewestPosts] = useState([])
  const [loading, setLoading] = useState(true)

  // Move hooks to the top level
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  const heroCardBg = useColorModeValue('whiteAlpha.200', 'blackAlpha.200')
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const headingColor = useColorModeValue('green.500', 'gray.200')
  const serviceBg = useColorModeValue('green.100', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  useEffect(() => {
    const loadPosts = async () => {
      try {
        console.log('Načítání příspěvků...')
        const latestPosts = await getLatestPosts(3)
        console.log('Načtené příspěvky:', latestPosts)
        setNewestPosts(latestPosts)
      } catch (error) {
        console.error('Chyba při načítání příspěvků:', error)
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [])

  return (
    <>
      <SEO
        title="Tomáš Nováček - Psychoterapie | Centrum Brna"
        description="Psychoterapie v centru Brna. Specializace na individuální terapii pro dospělé. Objednejte si svou konzultaci ještě dnes."
        keywords="psychoterapie, poradenství, Brno, individuální terapie"
        image="tom1.png"
        preloadImages={[
          'forrest.webp',  // Hero background
          'tom1.png'  // Hero portrait
        ]}
      />
      <StructuredData type="MedicalBusiness" />
      <StructuredData type="Person" />

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
            src="forrest.webp"
            alt="Lesní cesta"
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
            backdropFilter="blur(2px)"
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
              title="Psychoterapie"
              titleAccent="Osobní růst"
              description="Vítejte, jmenuji se Tomáš Nováček. Věnuji se pomoci lidem překonávat životní výzvy a dosahovat osobního růstu. Společně s klienty se vydávám na cestu k hlubšímu porozumění sobě sama, svým vztahům a slepým uličkám, ve kterých se nacházejí. Snažím se, aby se na tomto putování cítili bezpečně a našli v sobě schopnost zahlédnout světlo nadějě prosvítající i potemnělým lesem."
              primaryText="Objednat konzultaci"
              primaryHref="/calendar"
              secondaryText="Moje služby"
              secondaryHref="/services"
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

      {/* About Section */}
      <Box py={20} bg={cardBg} position="relative" zIndex={2}>
        <Container maxW={'7xl'} centerContent>
          <Stack spacing={4} maxW={'6xl'} textAlign={'center'} mb={10}>
            <Heading variant="section" color={headingColor}>
              <Text as={'span'} position={'relative'}>
                O mně
              </Text>
            </Heading>
            <Text color={textColor} fontSize={'xl'}>
              Jsem psycholog a terapeut s multioborovým vzděláním a bohatými zkušenostmi v doprovázení lidí překonávajících své životní výzvy. Znalosti a perspektivy z různých profesních oblastí mi pomáhají nejprve pochopit klientovu situaci a následně společněpostupně rozšiřovat obzory o nové úhly pohledu, které mohou přinášet větší svobodu při hledání cesty vpřed.
            </Text>
          </Stack>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16} w="full">
            <AboutCard
              title="Moje praxe"
              description="Posledních sedm let se intenzivně věnuji psychologickému poradenství a čtyři roky praktikuji terapii. Moje odbornost je založena na důkladném vzdělání a kontinuálním profesním rozvoji. Absolvoval jsem dvouletý specializovaný výcvik v koučování a šestiletý certifikovaný výcvik v integrativní psychoterapii. Jsem také řádným členem České asociace pro psychoterapii - komunity, která klade důraz na etické standardy a vysokou kvalifikaci v oboru psychoterapie."
              image="room.jpeg"
              imageAlt="Terapeutická místnost"
              icon={FaUser}
              buttonText="Více o mně"
              buttonHref="/about"
              textColor={textColor}
            />
            <AboutCard
              title="Můj přístup"
              description="Věřím, že každý člověk má vnitřní zdroje, jak se vyrovnat s životními výzvami. Existují však chvíle, kdy se můžeme cítit uvězněni nebo bezmocní v řešení obtížných situací. V takových chvílích  podporuji klienty v pochopení jejich problémů a hledání efektivních způsobů, jak je překonat. Společně prozkoumáváme jejich osobní cestu k sebepoznání a odhalujeme vnitřní síly, které jim mohou pomoci žít plnější a spokojenější život."
              image="mountinHikeGroup.jpg"
              imageAlt="Skupina lidí na horách"
              icon={FaHandHoldingHeart}
              buttonText="Moje služby"
              buttonHref="/services"
              textColor={textColor}
            />
          </SimpleGrid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box py={20} bg={bgColor}>
        <Container maxW={'7xl'} centerContent>
          <Stack spacing={4} maxW={'6xl'} textAlign={'center'} mb={10}>
            <Heading variant="section" color={headingColor}>
              <Text as={'span'} position={'relative'} zIndex={1}>
                S čím vám mohu pomoci
              </Text>
            </Heading>
            <Text color={textColor} fontSize={'xl'}>
              Nejčastější témata, které mi lidé přinášejí jsou problémy s blízkými vztahy, propady nálady, úzkosti, stres a nízké sebevědomí.
            </Text>
          </Stack>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w="full">
            {[
              {
                icon: FaBrain,
                title: 'Osobní potíže',
                description: 'Individuální terapie',
                features: [
                  'Úzkost a deprese',
                  'Výkyvy nálady',
                  'Trauma a PTSD',
                  'Sebevědomí',
                  'Vztah k sobě'
                ]
              },
              {
                icon: FaUserFriends,
                title: 'Vztahy a vztahové problémy',
                description: 'Porozumění a řešení vztahových potíží.',
                features: [
                  'Potřeby ve vztazích',
                  'Komunikační problémy',
                  'Upřednostňování druhých',
                  'Mezigenerační vztahy',
                  'Intimita a vztahové potíže'
                ]
              },
              {
                icon: FaHeartbeat,
                title: 'Zvládání stresu',
                description: 'Strategie zvládání stresu.',
                features: [
                  'Zdravotní potíže',
                  'Životní změny',
                  'Nároky na sebe',
                  'Strategie zvládání',
                  'Balancování práce a osobního života'
                ]
              }
            ].map((service, index) => (
              <Box
                key={index}
                bg={cardBg}
                boxShadow={'2xl'}
                rounded={'xl'}
                overflow={'hidden'}
                transition="all 0.3s"
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow: '2xl',
                }}
              >
                <Box p={6}>
                  <Stack spacing={4}>
                    <Icon
                      as={service.icon}
                      w={10}
                      h={10}
                      color="green.400"
                      mb={2}
                    />
                    <Heading
                      color={headingColor}
                      fontSize={'2xl'}
                      fontFamily={'body'}
                    >
                      {service.title}
                    </Heading>
                    <Text color={textColor} mb={4}>
                      {service.description}
                    </Text>
                    <List spacing={2}>
                      {service.features.map((feature, idx) => (
                        <ListItem key={idx} color={textColor}>
                          <ListIcon as={CheckCircleIcon} color="green.400" />
                          {feature}
                        </ListItem>
                      ))}
                    </List>
                  </Stack>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
          <Stack align={'center'} mt={10}>
            <Button
              as={RouterLink}
              to="/services"
              variant="outline"
              size="lg"
            >
              Více o službách a podmínkách
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Latest Posts Section */}
      <Box py={20}>
        <Container maxW="container.xl">
          <VStack spacing={12} align="stretch">
            <Box textAlign="center">
              <Heading as="h2" variant="section">
                Z mého bloku
              </Heading>
              <Text fontSize="xl" color="gray.600">
                Pár mých poznámek v mém zápisníku, které by mohly být užitečné i pro vás. Jedná se o potenciálně užitečné odkazy na články, svépomocné skupiny a literaturu k dalšímu čtení. Slouží primárně mě. Ale po opakovaných diskuzích s klienty jsem se rozhodl tyto moje náčrty sdílet zde. Není cílem obsáhnout celé téma, ale nastínit základní východiska a otázky k další práci.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {newestPosts.map(post => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </SimpleGrid>

            <Box textAlign="center">
              <Button
                as={RouterLink}
                to="/blog"
                variant="outline"
              >
                Všechny články
              </Button>
            </Box>
          </VStack>
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
                Vydejme se spolu na cestu
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
                to="/services"
                variant="ctaOutline"
                rightIcon={<FaArrowRight />}
              >
                Moje služby
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>


    </>
  )
} 