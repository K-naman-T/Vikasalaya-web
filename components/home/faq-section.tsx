'use client'
import Link from 'next/link'
import { MagicButton } from '@/components/ui/magic-button'

export function FAQSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <MagicButton className="bg-yellow-500 text-white hover:bg-yellow-600">
          <Link href="/faq">View FAQs</Link>
        </MagicButton>
      </div> 
    </section>
  )
} 