
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
      <Card className="group overflow-hidden bg-card border border-border hover:border-luxury-gold/50 transition-all duration-300 hover-scale cursor-pointer">
        <CardContent className="p-8 text-center">
          <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
            {brand.logo}
          </div>
          
          <h3 className="text-2xl font-luxury font-bold text-foreground group-hover:text-luxury-gold transition-colors mb-2">
            {brand.name}
          </h3>
          
          <p className="text-muted-foreground mb-4 text-sm">
            {brand.description}
          </p>
          
          <div className="space-y-2 text-sm text-muted-foreground mb-6">
            <div>Founded: {brand.founded}</div>
            <div>Headquarters: {brand.headquarters}</div>
            <div className="text-luxury-gold font-semibold">{carCount} Models Available</div>
          </div>
          
          <Button 
            variant="outline" 
            className="border-luxury-gold/50 hover:border-luxury-gold hover:bg-luxury-gold/10"
          >
            Explore Collection
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
}
