'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface HeaderProps {
  bookingUrl?: string;
}

export default function Header({ bookingUrl = '#' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Barbers', href: '/barbers' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
        <div className="flex justify-between items-center h-20 sm:h-16">
          {/* Logo Text */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="flex items-center group transition-colors duration-200 text-gray-900"
              onClick={closeMenu}
            >
              <div className="text-left">
                <div className="font-display text-xl sm:text-2xl lg:text-2xl font-bold text-black">
                  MILLIONAIRE
                </div>
                <div className="text-base sm:text-lg lg:text-lg text-primary-500 font-medium -mt-1 tracking-wider">
                  BARBERSHOP
                </div>
              </div>
            </Link>
          </div>

          {/* Navigation - Hidden on mobile and tablet */}
          <nav className="hidden lg:flex items-center header-nav space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-700 hover:text-primary-600"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Book Now Button - Hidden on mobile and tablet */}
            <Link
              href={bookingUrl}
              className="hidden lg:inline-flex btn-primary text-base px-6 py-3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book an appointment (opens in new tab)"
            >
              Book Now
            </Link>

            {/* Mobile hamburger menu */}
            <button
              type="button"
              className="lg:hidden flex items-center justify-center p-3 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Open menu"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-0 bg-white z-[60]" style={{ backgroundColor: '#ffffff' }}>
          <div className="flex flex-col h-full">
            {/* Header area */}
            <div className="flex justify-between items-center px-6 py-6 border-b border-gray-200">
              <div className="font-display text-2xl font-bold text-black">
                MILLIONAIRE
                <div className="text-sm text-primary-500 font-medium -mt-1 tracking-wider">
                  BARBERSHOP
                </div>
              </div>
              <button
                onClick={closeMenu}
                className="p-3 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Navigation links */}
            <div className="flex-1 px-6 py-8">
              <nav className="space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-3xl font-light text-gray-900 py-4 hover:text-primary-600 transition-colors"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
            
            {/* Book button */}
            <div className="px-6 pb-8">
              <Link
                href={bookingUrl}
                className="block w-full text-center py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold text-xl rounded-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
      </nav>

    </header>
  );
}