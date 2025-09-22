'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { TrendingUp, Package, Users, Calendar } from 'lucide-react';

const Stats: React.FC = () => {
  const { content } = useLanguage();
  const [countersStarted, setCountersStarted] = useState(false);

  const stats = [
    {
      icon: TrendingUp,
      value: "30+",
      label: content.stats.suppliers,
      color: "primary"
    },
    {
      icon: Package,
      value: "500+",
      label: content.stats.products,
      color: "secondary"
    },
    {
      icon: Users,
      value: "100+",
      label: content.stats.clients,
      color: "primary"
    },
    {
      icon: Calendar,
      value: "10+",
      label: content.stats.experience,
      color: "secondary"
    }
  ];

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
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          onViewportEnter={() => setCountersStarted(true)}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-4">
              Hela Cure in Numbers
            </h2>
            <p className="text-lg text-neutral-600">
              Our achievements speak for themselves
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              const isSecondary = stat.color === "secondary";

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card rounded-2xl p-8 text-center group hover:shadow-xl"
                >
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: 0 }}
                    whileInView={{ scale: 1, rotate: 360 }}
                    transition={{
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 200,
                      duration: 1
                    }}
                    className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
                      isSecondary
                        ? 'bg-secondary-100 group-hover:bg-secondary-200'
                        : 'bg-primary-100 group-hover:bg-primary-200'
                    } transition-colors duration-300`}
                  >
                    <IconComponent
                      className={`${
                        isSecondary ? 'text-secondary-600' : 'text-primary-600'
                      }`}
                      size={36}
                    />
                  </motion.div>

                  {/* Value */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="mb-4"
                  >
                    <span className="text-4xl md:text-5xl font-bold text-neutral-800">
                      {stat.value}
                    </span>
                  </motion.div>

                  {/* Label */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                    className="text-neutral-600 font-medium text-lg"
                  >
                    {stat.label}
                  </motion.p>

                  {/* Decorative line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "60%" }}
                    transition={{ delay: index * 0.2 + 0.7, duration: 0.8 }}
                    className={`h-1 mx-auto mt-4 rounded-full ${
                      isSecondary ? 'bg-secondary-400' : 'bg-primary-400'
                    }`}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Additional Decorative Elements */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mt-16"
          >
            <div className="relative">
              {/* Animated pulse circles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.1, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                  className={`absolute inset-0 w-16 h-16 border-2 rounded-full ${
                    i % 2 === 0 ? 'border-primary-300' : 'border-secondary-300'
                  }`}
                />
              ))}
              <div className="w-16 h-16 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;