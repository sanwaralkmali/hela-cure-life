'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Values from '../components/Values';
import Stats from '../components/Stats';
import ServicesSwiper from '../components/ServicesSwiper';
import Clients from '../components/Clients';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Us Section */}
      <About />

      {/* Values & Principles Section */}
      <Values />

      {/* Stats Section */}
      <Stats />

      {/* Services Section */}
      <ServicesSwiper />

      {/* Clients Section */}
      <Clients />

      {/* Footer */}
      <Footer />
    </main>
  );
}