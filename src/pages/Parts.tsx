import React, { useState } from 'react';
import { ShoppingCart, Search, Filter, Star, Shield, Truck, ArrowLeft, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
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
          <ShoppingCart className="h-8 w-8 text-accent" />
          <h1 className="text-2xl font-bold">Spare Parts</h1>
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

const Parts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Engine', 'Brakes', 'Suspension', 'Electrical', 'Filters', 'Fluids', 'Tires'];

  const parts = [
    {
      id: 1,
      name: "Premium Brake Pads Set",
      category: "Brakes",
      brand: "Bosch",
      price: "KES 4,500",
      originalPrice: "KES 5,200",
      image: "🔧",
      rating: 4.8,
      inStock: true,
      description: "High-performance ceramic brake pads for superior stopping power",
      compatibility: "Toyota, Nissan, Honda"
    },
    {
      id: 2,
      name: "Engine Oil Filter",
      category: "Filters",
      brand: "Mann Filter",
      price: "KES 1,200",
      originalPrice: null,
      image: "🛢️",
      rating: 4.9,
      inStock: true,
      description: "Premium oil filter for optimal engine protection",
      compatibility: "Universal fit"
    },
    {
      id: 3,
      name: "LED Headlight Bulbs",
      category: "Electrical",
      brand: "Philips",
      price: "KES 3,800",
      originalPrice: "KES 4,500",
      image: "💡",
      rating: 4.7,
      inStock: true,
      description: "Bright LED headlight bulbs with 3-year warranty",
      compatibility: "Most vehicles"
    },
    {
      id: 4,
      name: "Shock Absorbers Pair",
      category: "Suspension",
      brand: "KYB",
      price: "KES 8,500",
      originalPrice: "KES 9,800",
      image: "🔩",
      rating: 4.6,
      inStock: true,
      description: "Premium gas-filled shock absorbers for smooth ride",
      compatibility: "Toyota Corolla, Vitz"
    },
    {
      id: 5,
      name: "Air Filter Element",
      category: "Filters",
      brand: "K&N",
      price: "KES 2,200",
      originalPrice: null,
      image: "🌬️",
      rating: 4.8,
      inStock: false,
      description: "High-flow air filter for improved performance",
      compatibility: "Various models"
    },
    {
      id: 6,
      name: "Battery 12V 70Ah",
      category: "Electrical",
      brand: "Chloride Exide",
      price: "KES 12,000",
      originalPrice: "KES 13,500",
      image: "🔋",
      rating: 4.5,
      inStock: true,
      description: "Maintenance-free car battery with 2-year warranty",
      compatibility: "Most sedans & SUVs"
    }
  ];

  const filteredParts = parts.filter(part => {
    const matchesSearch = part.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         part.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || part.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Genuine Spare Parts
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Quality automotive parts from trusted brands. Fast delivery across Kenya with warranty guarantee.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-accent mr-2" />
              <span>Genuine Parts</span>
            </div>
            <div className="flex items-center">
              <Truck className="w-5 h-5 text-accent mr-2" />
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center">
              <Star className="w-5 h-5 text-accent mr-2" />
              <span>Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search parts, brands..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "accent" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Parts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredParts.map((part) => (
              <Card key={part.id} className="group hover:shadow-automotive transition-all duration-300 border-2 hover:border-accent/20">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant={part.inStock ? "default" : "destructive"}>
                      {part.inStock ? "In Stock" : "Out of Stock"}
                    </Badge>
                    <div className="text-2xl">{part.image}</div>
                  </div>
                  <CardTitle className="text-lg">{part.name}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">{part.brand}</span>
                      <div className="flex items-center">
                        <Star className="w-3 h-3 text-accent fill-current" />
                        <span className="text-xs ml-1">{part.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm">{part.description}</p>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl font-bold text-accent">{part.price}</span>
                      {part.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">{part.originalPrice}</span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      <strong>Fits:</strong> {part.compatibility}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1" 
                      variant="accent"
                      disabled={!part.inStock}
                      asChild={part.inStock}
                    >
                      {part.inStock ? (
                        <Link to="/contact">
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Order Now
                        </Link>
                      ) : (
                        <>
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Out of Stock
                        </>
                      )}
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link to="/contact">
                        <Phone className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredParts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground mb-4">No parts found matching your search.</p>
              <Button variant="accent" onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Can't Find What You Need?</h3>
          <p className="text-lg mb-6 opacity-90">
            Our parts specialists can help you find the exact component for your vehicle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button variant="accent" size="lg" className="flex-1" asChild>
              <Link to="/contact">
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </Link>
            </Button>
            <Button variant="secondary" size="lg" className="flex-1" asChild>
              <Link to="/contact">
                Request Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Parts;