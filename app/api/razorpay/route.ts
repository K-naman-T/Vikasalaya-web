import { NextResponse } from 'next/server'
import Razorpay from 'razorpay'

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
})

export async function POST(req: Request) {
  try {
    const { amount, email, name } = await req.json()

    // First create customer
    const customer = await razorpay.customers.create({
      name: name,
      email: email,
      contact: '', // optional
    })

    // Then create order with customer details
    const payment = await razorpay.orders.create({
      amount: Number(amount) * 100, // Convert to paise
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
      notes: {
        email: email,
        name: name,
        customer_id: customer.id
      }
    })

    return NextResponse.json(payment)
  } catch (error) {
    console.error('Razorpay Error:', error)
    return NextResponse.json(
      { error: 'Error creating payment' },
      { status: 500 }
    )
  }
} 