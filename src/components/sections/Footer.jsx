import React from 'react';
import { Shield, Zap, Globe, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';

export function Footer() {
  return (
    <footer className="py-20 bg-background border-t border-bg-border overflow-hidden">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-8">
              <img src={logo} alt="Car Luxe" className="w-12 h-12 object-contain rounded-full border border-gold-main/20" />
              <h3 className="text-2xl font-bold uppercase tracking-widest">
                Car <br />
                <span className="text-gold-main">Luxe</span>
              </h3>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-8 max-w-xs font-light">
              Elevando o conceito de cuidado automotivo a um novo patamar de luxo e precisão técnica.
            </p>
            <div className="flex gap-4">
              {[Shield, Zap, Globe, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-bg-border rounded-full flex items-center justify-center text-text-muted hover:text-gold-main hover:border-gold-main/40 transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] text-gold-main uppercase tracking-[0.4em] font-mono mb-8 font-bold">Serviços</h4>
            <ul className="space-y-4 text-sm text-text-secondary font-light">
              <li><Link to="/servicos/paint-correction" className="hover:text-gold-main transition-colors">Paint Correction</Link></li>
              <li><Link to="/servicos/graphene-coating" className="hover:text-gold-main transition-colors">Graphene Coating</Link></li>
              <li><Link to="/servicos/ppf-installation" className="hover:text-gold-main transition-colors">PPF Protection</Link></li>
              <li><Link to="/servicos/premium-interior" className="hover:text-gold-main transition-colors">Interior Detailing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] text-gold-main uppercase tracking-[0.4em] font-mono mb-8 font-bold">Empresa</h4>
            <ul className="space-y-4 text-sm text-text-secondary font-light">
              <li><Link to="/sobre" className="hover:text-gold-main transition-colors">Sobre Nós</Link></li>
              <li><Link to="/unidade" className="hover:text-gold-main transition-colors">Nossa Unidade</Link></li>
              <li><Link to="/trabalhe-conosco" className="hover:text-gold-main transition-colors">Trabalhe Conosco</Link></li>
              <li><Link to="/privacidade" className="hover:text-gold-main transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] text-gold-main uppercase tracking-[0.4em] font-mono mb-8 font-bold">Newsletter</h4>
            <p className="text-sm text-text-secondary mb-6 font-light">Receba atualizações exclusivas sobre cuidados automotivos.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="bg-white/[0.03] border border-bg-border rounded-l-lg p-4 text-text-primary text-xs focus:outline-none focus:border-gold-main/50 flex-grow transition-all"
              />
              <button className="bg-gold-main px-4 rounded-r-lg text-bg-primary">
                <Zap className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-bg-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] text-text-muted uppercase tracking-widest font-mono">
            © 2026 CAR LUXE | Estética Automotiva. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <span className="text-[9px] text-text-muted uppercase tracking-widest font-mono italic">Handcrafted by Alavanca AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
