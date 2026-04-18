import React from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
    title: 'Porsche 911 GT3',
    service: 'Paint Correction'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800',
    title: 'Ferrari F8',
    service: 'Ceramic Coating'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=800',
    title: 'Interior Detail',
    service: 'Leather Restoration'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800',
    title: 'BMW M4',
    service: 'Full Detail'
  }
];

export function Gallery({ hideHeader = false }) {
  return (
    <section id="gallery" className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-12">
        {!hideHeader && (
          <div className="flex flex-col mb-20">
            <span className="text-gold-main font-mono text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">
              Excelência Visual
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase leading-none text-text-primary">
              Galeria de <br />
              <span className="text-gold-main/40">Projetos</span>
            </h2>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-bg-secondary border border-bg-border framer-motion-gpu"
            >
              <img 
                src={image.url} 
                alt={image.title}
                loading="lazy"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="absolute bottom-8 left-8 right-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-gold-main font-mono text-[9px] uppercase tracking-[0.3em] mb-2 font-bold">
                  {image.service}
                </p>
                <h4 className="text-lg font-bold uppercase text-text-primary tracking-tight">
                  {image.title}
                </h4>
              </div>

              {/* View Project Indicator */}
              <div className="absolute top-8 right-8 w-10 h-10 border border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-0 group-hover:scale-100 transform duration-700 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 bg-gold-main rounded-full animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
