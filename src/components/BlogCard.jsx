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
} from '@chakra-ui/react'
import { FiClock, FiTag } from 'react-icons/fi'
import OptimizedImage from './OptimizedImage'

export const BlogCard = ({ post }) => {
  const { slug } = post
  const cardBg = useColorModeValue('white', 'gray.800')
  const cardHoverBg = useColorModeValue('gray.50', 'gray.700')
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const headingColor = useColorModeValue('gray.800', 'white')
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
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: 'md',
        bg: cardHoverBg,
        textDecoration: 'none'
      }}
    >
      <Box position="relative" height="240px">
        <OptimizedImage
          src={post.image}
          alt={post.title}
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </Box>
      <Box p={6}>
        <VStack align="start" spacing={4}>
          <Heading as="h3" size="md" noOfLines={2} lineHeight="1.2" color={headingColor}>
            {post.title}
          </Heading>
          <Text color={textColor} noOfLines={3}>
            {post.excerpt}
          </Text>
          <HStack spacing={4} color={metaTextColor}>
            <HStack>
              <Icon as={FiClock} />
              <Text>{post.readTime}</Text>
            </HStack>
            <Text>•</Text>
            <Text>{post.date}</Text>
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