import imageManifest from '/public/image-manifest.json';

export function getOptimizedImagePath(originalPath, size = 'md') {
  const manifestEntry = imageManifest.images[`/src/assets/img/${originalPath}`];
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

export function getResponsiveImageProps(originalPath) {
  const manifestEntry = imageManifest.images[`/src/assets/img/${originalPath}`];
  if (!manifestEntry?.responsive) {
    console.warn(`No optimized image found for ${originalPath}`);
    return {
      src: `/assets/img/${originalPath}`,
      srcSet: '',
      sizes: ''
    };
  }

  const srcSet = manifestEntry.responsive
    .map(img => `${img.path} ${img.width}w`)
    .join(', ');

  return {
    src: manifestEntry.responsive[2].path, // md size as default
    srcSet,
    sizes: '(max-width: 480px) 300px, (max-width: 768px) 400px, 800px'
  };
} 