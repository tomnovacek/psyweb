import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Image,
  useColorModeValue,
  Badge,
  Avatar,
  Divider,
  Button,
} from '@chakra-ui/react'
import { useParams, Link as RouterLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getPostBySlug } from '../utils/mdx'
import MDXContent from '../components/MDXContent'
import { MDXProvider } from '@mdx-js/react'

export default function BlogPost() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPost = async () => {
      try {
        const postData = await getPostBySlug(slug)
        setPost(postData)
      } catch (error) {
        console.error('Error loading post:', error)
      } finally {
        setLoading(false)
      }
    }

    loadPost()
  }, [slug])

  if (loading) {
    return (
      <Box py={20}>
        <Container maxW={'7xl'}>
          <Text>Loading...</Text>
        </Container>
      </Box>
    )
  }

  if (!post) {
    return (
      <Box py={20}>
        <Container maxW={'7xl'}>
          <Heading>Post not found</Heading>
          <Button
            as={RouterLink}
            to="/blog"
            mt={4}
            colorScheme="green"
            variant="outline"
          >
            Back to Blog
          </Button>
        </Container>
      </Box>
    )
  }

  const { frontmatter, Component } = post

  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container maxW={'7xl'} py={12}>
        <Stack spacing={8}>
          {/* Header */}
          <Stack spacing={4}>
            <Stack direction={'row'} spacing={4}>
              {frontmatter.tags.map((tag, idx) => (
                <Badge key={idx} colorScheme="green">
                  {tag}
                </Badge>
              ))}
            </Stack>
            <Heading fontSize={'4xl'}>{frontmatter.title}</Heading>
            <Stack direction={'row'} spacing={4} align={'center'}>
              <Avatar
                src={frontmatter.author.image}
                alt={frontmatter.author.name}
                size={'md'}
              />
              <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                <Text fontWeight={600}>{frontmatter.author.name}</Text>
                <Text color={'gray.500'}>
                  {frontmatter.date} · {frontmatter.readTime} read
                </Text>
              </Stack>
            </Stack>
          </Stack>

          {/* Featured Image */}
          <Box>
            <Image
              rounded={'md'}
              alt={frontmatter.title}
              src={frontmatter.image}
              fallbackSrc="https://via.placeholder.com/1200x600"
              objectFit={'cover'}
              w={'full'}
              h={{ base: '200px', md: '400px' }}
            />
          </Box>

          {/* Content */}
          <Box
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={8}
          >
            <MDXProvider>
              <MDXContent>
                <Component />
              </MDXContent>
            </MDXProvider>
          </Box>

          {/* Author Bio */}
          <Box
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={8}
          >
            <Stack spacing={4}>
              <Heading fontSize={'2xl'}>About the Author</Heading>
              <Divider />
              <Stack direction={'row'} spacing={4} align={'center'}>
                <Avatar
                  src={frontmatter.author.image}
                  alt={frontmatter.author.name}
                  size={'lg'}
                />
                <Stack spacing={2}>
                  <Heading fontSize={'xl'}>{frontmatter.author.name}</Heading>
                  <Text color={'gray.600'}>
                    {frontmatter.author.role}
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </Box>

          {/* Back to Blog Button */}
          <Box textAlign="center">
            <Button
              as={RouterLink}
              to="/blog"
              colorScheme="green"
              variant="outline"
              size="lg"
            >
              Back to Blog
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
} 