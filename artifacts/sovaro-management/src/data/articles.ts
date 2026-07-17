export interface Article {
  slug: string;
  date: string;
  author: string;
  title: string;
  blurb: string;
  body: string[];
  image: string;
}

export const articles: Article[] = [
  {
    slug: "ballarat-marathon-weekend",
    date: "11 May",
    author: "Lachlan Sosinski",
    title: "Ballarat Marathon Weekend with SOS Performance & Team NOX",
    blurb:
      "SOVARO worked alongside SOS Performance and Team Nox across the Ballarat Marathon weekend, supporting a group of endurance athletes through a structured travel and performance environment.",
    body: [
      "SOVARO worked alongside SOS Performance and Team Nox across the Ballarat Marathon weekend, supporting a group of endurance athletes through a structured travel and performance environment.",
      "A shakeout run was held on Saturday around Lake Wendouree, giving the group a chance to settle into the destination and loosen their legs ahead of race day. The atmosphere was relaxed and focused — exactly the kind of preparation environment Sovaro aims to create.",
      "Race day delivered. Matt Cameron crossed the line in 2:48:25 and Kyal Atkinson followed in 2:48:33 — personal bests for both athletes. The weekend was a strong demonstration of what's possible when logistics are handled well and athletes can focus entirely on performing.",
      "Sovaro continues to work with SOS Performance and Team Nox across their race calendar. If you're planning race travel and want structured, reliable support, get in touch.",
    ],
    image: "/journal-3.jpg",
  },
  {
    slug: "gold-coast-t100-shakeout-run",
    date: "20 Mar",
    author: "Lachlan Sosinski",
    title: "Sovaro Supports Community Shakeout Run Ahead of Gold Coast T100 Triathlon",
    blurb:
      "Sovaro was proud to support a community shakeout run, bringing together the endurance community ahead of the Gold Coast T100 Triathlon.",
    body: [
      "Sovaro was proud to support a community shakeout run ahead of the Gold Coast T100 Triathlon, bringing together athletes and the broader endurance community for a relaxed pre-race morning.",
      "Led by SOS Performance with Team Nox, the 6km loop started and finished at Tallebudgera Surf Club — a scenic, low-key route that gave athletes a chance to shake out their legs, take in the coastal environment, and connect with others preparing for the weekend's racing.",
      "The run wrapped up with coffee at Bean Surfing Café, which set the tone perfectly — relaxed, connected, and ready.",
      "Events like this reflect what Sovaro is about: creating the conditions for athletes to perform at their best, on and off the race course. We're grateful to have been involved and look forward to continuing to support the community through events like these.",
    ],
    image: "/journal-1.jpg",
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
