import { motion } from "framer-motion";
import { Activity, ArrowRight, FileText } from "lucide-react";

const articles = [
  {
    id: "ops-02",
    date: "11 May",
    author: "Lachlan Sosinski",
    title: "Ballarat Marathon Weekend with SOS Performance & Team NOX",
    blurb: "SOVARO worked alongside SOS Performance and Team Nox across the Ballarat Marathon weekend, supporting a group of endurance athletes through a structured travel and performance environment. A shakeout run was held on Saturday around Lake Wendouree, with race day producing personal bests from Matt Cameron (2:48:25) and Kyal Atkinson (2:48:33).",
    image: "/journal-3.jpg",
    url: "https://sovaromanagement.com/latest/ballarat-marathon-weekend-with-sos-performance-team-nox"
  },
  {
    id: "ops-01",
    date: "20 Mar",
    author: "Lachlan Sosinski",
    title: "Sovaro Supports Community Shakeout Run Ahead of Gold Coast T100 Triathlon",
    blurb: "Sovaro was proud to support a community shakeout run, bringing together the endurance community ahead of the Gold Coast T100 Triathlon. Led by SOS Performance with Team Nox, the 6km loop started and finished at Tallebudgera Surf Club, followed by coffee at Bean Surfing Café.",
    image: "/journal-1.jpg",
    url: "https://sovaromanagement.com/latest/sovaro-supports-community-shakeout-run-ahead-of-gold-coast-t100-triathlon"
  }
];

export default function Latest() {
  return (
    <div className="pt-24 pb-20 w-full relative min-h-screen">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none fixed" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20 mt-12"
        >
          <div className="font-mono text-primary text-xs tracking-widest uppercase mb-6 flex items-center gap-2">
            <FileText size={14} /> Briefings
          </div>
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9] mb-6">
            Operational <br/>
            <span className="text-muted-foreground">Reports.</span>
          </h1>
          <p className="text-sm text-muted-foreground font-mono leading-relaxed max-w-xl uppercase tracking-widest">
            Field recaps from supported athletes and events. Performance logistics executed in real-time.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {articles.map((article, i) => (
            <motion.a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="w-full aspect-[4/3] bg-card border border-border relative overflow-hidden mb-6">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-background/80 backdrop-blur border border-border px-3 py-1 font-mono text-[10px] tracking-widest uppercase text-primary">
                  {article.id}
                </div>
              </div>
              
              <div className="flex flex-col flex-1 border-l-2 border-primary/20 pl-4 group-hover:border-primary transition-colors">
                <div className="font-mono text-xs text-muted-foreground mb-3">{article.date} — {article.author}</div>
                <h2 className="text-2xl font-bold uppercase tracking-tight mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
                <p className="text-muted-foreground text-sm font-light leading-relaxed mb-6">
                  {article.blurb}
                </p>
                
                <div className="mt-auto pt-4">
                  <span className="font-mono text-xs uppercase tracking-widest flex items-center gap-2 text-foreground group-hover:text-primary transition-colors">
                    Read Report <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        
        {/* End of results */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 pt-8 border-t border-border flex items-center justify-between text-muted-foreground font-mono text-xs uppercase tracking-widest"
        >
          <span>End of transmission.</span>
          <Activity size={14} className="opacity-50" />
        </motion.div>

      </div>
    </div>
  );
}
