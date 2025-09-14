import Link from 'next/link';

interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  popular?: boolean;
}

interface ServicesPreviewProps {
  bookingUrl?: string;
}

const featuredServices: Service[] = [
  {
    id: '1',
    name: 'Signature Cut',
    description: 'Precision haircut with consultation, wash, cut, style, and finish. Includes hot towel treatment.',
    price: '$45',
    duration: '45 min',
    popular: true
  },
  {
    id: '2',
    name: 'Classic Shave',
    description: 'Traditional hot towel shave with premium products, facial massage, and aftercare treatment.',
    price: '$35',
    duration: '30 min'
  },
  {
    id: '3',
    name: 'Full Service',
    description: 'Complete grooming package including cut, wash, beard trim, shave, and premium styling.',
    price: '$75',
    duration: '90 min'
  },
];

export default function ServicesPreview({ bookingUrl = '#' }: ServicesPreviewProps) {
  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 id="services-heading" className="font-display text-display-lg text-gray-900 mb-4">
            Our Premium Services
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Professional barbering services crafted with precision, care, and attention to detail
          </p>
        </div>

        {/* Services Grid */}
        <div className="service-grid">
          {featuredServices.map((service) => (
            <div 
              key={service.id}
              className={`group relative bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-lg ${
                service.popular 
                  ? 'ring-2 ring-primary-500 shadow-lg' 
                  : 'border border-gray-200 shadow hover:border-primary-300'
              }`}
            >
              {/* Popular badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-500 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-medium">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Service Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-display text-2xl text-gray-900 group-hover:text-primary-600 transition-colors duration-300 mb-2">
                    {service.name}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {service.duration}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary-600">{service.price}</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>

              {/* Book Button */}
              <Link
                href={bookingUrl}
                className={`inline-flex items-center justify-center w-full font-semibold py-4 px-6 rounded-xl text-lg min-h-16 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 ${
                  service.popular
                    ? 'bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 text-white focus:ring-primary-300 shadow-medium hover:shadow-gold'
                    : 'bg-gray-900 hover:bg-primary-600 focus:bg-primary-600 text-white focus:ring-primary-300 shadow-medium hover:shadow-gold'
                }`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Book ${service.name} service (opens in new tab)`}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book This Service
              </Link>
            </div>
          ))}
        </div>

        {/* View All Services Link */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center text-lg font-semibold text-gray-700 hover:text-primary-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 rounded-lg px-4 py-2"
            aria-label="View all our services"
          >
            View All Services
            <svg className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}