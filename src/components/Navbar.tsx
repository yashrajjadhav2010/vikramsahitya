import { useState, useEffect } from 'react';
import { Menu, X, Home, Book, Compass, Feather, User, BookOpen, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

const desktopNavLinks = [
  { name: 'Home', href: '/' },
  { name: 'The Book', href: '/book' },
  { name: 'Universe', href: '/universe' },
  { name: 'Themes', href: '/themes' },
  { name: 'Chapter 1', href: '/chapter-one' },
  { name: 'Author', href: '/author' },
];

const mobileNavLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Book', href: '/book', icon: Book },
  { name: 'World', href: '/universe', icon: Compass },
];

const moreLinks = [
  { name: 'Themes', href: '/themes', icon: Feather },
  { name: 'Chapter 1', href: '/chapter-one', icon: BookOpen },
  { name: 'Author', href: '/author', icon: User },
  { name: 'Order Now', href: '/purchase', icon: ShoppingCart },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close drawer on navigation
  useEffect(() => {
    setMobileDrawerOpen(false);
  }, [location]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (mobileDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileDrawerOpen]);

  return (
    <>
      {/* Top Navbar (Desktop & Mobile Header) */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b border-transparent ${
          isScrolled ? 'bg-stone-black/90 backdrop-blur-md border-antique-gold/20 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent py-4 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex justify-center md:justify-between items-center">
          {/* Logo (Centered on mobile, left on desktop) */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="z-50"
          >
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 md:w-8 md:h-8 rounded-full border-2 border-antique-gold flex items-center justify-center overflow-hidden">
                 <div className="w-4 h-4 bg-antique-gold rotate-45 group-hover:rotate-180 transition-transform duration-700"></div>
              </div>
              <span className="font-cinzel text-lg md:text-xl font-semibold tracking-widest text-warm-ivory group-hover:text-antique-gold transition-colors duration-300">
                VIKRAM SAHITYA
              </span>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
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
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/purchase"
                className="btn-duo-gold px-6 py-3 font-cinzel text-sm tracking-widest"
              >
                ORDER NOW
              </Link>
            </motion.div>
          </div>
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
          
          <button
            onClick={() => setMobileDrawerOpen(true)}
            className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors duration-300 ${
              mobileDrawerOpen ? 'text-antique-gold' : 'text-muted-sandstone'
            }`}
          >
            <Menu size={20} strokeWidth={mobileDrawerOpen ? 2.5 : 1.5} />
            <span className="text-[10px] font-inter font-medium tracking-wide">More</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Bottom Sheet) */}
      <AnimatePresence>
        {mobileDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileDrawerOpen(false)}
              className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            
            {/* Bottom Sheet */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-dark-charcoal border-t border-antique-gold/30 rounded-t-3xl overflow-hidden pb-[env(safe-area-inset-bottom)]"
            >
              <div className="p-6">
                <div className="w-12 h-1.5 bg-muted-sandstone/30 rounded-full mx-auto mb-8"></div>
                
                <h3 className="font-cinzel text-lg tracking-widest text-warm-ivory mb-6 pl-2">EXPLORE MORE</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {moreLinks.map((link) => {
                    const Icon = link.icon;
                    const isPurchase = link.href === '/purchase';
                    return (
                      <Link
                        key={link.name}
                        to={link.href}
                        className={`flex flex-col items-center justify-center gap-3 p-4 rounded-2xl border ${
                          isPurchase 
                            ? 'border-antique-gold/50 bg-antique-gold/10 text-antique-gold' 
                            : 'border-antique-gold/10 bg-stone-black/50 text-warm-ivory'
                        } active:scale-95 transition-transform`}
                      >
                        <Icon size={24} className={isPurchase ? "text-antique-gold" : "text-muted-sandstone"} />
                        <span className={`font-cinzel text-xs tracking-wider font-semibold ${
                          isPurchase ? "text-antique-gold" : "text-warm-ivory"
                        }`}>{link.name}</span>
                      </Link>
                    );
                  })}
                </div>
                
                <button
                  onClick={() => setMobileDrawerOpen(false)}
                  className="w-full mt-8 py-4 bg-stone-black border border-antique-gold/20 rounded-xl font-inter text-sm tracking-widest text-muted-sandstone hover:text-warm-ivory active:bg-stone-black/80 transition-colors flex items-center justify-center gap-2"
                >
                  <X size={18} />
                  CLOSE
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
