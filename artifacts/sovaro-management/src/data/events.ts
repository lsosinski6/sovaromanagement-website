// Athlete travel hub — one entry per event.
// To add a new event, copy an existing object and update the fields.
// Prices: user-supplied July 2026. One-way economy excluding baggage/bikes.

export interface FlightOption {
  city: string;
  code: string;
  price: number;
  via?: string;
}

export interface TravelEvent {
  slug: string;
  name: string;
  dateLabel: string;
  location: string;
  image: string;
  summary: string;
  bookingCity: string;
  flightRegionLabel: string;
  destinationIata: string;
  googleFlightsDestination: string;
  medianAccommodationPrice: number;
  // domesticOnly: true → hide "Best" tab; only cheapestFlights is shown.
  domesticOnly?: boolean;
  cheapestFlights: FlightOption[];
  bestFlights: FlightOption[];
}

export const events: TravelEvent[] = [
  // ─── 1. IRONMAN 70.3 World Championship — Nice, France ───────────────────
  {
    slug: "ironman-70-3-world-championship-nice-2026",
    name: "IRONMAN 70.3 World Championship",
    dateLabel: "11–12 September 2026",
    location: "Nice, France",
    image: "/races/70-3-world-champs.png",
    summary:
      "The pinnacle of half-distance triathlon. Nice's legendary Promenade des Anglais hosts a 1.9km Mediterranean swim, 90km ride into the hills and a 21.1km run back along the coast — where the world's best age-groupers and pros decide the global title.",
    bookingCity: "Nice, France",
    flightRegionLabel: "Nice (NCE)",
    destinationIata: "NCE",
    googleFlightsDestination: "Nice France",
    medianAccommodationPrice: 220,
    domesticOnly: false,
    cheapestFlights: [
      { city: "Melbourne", code: "MEL", price: 1500 },
      { city: "Sydney",    code: "SYD", price: 1550 },
      { city: "Perth",     code: "PER", price: 1600 },
      { city: "Adelaide",  code: "ADL", price: 1900 },
      { city: "Brisbane",  code: "BNE", price: 1900 },
    ],
    bestFlights: [
      { city: "Sydney",    code: "SYD", price: 1700 },
      { city: "Melbourne", code: "MEL", price: 1700 },
      { city: "Perth",     code: "PER", price: 1800 },
      { city: "Adelaide",  code: "ADL", price: 1900 },
      { city: "Brisbane",  code: "BNE", price: 1900 },
    ],
  },

  // ─── 2. IRONMAN 70.3 Sunshine Coast ──────────────────────────────────────
  {
    slug: "ironman-70-3-sunshine-coast-2026",
    name: "IRONMAN 70.3 Sunshine Coast",
    dateLabel: "13 September 2026",
    location: "Mooloolaba, QLD",
    image: "/races/ironman-sunshine-coast.png",
    summary:
      "One of Oceania's most popular half-distance events. A Pacific-side swim off Mooloolaba Beach, a coastal bike leg and a spectator-lined run finishing right on the Esplanade. Sort your stay and flights below, then let us handle the rest.",
    bookingCity: "Mooloolaba, Queensland, Australia",
    flightRegionLabel: "Sunshine Coast (MCY)",
    destinationIata: "MCY",
    googleFlightsDestination: "Sunshine Coast Australia",
    medianAccommodationPrice: 400,
    domesticOnly: true,
    cheapestFlights: [
      { city: "Sydney",    code: "SYD", price: 150 },
      { city: "Melbourne", code: "MEL", price: 200 },
      { city: "Adelaide",  code: "ADL", price: 300 },
      { city: "Perth",     code: "PER", price: 500 },
    ],
    bestFlights: [],
  },

  // ─── 3. IRONMAN World Championship — Kona, Hawai'i ───────────────────────
  {
    slug: "ironman-world-championship-kona-2026",
    name: "IRONMAN World Championship",
    dateLabel: "10 October 2026",
    location: "Kailua-Kona, Hawai'i, USA",
    image: "/races/ironman-world-champs.png",
    summary:
      "The holy grail of triathlon. A 3.8km ocean swim in Kailua Bay, 180.2km across the lava fields of the Big Island and a 42.2km run under the Hawaiian sun — this is where the IRONMAN Pro Series title is decided.",
    bookingCity: "Kailua-Kona, Hawaii, USA",
    flightRegionLabel: "Kona (KOA)",
    destinationIata: "KOA",
    googleFlightsDestination: "Kona Hawaii",
    medianAccommodationPrice: 300,
    domesticOnly: false,
    cheapestFlights: [
      { city: "Sydney",    code: "SYD", price: 1250 },
      { city: "Brisbane",  code: "BNE", price: 1400 },
      { city: "Melbourne", code: "MEL", price: 1400 },
      { city: "Adelaide",  code: "ADL", price: 2000 },
      { city: "Perth",     code: "PER", price: 3800 },
    ],
    bestFlights: [
      { city: "Sydney",    code: "SYD", price: 1350 },
      { city: "Brisbane",  code: "BNE", price: 1400 },
      { city: "Melbourne", code: "MEL", price: 1400 },
      { city: "Adelaide",  code: "ADL", price: 3800 },
      { city: "Perth",     code: "PER", price: 3800 },
    ],
  },

  // ─── 4. IRONMAN Australia — Port Macquarie ────────────────────────────────
  // Note: fly into Sydney (SYD), then drive or connect to Port Macquarie.
  {
    slug: "ironman-australia-2026",
    name: "IRONMAN Australia",
    dateLabel: "18 October 2026",
    location: "Port Macquarie, NSW",
    image: "/races/ironman-australia.png",
    summary:
      "One of the oldest and most prestigious Ironman events in the region. A harbour swim, a challenging bike course through the hinterland and a run flanked by one of the loudest, most passionate crowds on the Australian circuit.",
    bookingCity: "Port Macquarie, New South Wales, Australia",
    flightRegionLabel: "Sydney (SYD)",
    destinationIata: "SYD",
    googleFlightsDestination: "Sydney Australia",
    medianAccommodationPrice: 200,
    domesticOnly: true,
    cheapestFlights: [
      { city: "Melbourne", code: "MEL", price: 150 },
      { city: "Brisbane",  code: "BNE", price: 200 },
      { city: "Adelaide",  code: "ADL", price: 300 },
      { city: "Perth",     code: "PER", price: 500 },
    ],
    bestFlights: [],
  },

  // ─── 5. IRONMAN Western Australia & Asia-Pacific Championship ─────────────
  {
    slug: "ironman-western-australia-2026",
    name: "IRONMAN Western Australia",
    dateLabel: "6 December 2026",
    location: "Busselton, WA",
    image: "/races/ironman-western-australia.png",
    summary:
      "The Asia-Pacific Championship comes home. Busselton's famously flat, fast course makes it a perennial personal-best venue — fly into Perth, then it's a scenic 2.5-hour drive south to the start line.",
    bookingCity: "Busselton, Western Australia, Australia",
    flightRegionLabel: "Perth (PER)",
    destinationIata: "PER",
    googleFlightsDestination: "Perth Australia",
    medianAccommodationPrice: 250,
    domesticOnly: true,
    cheapestFlights: [
      { city: "Adelaide",  code: "ADL", price: 370 },
      { city: "Melbourne", code: "MEL", price: 450 },
      { city: "Sydney",    code: "SYD", price: 500 },
      { city: "Brisbane",  code: "BNE", price: 500 },
    ],
    bestFlights: [],
  },
];

export function getEvent(slug: string): TravelEvent | undefined {
  return events.find((e) => e.slug === slug);
}

export function bookingComUrl(city: string): string {
  const params = new URLSearchParams({
    ss: city,
    group_adults: "1",
    no_rooms: "1",
  });
  return `https://www.booking.com/searchresults.html?${params.toString()}`;
}

const CITY_NAME: Record<string, string> = {
  SYD: "Sydney",
  MEL: "Melbourne",
  BNE: "Brisbane",
  ADL: "Adelaide",
  PER: "Perth",
  CBR: "Canberra",
  HBA: "Hobart",
  DRW: "Darwin",
};

export function googleFlightsUrl(event: TravelEvent, departureCode?: string): string {
  const dest = event.googleFlightsDestination;
  if (departureCode) {
    const city = CITY_NAME[departureCode] ?? departureCode;
    return `https://www.google.com/flights?q=flights+from+${encodeURIComponent(city)}+to+${encodeURIComponent(dest)}`;
  }
  return `https://www.google.com/flights?q=flights+to+${encodeURIComponent(dest)}`;
}
