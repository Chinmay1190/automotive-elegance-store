import React, { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { CarCard } from '@/components/CarCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cars, brands } from '@/data/cars';
import { Search, Filter, Star, Grid, List } from 'lucide-react';

export default function Cars() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredAndSortedCars = useMemo(() => {
    let filtered = cars.filter(car => {
      const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           car.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBrand = selectedBrand === 'all' || car.brand === selectedBrand;
      const matchesCategory = selectedCategory === 'all' || car.category === selectedCategory;
      
      let matchesPrice = true;
      if (priceRange !== 'all') {
        const price = car.price;
        switch (priceRange) {
          case 'under-30':
            matchesPrice = price < 30000000;
            break;
          case '30-50':
            matchesPrice = price >= 30000000 && price < 50000000;
            break;
          case '50-100':
            matchesPrice = price >= 50000000 && price < 100000000;
            break;
          case 'over-100':
            matchesPrice = price >= 100000000;
            break;
        }
      }
      
      return matchesSearch && matchesBrand && matchesCategory && matchesPrice;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'brand':
          return a.brand.localeCompare(b.brand);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedBrand, selectedCategory, priceRange, sortBy]);

  const categories = ['all', 'sedan', 'suv', 'coupe', 'convertible', 'sports'];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 animate-fade-in text-center">
          <div className="inline-flex items-center gap-3 bg-luxury-gold/10 px-6 py-3 rounded-full mb-6">
            <Star className="h-5 w-5 text-luxury-gold" />
            <span className="text-luxury-gold font-semibold">Complete Collection</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-luxury font-bold text-foreground mb-6">
            Our Premium <span className="text-shimmer">Vehicles</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover {cars.length} extraordinary vehicles from the world's most prestigious brands, 
            each one representing the pinnacle of automotive excellence
          </p>
        </div>

        {/* Enhanced Filters */}
        <div className="bg-gradient-to-r from-card via-card to-muted/20 border-2 border-border rounded-2xl p-8 mb-12 animate-fade-in luxury-shadow">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-luxury font-bold text-foreground flex items-center gap-3">
              <Filter className="h-6 w-6 text-luxury-gold" />
              Refine Your Search
            </h3>
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-full"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-full"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {/* Search */}
            <div className="lg:col-span-2 relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-luxury-gold transition-colors" />
              <Input
                placeholder="Search luxury cars or brands..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 rounded-xl border-2 focus:border-luxury-gold transition-all duration-300"
              />
            </div>

            {/* Brand Filter */}
            <Select value={selectedBrand} onValueChange={setSelectedBrand}>
              <SelectTrigger className="h-12 rounded-xl border-2 focus:border-luxury-gold">
                <SelectValue placeholder="All Brands" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Brands</SelectItem>
                {brands.map(brand => (
                  <SelectItem key={brand.id} value={brand.id}>
                    {brand.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="h-12 rounded-xl border-2 focus:border-luxury-gold">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Price Filter */}
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="h-12 rounded-xl border-2 focus:border-luxury-gold">
                <SelectValue placeholder="All Prices" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under-30">Under ₹3 Cr</SelectItem>
                <SelectItem value="30-50">₹3-5 Cr</SelectItem>
                <SelectItem value="50-100">₹5-10 Cr</SelectItem>
                <SelectItem value="over-100">Over ₹10 Cr</SelectItem>
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="h-12 rounded-xl border-2 focus:border-luxury-gold">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name A-Z</SelectItem>
                <SelectItem value="brand">Brand</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
            <div className="flex items-center gap-4">
              <p className="text-muted-foreground">
                Showing <span className="font-bold text-luxury-gold">{filteredAndSortedCars.length}</span> of <span className="font-bold">{cars.length}</span> luxury vehicles
              </p>
              {filteredAndSortedCars.length !== cars.length && (
                <div className="h-2 w-2 bg-luxury-gold rounded-full animate-pulse" />
              )}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchTerm('');
                setSelectedBrand('all');
                setSelectedCategory('all');
                setPriceRange('all');
                setSortBy('name');
              }}
              className="rounded-full border-luxury-gold/30 hover:border-luxury-gold hover:bg-luxury-gold/10"
            >
              <Filter className="h-4 w-4 mr-2" />
              Clear All Filters
            </Button>
          </div>
        </div>

        {/* Results */}
        <div className={`grid gap-8 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {filteredAndSortedCars.map((car, index) => (
            <div key={car.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
              <CarCard car={car} />
            </div>
          ))}
        </div>

        {filteredAndSortedCars.length === 0 && (
          <div className="text-center py-20 animate-fade-in">
            <div className="w-32 h-32 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-8">
              <Search className="h-16 w-16 text-muted-foreground" />
            </div>
            <h3 className="text-3xl font-luxury font-semibold text-foreground mb-4">No vehicles found</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
              We couldn't find any luxury vehicles matching your criteria. Try adjusting your filters.
            </p>
            <Button
              size="lg"
              onClick={() => {
                setSearchTerm('');
                setSelectedBrand('all');
                setSelectedCategory('all');
                setPriceRange('all');
              }}
              className="rounded-full px-8 py-3"
            >
              <Star className="mr-2 h-5 w-5" />
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
