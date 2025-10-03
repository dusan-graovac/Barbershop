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
    name: 'Men\'s Haircut & Beard',
    description: 'Complete men\'s grooming service with precision haircut and beard styling',
    price: '$45',
    duration: '30 min',
    popular: true
  },
  {
    id: '2',
    category: 'Haircuts',
    name: 'Men\'s Haircut',
    description: 'Professional men\'s haircut with consultation and styling',
    price: '$25+',
    duration: '15 min',
    popular: true
  },
  {
    id: '3',
    category: 'Haircuts',
    name: 'Women\'s Haircut',
    description: 'Expert women\'s haircut with wash, cut, and styling',
    price: '$40+',
    duration: '30 min'
  },
  {
    id: '4',
    category: 'Haircuts',
    name: 'Kid\'s Haircut (under 9)',
    description: 'Gentle haircut designed for children with patience and care',
    price: '$20',
    duration: '15 min'
  },

  // Beard & Facial Services
  {
    id: '5',
    category: 'Beard & Facial Services',
    name: 'Beard Lineup',
    description: 'Precision beard trimming and edge-up for a clean, sharp look',
    price: '$20+',
    duration: '15 min'
  },
  {
    id: '6',
    category: 'Beard & Facial Services',
    name: 'Facial',
    description: 'Complete facial treatment for healthy, refreshed skin',
    price: '$120',
    duration: '45 min'
  },
  {
    id: '7',
    category: 'Beard & Facial Services',
    name: 'Full Face Threading',
    description: 'Professional threading for complete facial hair removal',
    price: '$25+',
    duration: '20 min'
  },

  // Styling & Grooming
  {
    id: '8',
    category: 'Styling & Grooming',
    name: 'Ears Waxing',
    description: 'Professional ear hair removal with premium wax',
    price: '$10+',
    duration: '10 min'
  },
  {
    id: '9',
    category: 'Styling & Grooming',
    name: 'Eyebrows Threading',
    description: 'Precision eyebrow shaping with threading technique',
    price: '$10+',
    duration: '15 min'
  },
  {
    id: '10',
    category: 'Styling & Grooming',
    name: 'Men\'s Hair Color',
    description: 'Professional hair coloring service for men',
    price: '$25+',
    duration: '20 min'
  },
  {
    id: '11',
    category: 'Styling & Grooming',
    name: 'Men\'s Beard Color',
    description: 'Expert beard coloring and tinting service',
    price: '$20+',
    duration: '15 min'
  },

  // Premium Services
  {
    id: '12',
    category: 'Premium Services',
    name: 'House Call',
    description: 'Professional barbering service at your location',
    price: '$100+',
    duration: '1 hour'
  },
  {
    id: '13',
    category: 'Premium Services',
    name: 'VIP',
    description: 'Ultimate luxury grooming experience with full-day service',
    price: '$900+',
    duration: '9 hours'
  }
];

const categories = ['Haircuts', 'Beard & Facial Services', 'Styling & Grooming', 'Premium Services'];

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
              href="/book"
              className="bg-primary hover:bg-accent text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-300 inline-block focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
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
                              href={`/book?service=${encodeURIComponent(service.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'))}`}
                              className="bg-black hover:bg-primary text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 inline-block"
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
                href="/book"
                className="bg-primary hover:bg-accent text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
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