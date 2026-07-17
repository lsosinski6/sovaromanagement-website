import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { articles } from "@/data/articles";

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
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9] mb-6">
            Latest.
          </h1>
          <p className="text-sm text-muted-foreground font-mono leading-relaxed max-w-xl uppercase tracking-widest">
            News, race recaps and updates from the Sovaro team.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {articles.map((article, i) => (
            <Link key={article.slug} href={`/latest/${article.slug}`}>
              <motion.div
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
                      Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
