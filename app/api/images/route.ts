import { NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const folder = searchParams.get('folder')

    if (!folder) {
      return NextResponse.json({ error: 'Folder parameter is required' }, { status: 400 })
    }

    // Normalize folder path and remove any leading/trailing slashes
    const normalizedFolder = folder.replace(/^\/+|\/+$/g, '')
    const folderPath = path.join(process.cwd(), 'public', normalizedFolder)

    // Check if directory exists
    if (!fs.existsSync(folderPath)) {
      console.error(`Directory not found: ${folderPath}`)
      return NextResponse.json({ images: [] })
    }

    // Read directory and filter image files
    const files = fs.readdirSync(folderPath)
    const images = files
      .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .map(file => `/${normalizedFolder}/${file}`)
      .sort((a, b) => a.localeCompare(b))

    // Return proper JSON response
    return new NextResponse(JSON.stringify({ images }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })

  } catch (error) {
    console.error('Error in image API route:', error)
    return NextResponse.json({ error: 'Internal server error', images: [] }, { status: 500 })
  }
} 