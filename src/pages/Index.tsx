import React from 'react';
import { Wrench, Palette, ShoppingCart, CheckCircle, Phone, MapPin, Clock, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import heroImage from '@/assets/hero-garage.jpg';
import carDiagnosisImage from '@/assets/car-diagnosis.jpg';
import windowTintingImage from '@/assets/window-tinting.jpg';
import carMaintenanceImage from '@/assets/car-maintenance.jpg';

const Hero = () => (
  <section className="relative py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/10 overflow-hidden">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
      style={{ backgroundImage: `url(${heroImage})` }}
    ></div>
    <div className="relative container mx-auto text-center">
      <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Expert Car Care
        <span className="block">in Kenya</span>
      </h2>
      <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
        Professional car diagnosis, quality tinting services, and genuine spare parts. 
        Your trusted automotive partner in Kenya.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="text-lg px-8 py-4 bg-accent hover:bg-accent/90" asChild>
          <Link to="/booking">
            <CheckCircle className="w-5 h-5 mr-2" />
            Book Service
          </Link>
        </Button>
        <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
          <Link to="/parts">
            <ShoppingCart className="w-5 h-5 mr-2" />
            Shop Parts
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      id: "diagnosis",
      icon: <Wrench className="w-12 h-12 text-accent" />,
      title: "Full Car Diagnosis",
      description: "Advanced computer diagnostics to identify and resolve any issues with your vehicle's systems.",
      image: carDiagnosisImage,
      features: ["Engine diagnostics", "Electronic systems", "Performance analysis", "Fault code scanning"]
    },
    {
      id: "tinting", 
      icon: <Palette className="w-12 h-12 text-accent" />,
      title: "Professional Tinting",
      description: "High-quality window tinting services for privacy, UV protection, and enhanced vehicle aesthetics.",
      image: windowTintingImage,
      features: ["UV protection", "Heat reduction", "Privacy enhancement", "Quality films"]
    },
    {
      id: "maintenance",
      icon: <ShoppingCart className="w-12 h-12 text-accent" />,
      title: "Preventive Maintenance", 
      description: "Regular maintenance services to keep your vehicle running at peak performance.",
      image: carMaintenanceImage,
      features: ["Oil changes", "Brake service", "Battery testing", "Multi-point inspection"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4 text-foreground">Our Services</h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive automotive solutions delivered by experienced professionals
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur hover:border-accent/20 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="p-3 bg-accent/20 backdrop-blur-sm rounded-full w-fit">
                    {service.icon}
                  </div>
                </div>
              </div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-accent hover:bg-accent/90" asChild>
                  <Link to={`/services/${service.id}`}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-20 px-4 bg-secondary/30">
    <div className="container mx-auto">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-6 text-foreground">About Suba Touch</h3>
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          Located on Thika Road, Nairobi, Suba Touch has been serving the automotive needs of our community 
          for over 3 years. We combine modern diagnostic technology with traditional craftsmanship to deliver 
          exceptional service for all vehicle types.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">3+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">1000+</div>
            <div className="text-muted-foreground">Cars Serviced</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">99%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
    <div className="container mx-auto">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-6">Get In Touch</h3>
        <p className="text-xl mb-12 text-muted-foreground">
          Ready to give your car the care it deserves? Contact us today for professional automotive services.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center">
            <Phone className="w-8 h-8 text-accent mb-4" />
            <h4 className="text-lg font-semibold mb-2">Call Us</h4>
            <p className="text-muted-foreground">+254 700 000 000</p>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="w-8 h-8 text-accent mb-4" />
            <h4 className="text-lg font-semibold mb-2">Visit Us</h4>
            <p className="text-muted-foreground">Thika Road, Nairobi</p>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="w-8 h-8 text-accent mb-4" />
            <h4 className="text-lg font-semibold mb-2">Hours</h4>
            <p className="text-muted-foreground">Mon-Sat: 8AM-6PM</p>
          </div>
        </div>
        <Button size="lg" className="text-lg px-8 py-4 bg-accent hover:bg-accent/90" asChild>
          <Link to="/booking">
            <Phone className="w-5 h-5 mr-2" />
            Schedule Appointment
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-secondary/50 py-8 px-4 border-t border-border/50">
    <div className="container mx-auto text-center">
      <div className="flex items-center justify-center space-x-2 mb-4">
        <Car className="h-6 w-6 text-accent" />
        <span className="text-xl font-bold">Suba Touch</span>
      </div>
      <p className="text-muted-foreground text-sm">
        © 2024 Suba Touch. All rights reserved. Professional Automotive Services in Nairobi
      </p>
    </div>
  </footer>
);

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <Services />
    <About />
    <Contact />
    <Footer />
  </div>
);

export default Index;