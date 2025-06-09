
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Menu, Moon, Sun, ShoppingCart, Crown, Sparkles } from 'lucide-react';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { getTotalItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Brands', href: '/brands' },
    { name: 'Cars', href: '/cars' },
    { name: 'About', href: '/about' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/98 backdrop-blur-xl supports-[backdrop-filter]:bg-background/95 border-b border-border/50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Crown className="h-10 w-10 text-luxury-gold transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
              <div className="absolute inset-0 bg-luxury-gold/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-150" />
              <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-luxury-gold opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
            </div>
            <span className="text-2xl font-luxury font-bold bg-gradient-to-r from-luxury-gold via-luxury-gold-light to-luxury-gold bg-clip-text text-transparent text-shimmer">
              LuxuryAutos
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground/80 hover:text-foreground transition-all duration-300 relative group text-lg font-medium"
              >
                {item.name}
                <span className="absolute inset-x-0 -bottom-2 h-1 bg-gradient-to-r from-luxury-gold to-luxury-gold-light scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                <span className="absolute inset-x-0 -bottom-2 h-1 bg-luxury-gold/30 blur-sm scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-luxury-gold/15 transition-all duration-300 hover:scale-110 w-12 h-12 rounded-full"
            >
              {theme === 'light' ? (
                <Moon className="h-6 w-6 text-foreground/80 hover:text-luxury-gold transition-colors" />
              ) : (
                <Sun className="h-6 w-6 text-foreground/80 hover:text-luxury-gold transition-colors" />
              )}
            </Button>

            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative hover:bg-luxury-gold/15 transition-all duration-300 hover:scale-110 w-12 h-12 rounded-full group">
                <ShoppingCart className="h-6 w-6 text-foreground/80 group-hover:text-luxury-gold transition-colors" />
                {getTotalItems() > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center bg-gradient-to-r from-luxury-gold to-luxury-gold-dark text-black text-sm font-bold border-2 border-background animate-pulse">
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden hover:bg-luxury-gold/15 transition-all duration-300 hover:scale-110 w-12 h-12 rounded-full">
                  <Menu className="h-6 w-6 text-foreground/80 hover:text-luxury-gold transition-colors" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-background/98 backdrop-blur-xl border-l border-border/50">
                <div className="flex flex-col space-y-6 mt-8">
                  <div className="flex items-center gap-3 mb-8">
                    <Crown className="h-8 w-8 text-luxury-gold" />
                    <span className="text-xl font-luxury font-bold text-luxury-gold">LuxuryAutos</span>
                  </div>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-xl font-medium text-foreground/80 hover:text-luxury-gold transition-all duration-300 relative group py-3 px-4 rounded-lg hover:bg-luxury-gold/10"
                    >
                      {item.name}
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-luxury-gold group-hover:h-full transition-all duration-300 rounded-r" />
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
