import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.jpg';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Showroom', href: '/' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Galeria', href: '/galeria' },
    { name: 'Unidade', href: '/unidade' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src={logo} 
            alt="Car Luxe" 
            className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-500 rounded-full"
            onError={(e) => e.target.style.display = 'none'} 
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold uppercase tracking-widest leading-none group-hover:text-gold-main transition-colors text-text-primary">
              Car Luxe
            </span>
            <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-gold-main/80">
              Estética Premium
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            link.href.startsWith('/#') ? (
              <a 
                key={link.name} 
                href={link.href}
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-gold-main transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-main group-hover:w-full transition-all duration-500" />
              </a>
            ) : (
              <Link 
                key={link.name} 
                to={link.href}
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-gold-main transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-main group-hover:w-full transition-all duration-500" />
              </Link>
            )
          ))}
          <Link 
            to="/agendamento"
            className="px-6 py-3 border border-gold-main/20 hover:border-gold-main/60 text-gold-main text-[10px] font-bold uppercase tracking-widest transition-all duration-500 rounded-lg"
          >
            Reservar Agora
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-white/5 overflow-hidden"
          >
            <div className="container mx-auto px-12 py-10 flex flex-col gap-6">
              {navLinks.map((link) => (
                link.href.startsWith('/#') ? (
                  <a 
                    key={link.name} 
                    href={link.href}
                    className="text-lg font-bold uppercase tracking-widest text-white/80"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link 
                    key={link.name} 
                    to={link.href}
                    className="text-lg font-bold uppercase tracking-widest text-white/80"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
