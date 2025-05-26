import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  useColorModeValue,
  Button,
  Badge,
  Flex,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getAllPosts } from '../utils/mdx'
import { MDXProvider } from '@mdx-js/react'
import OptimizedImage from '../components/OptimizedImage'
import OptimizedAvatar from '../components/OptimizedAvatar'
import SEO from '../components/SEO'

// MDX components configuration
const components = {
  h1: (props) => <Heading as="h1" size="xl" mb={4} {...props} />,
  h2: (props) => <Heading as="h2" size="lg" mb={3} {...props} />,
  h3: (props) => <Heading as="h3" size="md" mb={2} {...props} />,
  p: (props) => <Text mb={4} {...props} />,
  a: (props) => <Text as="a" color="blue.500" {...props} />,
  ul: (props) => <Box as="ul" mb={4} {...props} />,
  ol: (props) => <Box as="ol" mb={4} {...props} />,
  li: (props) => <Box as="li" mb={2} {...props} />,
}

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  
  // Move hooks to the top level
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  const headingColor = useColorModeValue('gray.700', 'white')
  const textColor = useColorModeValue('gray.600', 'gray.400')

  useEffect(() => {
    const loadPosts = async () => {
      try {
        console.log('Loading posts...') // Debug log
        const allPosts = await getAllPosts()
        console.log('Loaded posts:', allPosts) // Debug log
        setPosts(allPosts)
      } catch (error) {
        console.error('Error loading posts:', error)
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [])

  // Debug log to see posts state
  console.log('Current posts state:', posts)

  if (loading) {
    return (
      <Box py={20}>
        <Container maxW={'7xl'}>
          <Text>Načítání...</Text>
        </Container>
      </Box>
    )
  }

  return (
    <MDXProvider components={components}>
      <Box bg={bgColor} py={20}>
        <SEO
          title="Blog - Duševní zdraví"
          description="Prozkoumejte články o duševním zdraví, terapii a osobním růstu. Profesionální pohledy od Tomáše Nováčka, licencovaného psychoterapeuta v Brně."
          keywords="blog o duševním zdraví, terapeutické poznatky, osobní růst, úzkost, deprese, trauma, psychoterapeutické články, Brno"
          url="https://tomnovacek.com/blog"
          image="/src/assets/img/mindfulness.webp"
        />
        <Container maxW={'7xl'}>
          <Stack spacing={4} maxW={'7xl'} textAlign={'center'} mb={10}>
            <Heading fontSize={'3xl'}>Blog</Heading>
            <Text color={textColor} fontSize={'xl'}>
              Něco z toho o čem přemýšlím, na co se mě klienti ptali a co by mohl být užitečné i vám.
            </Text>
          </Stack>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {posts.map((post, index) => {
              console.log('Rendering post:', post) // Debug log
              const { frontmatter } = post
              return (
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
                  {frontmatter.image && (
                    <OptimizedImage
                      src={frontmatter.image}
                      alt={frontmatter.title}
                      objectFit="cover"
                      height="200px"
                      width="100%"
                    />
                  )}
                  <Box p={6}>
                    <Stack spacing={4}>
                      {frontmatter.tags && (
                        <Stack direction={'row'} spacing={2}>
                          {frontmatter.tags.map((tag, i) => (
                            <Badge key={i} colorScheme="green" px={2} py={1} rounded="md">
                              {tag}
                            </Badge>
                          ))}
                        </Stack>
                      )}
                      <Heading
                        color={headingColor}
                        fontSize={'2xl'}
                        fontFamily={'body'}
                      >
                        {frontmatter.title}
                      </Heading>
                      <Text color={textColor}>{frontmatter.excerpt}</Text>
                      {frontmatter.author && (
                        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                          <OptimizedAvatar src={frontmatter.author.image} alt={frontmatter.author.name} />
                          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                            <Text fontWeight={600}>{frontmatter.author.name}</Text>
                            <Text color={textColor}>{frontmatter.date} · {frontmatter.readTime}</Text>
                          </Stack>
                        </Stack>
                      )}
                    </Stack>
                  </Box>
                </Box>
              )
            })}
          </SimpleGrid>
          <Stack align={'center'} mt={10}>
            <Button
              as={RouterLink}
              to="/blog"
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
              Více článků
            </Button>
          </Stack>
        </Container>
      </Box>
    </MDXProvider>
  )
} 