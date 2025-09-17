import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Car, 
  Shield, 
  Users, 
  Award, 
  Wrench, 
  Clock, 
  MapPin, 
  Phone,
  CheckCircle,
  Target,
  Heart,
  Star
} from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8 text-accent" />, number: "500+", label: "Happy Customers" },
    { icon: <Car className="w-8 h-8 text-accent" />, number: "3+", label: "Years Experience" },
    { icon: <Wrench className="w-8 h-8 text-accent" />, number: "1000+", label: "Cars Serviced" },
    { icon: <Award className="w-8 h-8 text-accent" />, number: "99%", label: "Satisfaction Rate" }
  ];

  const values = [
    {
      icon: <Shield className="w-12 h-12 text-accent mb-4" />,
      title: "Quality Assurance",
      description: "We use only genuine parts and certified techniques to ensure your vehicle receives the best care possible."
    },
    {
      icon: <Clock className="w-12 h-12 text-accent mb-4" />,
      title: "Timely Service",
      description: "Respect for your time is paramount. We complete all services within promised timeframes."
    },
    {
      icon: <Heart className="w-12 h-12 text-accent mb-4" />,
      title: "Customer First",
      description: "Your satisfaction drives everything we do. We build lasting relationships through exceptional service."
    }
  ];

  const services = [
    "Professional Window Tinting",
    "Complete Vehicle Diagnostics", 
    "Preventive Maintenance",
    "Engine Repairs",
    "Brake System Service",
    "Air Conditioning Service",
    "Electrical System Repairs",
    "Transmission Service"
  ];

  // const team = [
  //   {
  //     name: "James Kiprotich",
  //     role: "Lead Technician",
  //     experience: "8+ Years",
  //     specialization: "Engine Diagnostics & Repair"
  //   },
  //   {
  //     name: "Mary Wanjiku", 
  //     role: "Service Advisor",
  //     experience: "5+ Years",
  //     specialization: "Customer Relations & Parts"
  //   },
  //   {
  //     name: "David Mwangi",
  //     role: "Tinting Specialist", 
  //     experience: "6+ Years",
  //     specialization: "Window Tinting & Wrapping"
  //   }
  // ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Car className="w-8 h-8 text-accent" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Suba Touch
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
            <a href="/services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="/about" className="text-foreground font-medium">About</a>
            <a href="/parts" className="text-muted-foreground hover:text-foreground transition-colors">Parts</a>
            <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </nav>
          <Button asChild className="bg-accent hover:bg-accent/90">
            <a href="tel:+254700000000">Call Now</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
            About Suba Touch
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Your Trusted Automotive Partner
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Since 2021, Suba Touch has been Nairobi's premier destination for professional automotive services. 
            Located on Thika Road, we combine expert craftsmanship with cutting-edge technology to keep your vehicle running at its best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90">
              <a href="/booking">Schedule Service</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/contact">Visit Our Workshop</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-border/50 bg-card/50 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">{stat.number}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Suba Touch was founded with a simple mission: to provide Nairobi drivers with reliable, 
              professional automotive services they can trust. What started as a small workshop has grown 
              into one of the most respected automotive service centers on Thika Road.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Target className="w-6 h-6 text-accent mr-2" />
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To deliver exceptional automotive services that exceed expectations while building 
                lasting relationships with our customers through transparency, quality, and reliability.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Star className="w-6 h-6 text-accent mr-2" />
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be Kenya's leading automotive service provider, known for innovation, 
                quality craftsmanship, and exceptional customer experience.
              </p>
            </div>
            
            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold mb-4">Why Choose Suba Touch?</h4>
                <div className="space-y-3">
                  {[
                    "Certified technicians with extensive experience",
                    "State-of-the-art diagnostic equipment", 
                    "Genuine parts and quality materials only",
                    "Transparent pricing with detailed estimates",
                    "Convenient location with easy parking",
                    "Fast turnaround times",
                    "Comprehensive warranty on all work"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These core values guide every interaction and service we provide
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-border/50 bg-card/50 backdrop-blur hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Complete Automotive Solutions</h2>
            <p className="text-xl text-muted-foreground">
              From routine maintenance to complex repairs, we handle it all
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-center p-4 bg-secondary/20 rounded-lg border border-border/50">
                <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Expert Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our certified professionals bring years of experience and passion for automotive excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-border/50 bg-card/50 backdrop-blur">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-accent font-medium mb-1">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-2">{member.experience}</p>
                  <p className="text-sm text-muted-foreground">{member.specialization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Visit Our Workshop</h2>
            <p className="text-xl text-muted-foreground">
              Conveniently located on Thika Road with easy access and ample parking
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-accent mr-3" />
                  <h3 className="text-xl font-semibold">Our Location</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Thika Road, Nairobi<br />
                  Kenya
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  Easy to find with convenient parking available for all customers
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href="/contact">Get Directions</a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 text-accent mr-3" />
                  <h3 className="text-xl font-semibold">Contact Us</h3>
                </div>
                <p className="text-muted-foreground mb-2">
                  <strong>Phone:</strong> +254 700 000 000
                </p>
                <p className="text-muted-foreground mb-2">
                  <strong>Email:</strong> info@subatouch.com
                </p>
                <p className="text-muted-foreground mb-6">
                  <strong>Hours:</strong> Mon-Sat 8AM-6PM
                </p>
                <Button asChild className="w-full bg-accent hover:bg-accent/90">
                  <a href="tel:+254700000000">Call Now</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/10 border-t border-border/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the Suba Touch Difference?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Join hundreds of satisfied customers who trust us with their vehicles. 
            Book your service today and discover why we're Nairobi's preferred automotive service center.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90">
              <a href="/booking">Schedule Service</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/services">View Services</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 py-8 px-4 border-t border-border/50">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Car className="w-6 h-6 text-accent" />
            <span className="text-xl font-bold">Suba Touch</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 Suba Touch. All rights reserved. | Professional Automotive Services in Nairobi
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
