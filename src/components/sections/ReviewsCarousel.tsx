'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  service?: string;
}

const reviews: Review[] = [
  {
    id: '1',
    name: 'James Wilson',
    rating: 5,
    comment: 'Exceptional service and attention to detail. Marcus gave me the best haircut I\'ve had in years. The attention to detail and professional atmosphere make this place stand out.',
    service: 'Signature Cut'
  },
  {
    id: '2',
    name: 'Michael Davis',
    rating: 5,
    comment: 'The hot towel shave was incredible. David took his time and made sure everything was perfect. Highly recommend for anyone looking for a premium barbershop experience.',
    service: 'Classic Shave'
  },
  {
    id: '3',
    name: 'Robert Brown',
    rating: 5,
    comment: 'Professional atmosphere and skilled barbers. Alex transformed my beard completely. Worth every penny and I\'ll definitely be returning as a regular customer.',
    service: 'Beard Grooming'
  },
  {
    id: '4',
    name: 'Chris Taylor',
    rating: 5,
    comment: 'Clean facility, friendly staff, and excellent results. This place sets the standard for premium barbershops. The full service package exceeded my expectations.',
    service: 'Full Service'
  },
  {
    id: '5',
    name: 'Mark Johnson',
    rating: 5,
    comment: 'Been coming here for months and it\'s always consistent quality. Great atmosphere and skilled professionals who really know their craft.',
    service: 'Signature Cut'
  }
];

export default function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex justify-center gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-6 h-6 ${i < rating ? 'text-primary-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section className="py-16 lg:py-24 bg-gray-900 text-white" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 id="reviews-heading" className="font-display text-display-lg text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Real feedback from our valued customers who trust us with their style
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary-300"
            aria-label="Previous review"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary-300"
            aria-label="Next review"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review, _index) => (
                <div key={review.id} className="w-full flex-shrink-0 px-8">
                  <div className="bg-white text-gray-900 rounded-2xl p-8 lg:p-12 shadow-strong mx-auto max-w-3xl">
                    {/* Rating */}
                    <div className="mb-8">
                      <StarRating rating={review.rating} />
                    </div>

                    {/* Comment */}
                    <blockquote className="text-lg lg:text-xl text-center italic mb-8 leading-relaxed text-gray-700">
                      &ldquo;{review.comment}&rdquo;
                    </blockquote>

                    {/* Author & Service */}
                    <div className="text-center">
                      <div className="font-semibold text-xl text-gray-900 mb-2">
                        {review.name}
                      </div>
                      {review.service && (
                        <div className="text-primary-600 text-lg font-medium">
                          {review.service}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 gap-3">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                  index === currentIndex 
                    ? 'bg-primary-400 scale-110' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center mt-12">
          <Link
            href="#"
            className="inline-flex items-center text-gray-300 hover:text-primary-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg px-4 py-2"
            aria-label="Read more reviews on Google"
          >
            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Read more reviews on Google
          </Link>
        </div>
      </div>
    </section>
  );
}