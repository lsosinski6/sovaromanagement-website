import { motion } from "framer-motion";
import { Package, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const products = [
  { 
    id: "EQ-01", 
    name: "SOVARO x SOS Singlet", 
    price: "$120", 
    desc: "Ultra-lightweight racing singlet. Ghost-weave carbon blend. Developed in collaboration with SOS Performance.", 
    image: "/store-1.jpg",
    status: "IN STOCK"
  },
  { 
    id: "EQ-02", 
    name: "Transit Duffel 45L", 
    price: "$285", 
    desc: "Matte black. Waterproof zips. Carbon fiber details. Built for the cargo hold and rigorous travel.", 
    image: "/store-2.jpg",
    status: "LIMITED"
  },
  { 
    id: "EQ-03", 
    name: "Recovery L/S Tee", 
    price: "$95", 
    desc: "Thermal regulation layer. Ideal for post-race flights and temperature-controlled environments.", 
    image: "/store-3.jpg",
    status: "PRE-ORDER"
  }
];

export default function Store() {
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
            <Package size={14} /> Equipment
          </div>
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9] mb-6">
            Performance <br/>
            <span className="text-muted-foreground">Apparel.</span>
          </h1>
          <p className="text-sm text-muted-foreground font-mono leading-relaxed max-w-xl uppercase tracking-widest">
            Purpose-built gear for transit and training. 
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15 }}
              className="group flex flex-col bg-card border border-border hover:border-primary transition-colors duration-300"
            >
              <div className="w-full aspect-square bg-background relative overflow-hidden p-8 flex items-center justify-center border-b border-border">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain mix-blend-screen group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
                  <div className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                    {product.id}
                  </div>
                  <div className={`font-mono text-[10px] tracking-widest uppercase px-2 py-1 border ${
                    product.status === 'IN STOCK' ? 'border-primary text-primary' : 
                    product.status === 'LIMITED' ? 'border-amber-500 text-amber-500' : 'border-muted text-muted-foreground'
                  }`}>
                    {product.status}
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-lg font-bold uppercase tracking-wide group-hover:text-primary transition-colors">
                    {product.name}
                  </h2>
                  <span className="font-mono text-sm text-primary">{product.price}</span>
                </div>
                
                <p className="text-muted-foreground text-sm font-light leading-relaxed mb-8 flex-1">
                  {product.desc}
                </p>
                
                <Link 
                  href="/contact"
                  className="w-full inline-flex items-center justify-center text-xs font-mono tracking-[0.2em] transition-colors focus-visible:outline-none h-12 uppercase border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground group/btn"
                >
                  Enquire to Purchase <ArrowRight size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
