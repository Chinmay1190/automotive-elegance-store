
import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { CarCard } from '@/components/CarCard';
import { BrandCard } from '@/components/BrandCard';
import { Button } from '@/components/ui/button';
import { cars, brands } from '@/data/cars';
import { ArrowRight, Star, Shield, Truck, Headphones, Sparkles, Crown, Award, Zap } from 'lucide-react';
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
    "https://images.unsplash.com/photo-1563720223185-11003d516935?w=1920&h=1080&fit=crop&q=80", // Luxury Car
    "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&h=1080&fit=crop&q=80", // Rolls Royce style
    "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1920&h=1080&fit=crop&q=80", // Bentley style
    "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1920&h=1080&fit=crop&q=80", // Luxury sedan
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Header />
      
      {/* Hero Section with Enhanced Sliding Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 6000,
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
                      className="w-full h-full object-cover scale-105 animate-[scale_25s_ease-in-out_infinite_alternate]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60" />
                    <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/15 via-transparent to-luxury-gold/15" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-luxury-gold/5 to-transparent" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-7xl mx-auto">
          <div className="mb-12 floating-element">
            <div className="relative inline-block">
              <Crown className="h-20 w-20 text-luxury-gold mx-auto mb-6 pulse-soft" />
              <div className="absolute inset-0 bg-luxury-gold/30 rounded-full blur-xl opacity-50 animate-pulse" />
            </div>
          </div>
          
          <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-luxury font-bold mb-12 leading-tight scale-in-center">
            <span className="bg-gradient-to-r from-luxury-gold via-white to-luxury-gold bg-clip-text text-transparent text-shimmer">
              Luxury Redefined
            </span>
          </h1>
          
          <p className="text-2xl md:text-4xl mb-16 max-w-5xl mx-auto text-gray-200 leading-relaxed font-light fade-in-up tracking-wide">
            Discover the world's most exclusive automotive masterpieces. From Bentley to Rolls-Royce, 
            experience unparalleled luxury and performance in every detail.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center slide-in-bottom">
            <Link to="/cars">
              <Button size="lg" className="btn-luxury bg-gradient-to-r from-luxury-gold via-luxury-gold-light to-luxury-gold hover:from-luxury-gold-dark hover:to-luxury-gold text-black font-bold px-16 py-8 text-2xl rounded-full shadow-2xl hover:shadow-luxury-gold/60 transition-all duration-500 transform hover:scale-105 luxury-glow">
                <Sparkles className="mr-4 h-7 w-7" />
                Explore Collection
                <ArrowRight className="ml-4 h-7 w-7" />
              </Button>
            </Link>
            <Link to="/brands">
              <Button size="lg" variant="outline" className="btn-luxury border-3 border-white/80 text-white hover:bg-white hover:text-black px-16 py-8 text-2xl rounded-full backdrop-blur-sm transition-all duration-500 transform hover:scale-105 glass-effect">
                <Award className="mr-4 h-7 w-7" />
                View Brands
              </Button>
            </Link>
          </div>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-center fade-in-scale">
            <div className="professional-card p-8 luxury-card">
              <div className="text-5xl font-luxury font-bold text-luxury-gold mb-3 bounce-gentle">65+</div>
              <div className="text-white/90 text-lg font-medium">Premium Vehicles</div>
            </div>
            <div className="professional-card p-8 luxury-card" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl font-luxury font-bold text-luxury-gold mb-3 bounce-gentle">6</div>
              <div className="text-white/90 text-lg font-medium">Luxury Brands</div>
            </div>
            <div className="professional-card p-8 luxury-card" style={{ animationDelay: '0.4s' }}>
              <div className="text-5xl font-luxury font-bold text-luxury-gold mb-3 bounce-gentle">24/7</div>
              <div className="text-white/90 text-lg font-medium">Premium Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Brands - Enhanced */}
      <section className="py-32 bg-gradient-to-br from-muted/40 via-background to-muted/40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-60" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.04'%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-24 fade-in-up">
            <div className="inline-flex items-center gap-4 professional-card px-8 py-4 mb-8">
              <Star className="h-6 w-6 text-luxury-gold rotate-slow" />
              <span className="text-luxury-gold font-bold text-lg">Premium Brands</span>
              <Star className="h-6 w-6 text-luxury-gold rotate-slow" />
            </div>
            
            <h2 className="text-6xl md:text-8xl font-luxury font-bold text-foreground mb-8 scale-in-center">
              World-Class <span className="bg-gradient-to-r from-luxury-gold to-luxury-gold-dark bg-clip-text text-transparent text-shimmer">Manufacturers</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed fade-in-up font-light">
              Explore collections from the world's most prestigious automotive manufacturers, 
              each representing decades of heritage and excellence in luxury craftsmanship.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {brandCounts.map((brand, index) => (
              <div key={brand.id} className="fade-in-scale professional-card luxury-card" style={{ animationDelay: `${index * 0.15}s` }}>
                <BrandCard brand={brand} carCount={brand.count} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars - Enhanced */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/5 via-transparent to-luxury-gold/5" />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-24 fade-in-up">
            <div className="inline-flex items-center gap-4 professional-card px-8 py-4 mb-8">
              <Sparkles className="h-6 w-6 text-luxury-gold pulse-soft" />
              <span className="text-luxury-gold font-bold text-lg">Featured Collection</span>
              <Sparkles className="h-6 w-6 text-luxury-gold pulse-soft" />
            </div>
            
            <h2 className="text-6xl md:text-8xl font-luxury font-bold text-foreground mb-8 scale-in-center">
              Handpicked <span className="bg-gradient-to-r from-luxury-gold to-luxury-gold-dark bg-clip-text text-transparent text-shimmer">Excellence</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed fade-in-up font-light">
              Our curated selection of extraordinary vehicles from our premium inventory, 
              each one a masterpiece of engineering and design, waiting for the discerning collector.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {featuredCars.map((car, index) => (
              <div key={car.id} className="fade-in-scale professional-card luxury-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <CarCard car={car} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-20 fade-in-up">
            <Link to="/cars">
              <Button size="lg" variant="outline" className="btn-luxury border-3 border-luxury-gold/60 hover:border-luxury-gold hover:bg-luxury-gold/15 px-16 py-8 text-2xl rounded-full transition-all duration-500 transform hover:scale-105 professional-card">
                <Crown className="mr-4 h-7 w-7" />
                View Complete Collection
                <ArrowRight className="ml-4 h-7 w-7" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features - Enhanced */}
      <section className="py-32 bg-gradient-to-br from-muted/40 via-background to-muted/40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.06'%3E%3Cpath d='M30 30c0-16.569-13.431-30-30-30v30h30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-24 fade-in-up">
            <h2 className="text-6xl md:text-8xl font-luxury font-bold text-foreground mb-8 scale-in-center">
              Why Choose <span className="bg-gradient-to-r from-luxury-gold to-luxury-gold-dark bg-clip-text text-transparent text-shimmer">LuxuryAutos?</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto fade-in-up font-light">
              Experience the pinnacle of luxury automotive retail with our unmatched service and expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: Star,
                title: 'Premium Quality',
                description: 'Only the finest vehicles from prestigious manufacturers, each one carefully inspected and authenticated'
              },
              {
                icon: Shield,
                title: 'Authenticated',
                description: 'Every vehicle verified for authenticity, condition, and complete documentation with full provenance'
              },
              {
                icon: Truck,
                title: 'Secure Delivery',
                description: 'White-glove delivery service with full insurance coverage and professional handling to your doorstep'
              },
              {
                icon: Headphones,
                title: '24/7 Support',
                description: 'Dedicated luxury concierge service for all your automotive needs, inquiries, and personalized assistance'
              }
            ].map((feature, index) => (
              <div key={feature.title} className="text-center fade-in-scale professional-card luxury-card p-8" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-luxury-gold/30 to-luxury-gold/15 rounded-full flex items-center justify-center mx-auto floating-element">
                    <feature.icon className="h-12 w-12 text-luxury-gold" />
                  </div>
                  <div className="absolute inset-0 bg-luxury-gold/20 rounded-full blur-xl opacity-50 animate-pulse" />
                </div>
                <h3 className="text-2xl font-luxury font-semibold text-foreground mb-6">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - Enhanced */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
            {[
              { number: '65+', label: 'Luxury Vehicles', icon: '🚗', color: 'from-blue-500 to-purple-500' },
              { number: '6', label: 'Premium Brands', icon: '⭐', color: 'from-yellow-500 to-orange-500' },
              { number: '24/7', label: 'Customer Support', icon: '🎯', color: 'from-green-500 to-teal-500' },
              { number: '100%', label: 'Satisfaction Guarantee', icon: '✨', color: 'from-pink-500 to-red-500' }
            ].map((stat, index) => (
              <div key={stat.label} className="fade-in-scale professional-card luxury-card group p-10" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-7xl mb-6 bounce-gentle">
                  {stat.icon}
                </div>
                <div className="text-6xl md:text-7xl font-luxury font-bold text-luxury-gold mb-6 text-shimmer">
                  {stat.number}
                </div>
                <div className="text-xl text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Enhanced */}
      <footer className="bg-gradient-to-br from-foreground via-foreground to-foreground/95 text-background py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.15'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 fade-in-up">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <Crown className="h-10 w-10 text-luxury-gold" />
                <h3 className="text-4xl font-luxury font-bold text-luxury-gold text-shimmer">LuxuryAutos</h3>
              </div>
              <p className="text-background/90 text-xl leading-relaxed mb-8 font-light">
                India's premier destination for luxury automobiles. We curate the finest collection 
                of premium vehicles and provide an unmatched luxury shopping experience that defines excellence.
              </p>
              <div className="flex gap-6">
                <div className="w-16 h-16 professional-card flex items-center justify-center hover-scale cursor-pointer">
                  <span className="text-luxury-gold text-2xl">📧</span>
                </div>
                <div className="w-16 h-16 professional-card flex items-center justify-center hover-scale cursor-pointer">
                  <span className="text-luxury-gold text-2xl">📱</span>
                </div>
                <div className="w-16 h-16 professional-card flex items-center justify-center hover-scale cursor-pointer">
                  <span className="text-luxury-gold text-2xl">🌐</span>
                </div>
              </div>
            </div>
            
            <div className="fade-in-left">
              <h4 className="font-luxury font-semibold text-2xl mb-8 text-luxury-gold">Quick Links</h4>
              <div className="space-y-6">
                <Link to="/cars" className="block text-background/90 hover:text-luxury-gold transition-colors text-xl hover-scale">All Cars</Link>
                <Link to="/brands" className="block text-background/90 hover:text-luxury-gold transition-colors text-xl hover-scale">Brands</Link>
                <Link to="/about" className="block text-background/90 hover:text-luxury-gold transition-colors text-xl hover-scale">About Us</Link>
              </div>
            </div>
            
            <div className="fade-in-right">
              <h4 className="font-luxury font-semibold text-2xl mb-8 text-luxury-gold">Premium Support</h4>
              <div className="space-y-6">
                <div className="text-background/90 text-xl">24/7 Luxury Concierge</div>
                <div className="text-luxury-gold font-bold text-2xl pulse-soft">+91 98765 43210</div>
                <div className="text-background/90 text-lg">support@luxuryautos.in</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/30 mt-16 pt-12 text-center text-background/70 fade-in-up">
            <p className="text-xl font-light">&copy; 2024 LuxuryAutos. All rights reserved. | Luxury Redefined.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
