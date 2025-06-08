
import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Car } from '@/types/car';

interface CartContextType {
  items: CartItem[];
  addToCart: (car: Car) => void;
  removeFromCart: (carId: string) => void;
  updateQuantity: (carId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('luxury-cart');
    if (savedCart) {
      setItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('luxury-cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (car: Car) => {
    setItems(prev => {
      const existingItem = prev.find(item => item.car.id === car.id);
      if (existingItem) {
        return prev.map(item =>
          item.car.id === car.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { car, quantity: 1 }];
    });
  };

  const removeFromCart = (carId: string) => {
    setItems(prev => prev.filter(item => item.car.id !== carId));
  };

  const updateQuantity = (carId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(carId);
      return;
    }
    setItems(prev =>
      prev.map(item =>
        item.car.id === carId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + (item.car.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalPrice,
      getTotalItems
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
