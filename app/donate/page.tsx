'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { IndianRupee, AlertCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { PageHero } from '@/components/ui/page-hero'
import OfflinePayment from './components/offline-payment'
import { ThankYouModal } from './components/thank-you-modal'

declare global {
  interface Window {
    Razorpay: any
  }
}

const PRESET_AMOUNTS = [
  { amount: 500, description: "Can help provide educational support to one child" },
  { amount: 1000, description: "Can help provide nutrition support for a month" },
  { amount: 1500, description: "Can help sponsor vocational training" },
  { amount: 2000, description: "Can help support women's empowerment programs" }
]

export default function DonatePage() {
  const [amount, setAmount] = useState<number | string>('')
  const [isProcessing, setIsProcessing] = useState(false)
  const router = useRouter()
  const [showThankYou, setShowThankYou] = useState(false)

  const handlePayment = async () => {
    if (!amount || isProcessing) return
    setIsProcessing(true)

    try {
      const response = await fetch('/api/razorpay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount }),
      })
      const data = await response.json()

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: data.currency,
        name: 'Vikasalaya Foundation',
        description: 'Donation',
        order_id: data.id,
        prefill: {
          contact: '',
          email: '',
          name: ''
        },
        modal: {
          confirm_close: true,
          escape: false,
          ondismiss: () => {
            setIsProcessing(false)
          }
        },
        config: {
          display: {
            blocks: {
              banks: {
                name: 'Pay via Bank Transfer',
                instruments: [
                  { method: 'upi' },
                  { method: 'netbanking' },
                  { method: 'card' }
                ]
              }
            },
            sequence: ['block.banks'],
            preferences: {
              show_default_blocks: true
            }
          }
        },
        handler: async (response: any) => {
          try {
            const paymentResponse = await fetch('/api/razorpay/verify', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                ...response,
                amount: amount
              }),
            })
            
            if (paymentResponse.ok) {
              paymentObject.close()
              const successModal = new window.Razorpay.Alert({
                title: "Payment Successful!",
                message: "Thank you for your contribution.",
                buttonText: "OK",
                onClose: () => {
                  setShowThankYou(true)
                  setIsProcessing(false)
                  setAmount('')
                }
              })
              successModal.open()
            }
          } catch (error) {
            console.error('Verification failed:', error)
            setIsProcessing(false)
          }
        },
        theme: {
          color: '#FF7A00',
        }
      }

      const paymentObject = new window.Razorpay(options)
      paymentObject.open()
    } catch (error) {
      console.error('Payment failed:', error)
      setIsProcessing(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-natural relative">
      <PageHero
        title="Support Our Cause"
        description="Your contribution helps us create lasting impact in communities across India"
      />

      {/* Content Section */}
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Preset Amounts */}
          <motion.div 
            className="bg-secondary rounded-2xl shadow-xl p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl font-bold text-text mb-6">Select Amount</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {PRESET_AMOUNTS.map((preset) => (
                <button
                  key={preset.amount}
                  onClick={() => setAmount(preset.amount)}
                  className={`p-4 rounded-xl border-2 transition-all text-left
                    ${amount === preset.amount 
                      ? 'border-primary bg-primary/5' 
                      : 'border-gray-200 hover:border-primary/50'}`}
                >
                  <div className="flex items-start gap-3">
                    <IndianRupee className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <span className="block font-bold text-text mb-1">₹{preset.amount}</span>
                      <span className="text-sm text-text-muted">{preset.description}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-text-muted mb-2">
                Or enter custom amount
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">₹</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full pl-8 pr-4 py-2 rounded-lg border-2 border-gray-200 
                    focus:border-primary focus:ring-0"
                  placeholder="Enter amount"
                />
              </div>
            </div>

            {/* Add Donate Button */}
            <button
              onClick={handlePayment}
              disabled={!amount || isProcessing}
              className="w-full py-3 px-6 mt-6 bg-gradient-to-r from-primary to-accent 
                text-white rounded-lg font-medium shadow-lg
                hover:shadow-xl transition-all duration-300
                disabled:opacity-50 disabled:cursor-not-allowed
                relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isProcessing ? 'Processing...' : 'Proceed to Pay'}
                {!isProcessing && (
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                )}
              </span>
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
                Bank transfer details
              </span>
            </div>
          </div>

          {/* Offline Payment Section */}
          <OfflinePayment />
        </div>
      </div>

      {/* Modal - Moved outside the container */}
      <ThankYouModal 
        isOpen={showThankYou}
        onClose={() => setShowThankYou(false)}
      />
    </div>
  )
} 