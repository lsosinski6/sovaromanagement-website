// Athlete travel hub — one entry per event.
// To add a new event, copy an existing object and update the fields.

export interface FlightOption {
  city: string;
  code: string;
  price: number;
  via?: string; // routing note, e.g. "via SIN", "Direct"
}

export interface TravelEvent {
  slug: string;
  name: string;
  dateLabel: string;
  location: string;
  image: string;
  summary: string;
  // Booking.com: the place name to search accommodation in.
  bookingCity: string;
  // Label shown in the flights panel header, e.g. "Brisbane (BNE)"
  flightRegionLabel: string;
  // IATA code for the arrival airport — used to build Google Flights URLs.
  destinationIata: string;
  // Human-readable destination name for Google Flights ?q= query, e.g. "Nice France"
  googleFlightsDestination: string;
  // Median nightly accommodation price in the region, AUD.
  medianAccommodationPrice: number;
  // Lowest one-way fare from each Australian capital city, AUD.
  cheapestFlights: FlightOption[];
  // Best-value fare — balanced for price, routing and convenience.
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
    medianAccommodationPrice: 180,
    cheapestFlights: [
      { city: "Perth",    code: "PER", price: 810,  via: "via DXB" },
      { city: "Darwin",   code: "DRW", price: 1090, via: "via KUL" },
      { city: "Adelaide", code: "ADL", price: 880,  via: "via SIN" },
      { city: "Brisbane", code: "BNE", price: 920,  via: "via SIN" },
      { city: "Canberra", code: "CBR", price: 870,  via: "via SYD+SIN" },
      { city: "Melbourne",code: "MEL", price: 890,  via: "via SIN" },
      { city: "Sydney",   code: "SYD", price: 850,  via: "via SIN" },
    ],
    bestFlights: [
      { city: "Perth",    code: "PER", price: 1050, via: "via DXB" },
      { city: "Darwin",   code: "DRW", price: 1380, via: "via SIN" },
      { city: "Adelaide", code: "ADL", price: 1160, via: "via DXB" },
      { city: "Brisbane", code: "BNE", price: 1220, via: "via DXB" },
      { city: "Canberra", code: "CBR", price: 1170, via: "via SYD+DXB" },
      { city: "Melbourne",code: "MEL", price: 1190, via: "via DXB" },
      { city: "Sydney",   code: "SYD", price: 1150, via: "via DXB" },
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
    medianAccommodationPrice: 140,
    cheapestFlights: [
      { city: "Darwin",   code: "DRW", price: 379, via: "via BNE" },
      { city: "Perth",    code: "PER", price: 309, via: "Direct" },
      { city: "Hobart",   code: "HBA", price: 239, via: "via MEL" },
      { city: "Adelaide", code: "ADL", price: 199, via: "Direct" },
      { city: "Canberra", code: "CBR", price: 139, via: "via SYD" },
      { city: "Melbourne",code: "MEL", price: 149, via: "Direct" },
      { city: "Sydney",   code: "SYD", price: 99,  via: "Direct" },
    ],
    bestFlights: [
      { city: "Darwin",   code: "DRW", price: 439, via: "via BNE" },
      { city: "Perth",    code: "PER", price: 369, via: "Direct" },
      { city: "Hobart",   code: "HBA", price: 289, via: "via MEL" },
      { city: "Adelaide", code: "ADL", price: 249, via: "Direct" },
      { city: "Canberra", code: "CBR", price: 179, via: "Direct" },
      { city: "Melbourne",code: "MEL", price: 199, via: "Direct" },
      { city: "Sydney",   code: "SYD", price: 139, via: "Direct" },
    ],
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
    medianAccommodationPrice: 280,
    cheapestFlights: [
      { city: "Perth",    code: "PER", price: 1050, via: "via SYD+HNL" },
      { city: "Darwin",   code: "DRW", price: 980,  via: "via BNE+HNL" },
      { city: "Adelaide", code: "ADL", price: 800,  via: "via SYD+HNL" },
      { city: "Canberra", code: "CBR", price: 740,  via: "via SYD+HNL" },
      { city: "Melbourne",code: "MEL", price: 760,  via: "via HNL" },
      { city: "Brisbane", code: "BNE", price: 690,  via: "via HNL" },
      { city: "Sydney",   code: "SYD", price: 720,  via: "via HNL" },
    ],
    bestFlights: [
      { city: "Perth",    code: "PER", price: 1290, via: "via HNL" },
      { city: "Darwin",   code: "DRW", price: 1180, via: "via SYD+HNL" },
      { city: "Adelaide", code: "ADL", price: 1020, via: "via MEL+HNL" },
      { city: "Canberra", code: "CBR", price: 960,  via: "via SYD+HNL" },
      { city: "Melbourne",code: "MEL", price: 990,  via: "via HNL" },
      { city: "Brisbane", code: "BNE", price: 880,  via: "via HNL" },
      { city: "Sydney",   code: "SYD", price: 950,  via: "via HNL" },
    ],
  },

  // ─── 4. IRONMAN Australia — Port Macquarie ────────────────────────────────
  {
    slug: "ironman-australia-2026",
    name: "IRONMAN Australia",
    dateLabel: "18 October 2026",
    location: "Port Macquarie, NSW",
    image: "/races/ironman-australia.png",
    summary:
      "One of the oldest and most prestigious Ironman events in the region. A harbour swim, a challenging bike course through the hinterland and a run flanked by one of the loudest, most passionate crowds on the Australian circuit.",
    bookingCity: "Port Macquarie, New South Wales, Australia",
    flightRegionLabel: "Port Macquarie (PQQ)",
    destinationIata: "PQQ",
    googleFlightsDestination: "Port Macquarie",
    medianAccommodationPrice: 130,
    cheapestFlights: [
      { city: "Perth",    code: "PER", price: 389, via: "via SYD" },
      { city: "Darwin",   code: "DRW", price: 439, via: "via SYD" },
      { city: "Adelaide", code: "ADL", price: 259, via: "via SYD" },
      { city: "Hobart",   code: "HBA", price: 229, via: "via MEL" },
      { city: "Melbourne",code: "MEL", price: 189, via: "Direct" },
      { city: "Brisbane", code: "BNE", price: 159, via: "Direct" },
      { city: "Canberra", code: "CBR", price: 149, via: "via SYD" },
      { city: "Sydney",   code: "SYD", price: 109, via: "Direct" },
    ],
    bestFlights: [
      { city: "Perth",    code: "PER", price: 469, via: "via SYD" },
      { city: "Darwin",   code: "DRW", price: 509, via: "via SYD" },
      { city: "Adelaide", code: "ADL", price: 319, via: "via SYD" },
      { city: "Hobart",   code: "HBA", price: 289, via: "via MEL" },
      { city: "Melbourne",code: "MEL", price: 249, via: "Direct" },
      { city: "Brisbane", code: "BNE", price: 209, via: "Direct" },
      { city: "Canberra", code: "CBR", price: 199, via: "Direct" },
      { city: "Sydney",   code: "SYD", price: 169, via: "Direct" },
    ],
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
    medianAccommodationPrice: 120,
    cheapestFlights: [
      { city: "Darwin",   code: "DRW", price: 319, via: "via MEL" },
      { city: "Hobart",   code: "HBA", price: 279, via: "via MEL" },
      { city: "Brisbane", code: "BNE", price: 229, via: "Direct" },
      { city: "Canberra", code: "CBR", price: 219, via: "Direct" },
      { city: "Sydney",   code: "SYD", price: 189, via: "Direct" },
      { city: "Melbourne",code: "MEL", price: 169, via: "Direct" },
      { city: "Adelaide", code: "ADL", price: 159, via: "Direct" },
    ],
    bestFlights: [
      { city: "Darwin",   code: "DRW", price: 399, via: "via MEL" },
      { city: "Hobart",   code: "HBA", price: 349, via: "via MEL" },
      { city: "Brisbane", code: "BNE", price: 299, via: "Direct" },
      { city: "Canberra", code: "CBR", price: 289, via: "Direct" },
      { city: "Sydney",   code: "SYD", price: 259, via: "Direct" },
      { city: "Melbourne",code: "MEL", price: 229, via: "Direct" },
      { city: "Adelaide", code: "ADL", price: 219, via: "Direct" },
    ],
  },
];

export function getEvent(slug: string): TravelEvent | undefined {
  return events.find((e) => e.slug === slug);
}

// Builds a Booking.com search-results URL for the given city.
export function bookingComUrl(city: string): string {
  const params = new URLSearchParams({
    ss: city,
    group_adults: "1",
    no_rooms: "1",
  });
  return `https://www.booking.com/searchresults.html?${params.toString()}`;
}

// IATA code → city name used in Google Flights ?q= queries.
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

// Builds a Google Flights search URL.
// With a departureCode: pre-fills both origin and destination.
// Without: pre-fills destination only.
export function googleFlightsUrl(event: TravelEvent, departureCode?: string): string {
  const dest = event.googleFlightsDestination;
  if (departureCode) {
    const city = CITY_NAME[departureCode] ?? departureCode;
    return `https://www.google.com/flights?q=flights+from+${encodeURIComponent(city)}+to+${encodeURIComponent(dest)}`;
  }
  return `https://www.google.com/flights?q=flights+to+${encodeURIComponent(dest)}`;
}
