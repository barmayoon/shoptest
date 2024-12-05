import React from 'react';
import { Minus, Plus } from 'lucide-react';
import { useStore } from '../store/useStore';

interface QuantityControlProps {
  productId: string;
}

export function QuantityControl({ productId }: QuantityControlProps) {
  const { cart, updateQuantity, removeFromCart } = useStore();

  const cartItem = cart.find(item => item.id === productId);

  if (!cartItem) return null;

  const handleDecrease = () => {
    if (cartItem.quantity > 1) {
      updateQuantity(productId, cartItem.quantity - 1);
    } else {
      removeFromCart(productId);
    }
  };

  const handleIncrease = () => {
    updateQuantity(productId, cartItem.quantity + 1);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={handleDecrease}
        className="p-1 rounded-md bg-gray-100 hover:bg-gray-200"
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="w-8 text-center">{cartItem.quantity}</span>
      <button
        onClick={handleIncrease}
        className="p-1 rounded-md bg-gray-100 hover:bg-gray-200"
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
} 