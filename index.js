const sharp = require('sharp');

async function upscaleImage(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .resize({ width: 1920, height: 1080, fit: 'inside', withoutEnlargement: false })
      .sharpen()
      .linear(1.2, -(128 * 1.2) + 128)  // Increase contrast
      .modulate({ brightness: 1.2 })    // Increase brightness
      .toFile(outputPath);
    console.log(`Upscaled image saved to ${outputPath}`);
  } catch (error) {
    console.error('Error processing image:', error);
  }
}

module.exports = upscaleImage;