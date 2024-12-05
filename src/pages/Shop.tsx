import React, { useState, useMemo } from 'react';
import { ProductCard } from '../components/ProductCard';
import { CategoryFilter } from '../components/CategoryFilter';
import { ALL_PRODUCTS } from '../data/products';

export function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('همه');

  const categories = useMemo(() => {
    const uniqueCategories = new Set(ALL_PRODUCTS.map(product => product.category));
    return Array.from(uniqueCategories);
  }, []);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'همه') {
      return ALL_PRODUCTS;
    }
    return ALL_PRODUCTS.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">فروشگاه</h1>
      
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}