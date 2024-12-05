import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          
          {/* About Us */}
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h2 className="text-xl font-semibold mb-4">درباره ما</h2>
            <p>
              فروشگاه آنلاین ما ارائه‌دهنده بهترین محصولات با کیفیت و قیمت مناسب است. ما همواره در تلاشیم تا تجربه خریدی لذت‌بخش و آسان را برای شما فراهم کنیم.
            </p>
          </div>
          
          {/* Contact */}
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h2 className="text-xl font-semibold mb-4">تماس با ما</h2>
            <ul>
              <li className="flex items-center mb-2">
                <MapPin className="h-5 w-5 mr-2 text-indigo-500" />
                <span>تهران، خیابان انقلاب</span>
              </li>
              <li className="flex items-center mb-2">
                <Phone className="h-5 w-5 mr-2 text-indigo-500" />
                <span>+98 912 345 6789</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-indigo-500" />
                <span>support@shop.com</span>
              </li>
            </ul>
          </div>
          
          {/* Follow Us */}
          <div className="md:w-1/3">
            <h2 className="text-xl font-semibold mb-4">ما را دنبال کنید</h2>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-200 hover:text-indigo-500">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link to="#" className="text-gray-200 hover:text-indigo-500">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link to="#" className="text-gray-200 hover:text-indigo-500">
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
          
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>
        
        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2023 فروشگاه آنلاین. کلیه حقوق محفوظ است.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/terms" className="text-sm hover:text-indigo-500">
              شرایط استفاده
            </Link>
            <Link to="/privacy" className="text-sm hover:text-indigo-500">
              سیاست حفظ حریم خصوصی
            </Link>
            <Link to="/faq" className="text-sm hover:text-indigo-500">
              سوالات متداول
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 