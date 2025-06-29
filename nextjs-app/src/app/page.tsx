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
import Image from 'next/image'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { FaUser, FaHandHoldingHeart, FaUserFriends, FaHeartbeat, FaCalendarAlt, FaArrowRight } from 'react-icons/fa'
import { getLatestPosts } from '@/utils/blogUtils'
import BlogCard from '@/components/BlogCard'
import HeroTextBox from '@/components/HeroTextBox'
import AboutCard from '@/components/AboutCard'

// Metadata for better SEO and performance
export const metadata = {
  title: 'Tomáš Nováček - Psychoterapie v centru Brna',
  description: 'Nabízím psychoterapii pro dospělé v centru Brna. Můžete čerpat podporou z preventivních programů zdravotních pojišťoven.',
  keywords: 'psychoterapie, psychologické poradenství, Brno, individuální terapie, osobní rozvoj, deprese, úzkost, vztahy, stres',
  openGraph: {
    title: 'Tomáš Nováček - Psychoterapie v centru Brna',
    description: 'Nabízím psychoterapii pro dospělé v centru Brna. Můžete čerpat podporou z preventivních programů zdravotních pojišťoven.',
    images: ['/optimized-images/tom1-sm.webp'],
  },
}

export default async function Home() {
  // Fetch blog posts on the server
  let newestPosts: any[] = []
  try {
    newestPosts = await getLatestPosts(3) || []
  } catch (error) {
    console.error('Chyba při načítání příspěvků:', error)
  }

  return (
    <>
      {/* Critical Hero Section - Server Rendered for LCP */}
      <section className="hero-section">
        <div className="hero-background">
          <Image
            src="/optimized-images/forrest-sm.webp"
            alt="Lesní cesta"
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: 'cover',
              zIndex: 0
            }}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-container">
            <div className="hero-text">
              <h1 className="hero-title">
                Psychoterapie
                <span className="hero-accent"> v centru Brna</span>
              </h1>
              <p className="hero-description">
                Vítejte, jmenuji se Tomáš Nováček. Věnuji se pomoci lidem překonávat životní výzvy a dosahovat osobního růstu. Společně s klienty se vydávám na cestu k hlubšímu porozumění sobě sama, svým vztahům a slepým uličkám, ve kterých se nacházejí. Snažím se, aby se na tomto putování cítili bezpečně a našli v sobě schopnost zahlédnout světlo nadějě prosvítající i potemnělým lesem.
              </p>
              <div className="hero-buttons">
                <a href="/calendar" className="btn btn-primary">
                  Objednat konzultaci
                </a>
                <a href="/services" className="btn btn-secondary">
                  Moje služby
                </a>
              </div>
            </div>
            
            <div className="hero-image-container">
              <Image
                src="/optimized-images/tom1-sm.webp"
                alt="Tom Nováček"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{
                  objectFit: 'contain',
                  mixBlendMode: 'normal',
                  backgroundColor: 'transparent',
                  filter: 'brightness(1.1)',
                }}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Box py={20} bg="white" position="relative" zIndex={2}>
        <Container maxW={'7xl'} centerContent>
          <Stack gap={4} maxW={'6xl'} textAlign={'center'} mb={10}>
            <Heading as="h2" color="green.500">
              <Text as={'span'} position={'relative'}>
                O mně
              </Text>
            </Heading>
            <Text color="gray.700" fontSize={'xl'}>
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
              textColor="gray.700"
            />
            <AboutCard
              title="Můj přístup"
              description="Věřím, že všichni máme vnitřní zdroje k zvládání životních výzev, které se před námi objevují. Mohou se však objevit situace, ve kterých se můžeme cítit uvězněni nebo bezmocní. V takových chvílích  podporuji klienty v pochopení jejich problémů a hledání efektivních způsobů, jak je překonat. Společně prozkoumáváme jejich osobní cestu k sebepoznání a odhalujeme vnitřní síly, které jim mohou pomoci žít plnější a spokojenější život. Nemám všechny odpovědi, pomůžu vám najít ty vaše."
              image="mountinHikeGroup.jpg"
              imageAlt="Skupina lidí na horách"
              icon={FaHandHoldingHeart}
              buttonText="Moje služby"
              buttonHref="/services"
              textColor="gray.700"
            />
          </SimpleGrid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box py={20} bg="gray.100">
        <Container maxW={'7xl'} centerContent>
          <Stack gap={4} maxW={'6xl'} textAlign={'center'} mb={10}>
            <Heading as="h2" color="green.500">
              <Text as={'span'} position={'relative'} zIndex={1}>
                S čím vám mohu pomoci
              </Text>
            </Heading>
            <Text color="gray.700" fontSize={'xl'}>
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
                bg="white"
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
                      color="green.500"
                      fontSize={'2xl'}
                      fontFamily={'body'}
                    >
                      {service.title}
                    </Heading>
                    <Text color="gray.700" mb={4}>
                      {service.description}
                    </Text>
                    <VStack gap={2} align="start">
                      {service.features.map((feature, idx) => (
                        <Box key={idx} color="gray.700" display="flex" alignItems="center" gap={2}>
                          <Icon as={CheckCircleIcon} color="green.400" />
                          {feature}
                        </Box>
                      ))}
                    </VStack>
                  </Stack>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
          <Stack align={'center'} mt={10}>
            <NextLink href="/services" passHref legacyBehavior>
              <Button
                as="a"
                colorScheme="green"
                variant="outline"
                size="lg"
                rounded="full"
                px={8}
              >
                Více o službách a podmínkách
              </Button>
            </NextLink>
          </Stack>
        </Container>
      </Box>

      {/* Latest Posts Section */}
      <Box py={20} bg="white">
        <Container maxW="container.xl">
          <VStack gap={12} align="stretch">
            <Box textAlign="center">
              <Heading as="h2" color="green.500">
                Z mého bloku
              </Heading>
              <Text fontSize="xl" color="gray.600">
                Píšu si poznámky – pro sebe, pro práci, pro život. Po čase jsem zjistil, že některé z nich mohou být užitečné i pro ostatní. Nejsou to vědecké články ani návody na štěstí, spíš takové mapy terénu, který znám z vlastní zkušenosti i z práce s klienty.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
              {newestPosts.map(post => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </SimpleGrid>

            <Box textAlign="center">
              <NextLink href="/blog" passHref legacyBehavior>
                <Button
                  as="a"
                  colorScheme="green"
                  variant="outline"
                  size="lg"
                  rounded="full"
                  px={8}
                >
                  Více článků
                </Button>
              </NextLink>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box py={20} bg="gray.100">
        <Container maxW={'7xl'}>
          <Stack
            gap={8}
            align="center"
            textAlign="center"
            maxW={'3xl'}
            mx="auto"
          >
            <Heading as="h2" color="green.500">
                Vydejme se spolu na cestu
            </Heading>
            <Text color="gray.700" fontSize={'xl'} maxW={'2xl'}>
              První krok je často ten nejtěžší. Domluvte si úvodní konzultaci a společně prozkoumáme, jak vám mohu pomoci.
            </Text>
            <Stack
              gap={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}
              pt={4}
            >
              <NextLink href="/calendar" passHref legacyBehavior>
                <Button
                  as="a"
                  colorScheme="green"
                  size="lg"
                  rounded="full"
                  px={8}
                >
                  <Icon as={FaCalendarAlt} mr={2} />
                  Objednat konzultaci
                </Button>
              </NextLink>
              <NextLink href="/services" passHref legacyBehavior>
                <Button
                  as="a"
                  colorScheme="green"
                  variant="outline"
                  size="lg"
                  rounded="full"
                  px={8}
                >
                  Moje služby
                  <Icon as={FaArrowRight} ml={2} />
                </Button>
              </NextLink>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  )
}
