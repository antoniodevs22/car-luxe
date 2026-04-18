import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Droplets, Flame, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: '01',
    title: 'Paint Correction',
    subtitle: 'Engenharia de Brilho',
    description: 'Processo multi-etapa de nivelamento de verniz para remoção de imperfeições, devolvendo a clareza óptica absoluta.',
    icon: Zap,
    slug: 'paint-correction'
  },
  {
    id: '02',
    title: 'Graphene Coating',
    subtitle: 'Blindagem Molecular',
    description: 'Proteção nanocerâmica de última geração com dureza 10H, repelência extrema e brilho profundo por até 5 anos.',
    icon: Shield,
    slug: 'graphene-coating'
  },
  {
    id: '03',
    title: 'Premium Interior',
    subtitle: 'Cuidado Artesanal',
    description: 'Tratamento especializado para Alcantara, couro nappa e acabamentos em fibra de carbono com proteção UV.',
    icon: Droplets,
    slug: 'premium-interior'
  },
  {
    id: '04',
    title: 'PPF Installation',
    subtitle: 'Resiliência Invisível',
    description: 'Película de proteção de pintura auto-regenerativa contra impactos de pedras, riscos e contaminações severas.',
    icon: Flame,
    slug: 'ppf-installation'
  }
];

export function Services({ hideHeader = false }) {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background border-t border-bg-border">
      <div className="container mx-auto px-12">
        
        {/* Header: Car Luxe DNA - Refined Readability */}
        {!hideHeader && (
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-gold-main font-mono text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">
                Protocolos de Elite
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase leading-none text-text-primary">
                Nossos Serviços <br />
                <span className="text-gold-main/40">Premium</span>
              </h2>
            </div>
            <p className="text-text-secondary text-sm max-w-xs leading-relaxed font-light">
              Protocolos exclusivos de estética automotiva desenvolvidos para proprietários que não aceitam nada menos que a perfeição.
            </p>
          </div>
        )}

        {/* Services Grid: Car Luxe Precision */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-l border-t border-bg-border">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "200px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ willChange: 'transform, opacity' }}
              className="group relative p-10 border-r border-b border-bg-border hover:bg-white/[0.03] transition-all duration-500 overflow-hidden"
            >
              {/* Technical ID */}
              <span className="absolute top-8 right-8 text-[40px] font-bold text-white/[0.05] group-hover:text-gold-main/20 transition-colors duration-500 select-none font-mono">
                {service.id}
              </span>

              {/* Icon & Title */}
              <div className="relative z-10">
                <div className="mb-10 inline-flex items-center justify-center w-12 h-12 rounded-sm border border-bg-border group-hover:border-gold-main/60 group-hover:bg-gold-main/10 transition-all duration-500">
                  <service.icon className="w-5 h-5 text-white/60 group-hover:text-gold-main transition-colors duration-500" />
                </div>

                <h3 className="text-xs font-mono text-gold-main uppercase tracking-[0.2em] mb-2 font-bold translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  {service.subtitle}
                </h3>
                <h4 className="text-xl font-bold uppercase tracking-tight mb-4 text-text-primary group-hover:text-white transition-colors">
                  {service.title}
                </h4>
                
                <p className="text-sm text-text-secondary leading-relaxed mb-8 group-hover:text-text-primary transition-colors duration-500">
                  {service.description}
                </p>

                <Link 
                  to={`/servicos/${service.slug}`}
                  className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gold-main/60 group-hover:text-gold-main transition-all duration-300"
                >
                  Saiba Mais <ChevronRight className="w-3 h-3" />
                </Link>
              </div>

              {/* Hover Accent Line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold-main group-hover:w-full transition-all duration-700 ease-in-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
