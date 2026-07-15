// Athlete travel hub — one entry per event.
// To add a new event, copy an existing object and update the fields.
// bookingCity/flightRegionSlug feed the deep-link builders below.

export interface TravelEvent {
  slug: string;
  name: string;
  dateLabel: string;
  location: string;
  image: string;
  summary: string;
  // Booking.com: the place name to search accommodation in.
  bookingCity: string;
  // Flight Centre: the destination region slug from flightcentre.com.au/flights/au/<slug>
  flightRegionSlug: string;
  flightRegionLabel: string;
  // --- PLACEHOLDER PRICING (mock data for layout preview only) ---
  // Median nightly accommodation price in the region, AUD.
  mockMedianAccommodationPrice: number;
  // Cheapest one-way flight found from each Australian capital city, AUD.
  mockCheapestFlights: { city: string; code: string; price: number }[];
}

export const events: TravelEvent[] = [
  {
    slug: "ironman-70-3-sunshine-coast-2026",
    name: "IRONMAN 70.3 Sunshine Coast",
    dateLabel: "11–13 September 2026",
    location: "Mooloolaba, QLD",
    image: "/journal-2.jpg",
    summary:
      "Race week on the Sunshine Coast: a Pacific-side swim, a coastal bike leg and a beachside run finishing in Mooloolaba. Sort your stay and your flights below, then let us handle the rest.",
    bookingCity: "Mooloolaba, Queensland, Australia",
    flightRegionSlug: "au-qld-brisbane",
    flightRegionLabel: "Brisbane (BNE)",
    mockMedianAccommodationPrice: 210,
    mockCheapestFlights: [
      { city: "Sydney", code: "SYD", price: 189 },
      { city: "Melbourne", code: "MEL", price: 215 },
      { city: "Canberra", code: "CBR", price: 195 },
      { city: "Adelaide", code: "ADL", price: 245 },
      { city: "Hobart", code: "HBA", price: 265 },
      { city: "Perth", code: "PER", price: 389 },
      { city: "Darwin", code: "DRW", price: 410 },
    ],
  },
];

export function getEvent(slug: string): TravelEvent | undefined {
  return events.find((e) => e.slug === slug);
}

// Builds a Booking.com search-results URL for the given city.
// No API key required — this is a plain search deep link.
export function bookingComUrl(city: string): string {
  const params = new URLSearchParams({
    ss: city,
    group_adults: "1",
    no_rooms: "1",
  });
  return `https://www.booking.com/searchresults.html?${params.toString()}`;
}

// Builds a Flight Centre AU "flights to <region>" deep link.
// Format: flightcentre.com.au/flights/au/<destination-region-slug>
export function flightCentreUrl(regionSlug: string): string {
  return `https://www.flightcentre.com.au/flights/au/${regionSlug}`;
}
