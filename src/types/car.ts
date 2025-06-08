
export interface Car {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  features: string[];
  specifications: {
    engine: string;
    power: string;
    acceleration: string;
    topSpeed: string;
    fuelType: string;
    transmission: string;
  };
  inStock: boolean;
  category: 'sedan' | 'suv' | 'coupe' | 'convertible' | 'sports';
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  description: string;
  founded: string;
  headquarters: string;
}

export interface CartItem {
  car: Car;
  quantity: number;
}
