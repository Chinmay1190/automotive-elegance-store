
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cars, brands } from '@/data/cars';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/utils/currency';
import { ArrowLeft, Heart, Share2, Star, Zap, Gauge, Fuel, Cog, Wind, Car } from 'lucide-react';

export default function CarDetail() {
  const { carId } = useParams<{ carId: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const car = cars.find(c => c.id === carId);
  const brand = car ? brands.find(b => b.id === car.brand) : null;

  if (!car || !brand) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Car Not Found</h1>
            <p className="text-muted-foreground mb-8">The requested vehicle could not be found.</p>
            <Link to="/cars">
              <Button>Back to Cars</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const relatedCars = cars.filter(c => c.brand === car.brand && c.id !== car.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6 animate-fade-in">
          <Link to="/cars" className="hover:text-foreground transition-colors">Cars</Link>
          <span>/</span>
          <Link to={`/brand/${car.brand}`} className="hover:text-foreground transition-colors capitalize">
            {car.brand}
          </Link>
          <span>/</span>
          <span className="text-foreground">{car.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Section */}
          <div className="space-y-4 animate-fade-in">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
              {car.originalPrice && (
                <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                  Save ₹{((car.originalPrice - car.price) / 100000).toFixed(1)}L
                </Badge>
              )}
              {!car.inStock && (
                <Badge className="absolute top-4 right-4 bg-gray-500 text-white">
                  Out of Stock
                </Badge>
              )}
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-2xl">{brand.logo}</span>
                <span className="text-lg font-medium text-luxury-gold capitalize">{car.brand}</span>
              </div>
              <h1 className="text-4xl font-luxury font-bold text-foreground mb-4">
                {car.name}
              </h1>
              <p className="text-lg text-muted-foreground">
                {car.description}
              </p>
            </div>

            {/* Price */}
            <div className="border-t border-border pt-6">
              <div className="flex items-center space-x-4">
                <div className="text-4xl font-bold text-luxury-gold">
                  {formatPrice(car.price)}
                </div>
                {car.originalPrice && (
                  <div className="text-xl text-muted-foreground line-through">
                    {formatPrice(car.originalPrice)}
                  </div>
                )}
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Price includes all taxes and documentation
              </p>
            </div>

            {/* Key Specs */}
            <div className="grid grid-cols-2 gap-4 py-6 border-t border-border">
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-luxury-gold" />
                <div>
                  <div className="font-semibold">{car.specifications.power}</div>
                  <div className="text-sm text-muted-foreground">Power</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Gauge className="h-5 w-5 text-luxury-gold" />
                <div>
                  <div className="font-semibold">{car.specifications.acceleration}</div>
                  <div className="text-sm text-muted-foreground">0-100 km/h</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Wind className="h-5 w-5 text-luxury-gold" />
                <div>
                  <div className="font-semibold">{car.specifications.topSpeed}</div>
                  <div className="text-sm text-muted-foreground">Top Speed</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Fuel className="h-5 w-5 text-luxury-gold" />
                <div>
                  <div className="font-semibold">{car.specifications.fuelType}</div>
                  <div className="text-sm text-muted-foreground">Fuel Type</div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4 border-t border-border pt-6">
              <div className="flex space-x-4">
                <Button
                  onClick={() => addToCart(car)}
                  disabled={!car.inStock}
                  className="flex-1 bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold py-3"
                  size="lg"
                >
                  {car.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
              <div className="text-sm text-muted-foreground">
                ⚡ Fast delivery available • 🛡️ Warranty included • 📞 24/7 support
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:w-96">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="description">About</TabsTrigger>
            </TabsList>
            
            <TabsContent value="specifications" className="mt-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(car.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium capitalize text-foreground">
                        {key.replace(/([A-Z])/g, ' $1').toLowerCase()}:
                      </span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="font-medium text-foreground">Category:</span>
                    <span className="text-muted-foreground capitalize">{car.category}</span>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="features" className="mt-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-luxury-gold" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="description" className="mt-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">About this Vehicle</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {car.description}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This exceptional {car.name} represents the pinnacle of {brand.name}'s automotive craftsmanship. 
                  Every detail has been meticulously designed to deliver an unparalleled driving experience, 
                  combining luxury, performance, and cutting-edge technology.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Cars */}
        {relatedCars.length > 0 && (
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-luxury font-bold text-foreground">
                More from {brand.name}
              </h2>
              <Link to={`/brand/${car.brand}`}>
                <Button variant="outline">View All</Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedCars.map((relatedCar, index) => (
                <div key={relatedCar.id} className="animate-fade-in" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                  <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-luxury-gold/50 transition-all duration-300 hover-scale">
                    <Link to={`/car/${relatedCar.id}`}>
                      <img
                        src={relatedCar.image}
                        alt={relatedCar.name}
                        className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold text-foreground mb-1">{relatedCar.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{relatedCar.category}</p>
                        <div className="text-lg font-bold text-luxury-gold">
                          {formatPrice(relatedCar.price)}
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
