import { motion } from "framer-motion";
import { Link } from "wouter";
import { Activity } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex flex-col items-center"
      >
        <Activity className="w-16 h-16 text-primary mb-8 animate-pulse" />
        
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-4">
          404 <span className="text-muted">/ Signal Lost</span>
        </h1>
        
        <p className="text-muted-foreground font-mono text-sm md:text-base max-w-md mb-10 leading-relaxed uppercase tracking-widest">
          The requested trajectory does not exist in our current flight path. Verify coordinates or return to base.
        </p>
        
        <Link 
          href="/" 
          className="inline-flex items-center justify-center text-xs font-mono tracking-[0.2em] transition-colors focus-visible:outline-none h-12 px-8 uppercase bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Return to Base
        </Link>
      </motion.div>
    </div>
  );
}
