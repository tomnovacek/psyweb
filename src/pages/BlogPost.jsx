import React, { Suspense } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Badge,
  Divider,
  Button,
  Spinner,
  Center,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { useParams, Link as RouterLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getPostBySlug } from '../utils/mdx'
import { MDXProvider } from '@mdx-js/react'
import SEO from '../components/SEO'
import StructuredData from '../components/StructuredData'
import OptimizedAvatar from '../components/OptimizedAvatar'
import OptimizedImage from '../components/OptimizedImage'

const LoadingFallback = () => (
  <Center h="200px">
    <Spinner size="xl" color="blue.500" />
  </Center>
)

// MDX components configuration
const components = {
  h1: (props) => <Heading as="h1" fontSize="3xl" fontWeight="bold" mb={4} {...props} />,
  h2: (props) => <Heading as="h2" fontSize="2xl" fontWeight="bold" mb={3} {...props} />,
  h3: (props) => <Heading as="h3" fontSize="xl" fontWeight="bold" mb={2} {...props} />,
  p: (props) => <Text mb={4} {...props} />,
  a: (props) => <Link color="green.500" {...props} />,
  ul: (props) => <List styleType="disc" ml={6} mb={4} {...props} />,
  ol: (props) => <List styleType="decimal" ml={6} mb={4} {...props} />,
  li: (props) => <ListItem mb={1} {...props} />,
  img: (props) => (
    <Box my={6}>
      <OptimizedImage
        src={props.src}
        alt={props.alt}
        borderRadius="md"
        maxW="100%"
        mx="auto"
      />
    </Box>
  ),
}

export default function BlogPost() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadPost = async () => {
      try {
        setIsLoading(true)
        const postData = await getPostBySlug(slug)
        if (!postData) {
          throw new Error('Post not found')
        }
        setPost(postData)
        setError(null)
      } catch (err) {
        console.error('Error loading post:', err)
        setError(err)
        setPost(null)
      } finally {
        setIsLoading(false)
      }
    }

    loadPost()
  }, [slug])

  if (isLoading) {
    return <LoadingFallback />
  }

  if (error) {
    return (
      <Container maxW="container.xl" py={8}>
        <Text color="red.500">Error loading blog post: {error.message}</Text>
        <Button as={RouterLink} to="/blog" mt={4}>
          Back to Blog
        </Button>
      </Container>
    )
  }

  if (!post) {
    return (
      <Container maxW="container.xl" py={8}>
        <Text>Blog post not found</Text>
        <Button as={RouterLink} to="/blog" mt={4}>
          Back to Blog
        </Button>
      </Container>
    )
  }

  const { frontmatter, Component } = post

  return (
    <Container maxW="container.xl" py={8}>
      <SEO
        title={frontmatter.title}
        description={frontmatter.excerpt}
        image={frontmatter.image}
      />
      <StructuredData
        type="BlogPosting"
        data={{
          title: frontmatter.title,
          excerpt: frontmatter.excerpt,
          date: frontmatter.date,
          image: frontmatter.image,
          url: window.location.href,
          author: {
            name: frontmatter.author.name
          }
        }}
      />

      {/* Hero Section */}
      <Box mb={8}>
        {frontmatter.image && (
          <Box mb={6} borderRadius="lg" overflow="hidden">
            <OptimizedImage
              src={frontmatter.image}
              alt={frontmatter.title}
              width="100%"
              height="400px"
              objectFit="cover"
            />
          </Box>
        )}
        <Heading as="h1" size="2xl" mb={4}>
          {frontmatter.title}
        </Heading>
        <Stack direction="row" spacing={4} mb={4}>
          {frontmatter.tags.map((tag, index) => (
            <Badge key={index} colorScheme="green">
              {tag}
            </Badge>
          ))}
        </Stack>
        <Stack direction="row" spacing={4} align="center" mb={6}>
          <OptimizedAvatar
            src={frontmatter.author.image}
            alt={frontmatter.author.name}
            size="md"
          />
          <Stack spacing={0}>
            <Text fontWeight="bold">{frontmatter.author.name}</Text>
            <Text color="gray.500">
              {new Date(frontmatter.date).toLocaleDateString()} · {frontmatter.readTime}
            </Text>
          </Stack>
        </Stack>
      </Box>

      <Divider mb={8} />

      {/* Content */}
      <Box className="prose max-w-none">
        <MDXProvider components={components}>
          <Suspense fallback={<LoadingFallback />}>
            <Component />
          </Suspense>
        </MDXProvider>
      </Box>

      {/* Back to Blog Button */}
      <Box mt={8} textAlign="center">
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
    </Container>
  )
} 