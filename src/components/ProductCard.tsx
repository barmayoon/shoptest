import React from 'react';
import { useStore } from '../store/useStore';
import { Product } from '../types';
import { cn } from '../lib/utils';
import { ShoppingCart, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { QuantityControl } from './QuantityControl';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const addToCart = useStore((state) => state.addToCart);
  const isInCart = useStore((state) => state.cart.some(item => item.id === product.id));

  return (
    <div className={cn("bg-white rounded-lg shadow-md overflow-hidden", className)}>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="mt-1 text-gray-500 line-clamp-2">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-indigo-600">
            ${product.price.toFixed(2)}
          </span>
          <div className="flex space-x-2">
            <Link
              to={`/product/${product.id}`}
              className="flex items-center space-x-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
            >
              <Info className="h-4 w-4" />
              <span>جزئیات</span>
            </Link>
            {isInCart ? (
              <QuantityControl productId={product.id} />
            ) : (
              <button
                onClick={() => addToCart(product)}
                className="flex items-center space-x-1 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                <ShoppingCart className="h-4 w-4" />
                <span>افزودن</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}