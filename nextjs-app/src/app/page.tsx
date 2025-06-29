"use client"
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  SimpleGrid,
  Flex,
  VStack,
  Link as ChakraLink,
  Icon,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { FaUser, FaHandHoldingHeart, FaUserFriends, FaHeartbeat, FaCalendarAlt, FaArrowRight } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { getLatestPosts } from '@/utils/blogUtils'
import OptimizedImage from '@/components/OptimizedImage'
import AnalyticsButton from '@/components/AnalyticsButton'
import dynamic from 'next/dynamic'
const SEO = dynamic(() => import('@/components/SEO'), { ssr: false })
import StructuredData from '@/components/StructuredData'
import BlogCard, { BlogCardSkeleton } from '@/components/BlogCard'
import HeroTextBox from '@/components/HeroTextBox'
import AboutCard from '@/components/AboutCard'

export default function Home() {
  const [newestPosts, setNewestPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  // Static colors for Chakra UI v3 compatibility
  const bgColor = 'gray.100'
  const cardBg = 'white'
  const heroCardBg = 'whiteAlpha.200'
  const textColor = 'gray.700'
  const headingColor = 'green.500'
  const serviceBg = 'green.100'
  const borderColor = 'gray.200'

  useEffect(() => {
    // Defer blog post loading to improve initial page load
    const loadPosts = async () => {
      try {
        console.log('Načítání příspěvků...')
        const latestPosts = await getLatestPosts(3)
        console.log('Načtené příspěvky:', latestPosts)
        setNewestPosts(latestPosts || [])
      } catch (error) {
        console.error('Chyba při načítání příspěvků:', error)
      } finally {
        setLoading(false)
      }
    }

    // Load posts after a short delay to prioritize critical content
    const timer = setTimeout(loadPosts, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <SEO
        title=""
        description="Nabízím psychoterapii pro dospělé v centru Brna. Můžete čerpat podporou z preventivních programů zdravotních pojišťoven."
        keywords="psychoterapie, psychologické poradenství, Brno, individuální terapie, osobní rozvoj, deprese, úzkost, vztahy, stres"
        url="https://tomnovacek.com"
        image="tom1.png"
      >
        {/* Preload critical images for LCP optimization */}
        <link 
          rel="preload" 
          as="image" 
          href="/optimized-images/forrest-sm.webp?v=2" 
          fetchPriority="high"
        />
        <link 
          rel="preload" 
          as="image" 
          href="/optimized-images/tom1-sm.webp?v=2" 
          fetchPriority="high"
        />
      </SEO>
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
          {/* Static hero image for optimal LCP */}
          <img
            src="/optimized-images/forrest-sm.webp?v=3"
            srcSet="/optimized-images/forrest-xs.webp?v=3 150w, /optimized-images/forrest-sm.webp?v=3 300w, /optimized-images/forrest-md.webp?v=3 400w, /optimized-images/forrest-lg.webp?v=3 800w, /optimized-images/forrest-xl.webp?v=3 1200w, /optimized-images/forrest-2xl.webp?v=3 1600w"
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
            alt="Lesní cesta"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            className="hero-image"
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 0
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
                {/* Static portrait image for optimal LCP */}
                <img
                  src="/optimized-images/tom1-sm.webp?v=2"
                  srcSet="/optimized-images/tom1-xs.webp?v=2 150w, /optimized-images/tom1-sm.webp?v=2 300w, /optimized-images/tom1-md.webp?v=2 400w, /optimized-images/tom1-lg.webp?v=2 800w, /optimized-images/tom1-xl.webp?v=2 1200w, /optimized-images/tom1-2xl.webp?v=2 1600w"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  alt="Tom Nováček"
                  loading="eager"
                  fetchPriority="high"
                  decoding="sync"
                  className="hero-image"
                  style={{
                    mixBlendMode: 'normal',
                    backgroundColor: 'transparent',
                    filter: 'brightness(1.1)',
                    height: 'auto',
                    width: '100%'
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
          <Stack gap={4} maxW={'6xl'} textAlign={'center'} mb={10}>
            <Heading as="h2" color={headingColor}>
              <Text as={'span'} position={'relative'}>
                O mně
              </Text>
            </Heading>
            <Text color={textColor} fontSize={'xl'}>
              Jsem psycholog a terapeut s multioborovým vzděláním a zkušenostmi v doprovázení lidí překonávajících své životní výzvy. Znalosti a perspektivy z různých profesních oblastí mi pomáhají pochopit klientovu situaci a následně společně rozšiřovat obzory o perspektivy, které mohou přinášet větší svobodu při hledání cesty vpřed.
            </Text>
          </Stack>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={16} w="full">
            <AboutCard
              title="Moje praxe"
              description={
                <>
                  Posledních sedm let se intenzivně věnuji psychologickému poradenství a čtyři roky praktikuji terapii v soukromé praxi v centru Brna. Vystudoval jsem jednooborovou psychologii a absolvoval dvouletý výcvik v koučování, následně šestiletý výcvik v{' '}
                  <ChakraLink href="https://www.psychoterapie-integrace.cz" color="grey.400">
                    integrativní psychoterapii
                  </ChakraLink>
                  . Jsem řádným členem{' '}
                  <ChakraLink href="https://www.czap.cz/" color="grey.400">
                    České asociace pro psychoterapii
                  </ChakraLink>
                  {' '}- komunity, která klade důraz na etické standardy a vysokou kvalifikaci v oboru psychoterapie. Jinými slovy, snažím pracovat poctivě a stále se učit.
                </>
              }
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
          <Stack gap={4} maxW={'6xl'} textAlign={'center'} mb={10}>
            <Heading as="h2" color={headingColor}>
              <Text as={'span'} position={'relative'} zIndex={1}>
                S čím vám mohu pomoci
              </Text>
            </Heading>
            <Text color={textColor} fontSize={'xl'}>
              Lidé za mnou přicházejí s nejrůznějšími tématy, ale nejčastěji se bavíme o vztazích (k sobě i k druhým), úzkosti, pokleslé náladě a&nbsp;o&nbsp;tom, jak najít klid ve shonu každodenního života.
            </Text>
          </Stack>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={10} w="full">
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
                  <Stack gap={4}>
                    <Icon
                      as={service.icon}
                      w={10}
                      h={10}
                      color="green.400"
                      mb={2}
                    />
                    <Heading
                      as="h3"
                      color={headingColor}
                      fontSize={'2xl'}
                      fontFamily={'body'}
                    >
                      {service.title}
                    </Heading>
                    <Text color={textColor} mb={4}>
                      {service.description}
                    </Text>
                    <VStack gap={2} align="start">
                      {service.features.map((feature, idx) => (
                        <Box key={idx} display="flex" alignItems="center" gap={2}>
                          <Icon as={CheckCircleIcon} color="green.400" />
                          <Text color={textColor}>{feature}</Text>
                        </Box>
                      ))}
                    </VStack>
                  </Stack>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
          <Stack align={'center'} mt={10}>
            <AnalyticsButton
              as={NextLink}
              href="/services"
              variant="outline"
              buttonName="services_button"
              location="home_services_section"
              onClick={() => {}}
            >
              Více o službách a podmínkách
            </AnalyticsButton>
          </Stack>
        </Container>
      </Box>

      {/* Latest Posts Section */}
      <Box py={20} bg={cardBg}>
        <Container maxW="container.xl">
          <VStack gap={12} align="stretch">
            <Box textAlign="center">
              <Heading as="h2">
                Z mého bloku
              </Heading>
              <Text fontSize="xl" color="gray.600">
                Píšu si poznámky – pro sebe, pro práci, pro život. Po čase jsem zjistil, že některé z nich mohou být užitečné i pro ostatní. Nejsou to vědecké články ani návody na štěstí, spíš takové mapy terénu, který znám z vlastní zkušenosti i z práce s klienty.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
              {loading ? (
                // Show skeleton cards while loading
                Array.from({ length: 3 }).map((_, index) => (
                  <BlogCardSkeleton key={index} />
                ))
              ) : (
                newestPosts.map((post: any) => (
                  <BlogCard key={post.slug} post={post} />
                ))
              )}
            </SimpleGrid>

            <Box textAlign="center">
              <AnalyticsButton
                as={NextLink}
                href="/blog"
                variant="outline"
                buttonName="blog_button"
                location="home_blog_section"
                onClick={() => {}}
              >
                Více článků
              </AnalyticsButton>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box py={20} bg={bgColor}>
        <Container maxW={'7xl'}>
          <Stack
            gap={8}
            align="center"
            textAlign="center"
            maxW={'3xl'}
            mx="auto"
          >
            <Heading as="h2" color={headingColor}>
                Vydejme se spolu na cestu
            </Heading>
            <Text color={textColor} fontSize={'xl'} maxW={'2xl'}>
              První krok je často ten nejtěžší. Domluvte si úvodní konzultaci a společně prozkoumáme, jak vám mohu pomoci.
            </Text>
            <Stack
              gap={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}
              pt={4}
            >
              <AnalyticsButton
                as={NextLink}
                href="/calendar"
                variant="cta"
                buttonName="cta_consultation_button"
                location="home_cta_section"
                onClick={() => {}}
              >
                <Icon as={FaCalendarAlt} mr={2} />
                Objednat konzultaci
              </AnalyticsButton>
              <AnalyticsButton
                as={NextLink}
                href="/services"
                variant="ctaOutline"
                buttonName="cta_services_button"
                location="home_cta_section"
                onClick={() => {}}
              >
                Moje služby
                <Icon as={FaArrowRight} ml={2} />
              </AnalyticsButton>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  )
}
