import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ReactNode, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LaunchHighlights from './components/LaunchHighlights';
import AuthorVideos from './components/AuthorVideos';
import AboutBook from './components/AboutBook';
import WorldOfVikramaditya from './components/World';
import Themes from './components/Themes';
import AboutAuthor from './components/AboutAuthor';
import Testimonials from './components/Testimonials';
import Purchase from './components/Purchase';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ChapterOneModal from './components/ChapterOneModal';

import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

function HomePage() {
  const [isSampleOpen, setIsSampleOpen] = useState(false);

  return (
    <>
      <Hero />
      <div id="highlights">
        <LaunchHighlights onOpenSample={() => setIsSampleOpen(true)} />
      </div>
      <AuthorVideos />
      <Testimonials />
      <Newsletter />
      <ChapterOneModal 
        isOpen={isSampleOpen} 
        onClose={() => setIsSampleOpen(false)} 
      />
    </>
  );
}

function PageWrapper({ children }: { children: ReactNode }) {
  // Adds padding to offset the fixed navbar and launch banner on subpages
  return <div className="pt-28 md:pt-32 min-h-[100svh] flex flex-col justify-center">{children}</div>;
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
            <Route path="/chapter-one" element={<Navigate to="/themes" replace />} />
            <Route path="/author" element={<PageWrapper><AboutAuthor /></PageWrapper>} />
            <Route path="/videos" element={<PageWrapper><AuthorVideos /></PageWrapper>} />
            <Route path="/purchase" element={<PageWrapper><Purchase /></PageWrapper>} />
            <Route path="/privacy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
            <Route path="/terms" element={<PageWrapper><TermsOfService /></PageWrapper>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
