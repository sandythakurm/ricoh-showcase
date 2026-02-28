import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, categories, brands } from "@/data/products";
import { Search } from "lucide-react";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "");
  const [selectedBrand, setSelectedBrand] = useState(searchParams.get("brand") || "");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase());
      const matchCategory = !selectedCategory || p.category === selectedCategory;
      const matchBrand = !selectedBrand || p.brand === selectedBrand;
      return matchSearch && matchCategory && matchBrand;
    });
  }, [search, selectedCategory, selectedBrand]);

  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-12 bg-surface-warm">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-heading font-bold mb-8"
          >
            Our <span className="text-primary">Products</span>
          </motion.h1>

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
      <Footer />
    </div>
  );
};

export default ProductsPage;
