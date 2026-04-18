import React from 'react';
import { motion } from 'framer-motion';
import { Services as ServicesSection } from '../components/sections/Services';
import { Shield, Zap, Droplets, Flame, ChevronRight, Star, Clock, Award } from 'lucide-react';

export function Services() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Hero Section for Services */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gold-main/5 blur-[120px] -z-10" />
        <div className="container mx-auto px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-gold-main font-mono text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">
              Nossa Expertise
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none text-text-primary mb-8">
              Serviços <br />
              <span className="text-gold-main">Premium</span>
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed font-light">
              Oferecemos o que há de mais avançado no mundo em estética automotiva. 
              Cada serviço é executado sob rigorosos protocolos internacionais de qualidade.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <ServicesSection hideHeader={true} />

      {/* Additional Features / Benefits Section */}
      <section className="py-24 bg-bg-secondary/30">
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 border border-bg-border bg-bg-surface rounded-lg">
              <Clock className="w-10 h-10 text-gold-main mb-6 opacity-60" />
              <h3 className="text-xl font-bold uppercase mb-4 text-text-primary">Protocolo de Tempo</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Respeitamos o tempo necessário de cura de cada produto para garantir a máxima durabilidade.
              </p>
            </div>
            <div className="p-8 border border-bg-border bg-bg-surface rounded-lg">
              <Award className="w-10 h-10 text-gold-main mb-6 opacity-60" />
              <h3 className="text-xl font-bold uppercase mb-4 text-text-primary">Garantia Certificada</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Todos os nossos serviços de proteção possuem garantia e acompanhamento periódico.
              </p>
            </div>
            <div className="p-8 border border-bg-border bg-bg-surface rounded-lg">
              <Star className="w-10 h-10 text-gold-main mb-6 opacity-60" />
              <h3 className="text-xl font-bold uppercase mb-4 text-text-primary">Materiais de Elite</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Utilizamos apenas marcas líderes mundiais em estética automotiva premium.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
