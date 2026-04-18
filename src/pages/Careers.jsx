import React from 'react';
import { motion } from 'framer-motion';

export function Careers() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen text-center">
      <div className="container mx-auto px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <span className="text-gold-main font-mono text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">Faça Parte</span>
          <h1 className="text-5xl font-bold uppercase tracking-tighter text-text-primary mb-8">Trabalhe <span className="text-gold-main">Conosco</span></h1>
          <p className="text-text-secondary text-lg font-light mb-12">
            Estamos sempre em busca de talentos apaixonados por detalhes e engenharia automotiva. Se você busca excelência, envie seu currículo.
          </p>
          <div className="p-12 border border-bg-border rounded-2xl bg-bg-secondary/20">
            <p className="text-sm text-text-muted mb-6">Envie seu portfólio ou currículo para:</p>
            <p className="text-xl font-bold text-gold-main tracking-widest">vagas@carluxe.com.br</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
