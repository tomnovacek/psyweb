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
  UnorderedList,
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
  FaGraduationCap,
  FaUserMd,
  FaHeart,
  FaBrain,
  FaBook,
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
  FaCertificate,
  FaUserFriends,
  FaVideo,
  FaCashRegister,
  FaCreditCard,
  FaShieldAlt,
  FaClock,
  FaInfoCircle,
  FaIdCard,
  FaMoneyBill,
  FaMoneyBillAlt,
  FaUserCircle,
} from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'
import OptimizedImage from '../components/OptimizedImage'
import SEO from '../components/SEO'
import StructuredData from '../components/StructuredData'
import HeroTextBox from '../components/HeroTextBox'


export default function About() {
  const bgColor = useColorModeValue('gray.100', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  const heroCardBg = useColorModeValue('whiteAlpha.200', 'blackAlpha.200')
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const headingColor = useColorModeValue('green.500', 'gray.200')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box bg={bgColor}>
      <SEO
        title="Tomáš Nováček - psycholog a terapeut | Brno"
        description="Nabízím individuální terapii pro dospělé, pro podporu osobního růstu, při úzkosti, depresi a vztahových problémech."
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
      <Box position="relative" width="100%" height={{ base: "auto", md: "75vh" }} overflow="hidden">
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
            {/* Text Box  on the right */}
            <HeroTextBox
              title="Moje cesta"
              titleAccent="& Můj přístup"
              description="Posledních sedm let věnuji snaze pomáhat lidem překonávat životní výzvy a dosahovat osobního růstu. Psychoterapii nevnímám jako místo, kde se rychle vyřeší problémy. Spíš jako prostor, kde se dá  na chvíli zastavit, začít víc vnímat sama sebe, lépe porozumět sobě i světu, ve kterém žijeme, a rozšířit repertoár chování o nové možnosti, které dříve nebyly možné."
              primaryText="Objednat konzultaci"
              primaryHref="/calendar"
              secondaryText="Moje služby"
              secondaryHref="/services"
            />

          </Flex>
        </Container>
      </Box>

      {/* About Section */}
      <Box py={20} bg={cardBg}>
        <Container maxW={'7xl'}>
          <Stack spacing={4} maxW={'3xl'} textAlign={'center'} mb={10} mx="auto">
            <Heading variant="section">
              <Text as="span">
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
                text: 'Snažím se vytvářet bezpečné prostředí, kde se můžete cítit slyšeni a pochopeni; kde není nutné hrát roli, kterou očekávají ostatní.',
              },
              {
                icon: FaBrain,
                title: 'Výzkumem ověřený',
                text: 'Využívám terapeutické přístupy podložené výzkumy, které však neztrácejí kontakt s unikátním okamžikem, lidskostí a tvořivostí.',
              },
              {
                icon: FaUserCircle,
                title: 'Na míru klientům',
                text: 'Respektuji individuálnost a specifické potřeby každého klienta. Každý příběh je jiný a zaslouží si jiný přístup – terapii na míru.',
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
      <Box py={20} bg={bgColor}>
        <Container maxW={'7xl'}>
          <Stack spacing={4} maxW={'3xl'} textAlign={'center'} mb={10} mx="auto">
            <Heading variant="section">
              <Text as="span">
                Vzdělání & Kvalifikace
              </Text>
            </Heading>
            <Text color={textColor} fontSize={'xl'}>
              Mám za sebou studium psychologie a dlouhodobý psychoterapeutický výcvik. A učím se dál, od kolegů i klientů.
            </Text>
          </Stack>

          <Flex
            direction={{ base: 'column', lg: 'row' }}
            gap={10}
            align="center"
          >
            <Box flex="1">
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
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
                      Certifikovaný výcvik v koučování
                    </ListItem>
                    <ListItem color={textColor}>
                      <ListIcon as={CheckCircleIcon} color="green.400" />
                      Výcvik v <Link href='https://www.psychoterapie-integrace.cz/vycvik/popis-vycviku-VIP4' isExternal target='_blank' rel='noopener noreferrer'>integrativní psychoterapii</Link>
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
                      Certifikovaný psychoterapeut – 1010 hodin výcviku <Link href='src/ext/Certifikat.pdf' target='_blank' rel='noopener noreferrer' color="green.400">(Certifikát)</Link>
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
                <Box>
                  <Flex align="center" gap={3} mb={4}>
                    <Icon as={FaBook} w={8} h={8} color="green.400" />
                    <Heading color={headingColor} fontSize={'xl'}>Další absolvované kurzy</Heading>
                  </Flex>
                  <List spacing={3}>
                    <ListItem color={textColor}>
                      <ListIcon as={CheckCircleIcon} color="green.400" />
                      Psychofamaka v terapeutické praxi
                    </ListItem>
                    <ListItem color={textColor}>
                      <ListIcon as={CheckCircleIcon} color="green.400" />
                      Neurodiverzita (ADHD, ADD, Autismus)
                    </ListItem>
                    <ListItem color={textColor}>
                      <ListIcon as={CheckCircleIcon} color="green.400" />
                      Bezpečí v práci s tělem s traumatizovaným klientem
                    </ListItem>
                  </List>
                </Box>
              </SimpleGrid>
            </Box>
          </Flex>
          <Flex justify="center" mt={5}>
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

      {/* My Journey Section */}
      <Box py={20} bg={cardBg}>
        <Container maxW={'7xl'}>
          <Stack spacing={4} maxW={'3xl'} textAlign={'center'} mb={10} mx="auto">
            <Heading variant="section">
              <Text as="span">
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
                  V osobním životě mám neocenitelnou podporu své rodiny – ženy a dvou dcer. Doma se všichni od sebe učíme, i když někdy mám pocit, že už se od dcer učím spíše já. Mají totiž zvláštní talent ukázat mi věci z úplně jiného úhlu pohledu, což se mi v práci docela hodí.
                </Text>
                <Text color={textColor} fontSize={'xl'}>
                  Posledních pár let mě na cestách doprovází také můj věrný přítel, pes Ron. Učí mě o bezpodmínečné lásce, trpělivosti a schopnosti radovat se z maličkostí. Často mě zavede na místa, kde jsem nebyl, nebo mi je ukáže způsobem, jakým jsem je dříve neviděl – stává se s ním totiž každá procházka dobrodružstvím.
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
      <Box py={20} bg={bgColor}>
        <Container maxW={'7xl'}>
          <Stack
            spacing={8}
            align="center"
            textAlign="center"
            maxW={'3xl'}
            mx="auto"
          >
            <Heading variant="section">
              <Text as="span">
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
    </Box>
  )
} 