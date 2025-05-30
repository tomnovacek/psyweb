import React, { useState, useEffect } from 'react'
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
import BlogCard from '../components/BlogCard'

// Main Blog component
const Blog = () => {
  const [posts, setPosts] = useState([])
  const [tags, setTags] = useState([])
  const [selectedTags, setSelectedTags] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const headingColor = useColorModeValue('green.600', 'gray.200')

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
        post.tags && post.tags.some(tag => selectedTags.includes(tag))
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
          <Box textAlign={'center'}>
            <Heading color={headingColor} as="h1" size="2xl" mb={4}>
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