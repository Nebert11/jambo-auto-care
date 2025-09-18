import { Button } from "@/components/ui/button";
import { Car } from "lucide-react";

const Navbar = () => {
  return (
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
          <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="/parts" className="text-muted-foreground hover:text-foreground transition-colors">Parts</a>
          <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </nav>
        <Button asChild className="bg-accent hover:bg-accent/90">
          <a href="tel:+254700000000">Call Now</a>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;