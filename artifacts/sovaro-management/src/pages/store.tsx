import { motion } from "framer-motion";
import { Package, ArrowRight } from "lucide-react";

const products = [
  { 
    id: "EQ-01", 
    name: "SOVARO x SOS Performance X Jimedia Collab Singlet", 
    price: "$40.00", 
    desc: "The first Sovaro collab drop. A clean, all-black racerback singlet built for performance and designed to turn heads. Featuring co-branding from SOS Performance and Jimedia, with \"Performance in Motion\" printed along the back. Lightweight, breathable, and quick-dry fabric that moves with you whether you're training, competing, or travelling. Limited run, one colourway, no restocks.",
    image: "/store-1.jpg",
    status: "IN STOCK",
    sizes: ["Medium", "Extra Large", "Extra Extra Large"],
    url: "https://sovaromanagement.com/store/p/sovaro-x-sos-performance-x-jimedia"
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
            1 result.
          </p>
        </motion.div>

        {/* Single Product */}
        <div className="max-w-4xl">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15 }}
              className="group grid grid-cols-1 md:grid-cols-2 bg-card border border-border hover:border-primary transition-colors duration-300"
            >
              <div className="w-full aspect-square bg-background relative overflow-hidden p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-border">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain mix-blend-screen group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
                  <div className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                    {product.id}
                  </div>
                  <div className="font-mono text-[10px] tracking-widest uppercase px-2 py-1 border border-primary text-primary">
                    {product.status}
                  </div>
                </div>
              </div>
              
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <h2 className="text-lg font-bold uppercase tracking-wide group-hover:text-primary transition-colors">
                    {product.name}
                  </h2>
                  <span className="font-mono text-sm text-primary whitespace-nowrap">{product.price}</span>
                </div>
                
                <p className="text-muted-foreground text-sm font-light leading-relaxed mb-6">
                  {product.desc}
                </p>

                <div className="mb-8">
                  <div className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-3">Size</div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <span key={size} className="font-mono text-[10px] tracking-widest uppercase px-3 py-2 border border-border text-muted-foreground">
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a 
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-auto inline-flex items-center justify-center text-xs font-mono tracking-[0.2em] transition-colors focus-visible:outline-none h-12 uppercase border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground group/btn"
                >
                  Order Now <ArrowRight size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
