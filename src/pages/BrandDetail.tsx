
import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { CarCard } from '@/components/CarCard';
import { brands, cars } from '@/data/cars';
import { formatPrice } from '@/utils/currency';

export default function BrandDetail() {
  const { brandId } = useParams<{ brandId: string }>();
  const brand = brands.find(b => b.id === brandId);
  const brandCars = cars.filter(car => car.brand === brandId);

  if (!brand) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Brand Not Found</h1>
            <p className="text-muted-foreground">The requested brand could not be found.</p>
          </div>
        </div>
      </div>
    );
  }

  const averagePrice = brandCars.length > 0 
    ? brandCars.reduce((sum, car) => sum + car.price, 0) / brandCars.length 
    : 0;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-luxury-charcoal to-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in">
            <div className="text-8xl mb-6">{brand.logo}</div>
            <h1 className="text-5xl md:text-6xl font-luxury font-bold mb-4">
              {brand.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {brand.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div>
                <div className="text-2xl font-bold text-luxury-gold">{brand.founded}</div>
                <div className="text-sm text-gray-400">Founded</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-luxury-gold">{brandCars.length}</div>
                <div className="text-sm text-gray-400">Models Available</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-luxury-gold">{formatPrice(averagePrice)}</div>
                <div className="text-sm text-gray-400">Average Price</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Information */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-luxury font-bold text-foreground mb-6">
              Heritage & Excellence
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Company Overview</h3>
                <p className="text-muted-foreground mb-4">
                  {brand.name} has been synonymous with luxury and performance since {brand.founded}. 
                  Based in {brand.headquarters}, the company continues to push the boundaries of 
                  automotive excellence.
                </p>
                <div className="space-y-2">
                  <div><strong>Founded:</strong> {brand.founded}</div>
                  <div><strong>Headquarters:</strong> {brand.headquarters}</div>
                  <div><strong>Models in Collection:</strong> {brandCars.length}</div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Why Choose {brand.name}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Uncompromising luxury and craftsmanship</li>
                  <li>• Cutting-edge technology and innovation</li>
                  <li>• Exclusive ownership experience</li>
                  <li>• World-class performance and reliability</li>
                  <li>• Heritage and prestige</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cars Collection */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-luxury font-bold text-foreground mb-4">
              {brand.name} Collection
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover our complete selection of {brand.name} vehicles
            </p>
          </div>

          {brandCars.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {brandCars.map((car, index) => (
                <div key={car.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                  <CarCard car={car} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 animate-fade-in">
              <div className="text-6xl mb-4">🚗</div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">Coming Soon</h3>
              <p className="text-muted-foreground">
                We're working on adding {brand.name} vehicles to our collection.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
