'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const { language, setLanguage, content, isRTL } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'values', href: '#values' },
    { key: 'services', href: '#services' },
    { key: 'clients', href: '#clients' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Hela Cure Life Logo"
              width={80}
              height={40}
              className="rounded-lg"
            />
            <span className="ml-3 text-xl font-bold text-primary-700">
              Hela Cure Life
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="text-neutral-600 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {content.nav[item.key as keyof typeof content.nav]}
              </button>
            ))}

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 bg-primary-50 hover:bg-primary-100 text-primary-700 px-3 py-2 rounded-lg transition-colors duration-200"
            >
              <Globe size={16} />
              <span className="font-medium">{language.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-600 hover:text-primary-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t border-neutral-200"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-${isRTL ? 'right' : 'left'} px-4 py-2 text-neutral-600 hover:text-primary-600 font-medium transition-colors duration-200`}
                  >
                    {content.nav[item.key as keyof typeof content.nav]}
                  </button>
                ))}

                {/* Mobile Language Switcher */}
                <button
                  onClick={toggleLanguage}
                  className={`flex items-center ${isRTL ? 'justify-end' : 'justify-start'} w-full px-4 py-2 space-x-2 bg-primary-50 hover:bg-primary-100 text-primary-700 rounded-lg transition-colors duration-200 mx-4`}
                  style={{ width: 'calc(100% - 2rem)' }}
                >
                  <Globe size={16} />
                  <span className="font-medium">{language.toUpperCase()}</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;