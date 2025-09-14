import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ServicesPreview from '@/components/sections/ServicesPreview';
import BarbersPreview from '@/components/sections/BarbersPreview';
import ReviewsCarousel from '@/components/sections/ReviewsCarousel';
import LocationHours from '@/components/sections/LocationHours';

export default function Home() {
  const bookingUrl = process.env.NEXT_PUBLIC_THECUT_BOOKING_URL || '#';
  const bookingQRCode = process.env.NEXT_PUBLIC_THECUT_QR_CODE;

  return (
    <>
      <Header bookingUrl={bookingUrl} />
      <Hero bookingUrl={bookingUrl} />
      <main id="main-content" className="focus:outline-none" tabIndex={-1}>
        <ServicesPreview bookingUrl={bookingUrl} />
        <BarbersPreview bookingUrl={bookingUrl} />
        <ReviewsCarousel />
        <LocationHours bookingUrl={bookingUrl} />
      </main>
      <Footer bookingUrl={bookingUrl} bookingQRCode={bookingQRCode} />
    </>
  );
}
