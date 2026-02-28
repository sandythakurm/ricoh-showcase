import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrandsSection from "@/components/BrandsSection";
import ricohLogo from "@/assets/ricoh-logo.png";

const AboutPage = () => (
  <div className="min-h-screen">
    <Header />
    <section className="py-16 bg-surface-warm">
      <div className="container max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-heading font-bold mb-6"
        >
          About <span className="text-primary">Bytes Distribution</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="prose prose-lg max-w-none text-muted-foreground"
        >
          <p className="text-lg leading-relaxed mb-6">
            Founded in 2021, Bytes Distribution FZCO strives to be one of the best IT Distribution 
            companies in the region with qualified professionals. Based in Dubai Silicon Oasis, we 
            serve the Middle East and Africa region with a comprehensive suite of technology products.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Bytes Distribution FZCO has a full suite of products comprising printers, MFP, sublimation 
            printers, notebooks, smart boards, projectors, modern office equipment, and supplies.
          </p>

          <div className="bg-card border rounded-2xl p-8 my-10 flex items-center gap-6">
            <img src={ricohLogo} alt="Ricoh" className="h-16 shrink-0" />
            <div>
              <h3 className="font-heading font-semibold text-foreground text-xl mb-2">
                Official Ricoh Distributor
              </h3>
              <p className="text-base text-muted-foreground">
                As the official authorized distributor for Ricoh in MEA and Africa, we bring the full 
                range of Ricoh's innovative technology solutions to businesses across the region.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    <BrandsSection />
    <Footer />
  </div>
);

export default AboutPage;
