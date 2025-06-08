
import React from 'react';
import { Link } from 'react-router-dom';
import { Brand } from '@/types/car';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface BrandCardProps {
  brand: Brand;
  carCount: number;
}

export function BrandCard({ brand, carCount }: BrandCardProps) {
  return (
    <Link to={`/brand/${brand.id}`}>
      <Card className="group overflow-hidden bg-gradient-to-br from-card via-card to-muted/20 border-2 border-border hover:border-luxury-gold/50 transition-all duration-500 card-hover cursor-pointer relative">
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/5 via-transparent to-luxury-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <CardContent className="p-8 text-center relative z-10">
          <div className="text-7xl mb-6 group-hover:scale-125 transition-all duration-500 filter group-hover:drop-shadow-lg">
            {brand.logo}
          </div>
          
          <h3 className="text-3xl font-luxury font-bold text-foreground group-hover:text-luxury-gold transition-all duration-300 mb-3">
            {brand.name}
          </h3>
          
          <p className="text-muted-foreground mb-6 text-base leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
            {brand.description}
          </p>
          
          <div className="space-y-3 text-sm text-muted-foreground mb-8 group-hover:text-foreground/70 transition-colors duration-300">
            <div className="flex justify-between items-center">
              <span className="font-medium">Founded:</span>
              <span>{brand.founded}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Headquarters:</span>
              <span>{brand.headquarters}</span>
            </div>
            <div className="flex justify-between items-center text-luxury-gold font-bold text-lg">
              <span>Models Available:</span>
              <span>{carCount}</span>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            className="w-full border-2 border-luxury-gold/30 hover:border-luxury-gold hover:bg-luxury-gold/10 hover:shadow-lg transition-all duration-300 font-semibold text-lg py-6 group-hover:scale-105"
          >
            <span className="mr-2">✨</span>
            Explore Collection
            <span className="ml-2">→</span>
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
}
