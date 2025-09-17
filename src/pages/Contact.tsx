import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowLeft, Send, Star } from 'lucide-react';
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
          <Phone className="h-8 w-8 text-accent" />
          <h1 className="text-2xl font-bold">Contact Us</h1>
        </div>
      </div>
      <Button variant="accent" asChild>
        <Link to="/booking">Book Service</Link>
      </Button>
    </div>
  </header>
);

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-accent" />,
      title: "Call Us",
      details: ["+254 700 123 456", "+254 720 987 654"],
      description: "Available 24/7 for emergencies"
    },
    {
      icon: <Mail className="w-6 h-6 text-accent" />,
      title: "Email Us",
      details: ["info@subatouch.com", "parts@subatouch.com"],
      description: "We respond within 2 hours"
    },
    {
      icon: <MapPin className="w-6 h-6 text-accent" />,
      title: "Visit Our Workshop",
      details: ["Thika Road", "Nairobi"],
      description: "Easy parking available"
    },
    {
      icon: <Clock className="w-6 h-6 text-accent" />,
      title: "Working Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 8:00 AM - 4:00 PM"],
      description: "Sunday: Emergency only"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Ready to give your car the expert care it deserves? Contact our professional team today.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-accent mr-2" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-accent mr-2" />
              <span>Free Consultation</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="shadow-automotive">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+254 700 123 456"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Needed</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select a service</option>
                      <option value="diagnosis">Car Diagnosis</option>
                      <option value="tinting">Window Tinting</option>
                      <option value="maintenance">General Maintenance</option>
                      <option value="parts">Spare Parts</option>
                      <option value="repair">Repair Service</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your car and what service you need..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" variant="accent" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-2 hover:border-accent/20 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-accent/10 rounded-full p-3">
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-2">{info.title}</h4>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-foreground font-medium">
                              {detail}
                            </p>
                          ))}
                          <p className="text-sm text-muted-foreground mt-1">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-2 text-accent">Emergency Service</h4>
                <p className="text-foreground font-medium mb-1">+254 711 HELP (4357)</p>
                <p className="text-sm text-muted-foreground">
                  Available 24/7 for roadside assistance and emergency repairs
                </p>
              </CardContent>
            </Card>

            {/* Location Map Placeholder */}
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-4">Find Us</h4>
                <div className="bg-muted/30 rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-accent mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">Thika Road, Nairobi</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Book Your Service?</h3>
          <p className="text-lg mb-6 opacity-90">
            Schedule your appointment online or call us directly for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button variant="accent" size="lg" className="flex-1" asChild>
              <Link to="/booking">
                Book Online
              </Link>
            </Button>
            <Button variant="secondary" size="lg" className="flex-1">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;