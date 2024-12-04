const webp = require('webp-converter');
const path = require('path');

// Enable webp converter
webp.grant_permission();

const convertImage = async () => {
  try {
    // Use path.join to create proper Windows paths
    const inputPath = path.join(__dirname, 'public', 'Vikasalaya Pics', 'flood-relief-kerala.jpg');
    const outputPath = path.join(__dirname, 'public', 'images', 'flood-relief-kerala.webp');

    console.log('Input path:', inputPath);
    console.log('Output path:', outputPath);

    const result = await webp.cwebp(
      inputPath,
      outputPath,
      "-q 80",
      "-v"
    );
    console.log('Conversion successful:', result);
  } catch (error) {
    console.error('Conversion failed:', error);
  }
};

convertImage(); 