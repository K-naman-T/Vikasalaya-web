const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function convertSingleImage() {
    try {
        // Use path.join for proper path handling
        const inputPath = path.join(__dirname, 'public', 'Vikasalaya Pics', 'flood-relief-kerala.jpg');
        const outputPath = path.join(__dirname, 'public', 'images', 'flood-relief-kerala.webp');

        console.log('Input path:', inputPath);
        console.log('Output path:', outputPath);

        // Create output directory if it doesn't exist
        if (!fs.existsSync(path.join(__dirname, 'public', 'images'))) {
            fs.mkdirSync(path.join(__dirname, 'public', 'images'), { recursive: true });
        }

        // Convert image
        await sharp(inputPath)
            .webp({ quality: 80 })
            .toFile(outputPath);
        
        console.log('✓ Successfully converted image');
    } catch (error) {
        console.error('Conversion failed:', error);
    }
}

convertSingleImage(); 