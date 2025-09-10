import React from 'react';
import { Wrench, Palette, ShoppingCart, CheckCircle, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-garage.jpg';

const Header = () => (
  <header className="bg-gradient-hero text-primary-foreground py-4 px-6 shadow-automotive">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Wrench className="h-8 w-8 text-accent" />
        <h1 className="text-2xl font-bold">AutoCare Kenya</h1>
      </div>
      <nav className="hidden md:flex space-x-6">
        <Link to="/services" className="hover:text-accent transition-smooth">Services</Link>
        <Link to="/#about" className="hover:text-accent transition-smooth">About</Link>
        <Link to="/parts" className="hover:text-accent transition-smooth">Parts</Link>
        <Link to="/contact" className="hover:text-accent transition-smooth">Contact</Link>
      </nav>
      <Button variant="accent" asChild>
        <Link to="/contact">
          <Phone className="w-4 h-4 mr-2" />
          Call Now
        </Link>
      </Button>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
    <div className="absolute inset-0 bg-automotive-blue/80"></div>
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
      style={{ backgroundImage: `url(${heroImage})` }}
    ></div>
    <div className="relative container mx-auto px-6 py-24 text-center">
      <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary-foreground">
        Expert Car Care
        <span className="block text-accent">in Kenya</span>
      </h2>
      <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
        Professional car diagnosis, quality tinting services, and genuine spare parts. 
        Your trusted automotive partner in Kenya.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="accent" size="lg" className="text-lg px-8 py-4" asChild>
          <Link to="/booking">
            <CheckCircle className="w-5 h-5 mr-2" />
            Book Service
          </Link>
        </Button>
        <Button variant="secondary" size="lg" className="text-lg px-8 py-4" asChild>
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
      icon: <Wrench className="w-12 h-12 text-accent" />,
      title: "Full Car Diagnosis",
      description: "Advanced computer diagnostics to identify and resolve any issues with your vehicle's systems.",
      features: ["Engine diagnostics", "Electronic systems", "Performance analysis", "Fault code scanning"]
    },
    {
      icon: <Palette className="w-12 h-12 text-accent" />,
      title: "Professional Tinting",
      description: "High-quality window tinting services for privacy, UV protection, and enhanced vehicle aesthetics.",
      features: ["UV protection", "Heat reduction", "Privacy enhancement", "Quality films"]
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-accent" />,
      title: "Genuine Spare Parts",
      description: "Wide selection of authentic spare parts for all major vehicle brands at competitive prices.",
      features: ["Genuine parts", "Competitive pricing", "Wide selection", "Quality guarantee"]
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
            <Card key={index} className="group hover:shadow-automotive transition-all duration-300 border-2 hover:border-accent/20">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-accent/10 rounded-full w-fit group-hover:bg-accent/20 transition-colors">
                  {service.icon}
                </div>
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
                <Button className="w-full" variant="accent" asChild>
                  <Link to="/services">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="accent" size="lg" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-20 bg-muted/30">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-6 text-foreground">About AutoCare Kenya</h3>
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          Located in the heart of Kenya, AutoCare Kenya has been serving the automotive needs of our community 
          for over a decade. We combine modern diagnostic technology with traditional craftsmanship to deliver 
          exceptional service for all vehicle types.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">10+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">5000+</div>
            <div className="text-muted-foreground">Cars Serviced</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">100%</div>
            <div className="text-muted-foreground">Customer Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20 bg-gradient-hero text-primary-foreground">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-6">Get In Touch</h3>
        <p className="text-xl mb-12 opacity-90">
          Ready to give your car the care it deserves? Contact us today for professional automotive services.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center">
            <Phone className="w-8 h-8 text-accent mb-4" />
            <h4 className="text-lg font-semibold mb-2">Call Us</h4>
            <p className="opacity-90">+254 700 123 456</p>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="w-8 h-8 text-accent mb-4" />
            <h4 className="text-lg font-semibold mb-2">Visit Us</h4>
            <p className="opacity-90">Nairobi, Kenya</p>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="w-8 h-8 text-accent mb-4" />
            <h4 className="text-lg font-semibold mb-2">Hours</h4>
            <p className="opacity-90">Mon-Sat: 8AM-6PM</p>
          </div>
        </div>
        <Button variant="accent" size="lg" className="text-lg px-8 py-4" asChild>
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
  <footer className="bg-automotive-dark text-primary-foreground py-8">
    <div className="container mx-auto px-6 text-center">
      <div className="flex items-center justify-center space-x-2 mb-4">
        <Wrench className="h-6 w-6 text-accent" />
        <span className="text-xl font-bold">AutoCare Kenya</span>
      </div>
      <p className="text-primary-foreground/70">
        © 2024 AutoCare Kenya. All rights reserved. Your trusted automotive partner.
      </p>
    </div>
  </footer>
);

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <Hero />
    <Services />
    <About />
    <Contact />
    <Footer />
  </div>
);

export default Index;