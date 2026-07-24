import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * Scrolls the window to the top on every route change.
 * Drop this inside <WouterRouter> in App.tsx — it renders nothing.
 */
export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);

  return null;
}
