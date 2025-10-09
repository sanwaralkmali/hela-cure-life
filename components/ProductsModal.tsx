'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Image from 'next/image';

interface ProductsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onViewAllProducts?: () => void;
}

const ProductsModal: React.FC<ProductsModalProps> = ({ isOpen, onClose, onViewAllProducts }) => {
  const { isRTL, content } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Generate products array
  const products = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    src: `/products/${i + 1}.jpg`,
    alt: `Product ${i + 1}`,
    title: `Product ${i + 1}`
  }));

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowLeft') {
        isRTL ? nextProduct() : prevProduct();
      } else if (e.key === 'ArrowRight') {
        isRTL ? prevProduct() : nextProduct();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, isRTL, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
          className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-neutral-200">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-neutral-800">
                {content.products.title}
              </h2>
              <p className="text-neutral-600 mt-1 text-sm">
                {currentIndex + 1} {content.products.of} {products.length}
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="w-8 h-8 bg-neutral-100 hover:bg-red-100 hover:text-red-600 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <X size={16} className="text-neutral-600" />
            </motion.button>
          </div>

          {/* Product Display */}
          <div className="relative overflow-y-auto max-h-[calc(90vh-200px)]">
            <div className="aspect-[3/2] bg-gradient-to-br from-neutral-50 to-primary-50 flex items-center justify-center overflow-hidden p-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: isRTL ? -100 : 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isRTL ? 100 : -100 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <Image
                    src={products[currentIndex].src}
                    alt={products[currentIndex].alt}
                    width={400}
                    height={300}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                    priority={currentIndex === 0}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevProduct}
                className={`absolute ${isRTL ? 'right-2' : 'left-2'} top-1/2 -translate-y-1/2 w-10 h-10 bg-white/95 backdrop-blur-sm hover:bg-primary-50 hover:text-primary-600 rounded-full flex items-center justify-center shadow-md transition-all duration-200 border border-white/50`}
              >
                <ChevronLeft size={20} className="text-neutral-700" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextProduct}
                className={`absolute ${isRTL ? 'left-2' : 'right-2'} top-1/2 -translate-y-1/2 w-10 h-10 bg-white/95 backdrop-blur-sm hover:bg-primary-50 hover:text-primary-600 rounded-full flex items-center justify-center shadow-md transition-all duration-200 border border-white/50`}
              >
                <ChevronRight size={20} className="text-neutral-700" />
              </motion.button>
            </div>

            {/* Product Info */}
            <div className="px-6 pb-4">
              <motion.h3
                key={`title-${currentIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-lg font-bold text-neutral-800 mb-2"
              >
                {products[currentIndex].title}
              </motion.h3>
              <motion.p
                key={`desc-${currentIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-neutral-600 text-sm"
              >
                {content.products.description}
              </motion.p>
            </div>
          </div>

          {/* Product Dots/Indicators */}
          <div className="flex items-center justify-center space-x-1 p-4 border-t border-neutral-200">
            {products.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-primary-600 scale-125'
                    : 'bg-neutral-300 hover:bg-neutral-400'
                }`}
              />
            ))}
          </div>

          {/* Footer Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-neutral-50 border-t border-neutral-200 gap-4">
            <div className="text-xs text-neutral-500">
              {content.products.navigation}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevProduct}
                className="px-3 py-1 bg-neutral-200 hover:bg-neutral-300 text-neutral-700 rounded-lg text-sm transition-colors duration-200"
              >
                Previous
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextProduct}
                className="px-3 py-1 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm transition-colors duration-200"
              >
                Next
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="px-4 py-1 bg-neutral-700 hover:bg-neutral-800 text-white rounded-lg text-sm transition-colors duration-200"
              >
                {content.products.close}
              </motion.button>
            </div>
          </div>

          {/* View All Products Button */}
          <div className="p-4 bg-gradient-to-r from-primary-50 to-secondary-50 border-t border-neutral-200">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onViewAllProducts}
              className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {isRTL ? 'عرض جميع المنتجات المتاحة' : 'View All Available Products'}
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductsModal;