'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import Image from 'next/image';

const Footer: React.FC = () => {
  const { content, isRTL } = useLanguage();

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'values', href: '#values' },
    { key: 'services', href: '#services' },
    { key: 'clients', href: '#clients' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <footer className="bg-neutral-800 text-white relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="pt-16 pb-8"
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Logo and Company Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="Hela Cure Life Logo"
                  width={48}
                  height={48}
                  className="rounded-lg"
                />
                <span className={`text-2xl font-bold text-white ${isRTL ? 'mr-3' : 'ml-3'}`}>
                  Hela Cure Life
                </span>
              </div>
              <p className="text-neutral-300 leading-relaxed">
                Leading pharmaceutical and healthcare solutions provider in Yemen, committed to excellence in healthcare delivery.
              </p>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-lg transition-colors duration-200"
              >
                <ArrowUp size={16} />
                <span>{content.footer.backToTop}</span>
              </motion.button>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-6">{content.footer.contactInfo}</h3>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: isRTL ? -5 : 5 }}
                  className="flex items-center space-x-3"
                >
                  <div className="p-2 bg-primary-600 rounded-lg">
                    <Phone size={16} />
                  </div>
                  <span className="text-neutral-300">{content.footer.contact.phone}</span>
                </motion.div>

                <motion.div
                  whileHover={{ x: isRTL ? -5 : 5 }}
                  className="flex items-center space-x-3"
                >
                  <div className="p-2 bg-secondary-600 rounded-lg">
                    <Mail size={16} />
                  </div>
                  <span className="text-neutral-300">{content.footer.contact.email}</span>
                </motion.div>

                <motion.div
                  whileHover={{ x: isRTL ? -5 : 5 }}
                  className="flex items-start space-x-3"
                >
                  <div className="p-2 bg-primary-600 rounded-lg mt-1">
                    <MapPin size={16} />
                  </div>
                  <span className="text-neutral-300 leading-relaxed">
                    {content.footer.contact.address}
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-6">{content.footer.quickLinks}</h3>
              <div className="space-y-3">
                {navItems.map((item) => (
                  <motion.button
                    key={item.key}
                    onClick={() => scrollToSection(item.href)}
                    whileHover={{ x: isRTL ? -5 : 5 }}
                    className={`block text-neutral-300 hover:text-white transition-colors duration-200 text-${isRTL ? 'right' : 'left'} w-full`}
                  >
                    {content.nav[item.key as keyof typeof content.nav]}
                  </motion.button>
                ))}
              </div>

              {/* Social Links images/placeholder */}
              <div className="pt-4">
                <h4 className="text-lg font-semibold text-white mb-3">{content.footer.followUs}</h4>
                <div className="flex space-x-3">
                  {['Facebook', 'Twitter', 'LinkedIn'].map((social, index) => (
                    <motion.div
                      key={social}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 bg-neutral-700 hover:bg-primary-600 rounded-lg flex items-center justify-center cursor-pointer transition-colors duration-200"
                    >
                      <span className="text-xs font-bold">{social[0]}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="h-px bg-neutral-600 mb-8"
          />

          {/* Copyright */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <p className="text-neutral-400 text-center md:text-left">
              {content.footer.copyright}
            </p>
            <motion.a
              href="https://sanwaralkmali.github.io/about.html"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 cursor-pointer"
            >
              {content.footer.developedBy}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -left-20 w-40 h-40 bg-primary-600 rounded-full opacity-5"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 40, 0],
            rotate: [0, -180, -360]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-16 -right-16 w-32 h-32 bg-secondary-600 rounded-full opacity-5"
        />
      </div>
    </footer>
  );
};

export default Footer;