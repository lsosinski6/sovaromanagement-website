// Athlete travel hub — one entry per event.
// To add a new event, copy an existing object and update the fields.
// Pricing sourced from KAYAK, Skyscanner, Expedia, Virgin Australia — July 2026.
// One-way economy fares; accommodation = median nightly rate for race weekend.

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
  // Lowest one-way economy fare from each Australian capital city, AUD.
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
    // Mid-range hotel, race-week premium. Budget options from ~€43/night; quality
    // race-area hotels typically €120–170 (≈ AUD $200–290). Median ~AUD $220.
    medianAccommodationPrice: 220,
    cheapestFlights: [
      // KAYAK lowest one-way from SYD: $795. BNE→NCE: $883.
      // CBR routes via SYD so marginally cheaper than SYD.
      // PER benefits from shorter routing via DXB (Middle East hubs).
      { city: "Canberra",  code: "CBR", price: 780,  via: "via SYD+SIN" },
      { city: "Sydney",    code: "SYD", price: 795,  via: "via SIN" },
      { city: "Melbourne", code: "MEL", price: 820,  via: "via SIN" },
      { city: "Adelaide",  code: "ADL", price: 850,  via: "via SIN" },
      { city: "Perth",     code: "PER", price: 860,  via: "via DXB" },
      { city: "Brisbane",  code: "BNE", price: 883,  via: "via SIN" },
      { city: "Darwin",    code: "DRW", price: 1050, via: "via KUL" },
    ],
    bestFlights: [
      // Best-value = better airline/routing (Emirates/Qantas via DXB); fewer stops.
      // PER actually has an advantage here — closer to Europe via Middle East.
      { city: "Perth",     code: "PER", price: 1050, via: "via DXB" },
      { city: "Sydney",    code: "SYD", price: 1100, via: "via DXB" },
      { city: "Canberra",  code: "CBR", price: 1110, via: "via SYD+DXB" },
      { city: "Melbourne", code: "MEL", price: 1150, via: "via DXB" },
      { city: "Adelaide",  code: "ADL", price: 1160, via: "via DXB" },
      { city: "Brisbane",  code: "BNE", price: 1200, via: "via DXB" },
      { city: "Darwin",    code: "DRW", price: 1380, via: "via SIN" },
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
    // Beachfront/esplanade hotels during race week. Mantra Mooloolaba ~$170–200;
    // median across all available properties ~AUD $200.
    medianAccommodationPrice: 200,
    cheapestFlights: [
      // Virgin Australia SYD→MCY from $91; Skyscanner from $117. BNE is closest.
      // All majors fly direct to MCY. ADL/PER/DRW typically direct or 1-stop via BNE.
      { city: "Brisbane",  code: "BNE", price: 95,  via: "Direct" },
      { city: "Sydney",    code: "SYD", price: 110, via: "Direct" },
      { city: "Canberra",  code: "CBR", price: 140, via: "via SYD" },
      { city: "Melbourne", code: "MEL", price: 150, via: "Direct" },
      { city: "Adelaide",  code: "ADL", price: 199, via: "Direct" },
      { city: "Hobart",    code: "HBA", price: 230, via: "via MEL" },
      { city: "Perth",     code: "PER", price: 299, via: "Direct" },
      { city: "Darwin",    code: "DRW", price: 359, via: "via BNE" },
    ],
    bestFlights: [
      // Preferred departure times / Qantas vs Virgin; still direct on most routes.
      { city: "Brisbane",  code: "BNE", price: 130, via: "Direct" },
      { city: "Sydney",    code: "SYD", price: 155, via: "Direct" },
      { city: "Canberra",  code: "CBR", price: 185, via: "Direct" },
      { city: "Melbourne", code: "MEL", price: 199, via: "Direct" },
      { city: "Adelaide",  code: "ADL", price: 249, via: "Direct" },
      { city: "Hobart",    code: "HBA", price: 289, via: "via MEL" },
      { city: "Perth",     code: "PER", price: 369, via: "Direct" },
      { city: "Darwin",    code: "DRW", price: 429, via: "via BNE" },
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
    // Kona race week is peak demand. Hotels.com lists from USD $181/night;
    // desirable properties closer to USD $250–350 (≈ AUD $280–390). Median ~AUD $300.
    medianAccommodationPrice: 300,
    cheapestFlights: [
      // KAYAK cheapest SYD→KOA: $1,128. Routing is SYD/MEL/BNE→HNL→KOA.
      // BNE has Hawaiian Airlines direct to HNL which keeps prices lower.
      // PER routing is significantly longer (via SYD or MEL then HNL).
      { city: "Brisbane",  code: "BNE", price: 1080, via: "via HNL" },
      { city: "Sydney",    code: "SYD", price: 1128, via: "via HNL" },
      { city: "Melbourne", code: "MEL", price: 1150, via: "via HNL" },
      { city: "Canberra",  code: "CBR", price: 1185, via: "via SYD+HNL" },
      { city: "Adelaide",  code: "ADL", price: 1250, via: "via SYD+HNL" },
      { city: "Darwin",    code: "DRW", price: 1350, via: "via BNE+HNL" },
      { city: "Perth",     code: "PER", price: 1450, via: "via SYD+HNL" },
    ],
    bestFlights: [
      // Hawaiian Airlines or Qantas codeshares; better connections through HNL.
      { city: "Brisbane",  code: "BNE", price: 1280, via: "via HNL" },
      { city: "Sydney",    code: "SYD", price: 1350, via: "via HNL" },
      { city: "Melbourne", code: "MEL", price: 1390, via: "via HNL" },
      { city: "Canberra",  code: "CBR", price: 1420, via: "via SYD+HNL" },
      { city: "Adelaide",  code: "ADL", price: 1490, via: "via MEL+HNL" },
      { city: "Darwin",    code: "DRW", price: 1650, via: "via SYD+HNL" },
      { city: "Perth",     code: "PER", price: 1750, via: "via HNL" },
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
    // Rydges Port Macquarie ~$185/night (KAYAK). Median across all properties ~$165.
    medianAccommodationPrice: 165,
    cheapestFlights: [
      // Expedia SYD→PQQ from $124; Rex/QantasLink operate direct PQQ routes.
      // PER→PQQ: Expedia $506 (via SYD). DRW also long-haul via SYD.
      { city: "Sydney",    code: "SYD", price: 130, via: "Direct" },
      { city: "Canberra",  code: "CBR", price: 155, via: "via SYD" },
      { city: "Brisbane",  code: "BNE", price: 170, via: "Direct" },
      { city: "Melbourne", code: "MEL", price: 200, via: "via SYD" },
      { city: "Hobart",    code: "HBA", price: 240, via: "via MEL" },
      { city: "Adelaide",  code: "ADL", price: 270, via: "via SYD" },
      { city: "Darwin",    code: "DRW", price: 470, via: "via SYD" },
      { city: "Perth",     code: "PER", price: 510, via: "via SYD" },
    ],
    bestFlights: [
      // Better departure times / Qantas vs Rex; direct where available.
      { city: "Sydney",    code: "SYD", price: 180, via: "Direct" },
      { city: "Canberra",  code: "CBR", price: 205, via: "Direct" },
      { city: "Brisbane",  code: "BNE", price: 215, via: "Direct" },
      { city: "Melbourne", code: "MEL", price: 250, via: "via SYD" },
      { city: "Hobart",    code: "HBA", price: 295, via: "via MEL" },
      { city: "Adelaide",  code: "ADL", price: 330, via: "via SYD" },
      { city: "Darwin",    code: "DRW", price: 540, via: "via SYD" },
      { city: "Perth",     code: "PER", price: 590, via: "via SYD" },
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
    // HotelsCombined lists Busselton from $118/night; race-week premium and
    // limited stock pushes median closer to $150 AUD.
    medianAccommodationPrice: 150,
    cheapestFlights: [
      // MEL→PER: KAYAK $235. DRW→PER: Expedia from $232. HBA→PER: KAYAK $316.
      // ADL→PER is the shortest sector — consistently the cheapest route.
      { city: "Adelaide",  code: "ADL", price: 165, via: "Direct" },
      { city: "Melbourne", code: "MEL", price: 235, via: "Direct" },
      { city: "Darwin",    code: "DRW", price: 235, via: "via MEL" },
      { city: "Sydney",    code: "SYD", price: 250, via: "Direct" },
      { city: "Canberra",  code: "CBR", price: 260, via: "Direct" },
      { city: "Brisbane",  code: "BNE", price: 270, via: "Direct" },
      { city: "Hobart",    code: "HBA", price: 320, via: "via MEL" },
    ],
    bestFlights: [
      // Qantas mainline vs Jetstar; preferred departure windows.
      { city: "Adelaide",  code: "ADL", price: 220, via: "Direct" },
      { city: "Melbourne", code: "MEL", price: 295, via: "Direct" },
      { city: "Darwin",    code: "DRW", price: 299, via: "via MEL" },
      { city: "Sydney",    code: "SYD", price: 320, via: "Direct" },
      { city: "Canberra",  code: "CBR", price: 325, via: "Direct" },
      { city: "Brisbane",  code: "BNE", price: 340, via: "Direct" },
      { city: "Hobart",    code: "HBA", price: 390, via: "via MEL" },
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
