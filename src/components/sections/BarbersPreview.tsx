import Link from 'next/link';
import Image from 'next/image';

interface Barber {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  image: string;
  bio: string;
  bookingUrl?: string;
}

interface BarbersPreviewProps {
  bookingUrl?: string;
}

const featuredBarbers: Barber[] = [
  {
    id: '1',
    name: 'Adam',
    specialty: 'Master Barber',
    experience: '22 years experience',
    image: '/images/adam_portrait.jpg',
    bio: 'Two decades of perfecting the art of barbering with unmatched expertise.',
    bookingUrl: '/book?barber=adam'
  },
  {
    id: '2',
    name: 'Moe',
    specialty: 'Professional Barber',
    experience: '2 years experience',
    image: '/images/moe-portrait.jpg',
    bio: 'Bringing fresh energy and modern techniques to every cut.',
    bookingUrl: '/book?barber=moe'
  },
  {
    id: '3',
    name: 'Alex',
    specialty: 'Professional Barber',
    experience: '6 years experience',
    image: '/images/alex-portrait.jpg',
    bio: 'Dedicated to delivering exceptional service and precision styling.',
    bookingUrl: '/book?barber=alex'
  },
];

export default function BarbersPreview({ bookingUrl = '#' }: BarbersPreviewProps) {
  return (
    <section className="py-16 lg:py-24 bg-white" aria-labelledby="barbers-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 id="barbers-heading" className="font-display text-display-lg text-gray-900 mb-4">
            Meet Our Master Barbers
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Skilled professionals dedicated to perfecting your look with years of expertise
          </p>
        </div>

        {/* Barbers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {featuredBarbers.map((barber) => (
            <div 
              key={barber.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-1 focus-within:ring-4 focus-within:ring-primary-300"
            >
              {/* Image */}
              <div className="relative h-80 lg:h-96 bg-gray-100 overflow-hidden">
                <Image
                  src={barber.image}
                  alt={`${barber.name} - Professional Barber`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectPosition: 'center 65%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Experience badge */}
                <div className="absolute top-4 right-4 bg-primary-500 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-medium">
                  {barber.experience.split(' ')[0]} yrs
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-display text-2xl text-gray-900 mb-2">
                  {barber.name}
                </h3>
                <p className="text-primary-600 font-semibold mb-3 text-lg">
                  {barber.specialty}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {barber.bio}
                </p>

                {/* Book Button */}
                <Link
                  href={barber.bookingUrl || bookingUrl}
                  className="inline-flex items-center justify-center w-full bg-gray-900 hover:bg-primary-600 focus:bg-primary-600 text-white font-semibold py-4 px-6 rounded-xl text-lg min-h-16 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-300 focus:ring-offset-2 shadow-medium hover:shadow-gold"
                  aria-label={`Book with ${barber.name}`}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book with {barber.name.split(' ')[0]}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Barbers Link */}
        <div className="text-center">
          <Link
            href="/barbers"
            className="inline-flex items-center text-lg font-semibold text-gray-700 hover:text-primary-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 rounded-lg px-4 py-2 group"
            aria-label="Meet all our barbers"
          >
            Meet All Our Barbers
            <svg className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}