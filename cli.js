#!/usr/bin/env node

const upscaleImage = require('./index');

const [,, inputPath, outputPath] = process.argv;

if (!inputPath || !outputPath) {
  console.error('Usage: npx ImageUpscale <input-file> <output-file>');
  process.exit(1);
}

upscaleImage(inputPath, outputPath);