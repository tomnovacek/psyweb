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
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { FaUserFriends, FaHeart, FaBrain, FaBalanceScale, FaComments, FaLightbulb, FaHandHoldingHeart, FaUserMd, FaVideo, FaCalendarAlt, FaCreditCard, FaShieldAlt, FaClock, FaInfoCircle, FaHeartbeat, FaArrowRight, FaUser } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { getAllPosts, getLatestPosts } from '../utils/blogUtils'
import OptimizedImage from '../components/OptimizedImage'
import OptimizedAvatar from '../components/OptimizedAvatar'
import SEO from '../components/SEO'
import StructuredData from '../components/StructuredData'
import { getOptimizedImagePath } from '../utils/getOptimizedImage'
import { BlogCard } from '../components/BlogCard'

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
            <Box
              bg={heroCardBg}
              p={{ base: 6, md: 8 }}
              borderRadius="lg"
              maxW="2xl"
              flex="1"
              backdropFilter="blur(2px)"
              minH={{ base: "auto", md: "500px" }}
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              pt={{ base: 8, md: 10 }}
            >
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
                mb={6}
              >
                <Text
                  as={'span'}
                  position={'relative'}
                  color={'whiteAlpha.900'}
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
                  Psychoterapie
                </Text>
                <br />
                <Text as={'span'} color={'green.400'}>
                  & Osobní růst
                </Text>
              </Heading>
              <Text color={'white'} fontSize={'xl'} mb={8}>
                Vítejte, jmenuji se Tomáš Nováček. Věnuji se pomoci lidem překonávat životní výzvy a dosahovat osobního růstu. Společně s klienty se vydávám na cestu k hlubšímu porozumění sobě sama, svým vztahům a slepým uličkám, ve kterých se nacházejí. Snažím se, aby se na tomto putování cítili bezpečně a našli v sobě schopnost zahlédnout světlo nadějě prosvítající i potemnělým lesem.
              </Text>

              {/* button stack */}
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: 'column', sm: 'row' }}
                mt="auto"
              >
                <Button
                  as="a"
                  href="mailto:terapie@tomnovacek.com"
                  rounded={'full'}
                  size={'lg'}
                  fontWeight={'normal'}
                  px={8}
                  colorScheme={'green'}
                  variant={'solid'}
                  _hover={{
                    bg: 'green.400',
                    color: 'white',
                  }}
                  leftIcon={<FaCalendarAlt />}
                >
                  Objednat konzultaci
                </Button>
                <Button
                  as={RouterLink}
                  to="/services"
                  rounded={'full'}
                  size={'lg'}
                  fontWeight={'normal'}
                  px={8}
                  variant="outline"
                  colorScheme={'green'}
                  borderColor={'white'}
                  color={'white'}
                  _hover={{
                    bg: 'green.400',
                    color: 'white',
                    borderColor: 'green.400'
                  }}
                >
                  Zjistit více
                </Button>
              </Stack>
            </Box>

            {/* Portrait Image */}
            <Box
              flex="1"
              maxW="2xl"
              position="relative"
              bg="transparent"
              minH={{ base: "400px", md: "500px" }}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                position="relative"
                width="100%"
                height="auto"
                borderRadius="lg"
                overflow="hidden"
                bg="transparent"
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  bg: 'transparent',
                  zIndex: 1
                }}
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
                    filter: 'brightness(1.1) contrast(1.1)'
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
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}
              color={headingColor}
            >
              <Text
                as={'span'}
                position={'relative'}
              >
                O mně
              </Text>
            </Heading>
            <Text color={textColor} fontSize={'xl'}>
              Jsem psycholog a terapeut s multioborovým vzděláním a bohatými zkušenostmi v doprovázení lidí překonávajících své životní výzvy. Znalosti a perspektivy z různých profesních oblastí mi pomáhají nejprve pochopit klientovu situaci a následně společněpostupně rozšiřovat obzory o nové úhly pohledu, které mohou přinášet větší svobodu při hledání cesty vpřed.
            </Text>
          </Stack>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16} w="full">
            <Box
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'xl'}
              rounded={'2xl'}
              position="relative"
              transition="all 0.3s"
              _hover={{
                transform: 'translateY(-5px)',
                boxShadow: '2xl',
              }}
              overflow="hidden"
            >
              <Box
                position="relative"
                height="260px"
                overflow="hidden"
              >
                <OptimizedImage
                  src="room.jpeg"
                  alt="Terapeutická místnost"
                  objectFit="cover"
                  width="100%"
                  height="100%"
                  style={{
                    filter: 'brightness(1.2)',
                  }}
                />
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bg="blackAlpha.300"
                />
                <Box
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  p={6}
                  bg="linear-gradient(to top, rgba(0,0,0,0.8), transparent)"
                >
                  <Flex align="center" gap={3}>
                    <Icon as={FaUser} w={8} h={8} color="white" />
                    <Heading fontSize={'2xl'} color="white">Moje praxe</Heading>
                  </Flex>
                </Box>
              </Box>
              <Box p={8}>
                <Text fontSize={'lg'} mb={6} color={textColor}>
                  Posledních sedm let se intenzivně věnuji psychologickému poradenství a čtyři roky praktikuji terapii. Moje odbornost je založena na důkladném vzdělání a kontinuálním profesním rozvoji. Absolvoval jsem dvouletý specializovaný výcvik v koučování a šestiletý certifikovaný výcvik v integrativní psychoterapii. Jsem také řádným členem České asociace pro psychoterapii - komunity, která klade důraz na etické standardy a vysokou kvalifikaci v oboru psychoterapie.
                </Text>
                <Button
                  as={RouterLink}
                  to="/about"
                  w="full"
                  colorScheme="green"
                  variant="outline"
                  rounded="full"
                  size="lg"
                  _hover={{
                    bg: 'green.400',
                    color: 'white',
                  }}
                >
                  Více o mně
                </Button>
              </Box>
            </Box>
            <Box
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'xl'}
              rounded={'2xl'}
              position="relative"
              transition="all 0.3s"
              _hover={{
                transform: 'translateY(-5px)',
                boxShadow: '2xl',
              }}
              overflow="hidden"
            >
              <Box
                position="relative"
                height="260px"
                overflow="hidden"
              >
                <OptimizedImage
                  src="mountinHikeGroup.jpg"
                  alt="Skupina lidí na horách"
                  objectFit="cover"
                  width="100%"
                  height="100%"
                  style={{
                    filter: 'brightness(1.2)',
                  }}
                />
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bg="blackAlpha.300"
                />
                <Box
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  p={6}
                  bg="linear-gradient(to top, rgba(0,0,0,0.8), transparent)"
                >
                  <Flex align="center" gap={3}>
                    <Icon as={FaHandHoldingHeart} w={8} h={8} color="white" />
                    <Heading fontSize={'2xl'} color="white">Můj přístup</Heading>
                  </Flex>
                </Box>
              </Box>
              <Box p={8}>
                <Text fontSize={'lg'} mb={6} color={textColor}>
                  Věřím, že každý člověk má vnitřní zdroje, jak se vyrovnat s životními výzvami. Existují však chvíle, kdy se můžeme cítit uvězněni nebo bezmocní v řešení obtížných situací. V takových chvílích vás podporuji v pochopení vašich problémů a hledání efektivních způsobů, jak je překonat. Respektuji jedinečnost každého klienta, proto k každému přistupuji individuálně. Společně prozkoumáváme vaši osobní cestu sebepoznání a odhalujeme vnitřní síly, které vám mohou pomoci žít plnější a spokojenější život.
                </Text>
                <Button
                  as={RouterLink}
                  to="/services"
                  w="full"
                  colorScheme="green"
                  rounded="full"
                  variant="outline"
                  size="lg"
                  _hover={{
                    bg: 'green.400',
                    color: 'white',
                  }}
                >
                  Moje služby
                </Button>
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box py={20} bg={bgColor}>
        <Container maxW={'7xl'} centerContent>
          <Stack spacing={4} maxW={'6xl'} textAlign={'center'} mb={10}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}
              color={headingColor}
              position="relative"
              display="inline-block"
            >
              <Text
                as={'span'}
                position={'relative'}
                zIndex={1}
              >
                S čím vám mohu pomoci
              </Text>
            </Heading>
            <Text color={textColor} fontSize={'xl'}>
              Nejčastější témata, které mi lidé přinášejí jsou komplikované vztahy, propady nálady, úzkosti, stres a nízké sebevědomí.
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
                title: 'Zvládání stresového prostředí',
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
              colorScheme={'green'}
              variant={'outline'}
              size={'lg'}
              rounded={'full'}
              px={8}
              _hover={{
                bg: 'green.400',
                color: 'white',
              }}
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
              <Heading as="h2" size="2xl" mb={4} color={headingColor}>
                Z mého bloku
              </Heading>
              <Text fontSize="xl" color="gray.600">
                Pár mých poznámek v mém zápisníku, které by mohly být užitečné i pro vás.
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
                colorScheme="green"
                size="lg"
                rounded="full"
                variant="outline"
                px={8}
                _hover={{
                  bg: 'green.400',
                  color: 'white',
                }}
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
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}
              color={headingColor}
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
                as="a"
                href="mailto:terapie@tomnovacek.com"
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={8}
                colorScheme={'green'}
                variant={'solid'}
                _hover={{
                  bg: 'green.400',
                  color: 'white',
                }}
                leftIcon={<FaCalendarAlt />}
              >
                Objednat konzultaci
              </Button>
              <Button
                as={RouterLink}
                to="/services"
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={8}
                variant="outline"
                colorScheme={'green'}
                _hover={{
                  bg: 'green.400',
                  color: 'white',
                }}
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