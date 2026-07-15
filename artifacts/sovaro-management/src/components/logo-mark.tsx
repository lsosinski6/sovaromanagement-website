// Small stacked brand mark, used in place of decorative status/eyebrow icons.
export default function LogoMark({ className = "h-4 w-auto" }: { className?: string }) {
  return <img src="/brand/logo-mark.png" alt="" className={className} />;
}
