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
            Founded in 2021, Bytes Distribution FZCO strives to be one of the leading IT distribution 
            companies in the region, supported by a team of highly qualified professionals. Based in 
            Dubai Silicon Oasis, we serve businesses across the Middle East and Africa with a 
            comprehensive portfolio of advanced technology products and solutions.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            We offer a variety of products including scanners and smart meeting devices such as cameras, 
            monitors, interactive whiteboards, and projectors.
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

          <p className="text-lg leading-relaxed mb-6">
            In addition, we also supply Epson scanners and Optoma projectors, expanding our portfolio 
            with reliable and high-performance technology solutions.
          </p>
        </motion.div>
      </div>
    </section>
    <BrandsSection />
    <Footer />
  </div>
);

export default AboutPage;
