import React from 'react'
import { Link } from 'react-router-dom'
import {
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Icon,
  useColorModeValue,
  Skeleton,
} from '@chakra-ui/react'
import { FiClock, FiTag } from 'react-icons/fi'
import OptimizedImage from './OptimizedImage'

const BlogCard = ({ post }) => {
  const { slug } = post
  const cardBg = useColorModeValue('white', 'gray.800')
  const cardHoverBg = useColorModeValue('gray.50', 'gray.700')
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const headingColor = useColorModeValue('green.600', 'white')
  const metaTextColor = useColorModeValue('gray.500', 'gray.400')

  return (
    <Box
      as={Link}
      to={`/blog/${slug}`}
      bg={cardBg}
      borderRadius="lg"
      overflow="hidden"
      boxShadow="sm"
      transition="all 0.2s"
      className="blog-card"
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: 'md',
        bg: cardHoverBg,
        textDecoration: 'none'
      }}
    >
      {post.image && (
        <Box 
          className="blog-card-image-container"
          position="relative" 
          height="200px"
          width="100%"
          overflow="hidden"
        >
          <OptimizedImage
            src={post.image}
            alt={post.title}
            objectFit="cover"
            width="100%"
            height="100%"
            loading="lazy"
          />
        </Box>
      )}
      <Box p={6} className="blog-card-content">
        <VStack align="start" spacing={4}>
          <Heading as="h3" size="md" noOfLines={2} lineHeight="1.2" color={headingColor}>
            {post.title}
          </Heading>
          <Text color={textColor} noOfLines={3}>
            {post.excerpt}
          </Text>
          <HStack spacing={4} color={metaTextColor}>
            <HStack>
              <Icon as={FiClock} color={metaTextColor} />
              <Text color={metaTextColor}>
                {post.readTime}
              </Text>
            </HStack>
            <Text color={metaTextColor}>•</Text>
            <Text color={metaTextColor}>
              {post.date}
            </Text>
          </HStack>
          <HStack spacing={2} wrap="wrap">
            {post.tags && post.tags.map(tag => (
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

// Skeleton component for blog cards during loading
export const BlogCardSkeleton = () => {
  const cardBg = useColorModeValue('white', 'gray.800')
  
  return (
    <Box
      bg={cardBg}
      borderRadius="lg"
      overflow="hidden"
      boxShadow="sm"
      className="blog-card"
    >
      <Skeleton 
        className="blog-card-image-container"
        height="200px"
        width="100%"
      />
      <Box p={6} className="blog-card-content">
        <VStack align="start" spacing={4}>
          <Skeleton height="24px" width="80%" />
          <Skeleton height="16px" width="100%" />
          <Skeleton height="16px" width="90%" />
          <Skeleton height="16px" width="70%" />
          <HStack spacing={4}>
            <Skeleton height="16px" width="60px" />
            <Skeleton height="16px" width="8px" />
            <Skeleton height="16px" width="80px" />
          </HStack>
          <HStack spacing={2}>
            <Skeleton height="20px" width="60px" borderRadius="full" />
            <Skeleton height="20px" width="80px" borderRadius="full" />
          </HStack>
        </VStack>
      </Box>
    </Box>
  )
}

export default BlogCard 