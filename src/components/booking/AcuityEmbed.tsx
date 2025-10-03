'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

interface AcuityEmbedProps {
  className?: string;
}

export default function AcuityEmbed({ className = '' }: AcuityEmbedProps) {
  const searchParams = useSearchParams();
  const selectedBarber = searchParams.get('barber');
  const selectedService = searchParams.get('service');
  useEffect(() => {
    // Load Acuity embed script
    const existingScript = document.querySelector('script[src="https://embed.acuityscheduling.com/js/embed.js"]');

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://embed.acuityscheduling.com/js/embed.js';
      script.type = 'text/javascript';
      document.head.appendChild(script);
    }

    // Add custom styles for Acuity embed
    const addCustomStyles = () => {
      const existingStyles = document.getElementById('acuity-custom-styles');
      if (!existingStyles) {
        const style = document.createElement('style');
        style.id = 'acuity-custom-styles';
        style.textContent = `
          /* Custom Acuity Scheduling Styles */
          iframe[src*="acuityscheduling.com"] {
            border-radius: 16px !important;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
          }

          /* Override iframe content styles using CSS injection */
          .acuity-iframe-wrapper::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #D4AF37, #F4D03F);
            z-index: 1;
          }

          /* Wrapper styling */
          .acuity-iframe-wrapper {
            position: relative;
            background: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow:
              0 25px 50px -12px rgba(0, 0, 0, 0.25),
              0 0 0 1px rgba(0, 0, 0, 0.05);
          }

          /* Loading state */
          .acuity-loading {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 800px;
            background: #f9fafb;
            border-radius: 16px;
          }

          .acuity-loading-spinner {
            width: 40px;
            height: 40px;
            border: 4px solid #e5e7eb;
            border-top: 4px solid #D4AF37;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `;
        document.head.appendChild(style);
      }
    };

    // Add styles after a short delay
    const timer = setTimeout(addCustomStyles, 500);

    // Cleanup function
    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Build the iframe URL with optional barber and service preselection
  const getBookingUrl = () => {
    let url = "https://app.acuityscheduling.com/schedule.php?owner=37126910&ref=embedded_csp&color=D4AF37&backgroundColor=ffffff&textColor=1f2937&font=Inter";

    // Add barber ID if specified
    if (selectedBarber) {
      // Map barber names to their Acuity calendar IDs
      const barberCalendars: { [key: string]: string } = {
        'adam': '12836020',    // Replace with Adam's actual calendar ID
        'alex': '12836945',    // Replace with Alex's actual calendar ID
        'moe': '12836061'      // Replace with Moe's actual calendar ID
      };

      const barberId = barberCalendars[selectedBarber.toLowerCase()];
      if (barberId) {
        // Try multiple Acuity calendar parameter names that might work
        url += `&calendar=${barberId}&calendarID=${barberId}&provider=${barberId}&appointmentCalendar=${barberId}`;
      }
    }

    // Add service/appointment type if specified
    if (selectedService) {
      // Map service slugs to their Acuity appointment type IDs
      const serviceTypes: { [key: string]: string } = {
        'mens-haircut-beard': '84143336',    // Replace with actual appointment type ID
        'mens-haircut': '84143228',          // Replace with actual appointment type ID
        'womens-haircut': '84144137',        // Replace with actual appointment type ID
        'kids-haircut-under-9': '84143789',  // Replace with actual appointment type ID
        'beard-lineup': '84143490',          // Replace with actual appointment type ID
        'facial': '84143844',                // Replace with actual appointment type ID
        'full-face-threading': '84144077',   // Replace with actual appointment type ID
        'ears-waxing': '84143895',           // Replace with actual appointment type ID
        'eyebrows-threading': '84143956',    // Replace with actual appointment type ID
        'mens-hair-color': '84143993',       // Replace with actual appointment type ID
        'mens-beard-color': '84144037',      // Replace with actual appointment type ID
        'house-call': '84144195',            // Replace with actual appointment type ID
        'vip': '84144225'                    // Replace with actual appointment type ID
      };

      const serviceTypeId = serviceTypes[selectedService.toLowerCase()];
      if (serviceTypeId) {
        url += `&appointmentType=${serviceTypeId}`;
      }
    }

    return url;
  };

  return (
    <div className={`${className} relative`}>
      {/* Show selected barber and/or service info if applicable */}
      {selectedBarber && (
        <div className="mb-8 bg-gradient-to-r from-primary-50 to-primary-100 border-2 border-primary-300 rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-6">
            {/* Barber Avatar */}
            <div className="relative">
              <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                {selectedBarber.charAt(0).toUpperCase()}
              </div>
              <div className="absolute -top-2 -right-2 bg-green-500 w-6 h-6 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Barber Info */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-2xl font-bold text-primary-800 capitalize">{selectedBarber}</h3>
                <span className="bg-primary-600 text-white text-xs font-semibold px-2 py-1 rounded-full">SELECTED</span>
              </div>
              <p className="text-primary-700 font-medium">
                🎯 Your appointment will be scheduled with {selectedBarber.charAt(0).toUpperCase() + selectedBarber.slice(1)}
              </p>
            </div>

            {/* Change Barber Link */}
            <div className="text-right">
              <a href="/barbers" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-800 font-medium text-sm transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                Change Barber
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Show selected service info if applicable */}
      {selectedService && (
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-blue-800 font-medium">
            ✂️ Service: <span className="capitalize font-bold">{selectedService.replace(/-/g, ' ')}</span>
          </p>
          <p className="text-blue-600 text-sm mt-1">
            You can still change your service selection in the booking form below.
          </p>
        </div>
      )}

      {/* Acuity iframe wrapper */}
      <div className="acuity-iframe-wrapper bg-white rounded-t-2xl">
        <iframe
          src={getBookingUrl()}
          title="Schedule Appointment"
          width="100%"
          height="800"
          frameBorder="0"
          allow="payment"
          className="w-full h-[800px] border-0 rounded-t-2xl"
          style={{
            minHeight: '800px',
            background: 'white',
            display: 'block'
          }}
          onLoad={() => {
            // Optional: Hide loading state when iframe loads
            const loadingElement = document.querySelector('.acuity-loading') as HTMLElement;
            if (loadingElement) {
              loadingElement.style.display = 'none';
            }
          }}
        />
      </div>

      {/* Custom footer */}
      <div className="bg-gray-50 p-4 rounded-b-2xl border-t border-gray-200">
        <div className="text-center text-sm text-gray-600">
          <p>Need help? Call us at <a href="tel:+14142462008" className="text-primary-600 hover:text-primary-700 font-semibold">(414) 246-2008</a></p>
        </div>
      </div>
    </div>
  );
}