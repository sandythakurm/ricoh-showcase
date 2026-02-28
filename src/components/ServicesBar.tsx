import { Truck, ShieldCheck, Headphones, Star } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { icon: Truck, title: "Fast Delivery", desc: "Across MEA & Africa" },
  { icon: ShieldCheck, title: "Warranty Guaranteed", desc: "Official manufacturer warranty" },
  { icon: Headphones, title: "24/7 Support", desc: "Technical assistance anytime" },
  { icon: Star, title: "Best Quality", desc: "20+ years on the market" },
];

const ServicesBar = () => (
  <section className="py-12 bg-secondary">
    <div className="container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center gap-3"
          >
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <s.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-heading font-semibold text-sm">{s.title}</h4>
              <p className="text-xs text-muted-foreground">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesBar;
