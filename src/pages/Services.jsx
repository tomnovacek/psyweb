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
  FaMoneyBillAlt
} from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'
import OptimizedImage from '../components/OptimizedImage'
import SEO from '../components/SEO'
import StructuredData from '../components/StructuredData'

export default function Services() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  const heroCardBg = useColorModeValue('whiteAlpha.200', 'blackAlpha.200')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const headingColor = useColorModeValue('gray.700', 'white')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box bg={bgColor}>
      <SEO
        title="Tomáš Nováček - Psychoterapeut | Brno"
        description="Psychoterapie a poradenství v centru Brna. Nabízím individuální terapii, léčbu úzkosti, podporu při depresi a poradenství při traumatu."
        keywords="psychoterapeutické služby, individuální terapie, léčba úzkosti, podpora při depresi, poradenství při traumatu, Brno, Česká republika"
        url="https://tomnovacek.com/services"
        image="/src/assets/img/room.jpeg"
        preloadImages={[
          '/src/assets/img/room.webp',  // Hero background
          'tom-home.webp',  // Portrait
          'therapy-session.webp',  // Individual therapy
          'healing-space.webp',  // Trauma support
          'video-therapy.webp'  // Online therapy
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
            src="/src/assets/img/room.webp"
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
                  Moje služby
                </Text>
                <br />
                <Text as={'span'} color={'green.400'}>
                  & Podmínky
                </Text>
              </Heading>
              <Text color={'white'} fontSize={'xl'} mb={8}>
                Nabízím terapeutické sezení na podporu vašeho duševního zdraví a osobního růstu. Společně prozkoumáme vaše potřeby a vytvoříme plán, který vám pomůže dosáhnout vašich cílů.
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
                  to="#pricing"
                  rounded={'full'}
                  size={'lg'}
                  fontWeight={'normal'}
                  px={6}
                >
                  Ceník služeb
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

      {/* Areas of Expertise */}
      <Box py={20} bg={bgColor}>
        <Container maxW={'7xl'}>
          <Stack spacing={4} maxW={'3xl'} textAlign={'center'} mb={10} mx="auto">
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}
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
                Oblasti specializace
              </Text>
            </Heading>
            <Text color={textColor} fontSize={'xl'}>
              Nabízím širokou škálu terapeutických služeb zaměřených na vaše specifické potřeby a cíle.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {[
              {
                title: 'Individuální terapie',
                description: 'Osobní sezení zaměřená na vaše specifické potřeby a cíle.',
                icon: FaUserShield,
                image: 'therapy-session.webp'
              },
              {
                title: 'Úzkost a deprese',
                description: 'Podpora při zvládání úzkosti a deprese, rozvoj strategií zvládání.',
                icon: FaHeartbeat,
                image: 'mindfulness.webp'
              },
              {
                title: 'Podpora při traumatu',
                description: 'Bezpečný prostor pro zpracování traumatických zkušeností.',
                icon: FaExchangeAlt,
                image: 'healing-space.webp'
              },
              {
                title: 'Vztahové poradenství',
                description: 'Podpora párů v budování zdravých a naplňujících vztahů.',
                icon: FaUsers,
                image: 'relationships.webp'
              },
              {
                title: 'Online terapie',
                description: 'Flexibilní a dostupná terapie prostřednictvím video sezení.',
                icon: FaVideo,
                image: 'video-therapy.webp'
              },
              {
                title: 'Rodinná terapie',
                description: 'Podpora rodin v budování zdravých vztahů a komunikace.',
                icon: FaUserFriends,
                image: 'family.webp'
              },
            ].map((service, index) => (
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
                <Flex direction={{ base: 'column', md: 'row' }} gap={6}>
                  <Box
                    position="relative"
                    width={{ base: '100%', md: '200px' }}
                    height={{ base: '200px', md: '200px' }}
                    borderRadius="lg"
                    overflow="hidden"
                    flexShrink={0}
                  >
                    <OptimizedImage
                      src={service.image}
                      alt={service.title}
                      objectFit="cover"
                      width="100%"
                      height="100%"
                    />
                  </Box>
                  <Box flex="1">
                    <Icon
                      as={service.icon}
                      w={10}
                      h={10}
                      color="green.400"
                      mb={4}
                    />
                    <Heading fontSize={'xl'} mb={4}>
                      {service.title}
                    </Heading>
                    <Text color={textColor}>
                      {service.description}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* What to Expect Section */}
      <Box py={20} bg={cardBg}>
        <Container maxW={'7xl'}>
          <Stack spacing={8}>
            <Stack spacing={4} textAlign={'center'} maxW={'3xl'} mx="auto">
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}
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
                      <Heading fontSize={'xl'}>Úvodní konzultace</Heading>
                    </Flex>
                    <Text color={textColor} fontSize={'lg'}>
                      Vaše první sezení je příležitostí, abychom se navzájem poznali a prodiskutovali vaše cíle pro terapii. Probereme vaši historii, současné trápění a zformuluje základ plánu terapie.
                    </Text>
                  </Box>
                  <Box>
                    <Flex align="center" gap={3} mb={4}>
                      <Icon as={FaClock} w={8} h={8} color="green.400" />
                      <Heading fontSize={'xl'}>Délka a frekvence</Heading>
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
                  src="tom-home.webp"
                  alt="Tom Nováček"
                  objectFit="cover"
                  width="50%"
                  height="50%"
                  borderRadius="lg"
                />
              </Box>
            </Flex>
          </Stack>
        </Container>
      </Box>

      {/* Pricing Section */}
      <Box py={20} bg={bgColor} >
        <Container maxW={'7xl'} id="pricing">
          <Stack spacing={4} maxW={'3xl'} textAlign={'center'} mb={20} mx="auto">
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}
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
                price: '1 200 Kč',
                duration: '50 minut',
                description: 'Standardní terapeutické sezení zaměřené na vaše specifické potřeby.',
                features: [
                  'Osobní setkání v terapeutické místnosti',
                  'Individuální přístup',
                  'Flexibilní termíny',
                  'Možnost online sezení'
                ],
                icon: FaUserShield,
                image: 'therapy-session.webp'
              },
              {
                title: 'Online terapie',
                price: '1 000 Kč',
                duration: '50 minut',
                description: 'Terapeutické sezení přes video hovor pro vaše pohodlí.',
                features: [
                  'Bezpečné video hovory',
                  'Flexibilní termíny',
                  'Komfort vašeho domova',
                  'Stejná kvalita péče'
                ],
                icon: FaVideo,
                image: 'video-therapy.webp'
              }
            ].map((service, index) => (
              <Box
                key={index}
                bg={useColorModeValue('green.100', 'gray.800')}
                boxShadow={'xl'}
                rounded={'xl'}
                p={8}
                position="relative"
                transition="all 0.3s"
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow: '2xl',
                }}
                pt={20}
              >
                <Box
                  position="absolute"
                  top="-60px"
                  left="50%"
                  transform="translateX(-50%)"
                  width="120px"
                  height="120px"
                  rounded="full"
                  overflow="hidden"
                  boxShadow="lg"
                  border="4px solid"
                  borderColor={useColorModeValue('white', 'gray.700')}
                >
                  <OptimizedImage
                    src={service.image}
                    alt={service.title}
                    objectFit="cover"
                    width="100%"
                    height="100%"
                  />
                </Box>
                <Stack spacing={6} align="center">
                  <Heading fontSize={'2xl'} textAlign="center">{service.title}</Heading>
                  <Text fontSize={'3xl'} fontWeight="bold" color="green.400" textAlign="center">
                    {service.price}
                  </Text>
                  <Text color={textColor} fontSize={'lg'} textAlign="center">
                    {service.duration}
                  </Text>
                  <Text color={textColor} mb={4} textAlign="center">
                    {service.description}
                  </Text>
                  <List spacing={3} width="100%">
                    {service.features.map((feature, idx) => (
                      <ListItem key={idx}>
                        <ListIcon as={CheckCircleIcon} color="green.400" />
                        {feature}
                      </ListItem>
                    ))}
                  </List>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Insurance & Payment Section */}
      <Box py={20} bg={cardBg}>
        <Container maxW={'7xl'}>
          <Stack spacing={8}>
            <Stack spacing={4} textAlign={'center'} maxW={'3xl'} mx="auto">
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}
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
                  <Heading fontSize={'xl'}>Zdravotní pojištění</Heading>
                </Flex>
                <Text color={textColor} fontSize={'lg'}>
                  Služby si klienti hradí z vlastních prostředků. Nicméně, některé pojišťovny částečně přispívají na psychoterapii v rámci svych nadstandardních preventivních programů. Jsem registrován v rámci České Asociace pro Psychoterapii tak, aby klienti mohli tyto výhody čerpat. Doporučuji kontaktovat vaši pojišťovnu pro více informací.
                </Text>
              </Box>
              <Box>
                <Flex align="center" gap={3} mb={4}>
                  <Icon as={FaMoneyBillAlt} w={8} h={8} color="green.400" />
                  <Heading fontSize={'xl'}>Způsoby platby</Heading>
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
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}
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
                bg={'green.400'}
                _hover={{ bg: 'green.300' }}
                leftIcon={<FaCalendarAlt />}
              >
                Objednat konzultaci
              </Button>
              <Button
                as={RouterLink}
                to="/about"
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={8}
                variant="outline"
                colorScheme={'green'}
                _hover={{ bg: 'green.50' }}
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