import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AcuityEmbed from '@/components/booking/AcuityEmbed';
import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Book Appointment - Millionaire Barbershop',
  description: 'Book your appointment at Millionaire Barbershop. Choose from our expert barbers and premium services.',
  openGraph: {
    title: 'Book Appointment - Millionaire Barbershop',
    description: 'Book your appointment at Millionaire Barbershop. Choose from our expert barbers and premium services.',
  },
};

export default function BookPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-4xl lg:text-6xl text-white mb-6">
              Book Your Appointment
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose your preferred barber and service for the ultimate grooming experience
            </p>
          </div>
        </section>

        {/* Booking Widget Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Suspense fallback={<div className="flex justify-center py-12"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div></div>}>
              <AcuityEmbed className="w-full" />
            </Suspense>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}