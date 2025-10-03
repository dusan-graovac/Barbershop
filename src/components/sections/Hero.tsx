'use client';

import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  bookingUrl?: string;
}

export default function Hero({ bookingUrl = '#' }: HeroProps) {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden"
      aria-label="Hero section"
    >
      {/* Skip link for screen readers */}
      <a href="#main-content" className="skip-link sr-only focus:not-sr-only">
        Skip to main content
      </a>

      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-30"
            poster="/images/hero-bg.svg"
          >
            <source src="https://res.cloudinary.com/dythde97l/video/upload/f_mp4/v1759426532/barbershopvideo_cbw9ws.mov" type="video/mp4" />
            <source src="https://res.cloudinary.com/dythde97l/video/upload/f_webm/v1759426532/barbershopvideo_cbw9ws.mov" type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h1 className="font-display text-hero text-white mb-8 leading-tight">
            Success starts with a <span className="text-primary-500">clean cut</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-xl mx-auto leading-relaxed">
            Premium barbershop services in Greendale, WI
          </p>

          <div className="hero-buttons">
            <Link
              href="/book"
              className="btn-primary"
              aria-label="Book an appointment"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Appointment
            </Link>
            
            <Link
              href="#services"
              className="btn-secondary"
              aria-label="View our services"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              View Services
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>5-Star Rated</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Same Day Booking</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Expert Barbers</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}