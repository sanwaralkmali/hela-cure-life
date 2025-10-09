'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Award, CheckCircle, Star } from 'lucide-react';

const Partnership: React.FC = () => {
  const { isRTL } = useLanguage();

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
    <section className="py-20 bg-gradient-to-r from-primary-50 to-secondary-50">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Award className="text-primary-600 mr-2" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800">
                {isRTL ? 'شراكة حصرية' : 'Exclusive Partnership'}
              </h2>
            </div>
            <p className="text-lg md:text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              {isRTL
                ? 'نفخر بشراكتنا الحصرية مع مجموعة مارفل فارما'
                : 'We are proud of our exclusive partnership with Marvel Pharma Group'
              }
            </p>
          </motion.div>

          {/* Partnership Card */}
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Logo Section */}
                <div className="bg-gradient-to-br from-primary-100 to-secondary-100 p-12 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="text-center"
                  >
                    <img
                      src="/images/logo_marvel.webp"
                      alt="Marvel Pharma Group Logo"
                      className="max-w-full max-h-32 object-contain mx-auto mb-4"
                    />
                    <h3 className="text-2xl font-bold text-neutral-800">
                      Marvel Pharma Group
                    </h3>
                    <p className="text-primary-600 font-medium mt-2">
                      {isRTL ? 'شريك حصري' : 'Exclusive Partner'}
                    </p>
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="p-12">
                  <div className="flex items-center mb-6">
                    <Star className="text-yellow-500 mr-2" size={24} />
                    <h4 className="text-2xl font-bold text-neutral-800">
                      {isRTL ? 'شراكة استراتيجية' : 'Strategic Partnership'}
                    </h4>
                  </div>

                  <p className="text-neutral-600 leading-relaxed mb-6">
                    {isRTL
                      ? 'تمثل شراكتنا مع مجموعة مارفل فارما التزامنا بتوفير أعلى معايير الجودة في المنتجات الصيدلانية والصحية لعملائنا.'
                      : 'Our partnership with Marvel Pharma Group represents our commitment to providing the highest quality standards in pharmaceutical and health products to our customers.'
                    }
                  </p>

                  <div className="space-y-3">
                    {[
                      isRTL ? 'منتجات عالية الجودة' : 'High-quality products',
                      isRTL ? 'معايير دولية' : 'International standards',
                      isRTL ? 'خدمة موثوقة' : 'Reliable service'
                    ].map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center"
                      >
                        <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
                        <span className="text-neutral-700">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
          >
            {[
              {
                number: '3+',
                label: isRTL ? 'سنوات من الشراكة' : 'Years of Partnership',
                icon: Award
              },
              {
                number: '500+',
                label: isRTL ? 'منتج متاح' : 'Available Products',
                icon: Star
              },
              {
                number: '99%',
                label: isRTL ? 'رضا العملاء' : 'Customer Satisfaction',
                icon: CheckCircle
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="text-center bg-white rounded-2xl p-6 shadow-lg"
              >
                <stat.icon className="text-primary-600 mx-auto mb-4" size={40} />
                <div className="text-3xl font-bold text-neutral-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partnership;