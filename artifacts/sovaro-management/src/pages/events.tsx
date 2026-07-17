import { motion } from "framer-motion";
import { Link } from "wouter";
import { Plane, ArrowRight } from "lucide-react";
import { events } from "@/data/events";

export default function Events() {
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
            <Plane size={14} /> Travel Hub
          </div>
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9] mb-6">
            Race Travel <br />
            <span className="text-muted-foreground">Planner.</span>
          </h1>
          <p className="text-sm text-muted-foreground font-mono leading-relaxed max-w-xl uppercase tracking-widest">
            The Travel Hub is your one-stop destination for race travel planning. Every race has its own dedicated page giving you an instant snapshot of what your trip will cost — flights, accommodation and key expenses — all in one click. No research, no guesswork. Just clear, accessible travel information built specifically around your race calendar.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {events.map((event, i) => (
            <Link key={event.slug} href={`/events/${event.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer flex flex-col"
              >
                <div className="w-full aspect-[4/3] bg-card border border-border relative overflow-hidden mb-6">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                </div>

                <div className="flex flex-col flex-1 border-l-2 border-primary/20 pl-4 group-hover:border-primary transition-colors">
                  <div className="font-mono text-xs text-muted-foreground mb-3">
                    {event.dateLabel} — {event.location}
                  </div>
                  <h2 className="text-2xl font-bold uppercase tracking-tight mb-3 group-hover:text-primary transition-colors">
                    {event.name}
                  </h2>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed mb-6">
                    {event.summary}
                  </p>

                  <div className="mt-auto pt-4">
                    <span className="font-mono text-xs uppercase tracking-widest flex items-center gap-2 text-foreground group-hover:text-primary transition-colors">
                      Plan Travel <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
