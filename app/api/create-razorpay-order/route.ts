import { NextResponse } from 'next/server'
import Razorpay from 'razorpay'

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
})

export async function POST(req: Request) {
  try {
    const { amount, currency, receipt, notes } = await req.json()
    
    const order = await razorpay.orders.create({
      amount: amount * 100, // Razorpay expects amount in paise
      currency,
      receipt,
      notes
    })

    return NextResponse.json(order)
  } catch (error) {
    console.error('Error creating Razorpay order:', error)
    return NextResponse.json({ error: 'Payment initialization failed' }, { status: 500 })
  }
} 