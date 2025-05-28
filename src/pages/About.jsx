import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Image,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Flex,
  Icon,
  Center,
  Badge,
  Link,
  Button,
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { 
  FaGraduationCap, 
  FaUserMd, 
  FaHeart, 
  FaBrain, 
  FaIcons,
  FaHandHoldingHeart, 
  FaLightbulb, 
  FaHeartbeat, 
  FaUserShield, 
  FaUsers, 
  FaExchangeAlt, 
  FaBalanceScale, 
  FaSeedling,
  FaCalendarAlt,
  FaArrowRight,
  FaCertificate
} from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'
import OptimizedImage from '../components/OptimizedImage'
import SEO from '../components/SEO'
import StructuredData from '../components/StructuredData'

export default function About() {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  const heroCardBg = useColorModeValue('whiteAlpha.200', 'blackAlpha.200')
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const headingColor = useColorModeValue('gray.800', 'gray.200')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box bg={bgColor}>
      <SEO
        title="O Tomáši Nováčkovi"
        description="Seznamte se s Tomášem Nováčkem, profesionálním psychoterapeutem v Brně, Česká republika. Specializace na individuální terapii, úzkost, depresi a podporu při traumatu."
        keywords="psychoterapeut, Tomáš Nováček, terapie, poradenství, Brno, Česká republika, profesionální zkušenosti, kvalifikace"
        url="https://tomnovacek.com/about"
        image="tom1.png"
        preloadImages={[
          'mountainHike.jpg',  // Hero background
          'tom1.png'  // Portrait
        ]}
      />
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
            src="mountainHike.jpg"
            alt="hiking in the mountains"
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
            {/* Portrait Image - Now on the left */}
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
                  priority={true}
                  style={{
                    mixBlendMode: 'normal',
                    backgroundColor: 'transparent',
                    filter: 'brightness(1.1) contrast(1.1)'
                  }}
                />
              </Box>
            </Box>

            {/* Text Box - Now on the right */}
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
                color={headingColor}
              >
                <Text
                  as={'span'}
                  position={'relative'}
                  color={headingColor}
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
                  Moje cesta
                </Text>
                <br />
                <Text as={'span'} color={'green.400'}>
                  & Můj přístup
                </Text>
              </Heading>
              <Text color={'white'} fontSize={'xl'} mb={8}>
                Posledních sedm let věnuji snaze pomáhat lidem překonávat životní výzvy a dosahovat osobního růstu. Psychoterapii nevnímám jako místo, kde se rychle vyřeší problémy. Spíš jako prostor, kde se dá postupně zastavit, začít víc vnímat sama sebe, získat nadhled a porozumět sobě i světu, ve kterém žijeme.
              </Text>

              {/* button stack */}
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: 'column', sm: 'row' }}
                mt="auto"
              >
                <Button
                  as="a"
                  href="/calendar"
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
                  rightIcon={<FaArrowRight />}
                >
                  Moje služby
                </Button>
              </Stack>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* About Section */}
      <Box py={20} bg={bgColor}>
        <Container maxW={'7xl'}>
          <Stack spacing={4} maxW={'3xl'} textAlign={'center'} mb={10} mx="auto">
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
                Můj přístup
              </Text>
            </Heading>
            <Text color={textColor} fontSize={'xl'}>
              Věřím, že každý člověk má vnitřní schopnosti zvládat životní výzvy. Přesto se někdy můžeme cítit zablokovaní nebo bezmocní řešit složité situace. V takových chvílích vám pomáhám porozumět vašim problémům a nacházet efektivní cesty jejich překonání.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {[
              {
                icon: FaHeart,
                title: 'Poporující',
                text: 'Vytváření bezpečného, empatického prostředí, kde se cítíte slyšeni a pochopeni.',
              },
              {
                icon: FaBrain,
                title: 'Výzkumem ověřený',
                text: 'Využívání prokázaných terapeutických přístupů, které prokázaly pozitivní výsledky.',
              },
              {
                icon: FaIcons,
                title: 'Celostní',
                text: 'Zaměření na celou osobu - mysl, tělo a emoce - v procesu integrace.',
              },
            ].map((feature, index) => (
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
                <Icon
                  as={feature.icon}
                  w={10}
                  h={10}
                  color="green.400"
                  mb={4}
                />
                <Heading color={headingColor} fontSize={'xl'} mb={4}>
                  {feature.title}
                </Heading>
                <Text color={textColor}>{feature.text}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Education & Credentials - Updated layout */}
      <Box py={20} bg={cardBg}>
        <Container maxW={'7xl'}>
          <Stack spacing={4} maxW={'3xl'} textAlign={'center'} mb={10} mx="auto">
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
                Vzdělání & Kvalifikace
              </Text>
            </Heading>
            <Text color={textColor} fontSize={'xl'}>
              Moje profesionální cesta byla je postavena na jednooborovém studiu psychologie, dlouhodobém psychoterapeutickém výcviku a kontinuálnímu vzělávání v oboru psychoterapie.
            </Text>
          </Stack>

          <Flex
            direction={{ base: 'column', lg: 'row' }}
            gap={10}
            align="center"
          >
            <Box flex="1">
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                <Box>
                  <Flex align="center" gap={3} mb={4}>
                    <Icon as={FaGraduationCap} w={8} h={8} color="green.400" />
                    <Heading fontSize={'xl'} color={headingColor}>Vzdělání</Heading>
                  </Flex>
                  <List spacing={3}>
                    <ListItem color={textColor}>
                      <ListIcon as={CheckCircleIcon} color="green.400" />
                      Magisterský titul v jednooborové psychologii
                    </ListItem>
                    <ListItem color={textColor}>
                      <ListIcon as={CheckCircleIcon} color="green.400" />
                      Magisterský titul v managementu
                    </ListItem>
                    <ListItem color={textColor}>
                      <ListIcon as={CheckCircleIcon} color="green.400" />
                      Specializovaný výcvik v integrativní psychoterapii
                    </ListItem>
                    <ListItem color={textColor}>
                      <ListIcon as={CheckCircleIcon} color="green.400" />
                      Certifikovaný výcvik v koučování
                    </ListItem>
                    <ListItem color={textColor}>
                      <ListIcon as={CheckCircleIcon} color="green.400" />
                      Absolvované další kurzy: Základy psychofarmak, Neurodiverzita (vs. ADHD, ADD, Autismus), Práce s tělem při traumatu
                    </ListItem>
                  </List>
                </Box>
                <Box>
                  <Flex align="center" gap={3} mb={4}>
                    <Icon as={FaCertificate} w={8} h={8} color="green.400" />
                    <Heading color={headingColor} fontSize={'xl'}>Profesionální členství</Heading>
                  </Flex>
                  <List spacing={3}>
                    <ListItem color={textColor}>
                      <ListIcon as={CheckCircleIcon} color="green.400" />
                      Certifikovaný psychoterapeut (x hodin výcviku)<a href='exterala/diplom.pdf' target='_blank' rel='noopener noreferrer'>(Diplom)</a>
                    </ListItem>
                    <ListItem color={textColor}>
                      <ListIcon as={CheckCircleIcon} color="green.400" />
                      Certifikovaný kouč
                    </ListItem>
                    <ListItem color={textColor}>
                      <ListIcon as={CheckCircleIcon} color="green.400" />
                      Člen profesionální psychoterapeutické asociace <Link href="https://czap.cz/" isExternal color="green.400">(ČAP)</Link>
                    </ListItem>
                  </List>
                </Box>
              </SimpleGrid>
            </Box>
            <Box
              position="relative"
              width="160px"
              height="160px"
              opacity="0.8"
              transform="rotate(-15deg)"
              transition="all 0.3s"
              _hover={{
                transform: 'rotate(-15deg) scale(1.1)',
                opacity: '1',
              }}
            >
              <OptimizedImage
                src="/src/assets/img/CAP.png"
                alt="ČAP Logo"
                width="100%"
                height="100%"
                objectFit="contain"
              />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Personal Section */}
      <Box py={20} bg={bgColor}>
        <Container maxW={'7xl'}>
          <Stack spacing={4} maxW={'3xl'} textAlign={'center'} mb={10} mx="auto">
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
                O mé cestě
              </Text>
            </Heading>
            <Text color={textColor} fontSize={'xl'}>
              K psychologii jsem se dostal cestou spíše klikatou. Mnoho let jsem pracoval v managementu, ale postupně jsem si začal uvědomovat, že mě více naplňuje práce s lidmi a jejich příběhy. Toto poznání mě přivedlo k psychologii a terapeutické práci.
            </Text>
          </Stack>

          <Flex
            direction={{ base: 'column', lg: 'row' }}
            gap={10}
            align="center"
          >
            {/* Text Content */}
            <Box flex="1">
              <Stack spacing={6}>
                <Text color={textColor} fontSize={'xl'}>
                  V mém osobním životě jsem obklopen velkou podporou mé rodiny - mé ženy a našich dvou dcer. Všichni se od sebe každý den učíme.
                </Text>
                <Text color={textColor} fontSize={'xl'}>
                  Poslední dva roky mě na mé cestě doprovází také můj věrný přítel, pes Ron. Společně objevujeme krásy přírody, zejména lesy v okolí Brna. Naše společné dobrodružství nám přináší nejen radost z pohybu, ale i jedinečný pohled na město z výšin Hádecké planiny.
                </Text>
                <Text color={textColor} fontSize={'xl'}>
                  Tato kombinace profesionálního růstu, rodinného zázemí a spojení s přírodou mi pomáhá udržovat zdravý nadhled a rovnováhu v životě. Věřím, že právě toto všechno mi dává kapacitu pomáhat druhým na jejich vlastní cestě.
                </Text>
              </Stack>
            </Box>

            {/* Image */}
            <Box
              flex="1"
              position="relative"
              width="100%"
              height="400px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="xl"
            >
              <OptimizedImage
                src="/src/assets/img/Tom&RonScootering03.jpeg"
                alt="Tom a Ron při scooteringu"
                width="100%"
                height="100%"
                objectFit="cover"
                style={{
                  borderRadius: '0.5rem'
                }}
              />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box py={20} bg={cardBg}>
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
                href="/calendar"
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
    </Box>
  )
} 