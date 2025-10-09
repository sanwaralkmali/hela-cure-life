'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, Target, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const { content, isRTL } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="py-20 bg-white">
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
              {content.about.title}
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              {content.about.description}
            </p>

            {/* Location */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center mt-8 text-primary-600"
            >
              <MapPin size={20} className={`${isRTL ? 'ml-2' : 'mr-2'}`} />
              <span className="font-medium">{content.about.location}</span>
            </motion.div>
          </motion.div>

          {/* Cards Section */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {/* Our Message Card */}
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-2xl p-8 group"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-100 rounded-xl group-hover:bg-primary-200 transition-colors duration-300">
                  <Target className="text-primary-600" size={24} />
                </div>
                <h3 className={`text-2xl font-bold text-neutral-800 ${isRTL ? 'mr-4' : 'ml-4'}`}>
                  {content.about.message.title}
                </h3>
              </div>
              <p className="text-neutral-600 leading-relaxed">
                {content.about.message.content}
              </p>
            </motion.div>

            {/* Our Services Card */}
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-2xl p-8 group"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-secondary-100 rounded-xl group-hover:bg-secondary-200 transition-colors duration-300">
                  <CheckCircle className="text-secondary-600" size={24} />
                </div>
                <h3 className={`text-2xl font-bold text-neutral-800 ${isRTL ? 'mr-4' : 'ml-4'}`}>
                  {content.about.ourServices.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {content.about.ourServices.items.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center text-neutral-600"
                  >
                    <div className={`w-2 h-2 bg-secondary-400 rounded-full ${isRTL ? 'ml-3' : 'mr-3'} flex-shrink-0`} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Scrolling Brand Promotion */}
          <motion.div
            variants={itemVariants}
            className="mt-16 overflow-hidden"
          >
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-neutral-700 mb-2">
                Trusted Partner Brands
              </h3>
              <p className="text-neutral-500">
                Working with leading pharmaceutical companies
              </p>
            </div>
            <div className="relative overflow-hidden">
              <motion.div
                animate={{ x: "-50%" }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="flex space-x-8 w-max"
              >
                {/* First set of brands */}
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                  <div
                    key={`first-${num}`}
                    className="flex-shrink-0 w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300"
                  >
                    <img
                      src={`/line/${num}.webp`}
                      alt={`Brand ${num}`}
                      className="max-w-full max-h-full object-contain p-2"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                  <div
                    key={`second-${num}`}
                    className="flex-shrink-0 w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300"
                  >
                    <img
                      src={`/line/${num}.webp`}
                      alt={`Brand ${num}`}
                      className="max-w-full max-h-full object-contain p-2"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;