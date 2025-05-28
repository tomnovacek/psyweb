import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Tag,
  TagLabel,
  TagLeftIcon,
  Icon,
  useColorModeValue,
  HStack,
  VStack,
  Center,
  Spinner,
  Button
} from '@chakra-ui/react'
import { FiClock, FiTag } from 'react-icons/fi'
import { getAllPosts, getAllTags } from '../utils/blogUtils'
import SEO from '../components/SEO'

// BlogCard component
const BlogCard = ({ post }) => {
  const { slug } = post
  const cardBg = useColorModeValue('white', 'gray.800')
  const cardHoverBg = useColorModeValue('gray.50', 'gray.700')

  return (
    <Box
      as={Link}
      to={`/blog/${slug}`}
      bg={cardBg}
      borderRadius="lg"
      overflow="hidden"
      boxShadow="sm"
      transition="all 0.2s"
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: 'md',
        bg: cardHoverBg,
        textDecoration: 'none'
      }}
    >
      <Box position="relative" height="200px">
        <Box
          as="img"
          src={post.image}
          alt={post.title}
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </Box>
      <Box p={6}>
        <VStack align="start" spacing={4}>
          <Heading as="h3" size="md" noOfLines={2}>
            {post.title}
          </Heading>
          <Text color="gray.500" noOfLines={2}>
            {post.excerpt}
          </Text>
          <HStack spacing={4}>
            <HStack>
              <Icon as={FiClock} color="gray.500" />
              <Text color="gray.500">
                {post.readTime}
              </Text>
            </HStack>
            <Text color="gray.500">•</Text>
            <Text color="gray.500">
              {post.date}
            </Text>
          </HStack>
          <HStack spacing={2} wrap="wrap">
            {post.tags.map(tag => (
              <Tag
                key={tag}
                size="sm"
                colorScheme="green"
                variant="subtle"
              >
                <TagLeftIcon as={FiTag} />
                <TagLabel>{tag}</TagLabel>
              </Tag>
            ))}
          </HStack>
        </VStack>
      </Box>
    </Box>
  )
}

// Main Blog component
const Blog = () => {
  const [posts, setPosts] = useState([])
  const [tags, setTags] = useState([])
  const [selectedTags, setSelectedTags] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setIsLoading(true)
        setError(null)
        
        const allPosts = await getAllPosts()
        console.log('Loaded posts:', allPosts) // Debug log
        
        if (!allPosts || allPosts.length === 0) {
          throw new Error('No posts found')
        }

        setPosts(allPosts)
        const allTags = await getAllTags()
        setTags(allTags)
      } catch (err) {
        console.error('Error loading posts:', err)
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    loadPosts()
  }, [])

  const filteredPosts = selectedTags.length > 0
    ? posts.filter(post => 
        post.frontmatter.tags.some(tag => selectedTags.includes(tag))
      )
    : posts

  if (isLoading) {
    return (
      <Center minH="60vh">
        <Spinner size="xl" color="green.500" />
      </Center>
    )
  }

  if (error) {
    return (
      <Center minH="60vh">
        <VStack spacing={4}>
          <Text color="red.500">{error}</Text>
          <Button onClick={() => window.location.reload()}>
            Zkusit znovu
          </Button>
        </VStack>
      </Center>
    )
  }

  return (
    <Box bg="gray.50" minH="100vh" py={12}>
      <SEO
        title="Blog - Tom Nováček"
        description="Články o psychologii, osobním rozvoji a duševním zdraví"
        keywords="blog, psychologie, osobní rozvoj, duševní zdraví"
        url="https://tomnovacek.com/blog"
      />
      <Container maxW="container.xl">
        <VStack spacing={12} align="stretch">
          <Box>
            <Heading as="h1" size="2xl" mb={4}>
              Blog
            </Heading>
            <Text fontSize="xl" color="gray.600">
              Články o psychologii, osobním rozvoji a duševním zdraví
            </Text>
          </Box>

          {tags.length > 0 && (
            <Box>
              <Heading as="h2" size="md" mb={4}>
                Filtrovat podle témat
              </Heading>
              <HStack spacing={2} wrap="wrap">
                {tags.map(tag => (
                  <Tag
                    key={tag}
                    size="md"
                    colorScheme={selectedTags.includes(tag) ? 'green' : 'gray'}
                    cursor="pointer"
                    onClick={() => {
                      setSelectedTags(prev =>
                        prev.includes(tag)
                          ? prev.filter(t => t !== tag)
                          : [...prev, tag]
                      )
                    }}
                  >
                    <TagLeftIcon as={FiTag} />
                    <TagLabel>{tag}</TagLabel>
                  </Tag>
                ))}
              </HStack>
            </Box>
          )}

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {filteredPosts.map(post => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

export default Blog 