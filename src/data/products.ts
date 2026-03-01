import productProjector from "@/assets/product-projector.jpg";
import productPrinter from "@/assets/product-printer.jpg";
import productScanner from "@/assets/product-scanner.jpg";
import productWhiteboard from "@/assets/product-whiteboard.jpg";
import productMeeting from "@/assets/product-meeting.jpg";
import productLaptop from "@/assets/product-laptop.jpg";
import productSublimation from "@/assets/product-sublimation.jpg";
import { scannerProducts } from "./scannerProducts";
import { projectorProducts } from "./projectorProducts";
import { whiteboardProducts } from "./whiteboardProducts";
import { printerProducts } from "./printerProducts";

export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  brand: string;
  image: string;
  gallery?: string[];
  description: string;
  overview?: string;
  highlights?: { title: string; text: string; image?: string }[];
  features: string[];
  specs: Record<string, string>;
  specsGrouped?: Record<string, Record<string, string>>;
  warranty?: string;
  isFeatured?: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export const categories = [
  { id: "printers", name: "Printers", image: productPrinter },
  { id: "scanners", name: "Scanners", image: productScanner },
  { id: "projectors", name: "Projectors", image: productProjector },
  { id: "whiteboards", name: "Interactive Whiteboards", image: productWhiteboard },
  { id: "smart-meeting", name: "Smart Meeting", image: productMeeting },
  { id: "laptops", name: "Laptops", image: productLaptop },
  { id: "sublimation", name: "Sublimation", image: productSublimation },
];

export const brands = [
  { id: "ricoh", name: "Ricoh", isPrimary: true },
  { id: "hp", name: "HP" },
  { id: "lenovo", name: "Lenovo" },
  { id: "logitech", name: "Logitech" },
  { id: "chromaluxe", name: "ChromaLuxe" },
  { id: "iq", name: "IQ" },
  { id: "epson", name: "Epson" },
  { id: "sawgrass", name: "Sawgrass" },
  { id: "spc", name: "Swiss Performance Chemicals" },
];

export const products: Product[] = [
  // Projector products
  ...projectorProducts,
  // Printer products (A4)
  ...printerProducts,
  // Scanner products
  ...scannerProducts,
  // Whiteboard products
  ...whiteboardProducts,
  {
    id: "thinkpad-x1-carbon",
    name: "ThinkPad X1 Carbon Gen 12",
    category: "laptops",
    brand: "lenovo",
    image: productLaptop,
    description: "Ultra-lightweight business laptop with Intel Core Ultra processors and stunning 14\" display.",
    features: ["Intel Core Ultra", "14\" 2.8K OLED", "Under 1.1kg", "All-Day Battery"],
    specs: { "Processor": "Intel Core Ultra 7", "Display": "14\" 2.8K OLED", "Weight": "1.09 kg", "Battery": "Up to 15 hours" },
  },
  {
    id: "legion-9i",
    name: "Legion 9i Gen 9",
    category: "laptops",
    brand: "lenovo",
    image: productLaptop,
    description: "Premium gaming laptop with liquid cooling and top-tier performance.",
    features: ["Intel Core i9", "RTX 4090", "Liquid Cooling", "Mini LED Display"],
    specs: { "Processor": "Intel Core i9-14900HX", "GPU": "RTX 4090", "Display": "16\" Mini LED" },
  },
];

export const getProductsByCategory = (categoryId: string) =>
  products.filter((p) => p.category === categoryId);

export const getProductsByBrand = (brandId: string) =>
  products.filter((p) => p.brand === brandId);

export const getFeaturedProducts = () =>
  products.filter((p) => p.isFeatured);

export const getRicohProducts = () =>
  products.filter((p) => p.brand === "ricoh");

export const getProductById = (id: string) =>
  products.find((p) => p.id === id);
