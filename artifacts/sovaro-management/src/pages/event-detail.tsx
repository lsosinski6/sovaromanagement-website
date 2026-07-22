import { useState } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "wouter";
import { Plane, Hotel, ArrowRight, ArrowUpRight, MapPin, Calendar, TrendingDown, Star } from "lucide-react";
import { getEvent, bookingComUrl, googleFlightsUrl } from "@/data/events";

function formatAud(value: number): string {
  return `${value.toLocaleString("en-AU")}`;
}

export default function EventDetail() {
  const params = useParams<{ slug: string }>();
  const event = getEvent(params.slug);
  const [flightTab, setFlightTab] = useState<"cheapest" | "best">("cheapest");

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

  const activeFlights = flightTab === "cheapest"
    ? [...event.cheapestFlights].sort((a, b) => a.price - b.price)
    : [...event.bestFlights].sort((a, b) => a.price - b.price);

  return (
    <div className="pt-24 pb-20 w-full relative min-h-screen">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none fixed" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12 mt-12"
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

        {/* Estimated Trip Costs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-4 mb-6">
            <h2 className="text-xl font-bold uppercase tracking-tight">Estimated Trip Costs</h2>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground border border-border px-3 py-1">
              Indicative pricing · verify before booking
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,320px)_1fr] gap-6">
            {/* Median accommodation */}
            <div className="bg-card border border-border p-8 flex flex-col">
              <Hotel className="w-6 h-6 text-primary mb-6" />
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Median Accommodation
              </span>
              <span className="text-4xl font-bold tracking-tighter mb-1">
                {formatAud(event.medianAccommodationPrice)}
                <span className="text-base font-light text-muted-foreground"> / night</span>
              </span>
              <span className="text-xs text-muted-foreground font-light mt-2">
                Median nightly rate across available stays in {event.location} for race weekend.
              </span>
            </div>

            {/* Flights panel */}
            <div className="bg-card border border-border p-8">
              {/* Panel header + tab toggle */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <Plane className="w-6 h-6 text-primary" />
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Flights to {event.flightRegionLabel}
                  </span>
                </div>
                {/* Cheapest / Best tabs */}
                <div className="flex border border-border overflow-hidden">
                  <button
                    onClick={() => setFlightTab("cheapest")}
                    className={`flex items-center gap-1.5 px-4 py-2 font-mono text-[10px] uppercase tracking-widest transition-colors ${
                      flightTab === "cheapest"
                        ? "bg-primary text-primary-foreground"
                        : "bg-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <TrendingDown size={12} />
                    Cheapest
                  </button>
                  <button
                    onClick={() => setFlightTab("best")}
                    className={`flex items-center gap-1.5 px-4 py-2 font-mono text-[10px] uppercase tracking-widest transition-colors border-l border-border ${
                      flightTab === "best"
                        ? "bg-primary text-primary-foreground"
                        : "bg-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Star size={12} />
                    Best
                  </button>
                </div>
              </div>

              {/* Tab description */}
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70 mb-5">
                {flightTab === "cheapest"
                  ? "Lowest one-way fare found from each capital city, by departure."
                  : "Best-value fare — balanced for price, routing and convenience."}
              </p>

              {/* Flight grid — each card links to a pre-filled Google Flights search */}
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
                {activeFlights.map((flight, i) => (
                  <a
                    key={flight.code}
                    href={googleFlightsUrl(event, flight.code)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col justify-between p-4 border transition-colors duration-200 ${
                      i === 0
                        ? "border-primary bg-primary/5 hover:bg-primary/10"
                        : "border-border hover:border-primary/60 hover:bg-card/80"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {flight.city}{" "}
                        <span className="text-muted-foreground/60">({flight.code})</span>
                      </span>
                      {i === 0 && (
                        flightTab === "cheapest"
                          ? <TrendingDown size={12} className="text-primary shrink-0" />
                          : <Star size={12} className="text-primary shrink-0" />
                      )}
                    </div>
                    <span className={`text-2xl font-bold tracking-tighter ${i === 0 ? "text-primary" : ""}`}>
                      ${formatAud(flight.price)}
                    </span>
                    {flight.via && (
                      <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/60 mt-1">
                        {flight.via}
                      </span>
                    )}
                    <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/40 mt-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Search Google Flights <ArrowUpRight size={9} />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hero image */}
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
            href={googleFlightsUrl(event)}
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
              Search flights to {event.flightRegionLabel} via Google Flights.
            </p>
            <span className="font-mono text-xs uppercase tracking-widest flex items-center gap-2 text-foreground group-hover:text-primary transition-colors">
              Search on Google Flights <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
