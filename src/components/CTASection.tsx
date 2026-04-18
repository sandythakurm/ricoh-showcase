import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import QuoteRequestDialog from "@/components/QuoteRequestDialog";

const CTASection = () => (
  <section className="py-20 bg-primary">
    <div className="container text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
          Ready to Upgrade Your Business?
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
          Get in touch with our team for product inquiries, quotes, and technical consultation
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <QuoteRequestDialog
            trigger={
              <button
                type="button"
                className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-xl font-heading font-semibold hover:bg-primary-foreground/90 transition-colors"
              >
                <Mail className="h-5 w-5" />
                Request a Quote
              </button>
            }
          />
          <a
            href="tel:+97156180396"
            className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/30 px-8 py-4 rounded-xl font-heading font-semibold hover:bg-primary-foreground/20 transition-colors"
          >
            <Phone className="h-5 w-5" />
            Call Us Now
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
