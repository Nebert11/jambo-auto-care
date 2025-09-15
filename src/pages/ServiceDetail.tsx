import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Wrench, Palette, Shield, CheckCircle, Phone, ArrowLeft, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import carDiagnosisImage from '@/assets/car-diagnosis.jpg';
import windowTintingImage from '@/assets/window-tinting.jpg';
import carMaintenanceImage from '@/assets/car-maintenance.jpg';

const Header = () => (
  <header className="bg-gradient-hero text-primary-foreground py-4 px-6 shadow-automotive">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Link to="/services" className="flex items-center space-x-2 hover:text-accent transition-smooth">
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Services</span>
        </Link>
        <div className="flex items-center space-x-2">
          <Wrench className="h-8 w-8 text-accent" />
          <h1 className="text-2xl font-bold">Suba Touch</h1>
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

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const serviceDetails = {
    diagnosis: {
      icon: <Wrench className="w-20 h-20 text-accent" />,
      title: "Complete Car Diagnosis",
      description: "State-of-the-art computer diagnostics to identify and resolve vehicle issues with precision using the latest diagnostic technology.",
      image: carDiagnosisImage,
      fullDescription: "Our comprehensive car diagnosis service uses advanced OBD-II scanning technology and professional diagnostic equipment to thoroughly analyze your vehicle's performance. Our certified technicians can quickly identify issues across all major vehicle systems, from engine performance to electrical components, ensuring accurate problem identification and efficient repairs.",
      features: [
        "Advanced OBD-II scanning and fault code reading",
        "Complete engine performance analysis and testing", 
        "Transmission system diagnostics and evaluation",
        "Electrical system testing and circuit analysis",
        "Air conditioning system diagnosis and repair assessment",
        "Comprehensive brake system inspection and testing",
        "Fuel system analysis and injector testing",
        "Emission system diagnostics and compliance checking"
      ],
      benefits: [
        "Accurate problem identification saves time and money",
        "Prevents minor issues from becoming major repairs", 
        "Comprehensive report with recommended actions",
        "Professional technicians with 10+ years experience"
      ],
      price: "From KES 2,500",
      duration: "45-90 minutes",
      warranty: "30-day diagnostic accuracy guarantee"
    },
    tinting: {
      icon: <Palette className="w-20 h-20 text-accent" />,
      title: "Professional Window Tinting",
      description: "Premium window tinting services using high-quality films for ultimate protection, privacy, and enhanced vehicle aesthetics.",
      image: windowTintingImage,
      fullDescription: "Our professional window tinting service uses only the highest quality films from leading manufacturers. We provide expert installation with precision cutting and bubble-free application. Our tinting solutions offer superior UV protection, heat rejection, and privacy enhancement while maintaining optimal visibility and legal compliance.",
      features: [
        "Premium quality films with lifetime warranty options",
        "Up to 99% UV protection for interior preservation",
        "Advanced heat rejection technology for comfort",
        "Enhanced privacy and security for passengers",
        "Scratch-resistant and fade-resistant films",
        "Professional installation with precision cutting",
        "Multiple shade options to suit preferences",
        "Legal compliance with local tinting regulations"
      ],
      benefits: [
        "Protects interior from UV damage and fading",
        "Reduces interior heat by up to 60%",
        "Enhanced privacy and security",
        "Professional appearance and increased resale value"
      ],
      price: "From KES 8,000",
      duration: "2-4 hours",
      warranty: "Lifetime warranty on premium films"
    },
    maintenance: {
      icon: <Shield className="w-20 h-20 text-accent" />,
      title: "Preventive Maintenance",
      description: "Comprehensive maintenance services to keep your vehicle running at peak performance and prevent costly breakdowns.",
      image: carMaintenanceImage,
      fullDescription: "Our preventive maintenance program is designed to keep your vehicle in optimal condition through regular service intervals. We follow manufacturer recommendations and use only genuine or OEM-equivalent parts. Our comprehensive maintenance covers all essential systems to ensure reliability, safety, and longevity of your vehicle.",
      features: [
        "Complete oil and filter change service",
        "Brake pad inspection and replacement",
        "Battery testing and replacement service",
        "Professional tire rotation and wheel balancing",
        "All fluid top-ups and system replacements",
        "Comprehensive multi-point vehicle inspection",
        "Air filter replacement and cabin filter service",
        "Spark plug replacement and ignition system service"
      ],
      benefits: [
        "Extends vehicle lifespan and reliability",
        "Prevents expensive emergency repairs",
        "Maintains optimal fuel efficiency",
        "Ensures safety and peace of mind"
      ],
      price: "From KES 3,500", 
      duration: "1-2 hours",
      warranty: "6-month service warranty"
    }
  };

  const service = serviceDetails[serviceId as keyof typeof serviceDetails];

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Service Not Found</h2>
          <p className="text-muted-foreground mb-8">The requested service could not be found.</p>
          <Button variant="accent" asChild>
            <Link to="/services">Back to Services</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 flex justify-center">
              <div className="p-6 bg-accent/20 backdrop-blur-sm rounded-full">
                {service.icon}
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl mb-8 opacity-90">{service.fullDescription}</p>
            <div className="flex items-center justify-center space-x-8 text-sm mb-8">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-accent mr-2" />
                <span>{service.price}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-accent mr-2" />
                <span>{service.duration}</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-accent mr-2" />
                <span>{service.warranty}</span>
              </div>
            </div>
            <Button variant="accent" size="lg" className="text-lg px-8 py-4" asChild>
              <Link to="/booking">
                <CheckCircle className="w-5 h-5 mr-2" />
                Book This Service
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Service Image */}
            <div className="relative">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-96 object-cover rounded-lg shadow-automotive"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg" />
            </div>

            {/* Service Information */}
            <div>
              <h3 className="text-3xl font-bold mb-6">What's Included</h3>
              <ul className="space-y-4 mb-8">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-3xl font-bold mb-6">Why Choose This Service</h3>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Star className="w-5 h-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <Card className="max-w-2xl mx-auto text-center border-2 border-accent/20">
            <CardHeader>
              <CardTitle className="text-3xl">{service.title}</CardTitle>
              <CardDescription className="text-lg">{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-accent mb-2">{service.price}</div>
              <div className="text-muted-foreground mb-6">
                Duration: {service.duration} • {service.warranty}
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <Button variant="accent" size="lg" asChild>
                  <Link to="/booking">Book Now</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Professional service backed by our quality guarantee. 
                Call us at +254 700 123 456 for immediate assistance.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;