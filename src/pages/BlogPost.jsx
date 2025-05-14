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
  VStack,
} from '@chakra-ui/react'
import { useParams, Link as RouterLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getPostBySlug } from '../utils/mdx'
import { MDXProvider } from '@mdx-js/react'
import SEO from '../components/SEO'
import StructuredData from '../components/StructuredData'
import OptimizedAvatar from '../components/OptimizedAvatar'
import OptimizedImage from '../components/OptimizedImage'
import { useTranslation } from 'react-i18next'
import { format } from 'date-fns'
import { cs, enUS } from 'date-fns/locale'
import { MDXRemote } from 'next-mdx-remote'

const LoadingFallback = () => (
  <Center h="200px">
    <Spinner size="xl" color="blue.500" />
  </Center>
)

// MDX components configuration
const components = {
  h1: (props) => <Heading as="h1" size="2xl" mb={4} {...props} />,
  h2: (props) => <Heading as="h2" size="xl" mb={3} {...props} />,
  h3: (props) => <Heading as="h3" size="lg" mb={2} {...props} />,
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

const BlogPost = () => {
  const { slug } = useParams()
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language
  const dateLocale = currentLang === 'cs' ? cs : enUS
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
        <Text color="red.500">{t('blog.error')}: {error.message}</Text>
        <Button as={RouterLink} to="/blog" mt={4}>
          {t('blog.backToBlog')}
        </Button>
      </Container>
    )
  }

  if (!post) {
    return (
      <Container maxW="container.xl" py={8}>
        <Text>{t('blog.notFound')}</Text>
        <Button as={RouterLink} to="/blog" mt={4}>
          {t('blog.backToBlog')}
        </Button>
      </Container>
    )
  }

  const { frontmatter, Component } = post

  return (
    <Container maxW="container.xl" py={10}>
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

      <VStack spacing={8} align="stretch">
        <Box>
          <Heading as="h1" size="2xl" mb={4}>
            {frontmatter.title}
          </Heading>
          
          <Box display="flex" alignItems="center" mb={8}>
            <OptimizedAvatar
              src={frontmatter.author.image}
              alt={frontmatter.author.name}
              size="md"
            />
            <Box ml={4}>
              <Text fontWeight="bold">{frontmatter.author.name}</Text>
              <Text color="gray.500">
                {format(new Date(frontmatter.date), 'PPP', { locale: dateLocale })}
              </Text>
            </Box>
          </Box>
        </Box>

        <Box>
          <MDXProvider components={components}>
            <MDXRemote {...post.content} />
          </MDXProvider>
        </Box>
      </VStack>

      {/* Back to Blog Button */}
      <Box mt={8} textAlign="center">
        <Button
          as={RouterLink}
          to="/blog"
          colorScheme="green"
          variant="outline"
          size="lg"
        >
          {t('blog.backToBlog')}
        </Button>
      </Box>
    </Container>
  )
}

export default BlogPost 