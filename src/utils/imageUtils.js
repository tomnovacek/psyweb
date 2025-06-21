// Import image manifest URL and fetch it
import imageManifestUrl from '/image-manifest.json?url'

// Cache for the manifest
let manifestCache = null

// Function to load the manifest
async function loadManifest() {
  if (manifestCache) return manifestCache
  
  try {
    const response = await fetch(imageManifestUrl)
    manifestCache = await response.json()
    return manifestCache
  } catch (error) {
    console.error('Error loading image manifest:', error)
    return null
  }
}

export async function getOptimizedImagePath(originalPath, size = 'md') {
  const imageManifest = await loadManifest()
  
  if (!imageManifest?.images) {
    console.warn('Image manifest not loaded');
    return `/assets/img/${originalPath}`;
  }

  // Try multiple path formats
  const pathVariants = [
    `/src/assets/img/${originalPath}`,
    `src/assets/img/${originalPath}`,
    originalPath
  ];

  let manifestEntry = null;
  for (const path of pathVariants) {
    manifestEntry = imageManifest.images[path];
    if (manifestEntry?.responsive) {
      break;
    }
  }

  if (!manifestEntry?.responsive) {
    console.warn(`No optimized image found for ${originalPath}`);
    return `/assets/img/${originalPath}`;
  }

  const sizeMap = {
    xs: 150,
    sm: 300,
    md: 400,
    lg: 800,
    xl: 1200,
    '2xl': 1600
  };

  const responsiveImage = manifestEntry.responsive.find(img => img.width === sizeMap[size]);
  return responsiveImage ? responsiveImage.path : manifestEntry.responsive[0].path;
}

export async function getResponsiveImageProps(originalPath) {
  const imageManifest = await loadManifest()
  
  if (!imageManifest?.images) {
    console.warn('Image manifest not loaded');
    return {
      src: `/assets/img/${originalPath}`,
      srcSet: '',
      sizes: '',
      width: 380,
      height: 254
    };
  }

  // Clean the path - remove any leading slashes and assets/img prefix
  const cleanPath = originalPath.replace(/^\/+/, '').replace(/^assets\/img\//, '');
  
  // Try both path formats in the manifest
  const manifestEntry = 
    imageManifest.images[`src/assets/img/${cleanPath}`] || 
    imageManifest.images[`/src/assets/img/${cleanPath}`];

  if (!manifestEntry?.responsive) {
    console.warn(`No optimized image found for ${cleanPath}. Tried paths:`, {
      path1: `src/assets/img/${cleanPath}`,
      path2: `/src/assets/img/${cleanPath}`
    });
    return {
      src: `/assets/img/${cleanPath}`,
      srcSet: '',
      sizes: '',
      width: 380,
      height: 254
    };
  }

  const srcSet = manifestEntry.responsive
    .map(img => `${img.path} ${img.width}w`)
    .join(', ');

  // Use the original image dimensions if available, otherwise use the md size
  const defaultImage = manifestEntry.responsive[2]; // md size
  return {
    src: defaultImage.path,
    srcSet,
    sizes: '(max-width: 480px) 300px, (max-width: 768px) 400px, 800px',
    width: manifestEntry.width || defaultImage.width,
    height: manifestEntry.height || (defaultImage.width * 254/380) // maintain aspect ratio
  };
} 