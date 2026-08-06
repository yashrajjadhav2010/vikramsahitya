import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactNode } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutBook from './components/AboutBook';
import WorldOfVikramaditya from './components/World';
import Themes from './components/Themes';
import AboutAuthor from './components/AboutAuthor';
import Testimonials from './components/Testimonials';
import Purchase from './components/Purchase';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

function HomePage() {
  return (
    <>
      <Hero />
      <Testimonials />
      <Newsletter />
    </>
  );
}

function PageWrapper({ children }: { children: ReactNode }) {
  // Adds padding to offset the fixed navbar on subpages
  return <div className="pt-24 min-h-[100svh] flex flex-col justify-center">{children}</div>;
}

export default function App() {
  return (
    <Router>
      <CustomCursor />
      <div className="min-h-[100svh] bg-stone-black text-warm-ivory font-inter flex flex-col selection:bg-antique-gold/30 selection:text-warm-ivory">
        <Navbar />
        <main className="flex-grow pb-20 md:pb-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book" element={<PageWrapper><AboutBook /></PageWrapper>} />
            <Route path="/universe" element={<PageWrapper><WorldOfVikramaditya /></PageWrapper>} />
            <Route path="/themes" element={<PageWrapper><Themes /></PageWrapper>} />
            <Route path="/author" element={<PageWrapper><AboutAuthor /></PageWrapper>} />
            <Route path="/purchase" element={<PageWrapper><Purchase /></PageWrapper>} />
            <Route path="/privacy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
            <Route path="/terms" element={<PageWrapper><TermsOfService /></PageWrapper>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
