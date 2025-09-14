import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

export default function AboutPage() {
  const bookingUrl = process.env.NEXT_PUBLIC_THECUT_BOOKING_URL || '#';
  const bookingQRCode = process.env.NEXT_PUBLIC_THECUT_QR_CODE;

  return (
    <>
      <Header bookingUrl={bookingUrl} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-4xl lg:text-6xl text-white mb-6">
              About Millionaire Barbershop
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Where tradition meets innovation in the art of barbering
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl lg:text-4xl text-gray-900 mb-6">
                  Our Story
                </h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Founded in 2018, Millionaire Barbershop was born from a passion for exceptional grooming and timeless style. Our founder envisioned a space where traditional barbering techniques meet modern luxury and comfort.
                  </p>
                  <p>
                    What started as a single chair operation has grown into the premier barbershop in the downtown district, known for our attention to detail, skilled craftsmen, and commitment to making every client feel like a million dollars.
                  </p>
                  <p>
                    We believe that a great haircut is more than just a service—it's an experience that boosts confidence and reflects personal style.
                  </p>
                </div>
              </div>
              <div className="relative h-96 lg:h-[500px] bg-gray-100 rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero-bg.svg"
                  alt="Millionaire Barbershop interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl lg:text-4xl text-gray-900 mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl text-gray-900 mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We strive for perfection in every cut, shave, and service we provide.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl text-gray-900 mb-4">Community</h3>
                <p className="text-gray-600">
                  Building lasting relationships with our clients and supporting our local community.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-600">
                  Combining traditional techniques with modern tools and trends.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl lg:text-4xl text-white mb-6">
              Experience the Difference
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our community of satisfied clients and discover what makes us special
            </p>
            <a
              href={bookingUrl}
              className="btn-primary inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Visit
            </a>
          </div>
        </section>
      </main>

      <Footer bookingUrl={bookingUrl} bookingQRCode={bookingQRCode} />
    </>
  );
}