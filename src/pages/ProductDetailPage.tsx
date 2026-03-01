import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Phone, Check, ChevronRight, Zap, Users, Settings, Leaf } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProductById, getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";

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

      {/* Hero: Image + Key Info side by side */}
      <section className="py-10 bg-surface-warm">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="bg-card rounded-2xl border p-6 flex items-center justify-center aspect-[4/3] mb-3">
                <img
                  src={gallery[activeImage]}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
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
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
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

              {/* Key Features - compact grid */}
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
                <a
                  href={`mailto:info@bytes-me.com?subject=Quote Request: ${product.name}&body=Hello, I would like to request a quote for ${product.name}.`}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-heading font-semibold hover:bg-primary/90 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  Request a Quote
                </a>
                <a
                  href="tel:+97156180396"
                  className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-4 rounded-xl font-heading font-semibold hover:bg-primary/5 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Call Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview - full width */}
      {product.overview && (
        <section className="py-14 bg-background">
          <div className="container max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{product.overview}</p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Highlights - full width cards */}
      {product.highlights && product.highlights.length > 0 && (
        <section className="py-14 bg-surface-warm">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">Why Choose This Product</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {product.highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border rounded-2xl p-6"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    {highlightIcons[h.title] || <Check className="h-5 w-5" />}
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{h.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{h.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Specifications - full width table */}
      {Object.keys(product.specs).length > 0 && (
        <section className="py-14 bg-background">
          <div className="container max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">Specifications</h2>
              <div className="bg-card border rounded-2xl overflow-hidden">
                {Object.entries(product.specs).map(([key, value], i) => (
                  <div
                    key={key}
                    className={`flex items-start justify-between px-5 py-3.5 text-sm ${
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
          <div className="container max-w-4xl">
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

      <Footer />
    </div>
  );
};

export default ProductDetailPage;
