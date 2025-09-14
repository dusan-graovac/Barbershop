import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

export default function GalleryPage() {
  const bookingUrl = process.env.NEXT_PUBLIC_THECUT_BOOKING_URL || '#';
  const bookingQRCode = process.env.NEXT_PUBLIC_THECUT_QR_CODE;

  // Placeholder gallery items
  const galleryItems = [
    { id: 1, title: 'Classic Fade', category: 'Haircuts', image: '/images/hero-bg.svg' },
    { id: 2, title: 'Beard Trim', category: 'Grooming', image: '/images/hero-bg.svg' },
    { id: 3, title: 'Traditional Shave', category: 'Shaves', image: '/images/hero-bg.svg' },
    { id: 4, title: 'Modern Style', category: 'Haircuts', image: '/images/hero-bg.svg' },
    { id: 5, title: 'Mustache Grooming', category: 'Grooming', image: '/images/hero-bg.svg' },
    { id: 6, title: 'Hot Towel Service', category: 'Shaves', image: '/images/hero-bg.svg' },
    { id: 7, title: 'Kids Cut', category: 'Haircuts', image: '/images/hero-bg.svg' },
    { id: 8, title: 'Beard Design', category: 'Grooming', image: '/images/hero-bg.svg' },
    { id: 9, title: 'Vintage Style', category: 'Haircuts', image: '/images/hero-bg.svg' }
  ];

  const categories = ['All', 'Haircuts', 'Shaves', 'Grooming'];

  return (
    <>
      <Header bookingUrl={bookingUrl} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-4xl lg:text-6xl text-white mb-6">
              Our Work Gallery
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See the quality and craftsmanship that goes into every cut, shave, and style
            </p>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:border-primary-500 hover:text-primary-600 transition-colors duration-200"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryItems.map((item) => (
                <div 
                  key={item.id}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-80 bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-end">
                      <div className="p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="inline-block bg-primary-500 text-xs font-semibold px-2 py-1 rounded-full mb-2">
                          {item.category}
                        </span>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl lg:text-4xl text-white mb-6">
              Ready for Your Perfect Cut?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Book your appointment today and experience the craftsmanship you've seen
            </p>
            <a
              href={bookingUrl}
              className="btn-primary inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Appointment
            </a>
          </div>
        </section>
      </main>

      <Footer bookingUrl={bookingUrl} bookingQRCode={bookingQRCode} />
    </>
  );
}