import { Link, useLocation } from "wouter";
import { ReactNode, useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/about", label: "ABOUT" },
    { href: "/latest", label: "LATEST" },
    { href: "/store", label: "STORE" },
    { href: "/events", label: "TRAVEL" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary selection:text-primary-foreground">
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled ? "bg-background/90 backdrop-blur-md border-border" : "bg-transparent border-transparent"
        }`}
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-[0.2em] uppercase z-50 flex items-center gap-3">
            SOVARO
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              <span className="text-[10px] font-mono text-primary tracking-widest hidden md:inline-block">SYS.OP</span>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-10 text-xs font-mono tracking-[0.15em]">
            {links.map(link => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`relative hover:text-primary transition-colors py-2 uppercase ${
                  location === link.href ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {link.label}
                {location === link.href && (
                  <motion.div 
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-primary" 
                  />
                )}
              </Link>
            ))}
          </nav>

          <button 
            className="md:hidden z-50 text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center pt-20"
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <nav className="flex flex-col items-center gap-8 relative z-10">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-2xl font-mono tracking-widest uppercase flex items-center gap-2 ${
                      location === link.href ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 w-full flex flex-col relative">
        {children}
      </main>

      <footer className="border-t border-border bg-card pt-16 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold tracking-[0.2em] mb-4 flex items-center gap-2">
                SOVARO
              </h3>
              <p className="text-muted-foreground font-mono text-sm max-w-sm leading-relaxed">
                Performance-led travel and logistics management for elite athletes and high-performance individuals.
              </p>
            </div>
            
            <div>
              <h4 className="font-mono text-primary text-xs tracking-widest mb-6 uppercase">Index</h4>
              <ul className="space-y-3 font-mono text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
                <li><Link href="/latest" className="hover:text-primary transition-colors">Latest</Link></li>
                <li><Link href="/store" className="hover:text-primary transition-colors">Store</Link></li>
                <li><Link href="/events" className="hover:text-primary transition-colors">Travel</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-primary text-xs tracking-widest mb-6 uppercase">Comms</h4>
              <ul className="space-y-3 font-mono text-sm text-muted-foreground">
                <li>
                  <a href="mailto:talent@sovaromanagement.com" className="hover:text-primary transition-colors flex items-center gap-1 group">
                    Email <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Form</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-muted-foreground uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} SOVARO MANAGEMENT. ALL RIGHTS RESERVED.</p>
            <p className="flex items-center gap-2"><Activity size={12} className="text-primary" /> STATUS: OPERATIONAL</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
