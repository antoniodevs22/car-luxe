import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { Home } from './pages/Home'

const BookingPage = lazy(() => import('./components/sections/Booking').then(module => ({ default: module.Booking })));
const UnidadePage = lazy(() => import('./pages/Unidade').then(module => ({ default: module.Unidade })));
const ServicePage = lazy(() => import('./pages/ServicePage').then(module => ({ default: module.ServicePage })));
const AboutPage = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const CareersPage = lazy(() => import('./pages/Careers').then(module => ({ default: module.Careers })));
const PrivacyPage = lazy(() => import('./pages/Privacy').then(module => ({ default: module.Privacy })));
const ServicesPage = lazy(() => import('./pages/Services').then(module => ({ default: module.Services })));
const GalleryPage = lazy(() => import('./pages/Gallery').then(module => ({ default: module.Gallery })));
const Footer = lazy(() => import('./components/sections/Footer').then(module => ({ default: module.Footer })));

const PageLoader = () => (
  <div className="w-full h-screen flex items-center justify-center bg-background">
    <div className="w-12 h-12 border-2 border-gold-main/20 border-t-gold-main rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <main className="w-full min-h-screen bg-background text-white selection:bg-gold-main selection:text-bg-primary">
      <ScrollToTop />
      <Navbar />
      
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agendamento" element={<div className="pt-24"><BookingPage /></div>} />
          <Route path="/unidade" element={<UnidadePage />} />
          <Route path="/servicos" element={<ServicesPage />} />
          <Route path="/servicos/:slug" element={<ServicePage />} />
          <Route path="/galeria" element={<GalleryPage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/trabalhe-conosco" element={<CareersPage />} />
          <Route path="/privacidade" element={<PrivacyPage />} />
        </Routes>
        <Footer />
      </Suspense>
    </main>
  )
}

export default App
