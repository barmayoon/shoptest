import React from 'react';
import { useStore } from '../store/useStore';
import { Minus, Plus, Trash2 } from 'lucide-react';

export function Cart() {
  const { cart, removeFromCart, updateQuantity } = useStore();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">سبد خرید</h1>
        <p className="text-gray-500">سبد خرید شما خالی است</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">سبد خرید</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center py-4 border-b last:border-b-0"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-md"
            />
            <div className="mr-4 flex-1">
              <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
              <p className="text-gray-500">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                className="p-1 rounded-md hover:bg-gray-100"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-8 text-center">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="p-1 rounded-md hover:bg-gray-100"
              >
                <Plus className="h-4 w-4" />
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="p-1 text-red-500 hover:bg-red-50 rounded-md ml-4"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
        <div className="mt-6 flex justify-between items-center">
          <span className="text-lg font-semibold">جمع کل:</span>
          <span className="text-2xl font-bold text-indigo-600">
            ${total.toFixed(2)}
          </span>
        </div>
        <button className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
          پرداخت
        </button>
      </div>
    </div>
  );
}