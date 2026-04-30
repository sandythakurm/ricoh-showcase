import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { brands } from "@/data/products";
import ricohLogo from "@/assets/ricoh-logo-partner.png";
import epsonLogo from "@/assets/brand-epson.png";
import optomaLogo from "@/assets/brand-optoma.webp";

const brandLogos: Record<string, string> = {
  ricoh: ricohLogo,
  epson: epsonLogo,
  optoma: optomaLogo,
};

const BrandsPage = () => (
  <div className="min-h-screen">
    <Header />
    <section className="py-16 bg-surface-warm">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-heading font-bold mb-8"
        >
          Our <span className="text-primary">Brands</span>
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={`/products?brand=${brand.id}`}
                className={`block bg-card border rounded-2xl p-8 text-center hover:shadow-lg transition-all ${
                  brand.isPrimary ? "border-primary/30 ring-1 ring-primary/10" : ""
                }`}
              >
                <div className="h-24 flex items-center justify-center mb-4">
                  <img
                    src={brandLogos[brand.id]}
                    alt={`${brand.name} logo`}
                    className="max-h-20 max-w-[200px] object-contain"
                  />
                </div>
                <h2 className={`text-xl font-heading font-semibold ${brand.isPrimary ? "text-primary" : "text-foreground"}`}>
                  {brand.name}
                </h2>
                {brand.isPrimary && (
                  <span className="inline-block mt-3 text-xs bg-primary text-primary-foreground px-3 py-1 rounded-full font-medium">
                    Primary Partner
                  </span>
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <CTASection />
    <Footer />
  </div>
);

export default BrandsPage;
