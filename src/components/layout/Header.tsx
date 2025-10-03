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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50'
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
          <div className="flex justify-between items-center h-20 sm:h-16">
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

            <div className="flex items-center space-x-4">
              <Link
                href="/book"
                className="hidden lg:inline-flex btn-primary text-sm px-4 py-2"
                aria-label="Book an appointment"
              >
                Book Now
              </Link>

              <button
                type="button"
                className="lg:hidden flex items-center justify-center p-3 rounded-lg hover:bg-gray-100 transition-all duration-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {isMenuOpen && (
        <div className="mobile-nav">
          {/* Header area with logo */}
          <div className="mobile-nav-header">
            <div>
              <div className="mobile-nav-logo">
                MILLIONAIRE
              </div>
              <div className="mobile-nav-subtitle">
                BARBERSHOP
              </div>
            </div>
            <button onClick={closeMenu} className="mobile-nav-close">
              ×
            </button>
          </div>

          {/* Navigation links including Book button */}
          <div className="mobile-nav-content">
            <nav className="mobile-nav-list">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="mobile-nav-link"
                >
                  {item.name}
                </Link>
              ))}

              {/* Book button integrated with navigation */}
              <Link href="/book" onClick={closeMenu} className="mobile-nav-book">
                Book Now
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}