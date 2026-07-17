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
  // Flight Centre: destination region slug for domestic AU events.
  flightRegionSlug: string;
  flightRegionLabel: string;
  // Optional override for international or non-standard FC URLs.
  flightCentreUrlOverride?: string;
  // --- PLACEHOLDER PRICING (mock data for layout preview only) ---
  // Median nightly accommodation price in the region, AUD.
  mockMedianAccommodationPrice: number;
  // Cheapest one-way flight found from each Australian capital city, AUD.
  mockCheapestFlights: FlightOption[];
  // Best-value flight (balance of price, routing & convenience), AUD.
  mockBestFlights: FlightOption[];
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
    flightRegionSlug: "",
    flightRegionLabel: "Nice (NCE)",
    flightCentreUrlOverride:
      "https://www.flightcentre.com.au/flights/cheap-flights-to-nice-france",
    mockMedianAccommodationPrice: 390,
    mockCheapestFlights: [
      { city: "Perth",   code: "PER", price: 2080, via: "via SIN" },
      { city: "Darwin",  code: "DRW", price: 2190, via: "via KUL" },
      { city: "Adelaide",code: "ADL", price: 1960, via: "via SIN" },
      { city: "Brisbane",code: "BNE", price: 1880, via: "via SIN" },
      { city: "Canberra",code: "CBR", price: 1910, via: "via SIN" },
      { city: "Melbourne",code: "MEL", price: 1830, via: "via SIN" },
      { city: "Sydney",  code: "SYD", price: 1760, via: "via SIN" },
    ],
    mockBestFlights: [
      { city: "Perth",   code: "PER", price: 2390, via: "via DXB" },
      { city: "Darwin",  code: "DRW", price: 2520, via: "via SIN" },
      { city: "Adelaide",code: "ADL", price: 2260, via: "via DXB" },
      { city: "Brisbane",code: "BNE", price: 2210, via: "via DXB" },
      { city: "Canberra",code: "CBR", price: 2240, via: "via DXB" },
      { city: "Melbourne",code: "MEL", price: 2180, via: "via DXB" },
      { city: "Sydney",  code: "SYD", price: 2130, via: "via DXB" },
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
    flightRegionSlug: "au-qld-brisbane",
    flightRegionLabel: "Brisbane (BNE)",
    mockMedianAccommodationPrice: 210,
    mockCheapestFlights: [
      { city: "Darwin",  code: "DRW", price: 398, via: "via BNE" },
      { city: "Perth",   code: "PER", price: 369, via: "via SYD" },
      { city: "Hobart",  code: "HBA", price: 259, via: "via MEL" },
      { city: "Adelaide",code: "ADL", price: 245, via: "Direct" },
      { city: "Canberra",code: "CBR", price: 195, via: "via SYD" },
      { city: "Melbourne",code: "MEL", price: 215, via: "Direct" },
      { city: "Sydney",  code: "SYD", price: 189, via: "Direct" },
    ],
    mockBestFlights: [
      { city: "Darwin",  code: "DRW", price: 469, via: "Direct" },
      { city: "Perth",   code: "PER", price: 429, via: "Direct" },
      { city: "Hobart",  code: "HBA", price: 319, via: "via MEL" },
      { city: "Adelaide",code: "ADL", price: 299, via: "Direct" },
      { city: "Canberra",code: "CBR", price: 249, via: "Direct" },
      { city: "Melbourne",code: "MEL", price: 269, via: "Direct" },
      { city: "Sydney",  code: "SYD", price: 239, via: "Direct" },
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
    flightRegionSlug: "",
    flightRegionLabel: "Kona (KOA)",
    flightCentreUrlOverride:
      "https://www.flightcentre.com.au/flights/cheap-flights-to-hawaii",
    mockMedianAccommodationPrice: 430,
    mockCheapestFlights: [
      { city: "Perth",   code: "PER", price: 1590, via: "via SYD+HNL" },
      { city: "Darwin",  code: "DRW", price: 1420, via: "via BNE+HNL" },
      { city: "Adelaide",code: "ADL", price: 1260, via: "via SYD+HNL" },
      { city: "Canberra",code: "CBR", price: 1170, via: "via SYD+HNL" },
      { city: "Melbourne",code: "MEL", price: 1130, via: "via HNL" },
      { city: "Brisbane",code: "BNE", price: 1050, via: "via HNL" },
      { city: "Sydney",  code: "SYD", price: 1090, via: "via HNL" },
    ],
    mockBestFlights: [
      { city: "Perth",   code: "PER", price: 1890, via: "via HNL" },
      { city: "Darwin",  code: "DRW", price: 1760, via: "via SYD+HNL" },
      { city: "Adelaide",code: "ADL", price: 1580, via: "via MEL+HNL" },
      { city: "Canberra",code: "CBR", price: 1460, via: "via SYD+HNL" },
      { city: "Melbourne",code: "MEL", price: 1420, via: "via HNL" },
      { city: "Brisbane",code: "BNE", price: 1280, via: "via HNL" },
      { city: "Sydney",  code: "SYD", price: 1380, via: "via HNL" },
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
    flightRegionSlug: "au-nsw-port-macquarie",
    flightRegionLabel: "Port Macquarie (PQQ)",
    mockMedianAccommodationPrice: 165,
    mockCheapestFlights: [
      { city: "Perth",   code: "PER", price: 369, via: "via SYD" },
      { city: "Darwin",  code: "DRW", price: 419, via: "via SYD" },
      { city: "Adelaide",code: "ADL", price: 229, via: "via SYD" },
      { city: "Hobart",  code: "HBA", price: 219, via: "via MEL" },
      { city: "Melbourne",code: "MEL", price: 179, via: "Direct" },
      { city: "Brisbane",code: "BNE", price: 149, via: "Direct" },
      { city: "Canberra",code: "CBR", price: 129, via: "Direct" },
      { city: "Sydney",  code: "SYD", price: 109, via: "Direct" },
    ],
    mockBestFlights: [
      { city: "Perth",   code: "PER", price: 459, via: "via SYD" },
      { city: "Darwin",  code: "DRW", price: 499, via: "via SYD" },
      { city: "Adelaide",code: "ADL", price: 299, via: "via SYD" },
      { city: "Hobart",  code: "HBA", price: 289, via: "via MEL" },
      { city: "Melbourne",code: "MEL", price: 249, via: "Direct" },
      { city: "Brisbane",code: "BNE", price: 199, via: "Direct" },
      { city: "Canberra",code: "CBR", price: 179, via: "Direct" },
      { city: "Sydney",  code: "SYD", price: 169, via: "Direct" },
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
    flightRegionSlug: "au-wa-perth",
    flightRegionLabel: "Perth (PER)",
    mockMedianAccommodationPrice: 195,
    mockCheapestFlights: [
      { city: "Darwin",  code: "DRW", price: 339, via: "via SYD" },
      { city: "Hobart",  code: "HBA", price: 299, via: "via MEL" },
      { city: "Brisbane",code: "BNE", price: 269, via: "Direct" },
      { city: "Canberra",code: "CBR", price: 259, via: "Direct" },
      { city: "Sydney",  code: "SYD", price: 249, via: "Direct" },
      { city: "Melbourne",code: "MEL", price: 219, via: "Direct" },
      { city: "Adelaide",code: "ADL", price: 169, via: "Direct" },
    ],
    mockBestFlights: [
      { city: "Darwin",  code: "DRW", price: 429, via: "via MEL" },
      { city: "Hobart",  code: "HBA", price: 369, via: "via MEL" },
      { city: "Brisbane",code: "BNE", price: 339, via: "Direct" },
      { city: "Canberra",code: "CBR", price: 329, via: "Direct" },
      { city: "Sydney",  code: "SYD", price: 319, via: "Direct" },
      { city: "Melbourne",code: "MEL", price: 279, via: "Direct" },
      { city: "Adelaide",code: "ADL", price: 239, via: "Direct" },
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

// Builds a Flight Centre AU "flights to <region>" deep link.
// For international events, use flightCentreUrlOverride on the event instead.
export function flightCentreUrl(event: TravelEvent): string {
  if (event.flightCentreUrlOverride) return event.flightCentreUrlOverride;
  return `https://www.flightcentre.com.au/flights/${event.flightRegionSlug}`;
}
