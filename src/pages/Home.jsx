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
import { FaUserFriends, FaHeart, FaBrain, FaComments, FaLightbulb, FaHandHoldingHeart, FaUserMd, FaVideo, FaCalendarAlt, FaCreditCard, FaShieldAlt, FaClock, FaInfoCircle } from 'react-icons/fa'
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
        title="Domů"
        description="Profesionální psychoterapeutické služby v Brně. Specializace na individuální terapii, párové poradenství a rodinnou terapii. Objednejte si svou konzultaci ještě dnes."
        keywords="psychoterapie, poradenství, Brno, individuální terapie, párová terapie, rodinná terapie"
        url="https://tomnovacek.cz"
        image="/src/assets/img/tom-home.webp"
        preloadImages={[
          '/src/assets/img/forrest.webp',  // Hero background
          '/src/assets/img/tom-home.webp'  // Hero portrait
        ]}
      />
      <StructuredData type="MedicalBusiness" />
      <StructuredData type="Person" />
      
      {/* Hero Section */}
      <Box position="relative" width="100%" height="100vh" overflow="hidden">
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
            src="/src/assets/img/forrest.webp"
            alt="Lesní cesta"
            objectFit="cover"
            width="1920"
            height="1080"
            priority={true}
            fetchpriority="high"
            loading="eager"
            decoding="sync"
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
            py={{ base: 20, md: 28 }}
          >
            {/* Text Box */}
            <Box
              bg={heroCardBg}
              p={8}
              borderRadius="lg"
              maxW="2xl"
              flex="1"
              backdropFilter="blur(10px)"
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
                Jsem licencovaný psychoterapeut, který se věnuje pomoci lidem překonávat životní výzvy a dosahovat osobního růstu. Kombinací ověřených přístupů a soucitné péče vytvářím bezpečný prostor pro uzdravení a transformaci.
              </Text>
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: 'column', sm: 'row' }}
              >
                <Button
                  as={RouterLink}
                  to="/contact"
                  rounded={'full'}
                  size={'lg'}
                  fontWeight={'normal'}
                  px={6}
                  colorScheme={'green'}
                  bg={'green.400'}
                  _hover={{ bg: 'green.300' }}
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
              display={{ base: 'none', md: 'block' }}
              bg="transparent"
            >
              <Box
                position="relative"
                width="100%"
                height="auto"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="2xl"
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
                  src="/src/assets/img/tom-home.webp"
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
          <Stack spacing={4} maxW={'3xl'} textAlign={'center'} mb={140}>
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
              Jsem licencovaný psychoterapeut s rozsáhlými zkušenostmi v pomoci lidem překonávat životní výzvy a dosahovat osobního růstu.
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
                  Posledních sedm let se intenzivně věnuji psychologickému poradenství a čtyři roky praktikuji terapii. Moje odbornost je založena na důkladném vzdělání a kontinuálním profesním rozvoji. Absolvoval jsem dvouletý specializovaný výcvik v koučování a šestiletý certifikovaný výcvik v integrativní psychoterapii. Jsem také řádným členem České asociace pro psychoterapii.
                  
                  Jsem součástí profesionální komunity, která klade důraz na etické standardy a vysokou kvalifikaci v oboru psychoterapie.
                </Text>
              </Box>
            </Stack>
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
          <Stack spacing={4} maxW={'3xl'} textAlign={'center'} mb={10}>
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
                Moje služby
              </Text>
            </Heading>
            <Text color={textColor} fontSize={'xl'}>
              Nabízím širokou škálu terapeutických služeb na podporu vašeho duševního zdraví a osobního růstu.
            </Text>
          </Stack>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w="full">
            {[
              {
                icon: FaUserFriends,
                title: 'Individuální terapie',
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
                title: 'Úzkost a deprese',
                description: 'Specializovaná léčba pomocí ověřených přístupů.',
                features: [
                  'Strategie zvládání',
                  'Zvládání stresu',
                  'Regulace nálady',
                  'Životní změny'
                ]
              },
              {
                icon: FaHandHoldingHeart,
                title: 'Podpora při traumatu',
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
              Zobrazit všechny služby
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Blog Section */}
      <Box py={20} bg={cardBg}>
        <Container maxW={'7xl'} centerContent>
          <Stack spacing={4} maxW={'3xl'} textAlign={'center'} mb={10}>
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