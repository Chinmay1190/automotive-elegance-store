
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  CheckCircle, 
  Car, 
  Calendar, 
  Phone, 
  Mail, 
  Truck,
  Star,
  ArrowRight,
  Download,
  MessageCircle
} from 'lucide-react';

export default function CheckoutSuccess() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const orderNumber = `LUX-${Date.now().toString().slice(-6)}`;
  const estimatedDelivery = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        {/* Success Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="w-24 h-24 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="h-12 w-12 text-black" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-luxury font-bold text-foreground mb-6">
            Purchase <span className="bg-gradient-to-r from-luxury-gold to-luxury-gold-dark bg-clip-text text-transparent">Complete!</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Congratulations! Your luxury vehicle purchase has been successfully processed. 
            Welcome to the exclusive LuxuryAutos family.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Order Details */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-luxury-gold/20 rounded-full flex items-center justify-center">
                    <Car className="h-6 w-6 text-luxury-gold" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-luxury font-bold text-foreground">Order Confirmation</h2>
                    <p className="text-muted-foreground">Order #{orderNumber}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Order Status</h3>
                      <div className="flex items-center gap-2 text-luxury-gold">
                        <CheckCircle className="h-4 w-4" />
                        <span>Payment Confirmed</span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Estimated Delivery</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{estimatedDelivery.toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Delivery Method</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Truck className="h-4 w-4" />
                        <span>White Glove Delivery Service</span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Support</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        <span>24/7 Luxury Concierge</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What Happens Next */}
            <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <h2 className="text-2xl font-luxury font-bold text-foreground mb-6">What Happens Next?</h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0 mt-1">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Order Processing</h3>
                      <p className="text-muted-foreground">Your order is being prepared by our luxury specialists. All documentation and final inspections will be completed within 24-48 hours.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0 mt-1">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Personal Concierge Contact</h3>
                      <p className="text-muted-foreground">Your dedicated luxury concierge will contact you within 2 hours to discuss delivery preferences and answer any questions.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0 mt-1">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">White Glove Delivery</h3>
                      <p className="text-muted-foreground">Your vehicle will be delivered to your specified location with full insurance coverage and professional presentation.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0 mt-1">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Ongoing Support</h3>
                      <p className="text-muted-foreground">Enjoy lifetime access to our exclusive owner services, including maintenance, support, and special events.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Cards */}
          <div className="space-y-6">
            <Card className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-6 text-center">
                <Mail className="h-12 w-12 text-luxury-gold mx-auto mb-4" />
                <h3 className="text-xl font-luxury font-bold text-foreground mb-3">Order Confirmation Email</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  A detailed confirmation has been sent to your email with all order information and tracking details.
                </p>
                <Button variant="outline" className="w-full border-luxury-gold/50 hover:bg-luxury-gold/10">
                  <Download className="mr-2 h-4 w-4" />
                  Download Receipt
                </Button>
              </CardContent>
            </Card>

            <Card className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-12 w-12 text-luxury-gold mx-auto mb-4" />
                <h3 className="text-xl font-luxury font-bold text-foreground mb-3">Need Assistance?</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Our luxury concierge team is available 24/7 to assist with any questions or special requests.
                </p>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full border-luxury-gold/50 hover:bg-luxury-gold/10">
                    <Phone className="mr-2 h-4 w-4" />
                    Call +91 98765 43210
                  </Button>
                  <Button variant="outline" className="w-full border-luxury-gold/50 hover:bg-luxury-gold/10">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Support
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <CardContent className="p-6 text-center">
                <Star className="h-12 w-12 text-luxury-gold mx-auto mb-4" />
                <h3 className="text-xl font-luxury font-bold text-foreground mb-3">Exclusive Benefits</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  As a LuxuryAutos owner, you now have access to exclusive events, maintenance services, and special offers.
                </p>
                <Button className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold">
                  Explore Benefits
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Continue Shopping */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-3xl font-luxury font-bold text-foreground mb-6">
            Continue Your Luxury Journey
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore more exceptional vehicles from our curated collection or discover our exclusive automotive services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cars">
              <Button size="lg" variant="outline" className="border-2 border-luxury-gold/50 hover:border-luxury-gold hover:bg-luxury-gold/10 px-8 py-4">
                <Car className="mr-2 h-5 w-5" />
                Browse More Vehicles
              </Button>
            </Link>
            <Link to="/">
              <Button size="lg" className="bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold px-8 py-4">
                Return to Home
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
