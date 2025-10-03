import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

export default function GalleryPage() {
  const bookingUrl = process.env.NEXT_PUBLIC_THECUT_BOOKING_URL || '#';
  const bookingQRCode = process.env.NEXT_PUBLIC_THECUT_QR_CODE;

  // Gallery images
  const galleryItems = [
    { id: 1, image: '/images/DSC07068.jpg' },
    { id: 2, image: '/images/DSC07047.jpg' },
    { id: 3, image: '/images/DSC07053.jpg' },
    { id: 4, image: '/images/DSC07175.jpg' },
    { id: 5, image: '/images/DSC07167.jpg' },
    { id: 6, image: '/images/DSC07170.jpg' },
    { id: 7, image: '/images/DSC07076.jpg' },
    { id: 8, image: '/images/DSC07059.jpg' }
  ];

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
                      alt="Barbershop gallery image"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Simple hover overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300">
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
              Book your appointment today and experience the craftsmanship you&apos;ve seen
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