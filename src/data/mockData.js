// mockData.js — 5 apartments, 13 reviews, 4 neighbourhoods (matches dashboard stats)

export const apartments = [
  {
    id: 1,
    name: "The Marlstone",
    address: "5540 Spring Garden Rd",
    neighbourhood: "Spring Garden",
    rating: 5.0,
    reviewCount: 1,
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=700&h=400&fit=crop&crop=center",
    aiSummary: null,
    tags: [],
    reviews: [
      {
        id: 1,
        author: "Jordan M.",
        date: "March 2025",
        rating: 5,
        text: "Absolutely loved living here. The landlord was responsive and the building was immaculate. Quiet neighbourhood and easy parking. Would highly recommend to anyone looking in Spring Garden.",
      },
    ],
  },
  {
    id: 2,
    name: "Park Victoria",
    address: "1496 Carlton St",
    neighbourhood: "South End",
    rating: 4.5,
    reviewCount: 2,
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=700&h=400&fit=crop&crop=center",
    aiSummary:
      "Tenants praise the maintenance and quiet atmosphere, though note the pricing is on the higher end for the South End.",
    tags: ["Well maintained", "Quiet", "Expensive"],
    reviews: [
      {
        id: 2,
        author: "Priya S.",
        date: "January 2025",
        rating: 5,
        text: "Best apartment I've rented in Halifax. Super quiet, beautifully maintained. Pricey but absolutely worth it.",
      },
      {
        id: 3,
        author: "Marcus T.",
        date: "November 2024",
        rating: 4,
        text: "Really nice place, great South End location. A bit expensive for the size but the building is spotless and management is responsive.",
      },
    ],
  },
  {
    id: 3,
    name: "Le Marchant Towers",
    address: "1585 Le Marchant St",
    neighbourhood: "West End",
    rating: 3.7,
    reviewCount: 3,
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=700&h=400&fit=crop&crop=center",
    aiSummary:
      "A conveniently located West End building with limited parking. Aging infrastructure but good access to universities.",
    tags: ["Good location", "Parking limited", "Aging building"],
    reviews: [
      {
        id: 4,
        author: "Sam K.",
        date: "February 2025",
        rating: 4,
        text: "Convenient location close to the universities. The building is old but my unit was fine and management kept hallways clean.",
      },
      {
        id: 5,
        author: "Yuki N.",
        date: "October 2024",
        rating: 3,
        text: "Parking is a nightmare. If you have a car, look elsewhere. Otherwise it's a decent place at a fair price.",
      },
      {
        id: 6,
        author: "Chloe D.",
        date: "August 2024",
        rating: 4,
        text: "Good value for the location. The building is aging but management keeps it clean. Would rent again.",
      },
    ],
  },
  {
    id: 4,
    name: "Fenwick Tower",
    address: "5599 Fenwick St",
    neighbourhood: "Downtown",
    rating: 3.3,
    reviewCount: 3,
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&h=400&fit=crop&crop=center",
    aiSummary:
      "Stunning panoramic views from upper floors, but recurring elevator outages and lobby security issues were flagged across multiple reviews.",
    tags: ["Elevator issues", "Great views", "Security concerns"],
    reviews: [
      {
        id: 7,
        author: "Liam B.",
        date: "March 2025",
        rating: 4,
        text: "The views from the upper floors are absolutely stunning. Had elevator problems twice but maintenance was quick to respond.",
      },
      {
        id: 8,
        author: "Aria C.",
        date: "December 2024",
        rating: 3,
        text: "The elevator breaks down way too often. Views are great but there are ongoing security issues in the lobby.",
      },
      {
        id: 9,
        author: "Ben O.",
        date: "September 2024",
        rating: 3,
        text: "Great downtown location. Security is a real concern — the lobby door was broken for weeks. Would not renew my lease.",
      },
    ],
  },
  {
    id: 5,
    name: "Southpoint Apartments",
    address: "1050 South Park St",
    neighbourhood: "South End",
    rating: 2.5,
    reviewCount: 4,
    image:
      "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=700&h=400&fit=crop&crop=center",
    aiSummary: null,
    tags: [],
    reviews: [
      {
        id: 10,
        author: "Zoe P.",
        date: "April 2025",
        rating: 3,
        text: "It's okay — nothing special. Maintenance takes a while to respond but they eventually come. Location is decent.",
      },
      {
        id: 11,
        author: "Raj A.",
        date: "January 2025",
        rating: 2,
        text: "Had a lot of issues with heating through the winter. Management was not helpful at all when I raised complaints.",
      },
      {
        id: 12,
        author: "Emma L.",
        date: "October 2024",
        rating: 2,
        text: "Would not recommend. Noisy neighbours, slow maintenance, and there was mold in the bathroom when I moved in.",
      },
      {
        id: 13,
        author: "Chris M.",
        date: "July 2024",
        rating: 3,
        text: "Decent location and affordable price. The building could use some work but it is livable for the cost.",
      },
    ],
  },
];

// Demo credentials shown on the Login page
export const DEMO_CREDENTIALS = {
  name: "Alex",
  email: "alex@dal.ca",
  password: "password123",
};
