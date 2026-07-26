export default function Footer() {
  return (
    <footer className="bg-dark-charcoal py-12 border-t border-antique-gold/20">
       <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
             <h3 className="font-cinzel text-xl text-antique-gold tracking-widest mb-2">PRAJWAL PATIL</h3>
             <p className="font-inter text-sm text-muted-sandstone tracking-wide">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
             <p className="font-inter text-xs text-muted-sandstone/70 tracking-widest mt-2 uppercase">Made with ❤ by YASHRAJ JADHAV</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 font-inter text-sm tracking-wide text-muted-sandstone">
             <a href="#" className="hover:text-soft-gold transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-soft-gold transition-colors">Terms of Service</a>
             <a href="#" className="hover:text-soft-gold transition-colors">Contact</a>
          </div>
       </div>
    </footer>
  );
}
