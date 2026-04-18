import React, { Suspense, lazy } from 'react'
import { Hero } from '../components/sections/Hero'
import { Services } from '../components/sections/Services'
import { WhyChooseUs } from '../components/sections/WhyChooseUs'

const Gallery = lazy(() => import('../components/sections/Gallery').then(module => ({ default: module.Gallery })));
const Booking = lazy(() => import('../components/sections/Booking').then(module => ({ default: module.Booking })));

const SectionLoader = () => (
  <div className="w-full h-[300px] flex items-center justify-center bg-background border-t border-white/5">
    <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
  </div>
);

export function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      
      <Suspense fallback={<SectionLoader />}>
        <Gallery />
        <Booking />
      </Suspense>
    </>
  )
}
