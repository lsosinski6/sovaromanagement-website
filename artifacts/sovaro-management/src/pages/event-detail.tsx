import { motion } from "framer-motion";
import { useParams, Link } from "wouter";
import { Plane, Hotel, ArrowRight, ArrowUpRight, MapPin, Calendar } from "lucide-react";
import { getEvent, bookingComUrl, flightCentreUrl } from "@/data/events";

export default function EventDetail() {
  const params = useParams<{ slug: string }>();
  const event = getEvent(params.slug);

  if (!event) {
    return (
      <div className="pt-40 pb-20 w-full min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold uppercase tracking-tight mb-4">Event not found</h1>
        <Link href="/events" className="font-mono text-primary text-xs uppercase tracking-widest hover:text-primary/80">
          Back to Travel Hub
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 w-full relative min-h-screen">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none fixed" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 mt-12"
        >
          <Link href="/events" className="font-mono text-primary text-xs uppercase tracking-widest hover:text-primary/80 mb-6 inline-block">
            &larr; Travel Hub
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.95] mb-6">
            {event.name}
          </h1>
          <div className="flex flex-wrap gap-6 font-mono text-xs text-muted-foreground uppercase tracking-widest mb-6">
            <span className="flex items-center gap-2"><Calendar size={14} className="text-primary" /> {event.dateLabel}</span>
            <span className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> {event.location}</span>
          </div>
          <p className="text-muted-foreground font-light leading-relaxed max-w-2xl">
            {event.summary}
          </p>
        </motion.div>

        {/* Image */}
        <div className="w-full aspect-[21/9] bg-card border border-border relative overflow-hidden mb-16">
          <img src={event.image} alt={event.name} className="w-full h-full object-cover opacity-90" />
        </div>

        {/* Travel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.a
            href={bookingComUrl(event.bookingCity)}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="group flex flex-col bg-card border border-border hover:border-primary transition-colors duration-300 p-8"
          >
            <Hotel className="w-8 h-8 text-primary mb-6" />
            <h2 className="text-xl font-bold uppercase tracking-tight mb-3 group-hover:text-primary transition-colors">
              Accommodation
            </h2>
            <p className="text-muted-foreground text-sm font-light leading-relaxed mb-8 flex-1">
              Search stays in {event.location} for race weekend via Booking.com.
            </p>
            <span className="font-mono text-xs uppercase tracking-widest flex items-center gap-2 text-foreground group-hover:text-primary transition-colors">
              Search on Booking.com <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </motion.a>

          <motion.a
            href={flightCentreUrl(event.flightRegionSlug)}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="group flex flex-col bg-card border border-border hover:border-primary transition-colors duration-300 p-8"
          >
            <Plane className="w-8 h-8 text-primary mb-6" />
            <h2 className="text-xl font-bold uppercase tracking-tight mb-3 group-hover:text-primary transition-colors">
              Flights
            </h2>
            <p className="text-muted-foreground text-sm font-light leading-relaxed mb-8 flex-1">
              Search flights to {event.flightRegionLabel} via Flight Centre.
            </p>
            <span className="font-mono text-xs uppercase tracking-widest flex items-center gap-2 text-foreground group-hover:text-primary transition-colors">
              Search on Flight Centre <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </motion.a>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border border-border bg-card p-8 md:p-12 text-center"
        >
          <p className="text-lg md:text-xl font-bold uppercase tracking-tight mb-6">
            Need help coordinating the full trip?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center text-xs font-mono tracking-[0.2em] transition-colors focus-visible:outline-none h-14 px-10 uppercase bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Talk to Sovaro <ArrowRight size={14} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
