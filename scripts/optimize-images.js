import sharp from 'sharp';
import globModule from 'glob';
import { promisify } from 'util';
const glob = promisify(globModule);
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const config = {
  sourceDir: path.join(__dirname, '../src/assets/img'),
  outputDir: path.join(__dirname, '../public/optimized-images'),
  manifestPath: path.join(__dirname, '../public/image-manifest.json'),
  sizes: [
    { width: 150, suffix: 'xs' },  // Thumbnails and very small screens
    { width: 300, suffix: 'sm' },  // Small mobile devices
    { width: 400, suffix: 'md' },  // Medium mobile devices
    { width: 800, suffix: 'lg' },  // Tablets
    { width: 1200, suffix: 'xl' }, // Small desktops
    { width: 1600, suffix: '2xl' } // Large desktops
  ],
  quality: 80
};

// Ensure output directory exists
try {
  await fs.mkdir(config.outputDir, { recursive: true });
} catch (error) {
  console.error('Error creating output directory:', error);
}

// Initialize manifest
let manifest = {
  images: {}
};

// Load existing manifest if it exists
try {
  const manifestContent = await fs.readFile(config.manifestPath, 'utf8');
  manifest = JSON.parse(manifestContent);
} catch (error) {
  console.log('No existing manifest found, creating new one');
}

async function optimizeImage(filePath) {
  const fileName = path.basename(filePath);
  const fileNameWithoutExt = path.parse(fileName).name;
  const relativePath = path.relative(config.sourceDir, filePath);
  const imageData = await sharp(filePath).metadata();
  
  // Create responsive versions
  const responsive = [];
  
  for (const size of config.sizes) {
    const outputFileName = `${fileNameWithoutExt}-${size.suffix}.webp`;
    const outputPath = path.join(config.outputDir, outputFileName);
    
    await sharp(filePath)
      .resize(size.width, null, { withoutEnlargement: true })
      .webp({ quality: config.quality })
      .toFile(outputPath);
    
    responsive.push({
      width: size.width,
      path: `/optimized-images/${outputFileName}`
    });
  }
  
  // Update manifest
  manifest.images[`/src/assets/img/${relativePath}`] = {
    width: imageData.width,
    height: imageData.height,
    format: 'webp',
    responsive
  };
}

async function processImages() {
  const files = await glob(`${config.sourceDir}/**/*.{jpg,jpeg,png,webp}`);
  
  console.log(`Found ${files.length} images to optimize`);
  
  for (const file of files) {
    try {
      console.log(`Processing ${file}...`);
      await optimizeImage(file);
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  }
  
  // Save manifest
  await fs.writeFile(
    config.manifestPath,
    JSON.stringify(manifest, null, 2)
  );
  
  console.log('Image optimization complete!');
}

processImages().catch(console.error); 