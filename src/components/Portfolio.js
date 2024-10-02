import React from 'react';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Timeline from './Timeline';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main className="container mx-auto px-6 py-12">
        <About />
        <Timeline />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
