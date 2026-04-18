import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Zap, Droplets, Flame, CheckCircle2, ArrowRight } from 'lucide-react';
import paintCorrectionImg from '../assets/paint-correction.png';
import premiumInteriorImg from '../assets/premium-interior.png';
import ppfInstallationImg from '../assets/ppf-installation.png';

const SERVICE_DATA = {
  'paint-correction': {
    title: 'Paint Correction',
    subtitle: 'Engenharia de Brilho',
    description: 'Processo multi-etapa de nivelamento de verniz para remoção de imperfeições, devolvendo a clareza óptica absoluta.',
    icon: Zap,
    benefits: [
      'Remoção de riscos e marcas de lavagem',
      'Restauração da profundidade da cor',
      'Nivelamento técnico do verniz',
      'Brilho espelhado inigualável'
    ],
    image: paintCorrectionImg
  },
  'graphene-coating': {
    title: 'Graphene Coating',
    subtitle: 'Blindagem Molecular',
    description: 'Proteção nanocerâmica de última geração com dureza 10H, repelência extrema e brilho profundo por até 5 anos.',
    icon: Shield,
    benefits: [
      'Dureza superior a cerâmica comum',
      'Ultra hidrofobia (repelência a água)',
      'Proteção contra raios UV e oxidação',
      'Facilidade extrema na limpeza'
    ],
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop'
  },
  'premium-interior': {
    title: 'Premium Interior',
    subtitle: 'Cuidado Artesanal',
    description: 'Tratamento especializado para Alcantara, couro nappa e acabamentos em fibra de carbono com proteção UV.',
    icon: Droplets,
    benefits: [
      'Higienização profunda sem danos',
      'Condicionamento de couros nobres',
      'Proteção UV para plásticos e painéis',
      'Eliminação de odores e bactérias'
    ],
    image: premiumInteriorImg
  },
  'ppf-installation': {
    title: 'PPF Installation',
    subtitle: 'Resiliência Invisível',
    description: 'Película de proteção de pintura auto-regenerativa contra impactos de pedras, riscos e contaminações severas.',
    icon: Flame,
    benefits: [
      'Auto-cura de riscos leves com calor',
      'Proteção física contra pedriscos',
      'Acabamento invisível de alta transparência',
      'Garantia de preservação da originalidade'
    ],
    image: ppfInstallationImg
  }
};

export function ServicePage() {
  const { slug } = useParams();
  const service = SERVICE_DATA[slug];

  if (!service) {
    return (
      <div className="pt-32 text-center h-screen">
        <h1 className="text-4xl font-bold uppercase">Serviço não encontrado</h1>
        <Link to="/" className="text-gold-main mt-4 block">Voltar ao Showroom</Link>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="pt-24 bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        <div className="container mx-auto px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-gold-main font-mono text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">
              {service.subtitle}
            </span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-none text-text-primary mb-8">
              {service.title}
            </h1>
            <p className="text-xl text-text-secondary font-light max-w-2xl leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-32 border-t border-bg-border">
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold uppercase tracking-tight text-text-primary mb-8">
                  Por que escolher nosso <br />
                  <span className="text-gold-main">{service.title}?</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex gap-4">
                      <CheckCircle2 className="w-5 h-5 text-gold-main flex-shrink-0" />
                      <p className="text-sm text-text-secondary leading-snug">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-bg-secondary/30 border border-bg-border rounded-2xl backdrop-blur-md">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gold-main/10 border border-gold-main/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gold-main" />
                  </div>
                  <h3 className="text-lg font-bold uppercase tracking-widest text-text-primary">Garantia de Excelência</h3>
                </div>
                <p className="text-sm text-text-muted font-light leading-relaxed">
                  Utilizamos apenas produtos de elite global e equipamentos de precisão para garantir que seu veículo receba o melhor tratamento possível, superando padrões de fábrica.
                </p>
              </div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-square rounded-3xl overflow-hidden border border-bg-border"
              >
                <img 
                  src={service.image} 
                  alt="Processo técnico"
                  className="w-full h-full object-cover transition-all duration-1000"
                />
              </motion.div>
              <div className="absolute -bottom-6 -left-6 bg-gold-main p-8 rounded-2xl shadow-2xl hidden md:block">
                <p className="text-bg-primary font-bold uppercase text-2xl tracking-tighter">100%</p>
                <p className="text-bg-primary/80 uppercase text-[10px] font-bold tracking-[0.2em]">Precisão Técnica</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-bg-secondary/20">
        <div className="container mx-auto px-12 text-center">
          <h2 className="text-4xl font-bold uppercase tracking-tighter text-text-primary mb-8">
            Pronto para o <span className="text-gold-main">Próximo Nível?</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/agendamento"
              className="px-12 py-5 bg-gold-main text-bg-primary font-bold uppercase text-xs tracking-[0.4em] rounded-lg hover:shadow-[0_0_40px_rgba(201,168,76,0.3)] transition-all duration-500"
            >
              Agendar Serviço
            </Link>
            <Link 
              to="/unidade"
              className="px-12 py-5 border border-bg-border hover:border-gold-main/40 text-text-primary font-bold uppercase text-xs tracking-[0.4em] rounded-lg transition-all duration-500"
            >
              Nossa Unidade
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
