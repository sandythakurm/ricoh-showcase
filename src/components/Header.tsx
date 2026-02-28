import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Menu, X, Search } from "lucide-react";
import bytesLogo from "@/assets/bytes-logo.png";
import ricohLogo from "@/assets/ricoh-logo.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/brands", label: "Brands" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-ricoh-dark text-primary-foreground">
        <div className="container flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+97156180396" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">(+971) 56 180 1396</span>
            </a>
            <a href="mailto:info@bytes-me.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">info@bytes-me.com</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground text-xs">Official Ricoh Distributor — MEA & Africa</span>
            <img src={ricohLogo} alt="Ricoh" className="h-5 hidden sm:block" />
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-card/95 backdrop-blur-md border-b">
        <div className="container flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-2">
            <img src={bytesLogo} alt="Bytes Distribution" className="h-10" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.href ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/products" className="hidden md:flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
              <Search className="h-4 w-4" />
              Browse Catalog
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-card">
            <nav className="container py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium py-2 ${
                    location.pathname === link.href ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
