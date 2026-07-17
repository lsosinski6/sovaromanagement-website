import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Activity, Clock, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero.jpg" 
            alt="Elite athlete in transit" 
            className="w-full h-full object-cover opacity-30 scale-105 transform translate-z-0 transition-transform duration-[20s] ease-out hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/80" />
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        </div>

        <div className="container relative z-10 px-6 mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-[0.95] mb-8">
              Performance-led travel <br className="hidden md:block" /> and management for <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground/80 to-foreground/30">high-performance individuals.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl font-light mb-12 leading-relaxed">
              We take the friction out of travel. We plan, book and coordinate every moving part so you can stay focused on what matters most: performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/events" 
                className="inline-flex items-center justify-center text-xs font-mono tracking-[0.2em] transition-colors focus-visible:outline-none h-14 px-8 uppercase bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Travel Hub
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center text-xs font-mono tracking-[0.2em] transition-colors focus-visible:outline-none h-14 px-8 uppercase border border-border bg-background/50 backdrop-blur-sm hover:border-primary hover:text-primary text-foreground group"
              >
                Contact Us <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground opacity-50"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-background relative border-t border-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border pb-12"
          >
            <div>
              <div className="font-mono text-primary text-xs tracking-widest uppercase mb-4">About Sovaro</div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">Performance first.</h2>
              <p className="text-muted-foreground font-mono text-sm max-w-xl leading-relaxed">
                When you book with Sovaro you get more than just a flight and a hotel. You get flexible bookings with full refund options up to 48 hours before travel, competitive pricing through our global travel network, 24/7 Australian-based support wherever you are in the world, complete spend tracking and budget visibility across every trip, access to over 53,000 properties globally, and a dedicated travel partner who understands performance. No overhead, no guesswork — just travel that works as hard as you do.
              </p>
            </div>
            <Link href="/about" className="font-mono text-primary hover:text-primary/80 flex items-center gap-2 uppercase text-xs tracking-widest group">
              Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Race-Week Logistics", 
                desc: "Structured, reliable support built around the demands of race week, so athletes can arrive prepared and perform.", 
                icon: Clock,
                metric: "001"
              },
              { 
                title: "Training Camps & Retreats", 
                desc: "Performance-focused travel experiences built around training blocks, preparation and recovery. From endurance camps to athlete retreats, we coordinate everything so you arrive ready to perform.", 
                icon: Activity,
                metric: "002"
              },
              { 
                title: "Multi-Stop Schedules", 
                desc: "Complex, multi-stop schedules planned and booked with precision, flexibility and detail from start to finish.", 
                icon: MapPin,
                metric: "003"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15 + 0.1 }}
                className="group border border-border bg-card p-8 hover:border-primary transition-colors duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 font-mono text-muted opacity-20 text-4xl font-bold group-hover:text-primary group-hover:opacity-10 transition-colors">
                  {item.metric}
                </div>
                <div className="w-12 h-12 bg-background border border-border flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500 relative z-10">
                  <item.icon size={20} />
                </div>
                <h3 className="text-xl font-bold uppercase mb-4 tracking-wide relative z-10">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed relative z-10 font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-card relative overflow-hidden border-t border-border">
        <div className="absolute inset-0 z-0 opacity-20 bg-cover bg-center mix-blend-overlay" style={{ backgroundImage: 'url(/journal-4.jpg)' }} />
        <div className="absolute inset-0 bg-background/90" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6">Ready to elevate your performance?</h2>
            <p className="text-muted-foreground font-mono text-sm mb-10 leading-relaxed">
              Get in touch to discuss how Sovaro can support you through tailored travel, logistics and management solutions.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center text-xs font-mono tracking-[0.2em] transition-colors focus-visible:outline-none h-14 px-10 uppercase bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
