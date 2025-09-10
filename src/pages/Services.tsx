import React from 'react';
import { Wrench, Palette, ShoppingCart, CheckCircle, Phone, ArrowLeft, Clock, Star, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-gradient-hero text-primary-foreground py-4 px-6 shadow-automotive">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Link to="/" className="flex items-center space-x-2 hover:text-accent transition-smooth">
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Home</span>
        </Link>
        <div className="flex items-center space-x-2">
          <Wrench className="h-8 w-8 text-accent" />
          <h1 className="text-2xl font-bold">AutoCare Kenya</h1>
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

const Services = () => {
  const services = [
    {
      icon: <Wrench className="w-16 h-16 text-accent" />,
      title: "Complete Car Diagnosis",
      description: "State-of-the-art computer diagnostics to identify and resolve vehicle issues with precision.",
      features: [
        "Advanced OBD-II scanning",
        "Engine performance analysis",
        "Transmission diagnostics", 
        "Electrical system testing",
        "Air conditioning diagnosis",
        "Brake system inspection"
      ],
      price: "From KES 2,500",
      duration: "45-90 minutes"
    },
    {
      icon: <Palette className="w-16 h-16 text-accent" />,
      title: "Professional Window Tinting",
      description: "Premium window tinting services using high-quality films for ultimate protection and style.",
      features: [
        "UV protection up to 99%",
        "Heat rejection technology",
        "Privacy enhancement",
        "Glare reduction",
        "Scratch-resistant films",
        "Lifetime warranty available"
      ],
      price: "From KES 8,000",
      duration: "2-4 hours"
    },
    {
      icon: <Shield className="w-16 h-16 text-accent" />,
      title: "Preventive Maintenance",
      description: "Regular maintenance services to keep your vehicle running at peak performance.",
      features: [
        "Oil and filter changes",
        "Brake pad replacement",
        "Battery testing and replacement",
        "Tire rotation and balancing",
        "Fluid top-ups and replacements",
        "Multi-point inspection"
      ],
      price: "From KES 3,500",
      duration: "1-2 hours"
    }
  ];

  const additionalServices = [
    { name: "Engine Repair", price: "From KES 15,000" },
    { name: "Transmission Service", price: "From KES 12,000" },
    { name: "Suspension Repair", price: "From KES 8,000" },
    { name: "Exhaust System Repair", price: "From KES 5,000" },
    { name: "Cooling System Service", price: "From KES 4,000" },
    { name: "Electrical Repairs", price: "From KES 3,000" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional Automotive Services
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Expert technicians, modern equipment, and genuine parts ensure your vehicle receives the best care possible.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-accent mr-2" />
              <span>5-Star Service</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-accent mr-2" />
              <span>Quality Guaranteed</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-accent mr-2" />
              <span>Fast Turnaround</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Our Core Services</h3>
            <p className="text-xl text-muted-foreground">
              Comprehensive automotive solutions with transparent pricing
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-automotive transition-all duration-300 border-2 hover:border-accent/20">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-6 bg-accent/10 rounded-full w-fit group-hover:bg-accent/20 transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base mb-4">{service.description}</CardDescription>
                  <div className="flex justify-between items-center text-sm font-semibold">
                    <span className="text-accent">{service.price}</span>
                    <span className="text-muted-foreground">{service.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant="accent" asChild>
                    <Link to="/booking">Book This Service</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Services */}
          <div className="bg-muted/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Additional Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalServices.map((service, index) => (
                <div key={index} className="flex justify-between items-center bg-card p-4 rounded-lg border">
                  <span className="font-medium">{service.name}</span>
                  <span className="text-accent font-semibold">{service.price}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="accent" size="lg" asChild>
                <Link to="/contact">Get Custom Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Why Choose AutoCare Kenya?</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-accent/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">Expert Technicians</h4>
              <p className="text-sm text-muted-foreground">Certified professionals with 10+ years experience</p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">Quality Guarantee</h4>
              <p className="text-sm text-muted-foreground">All work backed by comprehensive warranty</p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">Fast Service</h4>
              <p className="text-sm text-muted-foreground">Quick turnaround without compromising quality</p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <ShoppingCart className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">Genuine Parts</h4>
              <p className="text-sm text-muted-foreground">Only authentic parts from trusted suppliers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;