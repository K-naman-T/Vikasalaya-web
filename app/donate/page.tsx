'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { IndianRupee, AlertCircle } from 'lucide-react'
import OfflinePayment from './components/offline-payment'
import { PageHero } from '@/components/ui/page-hero'

const PRESET_AMOUNTS = [
  { amount: 500, description: "Can help provide educational support to one child" },
  { amount: 1000, description: "Can help provide nutrition support for a month" },
  { amount: 1500, description: "Can help sponsor vocational training" },
  { amount: 2000, description: "Can help support women's empowerment programs" }
]

export default function DonatePage() {
  const [amount, setAmount] = useState<number | string>('')

  return (
    <div className="min-h-screen bg-gradient-natural">
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
    </div>
  )
} 