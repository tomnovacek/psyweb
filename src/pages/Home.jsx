import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  SimpleGrid,

  useColorModeValue,

  Flex,
  List,
  ListItem,
  ListIcon,
  Icon,

  VStack,

} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { FaUserFriends, FaHeart, FaBrain, FaBalanceScale, FaComments, FaLightbulb, FaHandHoldingHeart, FaUserMd, FaVideo, FaCalendarAlt, FaCreditCard, FaShieldAlt, FaClock, FaInfoCircle, FaHeartbeat, FaArrowRight, FaUser, FaUserShield, FaExchangeAlt, FaSeedling, FaUsers, FaIdCard, FaMoneyBill, FaMoneyBillAlt } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { getAllPosts, getLatestPosts } from '../utils/blogUtils'
import OptimizedImage from '../components/OptimizedImage'
import CriticalImage from '../components/CriticalImage'

import SEO from '../components/SEO'
import StructuredData from '../components/StructuredData'

import BlogCard, { BlogCardSkeleton } from '../components/BlogCard'
import HeroTextBox from '../components/HeroTextBox'
import AboutCard from '../components/AboutCard'

export default function Home() {
  const [newestPosts, setNewestPosts] = useState([])
  const [loading, setLoading] = useState(true)

  // Hookd
  const bgColor = useColorModeValue('gray.100', 'gray.900')
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
        title="Tomáš Nováček - Psychoterapie | Brno"
        description="Psychoterapie a psychologické poradenství pro dospělé v centru Brna."
        keywords="psychoterapie, pscyhologické poradenství, Brno, individuální terapie"
        image="tom1.png"
        preloadImages={[
          'forrest.webp',  // Hero background
          'tom1.png'  // Hero portrait
        ]}
      />
      <StructuredData type="MedicalBusiness" />
      <StructuredData type="Person" />

      {/* Hero Section */}
      <Box position="relative" width="100%" height={{ base: "auto", md: "75vh" }} overflow="hidden" className="hero-section">
        {/* Background Image */}
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          zIndex={0}
          className="hero-background"
        >
          <CriticalImage
            src="forrest.webp"
            alt="Lesní cesta"
            objectFit="cover"
            width="100%"
            height="100%"
            fallbackSrc="/src/assets/img/forrest.webp"
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
        <Container maxW="7xl" height="100%" position="relative" zIndex={1} className="hero-content">
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
              titleAccent="v centru Brna"
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
                <CriticalImage
                  src="tom1.png"
                  alt="Tom Nováček"
                  objectFit="cover"
                  width="100%"
                  height="auto"
                  fallbackSrc="/src/assets/img/tom1.png"
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
              Jsem psycholog a terapeut s multioborovým vzděláním a zkušenostmi v doprovázení lidí překonávajících své životní výzvy. Znalosti a perspektivy z různých profesních oblastí mi pomáhají pochopit klientovu situaci a následně společně rozšiřovat obzory o perspektivy, které mohou přinášet větší svobodu při hledání cesty vpřed.
            </Text>
          </Stack>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16} w="full">
            <AboutCard
              title="Moje praxe"
              description="Posledních sedm let se intenzivně věnuji psychologickému poradenství a čtyři roky praktikuji terapii v soukromé praxi v centru Brna.  Vystudoval jsem jednooborovou psychologii a absolvoval  dvouletý výcvik v koučování, následně šestiletý výcvik v integrativní psychoterapii. Jsem řádným členem České asociace pro psychoterapii - komunity, která klade důraz na etické standardy a vysokou kvalifikaci v oboru psychoterapie. Jinými slovy, snažím pracovat poctivě a stále se učit."
              image="room.jpeg"
              imageAlt="Terapeutická místnost"
              icon={FaUser}
              buttonText="Více o mně"
              buttonHref="/about"
              textColor={textColor}
            />
            <AboutCard
              title="Můj přístup"
              description="Věřím, že všichni máme vnitřní zdroje k zvládání životních výzev, které se před námi objevují. Mohou se však objevit situace, ve kterých se můžeme cítit uvězněni nebo bezmocní. V takových chvílích  podporuji klienty v pochopení jejich problémů a hledání efektivních způsobů, jak je překonat. Společně prozkoumáváme jejich osobní cestu k sebepoznání a odhalujeme vnitřní síly, které jim mohou pomoci žít plnější a spokojenější život. Nemám všechny odpovědi, pomůžu vám najít ty vaše."
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
              Lidé za mnou přicházejí s nejrůznějšími tématy, ale nejčastěji se bavíme o vztazích (k sobě i k druhým), úzkosti, pokleslé náladě a&nbsp;o&nbsp;tom, jak najít klid ve shonu každodenního života.
            </Text>
          </Stack>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w="full">
            {[
              {
                icon: FaUser,
                title: 'Osobní potíže',
                description: 'Individuální terapie',
                features: [
                  'Úzkost a deprese',
                  'Výkyvy nálady',
                  'Nároky na sebe',
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
                  'Traumatické zkušenosti',
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

            >
              Více o službách a podmínkách
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Latest Posts Section */}
      <Box py={20} bg={cardBg}>
        <Container maxW="container.xl">
          <VStack spacing={12} align="stretch">
            <Box textAlign="center">
              <Heading as="h2" variant="section">
                Z mého bloku
              </Heading>
              <Text fontSize="xl" color="gray.600">
                Píšu si poznámky – pro sebe, pro práci, pro život. Po čase jsem zjistil, že některé z nich mohou být užitečné i pro ostatní. Nejsou to vědecké články ani návody na štěstí, spíš takové mapy terénu, který znám z vlastní zkušenosti i z práce s klienty.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {loading ? (
                // Show skeleton cards while loading
                Array.from({ length: 3 }).map((_, index) => (
                  <BlogCardSkeleton key={index} />
                ))
              ) : (
                newestPosts.map(post => (
                  <BlogCard key={post.slug} post={post} />
                ))
              )}
            </SimpleGrid>

            <Box textAlign="center">
              <Button
                as={RouterLink}
                to="/blog"
                variant="outline"
              >
                Více článků
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