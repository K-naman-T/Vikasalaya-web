'use client'

import { HeroSection, KeyAreasSection, GetInvolvedSection, FAQSection } from '@/components/home'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <KeyAreasSection />
      <GetInvolvedSection />
      <FAQSection />
    </div>
  )
}

