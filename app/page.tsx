'use client'

import { HeroSection, KeyAreasSection, GetInvolvedSection, FAQSection } from '@/components/home'
import { Suspense } from 'react'
import { Loading } from '@/components/ui/loading'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <KeyAreasSection />
      <Suspense fallback={<Loading />}>
        <GetInvolvedSection />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <FAQSection />
      </Suspense>
    </>
  )
}

