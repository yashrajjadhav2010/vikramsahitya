import { useState, useEffect } from 'react';
import { Home, Book, Compass, Feather, User } from 'lucide-react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

const desktopNavLinks = [
  { name: 'Home', href: '/' },
  { name: 'The Book', href: '/book' },
  { name: 'Universe', href: '/universe' },
  { name: 'Themes', href: '/themes' },
  { name: 'Author', href: '/author' },
];

const mobileNavLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Book', href: '/book', icon: Book },
  { name: 'World', href: '/universe', icon: Compass },
  { name: 'Themes', href: '/themes', icon: Feather },
  { name: 'Author', href: '/author', icon: User },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Navbar (Desktop & Mobile Header) */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b border-transparent ${
          isScrolled ? 'bg-stone-black/90 backdrop-blur-md border-antique-gold/20 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent py-4 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex justify-between items-center gap-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="z-50 shrink-0"
          >
            <Link to="/" className="flex items-center gap-2 md:gap-3 group">
              <img 
                src="https://i.ibb.co/0VRdwfdR/file-000000001f908211a0bb5f0488b2e5b3.png" 
                alt="Vikram Sahitya Logo" 
                className="w-8 h-8 md:w-10 md:h-10 object-contain shrink-0 group-hover:scale-110 transition-transform duration-500"
              />
              <span className="font-cinzel text-sm md:text-xl font-semibold tracking-widest text-warm-ivory group-hover:text-antique-gold transition-colors duration-300 truncate max-w-[120px] md:max-w-none">
                VIKRAM SAHITYA
              </span>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-end mr-4">
            {desktopNavLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                className={`font-inter text-sm tracking-wide transition-colors duration-300 relative group ${
                  location.pathname === link.href ? 'text-antique-gold' : 'text-muted-sandstone hover:text-soft-gold'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-antique-gold transition-all duration-300 ${
                  location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="shrink-0"
          >
            <Link 
              to="/purchase"
              className="btn-duo-gold px-3 py-2 md:px-6 md:py-3 font-cinzel text-[10px] md:text-sm tracking-widest whitespace-nowrap"
            >
              ORDER NOW
            </Link>
          </motion.div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation Bar (App-like) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-stone-black/95 backdrop-blur-xl border-t border-antique-gold/20 pb-[env(safe-area-inset-bottom)] shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        <div className="flex justify-around items-center h-16 px-2">
          {mobileNavLinks.map((link) => {
            const isActive = location.pathname === link.href;
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors duration-300 ${
                  isActive ? 'text-antique-gold' : 'text-muted-sandstone'
                }`}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 1.5} />
                <span className="text-[10px] font-inter font-medium tracking-wide">{link.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
