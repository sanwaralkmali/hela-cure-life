'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Building, Users } from 'lucide-react';
import Image from 'next/image';

const Clients: React.FC = () => {
  const { content, isRTL } = useLanguage();

  // Generate images/placeholder client logos (3-8)
  const clientLogos = Array.from({ length: 4 }, (_, i) => ({
    id: i + 1,
    src: `/images/clinet${i + 1}.png`,
    alt: `Client ${i + 1} Logo`,
    name: `Client ${i + 1}`
  }));

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
    <section id="clients" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
              {content.clients.title}
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
              {content.clients.subtitle}
            </p>
          </motion.div>

          {/* Client Sectors */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto"
          >
            {/* Government Sector */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-2xl p-8 text-center group"
            >
              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                whileInView={{ scale: 1, rotate: 360 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors duration-300"
              >
                <Building className="text-primary-600" size={36} />
              </motion.div>
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                {content.clients.government}
              </h3>
              <p className="text-neutral-600">
                Partnering with government institutions to provide quality healthcare solutions across Yemen.
              </p>
            </motion.div>

            {/* Private Sector */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-2xl p-8 text-center group"
            >
              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                whileInView={{ scale: 1, rotate: 360 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
                className="w-20 h-20 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary-200 transition-colors duration-300"
              >
                <Users className="text-secondary-600" size={36} />
              </motion.div>
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                {content.clients.private}
              </h3>
              <p className="text-neutral-600">
                Supporting private healthcare providers with comprehensive pharmaceutical solutions.
              </p>
            </motion.div>
          </motion.div>

          {/* Client Logos Grid */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-neutral-800 text-center mb-12">
              {content.footer.trustedBy}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {clientLogos.map((client, index) => (
                <motion.div
                  key={client.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -3 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card rounded-xl p-6 flex items-center justify-center group hover:shadow-lg"
                >
                  <div className="relative w-full h-16 grayscale group-hover:grayscale-0 transition-all duration-300">
                    <Image
                      src={client.src}
                      alt={client.alt}
                      fill
                      className="object-contain filter opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonial or Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card rounded-2xl p-8 bg-gradient-to-r from-primary-50 to-secondary-50"
            >
              <blockquote className="text-lg md:text-xl text-neutral-700 italic mb-6">
                "Our commitment to excellence has earned us the trust of leading healthcare institutions across Yemen. We continue to strengthen these partnerships through reliable service and quality products."
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="w-12 h-1 bg-primary-400 rounded-full mx-2" />
                <span className="text-primary-600 font-semibold">Hela Cure Life</span>
                <div className="w-12 h-1 bg-secondary-400 rounded-full mx-2" />
              </div>
            </motion.div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                x: [0, 50, 0],
                y: [0, -30, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-10 right-10 w-20 h-20 bg-primary-200 rounded-full opacity-10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;