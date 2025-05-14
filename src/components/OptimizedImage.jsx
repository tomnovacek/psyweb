import React, { useState, useEffect, useMemo } from 'react';
import { Image as ChakraImage, Skeleton, Box, Text } from '@chakra-ui/react';

// Load the image manifest
const imageManifest = async () => {
  try {
    const response = await fetch('/image-manifest.json');
    return await response.json();
  } catch (error) {
    console.error('Failed to load image manifest:', error);
    return {};
  }
};

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  loading = 'lazy',
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [manifest, setManifest] = useState(null);
  const [selectedSrc, setSelectedSrc] = useState(src);

  // Get the relative path from the src
  const relativePath = useMemo(() => {
    try {
      const url = new URL(src, window.location.origin);
      return url.pathname.replace(/^\//, '');
    } catch {
      return src;
    }
  }, [src]);

  useEffect(() => {
    let mounted = true;

    const loadManifest = async () => {
      const manifestData = await imageManifest();
      if (mounted) {
        setManifest(manifestData);
      }
    };

    loadManifest();
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (!manifest) return;

    const imageData = manifest[relativePath];
    if (!imageData) {
      setSelectedSrc(src);
      return;
    }

    // Get the best image size based on viewport width
    const getBestImageSize = () => {
      const viewportWidth = window.innerWidth;
      const sizes = imageData.responsive;
      
      // Find the smallest image that's larger than the viewport width
      const bestSize = sizes.find(size => size.width >= viewportWidth) || sizes[sizes.length - 1];
      return bestSize.path;
    };

    // Set initial size
    setSelectedSrc(getBestImageSize());

    // Update size on resize
    const handleResize = () => {
      setSelectedSrc(getBestImageSize());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [manifest, relativePath, src]);

  useEffect(() => {
    const img = new Image();
    img.src = selectedSrc;
    img.onload = () => setIsLoading(false);
    img.onerror = () => {
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
    <Skeleton isLoaded={!isLoading}>
      <ChakraImage
        src={selectedSrc}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
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