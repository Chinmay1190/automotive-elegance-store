
import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/utils/currency';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';

export default function Cart() {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center animate-fade-in">
            <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-4xl font-luxury font-bold text-foreground mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover our exceptional collection of luxury vehicles
            </p>
            <Link to="/cars">
              <Button size="lg" className="bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold">
                Explore Cars
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleCheckout = () => {
    // This will integrate with Stripe when payment is implemented
    alert('Proceeding to checkout... (Payment integration coming soon!)');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-4 mb-8 animate-fade-in">
          <Link to="/cars">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-4xl font-luxury font-bold text-foreground">Shopping Cart</h1>
            <p className="text-muted-foreground">{items.length} item{items.length !== 1 ? 's' : ''} in your cart</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <Card key={item.car.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Car Image */}
                    <Link to={`/car/${item.car.id}`} className="flex-shrink-0">
                      <img
                        src={item.car.image}
                        alt={item.car.name}
                        className="w-full sm:w-32 h-32 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                      />
                    </Link>

                    {/* Car Details */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <Link to={`/car/${item.car.id}`}>
                          <h3 className="text-xl font-semibold text-foreground hover:text-luxury-gold transition-colors">
                            {item.car.name}
                          </h3>
                        </Link>
                        <p className="text-muted-foreground capitalize">{item.car.brand}</p>
                        <div className="text-sm text-muted-foreground mt-1">
                          {item.car.specifications.engine} • {item.car.specifications.power}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.car.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className="h-8 w-8"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.car.id, item.quantity + 1)}
                            className="h-8 w-8"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>

                        {/* Price and Remove */}
                        <div className="flex items-center justify-between sm:space-x-4">
                          <div className="text-xl font-bold text-luxury-gold">
                            {formatPrice(item.car.price * item.quantity)}
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFromCart(item.car.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6">
                <h2 className="text-2xl font-luxury font-bold text-foreground mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  {items.map(item => (
                    <div key={item.car.id} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {item.car.name} × {item.quantity}
                      </span>
                      <span className="font-medium">{formatPrice(item.car.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-4 mb-6">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-luxury-gold">{formatPrice(getTotalPrice())}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Including all taxes and fees
                  </p>
                </div>

                <div className="space-y-3">
                  <Button
                    onClick={handleCheckout}
                    className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold py-3"
                    size="lg"
                  >
                    Proceed to Checkout
                  </Button>
                  
                  <Button
                    variant="outline"
                    onClick={clearCart}
                    className="w-full"
                  >
                    Clear Cart
                  </Button>
                </div>

                <div className="mt-6 text-xs text-muted-foreground space-y-1">
                  <div>✓ Secure payment processing</div>
                  <div>✓ Comprehensive warranty included</div>
                  <div>✓ White-glove delivery service</div>
                  <div>✓ 24/7 concierge support</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
