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
import { FaUserFriends, FaHeart, FaBrain, FaBalanceScale, FaComments, FaLightbulb, FaHandHoldingHeart, FaUserMd, FaVideo, FaCalendarAlt, FaCreditCard, FaShieldAlt, FaClock, FaInfoCircle } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { getAllPosts } from '../utils/mdx'
import OptimizedImage from '../components/OptimizedImage'
import OptimizedAvatar from '../components/OptimizedAvatar'
import SEO from '../components/SEO'
import StructuredData from '../components/StructuredData'
import { getOptimizedImagePath } from '../utils/getOptimizedImage'

export default function Home() {
  const [newestPosts, setNewestPosts] = useState([])
  const [loading, setLoading] = useState(true)

  // Move hooks to the top level
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  const heroCardBg = useColorModeValue('whiteAlpha.200', 'blackAlpha.200')
  const headingColor = useColorModeValue('gray.700', 'white')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const serviceBg = useColorModeValue('green.100', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  useEffect(() => {
    const loadPosts = async () => {
      try {
        console.log('Načítání příspěvků...')
        const allPosts = await getAllPosts()
        console.log('Načtené příspěvky:', allPosts)
        setNewestPosts(allPosts.slice(0, 2))
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
        image="tom-home.webp"
        preloadImages={[
          'forrest.webp',  // Hero background
          'tom-home.webp'  // Hero portrait
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
            bg="blackAlpha.100"
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
              backdropFilter="blur(10px)"
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
                Vítejte, <br /> jmenuji se Tomáš Nováček. <br /> Věnuji se pomoci lidem překonávat životní výzvy a dosahovat osobního růstu. Společně s klienty se vydávám na cestu k hlubšímu porozumění sobě sama, svým vztahům a slepým uličkám, ve kterých se nacházejí. Snažím se, aby se na této cestě cítili bezpečně a našli v sobě schopnost zahlédnout světlo nadějě prosvítající i potemnělým lesem.
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
                  px={6}
                  colorScheme={'green'}
                  bg={'green.400'}
                  _hover={{ bg: 'green.300' }}
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
                  px={6}
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
                  src="tom-home.webp"
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
          <Stack spacing={4} maxW={'6xl'} textAlign={'center'} mb={40}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}
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
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} w="full">
            <Stack spacing={6} align="center" textAlign="justify">
              <Box
                bg={serviceBg}
                p={6}
                pt={24}
                rounded="xl"
                boxShadow="lg"
                width="100%"
                position="relative"
                overflow="visible"
              >
                <Center position="absolute" top="-100px" left="50%" transform="translateX(-50%)">
                  <Box
                    position="relative"
                    width="200px"
                    height="200px"
                    borderRadius="full"
                    overflow="hidden"
                    boxShadow="xl"
                    border="4px solid"
                    borderColor={borderColor}
                  >
                    <OptimizedImage
                      src="/src/assets/img/room.jpeg"
                      alt="Terapeutická místnost"
                      objectFit="cover"
                      width="100%"
                      height="100%"
                    />
                  </Box>
                </Center>
                <Heading fontSize={'2xl'} mb={4} mt={4} textAlign="center">Moje praxe</Heading>
                <Text fontSize={'lg'} mb={4}>
                  Posledních sedm let se intenzivně věnuji psychologickému poradenství a čtyři roky praktikuji terapii. Moje odbornost je založena na důkladném vzdělání a kontinuálním profesním rozvoji. Absolvoval jsem dvouletý specializovaný výcvik v koučování a šestiletý certifikovaný výcvik v integrativní psychoterapii. Jsem také řádným členem České asociace pro psychoterapii - komunity, která klade důraz na etické standardy a vysokou kvalifikaci v oboru psychoterapie.
                </Text>
              </Box>
            </Stack>
            <Stack spacing={6} align="center" textAlign="justify">
              <Box
                bg={serviceBg}
                p={6}
                pt={24}
                mt={{ base: 40, md: 0 }}
                rounded="xl"
                boxShadow="lg"
                width="100%"
                position="relative"
                overflow="visible"
              >
                <Center position="absolute" top="-100px" left="50%" transform="translateX(-50%)">
                  <Box
                    position="relative"
                    width="200px"
                    height="200px"
                    borderRadius="full"
                    overflow="hidden"
                    boxShadow="xl"
                    border="4px solid"
                    borderColor={borderColor}
                  >
                    <OptimizedImage
                      src="/src/assets/img/family.webp"
                      alt="Rodinná terapie"
                      objectFit="cover"
                      width="100%"
                      height="100%"
                    />
                  </Box>
                </Center>
                <Heading fontSize={'2xl'} mb={4} mt={4} textAlign="center">Můj přístup</Heading>
                <Text fontSize={'lg'} mb={4}>
                  Věřím, že každý člověk má vnitřní zdroje, jak se vyrovnat s životními výzvami. Existují však chvíle, kdy se můžeme cítit uvězněni nebo bezmocní v řešení obtížných situací. V takových chvílích vás podporuji v pochopení vašich problémů a hledání efektivních způsobů, jak je překonat. Respektuji jedinečnost každého klienta, proto k každému přistupuji individuálně. Společně prozkoumáváme vaši osobní cestu sebepoznání a odhalujeme vnitřní síly, které vám mohou pomoci žít plnější a spokojenější život.
                </Text>
              </Box>
            </Stack>
          </SimpleGrid>
          <Button
            as={RouterLink}
            to="/about"
            marginTop={10}
            colorScheme={'green'}
            variant={'outline'}
            size={'lg'}
          >
            Více o mně
          </Button>
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
                icon: FaUserFriends,
                title: 'Vztahy a vztahové problémy',
                description: 'Osobní terapeutická sezení zaměřená na váš osobní růst a uzdravení.',
                features: [
                  'Individuální léčebné plány',
                  'Bezpečné, důvěrné prostředí',
                  'Ověřené přístupy',
                  'Flexibilní možnosti plánování'
                ]
              },
              {
                icon: FaBrain,
                title: 'Deprese a úzkost',
                description: 'Specializovaná léčba pomocí ověřených přístupů.',
                features: [
                  'Strategie zvládání',
                  'Zvládání stresu',
                  'Regulace nálady',
                  'Životní změny'
                ]
              },
              {
                icon: FaBalanceScale,
                title: 'Zvládání stresu',
                description: 'Specializovaná péče o zpracování a uzdravení z traumatu.',
                features: [
                  'Trauma-informed péče',
                  'Bezpečné zpracování',
                  'Techniky uzdravení',
                  'Podpůrné prostředí'
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
                        <ListItem key={idx}>
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

      {/* Blog Section */}
      <Box py={20} bg={cardBg}>
        <Container maxW={'7xl'} centerContent>
          <Stack spacing={4} maxW={'6xl'} textAlign={'center'} mb={10}>
            <Heading fontSize={'3xl'}>Nejnovější z blogu</Heading>
            <Text color={textColor} fontSize={'xl'}>
              Postřehy a zdroje na podporu vaší cesty k duševnímu zdraví
            </Text>
          </Stack>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} w="full">
            {newestPosts.map((post, index) => (
              <Box
                key={index}
                as={RouterLink}
                to={`/blog/${post.slug}`}
                bg={cardBg}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}
                transition="all 0.3s"
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow: '2xl',
                  textDecoration: 'none',
                }}
              >
                <Flex direction={{ base: 'column', md: 'row' }}>
                  <Box
                    width={{ base: '100%', md: '40%' }}
                    height={{ base: '200px', md: 'auto' }}
                    minHeight={{ md: '300px' }}
                  >
                    <OptimizedImage
                      src={post.frontmatter.image}
                      alt={post.frontmatter.title}
                      objectFit="cover"
                      width="100%"
                      height="100%"
                    />
                  </Box>
                  <Box p={6} flex="1">
                    <Stack spacing={4}>
                      <Stack direction={'row'} spacing={4}>
                        {post.frontmatter.tags.map((tag, idx) => (
                          <Badge key={idx} colorScheme="green">
                            {tag}
                          </Badge>
                        ))}
                      </Stack>
                      <Heading
                        color={headingColor}
                        fontSize={'2xl'}
                        fontFamily={'body'}
                      >
                        {post.frontmatter.title}
                      </Heading>
                      <Text color={textColor}>{post.frontmatter.excerpt}</Text>
                      <Stack direction={'row'} spacing={4} align={'center'}>
                        <OptimizedAvatar
                          src={post.frontmatter.author.image}
                          alt={post.frontmatter.author.name}
                          size="md"
                        />
                        <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                          <Text fontWeight={600}>{post.frontmatter.author.name}</Text>
                          <Text color={textColor}>
                            {post.frontmatter.date} · {post.frontmatter.readTime}
                          </Text>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Box>
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
          <Stack align={'center'} mt={10}>
            <Button
              as={RouterLink}
              to="/blog"
              colorScheme={'green'}
              variant={'outline'}
              size={'lg'}
              _hover={{
                bg: 'green.400',
                color: 'white',
              }}
            >
              Číst více článků
            </Button>
          </Stack>
        </Container>
        <Stack align={'center'} mt={10}>
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
    </>
  )
} 