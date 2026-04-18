import React, { memo } from 'react';
import { Scene } from '../canvas/Scene';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Hero = memo(() => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-background flex items-center">
      {/* Background Text Overlay - Refined */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none flex items-center justify-center overflow-hidden">
        <h2 className="text-[20vw] font-bold text-white/5 whitespace-nowrap select-none tracking-tighter uppercase translate-y-12">
          Car Luxe
        </h2>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 container mx-auto px-12 h-full grid grid-cols-1 lg:grid-cols-[40%_60%] items-center gap-12">
        
        {/* Left Column: Typography & Info */}
        <div className="flex flex-col justify-center space-y-8 py-12 lg:py-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-gold-main font-mono tracking-[0.4em] text-[10px] uppercase mb-6 block font-semibold">
              Ecossistema de Estética Automotiva
            </span>
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[1] tracking-tighter uppercase mb-6 text-text-primary">
              Estética <br />
              <span className="text-transparent bg-clip-text bg-[var(--gradient-brand)]">
                Premium
              </span>
            </h1>
            <p className="text-text-secondary text-sm md:text-base max-w-sm leading-relaxed font-light">
              Transformamos veículos em obras de arte através de tecnologia de ponta e precisão artesanal. O padrão CAR LUXE de excelência.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button className="px-8 py-4 bg-[var(--gradient-brand)] text-bg-primary font-bold rounded-full hover:shadow-[0_0_40px_rgba(232,168,0,0.4)] transition-all duration-500 active:scale-95 uppercase text-[10px] tracking-[0.2em] cursor-pointer">
              Solicitar Orçamento
            </button>
            <Link to="/servicos">
              <button className="px-8 py-4 border border-bg-border text-text-primary font-bold rounded-full hover:bg-white/5 transition-all duration-300 uppercase text-[10px] tracking-[0.2em] cursor-pointer">
                Ver Serviços
              </button>
            </Link>
          </motion.div>

          {/* Local Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex gap-16 pt-10 border-t border-bg-border mt-10"
          >
            <div>
              <p className="text-[9px] text-gold-main/80 uppercase tracking-[0.3em] mb-2 font-mono font-bold">Showroom</p>
              <p className="text-sm font-semibold text-text-primary uppercase tracking-widest">Digital</p>
            </div>
            <div>
              <p className="text-[9px] text-gold-main/80 uppercase tracking-[0.3em] mb-2 font-mono font-bold">Padrão</p>
              <p className="text-sm font-semibold text-text-primary uppercase tracking-widest">Elite AI</p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: 3D Showroom */}
        <div className="relative w-full h-[45vh] md:h-[60vh] lg:h-[80vh] flex items-center justify-center order-first lg:order-last">
          {/* Subtle Glow behind the car */}
          <div className="absolute w-[100%] h-[100%] bg-gold-main/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="w-full h-full relative z-10 overflow-visible cursor-grab active:cursor-grabbing">
            <Scene />
          </div>
        </div>

      </div>

      {/* Scroll Indicator - Refined Readability */}
      <div className="absolute bottom-10 right-10 hidden lg:flex flex-col items-center gap-6 z-20">
        <span className="text-[10px] text-primary font-bold uppercase tracking-[0.5em] vertical-text">Explore</span>
        <div className="w-px h-20 bg-gradient-to-b from-primary to-transparent opacity-60" />
      </div>

      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  );
});
