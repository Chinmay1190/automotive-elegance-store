
import React from 'react';
import { Header } from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Globe, Shield, Heart, Star } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-luxury-charcoal to-black text-white">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-luxury font-bold mb-6">
            About LuxuryAutos
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            India's premier destination for the world's most exclusive automobiles. 
            We curate extraordinary vehicles for extraordinary individuals.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-luxury font-bold text-foreground mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              To provide discerning automotive enthusiasts access to the world's most prestigious vehicles, 
              backed by unparalleled service and expertise. We believe that luxury is not just about the 
              destination, but the entire journey.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: 'Excellence',
                  description: 'Curating only the finest vehicles from prestigious manufacturers worldwide'
                },
                {
                  icon: Heart,
                  title: 'Passion',
                  description: 'Deep appreciation for automotive artistry, craftsmanship, and heritage'
                },
                {
                  icon: Star,
                  title: 'Service',
                  description: 'White-glove experience from selection to delivery and beyond'
                }
              ].map((value, index) => (
                <Card key={value.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-luxury-gold" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-luxury font-bold text-foreground mb-4">
              By the Numbers
            </h2>
            <p className="text-xl text-muted-foreground">
              Our commitment to excellence reflected in our achievements
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '65+', label: 'Luxury Vehicles', description: 'Premium automobiles in our collection' },
              { number: '6', label: 'Prestigious Brands', description: 'World-renowned manufacturers' },
              { number: '1000+', label: 'Happy Clients', description: 'Satisfied luxury car owners' },
              { number: '24/7', label: 'Concierge Service', description: 'Round-the-clock support' }
            ].map((stat, index) => (
              <div key={stat.label} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-luxury font-bold text-luxury-gold mb-2">
                  {stat.number}
                </div>
                <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-luxury font-bold text-foreground mb-4">
              Why Choose LuxuryAutos?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're more than just a luxury car dealership. We're your partners in experiencing 
              automotive excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Authenticity Guaranteed',
                description: 'Every vehicle is thoroughly inspected and verified for authenticity, condition, and provenance.',
                features: ['Comprehensive inspection', 'Documentation verified', 'History report included']
              },
              {
                icon: Users,
                title: 'Expert Consultation',
                description: 'Our team of automotive specialists provides personalized guidance throughout your journey.',
                features: ['Personal advisors', 'Technical expertise', 'Market insights']
              },
              {
                icon: Globe,
                title: 'Global Network',
                description: 'Access to exclusive vehicles worldwide through our extensive network of partners.',
                features: ['Worldwide sourcing', 'Rare finds', 'Exclusive access']
              }
            ].map((feature, index) => (
              <Card key={feature.title} className="animate-fade-in hover-scale" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mb-6">
                    <feature.icon className="h-8 w-8 text-luxury-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <ul className="space-y-1">
                    {feature.features.map(item => (
                      <li key={item} className="text-sm text-muted-foreground">• {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-luxury font-bold text-foreground mb-8">
              Experience the Difference
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Ready to discover your perfect luxury vehicle? Our team is here to guide you 
              through every step of your automotive journey.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                <p className="text-muted-foreground">+91 98765 43210</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground">concierge@luxuryautos.in</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Showroom</h3>
                <p className="text-muted-foreground">Mumbai • Delhi • Bangalore</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
