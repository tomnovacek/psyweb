"use client"
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Badge,
  Link as ChakraLink,
  VStack,
  HStack,
  SimpleGrid,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { getPostBySlug, getRelatedPosts } from '@/utils/blogUtils'
import { Loading } from '@/components/Loading'
import dynamic from 'next/dynamic'
const SEO = dynamic(() => import('@/components/SEO'), { ssr: false })
import { compileMDX } from 'next-mdx-remote/rsc'
import OptimizedImage from '@/components/OptimizedImage'
import TableOfContents from '@/components/TableOfContents'
import ContentFrame from '@/components/ContentFrame'
import NextLink from 'next/link'

// Function to normalize text for anchor IDs
const normalizeText = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD') // Decompose characters with diacritics
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/^\d+\.\s*/, '') // Remove leading numbers and dots
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric chars with hyphens
    .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
}

export default function BlogPost() {
  const params = useParams()
  const slug = params.slug as string
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [post, setPost] = useState<any>(null)
  const [relatedPosts, setRelatedPosts] = useState<any[]>([])
  const [mdxContent, setMdxContent] = useState<any>(null)

  // Static colors for Chakra UI v3 compatibility
  const bgColor = 'white'
  const borderColor = 'gray.200'
  const hoverBgColor = 'gray.50'
  const textColor = 'gray.700'
  const headingColor = 'green.600'
  const metaTextColor = 'gray.500'

  // Create MDX components inside the component
  const mdxComponents = {
    h1: (props: any) => {
      const id = normalizeText(props.children)
      return (
        <Heading
          as="h1"
          id={id}
          scrollMarginTop="120px"
          fontSize="3xl"
          fontWeight="bold"
          mb={4}
          color={headingColor}
          {...props}
        />
      )
    },
    h2: (props: any) => {
      const id = normalizeText(props.children)
      return (
        <Heading
          as="h2"
          id={id}
          scrollMarginTop="120px"
          fontSize="2xl"
          fontWeight="bold"
          mb={3}
          color={headingColor}
          {...props}
        />
      )
    },
    h3: (props: any) => {
      const id = normalizeText(props.children)
      return (
        <Heading
          as="h3"
          id={id}
          scrollMarginTop="120px"
          fontSize="xl"
          fontWeight="bold"
          mb={2}
          color={headingColor}
          {...props}
        />
      )
    },
    p: (props: any) => <Text mb={4} color={textColor} {...props} />,
    a: (props: any) => {
      // Check if the link is internal (starts with /blog/)
      if (props.href?.startsWith('/blog/')) {
        // If it's a link to a specific section, ensure the hash is normalized
        const [path, hash] = props.href.split('#')
        if (hash) {
          const normalizedHash = normalizeText(hash)
          return <ChakraLink as={NextLink} href={`${path}#${normalizedHash}`} color="green.500" {...props} />
        }
        return <ChakraLink as={NextLink} href={props.href} color="green.500" {...props} />
      }
      // External links
      return <ChakraLink color="green.500" isExternal {...props} />
    },
    ul: (props: any) => (
      <Box as="ul" pl={0} mb={4} listStyleType="disc" listStylePosition="outside">
        {props.children}
      </Box>
    ),
    ol: (props: any) => (
      <Box as="ol" pl={0} mb={4} listStyleType="decimal" listStylePosition="outside">
        {props.children}
      </Box>
    ),
    li: (props: any) => (
      <Text as="li" mb={1} color={textColor} {...props}>
        {props.children}
      </Text>
    ),
    blockquote: (props: any) => (
      <Box as="blockquote" borderLeft="4px solid" borderColor="green.200" pl={4} py={2} my={4} bg="green.50" {...props} />
    ),
    img: (props: any) => (
      <OptimizedImage
        borderRadius="lg"
        my={6}
        maxW="100%"
        h="auto"
        alt={props.alt || ''}
        {...props}
      />
    ),
    ExerciseFrame: (props: any) => <ContentFrame type="exercise" {...props} />,
    InfoFrame: (props: any) => <ContentFrame type="info" {...props} />,
  }

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
          components: mdxComponents,
        })
        setMdxContent(content)
        
        const related = await getRelatedPosts(postData)
        setRelatedPosts(related)
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      loadPost()
    }
  }, [slug])

  // Separate effect for handling scroll after content is rendered
  useEffect(() => {
    if (!loading && mdxContent) {
      const hash = window.location.hash
      if (hash) {
        const id = normalizeText(hash.substring(1))
        const element = document.getElementById(id)
        if (element) {
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - 120 // 120px offset for header
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }
    }
  }, [loading, mdxContent])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return (
      <Container maxW="container.xl" py={8}>
        <Box textAlign="center">
          <Heading mb={4}>Error</Heading>
          <Text>{error}</Text>
          <ChakraLink as={NextLink} href="/blog" color="green.500" mt={4} display="inline-block">
            Return to Blog
          </ChakraLink>
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
          <ChakraLink as={NextLink} href="/blog" color="green.500" mt={4} display="inline-block">
            Return to Blog
          </ChakraLink>
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
      >
        <></>
      </SEO>
      <ChakraLink
        as={NextLink}
        href="/blog"
        display="inline-flex"
        alignItems="center"
        mb={8}
        color="green.500"
        _hover={{ textDecoration: 'none', color: 'green.600' }}
      >
        <ChevronLeftIcon />
        <Text ml={1}>Back to Blog</Text>
      </ChakraLink>

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
            priority={true}
          />
        )}

        <Box p={{ base: 6, md: 12 }}>
          <VStack gap={8} align="stretch">
            <Box>
              <Heading as="h1" size="2xl" mb={6} lineHeight="1.2" color={headingColor}>
                {post.title}
              </Heading>
              <HStack gap={6} color={metaTextColor}>
                <HStack>
                  <Text>{post.date}</Text>
                </HStack>
                <HStack>
                  <Text>{post.readTime}</Text>
                </HStack>
              </HStack>
            </Box>

            <Box borderTop="1px" borderColor="gray.200" pt={8} />

            <Grid templateColumns={{ base: '1fr', lg: '1fr 300px' }} gap={8}>
              <GridItem>
                <Box className="prose prose-lg max-w-none">
                  <MDXProvider components={mdxComponents}>
                    {mdxContent}
                  </MDXProvider>
                </Box>
              </GridItem>
              <GridItem display={{ base: 'none', lg: 'block' }}>
                <TableOfContents />
              </GridItem>
            </Grid>

            {post.tags && post.tags.length > 0 && (
              <Box>
                <Heading as="h3" size="md" mb={4} color={headingColor}>
                  Tags
                </Heading>
                <HStack gap={2} wrap="wrap">
                  {post.tags.map((tag: string) => (
                    <Badge
                      key={tag}
                      size="md"
                      borderRadius="full"
                      variant="subtle"
                      colorScheme="green"
                    >
                      {tag}
                    </Badge>
                  ))}
                </HStack>
              </Box>
            )}

            {relatedPosts.length > 0 && (
              <Box>
                <Heading as="h3" size="md" mb={6} color={headingColor}>
                  Related Posts
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
                  {relatedPosts.map((relatedPost) => (
                    <ChakraLink
                      key={relatedPost.slug}
                      as={NextLink}
                      href={`/blog/${relatedPost.slug}`}
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
                      <VStack align="stretch" gap={3}>
                        <Heading as="h4" size="md" color={headingColor}>
                          {relatedPost.title}
                        </Heading>
                        <Text color={metaTextColor} fontSize="sm">
                          {relatedPost.date} · {relatedPost.readTime}
                        </Text>
                      </VStack>
                    </ChakraLink>
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