import { NextResponse } from 'next/server'
import Razorpay from 'razorpay'

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
})

export async function POST(req: Request) {
  try {
    const { amount } = await req.json()

    // Create order with proper amount
    const payment = await razorpay.orders.create({
      amount: Number(amount) * 100, // Convert to paise
      currency: 'INR',
      receipt: `receipt_${Date.now()}`
    })

    return NextResponse.json({
      ...payment,
      amount: Number(amount) * 100 // Ensure we send the correct amount back
    })
  } catch (error) {
    console.error('Razorpay Error:', error)
    return NextResponse.json(
      { error: 'Error creating payment' },
      { status: 500 }
    )
  }
} 