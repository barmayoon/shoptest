import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function Terms() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center text-indigo-600 hover:text-indigo-500 mb-6"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        بازگشت
      </button>
      
      <h1 className="text-3xl font-bold text-gray-900 mb-4">شرایط استفاده</h1>
      <p className="text-gray-700">
        
        این یک متن نمونه برای شرایط استفاده است.
      </p>
    </div>
  );
} 