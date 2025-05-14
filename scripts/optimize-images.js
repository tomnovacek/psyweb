import sharp from 'sharp';
import glob from 'glob';
import path from 'path';
import fs from 'fs/promises';

const config = {
  sourceDir: 'src/assets/img',
  outputDir: 'dist/assets/optimized-images',
  manifestPath: 'dist/assets/image-manifest.json',
  sizes: [
    { width: 150, suffix: 'xs' },
    { width: 300, suffix: 'sm' },
    { width: 600, suffix: 'md' },
    { width: 900, suffix: 'lg' },
    { width: 1200, suffix: 'xl' },
    { width: 1600, suffix: '2xl' }
  ],
  quality: 80
};

async function optimizeImage(filePath) {
  try {
    const fileName = path.basename(filePath);
    const fileNameWithoutExt = path.parse(fileName).name;
    const manifest = JSON.parse(await fs.readFile(config.manifestPath, 'utf-8'));

    // Process each size
    for (const size of config.sizes) {
      const outputPath = path.join(
        config.outputDir,
        `${fileNameWithoutExt}-${size.suffix}.webp`
      );

      await sharp(filePath)
        .resize(size.width, null, { withoutEnlargement: true })
        .webp({ quality: config.quality })
        .toFile(outputPath);

      // Update manifest
      if (!manifest[fileNameWithoutExt]) {
        manifest[fileNameWithoutExt] = {};
      }
      manifest[fileNameWithoutExt][size.suffix] = {
        path: `/assets/optimized-images/${fileNameWithoutExt}-${size.suffix}.webp`,
        width: size.width
      };
    }

    // Save updated manifest
    await fs.writeFile(config.manifestPath, JSON.stringify(manifest, null, 2));
  } catch (error) {
    console.error(`Error optimizing ${filePath}:`, error);
  }
}

async function processImages() {
  try {
    // Create output directory if it doesn't exist
    await fs.mkdir(config.outputDir, { recursive: true });

    // Initialize or load manifest
    try {
      await fs.access(config.manifestPath);
    } catch {
      await fs.writeFile(config.manifestPath, '{}');
    }

    // Find all images
    const files = await new Promise((resolve, reject) => {
      glob(`${config.sourceDir}/*.{jpg,jpeg,png,webp}`, (err, files) => {
        if (err) reject(err);
        else resolve(files);
      });
    });

    console.log(`Found ${files.length} images to optimize`);

    // Process each image
    for (const file of files) {
      console.log(`Processing ${file}...`);
      await optimizeImage(file);
    }

    console.log('Image optimization complete!');
  } catch (error) {
    console.error('Error processing images:', error);
    process.exit(1);
  }
}

processImages(); 