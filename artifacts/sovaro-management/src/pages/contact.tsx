import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Send, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Signal Received. A logistics coordinator will be in touch.", {
        icon: <Terminal className="w-4 h-4 text-primary" />
      });
      (e.target as HTMLFormElement).reset();
    }, 1200);
  };

  return (
    <div className="pt-24 pb-20 w-full relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none fixed" />
      
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Header Side */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-primary text-xs tracking-widest uppercase mb-6 flex items-center gap-2">
            <Terminal size={14} /> Comms
          </div>
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9] mb-6">
            Initiate <br/>
            <span className="text-muted-foreground">Contact.</span>
          </h1>
          <p className="text-sm text-muted-foreground font-mono leading-relaxed max-w-md uppercase tracking-widest mb-10">
            Submit your requirements. Our logistics team will review and establish a secure line of communication.
          </p>
          
          <div className="font-mono text-xs text-muted-foreground space-y-4 border-l-2 border-border pl-4">
            <div>
              <span className="block text-foreground mb-1 uppercase tracking-widest">Direct Line</span>
              <a href="mailto:talent@sovaromanagement.com" className="hover:text-primary transition-colors">
                talent@sovaromanagement.com
              </a>
            </div>
            <div>
              <span className="block text-foreground mb-1 uppercase tracking-widest">HQ Status</span>
              <span className="text-primary flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                Operational / Accepting inquiries
              </span>
            </div>
          </div>
        </motion.div>

        {/* Form Side */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card border border-border p-8 md:p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="font-mono text-xs uppercase tracking-widest text-primary mb-8 border-b border-border pb-4">
            Secure Input Form
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="space-y-2">
              <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block">
                Operative Name
              </label>
              <Input 
                id="name" 
                required 
                placeholder="JOHN DOE" 
                className="rounded-none bg-background/50 border-border focus-visible:border-primary focus-visible:ring-0"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block">
                Comms Address (Email)
              </label>
              <Input 
                id="email" 
                type="email" 
                required 
                placeholder="CONTACT@EXAMPLE.COM" 
                className="rounded-none bg-background/50 border-border focus-visible:border-primary focus-visible:ring-0"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block">
                Mission Parameters / Inquiry
              </label>
              <Textarea 
                id="message" 
                required 
                placeholder="ENTER REQUIREMENTS..." 
                className="rounded-none bg-background/50 border-border focus-visible:border-primary focus-visible:ring-0 min-h-[150px]"
              />
            </div>
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full rounded-none tracking-[0.2em] gap-2 mt-4"
            >
              {isSubmitting ? (
                <>Transmitting <span className="animate-pulse">...</span></>
              ) : (
                <>Transmit Data <Send size={14} /></>
              )}
            </Button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}
