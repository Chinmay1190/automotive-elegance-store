
import React from 'react';
import { Header } from '@/components/Header';
import { BrandCard } from '@/components/BrandCard';
import { brands, cars } from '@/data/cars';

export default function Brands() {
  const brandCounts = brands.map(brand => ({
    ...brand,
    count: cars.filter(car => car.brand === brand.id).length
  }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-luxury font-bold text-foreground mb-4">
            Premium Automotive Brands
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the world's most prestigious automotive manufacturers. Each brand represents 
            decades of craftsmanship, innovation, and uncompromising luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brandCounts.map((brand, index) => (
            <div key={brand.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <BrandCard brand={brand} carCount={brand.count} />
            </div>
          ))}
        </div>

        {/* Brand Heritage Section */}
        <section className="mt-20 py-16 bg-muted/50 rounded-lg animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-luxury font-bold text-foreground mb-4">
              A Legacy of Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each brand in our collection represents over a century of automotive innovation, 
              luxury craftsmanship, and unparalleled performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
            {[
              {
                title: 'British Excellence',
                description: 'Bentley, Rolls-Royce, McLaren, and Aston Martin represent the pinnacle of British automotive craftsmanship.',
                brands: ['Bentley', 'Rolls-Royce', 'McLaren', 'Aston Martin']
              },
              {
                title: 'Italian Passion',
                description: 'Ferrari and Lamborghini embody the Italian spirit of performance, design, and automotive artistry.',
                brands: ['Ferrari', 'Lamborghini']
              },
              {
                title: 'Innovation Leaders',
                description: 'From traditional luxury to cutting-edge hybrid technology, our brands lead automotive innovation.',
                brands: ['All Brands']
              }
            ].map((section, index) => (
              <div key={section.title} className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-3">{section.title}</h3>
                <p className="text-muted-foreground mb-4">{section.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {section.brands.map(brand => (
                    <span key={brand} className="px-3 py-1 bg-luxury-gold/10 text-luxury-gold rounded-full text-sm">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
