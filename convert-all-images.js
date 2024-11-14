const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Define all source directories
const directories = [
    { input: './public/Vikasalaya Pics', output: './public/images' },
    { input: './public/Wayanad', output: './public/images' },
    { input: './public', output: './public/images' }
];

// Create output directory if it doesn't exist
if (!fs.existsSync('./public/images')) {
    fs.mkdirSync('./public/images', { recursive: true });
}

async function convertAllImages() {
    try {
        for (const dir of directories) {
            if (!fs.existsSync(dir.input)) {
                console.log(`Directory not found: ${dir.input}`);
                continue;
            }

            const files = fs.readdirSync(dir.input);
            
            for (const file of files) {
                // Skip if it's a directory or already a webp file
                if (fs.lstatSync(path.join(dir.input, file)).isDirectory() || file.endsWith('.webp')) {
                    continue;
                }

                // Only process image files
                if (file.match(/\.(jpg|jpeg|png)$/i)) {
                    const inputPath = path.join(dir.input, file);
                    const outputPath = path.join(dir.output, `${path.parse(file).name}.webp`);
                    
                    try {
                        await sharp(inputPath)
                            .webp({ quality: 80 })
                            .toFile(outputPath);
                        
                        console.log(`✓ Converted ${file} to WebP`);
                    } catch (error) {
                        console.error(`Error converting ${file}:`, error.message);
                    }
                }
            }
        }
        console.log('\nAll images converted successfully!');
    } catch (error) {
        console.error('Conversion failed:', error);
    }
}

convertAllImages();
