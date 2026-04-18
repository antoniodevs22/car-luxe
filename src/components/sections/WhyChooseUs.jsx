import React from 'react';
import { motion } from 'framer-motion';
import { Target, Cpu, Award, Timer } from 'lucide-react';

const features = [
  {
    title: 'Precisão Milimétrica',
    description: 'Utilizamos medidores de espessura de camada digitais para garantir a segurança total do verniz durante o polimento.',
    icon: Target
  },
  {
    title: 'Tecnologia Graphene',
    description: 'A vanguarda da proteção automotiva. Revestimentos que oferecem resistência térmica e química inigualável.',
    icon: Cpu
  },
  {
    title: 'Certificação Master',
    description: 'Nossa equipe é certificada pelos maiores fabricantes globais de produtos de estética automotiva.',
    icon: Award
  },
  {
    title: 'Protocolo de Tempo',
    description: 'Respeitamos os tempos de cura e processos técnicos rigorosamente, sem atalhos, focando na durabilidade.',
    icon: Timer
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-bg-secondary/30 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold-main/5 blur-[150px] -z-10" />

      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.8 }}
            className="framer-motion-gpu"
          >
            <span className="text-gold-main font-mono text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">
              Engineering Quality
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase leading-tight text-text-primary mb-8">
              Por que a <br />
              <span className="text-gold-main">Excelência</span> é nossa única opção
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-12 max-w-lg font-light">
              Na intersecção entre a paixão automotiva e a engenharia de precisão, criamos um santuário para o seu veículo. Não apenas limpamos; restauramos a glória original de cada detalhe.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-gold-main" />
                <span className="text-xs uppercase tracking-[0.3em] font-bold text-text-primary/90">Padrão Internacional</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-gold-main" />
                <span className="text-xs uppercase tracking-[0.3em] font-bold text-text-primary/90">Inovação Constante</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "200px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 border border-bg-border bg-bg-surface hover:border-gold-main/30 transition-all duration-500 rounded-lg group framer-motion-gpu"
              >
                <div className="w-10 h-10 mb-6 flex items-center justify-center bg-gold-main/5 border border-bg-border group-hover:border-gold-main/40 transition-all duration-500 rounded-lg">
                  <feature.icon className="w-5 h-5 text-gold-main opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="text-lg font-bold uppercase text-text-primary mb-4 tracking-tight">
                  {feature.title}
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors font-light">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
