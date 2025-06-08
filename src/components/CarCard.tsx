
import React from 'react';
import { Link } from 'react-router-dom';
import { Car } from '@/types/car';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/utils/currency';
import { Zap, Gauge, Fuel } from 'lucide-react';

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  const { addToCart } = useCart();

  return (
    <Card className="group overflow-hidden bg-card border border-border hover:border-luxury-gold/50 transition-all duration-300 hover-scale">
      <div className="relative overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {car.originalPrice && (
          <Badge className="absolute top-3 left-3 bg-red-500 text-white">
            Save ₹{((car.originalPrice - car.price) / 100000).toFixed(1)}L
          </Badge>
        )}
        
        {!car.inStock && (
          <Badge className="absolute top-3 right-3 bg-gray-500 text-white">
            Out of Stock
          </Badge>
        )}
      </div>

      <CardContent className="p-6">
        <div className="mb-2">
          <h3 className="text-xl font-luxury font-semibold text-foreground group-hover:text-luxury-gold transition-colors">
            {car.name}
          </h3>
          <p className="text-sm text-muted-foreground capitalize">{car.brand}</p>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {car.description}
        </p>

        <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
          <div className="flex items-center space-x-1">
            <Zap className="h-3 w-3 text-luxury-gold" />
            <span>{car.specifications.power}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Gauge className="h-3 w-3 text-luxury-gold" />
            <span>{car.specifications.acceleration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Fuel className="h-3 w-3 text-luxury-gold" />
            <span>{car.specifications.fuelType}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-2xl font-bold text-luxury-gold">
              {formatPrice(car.price)}
            </div>
            {car.originalPrice && (
              <div className="text-sm text-muted-foreground line-through">
                {formatPrice(car.originalPrice)}
              </div>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 space-y-2">
        <div className="flex space-x-2 w-full">
          <Button
            onClick={() => addToCart(car)}
            disabled={!car.inStock}
            className="flex-1 bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold"
          >
            {car.inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>
          <Link to={`/car/${car.id}`} className="flex-1">
            <Button variant="outline" className="w-full border-luxury-gold/50 hover:border-luxury-gold">
              View Details
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
