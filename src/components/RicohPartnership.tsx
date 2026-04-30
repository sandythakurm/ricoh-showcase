import { motion } from "framer-motion";
import { Shield, Globe, Award, Headphones } from "lucide-react";
import ricohLogo from "@/assets/ricoh-logo.png";

const benefits = [
  { icon: Shield, title: "Authorized Distributor", desc: "Official Ricoh partner with full product warranty and support" },
  { icon: Globe, title: "MEA & Africa Coverage", desc: "Comprehensive distribution network across the Middle East and Africa" },
  { icon: Award, title: "Certified Expertise", desc: "Factory-trained team with deep Ricoh product knowledge" },
  { icon: Headphones, title: "Dedicated Support", desc: "24/7 technical assistance and after-sales service" },
];

const RicohPartnership = () => (
  <section className="py-20 bg-ricoh-dark text-primary-foreground overflow-hidden">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <img src={ricohLogo} alt="Ricoh" className="h-14" />
            <div className="h-10 w-px bg-primary-foreground/20" />
            <span className="text-sm text-primary-foreground/60 font-medium">Official Partnership</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 leading-tight">
            Your Gateway to
            <br />
            <span className="text-primary">PFU Ricoh Technology</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
            As the official PFU Ricoh distributor for MEA and Africa, Bytes Distribution provides the full range 
            of PFU Ricoh's innovative products — from multifunction printers and production scanners to 
            interactive whiteboards and smart meeting solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-5"
            >
              <b.icon className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-heading font-semibold mb-1">{b.title}</h3>
              <p className="text-sm text-primary-foreground/60">{b.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default RicohPartnership;
