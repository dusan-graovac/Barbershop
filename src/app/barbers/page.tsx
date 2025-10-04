import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function BarbersPage() {
  const bookingUrl = process.env.NEXT_PUBLIC_THECUT_BOOKING_URL || '#';
  const bookingQRCode = process.env.NEXT_PUBLIC_THECUT_QR_CODE;

  const barbers = [
    {
      id: '1',
      name: 'Adam',
      specialty: 'Master Barber',
      experience: '22 years experience',
      image: '/images/adam_portrait2.jpg',
      bio: 'Two decades of perfecting the art of barbering with unmatched expertise. Adam brings precision, skill, and passion to every cut.',
      certifications: ['Master Barber Licensed', 'Precision Cut Specialist'],
      bookingUrl: '/book?barber=adam'
    },
    {
      id: '2',
      name: 'Alex',
      specialty: 'Professional Barber',
      experience: '6 years experience',
      image: '/images/alex_portrait2.jpg',
      bio: 'Dedicated to delivering exceptional service and precision styling. Alex combines modern techniques with classic barbering traditions.',
      certifications: ['Licensed Professional Barber', 'Modern Styling Certified'],
      bookingUrl: '/book?barber=alex'
    },
    {
      id: '3',
      name: 'Moe',
      specialty: 'Professional Barber',
      experience: '2 years experience',
      image: '/images/mor_portrait2.jpg',
      bio: 'Bringing fresh energy and modern techniques to every cut. Moe is passionate about creating sharp, contemporary looks.',
      certifications: ['Licensed Professional Barber', 'Contemporary Cuts Specialist'],
      bookingUrl: '/book?barber=moe'
    }
  ];

  return (
    <>
      <Header bookingUrl={bookingUrl} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-4xl lg:text-6xl text-white mb-6">
              Meet Our Master Barbers
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Skilled professionals dedicated to perfecting your look with years of expertise and passion
            </p>
          </div>
        </section>

        {/* Barbers Grid */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
              {barbers.map((barber) => (
                <div 
                  key={barber.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Image */}
                  <div className="relative h-80 lg:h-96 bg-gray-100">
                    <Image
                      src={barber.image}
                      alt={`${barber.name} - Professional Barber`}
                      fill
                      className="object-cover"
                      style={{
                        objectPosition: barber.name === 'Adam' ? 'center 45%' :
                                       barber.name === 'Alex' ? 'center 40%' :
                                       barber.name === 'Moe' ? 'center 50%' :
                                       'center 65%'
                      }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    {/* Experience badge */}
                    <div className="absolute top-4 right-4 bg-primary-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                      {barber.experience.split(' ')[0]} yrs
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="font-display text-2xl text-gray-900 mb-2">
                      {barber.name}
                    </h3>
                    <p className="text-primary-600 font-semibold mb-4 text-lg">
                      {barber.specialty}
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {barber.bio}
                    </p>

                    {/* Certifications */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Certifications:</h4>
                      <ul className="space-y-1">
                        {barber.certifications.map((cert, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-center">
                            <svg className="w-4 h-4 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {cert}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Book Button */}
                    <Link
                      href={barber.bookingUrl || bookingUrl}
                      className="btn-primary w-full text-center"
                    >
                      Book with {barber.name.split(' ')[0]}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer bookingUrl={bookingUrl} bookingQRCode={bookingQRCode} />
    </>
  );
}