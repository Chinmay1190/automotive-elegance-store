
import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { CarCard } from '@/components/CarCard';
import { BrandCard } from '@/components/BrandCard';
import { Button } from '@/components/ui/button';
import { cars, brands } from '@/data/cars';
import { ArrowRight, Star, Shield, Truck, Headphones, Sparkles } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Index() {
  const featuredCars = cars.slice(0, 8);
  const brandCounts = brands.map(brand => ({
    ...brand,
    count: cars.filter(car => car.brand === brand.id).length
  }));

  const luxuryCarImages = [
    "https://images.unsplash.com/photo-1563720223185-11003d516935?w=1920&h=1080&fit=crop", // Luxury Car
    "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&h=1080&fit=crop", // Rolls Royce style
    "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1920&h=1080&fit=crop", // Bentley style
    "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1920&h=1080&fit=crop", // Luxury sedan
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Header />
      
      {/* Hero Section with Sliding Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full h-full"
          >
            <CarouselContent className="h-full -ml-0">
              {luxuryCarImages.map((image, index) => (
                <CarouselItem key={index} className="h-full pl-0">
                  <div className="relative w-full h-full">
                    <img
                      src={image}
                      alt={`Luxury Car ${index + 1}`}
                      className="w-full h-full object-cover scale-110 animate-[scale_20s_ease-in-out_infinite_alternate]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50" />
                    <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/10 via-transparent to-luxury-gold/10" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <div className="mb-8 floating-element">
            <Sparkles className="h-16 w-16 text-luxury-gold mx-auto mb-4 pulse-soft" />
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-luxury font-bold mb-8 leading-tight scale-in-center">
            <span className="bg-gradient-to-r from-luxury-gold via-white to-luxury-gold bg-clip-text text-transparent text-shimmer">
              Luxury Redefined
            </span>
          </h1>
          
          <p className="text-xl md:text-3xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed font-light fade-in-up">
            Discover the world's most exclusive automotive masterpieces. From Bentley to Rolls-Royce, 
            experience unparalleled luxury and performance in every detail.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center slide-in-bottom">
            <Link to="/cars">
              <Button size="lg" className="btn-luxury bg-gradient-to-r from-luxury-gold to-luxury-gold-dark hover:from-luxury-gold-dark hover:to-luxury-gold text-black font-bold px-12 py-6 text-xl rounded-full shadow-2xl hover:shadow-luxury-gold/50 transition-all duration-300 transform hover:scale-105 luxury-glow">
                <Sparkles className="mr-3 h-6 w-6" />
                Explore Collection
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
            <Link to="/brands">
              <Button size="lg" variant="outline" className="btn-luxury border-2 border-white/70 text-white hover:bg-white hover:text-black px-12 py-6 text-xl rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-105">
                <Star className="mr-3 h-6 w-6" />
                View Brands
              </Button>
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center fade-in-scale">
            <div className="glass-effect rounded-2xl p-6 luxury-card">
              <div className="text-4xl font-luxury font-bold text-luxury-gold mb-2 bounce-gentle">65+</div>
              <div className="text-white/80">Premium Vehicles</div>
            </div>
            <div className="glass-effect rounded-2xl p-6 luxury-card" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-luxury font-bold text-luxury-gold mb-2 bounce-gentle">6</div>
              <div className="text-white/80">Luxury Brands</div>
            </div>
            <div className="glass-effect rounded-2xl p-6 luxury-card" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-luxury font-bold text-luxury-gold mb-2 bounce-gentle">24/7</div>
              <div className="text-white/80">Premium Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-24 bg-gradient-to-br from-muted/30 via-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-20 fade-in-up">
            <div className="inline-flex items-center gap-3 bg-luxury-gold/10 px-6 py-3 rounded-full mb-6 glass-effect">
              <Star className="h-5 w-5 text-luxury-gold rotate-slow" />
              <span className="text-luxury-gold font-semibold">Premium Brands</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-luxury font-bold text-foreground mb-6 scale-in-center">
              World-Class <span className="bg-gradient-to-r from-luxury-gold to-luxury-gold-dark bg-clip-text text-transparent text-shimmer">Manufacturers</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed fade-in-up">
              Explore collections from the world's most prestigious automotive manufacturers, 
              each representing decades of heritage and excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {brandCounts.map((brand, index) => (
              <div key={brand.id} className="fade-in-scale luxury-card" style={{ animationDelay: `${index * 0.15}s` }}>
                <BrandCard brand={brand} carCount={brand.count} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 fade-in-up">
            <div className="inline-flex items-center gap-3 bg-luxury-gold/10 px-6 py-3 rounded-full mb-6 glass-effect">
              <Sparkles className="h-5 w-5 text-luxury-gold pulse-soft" />
              <span className="text-luxury-gold font-semibold">Featured Collection</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-luxury font-bold text-foreground mb-6 scale-in-center">
              Handpicked <span className="bg-gradient-to-r from-luxury-gold to-luxury-gold-dark bg-clip-text text-transparent text-shimmer">Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed fade-in-up">
              Our curated selection of extraordinary vehicles from our premium inventory, 
              each one a masterpiece of engineering and design
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCars.map((car, index) => (
              <div key={car.id} className="fade-in-scale luxury-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <CarCard car={car} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16 fade-in-up">
            <Link to="/cars">
              <Button size="lg" variant="outline" className="btn-luxury border-2 border-luxury-gold/50 hover:border-luxury-gold hover:bg-luxury-gold/10 px-12 py-6 text-xl rounded-full transition-all duration-300 transform hover:scale-105">
                <Star className="mr-3 h-6 w-6" />
                View Complete Collection
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gradient-to-br from-muted/30 via-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-5xl md:text-7xl font-luxury font-bold text-foreground mb-6 scale-in-center">
              Why Choose <span className="bg-gradient-to-r from-luxury-gold to-luxury-gold-dark bg-clip-text text-transparent text-shimmer">LuxuryAutos?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up">
              Experience the pinnacle of luxury automotive retail with our unmatched service and expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Star,
                title: 'Premium Quality',
                description: 'Only the finest vehicles from prestigious manufacturers, each one carefully inspected'
              },
              {
                icon: Shield,
                title: 'Authenticated',
                description: 'Every vehicle verified for authenticity, condition, and complete documentation'
              },
              {
                icon: Truck,
                title: 'Secure Delivery',
                description: 'White-glove delivery service with full insurance coverage to your doorstep'
              },
              {
                icon: Headphones,
                title: '24/7 Support',
                description: 'Dedicated luxury concierge service for all your automotive needs and inquiries'
              }
            ].map((feature, index) => (
              <div key={feature.title} className="text-center fade-in-scale luxury-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold/20 to-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 floating-element">
                    <feature.icon className="h-10 w-10 text-luxury-gold" />
                  </div>
                </div>
                <h3 className="text-2xl font-luxury font-semibold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '65+', label: 'Luxury Vehicles', icon: '🚗' },
              { number: '6', label: 'Premium Brands', icon: '⭐' },
              { number: '24/7', label: 'Customer Support', icon: '🎯' },
              { number: '100%', label: 'Satisfaction Guarantee', icon: '✨' }
            ].map((stat, index) => (
              <div key={stat.label} className="fade-in-scale luxury-card group" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-6xl mb-4 bounce-gentle">
                  {stat.icon}
                </div>
                <div className="text-5xl md:text-6xl font-luxury font-bold text-luxury-gold mb-4 text-shimmer">
                  {stat.number}
                </div>
                <div className="text-lg text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-foreground via-foreground to-foreground/90 text-background py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.1'%3E%3Ccircle cx='15' cy='15' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 fade-in-up">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-luxury font-bold mb-6 text-luxury-gold text-shimmer">LuxuryAutos</h3>
              <p className="text-background/80 text-lg leading-relaxed mb-6">
                India's premier destination for luxury automobiles. We curate the finest collection 
                of premium vehicles and provide an unmatched luxury shopping experience.
              </p>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-luxury-gold/20 rounded-full flex items-center justify-center hover-scale">
                  <span className="text-luxury-gold">📧</span>
                </div>
                <div className="w-12 h-12 bg-luxury-gold/20 rounded-full flex items-center justify-center hover-scale">
                  <span className="text-luxury-gold">📱</span>
                </div>
                <div className="w-12 h-12 bg-luxury-gold/20 rounded-full flex items-center justify-center hover-scale">
                  <span className="text-luxury-gold">🌐</span>
                </div>
              </div>
            </div>
            
            <div className="fade-in-left">
              <h4 className="font-luxury font-semibold text-xl mb-6 text-luxury-gold">Quick Links</h4>
              <div className="space-y-4">
                <Link to="/cars" className="block text-background/80 hover:text-luxury-gold transition-colors text-lg hover-scale">All Cars</Link>
                <Link to="/brands" className="block text-background/80 hover:text-luxury-gold transition-colors text-lg hover-scale">Brands</Link>
                <Link to="/about" className="block text-background/80 hover:text-luxury-gold transition-colors text-lg hover-scale">About Us</Link>
              </div>
            </div>
            
            <div className="fade-in-right">
              <h4 className="font-luxury font-semibold text-xl mb-6 text-luxury-gold">Premium Support</h4>
              <div className="space-y-4">
                <div className="text-background/80 text-lg">24/7 Luxury Concierge</div>
                <div className="text-luxury-gold font-semibold text-xl pulse-soft">+91 98765 43210</div>
                <div className="text-background/80">support@luxuryautos.in</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60 fade-in-up">
            <p className="text-lg">&copy; 2024 LuxuryAutos. All rights reserved. | Luxury Redefined.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
