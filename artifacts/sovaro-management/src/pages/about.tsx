import { motion } from "framer-motion";
import { Activity, Target, Zap } from "lucide-react";

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
            <Activity size={14} /> The Manual
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
          className="w-full aspect-[21/9] bg-card border border-border relative overflow-hidden mb-32"
        >
          <img 
            src="/about.jpg" 
            alt="Track stopwatch and telemetry data" 
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000"
          />
          <div className="absolute inset-0 border border-primary/20 m-4 pointer-events-none" />
          <div className="absolute bottom-6 left-6 font-mono text-xs tracking-widest text-white/50 uppercase">
            SYS.OP.DATA // {new Date().getFullYear()}
          </div>
        </motion.div>

        {/* Content Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 max-w-5xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Target className="w-8 h-8 text-primary mb-6" />
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
            <Zap className="w-8 h-8 text-primary mb-6" />
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
