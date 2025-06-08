
import { Car, Brand } from '@/types/car';

export const brands: Brand[] = [
  {
    id: 'bentley',
    name: 'Bentley',
    logo: '🏆',
    description: 'Extraordinary journeys demand extraordinary automobiles',
    founded: '1919',
    headquarters: 'Crewe, England'
  },
  {
    id: 'rolls-royce',
    name: 'Rolls-Royce',
    logo: '👑',
    description: 'The pinnacle of luxury and craftsmanship',
    founded: '1906',
    headquarters: 'Goodwood, England'
  },
  {
    id: 'mclaren',
    name: 'McLaren',
    logo: '🏎️',
    description: 'Racing-bred performance and innovation',
    founded: '1963',
    headquarters: 'Woking, England'
  },
  {
    id: 'lamborghini',
    name: 'Lamborghini',
    logo: '🐂',
    description: 'Unleash the beast within',
    founded: '1963',
    headquarters: 'Sant\'Agata Bolognese, Italy'
  },
  {
    id: 'ferrari',
    name: 'Ferrari',
    logo: '🐎',
    description: 'The prancing horse of automotive excellence',
    founded: '1947',
    headquarters: 'Maranello, Italy'
  },
  {
    id: 'aston-martin',
    name: 'Aston Martin',
    logo: '🦅',
    description: 'Power, beauty and soul',
    founded: '1913',
    headquarters: 'Gaydon, England'
  }
];

export const cars: Car[] = [
  // Bentley Cars
  {
    id: 'bentley-continental-gt',
    name: 'Continental GT',
    brand: 'bentley',
    price: 35000000,
    originalPrice: 38000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The definitive grand tourer combining luxury and performance',
    features: ['Handcrafted Interior', 'Twin-Turbo W12 Engine', 'All-Wheel Drive', 'Premium Sound System'],
    specifications: {
      engine: '6.0L Twin-Turbo W12',
      power: '626 HP',
      acceleration: '0-100 km/h in 3.7s',
      topSpeed: '333 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic'
    },
    inStock: true,
    category: 'coupe'
  },
  {
    id: 'bentley-bentayga',
    name: 'Bentayga',
    brand: 'bentley',
    price: 42000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The ultimate luxury SUV experience',
    features: ['Off-Road Capability', 'Luxury Interior', 'Advanced Technology', 'Premium Materials'],
    specifications: {
      engine: '4.0L Twin-Turbo V8',
      power: '542 HP',
      acceleration: '0-100 km/h in 4.5s',
      topSpeed: '290 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic'
    },
    inStock: true,
    category: 'suv'
  },
  {
    id: 'bentley-flying-spur',
    name: 'Flying Spur',
    brand: 'bentley',
    price: 45000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The four-door grand tourer redefined',
    features: ['Four-Door Design', 'Luxury Seating', 'Advanced Infotainment', 'Premium Craftsmanship'],
    specifications: {
      engine: '6.0L Twin-Turbo W12',
      power: '626 HP',
      acceleration: '0-100 km/h in 3.8s',
      topSpeed: '333 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic'
    },
    inStock: true,
    category: 'sedan'
  },
  {
    id: 'bentley-continental-convertible',
    name: 'Continental GT Convertible',
    brand: 'bentley',
    price: 38000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'Open-top luxury at its finest',
    features: ['Soft-Top Convertible', 'Luxury Interior', 'Advanced Climate Control', 'Premium Audio'],
    specifications: {
      engine: '6.0L Twin-Turbo W12',
      power: '626 HP',
      acceleration: '0-100 km/h in 3.8s',
      topSpeed: '333 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic'
    },
    inStock: true,
    category: 'convertible'
  },
  {
    id: 'bentley-mulsanne',
    name: 'Mulsanne',
    brand: 'bentley',
    price: 55000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The flagship of luxury sedans',
    features: ['Handcrafted Excellence', 'V8 Engine', 'Luxury Amenities', 'Executive Seating'],
    specifications: {
      engine: '6.75L Twin-Turbo V8',
      power: '505 HP',
      acceleration: '0-100 km/h in 5.1s',
      topSpeed: '296 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic'
    },
    inStock: true,
    category: 'sedan'
  },
  {
    id: 'bentley-continental-supersports',
    name: 'Continental Supersports',
    brand: 'bentley',
    price: 48000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The fastest Bentley ever made',
    features: ['Track-Focused Performance', 'Carbon Fiber Elements', 'Sport Suspension', 'Racing Interior'],
    specifications: {
      engine: '6.0L Twin-Turbo W12',
      power: '700 HP',
      acceleration: '0-100 km/h in 3.4s',
      topSpeed: '336 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic'
    },
    inStock: true,
    category: 'coupe'
  },
  {
    id: 'bentley-bentayga-hybrid',
    name: 'Bentayga Hybrid',
    brand: 'bentley',
    price: 46000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'Luxury meets sustainability',
    features: ['Hybrid Technology', 'Electric Range', 'Eco-Friendly Luxury', 'Advanced Connectivity'],
    specifications: {
      engine: '3.0L V6 + Electric Motor',
      power: '443 HP',
      acceleration: '0-100 km/h in 5.5s',
      topSpeed: '254 km/h',
      fuelType: 'Hybrid',
      transmission: '8-Speed Automatic'
    },
    inStock: true,
    category: 'suv'
  },
  {
    id: 'bentley-continental-gt-speed',
    name: 'Continental GT Speed',
    brand: 'bentley',
    price: 52000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The ultimate performance grand tourer',
    features: ['Enhanced Performance', 'Sport Tuning', 'Aerodynamic Package', 'Racing Heritage'],
    specifications: {
      engine: '6.0L Twin-Turbo W12',
      power: '650 HP',
      acceleration: '0-100 km/h in 3.6s',
      topSpeed: '335 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic'
    },
    inStock: true,
    category: 'coupe'
  },
  {
    id: 'bentley-flying-spur-hybrid',
    name: 'Flying Spur Hybrid',
    brand: 'bentley',
    price: 48000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'Efficient luxury without compromise',
    features: ['Hybrid Powertrain', 'Silent Electric Mode', 'Luxury Comfort', 'Advanced Technology'],
    specifications: {
      engine: '2.9L V6 + Electric Motor',
      power: '536 HP',
      acceleration: '0-100 km/h in 4.1s',
      topSpeed: '285 km/h',
      fuelType: 'Hybrid',
      transmission: '8-Speed Automatic'
    },
    inStock: true,
    category: 'sedan'
  },
  {
    id: 'bentley-mulliner-bacalar',
    name: 'Mulliner Bacalar',
    brand: 'bentley',
    price: 75000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'Bespoke luxury at its absolute pinnacle',
    features: ['Limited Edition', 'Bespoke Craftsmanship', 'Unique Design', 'Collectible'],
    specifications: {
      engine: '6.0L Twin-Turbo W12',
      power: '650 HP',
      acceleration: '0-100 km/h in 3.5s',
      topSpeed: '320 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic'
    },
    inStock: true,
    category: 'convertible'
  },

  // Rolls-Royce Cars
  {
    id: 'rolls-royce-phantom',
    name: 'Phantom',
    brand: 'rolls-royce',
    price: 65000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The pinnacle of automotive luxury',
    features: ['Magic Carpet Ride', 'Starlight Headliner', 'Bespoke Interior', 'Silent Operation'],
    specifications: {
      engine: '6.75L Twin-Turbo V12',
      power: '563 HP',
      acceleration: '0-100 km/h in 5.4s',
      topSpeed: '250 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic'
    },
    inStock: true,
    category: 'sedan'
  },
  {
    id: 'rolls-royce-ghost',
    name: 'Ghost',
    brand: 'rolls-royce',
    price: 55000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'Contemporary luxury with timeless elegance',
    features: ['Contemporary Design', 'Advanced Technology', 'Refined Performance', 'Luxurious Comfort'],
    specifications: {
      engine: '6.75L Twin-Turbo V12',
      power: '563 HP',
      acceleration: '0-100 km/h in 4.8s',
      topSpeed: '250 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic'
    },
    inStock: true,
    category: 'sedan'
  },
  {
    id: 'rolls-royce-cullinan',
    name: 'Cullinan',
    brand: 'rolls-royce',
    price: 58000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The first luxury SUV from Rolls-Royce',
    features: ['All-Terrain Capability', 'Luxury Interior', 'Advanced Off-Road', 'Premium Comfort'],
    specifications: {
      engine: '6.75L Twin-Turbo V12',
      power: '563 HP',
      acceleration: '0-100 km/h in 5.2s',
      topSpeed: '250 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic'
    },
    inStock: true,
    category: 'suv'
  },
  {
    id: 'rolls-royce-wraith',
    name: 'Wraith',
    brand: 'rolls-royce',
    price: 48000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The most powerful Rolls-Royce ever',
    features: ['Powerful Performance', 'Fastback Design', 'Luxury Features', 'Advanced Technology'],
    specifications: {
      engine: '6.6L Twin-Turbo V12',
      power: '624 HP',
      acceleration: '0-100 km/h in 4.4s',
      topSpeed: '250 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic'
    },
    inStock: true,
    category: 'coupe'
  },
  {
    id: 'rolls-royce-dawn',
    name: 'Dawn',
    brand: 'rolls-royce',
    price: 52000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The most beautiful open-top car ever created',
    features: ['Convertible Design', 'Silent Mechanism', 'Luxury Comfort', 'Premium Materials'],
    specifications: {
      engine: '6.6L Twin-Turbo V12',
      power: '563 HP',
      acceleration: '0-100 km/h in 4.9s',
      topSpeed: '250 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic'
    },
    inStock: true,
    category: 'convertible'
  },
  {
    id: 'rolls-royce-spectre',
    name: 'Spectre',
    brand: 'rolls-royce',
    price: 70000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The first fully electric Rolls-Royce',
    features: ['Electric Powertrain', 'Silent Operation', 'Advanced Technology', 'Sustainable Luxury'],
    specifications: {
      engine: 'Dual Electric Motors',
      power: '577 HP',
      acceleration: '0-100 km/h in 4.5s',
      topSpeed: '250 km/h',
      fuelType: 'Electric',
      transmission: 'Single-Speed'
    },
    inStock: true,
    category: 'coupe'
  },
  {
    id: 'rolls-royce-phantom-extended',
    name: 'Phantom Extended',
    brand: 'rolls-royce',
    price: 75000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'Extended wheelbase for ultimate luxury',
    features: ['Extended Wheelbase', 'Executive Seating', 'Partition Glass', 'Premium Entertainment'],
    specifications: {
      engine: '6.75L Twin-Turbo V12',
      power: '563 HP',
      acceleration: '0-100 km/h in 5.4s',
      topSpeed: '250 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic'
    },
    inStock: true,
    category: 'sedan'
  },
  {
    id: 'rolls-royce-black-badge-ghost',
    name: 'Black Badge Ghost',
    brand: 'rolls-royce',
    price: 62000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The alter ego of Rolls-Royce',
    features: ['Dark Aesthetics', 'Enhanced Performance', 'Exclusive Design', 'Athletic Character'],
    specifications: {
      engine: '6.75L Twin-Turbo V12',
      power: '600 HP',
      acceleration: '0-100 km/h in 4.6s',
      topSpeed: '250 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic'
    },
    inStock: true,
    category: 'sedan'
  },
  {
    id: 'rolls-royce-black-badge-cullinan',
    name: 'Black Badge Cullinan',
    brand: 'rolls-royce',
    price: 68000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The darkest and most powerful SUV',
    features: ['Black Badge Styling', 'Enhanced Power', 'Exclusive Interior', 'Performance Tuning'],
    specifications: {
      engine: '6.75L Twin-Turbo V12',
      power: '600 HP',
      acceleration: '0-100 km/h in 5.0s',
      topSpeed: '250 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic'
    },
    inStock: true,
    category: 'suv'
  },
  {
    id: 'rolls-royce-boat-tail',
    name: 'Boat Tail',
    brand: 'rolls-royce',
    price: 250000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The most expensive car ever made',
    features: ['One-Off Bespoke', 'Nautical Inspiration', 'Unique Design', 'Ultimate Exclusivity'],
    specifications: {
      engine: '6.75L Twin-Turbo V12',
      power: '563 HP',
      acceleration: '0-100 km/h in 5.0s',
      topSpeed: '250 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic'
    },
    inStock: false,
    category: 'convertible'
  },

  // McLaren Cars
  {
    id: 'mclaren-720s',
    name: '720S',
    brand: 'mclaren',
    price: 32000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'Relentless performance meets stunning design',
    features: ['Carbon Fiber Body', 'Active Aerodynamics', 'Track Performance', 'Racing Technology'],
    specifications: {
      engine: '4.0L Twin-Turbo V8',
      power: '710 HP',
      acceleration: '0-100 km/h in 2.9s',
      topSpeed: '341 km/h',
      fuelType: 'Petrol',
      transmission: '7-Speed Automatic'
    },
    inStock: true,
    category: 'sports'
  },
  {
    id: 'mclaren-765lt',
    name: '765LT',
    brand: 'mclaren',
    price: 42000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'Longtail engineering at its finest',
    features: ['Longtail Design', 'Track-Focused', 'Lightweight Construction', 'Extreme Performance'],
    specifications: {
      engine: '4.0L Twin-Turbo V8',
      power: '755 HP',
      acceleration: '0-100 km/h in 2.8s',
      topSpeed: '330 km/h',
      fuelType: 'Petrol',
      transmission: '7-Speed Automatic'
    },
    inStock: true,
    category: 'sports'
  },
  {
    id: 'mclaren-senna',
    name: 'Senna',
    brand: 'mclaren',
    price: 85000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The ultimate track-focused McLaren',
    features: ['Extreme Aerodynamics', 'Track Beast', 'Limited Production', 'Racing Heritage'],
    specifications: {
      engine: '4.0L Twin-Turbo V8',
      power: '789 HP',
      acceleration: '0-100 km/h in 2.8s',
      topSpeed: '340 km/h',
      fuelType: 'Petrol',
      transmission: '7-Speed Automatic'
    },
    inStock: true,
    category: 'sports'
  },
  {
    id: 'mclaren-artura',
    name: 'Artura',
    brand: 'mclaren',
    price: 28000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The future of hybrid supercars',
    features: ['Hybrid Technology', 'Electric Performance', 'Advanced Materials', 'Next-Gen Design'],
    specifications: {
      engine: '3.0L V6 + Electric Motor',
      power: '671 HP',
      acceleration: '0-100 km/h in 3.0s',
      topSpeed: '330 km/h',
      fuelType: 'Hybrid',
      transmission: '8-Speed Automatic'
    },
    inStock: true,
    category: 'sports'
  },
  {
    id: 'mclaren-gt',
    name: 'GT',
    brand: 'mclaren',
    price: 25000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'Grand touring with supercar performance',
    features: ['Touring Comfort', 'Daily Usability', 'Luxury Interior', 'Practical Storage'],
    specifications: {
      engine: '4.0L Twin-Turbo V8',
      power: '612 HP',
      acceleration: '0-100 km/h in 3.2s',
      topSpeed: '326 km/h',
      fuelType: 'Petrol',
      transmission: '7-Speed Automatic'
    },
    inStock: true,
    category: 'coupe'
  },
  {
    id: 'mclaren-p1',
    name: 'P1',
    brand: 'mclaren',
    price: 135000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The hybrid hypercar legend',
    features: ['Hybrid Hypercar', 'F1 Technology', 'Limited Edition', 'Revolutionary Design'],
    specifications: {
      engine: '3.8L Twin-Turbo V8 + Electric',
      power: '903 HP',
      acceleration: '0-100 km/h in 2.8s',
      topSpeed: '350 km/h',
      fuelType: 'Hybrid',
      transmission: '7-Speed Automatic'
    },
    inStock: false,
    category: 'sports'
  },
  {
    id: 'mclaren-600lt',
    name: '600LT',
    brand: 'mclaren',
    price: 35000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'Focused performance in purest form',
    features: ['Longtail Heritage', 'Weight Reduction', 'Enhanced Aerodynamics', 'Track Ready'],
    specifications: {
      engine: '3.8L Twin-Turbo V8',
      power: '592 HP',
      acceleration: '0-100 km/h in 2.9s',
      topSpeed: '328 km/h',
      fuelType: 'Petrol',
      transmission: '7-Speed Automatic'
    },
    inStock: true,
    category: 'sports'
  },
  {
    id: 'mclaren-speedtail',
    name: 'Speedtail',
    brand: 'mclaren',
    price: 95000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The fastest McLaren ever',
    features: ['3-Seat Configuration', 'Streamlined Design', 'Hybrid Power', 'Speed Record'],
    specifications: {
      engine: '4.0L Twin-Turbo V8 + Electric',
      power: '1035 HP',
      acceleration: '0-100 km/h in 2.5s',
      topSpeed: '403 km/h',
      fuelType: 'Hybrid',
      transmission: '7-Speed Automatic'
    },
    inStock: true,
    category: 'sports'
  },
  {
    id: 'mclaren-elva',
    name: 'Elva',
    brand: 'mclaren',
    price: 75000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'Open-air extreme performance',
    features: ['No Roof', 'No Windows', 'Pure Experience', 'Extreme Design'],
    specifications: {
      engine: '4.0L Twin-Turbo V8',
      power: '804 HP',
      acceleration: '0-100 km/h in 2.8s',
      topSpeed: '326 km/h',
      fuelType: 'Petrol',
      transmission: '7-Speed Automatic'
    },
    inStock: true,
    category: 'sports'
  },
  {
    id: 'mclaren-sabre',
    name: 'Sabre',
    brand: 'mclaren',
    price: 65000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The most powerful non-hybrid McLaren',
    features: ['Extreme Power', 'Track Focus', 'Exclusive Production', 'Advanced Aerodynamics'],
    specifications: {
      engine: '4.0L Twin-Turbo V8',
      power: '824 HP',
      acceleration: '0-100 km/h in 2.7s',
      topSpeed: '351 km/h',
      fuelType: 'Petrol',
      transmission: '7-Speed Automatic'
    },
    inStock: true,
    category: 'sports'
  },

  // Lamborghini Cars (10 cars)
  {
    id: 'lamborghini-huracan',
    name: 'Huracán',
    brand: 'lamborghini',
    price: 28000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The perfect everyday supercar',
    features: ['V10 Engine', 'All-Wheel Drive', 'Advanced Technology', 'Aggressive Design'],
    specifications: {
      engine: '5.2L V10',
      power: '630 HP',
      acceleration: '0-100 km/h in 2.9s',
      topSpeed: '325 km/h',
      fuelType: 'Petrol',
      transmission: '7-Speed Automatic'
    },
    inStock: true,
    category: 'sports'
  },
  {
    id: 'lamborghini-aventador',
    name: 'Aventador',
    brand: 'lamborghini',
    price: 55000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The flagship V12 masterpiece',
    features: ['V12 Engine', 'Scissor Doors', 'Carbon Fiber', 'Track Performance'],
    specifications: {
      engine: '6.5L V12',
      power: '769 HP',
      acceleration: '0-100 km/h in 2.8s',
      topSpeed: '355 km/h',
      fuelType: 'Petrol',
      transmission: '7-Speed Automatic'
    },
    inStock: true,
    category: 'sports'
  },
  {
    id: 'lamborghini-urus',
    name: 'Urus',
    brand: 'lamborghini',
    price: 32000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The super SUV that changed everything',
    features: ['Super SUV', 'Family Practical', 'Off-Road Capable', 'Luxury Interior'],
    specifications: {
      engine: '4.0L Twin-Turbo V8',
      power: '641 HP',
      acceleration: '0-100 km/h in 3.6s',
      topSpeed: '305 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic'
    },
    inStock: true,
    category: 'suv'
  },
  {
    id: 'lamborghini-revuelto',
    name: 'Revuelto',
    brand: 'lamborghini',
    price: 78000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The first hybrid V12 Lamborghini',
    features: ['Hybrid V12', 'Electric Motors', 'Advanced Technology', 'Future Design'],
    specifications: {
      engine: '6.5L V12 + Electric Motors',
      power: '1001 HP',
      acceleration: '0-100 km/h in 2.5s',
      topSpeed: '350 km/h',
      fuelType: 'Hybrid',
      transmission: '8-Speed Automatic'
    },
    inStock: true,
    category: 'sports'
  },
  {
    id: 'lamborghini-gallardo',
    name: 'Gallardo',
    brand: 'lamborghini',
    price: 22000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The classic entry-level supercar',
    features: ['Classic Design', 'V10 Power', 'Timeless Appeal', 'Pure Performance'],
    specifications: {
      engine: '5.2L V10',
      power: '552 HP',
      acceleration: '0-100 km/h in 3.4s',
      topSpeed: '325 km/h',
      fuelType: 'Petrol',
      transmission: '6-Speed Manual'
    },
    inStock: true,
    category: 'sports'
  },
  {
    id: 'lamborghini-murcielago',
    name: 'Murciélago',
    brand: 'lamborghini',
    price: 35000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The bat-inspired legend',
    features: ['V12 Heritage', 'Classic Lamborghini', 'Scissor Doors', 'Iconic Design'],
    specifications: {
      engine: '6.2L V12',
      power: '572 HP',
      acceleration: '0-100 km/h in 3.8s',
      topSpeed: '330 km/h',
      fuelType: 'Petrol',
      transmission: '6-Speed Manual'
    },
    inStock: true,
    category: 'sports'
  },
  {
    id: 'lamborghini-huracan-sto',
    name: 'Huracán STO',
    brand: 'lamborghini',
    price: 45000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'Super Trofeo Omologata - track bred',
    features: ['Track Focused', 'Aerodynamic Package', 'Weight Reduction', 'Racing Technology'],
    specifications: {
      engine: '5.2L V10',
      power: '630 HP',
      acceleration: '0-100 km/h in 3.0s',
      topSpeed: '310 km/h',
      fuelType: 'Petrol',
      transmission: '7-Speed Automatic'
    },
    inStock: true,
    category: 'sports'
  },
  {
    id: 'lamborghini-sian',
    name: 'Sián',
    brand: 'lamborghini',
    price: 85000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The first electrified Lamborghini',
    features: ['Supercapacitor Technology', 'Hybrid Power', 'Limited Edition', 'Futuristic Design'],
    specifications: {
      engine: '6.5L V12 + Electric Motor',
      power: '819 HP',
      acceleration: '0-100 km/h in 2.8s',
      topSpeed: '350 km/h',
      fuelType: 'Hybrid',
      transmission: '7-Speed Automatic'
    },
    inStock: true,
    category: 'sports'
  },
  {
    id: 'lamborghini-countach',
    name: 'Countach LPI 800-4',
    brand: 'lamborghini',
    price: 95000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The return of an icon',
    features: ['Legendary Design', 'Modern Technology', 'Limited Production', 'Hybrid Power'],
    specifications: {
      engine: '6.5L V12 + Electric Motor',
      power: '803 HP',
      acceleration: '0-100 km/h in 2.8s',
      topSpeed: '355 km/h',
      fuelType: 'Hybrid',
      transmission: '7-Speed Automatic'
    },
    inStock: true,
    category: 'sports'
  },
  {
    id: 'lamborghini-diablo',
    name: 'Diablo',
    brand: 'lamborghini',
    price: 28000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The devil in automotive form',
    features: ['Classic V12', 'Vintage Appeal', 'Timeless Design', 'Collector\'s Item'],
    specifications: {
      engine: '5.7L V12',
      power: '492 HP',
      acceleration: '0-100 km/h in 4.1s',
      topSpeed: '325 km/h',
      fuelType: 'Petrol',
      transmission: '5-Speed Manual'
    },
    inStock: true,
    category: 'sports'
  },

  // Ferrari Cars (10 cars)
  {
    id: 'ferrari-f8-tributo',
    name: 'F8 Tributo',
    brand: 'ferrari',
    price: 35000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'Tribute to the most powerful V8 in Ferrari history',
    features: ['V8 Turbo', 'Aerodynamic Excellence', 'Track Performance', 'Racing Heritage'],
    specifications: {
      engine: '3.9L Twin-Turbo V8',
      power: '710 HP',
      acceleration: '0-100 km/h in 2.9s',
      topSpeed: '340 km/h',
      fuelType: 'Petrol',
      transmission: '7-Speed Dual-Clutch'
    },
    inStock: true,
    category: 'sports'
  },
  {
    id: 'ferrari-sf90-stradale',
    name: 'SF90 Stradale',
    brand: 'ferrari',
    price: 65000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The first series-production Ferrari hybrid',
    features: ['Hybrid Technology', 'F1 Derived', 'Electric Motors', 'Advanced Aerodynamics'],
    specifications: {
      engine: '4.0L Twin-Turbo V8 + Electric',
      power: '986 HP',
      acceleration: '0-100 km/h in 2.5s',
      topSpeed: '340 km/h',
      fuelType: 'Hybrid',
      transmission: '8-Speed Dual-Clutch'
    },
    inStock: true,
    category: 'sports'
  },
  {
    id: 'ferrari-812-superfast',
    name: '812 Superfast',
    brand: 'ferrari',
    price: 55000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The most powerful naturally aspirated V12',
    features: ['V12 Engine', 'Natural Aspiration', 'Pure Performance', 'Classic Ferrari'],
    specifications: {
      engine: '6.5L V12',
      power: '789 HP',
      acceleration: '0-100 km/h in 2.9s',
      topSpeed: '340 km/h',
      fuelType: 'Petrol',
      transmission: '7-Speed Dual-Clutch'
    },
    inStock: true,
    category: 'sports'
  },
  {
    id: 'ferrari-roma',
    name: 'Roma',
    brand: 'ferrari',
    price: 28000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'La Nuova Dolce Vita',
    features: ['Grand Touring', 'Elegant Design', 'Luxury Comfort', 'Daily Usability'],
    specifications: {
      engine: '3.9L Twin-Turbo V8',
      power: '612 HP',
      acceleration: '0-100 km/h in 3.4s',
      topSpeed: '320 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Dual-Clutch'
    },
    inStock: true,
    category: 'coupe'
  },
  {
    id: 'ferrari-portofino-m',
    name: 'Portofino M',
    brand: 'ferrari',
    price: 32000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The evolved gran turismo spider',
    features: ['Retractable Hardtop', 'V8 Turbo', 'Grand Touring', 'Convertible Luxury'],
    specifications: {
      engine: '3.9L Twin-Turbo V8',
      power: '612 HP',
      acceleration: '0-100 km/h in 3.45s',
      topSpeed: '320 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Dual-Clutch'
    },
    inStock: true,
    category: 'convertible'
  },
  {
    id: 'ferrari-296-gtb',
    name: '296 GTB',
    brand: 'ferrari',
    price: 48000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The evolution of fun',
    features: ['V6 Hybrid', 'Electric Assistance', 'Compact Design', 'Pure Driving Joy'],
    specifications: {
      engine: '3.0L Twin-Turbo V6 + Electric',
      power: '818 HP',
      acceleration: '0-100 km/h in 2.9s',
      topSpeed: '330 km/h',
      fuelType: 'Hybrid',
      transmission: '8-Speed Dual-Clutch'
    },
    inStock: true,
    category: 'sports'
  },
  {
    id: 'ferrari-laferrari',
    name: 'LaFerrari',
    brand: 'ferrari',
    price: 125000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The definitive Ferrari',
    features: ['Hybrid Hypercar', 'F1 Technology', 'Limited Production', 'Ultimate Performance'],
    specifications: {
      engine: '6.3L V12 + Electric Motor',
      power: '950 HP',
      acceleration: '0-100 km/h in 2.4s',
      topSpeed: '350 km/h',
      fuelType: 'Hybrid',
      transmission: '7-Speed Dual-Clutch'
    },
    inStock: false,
    category: 'sports'
  },
  {
    id: 'ferrari-458-italia',
    name: '458 Italia',
    brand: 'ferrari',
    price: 25000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The naturally aspirated masterpiece',
    features: ['Natural V8', 'Perfect Balance', 'Classic Design', 'Timeless Appeal'],
    specifications: {
      engine: '4.5L V8',
      power: '562 HP',
      acceleration: '0-100 km/h in 3.4s',
      topSpeed: '325 km/h',
      fuelType: 'Petrol',
      transmission: '7-Speed Dual-Clutch'
    },
    inStock: true,
    category: 'sports'
  },
  {
    id: 'ferrari-f40',
    name: 'F40',
    brand: 'ferrari',
    price: 85000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The last Ferrari approved by Enzo',
    features: ['Legendary Status', 'Twin Turbo V8', 'Raw Performance', 'Collector\'s Dream'],
    specifications: {
      engine: '2.9L Twin-Turbo V8',
      power: '471 HP',
      acceleration: '0-100 km/h in 4.1s',
      topSpeed: '324 km/h',
      fuelType: 'Petrol',
      transmission: '5-Speed Manual'
    },
    inStock: true,
    category: 'sports'
  },
  {
    id: 'ferrari-purosangue',
    name: 'Purosangue',
    brand: 'ferrari',
    price: 68000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The first four-door four-seater Ferrari',
    features: ['Four Doors', 'V12 Engine', 'SUV Practicality', 'Ferrari DNA'],
    specifications: {
      engine: '6.5L V12',
      power: '715 HP',
      acceleration: '0-100 km/h in 3.3s',
      topSpeed: '310 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Dual-Clutch'
    },
    inStock: true,
    category: 'suv'
  },

  // Aston Martin Cars (10 cars)
  {
    id: 'aston-martin-db11',
    name: 'DB11',
    brand: 'aston-martin',
    price: 25000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The quintessential grand tourer',
    features: ['V8 Twin-Turbo', 'Grand Touring', 'Luxury Interior', 'Elegant Design'],
    specifications: {
      engine: '4.0L Twin-Turbo V8',
      power: '528 HP',
      acceleration: '0-100 km/h in 3.9s',
      topSpeed: '301 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic'
    },
    inStock: true,
    category: 'coupe'
  },
  {
    id: 'aston-martin-vantage',
    name: 'Vantage',
    brand: 'aston-martin',
    price: 22000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'Pure sports car DNA',
    features: ['Sports Car', 'Agile Handling', 'Compact Design', 'Pure Performance'],
    specifications: {
      engine: '4.0L Twin-Turbo V8',
      power: '503 HP',
      acceleration: '0-100 km/h in 3.6s',
      topSpeed: '314 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic'
    },
    inStock: true,
    category: 'sports'
  },
  {
    id: 'aston-martin-dbs-superleggera',
    name: 'DBS Superleggera',
    brand: 'aston-martin',
    price: 42000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The ultimate Aston Martin GT',
    features: ['V12 Twin-Turbo', 'Carbon Fiber', 'Track Performance', 'Luxury Comfort'],
    specifications: {
      engine: '5.2L Twin-Turbo V12',
      power: '715 HP',
      acceleration: '0-100 km/h in 3.4s',
      topSpeed: '340 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic'
    },
    inStock: true,
    category: 'coupe'
  },
  {
    id: 'aston-martin-dbx',
    name: 'DBX',
    brand: 'aston-martin',
    price: 28000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The first Aston Martin SUV',
    features: ['Luxury SUV', 'All-Terrain', 'Family Practical', 'Sports Car DNA'],
    specifications: {
      engine: '4.0L Twin-Turbo V8',
      power: '542 HP',
      acceleration: '0-100 km/h in 4.5s',
      topSpeed: '291 km/h',
      fuelType: 'Petrol',
      transmission: '9-Speed Automatic'
    },
    inStock: true,
    category: 'suv'
  },
  {
    id: 'aston-martin-valkyrie',
    name: 'Valkyrie',
    brand: 'aston-martin',
    price: 285000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'F1 for the road',
    features: ['F1 Technology', 'Hybrid Hypercar', 'Adrian Newey Design', 'Track Focus'],
    specifications: {
      engine: '6.5L V12 + Electric Motor',
      power: '1139 HP',
      acceleration: '0-100 km/h in 2.5s',
      topSpeed: '402 km/h',
      fuelType: 'Hybrid',
      transmission: '7-Speed Manual'
    },
    inStock: true,
    category: 'sports'
  },
  {
    id: 'aston-martin-vanquish',
    name: 'Vanquish',
    brand: 'aston-martin',
    price: 35000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The flagship grand tourer',
    features: ['V12 Engine', 'Carbon Fiber', 'Flagship Model', 'Ultimate Luxury'],
    specifications: {
      engine: '5.9L V12',
      power: '565 HP',
      acceleration: '0-100 km/h in 3.8s',
      topSpeed: '295 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic'
    },
    inStock: true,
    category: 'coupe'
  },
  {
    id: 'aston-martin-rapide-s',
    name: 'Rapide S',
    brand: 'aston-martin',
    price: 18000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'The four-door sports car',
    features: ['Four Doors', 'V12 Power', 'Sports Car', 'Practical Luxury'],
    specifications: {
      engine: '5.9L V12',
      power: '552 HP',
      acceleration: '0-100 km/h in 4.4s',
      topSpeed: '327 km/h',
      fuelType: 'Petrol',
      transmission: '8-Speed Automatic'
    },
    inStock: true,
    category: 'sedan'
  },
  {
    id: 'aston-martin-one-77',
    name: 'One-77',
    brand: 'aston-martin',
    price: 185000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'Limited to 77 examples',
    features: ['Ultra Limited', 'Handcrafted', 'V12 Power', 'Collector\'s Item'],
    specifications: {
      engine: '7.3L V12',
      power: '750 HP',
      acceleration: '0-100 km/h in 3.5s',
      topSpeed: '354 km/h',
      fuelType: 'Petrol',
      transmission: '6-Speed Manual'
    },
    inStock: false,
    category: 'sports'
  },
  {
    id: 'aston-martin-victor',
    name: 'Victor',
    brand: 'aston-martin',
    price: 95000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'One-off track monster',
    features: ['One-Off Build', 'Track Focused', 'Extreme Performance', 'Unique Design'],
    specifications: {
      engine: '7.3L V12',
      power: '836 HP',
      acceleration: '0-100 km/h in 3.2s',
      topSpeed: '330 km/h',
      fuelType: 'Petrol',
      transmission: '6-Speed Manual'
    },
    inStock: false,
    category: 'sports'
  },
  {
    id: 'aston-martin-vulcan',
    name: 'Vulcan',
    brand: 'aston-martin',
    price: 155000000,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'Track-only beast',
    features: ['Track Only', 'Extreme Aerodynamics', 'Racing Technology', 'Limited Production'],
    specifications: {
      engine: '7.0L V12',
      power: '820 HP',
      acceleration: '0-100 km/h in 3.2s',
      topSpeed: '362 km/h',
      fuelType: 'Petrol',
      transmission: '6-Speed Sequential'
    },
    inStock: true,
    category: 'sports'
  }
];
