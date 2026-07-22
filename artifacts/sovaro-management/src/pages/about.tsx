import { motion } from "framer-motion";
import LogoMark from "@/components/logo-mark";

export default function About() {
  return (
    <div className="pt-24 pb-20 w-full relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none fixed" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-24 mt-12"
        >
          <div className="font-mono text-primary text-xs tracking-widest uppercase mb-6 flex items-center gap-2">
            <LogoMark className="h-3.5 w-auto" /> The Manual
          </div>
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9] mb-8">
            About <br/>
            <span className="text-muted-foreground">Sovaro.</span>
          </h1>
          <p className="text-lg text-muted-foreground font-mono leading-relaxed">
            Sovaro is a performance-led travel and management service built for high-performance individuals and athletes. We take the friction out of travel. We plan, book and coordinate every moving part so you can stay focused on what matters most: performance.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full aspect-[21/9] bg-black border border-border relative overflow-hidden mb-32"
        >
          <img 
            src="/sovaro-bg-v2.jpg" 
            alt="" 
            aria-hidden="true"
            className="w-full h-full object-cover opacity-80"
          />
          {/* Logo centred over the background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/sovaro-logo-full.png"
              alt="Sovaro Management"
              className="w-56 md:w-80 lg:w-96 select-none pointer-events-none"
            />
          </div>
          <div className="absolute inset-0 border border-white/10 m-4 pointer-events-none" />
        </motion.div>

        {/* Content Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 max-w-5xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <LogoMark className="h-8 w-auto mb-6" />
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">What we do.</h2>
            <p className="text-muted-foreground leading-relaxed text-sm font-light">
              From race-week logistics and training blocks to complex multi-stop schedules, Sovaro delivers calm, structured and reliable support designed around the demands of high-performance sport.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
          >
            <LogoMark className="h-8 w-auto mb-6" />
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">Our standard.</h2>
            <p className="text-muted-foreground leading-relaxed text-sm font-light">
              We operate with one standard: performance first. Every itinerary is built with precision, flexibility and detail. This ensures athletes and teams arrive prepared, recover properly, and move through competition periods with confidence.
            </p>
          </motion.div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border border-border bg-card p-8 md:p-12 relative overflow-hidden text-center"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <p className="text-2xl md:text-3xl font-bold uppercase tracking-tight relative z-10">Performance in Motion.</p>
        </motion.div>

      </div>
    </div>
  );
}
