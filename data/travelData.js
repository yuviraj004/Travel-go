// Travel Go - Global Travel Data Source
window.TRAVEL_DATA = {
  currencies: {
    USD: { code: 'USD', symbol: '$', rate: 1.0, label: 'USD ($)' },
    EUR: { code: 'EUR', symbol: '€', rate: 0.92, label: 'EUR (€)' },
    GBP: { code: 'GBP', symbol: '£', rate: 0.79, label: 'GBP (£)' },
    INR: { code: 'INR', symbol: '₹', rate: 83.5, label: 'INR (₹)' }
  },

  brand: {
    name: 'Travel Go',
    tagline: 'Explore the World',
    phone: '+1 (800) 872-8354',
    email: 'concierge@travelgo.com',
    emergencyHotline: '+1 (800) 911-GO-TRIP (24/7 Global)',
    headquarters: '750 Fifth Avenue, Suite 2800, New York, NY 10019',
    socials: {
      instagram: 'https://instagram.com/travelgo',
      youtube: 'https://youtube.com/travelgo',
      facebook: 'https://facebook.com/travelgo',
      twitter: 'https://twitter.com/travelgo',
      pinterest: 'https://pinterest.com/travelgo'
    }
  },

  heroSlides: [
    {
      title: "Discover the World, One Journey at a Time",
      subtitle: "Your next adventure is waiting. Explore breathtaking destinations, discover unique experiences, and create memories that last forever.",
      location: "Bora Bora & South Pacific",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85",
      tag: "Trending Luxury"
    },
    {
      title: "Majestic Alpine Summits & Emerald Lakes",
      subtitle: "Traverse high-altitude glaciers, panoramic cogwheel railways, and idyllic chalet retreats in the Swiss Alps.",
      location: "Zermatt, Switzerland",
      image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=2000&q=85",
      tag: "Mountain Expedition"
    },
    {
      title: "Ancient Temples & Tropical Horizons",
      subtitle: "Immerse yourself in sacred Balinese water temples, emerald rice terraces, and sunset ocean clifftops.",
      location: "Uluwatu, Bali, Indonesia",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=2000&q=85",
      tag: "Exotic Escape"
    },
    {
      title: "City of Lights, Gastronomy & Timeless Elegance",
      subtitle: "Stroll along the Seine, marvel at haute couture, and dine under the golden glow of the Eiffel Tower.",
      location: "Paris, France",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=2000&q=85",
      tag: "Romantic Getaway"
    }
  ],

  destinations: [
    {
      id: 'bali',
      name: 'Bali',
      country: 'Indonesia',
      tagline: 'Island of the Gods, Sacred Temples & Tropical Serenity',
      category: 'Beach Holidays',
      rating: 4.9,
      reviewCount: 384,
      priceFrom: 899,
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=800&q=80'
      ],
      bestTimeToVisit: 'April to October',
      idealDuration: '7 - 10 Days',
      weather: '28°C Tropical Warmth',
      overview: 'Bali is an enchanting tapestry of terraced emerald rice fields, dramatic coastal cliffs, sacred Hindu sanctuaries, and world-class surf breaks. From spiritual retreats in Ubud to sunset beach clubs in Seminyak and clifftop sunsets at Uluwatu, Bali delivers an unforgettable sensory escape.',
      highlights: [
        'Sunrise trek atop Mount Batur volcano followed by natural hot springs',
        'Private purification ritual at Tirta Empul water temple',
        'Sunset cocktails overlooking the clifftop temple at Uluwatu',
        'Luxury jungle villa stay with private infinity plunge pool in Ubud'
      ],
      topAttractions: [
        { name: 'Tegallalang Rice Terraces', desc: 'Cascading verdant valley with traditional Subak irrigation systems and giant jungle swings.' },
        { name: 'Uluwatu Temple', desc: 'Perched 70 meters above roaring Indian Ocean waves with nightly Kecak fire dance shows.' },
        { name: 'Nusa Penida & Kelingking Beach', desc: 'Famous T-Rex cliff formation and crystal-clear manta ray dive sites.' },
        { name: 'Seminyak Coastal Strip', desc: 'Celebrated international gastronomy, bohemian boutiques, and beach lounges.' }
      ],
      localTips: [
        'Dress respectfully with a sarong when entering Balinese temple grounds.',
        'Rent a private car with an English-speaking driver for seamless day trips across Ubud.',
        'Carry local cash (IDR) for traditional markets and artisan craft stalls.'
      ]
    },
    {
      id: 'paris',
      name: 'Paris',
      country: 'France',
      tagline: 'The City of Lights, Haute Couture & Architectural Splendor',
      category: 'Romantic Getaways',
      rating: 4.8,
      reviewCount: 512,
      priceFrom: 1850,
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1520939817895-060bdef4ad1b?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800&q=80'
      ],
      bestTimeToVisit: 'May to September',
      idealDuration: '6 - 8 Days',
      weather: '22°C Pleasant Sun',
      overview: 'Paris captivates the soul with its grand Haussmann boulevards, Michelin-starred bistros, timeless masterworks in the Louvre, and moonlit Seine riverbanks. Whether you are savoring warm croissants in Montmartre or admiring haute couture along Avenue Montaigne, Paris is pure poetry.',
      highlights: [
        'VIP skip-the-line elevator access to the Eiffel Tower summit with champagne',
        'Private evening yacht cruise down the River Seine with live jazz',
        'Curated food & wine tour through historic Le Marais and Saint-Germain',
        'Exclusive early-access tour of the Palace of Versailles Hall of Mirrors'
      ],
      topAttractions: [
        { name: 'The Eiffel Tower & Champ de Mars', desc: 'The quintessential symbol of Paris offering panoramic 360° city panoramas.' },
        { name: 'Louvre Museum', desc: 'The world\'s grandest art palace housing Mona Lisa, Venus de Milo, and Winged Victory.' },
        { name: 'Montmartre & Sacré-Cœur', desc: 'Bohemian hilltop quarter of historic painters overlooking the Paris skyline.' },
        { name: 'Musée d\'Orsay', desc: 'Historic Beaux-Arts railway station showcasing iconic Impressionist masterworks.' }
      ],
      localTips: [
        'Greet shopkeepers with a polite "Bonjour" when entering; it opens every door.',
        'Use the Paris Metro; it is quick, clean, and reaches every hidden corner of the city.',
        'Book museum time slots 3 to 4 weeks ahead during peak summer months.'
      ]
    },
    {
      id: 'switzerland',
      name: 'Switzerland',
      country: 'Switzerland',
      tagline: 'Alpine Summits, Emerald Glacial Lakes & Scenic Railways',
      category: 'Mountain Adventures',
      rating: 4.95,
      reviewCount: 429,
      priceFrom: 2250,
      image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1571401835393-8c5f35328320?auto=format&fit=crop&w=800&q=80'
      ],
      bestTimeToVisit: 'Year-Round (June-Sept for hiking / Dec-March for skiing)',
      idealDuration: '7 - 10 Days',
      weather: '18°C Alpine Crisp',
      overview: 'Switzerland is a pristine paradise of snow-draped alpine peaks, crystal-clear glacial lakes, and immaculate storybook villages. Journey aboard the world-famous Glacier Express, explore the flower-filled meadows of Grindelwald, and marvel at the colossal Matterhorn.',
      highlights: [
        'Glacier Express 1st class panoramic rail journey through Swiss mountain passes',
        'Cable car ride to the "Top of Europe" at Jungfraujoch (3,454m elevation)',
        'Private boat cruise across Lake Geneva and Lake Lucerne beneath mountain shadows',
        'Traditional Swiss cheese fondue tasting and luxury chocolate workshop in Zurich'
      ],
      topAttractions: [
        { name: 'The Matterhorn & Zermatt', desc: 'The iconic pyramid-shaped mountain peak surrounded by car-free luxury alpine chalets.' },
        { name: 'Lauterbrunnen Valley', desc: 'Fairytale valley boasting 72 plunging waterfalls and dramatic limestone cliffs.' },
        { name: 'Lake Lucerne & Chapel Bridge', desc: 'Historic wooden bridge adorned with 17th-century paintings over glacial blue waters.' },
        { name: 'Interlaken & Jungfrau Region', desc: 'Adventure capital for skydiving, paragliding, and high-altitude glacier walks.' }
      ],
      localTips: [
        'Get the Swiss Travel Pass for unlimited rides on trains, boats, buses, and 500+ museums.',
        'Tap water from public fountains in Swiss towns is naturally filtered and purest in Europe.',
        'Pack layers even in summer; mountain summits can drop to near freezing within minutes.'
      ]
    },
    {
      id: 'dubai',
      name: 'Dubai',
      country: 'United Arab Emirates',
      tagline: 'Futuristic Architectural Marvels, Desert Glamour & Ultra-Luxury',
      category: 'Luxury Escapes',
      rating: 4.85,
      reviewCount: 468,
      priceFrom: 1150,
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=800&q=80'
      ],
      bestTimeToVisit: 'November to April',
      idealDuration: '5 - 7 Days',
      weather: '26°C Sun & Desert Breeze',
      overview: 'Dubai rises out of the golden Arabian Desert as a dazzling oasis of architectural wonders, hyper-luxury shopping, Michelin dining, and breathtaking coastal glamour. From the heights of Burj Khalifa to private yacht cruises in Dubai Marina and red-dune desert safaris, Dubai is pure spectacle.',
      highlights: [
        'Burj Khalifa Level 148 "At The Top SKY" lounge access with private terrace',
        'Luxury desert safari with 4x4 dune bashing, falconry, and stargazing feast',
        'Private catamaran cruise around Palm Jumeirah and the iconic Atlantis',
        'Helicopter flight offering dramatic aerial views of the World Islands and skyline'
      ],
      topAttractions: [
        { name: 'Burj Khalifa', desc: 'The world\'s tallest human-made architectural marvel standing at an astronomical 828 meters.' },
        { name: 'Palm Jumeirah', desc: 'Monumental tree-shaped artificial island filled with five-star resorts and beach clubs.' },
        { name: 'Museum of the Future', desc: 'Visionary torus-shaped engineering triumph showcasing futuristic human innovations.' },
        { name: 'Dubai Mall & Fountain Show', desc: 'World\'s premier shopping haven featuring dancing fountains choreographed to light and music.' }
      ],
      localTips: [
        'Dress modestly in government buildings, heritage districts, and mosques.',
        'Use the driverless Dubai Metro Red Line for easy transport between downtown and the marina.',
        'Book dinner reservations at rooftop lounges like Atmosphere or Ce La Vi well in advance.'
      ]
    },
    {
      id: 'maldives',
      name: 'Maldives',
      country: 'Republic of Maldives',
      tagline: 'Overwater Luxury Villas, Turquoise Lagoons & Pristine Atolls',
      category: 'Beach Holidays',
      rating: 4.98,
      reviewCount: 310,
      priceFrom: 2800,
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80'
      ],
      bestTimeToVisit: 'November to April',
      idealDuration: '5 - 7 Days',
      weather: '29°C Tropical Sunshine',
      overview: 'The Maldives is the ultimate archetype of island romance and barefoot luxury. Nestled in the warm waters of the Indian Ocean, its coral atolls offer private overwater villas, underwater restaurants, vivid coral gardens, and private sandbank escapes surrounded by endless shades of blue.',
      highlights: [
        'Overwater pool villa with direct glass-floor lagoon views and slide into the ocean',
        'Six-course gourmet dinner five meters below sea level at an all-glass underwater restaurant',
        'Snorkeling expedition with gentle whale sharks and manta rays in Baa Atoll',
        'Private castaway sunset picnic on an uninhabited powder-white sandbank'
      ],
      topAttractions: [
        { name: 'Baa Atoll Biosphere Reserve', desc: 'UNESCO marine reserve renowned for massive gatherings of manta rays and whale sharks.' },
        { name: 'Overwater Lagoon Villas', desc: 'World-famous iconic bungalows with private decks, hammocks, and infinity pools.' },
        { name: 'Vaadhoo Island "Sea of Stars"', desc: 'Bioluminescent phytoplankton turning night waves into an otherworldly glowing blue marvel.' },
        { name: 'Ari Atoll Coral Gardens', desc: 'World-class diving sites teeming with sea turtles, reef sharks, and vivid coral.' }
      ],
      localTips: [
        'Seaplane transfers only operate during daylight hours; schedule international arrivals before 3:00 PM.',
        'Resort islands are private and exempt from strict alcohol regulations found on local islands.',
        'Reef-safe sunscreen is essential to protect delicate coral ecosystems.'
      ]
    },
    {
      id: 'tokyo',
      name: 'Tokyo',
      country: 'Japan',
      tagline: 'Neon Metropolis, Ancient Shinto Shrines & Culinary Perfection',
      category: 'Cultural Exploration',
      rating: 4.92,
      reviewCount: 620,
      priceFrom: 2400,
      image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80'
      ],
      bestTimeToVisit: 'March to May (Sakura) & September to November (Autumn leaves)',
      idealDuration: '8 - 12 Days',
      weather: '19°C Mild & Crisp',
      overview: 'Tokyo is an electrifying collision of ultramodern cyber-culture and tranquil spiritual serenity. From buzzing neon intersections in Shibuya and robot cafes in Shinjuku to centuries-old cedar forests of Meiji Jingu and the sublime craft of sushi masters, Tokyo is endlessly fascinating.',
      highlights: [
        'Omakase sushi masterclass and Tsukiji Outer Market culinary tasting',
        'Guided night photography walk through the neon-drenched alleyways of Shinjuku',
        'Fast Shinkansen bullet train day-trip to Mount Fuji and Lake Kawaguchiko',
        'Traditional matcha tea ceremony in an authentic Zen garden in Asakusa'
      ],
      topAttractions: [
        { name: 'Senso-ji Temple & Asakusa', desc: 'Tokyo\'s oldest and most venerated Buddhist temple flanked by traditional Nakamise street stalls.' },
        { name: 'Shibuya Crossing', desc: 'The world\'s most famous scrambled crosswalk pulsating with kinetic energy and giant screens.' },
        { name: 'Meiji Jingu Shrine', desc: 'Tranquil Shinto shrine nestled inside a 170-acre evergreen forest in central Tokyo.' },
        { name: 'teamLab Borderless', desc: 'Mind-bending interactive digital art museum without borders or boundaries.' }
      ],
      localTips: [
        'Pick up a digital Welcome Suica / Pasmo transit card on your phone for all trains and vending machines.',
        'Tipping is not customary in Japan and can cause confusion; politeness is the greatest reward.',
        'Pocket Wi-Fi or e-SIM is indispensable for navigating subway lines and translating menus.'
      ]
    },
    {
      id: 'manali',
      name: 'Manali',
      country: 'India',
      tagline: 'Snow-Clad Himalayan Peaks, Pine Forests & Thrilling High Valleys',
      category: 'Mountain Adventures',
      rating: 4.88,
      reviewCount: 342,
      priceFrom: 499,
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1617868186716-1f3eb1202867?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80'
      ],
      bestTimeToVisit: 'October to June (Snow: Dec-Feb, Pleasant: Mar-June)',
      idealDuration: '5 - 7 Days',
      weather: '14°C Cool Alpine',
      overview: 'Perched in the lap of the majestic Himalayas in Himachal Pradesh, Manali is a playground for adventurers and nature lovers alike. Surrounded by deodar cedar woods, apple orchards, and snow-capped peaks, Manali blends bohemian cafe culture in Old Manali with high-octane mountain sports in Solang Valley.',
      highlights: [
        'Rohtang Pass high-altitude expedition at 3,978 meters with panoramic glacier views',
        'Paragliding over Solang Valley with views of Pir Panjal mountain range',
        'Riverside stay in wooden pine cottages beside the roaring Beas River',
        'Boutique cafe hopping and live acoustic music sessions in Old Manali'
      ],
      topAttractions: [
        { name: 'Solang Valley', desc: 'Adventure hub for skiing, zorbing, snow-scooter rides, and paragliding.' },
        { name: 'Hadimba Devi Temple', desc: 'Unique 16th-century four-tiered wooden pagoda temple set within deep Dhungiri pine forests.' },
        { name: 'Atal Tunnel & Sissu, Lahaul', desc: 'Architectural wonder leading through the mountain to the stark, magical landscapes of Lahaul.' },
        { name: 'Jogini Waterfalls', desc: 'Scenic mountain trek through orchards leading to cascading cold mountain waters.' }
      ],
      localTips: [
        'Obtain Rohtang Pass permits in advance as daily vehicle entries are regulated by authorities.',
        'Try local Himachali cuisine such as Siddu with clarified ghee and fresh river trout.',
        'Carry thermal innerwear even in summer months for late-night mountain chills.'
      ]
    },
    {
      id: 'kashmir',
      name: 'Kashmir',
      country: 'India',
      tagline: 'Paradise on Earth, Serene Shikara Rides & Meadow of Flowers',
      category: 'Romantic Getaways',
      rating: 4.96,
      reviewCount: 395,
      priceFrom: 620,
      image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80'
      ],
      bestTimeToVisit: 'March to November (Tulip season: April / Snow in Gulmarg: Dec-Feb)',
      idealDuration: '6 - 8 Days',
      weather: '16°C Fresh Mountain Air',
      overview: 'Renowned historically as "Paradise on Earth," the Kashmir Valley is framed by dramatic snow-capped Pir Panjal peaks, shimmering Dal Lake adorned with carved cedar houseboats, and boundless alpine meadows blanketed with wildflowers in spring and pristine powder snow in winter.',
      highlights: [
        'Stay aboard a luxury carved heritage cedar wood houseboat on Dal Lake',
        'Sunset Shikara ride through floating vegetable markets and lotus gardens',
        'Gulmarg Gondola cable car ride to Apharwat Peak (Phase 2 at 13,780 feet)',
        'Traditional Wazwan multi-course royal feast with saffron Kahwa tea'
      ],
      topAttractions: [
        { name: 'Dal Lake & Nigeen Lake', desc: 'Heart of Srinagar featuring floating markets, ornate shikaras, and tranquil reflections.' },
        { name: 'Gulmarg (Meadow of Flowers)', desc: 'Premier winter skiing destination boasting one of the world\'s highest operating cable cars.' },
        { name: 'Pahalgam (Valley of Shepherds)', desc: 'Pristine pine-clad valley through which the rushing Lidder river flows gently.' },
        { name: 'Sonamarg (Meadow of Gold)', desc: 'Gateway to Thajiwas Glacier and basecamp for dramatic high-altitude treks.' }
      ],
      localTips: [
        'Always negotiate Shikara ride prices beforehand based on standard government rates.',
        'Purchase authentic GI-tagged Kashmiri saffron and hand-woven Pashmina shawls from authorized state emporiums.',
        'Sip hot saffron and almond Kahwa to keep warm during brisk morning lake strolls.'
      ]
    }
  ],

  packages: [
    {
      id: 'pkg-bali-escape',
      title: 'Bali Tropical Bliss & Ubud Rainforest Sanctuary',
      destinationId: 'bali',
      destinationName: 'Bali',
      country: 'Indonesia',
      duration: '7 Days / 6 Nights',
      days: 7,
      nights: 6,
      price: 899,
      rating: 4.9,
      reviewCount: 142,
      tag: 'Bestseller',
      travelStyle: 'Beach Holidays',
      heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
      shortDesc: 'A transcendent journey blending luxury private pool villas in Ubud with the chic beach clubs and sunset clifftop temples of Seminyak and Uluwatu.',
      inclusions: [
        '3 Nights Private Jungle Pool Villa in Ubud',
        '3 Nights 5-Star Oceanfront Resort in Seminyak',
        'Daily Gourmet Buffet Breakfast & 2 Fine Dinners',
        'Private Chauffeur & English-Speaking Tour Guide',
        'Uluwatu Clifftop Sunset & Kecak Dance Tickets',
        'Mount Batur Sunrise Jeep Tour with Breakfast',
        'Airport Transfers via Luxury Private Van'
      ],
      exclusions: [
        'International Airline Flights',
        'Personal Souvenirs & Discretionary Spa Treatments',
        'Visa On Arrival Fees (where applicable)'
      ],
      itinerary: [
        { day: 1, title: 'Arrival in Denpasar & Ubud Villa Check-in', desc: 'Private VIP greeting at Ngurah Rai airport. Transfer to Ubud jungle sanctuary with welcome flower garland and relaxing Balinese herbal massage.' },
        { day: 2, title: 'Tegallalang Terraces & Sacred Water Blessing', desc: 'Marvel at cascading rice terraces, take the iconic jungle swing, and participate in a meaningful spiritual cleansing ceremony at Tirta Empul.' },
        { day: 3, title: 'Mount Batur Sunrise & Hot Springs', desc: 'Early morning 4x4 Jeep ride to witness the golden sunrise over Mount Batur, followed by a soak in lakeside volcanic hot springs.' },
        { day: 4, title: 'Scenic Transfer to Seminyak & Beach Sunset', desc: 'Travel down to coastal Seminyak. Check in to your luxury beachside suite and savor cocktails at a private beachfront cabana.' },
        { day: 5, title: 'Nusa Penida Island Day Cruise', desc: 'Speedboat excursion to Nusa Penida to photograph the world-famous Kelingking T-Rex cliff and swim with manta rays at Crystal Bay.' },
        { day: 6, title: 'Uluwatu Clifftop Temple & Farewell Seafood Feast', desc: 'Visit the dramatic Uluwatu temple 70m above the ocean, watch the hypnotic Kecak fire performance, and feast on candlelit Jimbaran grilled seafood.' },
        { day: 7, title: 'Artisan Market Shopping & Departure', desc: 'Enjoy a leisurely breakfast, browse local art boutiques for handcrafted souvenirs, and transfer to airport for departure.' }
      ]
    },
    {
      id: 'pkg-paris-romance',
      title: 'Parisian Elegance, Art & French Riviera Romance',
      destinationId: 'paris',
      destinationName: 'Paris',
      country: 'France',
      duration: '8 Days / 7 Nights',
      days: 8,
      nights: 7,
      price: 1850,
      rating: 4.88,
      reviewCount: 98,
      tag: 'Romantic Pick',
      travelStyle: 'Romantic Getaways',
      heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
      shortDesc: 'Experience the magic of Paris: Eiffel Tower summit champagne, Louvre private tour, Saint-Germain gourmet tastings, and Versailles palace splendor.',
      inclusions: [
        '4 Nights Boutique Luxury Hotel in Saint-Germain-des-Prés',
        '3 Nights Heritage Chateau Stay near Versailles',
        'VIP Skip-the-Line Eiffel Tower Summit Tickets with Champagne',
        'Louvre & Musée d\'Orsay Guided Private Art Curator Tour',
        'Private Seine River Sunset Jazz Cruise',
        'Daily French Breakfast with Fresh Croissants & Café',
        'First-Class High-Speed TGV Train Passes'
      ],
      exclusions: [
        'Transatlantic Airfare',
        'Lunches and Alcoholic Drinks beyond specified tastings',
        'City tourist tax payable at check-in'
      ],
      itinerary: [
        { day: 1, title: 'Bienvenue à Paris & Seine River Welcome Cruise', desc: 'Private luxury transfer from Charles de Gaulle to your boutique hotel. Evening sunset cruise along the Seine as the Eiffel Tower glitters.' },
        { day: 2, title: 'The Louvre Masterpieces & Palais Royal', desc: 'Skip the crowds with early curator access to the Mona Lisa, Venus de Milo, followed by lunch in the serene gardens of Palais Royal.' },
        { day: 3, title: 'Montmartre Painters & Sacré-Cœur Panoramas', desc: 'Wander cobblestone lanes once walked by Picasso and Renoir. Enjoy a classic bistro lunch and breathtaking vistas over all of Paris.' },
        { day: 4, title: 'Eiffel Tower Summit & Le Marais Gastronomy', desc: 'Ascend to the top deck of the Eiffel Tower, then embark on a sommelier-led wine, cheese, and macaron tasting walk through historic Le Marais.' },
        { day: 5, title: 'Palace of Versailles Grand Residence', desc: 'Private chauffeur to Versailles. Walk through the King\'s Grand Apartments, the Hall of Mirrors, and the vast musical fountain gardens.' },
        { day: 6, title: 'Haute Couture Boutiques & Champagne Cabaret', desc: 'Exclusive shopping along Rue du Faubourg Saint-Honoré and evening seats at a world-class theatrical cabaret performance.' },
        { day: 7, title: 'Latin Quarter & Luxembourg Gardens Leisure', desc: 'Explore historic bookstores like Shakespeare & Co, relax in Luxembourg Gardens, and indulge in a farewell multi-course French dinner.' },
        { day: 8, title: 'Au Revoir Paris Departure', desc: 'Final morning cappuccino at a terrace café before private limousine transfer to CDG Airport.' }
      ]
    },
    {
      id: 'pkg-swiss-alps',
      title: 'Grand Swiss Alps Panoramic Rail & Peak Odyssey',
      destinationId: 'switzerland',
      destinationName: 'Switzerland',
      country: 'Switzerland',
      duration: '7 Days / 6 Nights',
      days: 7,
      nights: 6,
      price: 2250,
      rating: 4.96,
      reviewCount: 165,
      tag: 'Luxury Experience',
      travelStyle: 'Mountain Adventures',
      heroImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
      shortDesc: 'A panoramic Swiss voyage featuring the Glacier Express First Class, Jungfraujoch Top of Europe, Lake Lucerne cruises, and Matterhorn mountain chalets.',
      inclusions: [
        '6 Nights 5-Star Alpine Resort Stays (Lucerne, Interlaken, Zermatt)',
        '1st Class 8-Day Swiss Travel Pass with Unlimited Rail & Boats',
        'Glacier Express Excellence Class Panoramic Journey with 5-Course Meal',
        'Cogwheel Train to Jungfraujoch "Top of Europe"',
        'Gornergrat Railway Tickets for Matterhorn Viewpoint',
        'Daily Mountain Buffet Breakfast & Traditional Fondue Dinner',
        'All Luggage Transfers between Alpine Stations'
      ],
      exclusions: [
        'Flights to/from Zurich or Geneva',
        'Ski equipment rental & lift passes',
        'Personal travel insurance'
      ],
      itinerary: [
        { day: 1, title: 'Arrival Zurich & Scenic Lake Lucerne', desc: 'Board the Swiss rail direct to Lucerne. Walk the historic Chapel Bridge and take a private steamboat ride under the shadows of Mount Pilatus.' },
        { day: 2, title: 'Interlaken & Lauterbrunnen Waterfalls', desc: 'Travel along emerald Lake Brienz to Interlaken. Explore Lauterbrunnen valley with its 72 roaring waterfalls cascading from sheer limestone cliffs.' },
        { day: 3, title: 'Jungfraujoch - Top of Europe Summit', desc: 'Ascend by high-speed Eiger Express cable car and cogwheel train to 3,454m. Walk through the Ice Palace and step onto the eternal Aletsch glacier.' },
        { day: 4, title: 'Glacier Express to Zermatt', desc: 'Board the legendary Glacier Express. Glide past deep gorges, high mountain passes, and historic castles with panoramic glass windows.' },
        { day: 5, title: 'Gornergrat & The Iconic Matterhorn', desc: 'Ride the open-air cogwheel railway up to 3,089m for breathtaking vistas of the Matterhorn reflected in pristine alpine tarns like Lake Riffelsee.' },
        { day: 6, title: 'Alpine Wellness & Gourmet Fondue', desc: 'Relax in an open-air heated alpine thermal spa overlooking snowy peaks, followed by an authentic Swiss cheese and chocolate fondue evening.' },
        { day: 7, title: 'Zermatt to Zurich Departure', desc: 'Scenic rail journey through the Swiss plateau back to Zurich Airport for your onward international flight.' }
      ]
    },
    {
      id: 'pkg-dubai-future',
      title: 'Dubai Futuristic Luxury & Arabian Desert Stargazing',
      destinationId: 'dubai',
      destinationName: 'Dubai',
      country: 'United Arab Emirates',
      duration: '5 Days / 4 Nights',
      days: 5,
      nights: 4,
      price: 1150,
      rating: 4.86,
      reviewCount: 112,
      tag: 'Trending',
      travelStyle: 'Luxury Escapes',
      heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
      shortDesc: 'Burj Khalifa Sky Lounge, ultra-luxury desert camp with private astronomy, Marina superyacht cruise, and Museum of the Future exploration.',
      inclusions: [
        '4 Nights at 5-Star Luxury Downtown / Marina Hotel',
        'VIP Sky Lounge Access to Burj Khalifa Level 148',
        'Royal Desert Safari with 4x4 Dune Bashing, Camel Ride & Gourmet Dinner',
        'Private 2-Hour Luxury Yacht Cruise through Dubai Marina',
        'Museum of the Future Priority Entry Tickets',
        'Roundtrip Airport Chauffeur in Mercedes-Benz S-Class',
        'Daily International Gourmet Breakfast'
      ],
      exclusions: [
        'International flights',
        'Tourism Dirham fee paid at hotel ($5/night)',
        'Discretionary tips for desert camp hosts'
      ],
      itinerary: [
        { day: 1, title: 'Arrival in Dubai & Marina Sunset', desc: 'Private luxury transfer to hotel. Evening walk along Dubai Marina promenade and welcome drinks overlooking superyachts.' },
        { day: 2, title: 'Burj Khalifa Top of the World & Dubai Mall', desc: 'Ascend to Level 148 of Burj Khalifa for breathtaking panoramas, followed by prime viewing of the dancing Dubai Fountains.' },
        { day: 3, title: 'Museum of the Future & Old Dubai Souks', desc: 'Explore the visionary architecture of the Museum of the Future, then ride a traditional wooden Abra across Dubai Creek to Gold & Spice souks.' },
        { day: 4, title: 'Royal Desert Safari & Stargazing Feast', desc: 'Afternoon dune bashing in red desert sands, sandboarding, falconry show, and sunset gourmet barbecue under Arabian desert stars.' },
        { day: 5, title: 'Palm Jumeirah Yacht Cruise & Departure', desc: 'Morning private yacht cruise around the Palm and Burj Al Arab before chauffeured transfer to Dubai International Airport.' }
      ]
    },
    {
      id: 'pkg-maldives-overwater',
      title: 'Maldives Overwater Sanctuary & Coral Reef Heaven',
      destinationId: 'maldives',
      destinationName: 'Maldives',
      country: 'Republic of Maldives',
      duration: '6 Days / 5 Nights',
      days: 6,
      nights: 5,
      price: 2800,
      rating: 4.98,
      reviewCount: 205,
      tag: 'Ultimate Luxury',
      travelStyle: 'Beach Holidays',
      heroImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
      shortDesc: 'Wake up above turquoise waters in a private overwater villa with slide, dine in an underwater restaurant, and snorkel alongside gentle manta rays.',
      inclusions: [
        '5 Nights in Luxury Overwater Pool Villa with Direct Ocean Access',
        'Scenic Roundtrip Seaplane Transfers between Malé and Resort',
        'All-Inclusive Premium Dining (Breakfast, Lunch, 5-Course Dinners)',
        '1 Romantic 6-Course Dinner at Underwater Glass Restaurant',
        'Guided Coral Reef Snorkel Safari with Marine Biologist',
        'Complimentary Sunset Dolphin Watching Cruise',
        '60-Minute Couples Overwater Balinese Spa Treatment'
      ],
      exclusions: [
        'International air tickets to Malé (MLE)',
        'Scuba diving certification courses',
        'Motorized water sports (jet skis)'
      ],
      itinerary: [
        { day: 1, title: 'Seaplane Arrival & Overwater Villa Welcome', desc: 'Soar over turquoise atolls in a seaplane. Step directly onto your private overwater deck with champagne and tropical fruit basket.' },
        { day: 2, title: 'Lagoon Snorkeling & Sunset Dolphin Cruise', desc: 'Snorkel in the house reef surrounded by vibrant clownfish and sea turtles. Late afternoon cruise chasing pods of spinner dolphins.' },
        { day: 3, title: 'Underwater Dining & Marine Biology Tour', desc: 'Dine 5 meters underwater while stingrays glide above you. Afternoon coral restoration workshop with resident marine scientist.' },
        { day: 4, title: 'Private Sandbank Castaway Picnic', desc: 'Boat excursion to an isolated white sandbank in the middle of the Indian Ocean for a private chef-prepared picnic and swimming.' },
        { day: 5, title: 'Overwater Spa & Candlelight Beach Dinner', desc: 'Indulge in a signature massage with glass-bottom floor beneath your treatment table. Farewell dinner under tropical constellations.' },
        { day: 6, title: 'Seaplane Scenic Flight to Malé Departure', desc: 'Final sunrise swim in your private infinity pool before your seaplane flight back to Malé for international departures.' }
      ]
    },
    {
      id: 'pkg-tokyo-kyoto',
      title: 'Japan Icons: Tokyo Neon, Mt. Fuji & Kyoto Zen',
      destinationId: 'tokyo',
      destinationName: 'Tokyo',
      country: 'Japan',
      duration: '9 Days / 8 Nights',
      days: 9,
      nights: 8,
      price: 2400,
      rating: 4.93,
      reviewCount: 188,
      tag: 'Cultural Masterpiece',
      travelStyle: 'Cultural Exploration',
      heroImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
      shortDesc: 'A captivating expedition through Tokyo modern marvels, Mt. Fuji hot springs, Kyoto 1,000 torii gates, and high-speed Shinkansen bullet trains.',
      inclusions: [
        '4 Nights 5-Star Hotel in Central Tokyo (Ginza / Shinjuku)',
        '1 Night Traditional Luxury Ryokan with Onsen at Mt. Fuji',
        '3 Nights Heritage Boutique Hotel in Kyoto',
        '7-Day JR Rail Pass for Bullet Trains (Hikari / Shinkansen)',
        'Tokyo Street Food & Tsukiji Market Guided Culinary Tour',
        'Kyoto Arashiyama Bamboo Grove & Tea Ceremony Experience',
        'Pocket Wi-Fi Device for Seamless High-Speed Connectivity'
      ],
      exclusions: [
        'International flights',
        'Personal shopping and baggage forwarding',
        'Alcohol outside included dinners'
      ],
      itinerary: [
        { day: 1, title: 'Konnichiwa Tokyo & Neon Shinjuku', desc: 'Arrive at Narita/Haneda with VIP escort. Evening orientation walk through vibrant Shinjuku and Omoide Yokocho lantern alley.' },
        { day: 2, title: 'Senso-ji Temple & teamLab Borderless', desc: 'Experience ancient Tokyo at Senso-ji, then immerse your senses in the world\'s leading digital art museum teamLab Borderless.' },
        { day: 3, title: 'Shibuya Crossing & Harajuku Fashion', desc: 'Step across Shibuya Crossing, pay respects at Meiji Jingu shrine, and explore eccentric pop-culture boutiques along Takeshita Street.' },
        { day: 4, title: 'Mt. Fuji & Traditional Onsen Ryokan Stay', desc: 'Travel to Lake Kawaguchiko with postcard views of Mt. Fuji. Check into a traditional Ryokan, soak in hot springs, and savor multi-course Kaiseki dinner.' },
        { day: 5, title: 'Bullet Train to Kyoto & Gion Geisha District', desc: 'Speed along the Tokaido Shinkansen line to Kyoto. Evening twilight walk through historic Gion hoping to spot Geiko and Maiko.' },
        { day: 6, title: 'Fushimi Inari 10,000 Gates & Kinkaku-ji', desc: 'Hike through thousands of bright vermillion torii gates at Fushimi Inari, followed by the gleaming Golden Pavilion Kinkaku-ji.' },
        { day: 7, title: 'Arashiyama Bamboo Grove & Zen Gardens', desc: 'Wander through towering bamboo stalks, visit the playful monkeys at Iwatayama, and take part in a mindful Zen tea ceremony.' },
        { day: 8, title: 'Kyoto Handcrafts & Farewell Banquet', desc: 'Browse Kyoto pottery and textile workshops, enjoy a celebratory Japanese Wagyu beef banquet in Pontocho alley.' },
        { day: 9, title: 'Kyoto to Osaka / Tokyo Airport Departure', desc: 'Convenient airport express train transfer to Kansai International Airport (KIX) or Narita for flight home.' }
      ]
    },
    {
      id: 'pkg-manali-himalayas',
      title: 'Manali Himalayan Thrills, Rohtang & Solang Valley',
      destinationId: 'manali',
      destinationName: 'Manali',
      country: 'India',
      duration: '6 Days / 5 Nights',
      days: 6,
      nights: 5,
      price: 499,
      rating: 4.87,
      reviewCount: 130,
      tag: 'Best Value Adventure',
      travelStyle: 'Mountain Adventures',
      heroImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
      shortDesc: 'Experience raw Himalayan beauty: roaring Beas river camps, thrilling paragliding in Solang, Rohtang Pass glaciers, and Old Manali cafe vibes.',
      inclusions: [
        '5 Nights in Luxury Wooden Alpine Riverside Cottages',
        'Daily Himachali & Continental Breakfast & Dinners',
        'Private 4x4 Vehicle for Local Sightseeing & Rohtang Pass',
        'Solang Valley Adventure Passes (Paragliding & Cable Car)',
        'Rohtang Pass & Atal Tunnel Permits and Entry Fees',
        'Campfire Evening with Local Acoustic Music & Barbecue',
        'Pick-up & Drop from Chandigarh / Bhuntar Airport'
      ],
      exclusions: [
        'Personal adventure equipment rentals (snow jackets, boots)',
        'Lunches during day excursions',
        'Airfare / Train tickets to Chandigarh'
      ],
      itinerary: [
        { day: 1, title: 'Scenic Drive to Manali & Riverside Welcome', desc: 'Picturesque mountain drive along Beas River. Check-in to riverside resort, sip warm spiced apple tea, and unwind.' },
        { day: 2, title: 'Local Heritage: Hadimba Temple & Vashisht Hot Springs', desc: 'Explore the 16th-century wooden Hadimba Temple, take a dip in medicinal sulfur hot springs at Vashisht, and stroll the Mall Road.' },
        { day: 3, title: 'Solang Valley High-Altitude Adventure', desc: 'Adrenaline-packed day in Solang Valley with tandem paragliding, ATV rides, and cable car rides to high ridges.' },
        { day: 4, title: 'Atal Tunnel, Sissu & Rohtang Pass', desc: 'Drive through the engineering marvel of Atal Tunnel into the stark beauty of Lahaul Valley. Ascend to snow-blanketed Rohtang Pass at 13,050 ft.' },
        { day: 5, title: 'Jogini Waterfalls Trek & Old Manali Cafes', desc: 'Gentle morning nature hike to Jogini Falls with mountain vistas, followed by an evening in Old Manali sampling wood-fired pizzas and live indie folk music.' },
        { day: 6, title: 'Naggar Castle & Departure', desc: 'Visit historic wood-and-stone Naggar Castle and Nicholas Roerich art gallery before transfers to airport/bus station.' }
      ]
    },
    {
      id: 'pkg-kashmir-paradise',
      title: 'Kashmir Valley Royale: Dal Houseboat & Gulmarg Snow',
      destinationId: 'kashmir',
      destinationName: 'Kashmir',
      country: 'India',
      duration: '6 Days / 5 Nights',
      days: 6,
      nights: 5,
      price: 620,
      rating: 4.95,
      reviewCount: 174,
      tag: 'Bestseller',
      travelStyle: 'Romantic Getaways',
      heroImage: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80',
      shortDesc: 'Heritage cedar houseboat on Dal Lake, sunset Shikara rides, Gulmarg Gondola over snow peaks, and Lidder river picnics in Pahalgam.',
      inclusions: [
        '2 Nights Luxury Carved Heritage Cedar Houseboat on Dal Lake',
        '2 Nights 5-Star Pine Resort in Pahalgam (Valley of Shepherds)',
        '1 Night Luxury Mountain Chalet in Gulmarg',
        '2 Hours Sunset Shikara Ride on Dal Lake & Nigeen Lake',
        'Gulmarg Gondola Phase 1 & Phase 2 Priority Tickets',
        'Daily Saffron Breakfast & Authentic Multi-Course Wazwan Feast',
        'All Transfers in Private Heated Luxury SUV with Dedicated Chauffeur'
      ],
      exclusions: [
        'Domestic / International flights to Srinagar (SXR)',
        'Horse / Pony rides in Pahalgam / Gulmarg',
        'Personal shopping (Pashmina shawls, saffron)'
      ],
      itinerary: [
        { day: 1, title: 'Srinagar Arrival & Dal Lake Shikara Serenade', desc: 'Warm Kashmiri welcome at Srinagar Airport with steaming Saffron Kahwa. Check in to your hand-carved heritage houseboat and take an evening sunset Shikara cruise.' },
        { day: 2, title: 'Mughal Gardens & Old Srinagar Heritage', desc: 'Walk through the terraced fountains of Shalimar and Nishat Bagh built by Mughal emperors. Explore the wooden architectural treasures of Jamia Masjid.' },
        { day: 3, title: 'Gulmarg Meadow of Flowers & World-Class Gondola', desc: 'Drive to Gulmarg. Ride the world\'s second-highest operating cable car up to Apharwat Peak at 13,780 feet for panoramic views of Nanga Parbat.' },
        { day: 4, title: 'Pahalgam Valley of Shepherds & Saffron Fields', desc: 'Scenic journey past blooming saffron fields of Pampore to Pahalgam. Relax beside the crystal-clear rushing Lidder River.' },
        { day: 5, title: 'Betaab Valley, Aru & Baisaran "Mini Switzerland"', desc: 'Explore emerald meadows surrounded by pine forests at Betaab Valley and Aru. Savor a royal Wazwan dinner by a crackling fireplace.' },
        { day: 6, title: 'Farewell Kashmir Departure', desc: 'Last-minute stops for authentic walnuts, saffron, and dry fruits before chauffeured transfer to Srinagar International Airport.' }
      ]
    }
  ],

  experiences: [
    {
      id: 'beach',
      title: 'Beach Holidays',
      description: 'Sun-drenched coastlines, private overwater bungalows, turquoise lagoons, and world-class surfing & diving.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      packagesCount: 14,
      destinations: ['Maldives', 'Bali', 'Bora Bora', 'Amalfi Coast']
    },
    {
      id: 'mountain',
      title: 'Mountain Adventures',
      description: 'Glacial treks, alpine cogwheel trains, majestic summits, skiing slopes, and secluded mountain chalets.',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
      packagesCount: 18,
      destinations: ['Switzerland', 'Manali', 'Kashmir', 'Patagonia']
    },
    {
      id: 'luxury',
      title: 'Luxury Escapes',
      description: 'Private jets, five-star heritage hotels, Michelin-starred gastronomy, superyachts, and 24/7 dedicated concierges.',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      packagesCount: 12,
      destinations: ['Dubai', 'Maldives', 'Monaco', 'Paris']
    },
    {
      id: 'cultural',
      title: 'Cultural Exploration',
      description: 'Centuries-old temples, UNESCO world heritage sites, indigenous traditions, art museums, and authentic culinary journeys.',
      image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80',
      packagesCount: 16,
      destinations: ['Tokyo', 'Kyoto', 'Rome', 'Bali']
    },
    {
      id: 'wildlife',
      title: 'Wildlife Adventures',
      description: 'Unfiltered encounters with earth\'s majestic creatures: African safari game drives, whale watching, and rainforest expeditions.',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
      packagesCount: 10,
      destinations: ['Serengeti', 'Costa Rica', 'Galápagos', 'Sri Lanka']
    },
    {
      id: 'romantic',
      title: 'Romantic Getaways',
      description: 'Candlelit beach dinners, private boat cruises, honeymoon sanctuaries, and breathtaking sunset panoramas for couples.',
      image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800&q=80',
      packagesCount: 15,
      destinations: ['Paris', 'Santorini', 'Maldives', 'Kashmir']
    }
  ],

  whyChooseUs: [
    {
      icon: 'compass',
      title: 'Handpicked Destinations',
      desc: 'Every luxury resort, private guide, and scenic route is personally vetted by our global travel curators.'
    },
    {
      icon: 'tag',
      title: 'Affordable Travel Packages',
      desc: 'Direct partnerships with premier international resorts ensure you enjoy unmatched value and transparent pricing.'
    },
    {
      icon: 'award',
      title: 'Expert Travel Guidance',
      desc: 'Our certified destination specialists craft customized itineraries aligned to your unique travel desires.'
    },
    {
      icon: 'heart',
      title: 'Personalized Experiences',
      desc: 'From private seaplanes to secluded candlelit dinners, every detail is tailored around your preferences.'
    },
    {
      icon: 'headset',
      title: '24/7 Global Support',
      desc: 'Round-the-clock on-trip assistance across all timezones. We are always just a phone call or tap away.'
    },
    {
      icon: 'shield',
      title: 'Hassle-Free Booking',
      desc: 'Seamless booking, flexible cancellation policies, and 100% verified secure payment guarantees.'
    }
  ],

  stats: [
    { value: '50,000+', label: 'Happy Explorers' },
    { value: '120+', label: 'Global Destinations' },
    { value: '99.4%', label: 'Satisfaction Rate' },
    { value: '24/7', label: 'Concierge Support' }
  ],

  testimonials: [
    {
      id: 1,
      name: 'Sophia Laurent & Marcus Vance',
      country: 'London, United Kingdom',
      destination: 'Maldives Overwater Sanctuary',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      review: 'Travel Go crafted our dream honeymoon in the Maldives with absolute perfection. From the VIP seaplane welcome to the romantic underwater restaurant reservation, every second was pure heaven. Truly world-class service!',
      tripDate: 'October 2025'
    },
    {
      id: 2,
      name: 'David & Elena Chen',
      country: 'San Francisco, USA',
      destination: 'Grand Swiss Alps Odyssey',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      review: 'The Glacier Express 1st class trip arranged by Travel Go was the most breathtaking experience of our lives. Luggage transfers were flawless, chalets were magnificent, and the local guides were incredibly knowledgeable.',
      tripDate: 'September 2025'
    },
    {
      id: 3,
      name: 'Aarav & Priya Sharma',
      country: 'Mumbai, India',
      destination: 'Bali Tropical Bliss & Ubud',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
      review: 'Booking with Travel Go made our anniversary trip to Bali completely stress-free. Our private driver was always punctual, the jungle villa in Ubud blew our minds, and the Uluwatu sunset tickets saved us hours of waiting.',
      tripDate: 'November 2025'
    },
    {
      id: 4,
      name: 'Michael & Isabella Rossi',
      country: 'Rome, Italy',
      destination: 'Tokyo Neon & Kyoto Zen',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      review: 'Japan can be overwhelming to plan, but Travel Go made it effortless. The culinary walking tour in Tokyo and the private tea ceremony in Kyoto were unforgettable highlights. We will never travel with anyone else!',
      tripDate: 'August 2025'
    }
  ],

  blogArticles: [
    {
      id: 'blog-1',
      title: 'Top 10 Hidden Gems in the Swiss Alps You Must Visit in 2026',
      excerpt: 'Beyond the crowded tourist spots lie secluded alpine tarns, secret waterfall gorges, and authentic high-altitude cheese dairies accessible only to in-the-know travelers.',
      category: 'Destination Guides',
      readTime: '6 min read',
      date: 'Jan 15, 2026',
      author: {
        name: 'Julian Thorne',
        role: 'Senior Alpine Specialist',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80'
      },
      image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
      content: `Switzerland is famed worldwide for the Matterhorn and Jungfraujoch, but for the discerning traveler, the true magic lies in its quieter alpine corners.

1. Lake Oeschinensee & the Mountain Coaster: Nestled high above Kandersteg, this UNESCO glacial lake is surrounded by 3,000-meter cliffs. Row a wooden boat across deep turquoise water, then ride the exhilarating summer toboggan run.
2. The Car-Free Village of Mürren: Perched on a cliff 800 meters directly above Lauterbrunnen, Mürren offers unmatched front-row views of the Eiger, Mönch, and Jungfrau peaks without a single engine sound.
3. Verzasca Valley in Ticino: Known as the "Maldives of Switzerland," this Italian-speaking canyon features crystal-clear emerald waters rushing over smooth granite boulders beneath centuries-old double-arched stone bridges.
4. Appenzell & the Aescher Cliff Guesthouse: Built directly into the sheer vertical face of the Ebenalp mountain, the historic Aescher guesthouse has welcomed travelers and hikers for over 170 years.
5. The Gelmerbahn Funicular: The steepest open-air passenger funicular in Europe, with an unbelievable 106% incline that drops you off beside the milky-blue waters of Lake Gelmer.

Travel Tip: Travel with the Swiss Travel Pass to unlock seamless connections across high-altitude postbuses, lake steamers, and regional panoramic cogwheels.`
    },
    {
      id: 'blog-2',
      title: 'The Ultimate First-Timer’s Guide to Bali & Lombok',
      excerpt: 'How to balance sacred temple rituals, emerald jungle retreats in Ubud, and sunset beach clubs in Seminyak with zero hassle.',
      category: 'Travel Tips',
      readTime: '8 min read',
      date: 'Jan 10, 2026',
      author: {
        name: 'Clara Wijaya',
        role: 'Southeast Asia Curator',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80'
      },
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
      content: `Bali is an island of boundless sensory energy, where ancient spiritual devotion mingles with tropical beach culture and innovative gastronomy.

Where to Stay:
- Ubud: Spend at least 3 nights immersed in the lush rainforests of Ubud. Wake up to mist over cascading rice terraces and practice yoga overlooking the sacred Ayung River.
- Seminyak & Canggu: Perfect for chic beach clubs, vibrant cafes, and world-class surfing along volcanic sand beaches.
- Uluwatu: High-drama limestone cliffs, secluded surf beaches like Bingin and Padang Padang, and iconic clifftop sunset venues.

Cultural Etiquette:
Always wear a sarong and sash when entering temple precincts. Never step on Canang Sari (daily woven flower offerings placed on sidewalks). Use your right hand when giving or receiving items.

Beyond Bali:
Hop on a 90-minute fast boat to the Gili Islands for motorized-vehicle-free tranquility, or head to South Lombok for pristine, uncrowded white sand bays and world-class breaks.`
    },
    {
      id: 'blog-3',
      title: 'How to Experience Tokyo on Both Luxury & Budget Journeys',
      excerpt: 'From Michelin three-star counter dining to 500-yen ramen stalls, how Tokyo seamlessly caters to every traveler style.',
      category: 'Food & Culture',
      readTime: '7 min read',
      date: 'Jan 05, 2026',
      author: {
        name: 'Kenji Takahashi',
        role: 'Japan Destination Director',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80'
      },
      image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80',
      content: `Tokyo holds more Michelin stars than Paris and New York combined, yet some of its most divine culinary moments cost less than the price of a coffee.

The High-End Experience:
Book a private counter at an Omakase sushi sanctuary where the master chef procures seasonal tuna from Toyosu Market at dawn. Pair this with a stay in a sky-high luxury hotel in Otemachi overlooking the Imperial Palace gardens.

The Hidden Street Gems:
Head down to Omoide Yokocho in Shinjuku or Yurakucho under the train tracks. Here, tiny smoke-filled izakayas grill succulent yakitori skewers over binchotan charcoal. Tokyo\'s department store food halls (Depachika) offer gourmet bento boxes and artisanal wagashi confections at remarkable value.

Getting Around:
Purchase a digital Suica card for seamless tap-and-go travel on all JR lines and Tokyo Metro networks.`
    },
    {
      id: 'blog-4',
      title: 'Winter Magic in Kashmir: The Complete Shikara & Gulmarg Guide',
      excerpt: 'Experience India’s winter wonderland with snow-laden pine forests, roaring fireplaces in Dal houseboats, and high-altitude skiing.',
      category: 'Inspiration',
      readTime: '5 min read',
      date: 'Dec 28, 2025',
      author: {
        name: 'Sameer Mir',
        role: 'Himalayan Expedition Leader',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
      },
      image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80',
      content: `When the first winter snowfall blankets the Kashmir Valley, the entire region transforms into an ethereal wonderland of white and blue.

The Houseboat Tradition:
Staying in a hand-carved deodar wood houseboat on Dal Lake during winter is an experience without equal. Heated by traditional Bukhari wood stoves and served steaming saffron Kahwa with crushed almonds, you can watch the morning mist lift over snow-clad Zabarwan hills.

Gulmarg Skiing & Gondola:
Gulmarg boasts some of the deepest dry powder snow in Asia. The Gulmarg Gondola carries skiers and sightseers to Phase 2 at Apharwat Peak, towering at an astounding 13,780 feet.

Local Delicacy:
Do not leave Kashmir without savoring the 36-course royal Wazwan, featuring tender Rogan Josh, Gushtaba, and aromatic saffron pulao prepared by hereditary Master Chefs (Wazas).`
    }
  ],

  faqs: [
    {
      q: 'How does booking a trip with Travel Go work?',
      a: 'You can explore our pre-curated travel packages and book directly, or use our "Plan Your Journey" trip planner to customize every detail. Once you submit a booking request or inquiry, our dedicated destination specialist contacts you within 2 hours to confirm your itinerary and finalize your arrangements.'
    },
    {
      q: 'What is your cancellation and refund policy?',
      a: 'We offer flexible booking policies on all packages. Cancellations made 30 days or more prior to departure are eligible for a 100% full refund or credit voucher. Cancellations made 14–29 days prior receive an 80% refund. We also offer comprehensive trip cancellation protection.'
    },
    {
      q: 'Can I customize any of the existing packages?',
      a: 'Yes, absolutely! Every package listed on Travel Go is fully customizable. You can add extra days, upgrade to luxury overwater villas or suites, include private helicopter tours, or modify excursions to match your personal interests and pace.'
    },
    {
      q: 'Do you provide assistance with visas and flights?',
      a: 'Yes. Our concierge team assists you with visa documentation, invitations, and flight bookings upon request. We can also coordinate private airport lounge access and VIP customs fast-track services.'
    },
    {
      q: 'What level of support do I have while traveling?',
      a: 'You have access to our 24/7 Global Concierge hotline and a dedicated WhatsApp coordinator stationed in your destination\'s local timezone to assist with instant restaurant bookings, changes of plans, or any emergency.'
    }
  ],

  team: [
    {
      name: 'Alexander Wright',
      role: 'Founder & Chief Executive Officer',
      bio: 'Former expedition leader and travel photojournalist who has explored over 90 countries across 6 continents.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Camilla Vasquez',
      role: 'Head of Global Concierge & VIP Journeys',
      bio: 'Over 14 years curating bespoke experiences for discerning travelers, luxury brands, and global explorers.',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Dr. Tariq Al-Mansoor',
      role: 'Director of Sustainable Tourism',
      bio: 'Passionate advocate for eco-conscious travel, carbon-offset projects, and empowering local indigenous communities.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Evelyn Moriarty',
      role: 'Lead Destination Curator - Europe & Asia',
      bio: 'Deep connoisseur of Michelin culinary trails, historic chateaux, and secluded luxury wellness retreats.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
    }
  ]
};
