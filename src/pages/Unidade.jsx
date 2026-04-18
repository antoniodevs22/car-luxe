import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Unidade() {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.113264429783!2d-44.270272524143435!3d-2.4937397974900746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f68dbd71647e95%3A0x986655a95ffb6725!2sCar%20Luxe!5e0!3m2!1spt-BR!2sbr!4v1713430000000!5m2!1spt-BR!2sbr";

  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Hero Section Unidade */}
      <section className="py-20 border-b border-bg-border">
        <div className="container mx-auto px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-gold-main font-mono text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">
              Nossa Unidade
            </span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase leading-none text-text-primary mb-8">
              Onde o Luxo <br />
              <span className="text-gold-main">Encontra a Perfeição</span>
            </h1>
            <p className="text-text-secondary text-lg font-light leading-relaxed">
              Visite nosso showroom e oficina técnica em São Luís. Um ambiente projetado para oferecer o máximo conforto para você e o melhor cuidado para seu veículo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info & Map Section */}
      <section className="py-24">
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Contact Details */}
            <div className="lg:col-span-1 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-lg border border-bg-border flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-gold-main" />
                  </div>
                  <h3 className="text-lg font-bold uppercase tracking-tight text-text-primary">Endereço</h3>
                </div>
                <p className="text-text-secondary font-light">
                  R. do Farol, 15 - Ponta do Farol<br />
                  São Luís - MA, 65077-210
                </p>
                <a 
                  href="https://www.google.com/maps/dir//carluxe/@-2.4937398,-44.2676976,14z" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-gold-main text-xs font-bold uppercase tracking-widest hover:underline underline-offset-8"
                >
                  <Navigation className="w-3 h-3" /> Ver no Google Maps
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-lg border border-bg-border flex items-center justify-center">
                    <Clock className="w-5 h-5 text-gold-main" />
                  </div>
                  <h3 className="text-lg font-bold uppercase tracking-tight text-text-primary">Horário</h3>
                </div>
                <ul className="space-y-2 text-text-secondary font-light text-sm">
                  <li className="flex justify-between"><span>Segunda - Sexta:</span> <span>08h às 19h</span></li>
                  <li className="flex justify-between"><span>Sábado:</span> <span>09h às 13h</span></li>
                  <li className="flex justify-between text-text-muted"><span>Domingo:</span> <span>Fechado</span></li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-lg border border-bg-border flex items-center justify-center">
                    <Phone className="w-5 h-5 text-gold-main" />
                  </div>
                  <h3 className="text-lg font-bold uppercase tracking-tight text-text-primary">Contato</h3>
                </div>
                <p className="text-text-secondary font-light">
                  +55 (98) 99123-4567<br />
                  contato@carluxe.com.br
                </p>
              </motion.div>
            </div>

            {/* Interactive Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="lg:col-span-2 h-[600px] rounded-2xl overflow-hidden border border-bg-border shadow-2xl"
            >
              <iframe 
                src={mapUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Showroom CTA */}
      <section className="py-24 bg-bg-secondary/30">
        <div className="container mx-auto px-12 text-center">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-text-primary mb-8">
            Venha conhecer o <span className="text-gold-main">Melhor da Estética</span>
          </h2>
          <Link 
            to="/agendamento"
            className="inline-block px-12 py-5 bg-gold-main text-bg-primary font-bold uppercase text-xs tracking-[0.4em] rounded-lg hover:shadow-[0_0_40px_rgba(201,168,76,0.3)] transition-all duration-500"
          >
            Agendar Visita
          </Link>
        </div>
      </section>
    </div>
  );
}
