import { NextResponse } from 'next/server'
import crypto from 'crypto'
import Razorpay from 'razorpay'

export async function POST(req: Request) {
  try {
    const { 
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature,
      amount,
      contact,
      email,
      phone
    } = await req.json()

    // Initialize Razorpay instance
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!
    })

    // Verify signature
    const sign = razorpay_order_id + '|' + razorpay_payment_id
    const expectedSign = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(sign)
      .digest('hex')

    if (razorpay_signature === expectedSign) {
      // Get payment details from Razorpay
      const payment = await razorpay.payments.fetch(razorpay_payment_id)
      
      // Create invoice with contact details
      const invoice = await razorpay.invoices.create({
        type: "invoice",
        date: Math.floor(Date.now() / 1000),
        customer: {
          contact: phone || payment.contact,
          email: email || payment.email,
          name: 'Donor' // Removed reference to non-existent property
        },
        line_items: [
          {
            name: "Donation to Vikasalaya Foundation",
            amount: Number(amount) * 100, // Convert to paise
            currency: "INR",
            quantity: 1
          }
        ],
        sms_notify: 1,
        email_notify: 1,
        currency: "INR",
        notes: {
          payment_id: razorpay_payment_id,
          order_id: razorpay_order_id
        }
      })

      return NextResponse.json({ 
        verified: true,
        invoice_id: invoice.id,
        invoice_url: invoice.short_url 
      })
    } else {
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Verification failed' },
      { status: 500 }
    )
  }
}