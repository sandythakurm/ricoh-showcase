import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import brandRicoh from "@/assets/ricoh-logo-partner.png";
import brandEpson from "@/assets/brand-epson.png";
import brandOptoma from "@/assets/brand-optoma.webp";

const brandsWithLogos = [
  { id: "ricoh", name: "Ricoh", logo: brandRicoh, isPrimary: true },
  { id: "epson", name: "Epson", logo: brandEpson },
  { id: "optoma", name: "Optoma", logo: brandOptoma },
];

const BrandsSection = () => (
  <section className="py-16 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
          Our <span className="text-primary">Brands</span> & Partners
        </h2>
        <p className="text-muted-foreground">We partner with the world's leading technology brands</p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {brandsWithLogos.map((brand, i) => (
          <motion.div
            key={brand.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <Link
              to={`/products?brand=${brand.id}`}
              className={`flex flex-col items-center justify-center p-6 rounded-2xl border transition-all hover:shadow-lg h-32 ${
                brand.isPrimary
                  ? "bg-primary/5 border-primary/20 hover:border-primary/40 ring-1 ring-primary/10"
                  : "bg-card border-border hover:border-primary/20"
              }`}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-12 max-w-[120px] object-contain"
              />
              {brand.isPrimary && (
                <span className="mt-2 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full font-medium">
                  Primary Partner
                </span>
              )}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BrandsSection;
