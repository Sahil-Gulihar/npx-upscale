# ImageUpscale

A CLI tool to upscale and enhance images.

## Usage

You can run this tool without installation using npx:

```
npx imageupscale <input-file> <output-file>
```

Example:
```
npx upscale input.webp output.png
```

This will upscale the image to a maximum of 1920x1080 while maintaining the aspect ratio, increase sharpness, contrast, and brightness.

## Installation (optional)

If you prefer, you can install the package globally:

```
npm install -g upscale
```

Then use it as:

```
upscale <input-file> <output-file>
```

## License

MIT