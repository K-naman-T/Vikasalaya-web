'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { IndianRupee, AlertCircle } from 'lucide-react'
import OfflinePayment from './components/offline-payment'

const PRESET_AMOUNTS = [
  { amount: 800, description: "Can help provide educational support to one child" },
  { amount: 1200, description: "Can help provide nutrition support for a month" },
  { amount: 1600, description: "Can help sponsor vocational training" },
  { amount: 2400, description: "Can help support women's empowerment programs" }
]

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function DonatePage() {
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time')
  const [amount, setAmount] = useState<number | string>('')
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'netbanking' | 'card'>('upi')

  const handleRazorpayPayment = async () => {
    try {
      const response = await fetch('/api/create-razorpay-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          amount: Number(amount),
          currency: 'INR',
          receipt: `receipt_${Date.now()}`,
          notes: {
            type: donationType,
            payment_method: paymentMethod
          }
        }),
      })

      const order = await response.json()

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "Vikasalaya Foundation",
        description: `${donationType} Donation`,
        order_id: order.id,
        handler: async (response: any) => {
          // Handle successful payment
          const data = {
            orderCreationId: order.id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          }

          await fetch('/api/verify-razorpay-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          })
        },
        prefill: {
          name: "",
          email: "",
          contact: ""
        },
        theme: {
          color: "#FF7A00",
        },
      }

      const paymentObject = new window.Razorpay(options)
      paymentObject.open()
    } catch (error) {
      console.error('Payment failed:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-natural">
      {/* Hero Section */}
      <div className="relative h-[30vh] bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-secondary mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Support Our Cause
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-secondary/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Your contribution helps us create lasting impact in communities across India
            </motion.p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 -mt-16 relative z-20 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Online Payment Form */}
          <motion.div 
            className="bg-secondary rounded-2xl shadow-xl p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Donation Type */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-text mb-4">I pledge to</h2>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setDonationType('one-time')}
                  className={`py-3 px-4 md:px-6 rounded-full font-medium text-sm md:text-base transition-all
                    ${donationType === 'one-time' 
                      ? 'bg-gradient-to-r from-primary to-accent text-secondary shadow-lg' 
                      : 'bg-gray-100 text-text-muted hover:bg-gray-200'}`}
                >
                  Give One-time
                </button>
                <button
                  onClick={() => setDonationType('monthly')}
                  className={`py-3 px-4 md:px-6 rounded-full font-medium text-sm md:text-base transition-all
                    ${donationType === 'monthly' 
                      ? 'bg-gradient-to-r from-primary to-accent text-secondary shadow-lg' 
                      : 'bg-gray-100 text-text-muted hover:bg-gray-200'}`}
                >
                  Give Monthly
                </button>
              </div>
            </div>

            {/* Preset Amounts */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-text mb-4">Select Amount (INR)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PRESET_AMOUNTS.map((preset) => (
                  <button
                    key={preset.amount}
                    onClick={() => setAmount(preset.amount)}
                    className={`p-4 rounded-xl border-2 transition-all group
                      ${amount === preset.amount 
                        ? 'border-primary bg-primary/5' 
                        : 'border-gray-200 hover:border-primary/50'}`}
                  >
                    <div className="flex items-center justify-center gap-1 text-xl font-bold text-text mb-2 
                      group-hover:text-primary transition-colors">
                      ₹{preset.amount}
                    </div>
                    <p className="text-sm text-text-muted">{preset.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Amount */}
            <div className="mb-8">
              <label className="text-text-muted mb-2 block">Other Amount</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">₹</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 
                    focus:border-primary focus:ring-0 transition-colors"
                  placeholder="Enter amount"
                />
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-text mb-4">Payment Method:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {['upi', 'netbanking', 'card'].map((method) => (
                  <button
                    key={method}
                    onClick={() => setPaymentMethod(method as any)}
                    className={`p-4 rounded-xl border-2 transition-all
                      ${paymentMethod === method 
                        ? 'border-primary bg-primary/5' 
                        : 'border-gray-200 hover:border-primary/50'}`}
                  >
                    <span className="capitalize">{method}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Donate Button */}
            <button
              onClick={handleRazorpayPayment}
              className="w-full py-4 bg-gradient-to-r from-primary to-accent 
                text-secondary rounded-xl font-bold text-lg shadow-lg 
                hover:shadow-xl transition-all duration-300"
            >
              Donate Now
            </button>

            {/* Tax Benefits Notice */}
            <div className="mt-6 p-4 bg-gray-50 rounded-xl flex gap-3">
              <AlertCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <p className="text-sm text-text-muted">
                Donations are eligible for tax deduction under Section 80G of the Income Tax Act.
              </p>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="relative my-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-gradient-natural px-4 text-sm text-text-muted">
                Or contribute via bank transfer
              </span>
            </div>
          </div>

          {/* Offline Payment Section */}
          <OfflinePayment />
        </div>
      </div>
    </div>
  )
} 