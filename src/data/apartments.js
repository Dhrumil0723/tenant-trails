// Apartment data for the home page. Image URLs use Unsplash so no binary assets
// need to ship with the project. All are royalty-free for use.

export const apartments = [
  {
    id: 'marlstone',
    name: 'The Marlstone',
    neighbourhood: 'South End',
    rating: 5.0,
    reviews: 3,
    tags: [],
    summary: null,
    image:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'park-victoria',
    name: 'Park Victoria',
    neighbourhood: 'Downtown',
    rating: 4.5,
    reviews: 4,
    tags: ['Well maintained', 'Quiet', 'Expensive'],
    summary:
      'Tenants highlight a well-maintained building with a quiet atmosphere, though rent runs on the higher side.',
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'le-marchant',
    name: 'Le Marchant Towers',
    neighbourhood: 'West End',
    rating: 3.7,
    reviews: 3,
    tags: ['Good location', 'Parking limited', 'Aging building'],
    summary:
      'Location scores well with most tenants, but parking is tight and the building is starting to show its age.',
    image:
      'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'fenwick-tower',
    name: 'Fenwick Tower',
    neighbourhood: 'South End',
    rating: 3.3,
    reviews: 2,
    tags: ['Elevator issues', 'Great views', 'Security concerns'],
    summary:
      'Reviewers love the views but flag recurring elevator issues and some security concerns in common areas.',
    image:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'southpoint',
    name: 'Southpoint Apartments',
    neighbourhood: 'Halifax Peninsula',
    rating: 2.5,
    reviews: 1,
    tags: [],
    summary: null,
    image:
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80',
  },
]

export const neighbourhoods = [
  'All Neighbourhoods',
  'South End',
  'Downtown',
  'West End',
  'Halifax Peninsula',
]

export const sortOptions = ['Highest Rated', 'Lowest Rated', 'Most Reviews']
