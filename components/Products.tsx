'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface Product {
  name: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  tags: string[];
  availability: string;
  image_url: string;
}

interface ProductData {
  [key: string]: Product;
}

const Products: React.FC = () => {
  const { isRTL } = useLanguage();
  const [activeTab, setActiveTab] = useState('featured');
  const [showAll, setShowAll] = useState(false);
  const [allProducts, setAllProducts] = useState<{[key: string]: ProductData}>({});
  const [loading, setLoading] = useState(true);

  const tabs = [
    {
      id: 'featured',
      name: 'Featured Products',
      nameAr: 'المنتجات المميزة',
      path: 'featured',
      hasData: false,
      isFeatured: true
    },
    {
      id: 'bone',
      name: 'Bone Health',
      nameAr: 'صحة العظام',
      path: 'bone',
      hasData: true
    },
    {
      id: 'fertility',
      name: 'Fertility Health',
      nameAr: 'صحة الخصوبة',
      path: 'fertility',
      hasData: true
    },
    {
      id: 'general',
      name: 'General Health',
      nameAr: 'الصحة العامة',
      path: 'general',
      hasData: true
    },
    {
      id: 'kids',
      name: 'Kids Health',
      nameAr: 'صحة الأطفال',
      path: 'kids',
      hasData: true
    }
  ];

  useEffect(() => {
    const loadAllProducts = async () => {
      try {
        const productPromises = tabs.map(async (tab) => {
          try {
            const response = await fetch(`/products/${tab.id}/info.json`);
            const data = await response.json();
            return { [tab.id]: data };
          } catch (error) {
            console.error(`Error loading ${tab.id} products:`, error);
            return { [tab.id]: {} };
          }
        });

        const productResults = await Promise.all(productPromises);
        const mergedProducts = productResults.reduce((acc, curr) => ({ ...acc, ...curr }), {});
        setAllProducts(mergedProducts);
        setLoading(false);
      } catch (error) {
        console.error('Error loading products:', error);
        setLoading(false);
      }
    };

    loadAllProducts();
  }, []);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const getProductsToShow = () => {
    // Handle featured products from modal
    if (activeTab === 'featured') {
      const featuredCount = 12; // Based on modal showing 12 products
      const maxShow = showAll ? featuredCount : Math.min(4, featuredCount);
      return Array.from({ length: maxShow }, (_, i) => `featured-${i + 1}`);
    }

    const currentProducts = allProducts[activeTab];
    if (currentProducts && Object.keys(currentProducts).length > 0) {
      const productKeys = Object.keys(currentProducts);
      return showAll ? productKeys : productKeys.slice(0, 4);
    }
    // Fallback for categories without data
    const count = activeTab === 'kids' ? 3 : 8;
    const maxShow = showAll ? count : Math.min(4, count);
    return Array.from({ length: maxShow }, (_, i) => `product-${i + 1}`);
  };

  const resetShowAll = (tabId: string) => {
    setActiveTab(tabId);
    setShowAll(false);
  };

  if (loading) {
    return (
      <section id="products" className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center px-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
            <p className="mt-4 text-neutral-600">Loading products...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-800 mb-4 sm:mb-6">
              {isRTL ? 'منتجاتنا الصحية' : 'Our Health Products'}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              {isRTL
                ? 'اكتشف مجموعتنا الواسعة من المنتجات الصحية عالية الجودة'
                : 'Discover our wide range of high-quality health products'
              }
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 px-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => resetShowAll(tab.id)}
                  className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
                    activeTab === tab.id
                      ? (tab.isFeatured
                        ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                        : 'bg-primary-600 text-white shadow-lg'
                      )
                      : 'bg-white text-neutral-600 hover:bg-primary-50 hover:text-primary-600 shadow-md'
                  }`}
                >
                  {isRTL ? tab.nameAr : tab.name}
                  {tab.hasData && (
                    <span className="ml-1 sm:ml-2 px-1 sm:px-2 py-1 text-xs bg-green-100 text-green-600 rounded-full">
                      <span className="hidden sm:inline">New</span>
                      <span className="sm:hidden">N</span>
                    </span>
                  )}
                  {tab.isFeatured && (
                    <span className="ml-1 sm:ml-2 px-1 sm:px-2 py-1 text-xs bg-yellow-100 text-yellow-600 rounded-full">
                      <span className="hidden sm:inline">⭐ Featured</span>
                      <span className="sm:hidden">⭐</span>
                    </span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            key={`${activeTab}-${showAll}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0 mb-8"
          >
            {getProductsToShow().map((productKey) => {
              const currentProducts = allProducts[activeTab];
              const product = currentProducts && currentProducts[productKey]
                ? currentProducts[productKey]
                : null;

              // Handle featured products
              const isFeatured = productKey.startsWith('featured-');
              const productNumber = isFeatured
                ? productKey.replace('featured-', '')
                : productKey.replace('product-', '');

              return (
                <motion.div
                  key={productKey}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={isFeatured
                        ? `/products/${productNumber}.jpg`
                        : `/products/${activeTab}/product-${productNumber}.webp`
                      }
                      alt={product?.name || (isFeatured
                        ? `Featured Product ${productNumber}`
                        : `${tabs.find(t => t.id === activeTab)?.name} Product ${productNumber}`
                      )}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="font-bold text-lg text-neutral-800 mb-3 line-clamp-2">
                      {product?.name || (isFeatured
                        ? (isRTL ? `منتج مميز ${productNumber}` : `Featured Product ${productNumber}`)
                        : (isRTL ? `منتج ${productNumber}` : `Product ${productNumber}`)
                      )}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed mb-4 line-clamp-3">
                      {product?.description || (isFeatured
                        ? (isRTL
                          ? 'منتج صحي مميز من مجموعتنا المختارة بعناية'
                          : 'Premium health product from our carefully curated collection'
                        )
                        : (isRTL
                          ? `منتج صحي عالي الجودة لـ${tabs.find(t => t.id === activeTab)?.nameAr}`
                          : `High-quality health product for ${tabs.find(t => t.id === activeTab)?.name.toLowerCase()}`
                        )
                      )}
                    </p>
                    {product && (
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-primary-600">
                          ${product.price}
                        </span>
                        <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                          {product.availability}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Show All Button */}
          <motion.div variants={itemVariants} className="text-center px-4">
            {(() => {
              let productCount;

              if (activeTab === 'featured') {
                productCount = 12; // Featured products count
              } else {
                const currentProducts = allProducts[activeTab];
                const hasProducts = currentProducts && Object.keys(currentProducts).length > 0;
                productCount = hasProducts ? Object.keys(currentProducts).length : (activeTab === 'kids' ? 3 : 8);
              }

              if (productCount > 4) {
                return (
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="bg-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base hover:bg-primary-700 transition-colors duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
                  >
                    {showAll
                      ? (isRTL ? 'عرض أقل' : 'Show Less')
                      : (isRTL ? 'عرض جميع المنتجات' : 'Show All Products')
                    }
                  </button>
                );
              }
              return null;
            })()}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;