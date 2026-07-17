import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message received. We'll be in touch shortly.");
      (e.target as HTMLFormElement).reset();
    }, 1200);
  };

  return (
    <div className="pt-24 pb-20 w-full relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none fixed" />
      
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left side */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9] mb-6">
            Get in <br/>
            <span className="text-muted-foreground">Touch.</span>
          </h1>
          <p className="text-sm text-muted-foreground font-mono leading-relaxed max-w-md mb-10">
            Whether you're planning race travel, a training camp or need end-to-end logistics support, we'd love to hear from you. Fill in the form and we'll be in touch.
          </p>
          
          <div className="font-mono text-xs text-muted-foreground space-y-4 border-l-2 border-border pl-4">
            <div>
              <span className="block text-foreground mb-1 uppercase tracking-widest">Email</span>
              <a href="mailto:talent@sovaromanagement.com" className="hover:text-primary transition-colors">
                talent@sovaromanagement.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* Form side */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card border border-border p-8 md:p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="font-mono text-xs uppercase tracking-widest text-primary mb-8 border-b border-border pb-4">
            Get In Touch
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="space-y-2">
              <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block">
                Full Name
              </label>
              <Input 
                id="name" 
                required 
                placeholder="Your name" 
                className="rounded-none bg-background/50 border-border focus-visible:border-primary focus-visible:ring-0"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block">
                Email Address
              </label>
              <Input 
                id="email" 
                type="email" 
                required 
                placeholder="your@email.com" 
                className="rounded-none bg-background/50 border-border focus-visible:border-primary focus-visible:ring-0"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block">
                Message
              </label>
              <Textarea 
                id="message" 
                required 
                placeholder="Tell us about your travel or logistics needs..." 
                className="rounded-none bg-background/50 border-border focus-visible:border-primary focus-visible:ring-0 min-h-[150px]"
              />
            </div>
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full rounded-none tracking-[0.2em] gap-2 mt-4"
            >
              {isSubmitting ? (
                <>Sending <span className="animate-pulse">...</span></>
              ) : (
                <>Send Message <Send size={14} /></>
              )}
            </Button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}
