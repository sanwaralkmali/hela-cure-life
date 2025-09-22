'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import Image from 'next/image';
import ProductsModal from './ProductsModal';

const Hero: React.FC = () => {
  const { content, isRTL } = useLanguage();
  const [isProductsModalOpen, setIsProductsModalOpen] = useState(false);

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-16 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`lg:w-1/2 ${isRTL ? 'lg:order-2' : ''}`}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-800 leading-tight mb-6"
            >
              {content.hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed"
            >
              {content.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}
            >
              <button
                onClick={scrollToServices}
                className="btn-primary group"
              >
                <span className="group-hover:scale-105 transition-transform duration-200">
                  {content.hero.ctaPrimary}
                </span>
              </button>

              <button
                onClick={() => setIsProductsModalOpen(true)}
                className="btn-secondary group"
              >
                <span className="group-hover:scale-105 transition-transform duration-200">
                  {content.hero.ctaSecondary}
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`lg:w-1/2 mt-12 lg:mt-0 ${isRTL ? 'lg:order-1' : ''}`}
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative z-10"
              >
                <Image
                  src="/images/header image.png"
                  alt="Healthcare and Pharmaceutical Services"
                  width={600}
                  height={500}
                  style={{ width: 'auto', maxHeight: '450px'} }
                  className="rounded-2xl shadow-2xl w-full h-auto"
                  priority
                />
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 1.5, delay: 0.8 }}
                className="absolute -top-6 -right-6 w-20 h-20 bg-secondary-200 rounded-full opacity-50"
              />

              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: -180 }}
                transition={{ duration: 1.5, delay: 1 }}
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary-200 rounded-full opacity-30"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex justify-center pb-8"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-primary-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>

        {/* Products Modal */}
        <ProductsModal
          isOpen={isProductsModalOpen}
          onClose={() => setIsProductsModalOpen(false)}
        />
      </div>
    </section>
  );
};

export default Hero;