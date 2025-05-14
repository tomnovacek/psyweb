import React, { useState, useEffect } from 'react';
import { Image as ChakraImage, Skeleton, Box, Text } from '@chakra-ui/react';

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  loading = 'lazy',
  size = 'md',
  priority = false,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedSrc, setSelectedSrc] = useState('');

  useEffect(() => {
    let isMounted = true;
    
    // Clean up the source path
    const cleanSrc = src.replace('/src/assets/img/', '');
    
    // Determine the correct path based on environment
    const imagePath = import.meta.env.DEV
      ? `/src/assets/img/${cleanSrc}`
      : `/optimized-images/${cleanSrc.replace(/\.[^/.]+$/, '')}-${size}.webp`;

    if (isMounted) {
      setSelectedSrc(imagePath);
    }

    return () => {
      isMounted = false;
    };
  }, [src, size]);

  useEffect(() => {
    if (!selectedSrc) return;

    const img = new Image();
    img.src = selectedSrc;
    img.onload = () => setIsLoading(false);
    img.onerror = () => {
      console.error(`Failed to load image: ${selectedSrc}`);
      setError(true);
      setIsLoading(false);
    };
  }, [selectedSrc]);

  if (error) {
    return (
      <Box
        width={width}
        height={height}
        bg="gray.200"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text color="gray.500">Failed to load image</Text>
      </Box>
    );
  }

  return (
    <Skeleton
      isLoaded={!isLoading}
      width={width}
      height={height}
      startColor="gray.100"
      endColor="gray.200"
    >
      <ChakraImage
        src={selectedSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        sizes={sizes}
        transition="all 0.3s"
        _hover={{
          transform: 'scale(1.02)',
        }}
        {...props}
      />
    </Skeleton>
  );
};

export default OptimizedImage; 