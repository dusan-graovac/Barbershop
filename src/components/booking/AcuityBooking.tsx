'use client';

import { useState, useEffect } from 'react';

interface Service {
  id: number;
  name: string;
  description: string;
  duration: number;
  price: number;
  category?: string;
}

interface Barber {
  id: number;
  name: string;
  email: string;
  image?: string;
}

interface TimeSlot {
  time: string;
  datetime: string;
  available: boolean;
}

interface AcuityBookingProps {
  className?: string;
}

export default function AcuityBooking({ className = '' }: AcuityBookingProps) {
  const [step, setStep] = useState(1);
  const [services, setServices] = useState<Service[]>([]);
  const [barbers, setBarbers] = useState<Barber[]>([]);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedBarber, setSelectedBarber] = useState<Barber | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [loading, setLoading] = useState(false);

  // Mock data for now - will replace with API calls
  useEffect(() => {
    setServices([
      { id: 1, name: "Men's Haircut & Beard", description: "Complete grooming service", duration: 30, price: 45 },
      { id: 2, name: "Men's Haircut", description: "Professional haircut", duration: 15, price: 25 },
      { id: 3, name: "Kid's Haircut (under 9)", description: "Gentle children's haircut", duration: 15, price: 20 },
      { id: 4, name: "Facial", description: "Complete facial treatment", duration: 45, price: 120 },
      { id: 5, name: "Beard Lineup", description: "Precision beard trimming", duration: 15, price: 20 },
    ]);

    setBarbers([
      { id: 1, name: "Adam", email: "adam@millionairebarbershop.com" },
      { id: 2, name: "Alex", email: "alex@millionairebarbershop.com" },
      { id: 3, name: "Moe", email: "moe@millionairebarbershop.com" },
    ]);
  }, []);

  const generateTimeSlots = (date: string) => {
    // Mock time slots - will replace with API call
    const slots: TimeSlot[] = [];
    const startHour = 10;
    const endHour = 18;

    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        slots.push({
          time: timeString,
          datetime: `${date}T${timeString}:00`,
          available: Math.random() > 0.3 // Mock availability
        });
      }
    }

    setAvailableSlots(slots);
  };

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setStep(2);
  };

  const handleBarberSelect = (barber: Barber) => {
    setSelectedBarber(barber);
    setStep(3);
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    generateTimeSlots(date);
    setStep(4);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep(5);
  };

  const handleBookAppointment = async () => {
    setLoading(true);
    // TODO: Implement Acuity API booking
    console.log('Booking:', {
      service: selectedService,
      barber: selectedBarber,
      date: selectedDate,
      time: selectedTime
    });

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert('Appointment booked successfully!');
    }, 2000);
  };

  const resetBooking = () => {
    setStep(1);
    setSelectedService(null);
    setSelectedBarber(null);
    setSelectedDate('');
    setSelectedTime('');
    setAvailableSlots([]);
  };

  const getWeekDates = () => {
    const dates = [];
    const today = new Date();

    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        date: date.toISOString().split('T')[0],
        display: date.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric'
        })
      });
    }

    return dates;
  };

  return (
    <div className={`${className} bg-white rounded-2xl shadow-lg overflow-hidden`}>
      {/* Header */}
      <div className="bg-gray-900 text-white p-6">
        <h2 className="text-2xl font-bold">Book Your Appointment</h2>
        <div className="flex items-center mt-4 space-x-4">
          {[1, 2, 3, 4, 5].map((stepNumber) => (
            <div
              key={stepNumber}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                step >= stepNumber
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-600 text-gray-300'
              }`}
            >
              {stepNumber}
            </div>
          ))}
        </div>
        <p className="text-gray-300 mt-2">
          {step === 1 && 'Choose your service'}
          {step === 2 && 'Select your barber'}
          {step === 3 && 'Pick a date'}
          {step === 4 && 'Choose a time'}
          {step === 5 && 'Confirm booking'}
        </p>
      </div>

      <div className="p-6">
        {/* Step 1: Service Selection */}
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Select a Service</h3>
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => handleServiceSelect(service)}
                className="border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-primary-500 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-gray-900">{service.name}</h4>
                    <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                    <p className="text-sm text-gray-500 mt-2">{service.duration} minutes</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary-600">${service.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Step 2: Barber Selection */}
        {step === 2 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900">Choose Your Barber</h3>
              <button
                onClick={() => setStep(1)}
                className="text-primary-600 hover:text-primary-700"
              >
                ← Back
              </button>
            </div>
            {barbers.map((barber) => (
              <div
                key={barber.id}
                onClick={() => handleBarberSelect(barber)}
                className="border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-primary-500 transition-colors"
              >
                <h4 className="font-semibold text-gray-900">{barber.name}</h4>
              </div>
            ))}
          </div>
        )}

        {/* Step 3: Date Selection */}
        {step === 3 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900">Select Date</h3>
              <button
                onClick={() => setStep(2)}
                className="text-primary-600 hover:text-primary-700"
              >
                ← Back
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {getWeekDates().map((dateInfo) => (
                <button
                  key={dateInfo.date}
                  onClick={() => handleDateSelect(dateInfo.date)}
                  className="border-2 border-gray-200 rounded-lg p-3 text-center hover:border-primary-500 transition-colors"
                >
                  <div className="text-sm font-semibold text-gray-900">
                    {dateInfo.display}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Time Selection */}
        {step === 4 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900">Available Times</h3>
              <button
                onClick={() => setStep(3)}
                className="text-primary-600 hover:text-primary-700"
              >
                ← Back
              </button>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {availableSlots.filter(slot => slot.available).map((slot) => (
                <button
                  key={slot.time}
                  onClick={() => handleTimeSelect(slot.time)}
                  className="border-2 border-gray-200 rounded-lg p-3 text-center hover:border-primary-500 transition-colors"
                >
                  {slot.time}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 5: Confirmation */}
        {step === 5 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900">Confirm Appointment</h3>
              <button
                onClick={() => setStep(4)}
                className="text-primary-600 hover:text-primary-700"
              >
                ← Back
              </button>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
              <div><strong>Service:</strong> {selectedService?.name}</div>
              <div><strong>Barber:</strong> {selectedBarber?.name}</div>
              <div><strong>Date:</strong> {new Date(selectedDate).toLocaleDateString()}</div>
              <div><strong>Time:</strong> {selectedTime}</div>
              <div><strong>Duration:</strong> {selectedService?.duration} minutes</div>
              <div><strong>Price:</strong> ${selectedService?.price}</div>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border-2 border-gray-200 rounded-lg p-3"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border-2 border-gray-200 rounded-lg p-3"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full border-2 border-gray-200 rounded-lg p-3"
              />
            </div>

            <div className="flex space-x-4">
              <button
                onClick={resetBooking}
                className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50"
              >
                Start Over
              </button>
              <button
                onClick={handleBookAppointment}
                disabled={loading}
                className="flex-1 bg-primary-500 text-white py-3 rounded-lg font-semibold hover:bg-primary-600 disabled:opacity-50"
              >
                {loading ? 'Booking...' : 'Book Appointment'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}