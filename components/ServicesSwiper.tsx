'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import {
  Truck,
  FileText,
  Warehouse,
  TrendingUp,
  Scale,
  Wrench,
  Users,
  FileCheck,
  Shield,
  Calendar
} from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ServicesSwiper: React.FC = () => {
  const { content, isRTL } = useLanguage();
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const serviceIcons = [
    Truck,
    FileText,
    Warehouse,
    TrendingUp,
    Scale,
    Wrench,
    Users,
    FileCheck,
    Shield,
    Calendar
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
    <section id="services" className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-6 leading-tight max-w-4xl mx-auto">
              {content.services.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto"></div>
          </motion.div>

          {/* Services Swiper */}
          <motion.div variants={itemVariants} className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={32}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 24,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 28,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 32,
                },
              }}
              className="services-swiper-new pb-16"
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              {content.services.items.map((service, index) => {
                const IconComponent = serviceIcons[index];

                return (
                  <SwiperSlide key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -12, scale: 1.02 }}
                      className="h-full"
                    >
                      <div className="relative group h-full">
                        {/* Main Card */}
                        <div className="glass-card rounded-3xl p-8 h-full min-h-[400px] flex flex-col justify-between relative overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                          {/* Background Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                          {/* Content */}
                          <div className="relative z-10">
                            {/* Icon Section */}
                            <motion.div
                              initial={{ scale: 0, rotate: 0 }}
                              whileInView={{ scale: 1, rotate: 360 }}
                              transition={{
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 200,
                                duration: 1
                              }}
                              whileHover={{ scale: 1.1, rotate: 380 }}
                              className="relative mb-8"
                            >
                              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                <IconComponent className="text-white" size={36} />
                              </div>

                              {/* Decorative Ring */}
                              <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute -inset-2 border-2 border-primary-200 rounded-2xl opacity-50"
                              />
                            </motion.div>

                            {/* Title */}
                            <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-6 leading-tight group-hover:text-primary-700 transition-colors duration-300">
                              {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-neutral-600 leading-relaxed text-lg mb-8 flex-grow">
                              {service.description}
                            </p>
                          </div>

                          {/* Bottom Section */}
                          <div className="relative z-10">
                            {/* Decorative Line */}
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: "100%" }}
                              transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                              className="h-1 bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 rounded-full mb-6"
                            />

                            {/* Service Number */}
                            <div className="flex items-center justify-between">
                              <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 + 0.7 }}
                                className="text-sm font-semibold text-primary-600 bg-primary-100 px-4 py-2 rounded-full"
                              >
                                Service {String(index + 1).padStart(2, '0')}
                              </motion.div>

                              {/* Hover Arrow */}
                              <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileHover={{ opacity: 1, x: 0 }}
                                className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                              >
                                <ChevronRight className="text-white" size={16} />
                              </motion.div>
                            </div>
                          </div>

                          {/* Decorative Elements */}
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.1, 0.3, 0.1]
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              delay: index * 0.5
                            }}
                            className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full opacity-10"
                          />
                        </div>

                        {/* Floating Shadow */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                          animate={{
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.3
                          }}
                        />
                      </div>
                    </motion.div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="flex justify-center items-center mt-12 gap-6">
              <motion.button
                ref={prevRef}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`w-14 h-14 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-primary-50 transition-all duration-300 group ${isRTL ? 'rotate-180' : ''}`}
                aria-label="Previous service"
              >
                <ChevronLeft className="text-primary-600 group-hover:text-primary-700 transition-colors duration-200" size={24} />
              </motion.button>

              <div className="text-sm text-neutral-500 font-medium px-4">
                Swipe to explore
              </div>

              <motion.button
                ref={nextRef}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`w-14 h-14 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-primary-50 transition-all duration-300 group ${isRTL ? 'rotate-180' : ''}`}
                aria-label="Next service"
              >
                <ChevronRight className="text-primary-600 group-hover:text-primary-700 transition-colors duration-200" size={24} />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-primary-200 rounded-full opacity-10"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -180, -360]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-10 w-24 h-24 bg-secondary-200 rounded-full opacity-10"
        />
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .services-swiper-new .swiper-pagination {
          bottom: 0 !important;
        }

        .services-swiper-new .swiper-pagination-bullet {
          background: rgb(59 130 246 / 0.3);
          opacity: 1;
          width: 12px;
          height: 12px;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .services-swiper-new .swiper-pagination-bullet-active {
          background: rgb(59 130 246);
          transform: scale(1.3);
          border-color: rgb(59 130 246 / 0.3);
        }

        .services-swiper-new .swiper-slide {
          height: auto;
          display: flex;
        }

        .services-swiper-new .swiper-slide > div {
          width: 100%;
        }

        .services-swiper-new .swiper-wrapper {
          align-items: stretch;
        }
      `}</style>
    </section>
  );
};

export default ServicesSwiper;