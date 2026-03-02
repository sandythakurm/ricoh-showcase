import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import ricohLogo from "@/assets/ricoh-logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ProductCard from "@/components/ProductCard";
import { products, categories, brands } from "@/data/products";
import { Search } from "lucide-react";

const subcategoriesMap: Record<string, { id: string; name: string }[]> = {
  printers: [
    { id: "B&W All-in-One", name: "B&W All-in-One" },
    { id: "Colour All-in-One", name: "Colour All-in-One" },
    { id: "Single Function", name: "Single Function" },
  ],
  scanners: [
    { id: "Workgroup", name: "Workgroup" },
    { id: "Departmental", name: "Departmental" },
    { id: "Network", name: "Network" },
    { id: "Production", name: "Production" },
  ],
  projectors: [
    { id: "Compact", name: "Compact" },
    { id: "Standard Throw", name: "Standard Throw" },
    { id: "Short Throw", name: "Short Throw" },
    { id: "Ultra Short Throw", name: "Ultra Short Throw" },
    { id: "Broad Use", name: "Broad Use" },
    { id: "High End", name: "High End" },
  ],
};

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "");
  const [selectedBrand, setSelectedBrand] = useState(searchParams.get("brand") || "");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase());
      const matchCategory = !selectedCategory || p.category === selectedCategory;
      const matchBrand = !selectedBrand || p.brand === selectedBrand;
      const matchSubcategory = !selectedSubcategory || p.subcategory === selectedSubcategory;
      return matchSearch && matchCategory && matchBrand && matchSubcategory;
    });
  }, [search, selectedCategory, selectedBrand, selectedSubcategory]);

  return (
    <div className="min-h-screen">
      <Header />
      {/* Category Banner */}
      <section className="relative overflow-hidden bg-ricoh-dark min-h-[260px] md:min-h-[300px] flex items-center">
        {/* Background: Vimeo video for scanners, local video for printers, image for others */}
        {selectedCategory === "scanners" ? (
          <div className="absolute inset-0 w-full h-full">
            <iframe
              src="https://player.vimeo.com/video/904120943?autoplay=1&background=1&loop=1&muted=1&controls=0"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full min-h-full"
              style={{ aspectRatio: "16/9" }}
              allow="autoplay"
              frameBorder="0"
              title="Ricoh fi-Series Scanners"
            />
          </div>
        ) : selectedCategory === "printers" ? (
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
              src="/videos/ricoh-promo.mp4"
            />
          </div>
        ) : (
          <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-ricoh-dark/95 via-ricoh-dark/85 to-ricoh-dark/50" />
        <div className="container relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 py-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-3"
            >
              <img src={ricohLogo} alt="Ricoh" className="h-8" />
              <span className="text-primary text-sm font-medium tracking-wide uppercase">
                Official Authorized Distributor — MEA & Africa
              </span>
            </motion.div>
            <motion.h1
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground"
            >
              {selectedCategory === "scanners" ? (
                <>Ricoh <span className="text-primary">Document Scanners</span></>
              ) : selectedCategory === "printers" ? (
                <>Ricoh <span className="text-primary">Printers & Copiers</span></>
              ) : (
                <>Explore Our <span className="text-primary">Product Catalog</span></>
              )}
            </motion.h1>
            <motion.p
              key={`desc-${selectedCategory}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-primary-foreground/60 mt-3 max-w-md"
            >
              {selectedCategory === "scanners"
                ? "Efficient workflows. Scalable productivity. Industry-leading fi Series scanners for every business need."
                : selectedCategory === "printers"
                ? "Color and black-and-white printers and multifunction devices with security, efficiency, and sustainability built in."
                : "Browse printers, scanners, projectors, whiteboards and more from world-class brands."}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
          >
            <Link
              to="/products?brand=ricoh"
              onClick={() => { setSelectedBrand("ricoh"); setSelectedCategory(""); setSelectedSubcategory(""); setSearch(""); }}
              className="inline-flex items-center gap-3 bg-primary/10 border border-primary/30 backdrop-blur-sm rounded-xl px-6 py-3 hover:bg-primary/20 transition-colors"
            >
              <img src={ricohLogo} alt="Ricoh" className="h-8" />
              <span className="text-primary-foreground font-medium text-sm">Shop Ricoh Products</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-surface-warm">
        <div className="container">

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="relative flex-1 min-w-[240px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 rounded-xl border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="">All Categories</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="px-4 py-3 rounded-xl border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="">All Brands</option>
              {brands.map((b) => (
                <option key={b.id} value={b.id}>{b.name}</option>
              ))}
            </select>
            {subcategoriesMap[selectedCategory] && (
              <select
                value={selectedSubcategory}
                onChange={(e) => setSelectedSubcategory(e.target.value)}
                className="px-4 py-3 rounded-xl border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="">All Subcategories</option>
                {subcategoriesMap[selectedCategory].map((s) => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
            )}
          </div>

          <p className="text-sm text-muted-foreground mb-6">{filtered.length} products found</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
      <CTASection />
      <Footer />
    </div>
  );
};

export default ProductsPage;
