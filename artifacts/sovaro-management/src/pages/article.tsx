import { motion } from "framer-motion";
import { useParams, Link } from "wouter";
import { getArticle } from "@/data/articles";

export default function Article() {
  const params = useParams<{ slug: string }>();
  const article = getArticle(params.slug);

  if (!article) {
    return (
      <div className="pt-40 pb-20 w-full min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold uppercase tracking-tight mb-4">Article not found</h1>
        <Link href="/latest" className="font-mono text-primary text-xs uppercase tracking-widest hover:text-primary/80">
          Back to Latest
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 w-full relative min-h-screen">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none fixed" />

      <div className="container mx-auto px-6 relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <Link href="/latest" className="font-mono text-primary text-xs uppercase tracking-widest hover:text-primary/80 mb-8 inline-block">
            &larr; Latest
          </Link>

          <div className="font-mono text-xs text-muted-foreground mb-6 uppercase tracking-widest">
            {article.date} — {article.author}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-[0.95] mb-10">
            {article.title}
          </h1>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full aspect-[16/9] bg-card border border-border relative overflow-hidden mb-12"
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover opacity-80"
          />
        </motion.div>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6"
        >
          {article.body.map((paragraph, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed font-light text-base">
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* Footer rule */}
        <div className="mt-16 pt-8 border-t border-border flex items-center justify-between text-xs font-mono text-muted-foreground uppercase tracking-widest">
          <Link href="/latest" className="hover:text-primary transition-colors">
            &larr; Back to Latest
          </Link>
        </div>
      </div>
    </div>
  );
}
