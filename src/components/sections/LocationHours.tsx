import Link from 'next/link';

interface LocationHoursProps {
  bookingUrl?: string;
}

export default function LocationHours({ bookingUrl = '#' }: LocationHoursProps) {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Location Info */}
          <div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-black mb-8">
              Visit Our Shop
            </h2>
            
            {/* Address */}
            <div className="mb-10">
              <h3 className="font-semibold text-2xl text-black mb-4">Location</h3>
              <address className="not-italic text-gray-600 text-lg leading-relaxed">
                5300 S 76th St suite 1120<br />
                Greendale, WI 53129
              </address>
              
              <div className="mt-4 space-y-2">
                <Link 
                  href="tel:+14142462008"
                  className="flex items-center text-primary hover:text-accent transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (414) 246-2008
                </Link>
                
                <Link 
                  href="mailto:info@millionairebarbershop.com"
                  className="flex items-center text-gray-600 hover:text-primary transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@millionairebarbershop.com
                </Link>
              </div>
            </div>

            {/* Hours */}
            <div className="mb-10">
              <h3 className="font-semibold text-2xl text-black mb-6">Hours</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-semibold text-lg">Monday - Saturday</span>
                  <span className="text-gray-600 text-lg">10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-semibold text-lg">Sunday</span>
                  <span className="text-gray-600 text-lg">11:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/book"
                className="bg-primary hover:bg-accent text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors duration-300 text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Book Appointment
              </Link>
              
              <Link
                href="https://maps.google.com/?q=5300+S+76th+St+suite+1120+Greendale+WI+53129"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-black text-black hover:bg-black hover:text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors duration-300 text-center focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              >
                Get Directions
              </Link>
            </div>
          </div>

          {/* Google Map */}
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.123456789!2d-88.00347!3d42.94905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDU2JzU2LjYiTiA4OMKwMDAnMTIuNSJX!5e0!3m2!1sen!2sus!4v1000000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Millionaire Barbershop Location"
              className="rounded-lg"
            ></iframe>
            
            {/* Fallback overlay for when API key is not configured */}
            <div className="absolute inset-0 bg-gray-200 rounded-lg items-center justify-center hidden" id="map-fallback">
              <div className="text-center p-8">
                <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-500 font-medium mb-2">Interactive Map</p>
                <p className="text-gray-400 text-sm mb-4">5300 S 76th St suite 1120, Greendale, WI</p>
                <Link
                  href="https://maps.google.com/?q=42.94905,-88.00347"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-accent transition-colors duration-300"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Open in Google Maps
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}