import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Award } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import ricohLogo from "@/assets/ricoh-logo.png";

const HeroSection = () => (
  <section className="relative min-h-[85vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-ricoh-dark/95 via-ricoh-dark/80 to-ricoh-dark/40" />
    </div>

    <div className="container relative z-10 py-20">
      <div className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2">
            <Award className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary-foreground">Official Authorized Distributor</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-4"
        >
          Powering Business
          <br />
          <span className="text-primary">with Ricoh</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-4 mb-6"
        >
          <img src={ricohLogo} alt="Ricoh" className="h-12" />
          <div className="h-8 w-px bg-primary-foreground/30" />
          <p className="text-primary-foreground/80 text-lg">
            Your trusted technology partner in MEA & Africa
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-primary-foreground/70 text-lg mb-8 leading-relaxed"
        >
          Bytes Distribution delivers a full suite of Ricoh products — printers, MFPs, projectors, 
          interactive whiteboards, and smart meeting solutions across the region.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            to="/products?brand=ricoh"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-heading font-semibold text-base hover:bg-primary/90 transition-all hover:gap-3"
          >
            Explore Ricoh Products
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground border border-primary-foreground/20 px-8 py-4 rounded-xl font-heading font-semibold text-base hover:bg-primary-foreground/20 transition-colors"
          >
            Request a Quote
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
