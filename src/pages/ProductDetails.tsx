import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { ALL_PRODUCTS } from '../data/products';
import { useStore } from '../store/useStore';
import { QuantityControl } from '../components/QuantityControl';

export function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const addToCart = useStore((state) => state.addToCart);
  const cart = useStore((state) => state.cart);
  
  const product = ALL_PRODUCTS.find((p) => p.id === id);
  
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">محصول یافت نشد</h2>
          <button
            onClick={() => navigate('/shop')}
            className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            بازگشت به فروشگاه
          </button>
        </div>
      </div>
    );
  }

  const isInCart = cart.some(item => item.id === product.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={() => navigate('/shop')}
        className="inline-flex items-center text-indigo-600 hover:text-indigo-500 mb-6"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        بازگشت به فروشگاه
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="mt-4 text-gray-600">{product.description}</p>
          <p className="mt-4 text-3xl font-bold text-indigo-600">
            ${product.price.toFixed(2)}
          </p>

          {isInCart ? (
            <QuantityControl productId={product.id} />
          ) : (
            <button
              onClick={() => addToCart(product)}
              className="mt-6 w-full bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors inline-flex items-center justify-center"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              افزودن به سبد خرید
            </button>
          )}

          {product.specs && (
            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">مشخصات</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <table className="w-full">
                  <tbody>
                    {Object.entries(product.specs).map(([key, value]) => (
                      <tr key={key} className="border-b last:border-b-0">
                        <td className="py-3 text-gray-600 font-medium">{key}</td>
                        <td className="py-3 text-gray-900">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}