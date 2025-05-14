const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');
const { optimizeImage, generateResponsiveImages } = require('../src/utils/imageOptimizer');

const ASSETS_DIR = path.join(__dirname, '../src/assets');
const OUTPUT_DIR = path.join(__dirname, '../public/optimized-images');

// Common image sizes for responsive design
const RESPONSIVE_SIZES = [
  { width: 320, height: 240 },  // Mobile small
  { width: 640, height: 480 },  // Mobile large
  { width: 768, height: 576 },  // Tablet
  { width: 1024, height: 768 }, // Desktop small
  { width: 1280, height: 960 }, // Desktop large
  { width: 1920, height: 1440 } // Desktop extra large
];

async function ensureDirectoryExists(dir) {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

async function processImage(filePath, outputDir) {
  const fileName = path.basename(filePath, path.extname(filePath));
  const imageOutputDir = path.join(outputDir, fileName);
  
  await ensureDirectoryExists(imageOutputDir);

  // Generate responsive images
  const responsiveImages = await generateResponsiveImages(
    filePath,
    imageOutputDir,
    RESPONSIVE_SIZES
  );

  // Generate a smaller thumbnail
  await optimizeImage(filePath, path.join(imageOutputDir, 'thumbnail.webp'), {
    width: 100,
    height: 100,
    quality: 60,
    format: 'webp'
  });

  return {
    original: filePath,
    responsive: responsiveImages,
    thumbnail: path.join(imageOutputDir, 'thumbnail.webp')
  };
}

async function findImages(dir) {
  const files = await fs.readdir(dir);
  const imageFiles = [];

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = await fs.stat(filePath);

    if (stat.isDirectory()) {
      imageFiles.push(...await findImages(filePath));
    } else if (/\.(jpg|jpeg|png|webp)$/i.test(file)) {
      imageFiles.push(filePath);
    }
  }

  return imageFiles;
}

async function generateImageManifest(processedImages) {
  const manifest = {};
  
  for (const [originalPath, processed] of Object.entries(processedImages)) {
    const relativePath = path.relative(ASSETS_DIR, originalPath);
    manifest[relativePath] = {
      responsive: processed.responsive.map(img => ({
        width: img.width,
        height: img.height,
        path: path.relative(process.cwd(), img.path)
      })),
      thumbnail: path.relative(process.cwd(), processed.thumbnail)
    };
  }

  await fs.writeFile(
    path.join(OUTPUT_DIR, 'image-manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
}

async function main() {
  try {
    console.log('Starting image optimization...');
    
    // Ensure output directory exists
    await ensureDirectoryExists(OUTPUT_DIR);

    // Find all images in assets directory
    const imageFiles = await findImages(ASSETS_DIR);
    console.log(`Found ${imageFiles.length} images to process`);

    // Process each image
    const processedImages = {};
    for (const filePath of imageFiles) {
      console.log(`Processing ${filePath}...`);
      processedImages[filePath] = await processImage(filePath, OUTPUT_DIR);
    }

    // Generate manifest file
    await generateImageManifest(processedImages);
    
    console.log('Image optimization completed successfully!');
    console.log(`Processed ${Object.keys(processedImages).length} images`);
    console.log(`Output directory: ${OUTPUT_DIR}`);
  } catch (error) {
    console.error('Error during image optimization:', error);
    process.exit(1);
  }
}

main(); 