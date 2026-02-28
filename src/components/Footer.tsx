import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import bytesLogo from "@/assets/bytes-logo.png";

const Footer = () => (
  <footer className="bg-ricoh-dark text-primary-foreground">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img src={bytesLogo} alt="Bytes Distribution" className="h-10 mb-4 brightness-0 invert" />
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Founded in 2021, Bytes Distribution FZCO strives to be one of the best IT Distribution companies in MEA & Africa with qualified professionals.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
          <nav className="flex flex-col gap-2 text-sm text-primary-foreground/70">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
            <Link to="/brands" className="hover:text-primary transition-colors">Brands</Link>
            <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </nav>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Categories</h4>
          <nav className="flex flex-col gap-2 text-sm text-primary-foreground/70">
            <Link to="/products?category=printers" className="hover:text-primary transition-colors">Printers</Link>
            <Link to="/products?category=scanners" className="hover:text-primary transition-colors">Scanners</Link>
            <Link to="/products?category=projectors" className="hover:text-primary transition-colors">Projectors</Link>
            <Link to="/products?category=whiteboards" className="hover:text-primary transition-colors">Interactive Whiteboards</Link>
            <Link to="/products?category=smart-meeting" className="hover:text-primary transition-colors">Smart Meeting</Link>
          </nav>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
              <span>Dubai Silicon Oasis, DDP, Building A1, Dubai, UAE</span>
            </div>
            <a href="tel:+97156180396" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-4 w-4 text-primary" />
              (+971) 56 180 1396
            </a>
            <a href="mailto:info@bytes-me.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4 text-primary" />
              info@bytes-me.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} Bytes Distribution FZCO. All rights reserved. | Official Ricoh Distributor for MEA & Africa
      </div>
    </div>
  </footer>
);

export default Footer;
