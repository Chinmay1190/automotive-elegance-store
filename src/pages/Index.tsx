
import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { CarCard } from '@/components/CarCard';
import { BrandCard } from '@/components/BrandCard';
import { Button } from '@/components/ui/button';
import { cars, brands } from '@/data/cars';
import { ArrowRight, Star, Shield, Truck, Headphones } from 'lucide-react';

export default function Index() {
  const featuredCars = cars.slice(0, 8);
  const brandCounts = brands.map(brand => ({
    ...brand,
    count: cars.filter(car => car.brand === brand.id).length
  }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1563720223185-11003d516935?w=1920"
            alt="Luxury Car"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-luxury font-bold mb-6 bg-gradient-to-r from-luxury-gold via-white to-luxury-gold bg-clip-text text-transparent">
            Luxury Redefined
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            Discover the world's most exclusive automotive masterpieces. From Bentley to Rolls-Royce, 
            experience unparalleled luxury and performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cars">
              <Button size="lg" className="bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold px-8 py-4 text-lg">
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/brands">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg">
                View Brands
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-luxury font-bold text-foreground mb-4">
              Premium Brands
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore collections from the world's most prestigious automotive manufacturers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandCounts.map((brand, index) => (
              <div key={brand.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <BrandCard brand={brand} carCount={brand.count} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-luxury font-bold text-foreground mb-4">
              Featured Collection
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Handpicked selection of extraordinary vehicles from our premium inventory
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCars.map((car, index) => (
              <div key={car.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CarCard car={car} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/cars">
              <Button size="lg" variant="outline" className="border-luxury-gold/50 hover:border-luxury-gold">
                View All Cars
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-luxury font-bold text-foreground mb-4">
              Why Choose LuxuryAutos?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Star,
                title: 'Premium Quality',
                description: 'Only the finest vehicles from prestigious manufacturers'
              },
              {
                icon: Shield,
                title: 'Authenticated',
                description: 'Every vehicle verified for authenticity and condition'
              },
              {
                icon: Truck,
                title: 'Secure Delivery',
                description: 'White-glove delivery service to your doorstep'
              },
              {
                icon: Headphones,
                title: '24/7 Support',
                description: 'Dedicated concierge service for all your needs'
              }
            ].map((feature, index) => (
              <div key={feature.title} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-luxury-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '65+', label: 'Luxury Vehicles' },
              { number: '6', label: 'Premium Brands' },
              { number: '24/7', label: 'Customer Support' },
              { number: '100%', label: 'Satisfaction Guarantee' }
            ].map((stat, index) => (
              <div key={stat.label} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-luxury font-bold text-luxury-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-luxury font-bold mb-4 text-luxury-gold">LuxuryAutos</h3>
              <p className="text-background/80">
                India's premier destination for luxury automobiles. Experience excellence redefined.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/cars" className="block text-background/80 hover:text-luxury-gold transition-colors">All Cars</Link>
                <Link to="/brands" className="block text-background/80 hover:text-luxury-gold transition-colors">Brands</Link>
                <Link to="/about" className="block text-background/80 hover:text-luxury-gold transition-colors">About Us</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2">
                <div className="text-background/80">24/7 Concierge</div>
                <div className="text-background/80">+91 98765 43210</div>
                <div className="text-background/80">support@luxuryautos.in</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="text-background/80">
                Stay connected for the latest luxury arrivals and exclusive offers.
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2024 LuxuryAutos. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
