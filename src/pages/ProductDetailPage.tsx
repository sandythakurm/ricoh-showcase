import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Phone, Check, ChevronRight, ChevronDown, Zap, Users, Settings, Leaf } from "lucide-react";
import meeting360HeroImg from "@/assets/meeting/meeting-360-hero.png";
import ricohLogo from "@/assets/ricoh-logo-partner.png";
import epsonLogo from "@/assets/brand-epson.png";
import optomaLogo from "@/assets/brand-optoma.webp";

const brandLogos: Record<string, string> = {
  ricoh: ricohLogo,
  epson: epsonLogo,
  optoma: optomaLogo,
};
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { getProductById, getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ProductHighlights from "@/components/ProductHighlights";
import Meeting360Features from "@/components/Meeting360Features";
import MonitorFlexibilitySection from "@/components/MonitorFlexibilitySection";
import MonitorAwardsSection from "@/components/MonitorAwardsSection";
import QuoteRequestDialog from "@/components/QuoteRequestDialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const highlightIcons: Record<string, React.ReactNode> = {
  "Enhance Productivity": <Zap className="h-5 w-5" />,
  "Empower Collaboration": <Users className="h-5 w-5" />,
  "Customise Your Environment": <Settings className="h-5 w-5" />,
  "Reduce Environmental Impact": <Leaf className="h-5 w-5" />,
};

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-heading font-bold mb-4">Product Not Found</h1>
          <Link to="/products" className="text-primary hover:underline">← Back to Products</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const gallery = product.gallery?.length ? product.gallery : [product.image];
  const related = getProductsByCategory(product.category).filter((p) => p.id !== product.id).slice(0, 4);
  const hasGroupedSpecs = product.specsGrouped && Object.keys(product.specsGrouped).length > 0;
  const hasFlatSpecs = Object.keys(product.specs).length > 0;

  return (
    <div className="min-h-screen">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-surface-warm border-b">
        <div className="container py-3">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to={`/products?category=${product.category}`} className="hover:text-primary transition-colors capitalize">{product.category.replace("-", " ")}</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-medium truncate max-w-[200px]">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Meeting 360 Hero Banner */}
      {product.id === "meeting-360" && (
        <section className="relative w-full max-h-[450px] overflow-hidden">
          <img
            src={meeting360HeroImg}
            alt="RICOH Meeting 360 in a conference room"
            className="w-full h-auto object-cover max-h-[450px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/30 to-transparent" />
          <div className="absolute inset-0 container flex flex-col justify-end pb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground max-w-xl mb-3"
            >
              Introducing the hardest-working meeting assistant
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg max-w-lg"
            >
              Meet RICOH Meeting 360 – an intelligent 3-in-1 video conferencing camera that keeps teams connected, engaged, and focused.
            </motion.p>
          </div>
        </section>
      )}

      {/* Portable Monitor Hero Banner */}
      {(product.id === "pm-150" || product.id === "pm-150bw") && (
        <MonitorAwardsSection />
      )}

      {/* Hero: Image + Key Info */}
      <section className="py-10 bg-surface-warm">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Image Gallery */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="bg-card rounded-2xl border p-6 flex items-center justify-center aspect-[4/3] mb-3">
                <img src={gallery[activeImage]} alt={product.name} className="w-full h-full object-contain" />
              </div>
              {gallery.length > 1 && (
                <div className="flex gap-2">
                  {gallery.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`w-20 h-20 rounded-xl border-2 overflow-hidden bg-card p-1.5 transition-all ${
                        activeImage === i ? "border-primary shadow-md" : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-contain" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Product Info */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-primary uppercase tracking-widest">{product.brand}</span>
                {product.isNew && (
                  <span className="text-xs font-bold bg-primary text-primary-foreground px-2.5 py-0.5 rounded-full">NEW</span>
                )}
                {product.isBestSeller && (
                  <span className="text-xs font-bold bg-ricoh-dark text-primary-foreground px-2.5 py-0.5 rounded-full">Best Seller</span>
                )}
                {product.subcategory && (
                  <span className="text-xs font-medium bg-secondary text-secondary-foreground px-2.5 py-0.5 rounded-full">{product.subcategory}</span>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold mt-1 mb-4">{product.name}</h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">{product.description}</p>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="font-heading font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Key Features</h3>
                <div className="grid grid-cols-2 gap-2">
                  {product.features.map((f) => (
                    <div key={f} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-3">
                <QuoteRequestDialog
                  productName={product.name}
                  trigger={
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-heading font-semibold hover:bg-primary/90 transition-colors"
                    >
                      <Mail className="h-5 w-5" /> Request a Quote
                    </button>
                  }
                />
                <a
                  href="tel:+97156180396"
                  className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-4 rounded-xl font-heading font-semibold hover:bg-primary/5 transition-colors"
                >
                  <Phone className="h-5 w-5" /> Call Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview - full width */}
      {product.overview && (
        <section className="py-14 bg-background">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{product.overview}</p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Meeting 360 Video + Custom Features */}
      {product.id === "meeting-360" && (
        <section className="py-14 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">Bringing people and ideas together</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">See how RICOH Meeting 360 transforms hybrid meetings with immersive 360° video, crystal-clear audio, and intelligent speaker tracking.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden border shadow-lg"
            >
              <iframe
                src="https://www.youtube.com/embed/K9FAjKlIN7g?rel=0"
                title="RICOH Meeting 360: 3-in-1 Video Conferencing Camera Perfect for Hybrid Meetings"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </motion.div>
          </div>
        </section>
      )}
      {product.id === "meeting-360" && <Meeting360Features />}

      {/* Highlights - Alternating Image/Text Layout */}
      {product.highlights && product.highlights.length > 0 && (
        <ProductHighlights highlights={product.highlights} />
      )}

      {/* Portable Monitor Flexibility Section */}
      {(product.id === "pm-150" || product.id === "pm-150bw") && (
        <MonitorFlexibilitySection />
      )}




      {/* Specifications - Grouped Accordion Style */}
      {hasGroupedSpecs && (
        <section className="py-14 bg-background">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">Specifications</h2>
              <p className="text-muted-foreground mb-8">Explore the details that define this product's capabilities. See the specs that matter most to you.</p>
              <div className="bg-card border rounded-2xl overflow-hidden">
                <Accordion type="multiple" className="w-full">
                  {Object.entries(product.specsGrouped!).map(([group, specs]) => (
                    <AccordionItem key={group} value={group} className="border-b last:border-b-0">
                      <AccordionTrigger className="px-6 py-5 text-base font-heading font-bold uppercase tracking-wide hover:no-underline">
                        {group}
                      </AccordionTrigger>
                      <AccordionContent className="px-0 pb-0">
                        <div className="divide-y divide-border/50">
                          {Object.entries(specs).map(([key, value], i) => (
                            <div
                              key={key}
                              className={`flex items-start justify-between px-6 py-3 text-sm ${
                                i % 2 === 0 ? "bg-secondary/20" : ""
                              }`}
                            >
                              <span className="font-medium min-w-[180px] shrink-0">{key}</span>
                              <span className="text-muted-foreground text-right">{value}</span>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Flat Specs fallback */}
      {!hasGroupedSpecs && hasFlatSpecs && (
        <section className="py-14 bg-background">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">Specifications</h2>
              <div className="bg-card border rounded-2xl overflow-hidden">
                {Object.entries(product.specs).map(([key, value], i) => (
                  <div
                    key={key}
                    className={`flex items-start justify-between px-6 py-3.5 text-sm ${
                      i % 2 === 0 ? "bg-secondary/30" : ""
                    } ${i < Object.keys(product.specs).length - 1 ? "border-b border-border/50" : ""}`}
                  >
                    <span className="font-medium min-w-[140px] shrink-0">{key}</span>
                    <span className="text-muted-foreground text-right">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Warranty */}
      {product.warranty && (
        <section className="py-14 bg-surface-warm">
          <div className="container">
            <h2 className="text-2xl font-heading font-bold mb-4">Warranty & Service</h2>
            <div className="bg-card border rounded-2xl p-6">
              <p className="text-muted-foreground leading-relaxed">{product.warranty}</p>
            </div>
          </div>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container">
            <h2 className="text-2xl font-heading font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
