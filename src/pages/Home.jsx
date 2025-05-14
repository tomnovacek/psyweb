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
        const allPosts = await getAllPosts()
        setNewestPosts(allPosts.slice(0, 2))
      } catch (error) {
        console.error('Error loading posts:', error)
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [])

  return (
    <>
      <SEO
        title="Home"
        description="Professional psychotherapy services in Prague. Specializing in individual therapy, couples counseling, and family therapy. Book your session today."
        keywords="psychotherapy, counseling, Prague, individual therapy, couples therapy, family therapy"
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
            alt="Forest path"
            objectFit="cover"
            width="100%"
            height="100%"
            priority="true"
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
                  Psychotherapy
                </Text>
                <br />
                <Text as={'span'} color={'green.400'}>
                  & Personal Growth
                </Text>
              </Heading>
              <Text color={'white'} fontSize={'xl'} mb={8}>
                I am a licensed psychotherapist dedicated to helping individuals navigate life's challenges and achieve personal growth. Through a combination of evidence-based approaches and compassionate care, I provide a safe space for healing and transformation.
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
                  Schedule a Consultation
                </Button>
                <Button
                  as={RouterLink}
                  to="/services"
                  rounded={'full'}
                  size={'lg'}
                  fontWeight={'normal'}
                  px={6}
                >
                  Learn More
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
                  alt="Tom Novacek"
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
                About Me
              </Text>
            </Heading>
            <Text color={textColor} fontSize={'xl'}>
              I am a licensed psychotherapist with extensive experience in helping individuals navigate through life's challenges and achieve personal growth.
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
                      alt="Therapy Room"
                      objectFit="cover"
                      width="100%"
                      height="100%"
                    />
                  </Box>
                </Center>
                <Heading fontSize={'2xl'} mb={4} mt={4} textAlign="center">My Practice</Heading>
                <Text fontSize={'lg'} mb={4}>
                  For the past seven years, I have been deeply engaged in psychological counseling and have been practicing therapy for four years. My expertise is grounded in thorough education and continuous professional development. I have completed a two-year specialized training in coaching and a six-year certified training in integrative psychotherapy. I am also a full member of the Czech Association for Psychotherapy.
                  
                  I am part of a professional community that emphasizes ethical standards and high qualifications in the field of psychotherapy.
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
                      alt="Family Therapy"
                      objectFit="cover"
                      width="100%"
                      height="100%"
                    />
                  </Box>
                </Center>
                <Heading fontSize={'2xl'} mb={4} mt={4} textAlign="center">My Approach</Heading>
                <Text fontSize={'lg'} mb={4}>
                  I believe that every person has inner resources to cope with life's challenges. However, there are times when we may feel stuck or powerless to deal with difficult situations. In such moments, I support you in understanding your problems and finding effective ways to overcome them. I respect the uniqueness of each client, which is why I take an individual approach to everyone. Together, we explore your personal journey of self-discovery and uncover the inner strengths that can help you live a more fulfilling and satisfying life.
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
            Read More
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
                My Services
              </Text>
            </Heading>
            <Text color={textColor} fontSize={'xl'}>
              I offer a range of therapeutic services to support your mental health and personal growth journey.
            </Text>
          </Stack>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w="full">
            {[
              {
                icon: FaUserFriends,
                title: 'Individual Therapy',
                description: 'One-on-one sessions focused on your personal growth and healing.',
                features: [
                  'Personalized treatment plans',
                  'Safe, confidential environment',
                  'Evidence-based approaches',
                  'Flexible scheduling options'
                ]
              },
/*               {
                icon: FaHeart,
                title: 'Couples Therapy',
                description: 'Support for couples looking to improve their relationship and communication.',
                features: [
                  'Relationship assessment',
                  'Communication skills',
                  'Conflict resolution',
                  'Trust building'
                ]
              }, */
              {
                icon: FaBrain,
                title: 'Anxiety & Depression',
                description: 'Specialized treatment using evidence-based approaches.',
                features: [
                  'Coping strategies',
                  'Stress management',
                  'Mood regulation',
                  'Lifestyle changes'
                ]
              },
/*               {
                icon: FaComments,
                title: 'Life Coaching',
                description: 'Guidance for personal and professional development.',
                features: [
                  'Goal setting',
                  'Career guidance',
                  'Life balance',
                  'Personal growth'
                ]
              }, */
              {
                icon: FaHandHoldingHeart,
                title: 'Trauma Support',
                description: 'Specialized care for processing and healing from trauma.',
                features: [
                  'Trauma-informed care',
                  'Safe processing',
                  'Healing techniques',
                  'Supportive environment'
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
              View All Services
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Blog Section */}
      <Box py={20} bg={cardBg}>
        <Container maxW={'7xl'} centerContent>
          <Stack spacing={4} maxW={'3xl'} textAlign={'center'} mb={10}>
            <Heading fontSize={'3xl'}>Latest from the Blog</Heading>
            <Text color={textColor} fontSize={'xl'}>
              Insights and resources to support your mental health journey
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
              Read More Posts
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
              Book a Consultation
            </Button>
          </Stack>
      </Box>
    </>
  )
} 