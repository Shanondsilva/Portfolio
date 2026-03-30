import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, ScrollProgress } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { FeaturedProject } from './components/FeaturedProject';
import { Portfolio } from './components/Portfolio';
import { FAQ } from './components/FAQ';
import { Contact, Footer } from './components/Contact';
import { ProjectDetail } from './components/ProjectDetail';

const MainContent = () => {
  return (
    <main>
      <div id="home">
        <Hero />
      </div>
      
      <Services />
      
      <About />
      
      <FeaturedProject />
      
      <Portfolio />
      
      <FAQ />
      
      <Contact />
    </main>
  );
};

export default function App() {
  return (
    <Router>
      <div className="relative">
        <ScrollProgress />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
