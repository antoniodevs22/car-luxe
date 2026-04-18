import React from 'react';
import { motion } from 'framer-motion';

export function About() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <span className="text-gold-main font-mono text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">A Car Luxe</span>
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-text-primary mb-12">
            Nossa <span className="text-gold-main">História</span>
          </h1>
          <div className="space-y-8 text-lg text-text-secondary font-light leading-relaxed">
            <p>
              Nascida da paixão pela perfeição automotiva, a Car Luxe estabeleceu-se como a referência máxima em estética veicular em São Luís. Nossa missão é simples, mas ambiciosa: tratar cada veículo não apenas como uma máquina, mas como uma obra de arte que merece o mais alto nível de preservação e realce.
            </p>
            <p>
              Ao longo dos anos, investimos em treinamento internacional e nas tecnologias mais avançadas de nanoproteção e correção de pintura, garantindo resultados que desafiam os padrões da indústria.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
