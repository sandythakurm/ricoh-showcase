import { motion } from "framer-motion";
import { brands } from "@/data/products";
import { Link } from "react-router-dom";

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

      <div className="flex flex-wrap justify-center gap-4">
        {brands.map((brand, i) => (
          <motion.div
            key={brand.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <Link
              to={`/products?brand=${brand.id}`}
              className={`flex items-center justify-center px-8 py-4 rounded-xl border transition-all hover:shadow-md ${
                brand.isPrimary
                  ? "bg-primary/5 border-primary/20 hover:border-primary/40"
                  : "bg-card border-border hover:border-primary/20"
              }`}
            >
              <span className={`font-heading font-semibold text-lg ${brand.isPrimary ? "text-primary" : "text-foreground"}`}>
                {brand.name}
              </span>
              {brand.isPrimary && (
                <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full font-medium">
                  Primary
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
