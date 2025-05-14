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
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { FaGraduationCap, FaUserMd, FaHeart, FaBrain, FaHandHoldingHeart, FaLightbulb, FaHeartbeat, FaUserShield, FaUsers, FaExchangeAlt, FaBalanceScale, FaSeedling } from 'react-icons/fa'
import OptimizedImage from '../components/OptimizedImage'
import SEO from '../components/SEO'
import StructuredData from '../components/StructuredData'

export default function About() {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const headingColor = useColorModeValue('gray.700', 'white')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box bg={bgColor}>
      <SEO
        title="O Tomáši Nováčkovi"
        description="Seznamte se s Tomášem Nováčkem, profesionálním psychoterapeutem v Brně, Česká republika. Specializace na individuální terapii, úzkost, depresi a podporu při traumatu."
        keywords="psychoterapeut, Tomáš Nováček, terapie, poradenství, Brno, Česká republika, profesionální zkušenosti, kvalifikace"
        url="https://tomnovacek.com/about"
        image="/src/assets/img/tom-home.webp"
      />
      <StructuredData type="Person" />
      {/* Hero Section */}
      <Box py={20} bg={cardBg}>
        <Container maxW="7xl">
          <Flex
            justify="center"
            align="center"
            direction={{ base: 'column', md: 'row' }}
            gap={8}
          >
            {/* Text Box */}
            <Box
              flex="1"
              maxW="2xl"
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
                  & Profesionální dráha
                </Text>
              </Heading>
              <Text color={textColor} fontSize={'xl'} mb={8}>
                S více než desetiletou zkušeností v psychoterapii se věnuji pomoci lidem překonávat životní výzvy a dosahovat osobního růstu prostřednictvím ověřených přístupů a soucitné péče.
              </Text>
            </Box>

            {/* Portrait Image */}
            <Box
              flex="1"
              maxW="xs"
              position="relative"
              display={{ base: 'none', md: 'block' }}
            >
              <OptimizedImage
                src="/src/assets/img/tom-home.webp"
                alt="Tom Nováček"
                borderRadius="lg"
                objectFit="cover"
                width="100%"
                height="auto"
                transition="all 0.3s"
                _hover={{
                  transform: 'scale(1.02)',
                }}
              />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* About Section */}
      <Box py={20} bg={bgColor}>
        <Container maxW={'7xl'}>
          <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mb={10}>
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
                Můj přístup
              </Text>
            </Heading>
            <Text color={textColor} fontSize={'xl'}>
              Věřím v vytváření bezpečného, nehodnotícího prostoru, kde klienti mohou prozkoumávat své myšlenky, pocity a zkušenosti. Můj terapeutický přístup je integrativní, čerpající z různých ověřených modalit, které odpovídají vašim jedinečným potřebám.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {[
              {
                icon: FaHeart,
                title: 'Na klienta zaměřený',
                text: 'Vytváření teplého, empatického prostředí, kde se cítíte slyšeni a pochopeni.',
              },
              {
                icon: FaBrain,
                title: 'Ověřený',
                text: 'Využívání prokázaných terapeutických přístupů, které prokázaly pozitivní výsledky.',
              },
              {
                icon: FaHandHoldingHeart,
                title: 'Holistický',
                text: 'Zaměření na celou osobu - mysl, tělo a duši - v procesu uzdravení.',
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
                <Heading fontSize={'xl'} mb={4}>
                  {feature.title}
                </Heading>
                <Text color={textColor}>{feature.text}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Education & Credentials */}
      <Box py={20} bg={cardBg}>
        <Container maxW={'7xl'}>
          <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mb={10}>
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
                Vzdělání & Kvalifikace
              </Text>
            </Heading>
            <Text color={textColor} fontSize={'xl'}>
              Moje profesionální cesta byla věnována kontinuálnímu učení a růstu v oboru psychoterapie.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box
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
              <Heading fontSize={'2xl'} mb={4}>Vzdělání</Heading>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.400" />
                  Magisterský titul v psychologii
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.400" />
                  Magisterský titul v managementu
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.400" />
                  Specializovaný výcvik v integrativní psychoterapii
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.400" />
                  Certifikovaný výcvik v koučování
                </ListItem>
              </List>
            </Box>
            <Box
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
              <Heading fontSize={'2xl'} mb={4}>Profesionální členství</Heading>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.400" />
                  Certifikovaný psychoterapeut
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.400" />
                  Certifikovaný kouč
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.400" />
                  Člen profesionální psychoterapeutické asociace <Link href="https://czap.cz/" isExternal color="green.400">(ČAP)</Link>
                </ListItem>
              </List>
            </Box>
          </SimpleGrid>
          <Center mt={10}>
            <OptimizedImage
              src="/src/assets/img/CAP.png"
              alt="ČAP Logo"
              width="200px"
              height="auto"
              transition="all 0.3s"
              _hover={{
                transform: 'scale(1.05)',
              }}
            />
          </Center>
        </Container>
      </Box>

      {/* Areas of Expertise */}
      <Box py={20} bg={bgColor}>
        <Container maxW={'7xl'}>
          <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mb={10}>
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
                Oblasti odbornosti
              </Text>
            </Heading>
            <Text color={textColor} fontSize={'xl'}>
              Specializuji se na pomoc klientům při zvládání různých psychických obtíží a životních změn.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {[
              {
                title: 'Úzkost & Deprese',
                icon: FaHeartbeat
              },
              {
                title: 'Trauma & PTSD',
                icon: FaUserShield
              },
              {
                title: 'Vztahové problémy',
                icon: FaUsers
              },
              {
                title: 'Životní změny',
                icon: FaExchangeAlt
              },
              {
                title: 'Zvládání stresu',
                icon: FaBalanceScale
              },
              {
                title: 'Osobní růst',
                icon: FaSeedling
              },
            ].map((expertise, index) => (
              <Box
                key={index}
                bg={cardBg}
                boxShadow={'xl'}
                rounded={'xl'}
                p={6}
                textAlign="center"
                transition="all 0.3s"
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow: '2xl',
                }}
              >
                <Icon
                  as={expertise.icon}
                  w={8}
                  h={8}
                  color="green.400"
                  mb={3}
                />
                <Text fontSize={'lg'} fontWeight="medium" color={headingColor}>
                  {expertise.title}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Therapeutic Methods */}
      <Box py={20} bg={cardBg}>
        <Container maxW={'7xl'}>
          <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mb={10}>
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
                Terapeutické metody
              </Text>
            </Heading>
            <Text color={textColor} fontSize={'xl'}>
              Využívám různé ověřené terapeutické přístupy přizpůsobené vašim jedinečným potřebám a cílům.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {[
              {
                title: 'Individuální terapie',
                description: 'Individuální sezení zaměřená na osobní růst, uzdravení a rozvoj strategií zvládání.',
              },
              {
                title: 'Partnerské poradenství',
                description: 'Podpora partnerů v zlepšování komunikace, řešení konfliktů a posilování jejich vztahu.',
              },
              {
                title: 'Skupinová terapie',
                description: 'Sdílené zkušenosti uzdravení v podpůrném skupinovém prostředí, podporující spojení a vzájemné porozumění.',
              },
              {
                title: 'Online sezení',
                description: 'Flexibilní a dostupná terapie prostřednictvím zabezpečených video sezení, zachovávající stejnou kvalitu péče.',
              },
            ].map((method, index) => (
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
                <Heading fontSize={'xl'} mb={4}>
                  {method.title}
                </Heading>
                <Text color={textColor}>
                  {method.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  )
} 