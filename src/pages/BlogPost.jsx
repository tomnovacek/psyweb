import { useState, useEffect } from 'react'
import { useParams, Link as RouterLink } from 'react-router-dom'
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Tag,
  TagLabel,
  Link,
  VStack,
  HStack,
  Divider,
  useColorModeValue,
  SimpleGrid,
} from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { getPostBySlug, getRelatedPosts } from '../utils/blogUtils'
import { Loading } from '../components/Loading'
import SEO from '../components/SEO'
import { compileMDX } from 'next-mdx-remote/rsc'
import OptimizedImage from '../components/OptimizedImage'

// MDX components mapping
const components = {
  h1: (props) => <Heading color="green.600" as="h1" size="xl" mb={6} {...props} />,
  h2: (props) => <Heading color="green.600" as="h2" size="lg" mb={4} mt={8} {...props} />,
  h3: (props) => <Heading color="green.600" as="h3" size="md" mb={3} mt={6} {...props} />,
  p: (props) => <Text mb={4} lineHeight="tall" {...props} />,
  a: (props) => <Link color="green.500" isExternal {...props} />,
  ul: (props) => (
    <Box as="ul" pl={0} mb={4} listStyleType="disc" listStylePosition="outside">
      {props.children}
    </Box>
  ),
  ol: (props) => (
    <Box as="ol" pl={0} mb={4} listStyleType="decimal" listStylePosition="outside">
      {props.children}
    </Box>
  ),
  li: (props) => (
    <Text as="li" pl={2} mb={2} ml={4}>
      {props.children}
    </Text>
  ),
  blockquote: (props) => (
    <Box
      as="blockquote"
      pl={4}
      borderLeft="4px solid"
      borderColor="green.500"
      fontStyle="italic"
      mb={4}
      {...props}
    />
  ),
  img: (props) => (
    <OptimizedImage
      borderRadius="lg"
      my={6}
      maxW="100%"
      h="auto"
      alt={props.alt || ''}
      {...props}
    />
  ),
}

export default function BlogPost() {
  const { slug } = useParams()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [post, setPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])
  const [mdxContent, setMdxContent] = useState(null)

  // Move all useColorModeValue hooks to the top
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const hoverBgColor = useColorModeValue('gray.50', 'gray.700')
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const headingColor = useColorModeValue('green.600', 'gray.200')
  const metaTextColor = useColorModeValue('gray.500', 'gray.400')

  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true)
        const postData = await getPostBySlug(slug)
        if (!postData) {
          throw new Error('Post not found')
        }
        setPost(postData)
        
        // Compile MDX content
        const { content } = await compileMDX({
          source: postData.content,
          components,
        })
        setMdxContent(content)
        
        const related = await getRelatedPosts(postData)
        setRelatedPosts(related)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadPost()
  }, [slug])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return (
      <Container maxW="container.xl" py={8}>
        <Box textAlign="center">
          <Heading mb={4}>Error</Heading>
          <Text>{error}</Text>
          <Link as={RouterLink} to="/blog" color="green.500" mt={4} display="inline-block">
            Return to Blog
          </Link>
        </Box>
      </Container>
    )
  }

  if (!post) {
    return (
      <Container maxW="container.xl" py={8}>
        <Box textAlign="center">
          <Heading mb={4}>Post Not Found</Heading>
          <Text>The requested blog post could not be found.</Text>
          <Link as={RouterLink} to="/blog" color="green.500" mt={4} display="inline-block">
            Return to Blog
          </Link>
        </Box>
      </Container>
    )
  }

  return (
    <Container maxW="container.xl" py={8}>
      <SEO
        title={`${post.title} - Blog`}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        url={`https://tomnovacek.com/blog/${slug}`}
        image={post.image}
      />
      <Link
        as={RouterLink}
        to="/blog"
        display="inline-flex"
        alignItems="center"
        mb={8}
        color="green.500"
        _hover={{ textDecoration: 'none', color: 'green.600' }}
      >
        <ChevronLeftIcon />
        <Text ml={1}>Back to Blog</Text>
      </Link>

      <Box
        bg={bgColor}
        borderRadius="lg"
        boxShadow="lg"
        overflow="hidden"
        border="1px solid"
        borderColor={borderColor}
      >
        {post.image && (
          <OptimizedImage
            src={post.image}
            alt={post.title}
            w="100%"
            h="500px"
            objectFit="cover"
          />
        )}

        <Box p={{ base: 6, md: 12 }}>
          <VStack spacing={8} align="stretch">
            <Box>
              <Heading as="h1" size="2xl" mb={6} lineHeight="1.2" color={headingColor}>
                {post.title}
              </Heading>
              <HStack spacing={6} color={metaTextColor}>
                <HStack>
                  <Text>{post.date}</Text>
                </HStack>
                <HStack>
                  <Text>{post.readTime}</Text>
                </HStack>
              </HStack>
            </Box>

            <Divider />

            <Box className="prose prose-lg max-w-none">
              <MDXProvider components={components}>
                {mdxContent}
              </MDXProvider>
            </Box>

            {post.tags && post.tags.length > 0 && (
              <Box>
                <Heading as="h3" size="md" mb={4} color={headingColor}>
                  Tags
                </Heading>
                <HStack spacing={2} wrap="wrap">
                  {post.tags.map((tag) => (
                    <Tag
                      key={tag}
                      size="md"
                      borderRadius="full"
                      variant="subtle"
                      colorScheme="green"
                    >
                      <TagLabel>{tag}</TagLabel>
                    </Tag>
                  ))}
                </HStack>
              </Box>
            )}

            {relatedPosts.length > 0 && (
              <Box>
                <Heading as="h3" size="md" mb={6} color={headingColor}>
                  Related Posts
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      as={RouterLink}
                      to={`/blog/${relatedPost.slug}`}
                      p={6}
                      borderRadius="lg"
                      border="1px solid"
                      borderColor={borderColor}
                      _hover={{
                        textDecoration: 'none',
                        bg: hoverBgColor,
                        transform: 'translateY(-2px)',
                        boxShadow: 'md',
                      }}
                      transition="all 0.2s"
                    >
                      <VStack align="stretch" spacing={3}>
                        <Heading as="h4" size="md" noOfLines={2} color={headingColor}>
                          {relatedPost.title}
                        </Heading>
                        <Text color={metaTextColor} fontSize="sm">
                          {relatedPost.date} · {relatedPost.readTime}
                        </Text>
                      </VStack>
                    </Link>
                  ))}
                </SimpleGrid>
              </Box>
            )}
          </VStack>
        </Box>
      </Box>
    </Container>
  )
} 