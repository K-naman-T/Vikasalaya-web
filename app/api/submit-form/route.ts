import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    
    const formData = new URLSearchParams({
      'entry.2016926494': data.name,
      'entry.1474613070': data.email,
      'entry.40505820': data.phone,
      'entry.446782995': data.city,
      'entry.1749218760': data.volunteerType,
      'entry.557302559': data.interests,
      'entry.1025970433': data.experience,
      'submit': 'Submit'
    })

    const FORM_ID = '1FAIpQLSdiWWjCeoBZBzcwFARULo63aoVgi7PH1VN8k8Eom5T54h8L0Q'
    const baseURL = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`

    const response = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString()
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : 'An unknown error occurred' }, { status: 500 })
  }
}