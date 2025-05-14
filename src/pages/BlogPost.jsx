import React, { Suspense, lazy } from 'react'
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
} from '@chakra-ui/react'
import { useParams, Link as RouterLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getPostBySlug } from '../utils/mdx'
import { useBlogPost } from '../hooks/useBlogPost'
import SEO from '../components/SEO'
import StructuredData from '../components/StructuredData'
import OptimizedAvatar from '../components/OptimizedAvatar'

// Lazy load the MDX content
const MDXContent = lazy(() => import('../components/MDXContent'))

const LoadingFallback = () => (
  <Center h="200px">
    <Spinner size="xl" color="blue.500" />
  </Center>
)

export default function BlogPost() {
  const { slug } = useParams()
  const { post, isLoading, error } = useBlogPost(slug)

  if (isLoading) {
    return (
      <Center h="200px">
        <Spinner size="xl" color="blue.500" />
      </Center>
    )
  }

  if (error) {
    return (
      <Container maxW="container.xl" py={8}>
        <Text color="red.500">Error loading blog post: {error.message}</Text>
      </Container>
    )
  }

  if (!post) {
    return (
      <Container maxW="container.xl" py={8}>
        <Text>Blog post not found</Text>
      </Container>
    )
  }

  return (
    <Container maxW="container.xl" py={8}>
      <SEO
        title={post.title}
        description={post.excerpt}
        image={post.coverImage}
      />
      <StructuredData
        type="BlogPosting"
        title={post.title}
        description={post.excerpt}
        datePublished={post.date}
        author={{
          '@type': 'Person',
          name: 'Tom Nováček'
        }}
      />
      <Box mb={8}>
        <Heading as="h1" size="2xl" mb={4}>
          {post.title}
        </Heading>
        <Text color="gray.500" mb={4}>
          {new Date(post.date).toLocaleDateString()}
        </Text>
      </Box>
      <Suspense fallback={<LoadingFallback />}>
        <MDXContent content={post.content} />
      </Suspense>
      <OptimizedAvatar
        src={post.frontmatter.author.image}
        alt={post.frontmatter.author.name}
        size="lg"
      />
    </Container>
  )
} 