import fs from 'fs'
import path from 'path'

export function getImagesFromDirectory(folderPath: string): string[] {
  const fullPath = path.join(process.cwd(), 'public', folderPath)
  
  try {
    const files = fs.readdirSync(fullPath)
    return files
      .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .map(file => `/${folderPath}/${file}`)
  } catch (error) {
    console.error(`Error reading directory ${folderPath}:`, error)
    return []
  }
} 