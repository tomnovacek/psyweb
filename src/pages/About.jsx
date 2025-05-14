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
        title="About Tomáš Nováček"
        description="Learn about Tomáš Nováček, a professional psychotherapist in Brno, Czech Republic. Specializing in individual therapy, anxiety, depression, and trauma support."
        keywords="psychotherapist, Tomáš Nováček, therapy, counseling, Brno, Czech Republic, professional experience, qualifications"
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
                  My Journey
                </Text>
                <br />
                <Text as={'span'} color={'green.400'}>
                  & Professional Path
                </Text>
              </Heading>
              <Text color={textColor} fontSize={'xl'} mb={8}>
                With over a decade of experience in psychotherapy, I am dedicated to helping individuals navigate life's challenges and achieve personal growth through evidence-based approaches and compassionate care.
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
                alt="Tom Novacek"
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
                My Approach
              </Text>
            </Heading>
            <Text color={textColor} fontSize={'xl'}>
              I believe in creating a safe, non-judgmental space where clients can explore their thoughts, feelings, and experiences. My therapeutic approach is integrative, drawing from various evidence-based modalities to meet your unique needs.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {[
              {
                icon: FaHeart,
                title: 'Person-Centered',
                text: 'Creating a warm, empathetic environment where you feel heard and understood.',
              },
              {
                icon: FaBrain,
                title: 'Evidence-Based',
                text: 'Utilizing proven therapeutic approaches that have shown positive results.',
              },
              {
                icon: FaHandHoldingHeart,
                title: 'Holistic',
                text: 'Addressing the whole person - mind, body, and spirit - in the healing process.',
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
                Education & Credentials
              </Text>
            </Heading>
            <Text color={textColor} fontSize={'xl'}>
              My professional journey has been dedicated to continuous learning and growth in the field of psychotherapy.
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
              <Heading fontSize={'2xl'} mb={4}>Education</Heading>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.400" />
                  Master's Degree in Psychology
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.400" />
                  Master's Degree in Management
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.400" />
                  Specialized Training in Integrative Psychotherapy
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.400" />
                  Specialized Training in Coaching
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
              <Heading fontSize={'2xl'} mb={4}>Professional Memberships</Heading>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.400" />
                  Certified Psychoterapist
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.400" />
                  Certified Coach
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.400" />
                  Member of Professional Psychotherapy Association <Link href="https://czap.cz/" isExternal color="green.400">(ČAP)</Link>
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
                Areas of Expertise
              </Text>
            </Heading>
            <Text color={textColor} fontSize={'xl'}>
              I specialize in helping clients navigate various mental health challenges and life transitions.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {[
              {
                title: 'Anxiety & Depression',
                icon: FaHeartbeat
              },
              {
                title: 'Trauma & PTSD',
                icon: FaUserShield
              },
              {
                title: 'Relationship Issues',
                icon: FaUsers
              },
              {
                title: 'Life Transitions',
                icon: FaExchangeAlt
              },
              {
                title: 'Stress Management',
                icon: FaBalanceScale
              },
              {
                title: 'Personal Growth',
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
{/*       <Box py={20} bg={cardBg}>
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
                Therapeutic Methods
              </Text>
            </Heading>
            <Text color={textColor} fontSize={'xl'}>
              I utilize a variety of evidence-based therapeutic approaches tailored to your unique needs and goals.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {[
              {
                title: 'Individual Therapy',
                description: 'One-on-one sessions focused on personal growth, healing, and developing coping strategies.',
              },
              {
                title: 'Couples Counseling',
                description: 'Supporting partners in improving communication, resolving conflicts, and strengthening their relationship.',
              },
              {
                title: 'Group Therapy',
                description: 'Shared healing experiences in a supportive group setting, fostering connection and mutual understanding.',
              },
              {
                title: 'Online Sessions',
                description: 'Flexible and accessible therapy through secure video sessions, maintaining the same quality of care.',
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
      </Box> */}
    </Box>
  )
} 