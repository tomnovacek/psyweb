"use client"
import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Badge,
  Icon,
  HStack,
  VStack,
  Center,
  Spinner,
  Button
} from '@chakra-ui/react';
import { FiTag } from 'react-icons/fi';
import { getAllPosts, getAllTags } from '@/utils/blogUtils';
import dynamic from 'next/dynamic';
const SEO = dynamic(() => import('@/components/SEO'), { ssr: false });
import BlogCard from '@/components/BlogCard';

const Blog = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [tags, setTags] = useState<any[]>([]);
  const [selectedTags, setSelectedTags] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // Static color for Chakra UI v3 compatibility
  const headingColor = 'green.600';

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const allPosts = await getAllPosts();
        console.log('Loaded posts:', allPosts); // Debug log
        
        if (!allPosts || allPosts.length === 0) {
          throw new Error('No posts found');
        }

        setPosts(allPosts);
        const allTags = await getAllTags();
        setTags(allTags);
      } catch (err: any) {
        console.error('Error loading posts:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  const filteredPosts = selectedTags.length > 0
    ? posts.filter((post: any) => post.tags && post.tags.some((tag: any) => selectedTags.includes(tag)))
    : posts;

  if (isLoading) {
    return (
      <Center minH="60vh">
        <Spinner size="xl" color="green.500" />
      </Center>
    );
  }

  if (error) {
    return (
      <Center minH="60vh">
        <VStack gap={4}>
          <Text color="red.500">{error}</Text>
          <Button onClick={() => window.location.reload()}>
            Zkusit znovu
          </Button>
        </VStack>
      </Center>
    );
  }

  return (
    <Box bg="gray.50" minH="100vh" py={12}>
      <SEO
        title="Blog - Tom Nováček"
        description="Články o psychologii, osobním rozvoji a duševním zdraví"
        keywords="blog, psychologie, osobní rozvoj, duševní zdraví"
        url="https://tomnovacek.com/blog"
      >
        <></>
      </SEO>
      <Container maxW="container.xl">
        <VStack gap={12} align="stretch">
          <Box textAlign={'center'}>
            <Heading as="h1" color={headingColor}>
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
              <HStack gap={2} wrap="wrap">
                {tags.map((tag: any) => (
                  <Badge
                    key={tag}
                    px={3}
                    py={1}
                    borderRadius="md"
                    colorScheme={selectedTags.includes(tag) ? 'green' : 'gray'}
                    cursor="pointer"
                    fontWeight="500"
                    fontSize="md"
                    display="flex"
                    alignItems="center"
                    onClick={() => {
                      setSelectedTags(prev =>
                        prev.includes(tag)
                          ? prev.filter((t: any) => t !== tag)
                          : [...prev, tag]
                      );
                    }}
                  >
                    <Icon as={FiTag} mr={1} />
                    {tag}
                  </Badge>
                ))}
              </HStack>
            </Box>
          )}

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
            {filteredPosts.map((post: any) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Blog; 