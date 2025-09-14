import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services & Pricing - Millionaire Barbershop',
  description: 'Professional barbershop services including cuts, shaves, styling, and grooming. View our complete service menu with transparent pricing.',
  openGraph: {
    title: 'Services & Pricing - Millionaire Barbershop',
    description: 'Professional barbershop services including cuts, shaves, styling, and grooming. View our complete service menu with transparent pricing.',
  },
};

interface Service {
  id: string;
  category: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  popular?: boolean;
}

const services: Service[] = [
  // Haircuts
  {
    id: '1',
    category: 'Haircuts',
    name: 'Signature Cut',
    description: 'Precision haircut with consultation, wash, cut, style, and finish',
    price: '$45',
    duration: '45 min',
    popular: true
  },
  {
    id: '2',
    category: 'Haircuts',
    name: 'Classic Cut',
    description: 'Traditional haircut with wash and basic styling',
    price: '$35',
    duration: '30 min'
  },
  {
    id: '3',
    category: 'Haircuts',
    name: 'Buzz Cut',
    description: 'Clean, uniform clipper cut with precision edging',
    price: '$25',
    duration: '20 min'
  },
  {
    id: '4',
    category: 'Haircuts',
    name: 'Kids Cut (12 & under)',
    description: 'Gentle haircut designed for children with patience and care',
    price: '$30',
    duration: '30 min'
  },

  // Shaves
  {
    id: '5',
    category: 'Shaves',
    name: 'Classic Shave',
    description: 'Traditional hot towel shave with premium products and aftercare',
    price: '$35',
    duration: '30 min',
    popular: true
  },
  {
    id: '6',
    category: 'Shaves',
    name: 'Head Shave',
    description: 'Complete scalp shave with hot towel treatment',
    price: '$40',
    duration: '35 min'
  },
  {
    id: '7',
    category: 'Shaves',
    name: 'Beard Trim',
    description: 'Precision beard trimming and shaping with hot towel finish',
    price: '$25',
    duration: '20 min'
  },

  // Styling & Grooming
  {
    id: '8',
    category: 'Styling & Grooming',
    name: 'Full Service',
    description: 'Complete package: cut, wash, shave, style, and premium grooming',
    price: '$75',
    duration: '90 min',
    popular: true
  },
  {
    id: '9',
    category: 'Styling & Grooming',
    name: 'Beard Grooming',
    description: 'Complete beard care including wash, trim, oil, and styling',
    price: '$40',
    duration: '45 min'
  },
  {
    id: '10',
    category: 'Styling & Grooming',
    name: 'Mustache Grooming',
    description: 'Precision mustache trimming and wax styling',
    price: '$15',
    duration: '15 min'
  },
  {
    id: '11',
    category: 'Styling & Grooming',
    name: 'Eyebrow Trim',
    description: 'Professional eyebrow shaping and trimming',
    price: '$20',
    duration: '15 min'
  },

  // Add-ons
  {
    id: '12',
    category: 'Add-ons',
    name: 'Hot Towel Treatment',
    description: 'Relaxing hot towel facial treatment',
    price: '$10',
    duration: '10 min'
  },
  {
    id: '13',
    category: 'Add-ons',
    name: 'Scalp Massage',
    description: 'Therapeutic scalp massage with premium oils',
    price: '$15',
    duration: '15 min'
  },
  {
    id: '14',
    category: 'Add-ons',
    name: 'Hair Wash & Style',
    description: 'Premium wash with styling products and finish',
    price: '$20',
    duration: '20 min'
  }
];

const categories = ['Haircuts', 'Shaves', 'Styling & Grooming', 'Add-ons'];

export default function ServicesPage() {
  const bookingUrl = process.env.NEXT_PUBLIC_THECUT_BOOKING_URL || '#';
  const bookingQRCode = process.env.NEXT_PUBLIC_THECUT_QR_CODE;

  return (
    <>
      <Header bookingUrl={bookingUrl} />
      <main>
        {/* Hero Section */}
        <section className="bg-black text-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl mb-6">
              Services & Pricing
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Professional barbering services with transparent pricing. Quality you can trust, results you&apos;ll love.
            </p>
            <Link
              href={bookingUrl}
              className="bg-primary hover:bg-accent text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-300 inline-block focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Appointment
            </Link>
          </div>
        </section>

        {/* Services by Category */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {categories.map((category) => {
              const categoryServices = services.filter(service => service.category === category);
              
              return (
                <div key={category} className="mb-16 last:mb-0">
                  <h2 className="font-display text-3xl sm:text-4xl text-black mb-8 text-center lg:text-left">
                    {category}
                  </h2>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {categoryServices.map((service) => (
                      <div 
                        key={service.id}
                        className={`relative bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 ${
                          service.popular ? 'border-primary ring-2 ring-primary ring-opacity-20' : 'border-gray-200'
                        }`}
                      >
                        {service.popular && (
                          <div className="absolute -top-3 left-6">
                            <span className="bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full">
                              Popular
                            </span>
                          </div>
                        )}
                        
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <h3 className="font-display text-xl text-black mb-2">
                              {service.name}
                            </h3>
                            <p className="text-gray-600 text-sm mb-3">
                              {service.description}
                            </p>
                            <div className="text-sm text-gray-500">
                              Duration: {service.duration}
                            </div>
                          </div>
                          
                          <div className="text-right ml-4">
                            <div className="text-2xl font-bold text-primary mb-2">
                              {service.price}
                            </div>
                            <Link
                              href={bookingUrl}
                              className="bg-black hover:bg-primary text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 inline-block"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Book Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Policies Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl text-black text-center mb-12">
              Service Policies
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-black mb-3">Booking & Cancellation</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• 24-hour cancellation notice required</li>
                  <li>• Late arrivals may result in shortened service</li>
                  <li>• No-show fee: 50% of service price</li>
                  <li>• Appointments can be rescheduled once without penalty</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-black mb-3">Payment & Gratuity</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Cash, card, and digital payments accepted</li>
                  <li>• Gratuity is appreciated but not required</li>
                  <li>• Package deals available for multiple services</li>
                  <li>• Senior and student discounts available</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-black mb-3">Health & Safety</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• All tools sanitized between clients</li>
                  <li>• Fresh towels and capes for each service</li>
                  <li>• Please inform us of any allergies</li>
                  <li>• Clean, professional environment guaranteed</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-black mb-3">Satisfaction Guarantee</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Touch-ups within 7 days at no charge</li>
                  <li>• Open communication encouraged</li>
                  <li>• Your satisfaction is our priority</li>
                  <li>• Experienced professionals only</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl sm:text-4xl mb-6">
              Ready for Your <span className="text-primary">Millionaire</span> Look?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Book your appointment today and experience the difference professional barbering makes.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href={bookingUrl}
                className="bg-primary hover:bg-accent text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Online Now
              </Link>
              
              <Link
                href="tel:+1234567890"
                className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              >
                Call (123) 456-7890
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer bookingUrl={bookingUrl} bookingQRCode={bookingQRCode} />
    </>
  );
}