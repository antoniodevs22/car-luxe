import React from 'react';
import { motion } from 'framer-motion';
import { Gallery as GallerySection } from '../components/sections/Gallery';

export function Gallery() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Hero Section for Gallery */}
      <section className="relative py-20 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 w-full h-full bg-gold-main/5 blur-[120px] -z-10" />
        <div className="container mx-auto px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-gold-main font-mono text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">
              Portfólio de Elite
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none text-text-primary mb-8">
              Nossos <br />
              <span className="text-gold-main">Resultados</span>
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed font-light">
              Uma seleção exclusiva de veículos que passaram pelo tratamento CAR LUXE. 
              Brilho absoluto, clareza óptica e proteção inabalável em cada detalhe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Gallery Section */}
      <GallerySection hideHeader={true} />

      {/* Showcase Section / Quote */}
      <section className="py-24 bg-bg-secondary/30 border-t border-white/5">
        <div className="container mx-auto px-12 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-light italic text-text-primary/80 mb-8">
              "A perfeição não é um objetivo, é o nosso ponto de partida."
            </h3>
            <div className="w-12 h-px bg-gold-main mx-auto mb-8" />
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold-main font-bold">
              Protocolo Car Luxe
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
