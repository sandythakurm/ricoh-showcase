import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";

const ProductCard = ({ product }: { product: Product }) => (
  <Link
    to={`/product/${product.id}`}
    className="group block bg-card border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
  >
    <div className="relative aspect-square bg-secondary/50 p-6 flex items-center justify-center overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
      />
      {product.isNew && (
        <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
          NEW
        </span>
      )}
      {product.isBestSeller && (
        <span className="absolute top-3 right-3 bg-ricoh-dark text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
          Best Seller
        </span>
      )}
    </div>
    <div className="p-5">
      <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">{product.brand}</p>
      <h3 className="font-heading font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
        {product.name}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{product.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
          Request Quote <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  </Link>
);

export default ProductCard;
