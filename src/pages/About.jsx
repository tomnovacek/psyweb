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
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { FaGraduationCap, FaUserMd, FaHeart } from 'react-icons/fa'

export default function About() {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} py={20}>
      <Container maxW={'7xl'}>
        {/* Hero Section */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={20}>
          <Stack spacing={4}>
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
                About Me
              </Text>
            </Heading>
            <Text color={'gray.600'} fontSize={'xl'}>
              I am a licensed psychotherapist with over 10 years of experience in helping individuals navigate through life's challenges and achieve personal growth.
            </Text>
          </Stack>
          <Box
            position="relative"
            height="620px"
            rounded="2xl"
            overflow="hidden"
            boxShadow="2xl"
          >
            <Image
              src="/src/assets/img/tom-home.webp"
              alt="Tom Novacek"
              objectFit="cover"
              width="100%"
              height="100%"
            />
          </Box>
        </SimpleGrid>

        {/* My Approach Section */}
        <Box mb={20}>
          <Stack spacing={4} mb={10}>
            <Heading fontSize={'3xl'}>My Approach</Heading>
            <Text color={'gray.600'} fontSize={'xl'}>
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
                icon: FaUserMd,
                title: 'Evidence-Based',
                text: 'Utilizing proven therapeutic approaches that have shown positive results.',
              },
              {
                icon: FaGraduationCap,
                title: 'Holistic',
                text: 'Addressing the whole person - mind, body, and spirit - in the healing process.',
              },
            ].map((feature, index) => (
              <Box
                key={index}
                bg={useColorModeValue('white', 'gray.800')}
                p={6}
                rounded="xl"
                boxShadow="lg"
                textAlign="center"
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
                <Text color={'gray.600'}>{feature.text}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* Education & Credentials Section */}
        <Box mb={20}>
          <Stack spacing={4} mb={10}>
            <Heading fontSize={'3xl'}>Education & Credentials</Heading>
            <Text color={'gray.600'} fontSize={'xl'}>
              My professional journey has been dedicated to continuous learning and growth in the field of psychotherapy.
            </Text>
          </Stack>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box
              bg={useColorModeValue('white', 'gray.800')}
              p={6}
              rounded="xl"
              boxShadow="lg"
            >
              <Heading fontSize={'2xl'} mb={4}>Education</Heading>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.400" />
                  Master's Degree in Clinical Psychology
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.400" />
                  Advanced Certification in Cognitive Behavioral Therapy
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.400" />
                  Specialized Training in Mindfulness-Based Interventions
                </ListItem>
              </List>
            </Box>
            <Box
              bg={useColorModeValue('white', 'gray.800')}
              p={6}
              rounded="xl"
              boxShadow="lg"
            >
              <Heading fontSize={'2xl'} mb={4}>Professional Memberships</Heading>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.400" />
                  Licensed Psychotherapist
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.400" />
                  Member of Professional Psychotherapy Association
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.400" />
                  Certified in Trauma-Informed Care
                </ListItem>
              </List>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Areas of Expertise */}
        <Box>
          <Stack spacing={4} mb={10}>
            <Heading fontSize={'3xl'}>Areas of Expertise</Heading>
            <Text color={'gray.600'} fontSize={'xl'}>
              I specialize in helping clients navigate various mental health challenges and life transitions.
            </Text>
          </Stack>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {[
              'Anxiety & Depression',
              'Trauma & PTSD',
              'Relationship Issues',
              'Life Transitions',
              'Stress Management',
              'Personal Growth',
            ].map((expertise, index) => (
              <Box
                key={index}
                bg={useColorModeValue('white', 'gray.800')}
                p={4}
                rounded="lg"
                boxShadow="md"
                textAlign="center"
              >
                <Text fontSize={'lg'} fontWeight="medium">
                  {expertise}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  )
} 