/**
 * ==========================================================================
 * TRAVEL GO - EXPLORE THE WORLD
 * Modern, Interactive, Pure JavaScript Controller
 * ==========================================================================
 */

// --- GLOBAL CURRENCY SYSTEM ---
const CURRENCIES = {
  USD: { symbol: '$', rate: 1.0, label: 'USD ($)' },
  EUR: { symbol: '€', rate: 0.92, label: 'EUR (€)' },
  GBP: { symbol: '£', rate: 0.79, label: 'GBP (£)' },
  INR: { symbol: '₹', rate: 83.5, label: 'INR (₹)' }
};

let currentCurrency = 'USD';

function formatCurrency(amountUSD) {
  const cfg = CURRENCIES[currentCurrency] || CURRENCIES.USD;
  const converted = Math.round(amountUSD * cfg.rate);
  return `${cfg.symbol}${converted.toLocaleString()}`;
}

// --- DATASETS ---

// 1. Popular Destinations (The 8 Required Destinations)
const DESTINATIONS = [
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    region: 'Asia',
    badge: 'Top Rated',
    rating: 4.9,
    reviewsCount: 1842,
    startingPrice: 899,
    duration: '7 Days',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDesc: 'Tropical temples, emerald rice terraces, surf-friendly azure coasts, and serene holistic wellness retreats.',
    fullDesc: 'Bali is an enchanting tapestry of misty volcano peaks, sacred sea temples, lush emerald valleys, and vibrant arts communities. From the sacred monkey forests of Ubud to the cliffside sun-worship temples in Uluwatu, every corner exudes spirituality, beauty, and warm hospitality.',
    highlights: [
      'Uluwatu Sunset Temple with Kecak Fire Dance',
      'Tegallalang Sacred Rice Terraces & Jungle Swing',
      'Mount Batur Sunrise 4x4 Jeep Volcano Safari',
      'Nusa Penida Kelingking T-Rex Beach Speedboat Day Tour',
      'Traditional Balinese Flower Bath & Luxury Spa'
    ],
    bestSeason: 'April to October (Dry & Sunny Season)',
    climate: '27°C - 31°C Tropical Warmth',
    currency: 'IDR (Indonesian Rupiah)',
    languages: 'Indonesian & English'
  },
  {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    region: 'Europe',
    badge: 'Cultural Icon',
    rating: 4.8,
    reviewsCount: 2410,
    startingPrice: 1450,
    duration: '6 Days',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520939817895-060bdef4ad1b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDesc: 'Timeless elegance, world-renowned museums, haute cuisine, and romantic sunset river cruises along the Seine.',
    fullDesc: 'The City of Light captivates hearts with its cobblestone boulevards, monumental landmarks, sidewalk café culture, and legendary artistic heritage. Immerse yourself in the timeless romance that defines the French capital.',
    highlights: [
      'VIP Skip-the-Line Eiffel Tower Summit Access',
      'Louvre Museum Guided Masterpiece Discovery',
      'Gourmet Seine River Glass-Canopy Sunset Dinner Cruise',
      'Montmartre Artist Quarter & Sacré-Cœur Stroll',
      'Day Trip to Royal Château de Versailles'
    ],
    bestSeason: 'May to September',
    climate: '18°C - 26°C Mild & Pleasant',
    currency: 'EUR (€ Euro)',
    languages: 'French & English'
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    country: 'Switzerland',
    region: 'Europe',
    badge: 'Luxury Alpine',
    rating: 5.0,
    reviewsCount: 1290,
    startingPrice: 2100,
    duration: '8 Days',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDesc: 'Majestic snow-dusted Alpine peaks, panoramic Glacier Express trains, turquoise glacial lakes, and cozy chalets.',
    fullDesc: 'Switzerland is nature at its absolute grandest. Journey across soaring snowy passes aboard panoramic trains, gaze up at the iconic pyramid peak of the Matterhorn in Zermatt, and sail across crystal-clear alpine lakes.',
    highlights: [
      'First-Class Glacier Express Scenic Panoramic Rail',
      'Jungfraujoch Top of Europe High Alpine Railway',
      'Iconic Matterhorn Views & Zermatt Alpine Village',
      'Lake Lucerne Steamboat Cruise & Mount Pilatus Cable Car',
      'Artisan Swiss Chocolate & Alpine Fondue Tasting'
    ],
    bestSeason: 'June to September (Lakes & Hiking) or Dec to March (Skiing)',
    climate: '15°C - 24°C Summer / -2°C - 5°C Winter',
    currency: 'CHF (Swiss Franc) / EUR Accepted',
    languages: 'German, French, Italian & English'
  },
  {
    id: 'dubai',
    name: 'Dubai',
    country: 'UAE',
    region: 'Middle East',
    badge: 'Ultra Luxury',
    rating: 4.8,
    reviewsCount: 1930,
    startingPrice: 1150,
    duration: '6 Days',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDesc: 'Futuristic architecture, ultra-luxurious private beachfront resorts, desert starlight glamping, and mega-malls.',
    fullDesc: 'Rising like a shimmering jewel from the Arabian sands, Dubai effortlessly blends visionary futuristic architecture with rich Emirati traditions. Experience adrenaline-pumping desert safaris and bespoke luxury living.',
    highlights: [
      'Burj Khalifa Level 148 Sky Lounge Observation VIP',
      '4x4 Sand Dune Bashing & Starlit Bedouin BBQ Camp',
      'Dubai Marina Private Luxury Yacht Sunset Cruise',
      'Museum of the Future Architectural Journey',
      'Palm Jumeirah Scenic Helicopter Flight'
    ],
    bestSeason: 'November to April (Pleasant Winter Sun)',
    climate: '24°C - 30°C Sunny Warmth',
    currency: 'AED (UAE Dirham)',
    languages: 'Arabic & English'
  },
  {
    id: 'maldives',
    name: 'Maldives',
    country: 'Maldives',
    region: 'Islands',
    badge: 'Honeymoon Choice',
    rating: 4.9,
    reviewsCount: 1680,
    startingPrice: 2499,
    duration: '5 Days',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDesc: 'Private island sanctuaries, turquoise lagoons, marine biology snorkeling, and unmatched barefoot luxury.',
    fullDesc: 'Scattered across the turquoise expanse of the Indian Ocean, the Maldives is the ultimate tropical sanctuary. Stay suspended above crystal waters in an overwater villa, swim with manta rays, and watch vibrant sunsets from secluded sandbanks.',
    highlights: [
      'Luxury Overwater Villa with Private Plunge Pool & Ocean Slide',
      'Manta Ray & Sea Turtle Coral Reef Snorkeling Safari',
      'Scenic Seaplane Arrival Flight over Ring Atolls',
      'Candlelight Private Sandbank Dinner Under the Stars',
      'Sunset Dolphin Catamaran Cruise with Champagne'
    ],
    bestSeason: 'November to April (Dry Monsoon)',
    climate: '28°C - 31°C Tropical Paradise',
    currency: 'USD / MVR Accepted',
    languages: 'Dhivehi & English'
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    region: 'Asia',
    badge: 'Trending',
    rating: 4.9,
    reviewsCount: 2150,
    startingPrice: 1980,
    duration: '9 Days',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDesc: 'A mesmerizing symphony of ancient Shinto shrines, futuristic neon districts, and world-class culinary wonders.',
    fullDesc: 'Tokyo is an electrifying collision of deep reverence for tradition and relentless forward momentum. Wander peaceful lantern-lit temple grounds, eat world-class sushi at dawn, and step into dazzling multi-sensory digital art wonderlands.',
    highlights: [
      'Shibuya Crossing & Shinjuku Golden Gai Evening Food Trail',
      'Historic Asakusa Senso-ji Temple & Traditional Rickshaw Tour',
      'teamLab Planets Immersive Digital Art Museum',
      'High-Speed Shinkansen Bullet Train to Kyoto & Hakone',
      'Authentic Japanese Tea Ceremony & Kaiseki Feast'
    ],
    bestSeason: 'March to May (Sakura) & Oct to Nov (Autumn Leaves)',
    climate: '15°C - 23°C Crisp & Pleasant',
    currency: 'JPY (Japanese Yen)',
    languages: 'Japanese & English'
  },
  {
    id: 'manali',
    name: 'Manali',
    country: 'India',
    region: 'India',
    badge: 'Mountain Thrill',
    rating: 4.8,
    reviewsCount: 980,
    startingPrice: 499,
    duration: '5 Days',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDesc: 'Spectacular Himalayan peaks, thrilling river rafting, pine-scented mountain trails, and cozy cedarwood cottages.',
    fullDesc: 'Nestled deep in the Beas River Valley of Himachal Pradesh, Manali is India’s adventure capital and premier Himalayan retreat. Marvel at the snowy crest of Rohtang Pass, paraglide over Solang Valley, and breathe in the crisp mountain pine air.',
    highlights: [
      'Rohtang Pass & Atal Tunnel Snow Expedition',
      'Solang Valley Paragliding, Zipline & Skiing Thrills',
      'Old Manali Bohemian Riverside Cafes & Live Acoustic Music',
      'Ancient Hadimba Devi Temple Wooden Architecture',
      'Jogini Waterfalls Forest Trek & Hot Sulphur Springs'
    ],
    bestSeason: 'October to June (Snow in Dec-Feb, Lush Green in May-June)',
    climate: '5°C - 20°C Mountain Alpine',
    currency: 'INR (₹ Indian Rupee)',
    languages: 'Hindi, Himachali & English'
  },
  {
    id: 'kashmir',
    name: 'Kashmir',
    country: 'India',
    region: 'India',
    badge: 'Paradise on Earth',
    rating: 4.9,
    reviewsCount: 1340,
    startingPrice: 650,
    duration: '6 Days',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDesc: 'Celebrated as "Heaven on Earth", featuring peaceful cedar houseboats on Dal Lake, blooming saffron, and Gulmarg slopes.',
    fullDesc: 'Mughal Emperor Jahangir famously proclaimed: "If there is a paradise on earth, it is this, it is this, it is this." Glide upon placid Dal Lake in a wooden shikara, stay on an intricately hand-carved heritage houseboat, and ride the world’s second-highest cable car in Gulmarg.',
    highlights: [
      'Dal Lake Sunrise Shikara Cruise & Floating Flower Market',
      'Gulmarg Gondola Cable Car to Kongdoori & Apharwat Peak',
      'Pahalgam Betaab Valley & Lidder Riverbank Pine Walk',
      'Mughal Terraced Royal Gardens of Nishat & Shalimar',
      'Traditional Kashmiri Wazwan Feast & Spiced Kahwa Tea'
    ],
    bestSeason: 'March to November (Spring Blossoms & Autumn) / Dec-Feb for Snow',
    climate: '10°C - 24°C Spring/Summer / -2°C - 8°C Winter',
    currency: 'INR (₹ Indian Rupee)',
    languages: 'Kashmiri, Urdu, Hindi & English'
  }
];

// 2. Featured Travel Packages
const PACKAGES = [
  {
    id: 'pkg-bali-escape',
    destinationId: 'bali',
    destinationName: 'Bali, Indonesia',
    title: 'Bali Island Escapes & Cultural Immersion',
    duration: '7 Days / 6 Nights',
    category: 'Beach',
    price: 1199,
    oldPrice: 1499,
    rating: 4.9,
    reviewCount: 342,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Experience sacred Ubud temples, private infinity pool villas, a sunset catamaran cruise in Seminyak, and sunrise Mount Batur jeep safari.',
    tags: ['5★ Villa Included', 'Private Chauffeur', 'Breakfast Daily', 'Free Cancellation'],
    inclusions: [
      '6 Nights luxury 5-star private pool villa accommodation',
      'Daily organic gourmet breakfast & 2 traditional dinners',
      'Private air-conditioned chauffeur throughout your trip',
      'All temple, waterfall, and national park entrance tickets',
      'Mount Batur sunrise 4x4 Jeep safari with hot spring soak',
      'Round-trip VIP Ngurah Rai International Airport transfers'
    ],
    exclusions: [
      'International flight airfare',
      'Personal laundry and telephone charges',
      'Optional gratuities for drivers and guides'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Denpasar & Luxury Villa Check-in', desc: 'Warm Balinese garland welcome, private transfer to your Seminyak pool villa, and evening sunset beach cocktail.' },
      { day: 2, title: 'Ubud Cultural Heart & Sacred Monkey Forest', desc: 'Explore the Sacred Monkey Forest sanctuary, artisan woodcarving villages, and wander through the Tegallalang Rice Terraces.' },
      { day: 3, title: 'Mount Batur Sunrise & Natural Hot Springs', desc: 'Early morning 4x4 Jeep tour to Mount Batur volcanic viewpoint, followed by breakfast and a relaxing dip in geothermal mineral springs.' },
      { day: 4, title: 'Nusa Penida Island Speedboat Day Adventure', desc: 'Speedboat cruise to Nusa Penida to witness Kelingking T-Rex cliff, Angel’s Billabong, and snorkel with majestic manta rays.' },
      { day: 5, title: 'Ulun Danu Bratan Lake Temple & Waterfalls', desc: 'Visit the picturesque water temple on Lake Bratan and trek through lush jungle to swim under Banyumala Twin Waterfalls.' },
      { day: 6, title: 'Uluwatu Sunset Temple & Kecak Fire Dance', desc: 'Perched 70 meters above crashing waves, watch the dramatic sunset Kecak fire dance, followed by a beachfront seafood dinner at Jimbaran Bay.' },
      { day: 7, title: 'Balinese Spa Treatment & Farewell Departure', desc: 'Indulge in a 90-minute Balinese massage and herbal bath before private transfer to the airport.' }
    ]
  },
  {
    id: 'pkg-swiss-glacier',
    destinationId: 'switzerland',
    destinationName: 'Switzerland',
    title: 'Alpine Splendor & Swiss Glacier Express',
    duration: '8 Days / 7 Nights',
    category: 'Mountain',
    price: 2450,
    oldPrice: 2890,
    rating: 5.0,
    reviewCount: 198,
    badge: 'Ultra Luxury',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Journey through Zurich, Lucerne, Interlaken, and Zermatt with first-class Swiss Travel Pass, Jungfraujoch Top of Europe, and fondue tasting.',
    tags: ['Swiss Travel Pass 1st Class', '5★ Boutique Hotels', 'Mountain Excursions'],
    inclusions: [
      '7 Nights at handpicked 4★ & 5★ boutique alpine hotels',
      '8-Day Swiss Travel Pass (1st Class) with unlimited trains, boats, & buses',
      'Reserved seats on the world-renowned Glacier Express panoramic rail',
      'Full-day excursion ticket to Jungfraujoch Top of Europe',
      'Lake Lucerne vintage steamboat cruise & Mount Pilatus cable car',
      'Traditional Swiss cheese fondue dinner with Alpine wine'
    ],
    exclusions: [
      'International flights to/from Zurich or Geneva',
      'Personal travel insurance (available as add-on)'
    ],
    itinerary: [
      { day: 1, title: 'Welcome to Zurich & Scenic Lucerne Transfer', desc: 'Arrive in Zurich and board scenic first-class train to Lucerne. Walk across the iconic Chapel Bridge and check into your lakeside suite.' },
      { day: 2, title: 'Mount Pilatus Golden Roundtrip', desc: 'Ascend Mount Pilatus via the world’s steepest cogwheel railway and descend by aerial cableway, followed by Lake Lucerne cruise.' },
      { day: 3, title: 'Interlaken & Lauterbrunnen Valley of 72 Waterfalls', desc: 'Panoramic train to Interlaken. Explore fairy-tale Lauterbrunnen valley and take in mist from Staubbach Falls.' },
      { day: 4, title: 'Jungfraujoch – The Top of Europe', desc: 'Board the Eiger Express tri-cable gondola and high-altitude rail to 3,454 meters. Explore the Ice Palace and Sphinx Observatory.' },
      { day: 5, title: 'Boarding the Legendary Glacier Express', desc: 'Step aboard the Glacier Express in Brig. Relax under oversized panoramic glass windows as you cross dramatic gorges and high passes.' },
      { day: 6, title: 'Zermatt & Matterhorn Glacier Paradise', desc: 'Marvel at the iconic pyramid peak of the Matterhorn. Ride the Gornergrat cogwheel train for sweeping vistas of 29 peaks.' },
      { day: 7, title: 'Lake Geneva & Montreux Chillon Castle', desc: 'Travel to the Swiss Riviera town of Montreux. Stroll the palm-lined lake promenade and tour medieval Château de Chillon.' },
      { day: 8, title: 'Geneva / Zurich Departure', desc: 'Enjoy a leisurely breakfast before taking the direct train to the airport for your onward journey.' }
    ]
  },
  {
    id: 'pkg-maldives-romance',
    destinationId: 'maldives',
    destinationName: 'Maldives',
    title: 'Maldives Private Island Romance & Overwater Villa',
    duration: '5 Days / 4 Nights',
    category: 'Romantic',
    price: 3200,
    oldPrice: 3800,
    rating: 4.9,
    reviewCount: 215,
    badge: 'Honeymoon Special',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Escape to an idyllic 5-star private coral atoll. Stay in a luxury overwater villa with ocean slide, private butler, and candlelight sandbank dinner.',
    tags: ['Overwater Pool Villa', 'All-Inclusive Dining', 'Seaplane Included', 'Couple Spa'],
    inclusions: [
      '4 Nights in an ultra-luxurious Sunset Overwater Villa with Private Pool',
      'All-inclusive gourmet dining across 4 specialty island restaurants',
      'Round-trip scenic seaplane transfers from Velana Male Airport',
      'Private 90-minute couple’s Aromatherapy Spa therapy over the water',
      'Private candlelit sandbank dinner with premium vintage champagne',
      'Complimentary guided reef snorkeling equipment & non-motorized water sports'
    ],
    exclusions: [
      'International flights to/from Male (MLE)',
      'Motorized water sports (jet ski, seabob)'
    ],
    itinerary: [
      { day: 1, title: 'Seaplane Arrival & Overwater Villa Welcome', desc: 'Take a thrilling 35-minute seaplane flight over blue atolls. Check into your overwater villa with crystal lagoon access.' },
      { day: 2, title: 'Coral Reef Snorkeling & Floating Lagoon Breakfast', desc: 'Awaken to a floating breakfast in your private plunge pool. Join the resident marine biologist to snorkel with turtles and reef sharks.' },
      { day: 3, title: 'Sunset Dolphin Cruise & Overwater Couple Spa', desc: 'Indulge in rejuvenating couple massage overlooking coral beds. In the evening, cruise on a traditional wooden Dhoni with wild dolphins leaping alongside.' },
      { day: 4, title: 'Private Sandbank Castaway Experience', desc: 'Boat transfer to a secluded private sandbank surrounded by turquoise sea for an intimate picnic and twilight gourmet dinner.' },
      { day: 5, title: 'Morning Sunrise Yoga & Seaplane Farewell', desc: 'Greet the sunrise with seaside yoga, followed by breakfast before boarding your seaplane back to Male.' }
    ]
  },
  {
    id: 'pkg-dubai-gold',
    destinationId: 'dubai',
    destinationName: 'Dubai, UAE',
    title: 'Dubai Gold Coast & Desert Stargazing Glamping',
    duration: '6 Days / 5 Nights',
    category: 'Luxury',
    price: 1420,
    oldPrice: 1750,
    rating: 4.8,
    reviewCount: 280,
    badge: 'Trending Now',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Blend high-octane city luxury with authentic Bedouin culture: Burj Khalifa Level 148, Marina yacht cruise, and luxury desert dome glamping.',
    tags: ['5★ Downtown Hotel', 'Desert Glamping Dome', 'Yacht Cruise', 'VIP Burj Khalifa'],
    inclusions: [
      '4 Nights in 5★ Downtown Dubai hotel + 1 Night in luxury desert glamping dome',
      'VIP fast-track ticket to Burj Khalifa Sky Level 148 & 125',
      'Private 2-hour sunset yacht charter with refreshments in Dubai Marina',
      '4x4 Land Cruiser desert dune bashing, camel trek, and starlight BBQ feast',
      'Entry tickets to Museum of the Future & Dubai Frame',
      'All private transfers in premium executive vehicles'
    ],
    exclusions: [
      'International flights to Dubai (DXB)',
      'Tourism Dirham tax payable directly to hotel'
    ],
    itinerary: [
      { day: 1, title: 'Touchdown in Dubai & Downtown Check-in', desc: 'VIP airport meet-and-greet, private Mercedes transfer to your Downtown hotel with views of the glittering skyline.' },
      { day: 2, title: 'Burj Khalifa Sky Lounge & Dubai Mall Fountain Show', desc: 'Ascend to the highest observation deck in the world on Level 148. In the evening, watch the dancing Dubai Fountain show.' },
      { day: 3, title: 'Old Dubai Heritage, Souks & Marina Yacht Cruise', desc: 'Cross Dubai Creek on an authentic Abra boat, explore the Gold and Spice Souks, then board a private sunset yacht cruise around Palm Jumeirah.' },
      { day: 4, title: 'Desert Safari & Luxury Glamping Under the Stars', desc: 'Head into the Arabian Desert for red-dune bashing, sandboarding, falconry, and check into a climate-controlled luxury desert dome.' },
      { day: 5, title: 'Sunrise Camel Trek & Museum of the Future', desc: 'Watch golden sunrise over the dunes, enjoy Bedouin breakfast, return to the city to tour the breathtaking Museum of the Future.' },
      { day: 6, title: 'Leisure Morning & Airport Transfer', desc: 'Final morning shopping or relaxation at beach club before private airport drop-off.' }
    ]
  },
  {
    id: 'pkg-tokyo-kyoto',
    destinationId: 'tokyo',
    destinationName: 'Tokyo, Japan',
    title: 'Tokyo to Kyoto: Cherry Blossom & Shinkansen Odyssey',
    duration: '9 Days / 8 Nights',
    category: 'Cultural',
    price: 2890,
    oldPrice: 3350,
    rating: 4.9,
    reviewCount: 412,
    badge: 'Editor Pick',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'A curated crossing of Japan’s ancient past and hyper-modern future: Akihabara tech tour, tea ceremony in Gion, Arashiyama, and Hakone onsen.',
    tags: ['Shinkansen Bullet Train', 'Heritage Ryokan with Onsen', 'English Expert Guide'],
    inclusions: [
      '5 Nights in 5★ Tokyo boutique hotel + 2 Nights in Kyoto + 1 Night in Hakone Ryokan',
      'High-speed Shinkansen Bullet Train first-class reserved seating',
      'Authentic hot-spring onsen experience and multi-course Kaiseki dinner',
      'English-speaking licensed Japanese cultural guide for all group tours',
      'Entry to teamLab Planets, Senso-ji, Fushimi Inari, and Kinkaku-ji',
      'Pocket Wi-Fi device with unlimited high-speed data throughout Japan'
    ],
    exclusions: [
      'International flights to Tokyo Narita/Haneda',
      'Personal shopping and dining outside scheduled meals'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Tokyo & Shinjuku Neon Night Tour', desc: 'Welcome to Tokyo! Evening stroll through the vibrant lantern alleys of Omoide Yokocho and view of the giant 3D Shinjuku cat.' },
      { day: 2, title: 'Tradition & Tech: Asakusa to Akihabara', desc: 'Visit historic Senso-ji Temple and Nakamise shopping street, followed by afternoon exploration of Akihabara electronics and anime district.' },
      { day: 3, title: 'teamLab Digital Art & Shibuya Scramble Crossing', desc: 'Immerse your senses in the mirror and light installations at teamLab Planets, then cross the world-famous Shibuya crossing.' },
      { day: 4, title: 'Mount Fuji & Hakone Hot Springs Ryokan', desc: 'Travel to Hakone. Cruise Lake Ashi on a pirate ship with views of Mount Fuji, and relax in natural volcanic onsen baths.' },
      { day: 5, title: 'Bullet Train to Kyoto & Fushimi Inari Torii Gates', desc: 'Zoom at 320 km/h on the Shinkansen to ancient Kyoto. Walk through thousands of vermilion Torii gates at Fushimi Inari.' },
      { day: 6, title: 'Arashiyama Bamboo Grove & Golden Pavilion', desc: 'Listen to the rustle of giant stalks in Arashiyama Bamboo Grove and visit the glittering Kinkaku-ji (Golden Pavilion).' },
      { day: 7, title: 'Geisha District Gion & Authentic Tea Ceremony', desc: 'Participate in a ceremonial matcha preparation, followed by a twilight walking tour through Gion’s preserved wooden machiya streets.' },
      { day: 8, title: 'Return to Tokyo & Ginza Luxury Shopping', desc: 'Shinkansen back to Tokyo. Spend an afternoon exploring flagship boutiques, art galleries, and dining in Ginza.' },
      { day: 9, title: 'Sayonara Tokyo Departure', desc: 'Farewell breakfast and airport limousine bus transfer to Narita or Haneda.' }
    ]
  },
  {
    id: 'pkg-kashmir-paradise',
    destinationId: 'kashmir',
    destinationName: 'Kashmir, India',
    title: 'Mystical Kashmir Valley & Gulmarg Snow Expedition',
    duration: '6 Days / 5 Nights',
    category: 'Mountain',
    price: 850,
    oldPrice: 1050,
    rating: 4.9,
    reviewCount: 310,
    badge: 'Bestseller India',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Awaken on a hand-carved heritage houseboat on Dal Lake, take sunrise shikara rides, ride the Gulmarg gondola, and wander Pahalgam.',
    tags: ['Heritage Houseboat', 'Gondola Tickets Included', 'Private Cab', 'Traditional Wazwan'],
    inclusions: [
      '2 Nights in hand-carved Deluxe Houseboat on Dal Lake + 3 Nights in 4★ luxury resorts',
      'Daily buffet breakfast and authentic Kashmiri Wazwan dinner',
      'Dal Lake private shikara ride at sunrise with floating market visit',
      'Gulmarg Gondola Phase 1 & Phase 2 cable car tickets pre-booked',
      'Private heating-equipped SUV cab for all transfers and sightseeing',
      'Experienced local Kashmiri guide and round-the-clock coordinator'
    ],
    exclusions: [
      'Flights to/from Srinagar (SXR)',
      'Pony/horse rides in Gulmarg/Pahalgam (optional directly paid)'
    ],
    itinerary: [
      { day: 1, title: 'Srinagar Arrival & Heritage Houseboat Check-in', desc: 'Warm Kashmiri welcome with aromatic saffron Kahwa tea. Check into cedarwood houseboat on Dal Lake, followed by relaxing sunset shikara ride.' },
      { day: 2, title: 'Mughal Gardens & Floating Vegetable Market', desc: 'Early morning shikara to the floating vegetable market. Tour the historic terraced gardens of Nishat Bagh, Shalimar Bagh, and Chashme Shahi.' },
      { day: 3, title: 'Gulmarg Gondola to the Apharwat Snow Peak', desc: 'Drive to the "Meadow of Flowers" at Gulmarg. Board the high-altitude cable car up to 13,780 feet for skiing, snow sledding, and panoramic views.' },
      { day: 4, title: 'Scenic Valley of Pahalgam & Betaab Valley', desc: 'Drive through saffron fields of Pampore to Pahalgam. Stroll beside the turquoise Lidder River and visit picturesque Betaab and Aru Valleys.' },
      { day: 5, title: 'Baisaran Mini Switzerland Trek & Srinagar Old City', desc: 'Pony trek or hike to scenic Baisaran pine meadow. Return to Srinagar to wander historic Jamia Masjid and buy authentic pashminas.' },
      { day: 6, title: 'Morning Shikara Farewell & Airport Transfer', desc: 'Final sunrise reflections on the lake before transfer to Srinagar Airport with sweet memories.' }
    ]
  },
  {
    id: 'pkg-paris-elegance',
    destinationId: 'paris',
    destinationName: 'Paris, France',
    title: 'Parisian Elegance, Louvre & Champagne Vineyard Tour',
    duration: '6 Days / 5 Nights',
    category: 'Romantic',
    price: 1850,
    oldPrice: 2200,
    rating: 4.8,
    reviewCount: 175,
    badge: 'Romantic Getaway',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Skip-the-line VIP entry to Louvre and Versailles, private day trip to the historic cellars of Reims in Champagne, and Seine sunset dining.',
    tags: ['Boutique 4★ Hotel', 'Champagne Tasting', 'Seine Dinner Cruise', 'VIP Louvre'],
    inclusions: [
      '5 Nights in charming boutique hotel in Saint-Germain-des-Prés',
      'VIP Skip-the-line Louvre and Musée d’Orsay museum passes',
      '3-Course gourmet sunset dinner cruise on the Seine with live music',
      'Full-day private guided excursion to Reims in Champagne with cellar tastings',
      'Guided half-day royal tour of Palace of Versailles and Hall of Mirrors',
      'Private Mercedes airport transfers to/from Charles de Gaulle'
    ],
    exclusions: [
      'International flight tickets',
      'City occupancy tourist tax'
    ],
    itinerary: [
      { day: 1, title: 'Bienvenue à Paris & Saint-Germain Evening Stroll', desc: 'Check in to your boutique Left Bank hotel. Enjoy afternoon coffee at iconic Café de Flore and take an evening walk across Pont Neuf.' },
      { day: 2, title: 'The Masterpieces of the Louvre & Tuileries Garden', desc: 'Direct VIP access to the Mona Lisa, Venus de Milo, and Winged Victory with an art historian guide.' },
      { day: 3, title: 'Champagne Region Day Tour: Reims & Épernay', desc: 'Travel into the rolling vineyards of Champagne. Tour chalk cellars of prestigious Champagne houses and taste vintage cuvées.' },
      { day: 4, title: 'Palace of Versailles & Seine Dinner Cruise', desc: 'Step into royal splendor at Versailles Hall of Mirrors. In the evening, dress up for a candlelit 3-course dinner cruise on the Seine.' },
      { day: 5, title: 'Montmartre Bohemian Artists & Le Marais Bakeries', desc: 'Explore the cobblestone hill of Montmartre, visit the Sacré-Cœur, and sample artisan macarons and pastries in Le Marais.' },
      { day: 6, title: 'Final Croissant & Paris Departure', desc: 'Leisurely Parisian breakfast at a sidewalk bistro before private airport transfer.' }
    ]
  },
  {
    id: 'pkg-manali-adventure',
    destinationId: 'manali',
    destinationName: 'Manali, India',
    title: 'Himalayan Manali Adventure & Rohtang Pass Trek',
    duration: '5 Days / 4 Nights',
    category: 'Mountain',
    price: 620,
    oldPrice: 780,
    rating: 4.8,
    reviewCount: 260,
    badge: 'Adventure Special',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Adrenaline and serenity in equal measure: paragliding in Solang, snow adventures at Atal Tunnel and Rohtang Pass, and riverside camping.',
    tags: ['Riverside Cottages', 'Paragliding Included', 'Rohtang Pass Permit', 'Bonfire & BBQ'],
    inclusions: [
      '4 Nights in riverside mountain cottage overlooking snow-capped peaks',
      'All breakfasts and hearty mountain dinners with bonfire evening BBQ',
      'Tandem paragliding session in Solang Valley with certified instructor',
      'National Green Tribunal (NGT) permit and 4x4 vehicle for Rohtang Pass',
      'White water river rafting in the icy rapids of the Beas River',
      'Private vehicle for pick-up/drop from Chandigarh or Bhuntar'
    ],
    exclusions: [
      'Travel to Chandigarh/Bhuntar starting points',
      'Personal winter clothing rentals'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Manali & Riverside Cottage Check-in', desc: 'Arrive in picturesque Kullu-Manali valley. Check into your wooden cottage beside the rushing river. Evening bonfire under starry skies.' },
      { day: 2, title: 'Solang Valley Thrills & River Rafting', desc: 'Soar like a bird on a tandem paragliding flight over Solang Valley, followed by an exhilarating white-water rafting run on Beas River.' },
      { day: 3, title: 'Atal Tunnel & Majestic Rohtang Pass Snow Peak', desc: 'Drive through the marvel of engineering Atal Tunnel to Lahaul Valley and ascend Rohtang Pass at 13,058 feet for snow play.' },
      { day: 4, title: 'Old Manali Bohemian Cafes & Jogini Falls Trek', desc: 'Hike through pine forests and apple orchards to scenic Jogini Waterfall. Spend the evening in Old Manali’s cozy music cafes.' },
      { day: 5, title: 'Hadimba Temple & Departure with Fond Memories', desc: 'Visit the 16th-century wooden Hadimba Temple surrounded by ancient deodar cedar groves before your return journey.' }
    ]
  }
];

// 3. Travel Experiences (6 Categories)
const EXPERIENCES = [
  {
    id: 'beach',
    title: 'Beach Holidays',
    tagline: 'Sun-drenched shores & crystal waters',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    count: '24 Packages',
    category: 'Beach'
  },
  {
    id: 'mountain',
    title: 'Mountain Adventures',
    tagline: 'Snow-capped peaks & alpine trails',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
    count: '18 Packages',
    category: 'Mountain'
  },
  {
    id: 'luxury',
    title: 'Luxury Escapes',
    tagline: '5-star resorts & private butlers',
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=80',
    count: '15 Packages',
    category: 'Luxury'
  },
  {
    id: 'culture',
    title: 'Cultural Exploration',
    tagline: 'Ancient temples & heritage traditions',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    count: '21 Packages',
    category: 'Cultural'
  },
  {
    id: 'wildlife',
    title: 'Wildlife Adventures',
    tagline: 'Safari game drives & marine reserves',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
    count: '12 Packages',
    category: 'Adventure'
  },
  {
    id: 'romantic',
    title: 'Romantic Getaways',
    tagline: 'Honeymoon suites & sunset dinners',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',
    count: '19 Packages',
    category: 'Romantic'
  }
];

// 4. Travel Blog Stories
const BLOGS = [
  {
    id: 'blog-swiss-trains',
    title: 'The Ultimate 10-Day Guide to Exploring the Swiss Alps by Scenic Train',
    author: 'Elena Vance',
    date: 'Oct 14, 2026',
    readTime: '6 min read',
    category: 'Travel Guide',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=900&q=80',
    excerpt: 'From the panoramic glass domes of the Glacier Express to the heart of the Lauterbrunnen valley, here is the exact rail route you need to experience the Swiss Alps in pure comfort.',
    content: `Switzerland’s rail system isn’t just transportation—it is one of the most cinematic travel experiences on earth. Traveling by train allows you to savor soaring Alpine summits, emerald valleys, and turquoise glacial torrents without ever having to watch the road.

Key Highlights of the Route:
1. Zurich to Lucerne: A gentle introduction through rolling meadows and mirrored lakes.
2. The GoldenPass Line: Crossing from German-speaking Switzerland into the French-speaking vineyards of Montreux.
3. The Glacier Express: The "slowest express train in the world", crossing 291 bridges and 91 tunnels between Zermatt and St. Moritz.
4. The Bernina Express: A UNESCO World Heritage rail journey descending through dramatic spiraling viaducts into Italy.

Pro Tip: Purchase a First-Class Swiss Travel Pass. Not only does it cover all national trains, boats, and mountain cable discounts, but it also gives you free access to over 500 museums across the country.`
  },
  {
    id: 'blog-ubud-hidden',
    title: 'Secret Waterfalls and Hidden Organic Cafes in Ubud, Bali',
    author: 'Marcus Chen',
    date: 'Nov 02, 2026',
    readTime: '4 min read',
    category: 'Hidden Gems',
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=900&q=80',
    excerpt: 'Escape the tourist crowds and discover the secluded waterfalls, lush jungle swings, and conscious plant-based bistros that keep the soul of Bali alive.',
    content: `While Ubud’s main streets can become lively with scooters and tourists, tranquil serenity is always only five minutes away down a stone pathway.

Our Favorite Hidden Spots:
• Tibumana Waterfall: A peaceful cascade hidden inside a verdant jungle gorge with a serene swimming pool.
• Kanto Lampo: A stepped rock formation where spring water cascades down like a natural curtain.
• Moksa Plant-Based Kitchen: An edible permaculture garden in Penestanan where your food is picked minutes before being served on your plate.
• Campuhan Ridge at Dawn: Walk the narrow paved path between two river ravines just as the morning mist rises off the coconut palms.`
  },
  {
    id: 'blog-maldives-honeymoon',
    title: 'How to Plan the Perfect Maldives Honeymoon Without the Guesswork',
    author: 'Sarah Jenkins',
    date: 'Sep 28, 2026',
    readTime: '5 min read',
    category: 'Romantic Travel',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=80',
    excerpt: 'Choosing between a speedboat atoll or a seaplane resort? We break down everything you need to know about all-inclusive meal plans, overwater villas, and avoiding hidden resort taxes.',
    content: `The Maldives is the dream honeymoon destination for a reason: endless shades of turquoise, secluded overwater decks, and world-class hospitality. However, with over 150 resort islands, making the right choice matters.

Speedboat vs. Seaplane:
If you arrive on a late-night flight, resorts within the North or South Male Atolls reachable by speedboat allow 24-hour transfers. For truly remote outer atolls, the iconic Twin Otter seaplane flight is an unforgettable bucket-list experience, but only operates during daylight hours.

All-Inclusive Is Worth It:
Because each resort occupies its own private island, all dining happens on-site. Choosing an all-inclusive plan with Travel Go guarantees that champagne, candlelight sandbank dinners, and minibar refreshments are fully covered with zero checkout surprises.`
  },
  {
    id: 'blog-tokyo-food',
    title: 'A Food Lover’s Guide to Tokyo: Tsukiji Outer Market to Secret Omakase',
    author: 'Kenji Sato',
    date: 'Oct 22, 2026',
    readTime: '7 min read',
    category: 'Culinary Journey',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=900&q=80',
    excerpt: 'Tokyo holds more Michelin stars than any other city on earth. Discover how to navigate standing sushi counters, savory ramen alleys, and hidden basement yakitori.',
    content: `Eating in Tokyo is an art form rooted in decades of devotion to single-ingredient perfection. From 500-yen bowls of piping hot tonkotsu ramen to intimate 8-seat sushi bars where master chefs cure fish with ancestral techniques, culinary bliss awaits at every corner.

Must-Try Food Experiences:
• Tsukiji Outer Market: Sample grilled king crab legs, sweet tamagoyaki omelettes, and fresh sea urchin (uni).
• Omoide Yokocho in Shinjuku: Savor sizzling skewers of yakitori grilled over Japanese binchotan charcoal under smoky glowing lanterns.
• Depachika Food Basements: Visit the basement levels of luxury department stores like Isetan or Mitsukoshi to explore artisanal pastries, wagashi sweets, and fruit so pristine it is wrapped like jewelry.`
  },
  {
    id: 'blog-kashmir-winter',
    title: 'Kashmir in Winter: Snow Valleys, Shikara Rides & Kahwa by the Fire',
    author: 'Aarav Sharma',
    date: 'Nov 10, 2026',
    readTime: '5 min read',
    category: 'Destination Spotlight',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=900&q=80',
    excerpt: 'When snow blankets the Himalayas, Kashmir transforms into a silent, shimmering wonderland. Here is what it feels like to stay on a winter houseboat and ski down Gulmarg.',
    content: `While summer attracts thousands to Kashmir’s blooming tulip gardens, winter is when the valley’s mystical aura truly awakens. The surrounding Pir Panjal mountains turn glistening white, and the air smells of burning cedar and brewing saffron.

Winter Highlights:
• The Traditional Bukari Stove: Traditional Kashmiri houseboats and chalets stay cozily warm with wood-fired stoves called Bukaris and glowing copper Samovars dispensing steaming saffron Kahwa with crushed almonds.
• Gulmarg Powder Snow: Ranked among Asia’s top powder skiing destinations, the Gulmarg Gondola whisks winter enthusiasts up to Mount Apharwat at nearly 14,000 feet.
• Frozen Drung Waterfall: A breathtaking curtain of giant icicles nestled amidst pine forests near Tangmarg.`
  }
];

// 5. Testimonials
const TESTIMONIALS = [
  {
    id: 'test-1',
    name: 'Sophia & Liam Davies',
    location: 'London, UK',
    tripTaken: 'Maldives Romantic Escape',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    quote: 'Our honeymoon in the Maldives arranged by Travel Go was pure magic. The overwater villa with its private plunge pool, the sunset dolphin cruise, and the sandbank dinner were coordinated flawlessly. Truly unforgettable!'
  },
  {
    id: 'test-2',
    name: 'David Miller',
    location: 'New York, USA',
    tripTaken: 'Swiss Glacier Express Tour',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'The Swiss Glacier Express tour exceeded all expectations. The hotels were right beside the stations, our train seats had panoramic glass domes, and the 24/7 WhatsApp concierge was a lifesaver when our flight was delayed by weather.'
  },
  {
    id: 'test-3',
    name: 'Yuvraj Sharma',
    location: 'New Delhi, India',
    tripTaken: 'Kashmir Valley & Gulmarg Snow Expedition',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'Kashmir felt like stepping straight into a fairytale. The heritage houseboat on Dal Lake was like a living museum, and our guide made sure we had seamless gondola passes in Gulmarg. Travel Go took care of every tiny detail!'
  },
  {
    id: 'test-4',
    name: 'Alexander Becker',
    location: 'Berlin, Germany',
    tripTaken: 'Tokyo to Kyoto Odyssey',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    quote: 'This is my third trip with Travel Go (previously Bali and Dubai). Their local guides are certified experts, itineraries are never rushed, and the pricing is completely transparent. I will never book through anyone else.'
  }
];

// 6. FAQs
const FAQS = [
  {
    q: 'How does booking a trip with Travel Go work?',
    a: 'Select any of our handpicked packages or destinations, customize your travel dates and group size, review your quote, and submit your booking request. Our dedicated concierge confirms your hotels, private transfers, and excursions within 24 hours.'
  },
  {
    q: 'What is your cancellation and refund policy?',
    a: 'We understand travel plans can shift. Most of our curated packages offer 100% free cancellation up to 14 days before your departure date. We also provide comprehensive travel protection add-ons for peace of mind.'
  },
  {
    q: 'Do you help with international visas and entry requirements?',
    a: 'Yes! Once your booking is confirmed, our international concierge team provides comprehensive visa guidance, invitation letters, itinerary proofs, and checklist reviews specific to your passport nationality.'
  },
  {
    q: 'Can I customize an existing package or create a bespoke trip?',
    a: 'Absolutely. Every package shown on our platform can be tailored with extra nights, private villa upgrades, dietary preferences, or private guides. Use our contact form or live booking chat to request bespoke arrangements.'
  },
  {
    q: 'Are your customer support teams available 24/7 during our travels?',
    a: 'Yes, around the clock. Every traveler is assigned a dedicated WhatsApp and phone concierge manager who monitors your flights, assists with local reservations, and resolves any on-the-ground needs 24/7.'
  }
];

// --- WISHLIST STATE MANAGEMENT (LOCALSTORAGE) ---
let wishlist = ['bali', 'switzerland', 'pkg-maldives-romance'];
try {
  const saved = localStorage.getItem('travelgo_wishlist');
  if (saved) wishlist = JSON.parse(saved);
} catch (e) {}

function saveWishlist() {
  try {
    localStorage.setItem('travelgo_wishlist', JSON.stringify(wishlist));
  } catch (e) {}
  updateWishlistUI();
}

function toggleWishlist(id, name = 'Item') {
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(item => item !== id);
    showToast(`Removed "${name}" from your wishlist.`, 'info');
  } else {
    wishlist.push(id);
    showToast(`Added "${name}" to your saved wishlist! ❤️`, 'success');
  }
  saveWishlist();
  renderDestinations();
  renderPackages();
}

function updateWishlistUI() {
  const countEls = document.querySelectorAll('.wishlist-count-badge');
  countEls.forEach(el => {
    el.textContent = wishlist.length;
    el.style.display = wishlist.length > 0 ? 'inline-flex' : 'none';
  });
  renderWishlistDrawerItems();
}

// --- TOAST NOTIFICATION UTILITY ---
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-item';
  const icon = type === 'success' ? '✓' : 'ℹ';
  toast.innerHTML = `
    <span style="background: ${type === 'success' ? '#10b981' : '#0ea5e9'}; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold;">
      ${icon}
    </span>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// --- HERO SLIDER ---
let currentHeroSlide = 0;
const heroSlides = document.querySelectorAll('.hero-slider-bg');
const heroDots = document.querySelectorAll('.hero-dot');
let heroInterval = null;

function setHeroSlide(index) {
  if (heroSlides.length === 0) return;
  currentHeroSlide = (index + heroSlides.length) % heroSlides.length;

  heroSlides.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === currentHeroSlide);
  });
  heroDots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentHeroSlide);
  });
}

function startHeroAutoRotate() {
  if (heroInterval) clearInterval(heroInterval);
  heroInterval = setInterval(() => {
    setHeroSlide(currentHeroSlide + 1);
  }, 7000);
}

// --- RENDER DESTINATION CARDS ---
function renderDestinations() {
  const grid = document.getElementById('destinations-grid');
  if (!grid) return;

  grid.innerHTML = DESTINATIONS.map(dest => {
    const isSaved = wishlist.includes(dest.id);
    return `
      <div class="destination-card">
        <div class="destination-img-wrap">
          <img src="${dest.image}" alt="${dest.name}" class="destination-img" loading="lazy" />
          <div class="destination-img-overlay"></div>
          
          <div class="destination-badges">
            <span class="badge badge-primary">${dest.badge}</span>
          </div>

          <button class="wishlist-btn ${isSaved ? 'active' : ''}" onclick="toggleWishlist('${dest.id}', '${dest.name}')" title="Save to wishlist">
            ${isSaved ? '❤️' : '🤍'}
          </button>

          <div class="destination-price-tag">
            <div>
              <div class="price-tag-sub">Starting From</div>
              <div class="price-tag-amount">${formatCurrency(dest.startingPrice)}</div>
            </div>
            <div class="destination-rating-pill">
              ★ ${dest.rating}
            </div>
          </div>
        </div>

        <div class="destination-body">
          <div>
            <div class="destination-location">
              📍 ${dest.country} • ${dest.region}
            </div>
            <h3 class="destination-name">${dest.name}</h3>
            <p class="destination-desc">${dest.shortDesc}</p>
          </div>

          <div class="destination-footer">
            <span class="destination-duration">⏱ ${dest.duration}</span>
            <button class="btn btn-secondary" style="padding: 0.4rem 1rem; font-size: 0.75rem;" onclick="openDestinationModal('${dest.id}')">
              Explore More →
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// --- RENDER FEATURED PACKAGES ---
let activePackageCategory = 'All';
let maxPackageBudget = 4000;
let packageSearchQuery = '';

function renderPackages() {
  const grid = document.getElementById('packages-grid');
  if (!grid) return;

  const filtered = PACKAGES.filter(pkg => {
    const matchCat = activePackageCategory === 'All' || pkg.category.toLowerCase().includes(activePackageCategory.toLowerCase());
    const matchBudget = pkg.price <= maxPackageBudget;
    const matchSearch = !packageSearchQuery ||
      pkg.title.toLowerCase().includes(packageSearchQuery.toLowerCase()) ||
      pkg.destinationName.toLowerCase().includes(packageSearchQuery.toLowerCase());
    return matchCat && matchBudget && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: #ffffff; border-radius: 24px; border: 1px solid var(--slate-200);">
        <p style="font-size: 2rem;">🧭</p>
        <h3 style="font-weight: 800; font-size: 1.25rem; margin-top: 0.5rem;">No packages match your search</h3>
        <p style="color: var(--slate-500); font-size: 0.85rem; margin-top: 0.25rem;">Try adjusting your filters or search keywords.</p>
        <button class="btn btn-primary" style="margin-top: 1rem;" onclick="resetPackageFilters()">Reset Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(pkg => {
    const isSaved = wishlist.includes(pkg.id);
    return `
      <div class="package-card">
        <div class="package-img-wrap">
          <img src="${pkg.image}" alt="${pkg.title}" class="package-img" loading="lazy" />
          
          <div style="position: absolute; top: 1rem; left: 1rem;">
            <span class="badge badge-coral">${pkg.badge}</span>
          </div>

          <button class="wishlist-btn ${isSaved ? 'active' : ''}" onclick="toggleWishlist('${pkg.id}', '${pkg.title}')" title="Save package">
            ${isSaved ? '❤️' : '🤍'}
          </button>

          <div style="position: absolute; bottom: 1rem; left: 1rem; background: rgba(15,23,42,0.85); backdrop-filter: blur(6px); color: #ffffff; padding: 0.25rem 0.75rem; border-radius: 8px; font-size: 0.75rem; font-weight: 700;">
            ⏱ ${pkg.duration}
          </div>
        </div>

        <div class="package-body">
          <div>
            <div class="package-meta-header">
              <span class="package-dest-label">📍 ${pkg.destinationName}</span>
              <span class="package-rating">★ ${pkg.rating} <span style="color: var(--slate-400); font-weight: normal;">(${pkg.reviewCount})</span></span>
            </div>

            <h3 class="package-title">${pkg.title}</h3>
            <p style="font-size: 0.8rem; color: var(--slate-500); margin-top: 0.5rem; line-height: 1.5;">${pkg.shortDesc}</p>

            <div class="package-tags-wrap">
              ${pkg.tags.map(t => `<span class="package-tag-chip">${t}</span>`).join('')}
            </div>
          </div>

          <div>
            <div class="package-pricing-row">
              <div>
                <span style="font-size: 0.7rem; text-transform: uppercase; font-weight: 800; color: var(--slate-400); display: block;">Starting Price</span>
                <span class="package-amount">${formatCurrency(pkg.price)}</span>
                ${pkg.oldPrice ? `<span class="package-old-amount">${formatCurrency(pkg.oldPrice)}</span>` : ''}
              </div>
              <span style="font-size: 0.7rem; font-weight: 700; color: #10b981; background: #ecfdf5; padding: 0.25rem 0.5rem; border-radius: 6px;">
                Taxes Included
              </span>
            </div>

            <div class="package-btn-group">
              <button class="btn btn-secondary" onclick="openPackageModal('${pkg.id}')">View Details</button>
              <button class="btn btn-primary" onclick="openBookingModal('${pkg.id}', 'package')">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function resetPackageFilters() {
  activePackageCategory = 'All';
  maxPackageBudget = 4000;
  packageSearchQuery = '';
  const searchInput = document.getElementById('package-search-input');
  if (searchInput) searchInput.value = '';
  const budgetSlider = document.getElementById('package-budget-slider');
  if (budgetSlider) budgetSlider.value = 4000;
  const budgetLabel = document.getElementById('budget-val-label');
  if (budgetLabel) budgetLabel.textContent = formatCurrency(4000);
  
  document.querySelectorAll('.cat-filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.cat === 'All');
  });
  renderPackages();
}

// --- RENDER EXPERIENCES ---
function renderExperiences() {
  const grid = document.getElementById('experiences-grid');
  if (!grid) return;

  grid.innerHTML = EXPERIENCES.map(exp => `
    <div class="experience-card" onclick="filterByExperience('${exp.category}')">
      <img src="${exp.image}" alt="${exp.title}" class="experience-bg" loading="lazy" />
      <div class="experience-overlay"></div>
      <div class="experience-content">
        <span style="font-size: 0.75rem; font-weight: 800; color: #fbbf24; text-transform: uppercase; margin-bottom: 0.25rem;">
          ${exp.count}
        </span>
        <h3 class="experience-title">${exp.title}</h3>
        <p class="experience-tagline">${exp.tagline}</p>
        <span style="font-size: 0.8rem; font-weight: 700; color: var(--primary-300); margin-top: 0.75rem; display: flex; align-items: center; gap: 0.25rem;">
          Browse Packages →
        </span>
      </div>
    </div>
  `).join('');
}

function filterByExperience(cat) {
  activePackageCategory = cat;
  document.querySelectorAll('.cat-filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.cat === cat);
  });
  renderPackages();
  const pkgSection = document.getElementById('packages-section');
  if (pkgSection) pkgSection.scrollIntoView({ behavior: 'smooth' });
}

// --- RENDER BLOGS ---
function renderBlogs() {
  const grid = document.getElementById('blog-grid');
  if (!grid) return;

  grid.innerHTML = BLOGS.slice(0, 3).map(blog => `
    <div class="blog-card" onclick="openBlogModal('${blog.id}')">
      <div class="blog-img-wrap">
        <img src="${blog.image}" alt="${blog.title}" class="blog-img" loading="lazy" />
        <span class="badge badge-primary" style="position: absolute; top: 1rem; left: 1rem; background: rgba(255,255,255,0.95);">
          ${blog.category}
        </span>
      </div>
      <div class="blog-body">
        <div>
          <div class="blog-meta">${blog.date} • ${blog.readTime}</div>
          <h3 class="blog-title">${blog.title}</h3>
          <p class="blog-excerpt">${blog.excerpt}</p>
        </div>
        <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--slate-100); display: flex; justify-content: space-between; font-size: 0.8rem; font-weight: 700; color: var(--primary-600);">
          <span>By ${blog.author}</span>
          <span>Read Story →</span>
        </div>
      </div>
    </div>
  `).join('');
}

// --- RENDER TESTIMONIALS ---
function renderTestimonials() {
  const grid = document.getElementById('testimonials-grid');
  if (!grid) return;

  grid.innerHTML = TESTIMONIALS.map(t => `
    <div class="testimonial-card">
      <div>
        <div class="testimonial-stars">★★★★★</div>
        <p class="testimonial-quote">"${t.quote}"</p>
      </div>
      <div class="testimonial-author">
        <img src="${t.avatar}" alt="${t.name}" class="author-avatar" loading="lazy" />
        <div>
          <div class="author-name">${t.name}</div>
          <div class="author-loc">${t.location}</div>
          <div class="author-trip">${t.tripTaken}</div>
        </div>
      </div>
    </div>
  `).join('');
}

// --- RENDER FAQS ---
function renderFaqs() {
  const container = document.getElementById('faq-accordion');
  if (!container) return;

  container.innerHTML = FAQS.map((item, idx) => `
    <div style="background: #ffffff; border: 1px solid var(--slate-200); border-radius: 16px; margin-bottom: 0.75rem; overflow: hidden;">
      <button onclick="toggleFaq(${idx})" style="width: 100%; padding: 1.25rem; display: flex; justify-content: space-between; align-items: center; font-size: 0.95rem; font-weight: 800; color: var(--slate-900); text-align: left;">
        <span>${item.q}</span>
        <span id="faq-icon-${idx}" style="font-size: 1.25rem; color: var(--slate-400); transition: transform 0.2s;">+</span>
      </button>
      <div id="faq-content-${idx}" style="display: ${idx === 0 ? 'block' : 'none'}; padding: 0 1.25rem 1.25rem 1.25rem; font-size: 0.85rem; color: var(--slate-600); line-height: 1.6; border-top: 1px solid var(--slate-100);">
        ${item.a}
      </div>
    </div>
  `).join('');
}

function toggleFaq(idx) {
  const content = document.getElementById(`faq-content-${idx}`);
  const icon = document.getElementById(`faq-icon-${idx}`);
  if (!content || !icon) return;
  const isOpen = content.style.display === 'block';
  content.style.display = isOpen ? 'none' : 'block';
  icon.textContent = isOpen ? '+' : '−';
}

// --- MODALS (DESTINATION, PACKAGE, BLOG, WISHLIST, BOOKING) ---

// 1. Destination Details Modal
function openDestinationModal(destId) {
  const dest = DESTINATIONS.find(d => d.id === destId);
  if (!dest) return;

  const modal = document.getElementById('destination-modal');
  const body = document.getElementById('destination-modal-body');
  if (!modal || !body) return;

  body.innerHTML = `
    <div style="position: relative; height: 320px; border-radius: 20px; overflow: hidden; margin-bottom: 1.5rem;">
      <img id="dest-modal-main-img" src="${dest.image}" alt="${dest.name}" style="width: 100%; height: 100%; object-fit: cover;" />
      <div style="position: absolute; inset: 0; background: linear-gradient(180deg, transparent 40%, rgba(15,23,42,0.85) 100%);"></div>
      <div style="position: absolute; bottom: 1.5rem; left: 1.5rem; color: #ffffff;">
        <span class="badge badge-coral" style="margin-bottom: 0.5rem;">${dest.badge}</span>
        <h2 style="font-family: var(--font-serif); font-size: 2.25rem; font-weight: 800;">${dest.name}, ${dest.country}</h2>
        <p style="font-size: 0.85rem; color: var(--slate-200);">${dest.region} • ${dest.climate}</p>
      </div>
    </div>

    <!-- Gallery Thumbnails -->
    <div style="display: flex; gap: 0.5rem; margin-bottom: 1.5rem; overflow-x: auto; padding-bottom: 0.5rem;">
      ${dest.gallery.map(img => `
        <img src="${img}" style="width: 90px; height: 60px; object-fit: cover; border-radius: 10px; cursor: pointer;" onclick="document.getElementById('dest-modal-main-img').src='${img}'" />
      `).join('')}
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-size: 1.1rem; font-weight: 800; margin-bottom: 0.5rem;">Destination Overview</h4>
      <p style="font-size: 0.9rem; color: var(--slate-600); line-height: 1.6;">${dest.fullDesc}</p>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-size: 1.1rem; font-weight: 800; margin-bottom: 0.75rem;">Key Highlights & Top Sights</h4>
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        ${dest.highlights.map((h, i) => `
          <div style="display: flex; align-items: center; gap: 0.75rem; background: var(--slate-50); padding: 0.75rem 1rem; border-radius: 12px; font-size: 0.85rem; font-weight: 700;">
            <span style="color: var(--primary-600); font-size: 1rem;">✦</span>
            <span>${h}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <div style="background: var(--primary-50); border: 1px solid var(--primary-200); border-radius: 16px; padding: 1.25rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: gap: 1rem;">
      <div>
        <span style="font-size: 0.7rem; text-transform: uppercase; font-weight: 800; color: var(--primary-700);">Starting Price</span>
        <div style="font-size: 1.75rem; font-weight: 800; font-family: var(--font-display); color: var(--primary-900);">${formatCurrency(dest.startingPrice)} <span style="font-size: 0.8rem; font-weight: normal;">/ person</span></div>
        <div style="font-size: 0.75rem; color: var(--slate-500);">Best time: ${dest.bestSeason}</div>
      </div>
      <div style="display: flex; gap: 0.5rem;">
        <button class="btn btn-secondary" onclick="toggleWishlist('${dest.id}', '${dest.name}')">Save to Wishlist</button>
        <button class="btn btn-primary" onclick="closeAllModals(); openBookingModal('${dest.id}', 'destination')">Plan Trip to ${dest.name}</button>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

// 2. Package Details Modal
function openPackageModal(pkgId) {
  const pkg = PACKAGES.find(p => p.id === pkgId);
  if (!pkg) return;

  const modal = document.getElementById('package-modal');
  const body = document.getElementById('package-modal-body');
  if (!modal || !body) return;

  body.innerHTML = `
    <div style="position: relative; height: 260px; border-radius: 20px; overflow: hidden; margin-bottom: 1.5rem;">
      <img src="${pkg.image}" alt="${pkg.title}" style="width: 100%; height: 100%; object-fit: cover;" />
      <div style="position: absolute; inset: 0; background: linear-gradient(180deg, transparent 40%, rgba(15,23,42,0.85) 100%);"></div>
      <div style="position: absolute; bottom: 1.5rem; left: 1.5rem; color: #ffffff;">
        <span class="badge badge-coral" style="margin-bottom: 0.5rem;">${pkg.badge}</span>
        <h2 style="font-family: var(--font-serif); font-size: 1.85rem; font-weight: 800; line-height: 1.2;">${pkg.title}</h2>
        <p style="font-size: 0.85rem; color: var(--slate-200);">${pkg.destinationName} • ⏱ ${pkg.duration} • ★ ${pkg.rating}</p>
      </div>
    </div>

    <!-- Day-by-Day Itinerary -->
    <div style="margin-bottom: 2rem;">
      <h3 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 0.75rem;">Day-by-Day Itinerary</h3>
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        ${pkg.itinerary.map(item => `
          <div style="border: 1px solid var(--slate-200); border-radius: 12px; padding: 1rem; background: var(--slate-50);">
            <div style="display: flex; align-items: center; gap: 0.5rem; font-weight: 800; font-size: 0.9rem; color: var(--slate-900); margin-bottom: 0.25rem;">
              <span style="background: var(--primary-600); color: #ffffff; font-size: 0.7rem; padding: 0.15rem 0.4rem; border-radius: 4px;">Day ${item.day}</span>
              <span>${item.title}</span>
            </div>
            <p style="font-size: 0.8rem; color: var(--slate-600); line-height: 1.5;">${item.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Inclusions & Exclusions Side-by-Side -->
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem;">
      <div style="background: #ecfdf5; border: 1px solid #a7f3d0; padding: 1.25rem; border-radius: 16px;">
        <h4 style="font-size: 0.85rem; font-weight: 800; color: #065f46; text-transform: uppercase; margin-bottom: 0.5rem;">✓ Included</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.75rem; color: #064e3b;">
          ${pkg.inclusions.map(inc => `<li>• ${inc}</li>`).join('')}
        </ul>
      </div>

      <div style="background: #fff1f2; border: 1px solid #fecdd3; padding: 1.25rem; border-radius: 16px;">
        <h4 style="font-size: 0.85rem; font-weight: 800; color: #9f1239; text-transform: uppercase; margin-bottom: 0.5rem;">✕ Excluded</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.75rem; color: #881337;">
          ${pkg.exclusions.map(exc => `<li>• ${exc}</li>`).join('')}
        </ul>
      </div>
    </div>

    <!-- Bottom Pricing and Booking Action -->
    <div style="background: var(--slate-900); color: #ffffff; border-radius: 16px; padding: 1.25rem 1.5rem; display: flex; justify-content: space-between; align-items: center;">
      <div>
        <div style="font-size: 0.7rem; color: var(--slate-400); text-transform: uppercase;">Total Guaranteed Package Price</div>
        <div style="font-size: 1.75rem; font-weight: 800; font-family: var(--font-display); color: #38bdf8;">${formatCurrency(pkg.price)} <span style="font-size: 0.8rem; font-weight: normal; color: var(--slate-300);">/ person</span></div>
      </div>
      <button class="btn btn-coral" onclick="closeAllModals(); openBookingModal('${pkg.id}', 'package')">
        Book This Package Now
      </button>
    </div>
  `;

  modal.classList.add('active');
}

// 3. Blog Article Reader Modal
function openBlogModal(blogId) {
  const blog = BLOGS.find(b => b.id === blogId);
  if (!blog) return;

  const modal = document.getElementById('blog-modal');
  const body = document.getElementById('blog-modal-body');
  if (!modal || !body) return;

  body.innerHTML = `
    <div style="height: 260px; border-radius: 20px; overflow: hidden; margin-bottom: 1.5rem;">
      <img src="${blog.image}" alt="${blog.title}" style="width: 100%; height: 100%; object-fit: cover;" />
    </div>
    <div style="margin-bottom: 1rem;">
      <span class="badge badge-primary">${blog.category}</span>
      <div style="font-size: 0.8rem; color: var(--slate-400); margin-top: 0.5rem;">By ${blog.author} • ${blog.date} • ${blog.readTime}</div>
      <h2 style="font-family: var(--font-serif); font-size: 1.85rem; font-weight: 800; color: var(--slate-900); margin-top: 0.5rem; line-height: 1.3;">${blog.title}</h2>
    </div>
    <div style="font-size: 0.95rem; color: var(--slate-700); line-height: 1.8; white-space: pre-line; border-top: 1px solid var(--slate-200); padding-top: 1.5rem;">
      ${blog.content}
    </div>
  `;

  modal.classList.add('active');
}

// 4. Interactive Multi-Step Booking Modal
let bookingState = {
  step: 1,
  targetId: 'pkg-bali-escape',
  targetType: 'package',
  adults: 2,
  children: 0,
  travelDate: '2026-12-15',
  roomType: 'Deluxe Suite',
  addInsurance: true,
  addTransfer: true,
  promoDiscount: 0,
  promoCode: '',
  fullName: 'Yuvraj',
  email: 'yuvraj@example.com',
  phone: '',
  specialRequests: '',
  refId: ''
};

function openBookingModal(targetId, targetType = 'package') {
  bookingState.targetId = targetId;
  bookingState.targetType = targetType;
  bookingState.step = 1;
  bookingState.refId = 'TG-2026-' + Math.floor(1000 + Math.random() * 9000);
  bookingState.promoDiscount = 0;
  bookingState.promoCode = '';

  renderBookingStep();
  const modal = document.getElementById('booking-modal');
  if (modal) modal.classList.add('active');
}

function calculateBookingTotal() {
  let basePrice = 1000;
  if (bookingState.targetType === 'package') {
    const pkg = PACKAGES.find(p => p.id === bookingState.targetId);
    if (pkg) basePrice = pkg.price;
  } else {
    const dest = DESTINATIONS.find(d => d.id === bookingState.targetId);
    if (dest) basePrice = dest.startingPrice;
  }

  const guestsMultiplier = (bookingState.adults || 1) + (bookingState.children || 0) * 0.7;
  const baseCost = Math.round(basePrice * guestsMultiplier);
  const insuranceCost = bookingState.addInsurance ? 89 * (bookingState.adults + bookingState.children) : 0;
  const transferCost = bookingState.addTransfer ? 75 : 0;
  const subtotal = baseCost + insuranceCost + transferCost;
  const discountAmount = Math.round(subtotal * bookingState.promoDiscount);
  const finalTotal = subtotal - discountAmount;

  return { baseCost, insuranceCost, transferCost, discountAmount, finalTotal };
}

function renderBookingStep() {
  const container = document.getElementById('booking-modal-body');
  const stepIndicator = document.getElementById('booking-step-indicator');
  if (!container) return;

  let title = 'Travel Booking';
  if (bookingState.targetType === 'package') {
    const pkg = PACKAGES.find(p => p.id === bookingState.targetId);
    if (pkg) title = pkg.title;
  } else {
    const dest = DESTINATIONS.find(d => d.id === bookingState.targetId);
    if (dest) title = `Trip to ${dest.name}, ${dest.country}`;
  }

  if (stepIndicator) {
    stepIndicator.textContent = `Step ${bookingState.step} of 4 • ${title}`;
  }

  const { baseCost, insuranceCost, transferCost, discountAmount, finalTotal } = calculateBookingTotal();

  if (bookingState.step === 1) {
    container.innerHTML = `
      <h3 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 1rem;">1. Select Travel Date & Party Size</h3>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
        <div>
          <label style="font-size: 0.75rem; font-weight: 800; color: var(--slate-600); display: block; margin-bottom: 0.25rem;">Departure Date</label>
          <input type="date" value="${bookingState.travelDate}" onchange="bookingState.travelDate = this.value" style="width: 100%; padding: 0.75rem; border: 1px solid var(--slate-200); border-radius: 12px; font-size: 0.85rem;" />
        </div>
        <div>
          <label style="font-size: 0.75rem; font-weight: 800; color: var(--slate-600); display: block; margin-bottom: 0.25rem;">Room Category</label>
          <select onchange="bookingState.roomType = this.value" style="width: 100%; padding: 0.75rem; border: 1px solid var(--slate-200); border-radius: 12px; font-size: 0.85rem; cursor: pointer;">
            <option value="Deluxe Suite">Deluxe Suite (Included)</option>
            <option value="Overwater Ocean Villa">Overwater Ocean Villa (+Upgrade)</option>
            <option value="Executive Penthouse">Executive Penthouse (+Upgrade)</option>
          </select>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
        <div>
          <label style="font-size: 0.75rem; font-weight: 800; color: var(--slate-600); display: block; margin-bottom: 0.25rem;">Adults (Age 12+)</label>
          <input type="number" min="1" max="10" value="${bookingState.adults}" onchange="bookingState.adults = parseInt(this.value)||1; renderBookingStep();" style="width: 100%; padding: 0.75rem; border: 1px solid var(--slate-200); border-radius: 12px; font-size: 0.85rem;" />
        </div>
        <div>
          <label style="font-size: 0.75rem; font-weight: 800; color: var(--slate-600); display: block; margin-bottom: 0.25rem;">Children (Age 0-11)</label>
          <input type="number" min="0" max="8" value="${bookingState.children}" onchange="bookingState.children = parseInt(this.value)||0; renderBookingStep();" style="width: 100%; padding: 0.75rem; border: 1px solid var(--slate-200); border-radius: 12px; font-size: 0.85rem;" />
        </div>
      </div>

      <div style="background: var(--primary-50); border: 1px solid var(--primary-200); border-radius: 12px; padding: 1rem; display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
        <span style="font-size: 0.85rem; font-weight: 700; color: var(--primary-900);">Estimated Base Fare:</span>
        <span style="font-size: 1.25rem; font-weight: 800; color: var(--primary-700);">${formatCurrency(baseCost)}</span>
      </div>

      <button class="btn btn-primary" style="width: 100%; padding: 0.85rem;" onclick="bookingState.step = 2; renderBookingStep();">
        Continue to Traveler Details →
      </button>
    `;
  } else if (bookingState.step === 2) {
    container.innerHTML = `
      <h3 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 1rem;">2. Lead Traveler Information</h3>
      <div style="margin-bottom: 1rem;">
        <label style="font-size: 0.75rem; font-weight: 800; color: var(--slate-600); display: block; margin-bottom: 0.25rem;">Full Legal Name *</label>
        <input type="text" id="bk-name" placeholder="Yuvraj" value="${bookingState.fullName}" onchange="bookingState.fullName = this.value" style="width: 100%; padding: 0.75rem; border: 1px solid var(--slate-200); border-radius: 12px; font-size: 0.85rem;" />
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
        <div>
          <label style="font-size: 0.75rem; font-weight: 800; color: var(--slate-600); display: block; margin-bottom: 0.25rem;">Email Address *</label>
          <input type="email" id="bk-email" placeholder="yuvraj@example.com" value="${bookingState.email}" onchange="bookingState.email = this.value" style="width: 100%; padding: 0.75rem; border: 1px solid var(--slate-200); border-radius: 12px; font-size: 0.85rem;" />
        </div>
        <div>
          <label style="font-size: 0.75rem; font-weight: 800; color: var(--slate-600); display: block; margin-bottom: 0.25rem;">WhatsApp / Mobile *</label>
          <input type="tel" id="bk-phone" placeholder="+1 555-0192" value="${bookingState.phone}" onchange="bookingState.phone = this.value" style="width: 100%; padding: 0.75rem; border: 1px solid var(--slate-200); border-radius: 12px; font-size: 0.85rem;" />
        </div>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <label style="font-size: 0.75rem; font-weight: 800; color: var(--slate-600); display: block; margin-bottom: 0.25rem;">Special Requests (Dietary, Honeymoon Setup, etc.)</label>
        <textarea rows="2" placeholder="Tell our concierge any special requirements..." onchange="bookingState.specialRequests = this.value" style="width: 100%; padding: 0.75rem; border: 1px solid var(--slate-200); border-radius: 12px; font-size: 0.85rem;">${bookingState.specialRequests}</textarea>
      </div>

      <div style="display: flex; gap: 0.5rem;">
        <button class="btn btn-secondary" style="width: 35%;" onclick="bookingState.step = 1; renderBookingStep();">← Back</button>
        <button class="btn btn-primary" style="width: 65%;" onclick="validateStep2()">Continue to Add-ons →</button>
      </div>
    `;
  } else if (bookingState.step === 3) {
    container.innerHTML = `
      <h3 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 1rem;">3. Add-ons & Travel Protection</h3>
      
      <label style="display: flex; gap: 0.75rem; padding: 1rem; border: 1px solid var(--slate-200); border-radius: 12px; background: var(--slate-50); margin-bottom: 0.75rem; cursor: pointer;">
        <input type="checkbox" ${bookingState.addInsurance ? 'checked' : ''} onchange="bookingState.addInsurance = this.checked; renderBookingStep();" style="width: 18px; height: 18px; margin-top: 2px;" />
        <div>
          <div style="font-weight: 800; font-size: 0.85rem; color: var(--slate-900);">Comprehensive Medical & Cancellation Insurance (+${formatCurrency(89)} / guest)</div>
          <div style="font-size: 0.75rem; color: var(--slate-500); margin-top: 0.2rem;">Full refund guarantee in case of medical emergency or flight cancellation.</div>
        </div>
      </label>

      <label style="display: flex; gap: 0.75rem; padding: 1rem; border: 1px solid var(--slate-200); border-radius: 12px; background: var(--slate-50); margin-bottom: 1rem; cursor: pointer;">
        <input type="checkbox" ${bookingState.addTransfer ? 'checked' : ''} onchange="bookingState.addTransfer = this.checked; renderBookingStep();" style="width: 18px; height: 18px; margin-top: 2px;" />
        <div>
          <div style="font-weight: 800; font-size: 0.85rem; color: var(--slate-900);">Chauffeured Executive Airport Transfers (+${formatCurrency(75)})</div>
          <div style="font-size: 0.75rem; color: var(--slate-500); margin-top: 0.2rem;">Mercedes executive car waiting at arrival terminal with personal name signboard.</div>
        </div>
      </label>

      <div style="display: flex; gap: 0.5rem; margin-bottom: 1.5rem;">
        <input type="text" id="promo-input" placeholder="Promo code (e.g. TRAVELGO10)" value="${bookingState.promoCode}" style="flex: 1; padding: 0.75rem; border: 1px solid var(--slate-200); border-radius: 12px; font-size: 0.85rem; text-transform: uppercase;" />
        <button class="btn btn-secondary" onclick="applyPromo()">Apply</button>
      </div>

      <div style="display: flex; gap: 0.5rem;">
        <button class="btn btn-secondary" style="width: 35%;" onclick="bookingState.step = 2; renderBookingStep();">← Back</button>
        <button class="btn btn-primary" style="width: 65%;" onclick="bookingState.step = 4; renderBookingStep();">Review Quote →</button>
      </div>
    `;
  } else if (bookingState.step === 4) {
    container.innerHTML = `
      <div style="text-align: center; margin-bottom: 1.5rem;">
        <div style="font-size: 0.75rem; font-weight: 800; color: #10b981; text-transform: uppercase;">Step 4 of 4</div>
        <h3 style="font-family: var(--font-serif); font-size: 1.5rem; font-weight: 800;">Review & Confirm Your Trip</h3>
      </div>

      <div style="background: var(--slate-50); border: 1px solid var(--slate-200); border-radius: 16px; padding: 1.25rem; font-size: 0.85rem; display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1.5rem;">
        <div style="display: flex; justify-content: space-between;">
          <span style="color: var(--slate-500);">Trip:</span>
          <span style="font-weight: 800;">${title}</span>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <span style="color: var(--slate-500);">Guests:</span>
          <span style="font-weight: 700;">${bookingState.adults} Adults, ${bookingState.children} Children</span>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <span style="color: var(--slate-500);">Departure Date:</span>
          <span style="font-weight: 700;">${bookingState.travelDate}</span>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <span style="color: var(--slate-500);">Lead Traveler:</span>
          <span style="font-weight: 700;">${bookingState.fullName} (${bookingState.email})</span>
        </div>
        ${discountAmount > 0 ? `
          <div style="display: flex; justify-content: space-between; color: var(--coral-600); font-weight: 800;">
            <span>VIP Promo Discount (10%):</span>
            <span>-${formatCurrency(discountAmount)}</span>
          </div>
        ` : ''}
        <div style="border-top: 1px solid var(--slate-200); padding-top: 0.75rem; display: flex; justify-content: space-between; font-size: 1.15rem; font-weight: 800; color: var(--slate-900);">
          <span>Total Guaranteed Price:</span>
          <span style="color: var(--primary-600);">${formatCurrency(finalTotal)}</span>
        </div>
      </div>

      <button class="btn btn-coral" style="width: 100%; padding: 1rem; font-size: 1rem;" onclick="finalizeBooking()">
        Confirm Booking & Issue Voucher
      </button>
      <button style="display: block; width: 100%; text-align: center; font-size: 0.75rem; color: var(--slate-400); margin-top: 0.75rem; font-weight: 700;" onclick="bookingState.step = 3; renderBookingStep();">
        ← Make Changes to Add-ons
      </button>
    `;
  } else if (bookingState.step === 5) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2rem 1rem;">
        <div style="width: 64px; height: 64px; border-radius: 50%; background: #ecfdf5; color: #10b981; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 0 auto 1rem auto;">
          ✓
        </div>
        <h3 style="font-family: var(--font-serif); font-size: 1.75rem; font-weight: 800; margin-bottom: 0.5rem;">Booking Confirmed!</h3>
        <p style="font-size: 0.85rem; color: var(--slate-500); max-width: 420px; margin: 0 auto 1.5rem auto;">
          Thank you, <strong>${bookingState.fullName}</strong>! A digital confirmation voucher has been sent to <strong>${bookingState.email}</strong>.
        </p>

        <div style="background: var(--slate-900); color: #ffffff; padding: 1rem; border-radius: 12px; font-family: monospace; display: inline-block; margin-bottom: 1.5rem;">
          <div style="font-size: 0.7rem; color: var(--slate-400);">OFFICIAL REFERENCE CODE</div>
          <div style="font-size: 1.25rem; font-weight: bold; color: #fbbf24;">${bookingState.refId}</div>
        </div>

        <div>
          <button class="btn btn-primary" onclick="closeAllModals()">Return to Website</button>
        </div>
      </div>
    `;
  }
}

function validateStep2() {
  const nameInput = document.getElementById('bk-name');
  const emailInput = document.getElementById('bk-email');
  if (nameInput) bookingState.fullName = nameInput.value.trim();
  if (emailInput) bookingState.email = emailInput.value.trim();

  if (!bookingState.fullName || !bookingState.email) {
    showToast('Please enter your full name and valid email address.', 'info');
    return;
  }
  bookingState.step = 3;
  renderBookingStep();
}

function applyPromo() {
  const input = document.getElementById('promo-input');
  if (!input) return;
  const code = input.value.trim().toUpperCase();
  if (code === 'TRAVELGO10' || code === 'EXPLORE10') {
    bookingState.promoCode = code;
    bookingState.promoDiscount = 0.1;
    showToast('10% VIP Promotional Discount Applied! 🎉', 'success');
  } else {
    showToast('Invalid promo code. Try "TRAVELGO10".', 'info');
  }
  renderBookingStep();
}

function finalizeBooking() {
  bookingState.step = 5;
  renderBookingStep();
  showToast(`Booking Successful! Ref: ${bookingState.refId}`, 'success');
}

// 5. Wishlist Drawer Content
function renderWishlistDrawerItems() {
  const container = document.getElementById('wishlist-drawer-items');
  if (!container) return;

  const savedPkgs = PACKAGES.filter(p => wishlist.includes(p.id));
  const savedDests = DESTINATIONS.filter(d => wishlist.includes(d.id));

  if (savedPkgs.length === 0 && savedDests.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--slate-400);">
        <p style="font-size: 2.5rem; margin-bottom: 0.5rem;">🤍</p>
        <p style="font-weight: 700;">Your wishlist is currently empty</p>
        <p style="font-size: 0.8rem; margin-top: 0.25rem;">Click the heart icon on any trip or destination to save it here.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      ${savedPkgs.map(pkg => `
        <div style="display: flex; gap: 0.75rem; background: var(--slate-50); padding: 0.75rem; border-radius: 12px; border: 1px solid var(--slate-200); align-items: center;">
          <img src="${pkg.image}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;" />
          <div style="flex: 1; min-width: 0;">
            <div style="font-size: 0.65rem; font-weight: 800; color: var(--primary-600); text-transform: uppercase;">Package</div>
            <div style="font-size: 0.85rem; font-weight: 800; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${pkg.title}</div>
            <div style="font-size: 0.8rem; font-weight: 800; color: var(--slate-900);">${formatCurrency(pkg.price)}</div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 0.25rem;">
            <button class="btn btn-primary" style="padding: 0.35rem 0.65rem; font-size: 0.7rem;" onclick="closeAllModals(); openBookingModal('${pkg.id}', 'package')">Book</button>
            <button style="font-size: 0.7rem; color: var(--slate-400);" onclick="toggleWishlist('${pkg.id}', '${pkg.title}')">Remove</button>
          </div>
        </div>
      `).join('')}

      ${savedDests.map(dest => `
        <div style="display: flex; gap: 0.75rem; background: var(--slate-50); padding: 0.75rem; border-radius: 12px; border: 1px solid var(--slate-200); align-items: center;">
          <img src="${dest.image}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;" />
          <div style="flex: 1; min-width: 0;">
            <div style="font-size: 0.65rem; font-weight: 800; color: #0284c7; text-transform: uppercase;">Destination</div>
            <div style="font-size: 0.85rem; font-weight: 800; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${dest.name}, ${dest.country}</div>
            <div style="font-size: 0.8rem; font-weight: 800; color: var(--slate-900);">From ${formatCurrency(dest.startingPrice)}</div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 0.25rem;">
            <button class="btn btn-secondary" style="padding: 0.35rem 0.65rem; font-size: 0.7rem;" onclick="closeAllModals(); openDestinationModal('${dest.id}')">View</button>
            <button style="font-size: 0.7rem; color: var(--slate-400);" onclick="toggleWishlist('${dest.id}', '${dest.name}')">Remove</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function openWishlistDrawer() {
  renderWishlistDrawerItems();
  const drawer = document.getElementById('wishlist-drawer');
  if (drawer) drawer.classList.add('active');
}

function closeAllModals() {
  document.querySelectorAll('.modal-backdrop, .drawer-backdrop').forEach(el => {
    el.classList.remove('active');
  });
}

// --- DOM READY INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initial Renderings
  renderDestinations();
  renderPackages();
  renderExperiences();
  renderBlogs();
  renderTestimonials();
  renderFaqs();
  updateWishlistUI();

  // 2. Start Hero Slide Auto-Rotation
  startHeroAutoRotate();

  // 3. Currency Selector Listener
  const currencySelects = document.querySelectorAll('.currency-select');
  currencySelects.forEach(select => {
    select.addEventListener('change', (e) => {
      currentCurrency = e.target.value;
      currencySelects.forEach(s => s.value = currentCurrency);
      showToast(`Currency changed to ${currentCurrency}`, 'info');
      renderDestinations();
      renderPackages();
      renderWishlistDrawerItems();
    });
  });

  // 4. Mobile Menu Drawer Toggle
  const hamburger = document.getElementById('hamburger-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  if (hamburger && mobileDrawer) {
    hamburger.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });
  }

  // 5. Hero Search Form Listener
  const heroSearchForm = document.getElementById('hero-search-form');
  if (heroSearchForm) {
    heroSearchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const destInput = document.getElementById('hero-dest-input');
      if (destInput && destInput.value.trim()) {
        packageSearchQuery = destInput.value.trim();
        const pkgInput = document.getElementById('package-search-input');
        if (pkgInput) pkgInput.value = packageSearchQuery;
      }
      renderPackages();
      const packagesSection = document.getElementById('packages-section');
      if (packagesSection) packagesSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // 6. Packages Budget Range Slider
  const budgetSlider = document.getElementById('package-budget-slider');
  const budgetLabel = document.getElementById('budget-val-label');
  if (budgetSlider && budgetLabel) {
    budgetSlider.addEventListener('input', (e) => {
      maxPackageBudget = Number(e.target.value);
      budgetLabel.textContent = formatCurrency(maxPackageBudget);
      renderPackages();
    });
  }

  // 7. Packages Keyword Search Input
  const pkgSearchInput = document.getElementById('package-search-input');
  if (pkgSearchInput) {
    pkgSearchInput.addEventListener('input', (e) => {
      packageSearchQuery = e.target.value;
      renderPackages();
    });
  }

  // 8. Category Filter Buttons
  document.querySelectorAll('.cat-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cat-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activePackageCategory = btn.dataset.cat || 'All';
      renderPackages();
    });
  });

  // 9. Contact Form Validation & Submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('c-name').value.trim();
      const email = document.getElementById('c-email').value.trim();
      const msg = document.getElementById('c-msg').value.trim();

      if (!name || !email || !msg) {
        showToast('Please fill out all required fields.', 'info');
        return;
      }

      showToast(`Thank you, ${name}! Your inquiry was sent to our 24/7 concierge.`, 'success');
      contactForm.reset();
    });
  }

  // 10. Newsletter Form
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletter-email');
      if (emailInput && emailInput.value.includes('@')) {
        showToast(`Subscribed! Check ${emailInput.value} for your $100 travel credit voucher. ✈️`, 'success');
        newsletterForm.reset();
      } else {
        showToast('Please enter a valid email address.', 'info');
      }
    });
  }

  // 11. Modal Backdrop Click to Close
  document.querySelectorAll('.modal-backdrop, .drawer-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeAllModals();
      }
    });
  });
});
