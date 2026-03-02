import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";
import ricohLogo from "@/assets/ricoh-logo.png";

const ColorIcon = ({ type }: { type: "bw" | "color" }) => {
  if (type === "bw") {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" className="shrink-0">
        <circle cx="9" cy="9" r="8" fill="none" stroke="currentColor" strokeWidth="1" className="text-muted-foreground/40" />
        <path d="M9 1 A8 8 0 0 1 9 17 Z" fill="currentColor" className="text-foreground" />
        <path d="M9 1 A8 8 0 0 0 9 17 Z" fill="currentColor" className="text-muted-foreground/30" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" className="shrink-0">
      <circle cx="9" cy="9" r="8" fill="none" stroke="#ccc" strokeWidth="0.5" />
      <path d="M9 1 A8 8 0 0 1 17 9 L9 9 Z" fill="#00AEEF" />
      <path d="M17 9 A8 8 0 0 1 9 17 L9 9 Z" fill="#EC008C" />
      <path d="M9 17 A8 8 0 0 1 1 9 L9 9 Z" fill="#FFF200" />
      <path d="M1 9 A8 8 0 0 1 9 1 L9 9 Z" fill="#231F20" />
    </svg>
  );
};

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
      {product.brand === "ricoh" ? (
        <div className="flex items-center gap-2 mb-1">
          <img src={ricohLogo} alt="Ricoh" className="h-6 shrink-0" />
          {product.colorType && <ColorIcon type={product.colorType} />}
          <h3 className="font-heading font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </div>
      ) : (
        <>
          <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">{product.brand}</p>
          <div className="flex items-center gap-2 mb-1">
            {product.colorType && <ColorIcon type={product.colorType} />}
            <h3 className="font-heading font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
          </div>
        </>
      )}
      {product.tagline && (
        <p className="text-xs text-muted-foreground mb-2">{product.tagline}</p>
      )}
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
