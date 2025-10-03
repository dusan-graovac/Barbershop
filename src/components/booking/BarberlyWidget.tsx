'use client';

import { useEffect, useRef } from 'react';

interface BarberlyWidgetProps {
  className?: string;
}

export default function BarberlyWidget({ className = '' }: BarberlyWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Check if script is already loaded
    const existingScript = document.querySelector('script[src="https://widgets.barberly.com/barberly-widgets.js"]');

    if (!existingScript && !scriptLoadedRef.current) {
      // Create the script element only if it doesn't exist
      const script = document.createElement('script');
      script.src = 'https://widgets.barberly.com/barberly-widgets.js';
      script.setAttribute('data-business-id', 'millionairebarbershop');
      script.setAttribute('data-widget-id', 'embed_20ec7f7add3742f2b5549584ff89368b');
      script.setAttribute('data-container-id', '20ec7f7add3742f2b5549584ff89368b-container');

      // Append script to the document head
      document.head.appendChild(script);
      scriptLoadedRef.current = true;
    }

    // Add custom styles for the Barberly widget
    const addCustomStyles = () => {
      const existingStyles = document.getElementById('barberly-custom-styles');
      if (!existingStyles) {
        const style = document.createElement('style');
        style.id = 'barberly-custom-styles';
        style.textContent = `
          /* Custom Barberly Widget Styles */
          #20ec7f7add3742f2b5549584ff89368b-container {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
            border-radius: 12px !important;
            overflow: hidden !important;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
          }

          /* Style the main container */
          #20ec7f7add3742f2b5549584ff89368b-container iframe,
          #20ec7f7add3742f2b5549584ff89368b-container > div {
            border-radius: 12px !important;
            border: none !important;
          }

          /* Override Barberly default styles */
          #20ec7f7add3742f2b5549584ff89368b-container .barberly-widget {
            background: #ffffff !important;
            border-radius: 12px !important;
          }

          /* Style buttons to match your site */
          #20ec7f7add3742f2b5549584ff89368b-container button[class*="btn"],
          #20ec7f7add3742f2b5549584ff89368b-container .button,
          #20ec7f7add3742f2b5549584ff89368b-container input[type="submit"] {
            background-color: #D4AF37 !important;
            border: none !important;
            border-radius: 8px !important;
            padding: 12px 24px !important;
            font-weight: 600 !important;
            color: white !important;
            transition: all 0.3s ease !important;
          }

          #20ec7f7add3742f2b5549584ff89368b-container button[class*="btn"]:hover,
          #20ec7f7add3742f2b5549584ff89368b-container .button:hover,
          #20ec7f7add3742f2b5549584ff89368b-container input[type="submit"]:hover {
            background-color: #B8941F !important;
            transform: translateY(-1px) !important;
          }

          /* Style calendar and time slots */
          #20ec7f7add3742f2b5549584ff89368b-container .calendar-day,
          #20ec7f7add3742f2b5549584ff89368b-container .time-slot {
            border-radius: 8px !important;
            border: 2px solid #e5e7eb !important;
            transition: all 0.2s ease !important;
          }

          #20ec7f7add3742f2b5549584ff89368b-container .calendar-day:hover,
          #20ec7f7add3742f2b5549584ff89368b-container .time-slot:hover {
            border-color: #D4AF37 !important;
            background-color: #fef9e7 !important;
          }

          #20ec7f7add3742f2b5549584ff89368b-container .calendar-day.selected,
          #20ec7f7add3742f2b5549584ff89368b-container .time-slot.selected {
            background-color: #D4AF37 !important;
            color: white !important;
            border-color: #D4AF37 !important;
          }

          /* Style text elements */
          #20ec7f7add3742f2b5549584ff89368b-container h1,
          #20ec7f7add3742f2b5549584ff89368b-container h2,
          #20ec7f7add3742f2b5549584ff89368b-container h3 {
            color: #1f2937 !important;
            font-weight: 700 !important;
          }

          #20ec7f7add3742f2b5549584ff89368b-container p,
          #20ec7f7add3742f2b5549584ff89368b-container span,
          #20ec7f7add3742f2b5549584ff89368b-container label {
            color: #4b5563 !important;
          }

          /* Style form inputs */
          #20ec7f7add3742f2b5549584ff89368b-container input[type="text"],
          #20ec7f7add3742f2b5549584ff89368b-container input[type="email"],
          #20ec7f7add3742f2b5549584ff89368b-container input[type="tel"],
          #20ec7f7add3742f2b5549584ff89368b-container select,
          #20ec7f7add3742f2b5549584ff89368b-container textarea {
            border: 2px solid #e5e7eb !important;
            border-radius: 8px !important;
            padding: 12px 16px !important;
            font-size: 16px !important;
            transition: border-color 0.2s ease !important;
          }

          #20ec7f7add3742f2b5549584ff89368b-container input:focus,
          #20ec7f7add3742f2b5549584ff89368b-container select:focus,
          #20ec7f7add3742f2b5549584ff89368b-container textarea:focus {
            border-color: #D4AF37 !important;
            outline: none !important;
            box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1) !important;
          }

          /* Style service cards */
          #20ec7f7add3742f2b5549584ff89368b-container .service-card,
          #20ec7f7add3742f2b5549584ff89368b-container .barber-card {
            border: 2px solid #e5e7eb !important;
            border-radius: 12px !important;
            padding: 16px !important;
            transition: all 0.2s ease !important;
          }

          #20ec7f7add3742f2b5549584ff89368b-container .service-card:hover,
          #20ec7f7add3742f2b5549584ff89368b-container .barber-card:hover {
            border-color: #D4AF37 !important;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
          }

          #20ec7f7add3742f2b5549584ff89368b-container .service-card.selected,
          #20ec7f7add3742f2b5549584ff89368b-container .barber-card.selected {
            border-color: #D4AF37 !important;
            background-color: #fef9e7 !important;
          }
        `;
        document.head.appendChild(style);
      }
    };

    // Add styles after a short delay to ensure the widget has loaded
    const timer = setTimeout(addCustomStyles, 1000);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      // Clear the container content when component unmounts
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className={className}>
      <div
        id="20ec7f7add3742f2b5549584ff89368b-container"
        ref={containerRef}
        style={{
          minHeight: '800px',
          height: '800px',
          width: '100%',
          border: 'none',
          background: '#ffffff',
          borderRadius: '12px',
          overflow: 'hidden'
        }}
      ></div>
    </div>
  );
}