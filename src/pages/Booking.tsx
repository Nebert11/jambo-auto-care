import React, { useState } from 'react';
import { Calendar, Clock, User, Car, ArrowLeft, CheckCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Header = () => (
  <header className="bg-gradient-hero text-primary-foreground py-4 px-6 shadow-automotive">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Link to="/" className="flex items-center space-x-2 hover:text-accent transition-smooth">
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Home</span>
        </Link>
        <div className="flex items-center space-x-2">
          <Calendar className="h-8 w-8 text-accent" />
          <h1 className="text-2xl font-bold">Book Service</h1>
        </div>
      </div>
      <Button variant="accent" asChild>
        <Link to="/contact">
          <Phone className="w-4 h-4 mr-2" />
          Contact Us
        </Link>
      </Button>
    </div>
  </header>
);

const Booking = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    carMake: '',
    carModel: '',
    carYear: '',
    licensePlate: '',
    notes: ''
  });

  const services = [
    { id: 'diagnosis', name: 'Complete Car Diagnosis', price: 'From KES 2,500', duration: '45-90 min' },
    { id: 'tinting', name: 'Window Tinting', price: 'From KES 8,000', duration: '2-4 hours' },
    { id: 'maintenance', name: 'Preventive Maintenance', price: 'From KES 3,500', duration: '1-2 hours' },
    { id: 'oil-change', name: 'Oil Change Service', price: 'From KES 2,000', duration: '30 min' },
    { id: 'brake-service', name: 'Brake Service', price: 'From KES 5,000', duration: '1-2 hours' },
    { id: 'battery', name: 'Battery Service', price: 'From KES 1,500', duration: '30 min' }
  ];

  const timeSlots = [
    '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM',
    '04:00 PM', '05:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Confirmed!",
      description: "We'll call you within 30 minutes to confirm your appointment.",
    });
    setCurrentStep(4);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  if (currentStep === 4) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-6 py-20 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="bg-accent/10 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-accent" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Booking Confirmed!</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Thank you for choosing Suba Touch. We'll call you within 30 minutes to confirm your appointment details.
            </p>
            <div className="bg-muted/30 rounded-lg p-6 mb-8">
              <h3 className="font-semibold mb-4">Booking Summary</h3>
              <div className="space-y-2 text-left">
                <p><strong>Service:</strong> {services.find(s => s.id === bookingData.service)?.name}</p>
                <p><strong>Date:</strong> {bookingData.date}</p>
                <p><strong>Time:</strong> {bookingData.time}</p>
                <p><strong>Vehicle:</strong> {bookingData.carYear} {bookingData.carMake} {bookingData.carModel}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" asChild>
                <Link to="/">Return to Home</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Progress Bar */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`rounded-full w-8 h-8 flex items-center justify-center ${
                  currentStep >= step ? 'bg-accent text-accent-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`w-16 h-1 mx-2 ${
                    currentStep > step ? 'bg-accent' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-2">
            <span className="text-sm text-muted-foreground">
              Step {currentStep} of 3
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-automotive">
            <CardHeader>
              <CardTitle className="text-2xl">
                {currentStep === 1 && "Select Service & Time"}
                {currentStep === 2 && "Vehicle Information"}
                {currentStep === 3 && "Contact Details"}
              </CardTitle>
              <CardDescription>
                {currentStep === 1 && "Choose your service and preferred appointment time"}
                {currentStep === 2 && "Tell us about your vehicle"}
                {currentStep === 3 && "Final step - your contact information"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={currentStep === 3 ? handleSubmit : (e) => e.preventDefault()}>
                {/* Step 1: Service & Time Selection */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label>Select Service *</Label>
                      <div className="grid gap-3">
                        {services.map((service) => (
                          <div key={service.id} 
                               className={`border rounded-lg p-4 cursor-pointer transition-all ${
                                 bookingData.service === service.id 
                                   ? 'border-accent bg-accent/5' 
                                   : 'border-border hover:border-accent/50'
                               }`}
                               onClick={() => setBookingData({...bookingData, service: service.id})}>
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-medium">{service.name}</h4>
                                <p className="text-sm text-muted-foreground">{service.duration}</p>
                              </div>
                              <span className="text-accent font-semibold">{service.price}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">Preferred Date *</Label>
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          min={getMinDate()}
                          value={bookingData.date}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">Preferred Time *</Label>
                        <select
                          id="time"
                          name="time"
                          value={bookingData.time}
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          required
                        >
                          <option value="">Select time</option>
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Vehicle Information */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="carMake">Car Make *</Label>
                        <Input
                          id="carMake"
                          name="carMake"
                          value={bookingData.carMake}
                          onChange={handleChange}
                          placeholder="Toyota, Nissan, Honda..."
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="carModel">Model *</Label>
                        <Input
                          id="carModel"
                          name="carModel"
                          value={bookingData.carModel}
                          onChange={handleChange}
                          placeholder="Corolla, Altima, Civic..."
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="carYear">Year *</Label>
                        <Input
                          id="carYear"
                          name="carYear"
                          type="number"
                          min="1990"
                          max="2024"
                          value={bookingData.carYear}
                          onChange={handleChange}
                          placeholder="2020"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="licensePlate">License Plate</Label>
                        <Input
                          id="licensePlate"
                          name="licensePlate"
                          value={bookingData.licensePlate}
                          onChange={handleChange}
                          placeholder="KXX 123Y"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes">Additional Notes</Label>
                      <Textarea
                        id="notes"
                        name="notes"
                        value={bookingData.notes}
                        onChange={handleChange}
                        placeholder="Any specific issues or requests..."
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Contact Details */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={bookingData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={bookingData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={bookingData.phone}
                          onChange={handleChange}
                          placeholder="+254 700 123 456"
                          required
                        />
                      </div>
                    </div>

                    {/* Booking Summary */}
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold mb-3">Booking Summary</h3>
                      <div className="space-y-2 text-sm">
                        <p><strong>Service:</strong> {services.find(s => s.id === bookingData.service)?.name}</p>
                        <p><strong>Date & Time:</strong> {bookingData.date} at {bookingData.time}</p>
                        <p><strong>Vehicle:</strong> {bookingData.carYear} {bookingData.carMake} {bookingData.carModel}</p>
                        <p><strong>Estimated Price:</strong> {services.find(s => s.id === bookingData.service)?.price}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={prevStep}
                    disabled={currentStep === 1}
                  >
                    Previous
                  </Button>
                  
                  {currentStep < 3 ? (
                    <Button 
                      type="button" 
                      variant="accent" 
                      onClick={nextStep}
                      disabled={
                        (currentStep === 1 && (!bookingData.service || !bookingData.date || !bookingData.time)) ||
                        (currentStep === 2 && (!bookingData.carMake || !bookingData.carModel || !bookingData.carYear))
                      }
                    >
                      Next Step
                    </Button>
                  ) : (
                    <Button type="submit" variant="accent">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Confirm Booking
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Booking;