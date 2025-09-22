'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import {
  Shield,
  Heart,
  Zap,
  Award,
  Star,
  Users,
  Check,
  Circle,
  TrendingUp
} from 'lucide-react';
import Image from 'next/image';

const Values: React.FC = () => {
  const { content, isRTL } = useLanguage();
  const [hoveredPrinciple, setHoveredPrinciple] = useState<string | null>(null);

  const principleIcons = {
    quality: Shield,
    integrity: Heart,
    adaptation: Zap,
    ownership: Award
  };

  const valueIcons = [Star, Users, Check, Heart, Circle, TrendingUp];

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
    <section id="values" className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* First Section: Title/Description Left, Principles Right */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Left: Title and Description */}
            <motion.div
              variants={itemVariants}
              className={`${isRTL ? 'lg:order-2' : ''} space-y-6`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 leading-tight">
                {content.values.title}
              </h2>
              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
                {content.values.description}
              </p>
            </motion.div>

            {/* Right: Principles with Hover Effects */}
            <motion.div
              variants={itemVariants}
              className={`${isRTL ? 'lg:order-1' : ''} space-y-4`}
            >
              {Object.entries(content.values.principles).map(([key, principle], index) => {
                const IconComponent = principleIcons[key as keyof typeof principleIcons] || Shield;
                const isHovered = hoveredPrinciple === key;

                return (
                  <motion.div
                    key={key}
                    variants={itemVariants}
                    onMouseEnter={() => setHoveredPrinciple(key)}
                    onMouseLeave={() => setHoveredPrinciple(null)}
                    className="group cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, x: isRTL ? -8 : 8 }}
                      transition={{ duration: 0.3 }}
                      className={`glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 ${
                        isHovered ? 'bg-primary-50 border-primary-200' : ''
                      }`}
                    >
                      <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                          className={`p-3 rounded-xl transition-colors duration-300 ${
                            isHovered ? 'bg-primary-200' : 'bg-primary-100'
                          } flex-shrink-0`}
                        >
                          <IconComponent className="text-primary-600" size={24} />
                        </motion.div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl font-bold text-neutral-800 mb-2">
                            {principle.title}
                          </h3>

                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                              height: isHovered ? 'auto' : 0,
                              opacity: isHovered ? 1 : 0
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="text-neutral-600 leading-relaxed pb-2">
                              {principle.description}
                            </p>
                          </motion.div>

                          {!isHovered && (
                            <motion.div
                              initial={{ opacity: 1 }}
                              animate={{ opacity: hoveredPrinciple && hoveredPrinciple !== key ? 0.5 : 1 }}
                              className="h-1 bg-primary-300 rounded-full w-16 mt-2"
                            />
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Second Section: Image Left, Values List Right */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <motion.div
              variants={itemVariants}
              className={`${isRTL ? 'lg:order-2' : ''} relative`}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <Image
                  src="/images/values-image.png"
                  alt="Our Values"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />

                {/* Decorative Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-6 -right-6 w-16 h-16 bg-secondary-200 rounded-full opacity-30"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-200 rounded-full opacity-20"
                />
              </motion.div>
            </motion.div>

            {/* Right: Values List */}
            <motion.div
              variants={itemVariants}
              className={`${isRTL ? 'lg:order-1' : ''} space-y-8`}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-8">
                {content.values.valuesTitle}
              </h3>

              {/* Values Grid - 2 columns on large, 1 on small */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {content.values.valuesList.map((value, index) => {
                  const IconComponent = valueIcons[index % valueIcons.length];

                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.3 }}
                      className="glass-card rounded-xl p-4 group hover:shadow-lg transition-all duration-300 hover:bg-secondary-50"
                    >
                      <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                        <motion.div
                          initial={{ rotate: 0 }}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="p-2 bg-secondary-100 rounded-lg group-hover:bg-secondary-200 transition-colors duration-300 flex-shrink-0"
                        >
                          <IconComponent className="text-secondary-600" size={18} />
                        </motion.div>
                        <span className="font-semibold text-neutral-700 text-sm md:text-base">
                          {value}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Additional Call to Action */}
              <motion.div
                variants={itemVariants}
                className="mt-8 p-6 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-2xl"
              >
                <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                  <div className="p-3 bg-white rounded-xl shadow-md">
                    <Heart className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-800 mb-1">Our Commitment</h4>
                    <p className="text-neutral-600 text-sm">
                      These values guide everything we do and every decision we make.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Values;