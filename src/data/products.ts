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
  // Projector products from projectorProducts.ts
  ...projectorProducts,
  {
    id: "ip-c8500",
    name: "IP C8500 Colour A3 Printer",
    category: "printers",
    brand: "ricoh",
    image: productPrinter,
    description: "High-performance A3 colour printer designed for demanding office environments. Delivers exceptional print quality with fast output speeds.",
    features: ["A3 Colour Printing", "High Speed Output", "Advanced Security", "Mobile Printing", "Energy Efficient", "Large Paper Capacity"],
    specs: { "Print Speed": "65 ppm", "Resolution": "1200 x 1200 dpi", "Paper Size": "Up to A3", "First Print": "3.6 seconds", "Duty Cycle": "300,000 pages/month" },
    isFeatured: true,
    isBestSeller: true,
  },
  {
    id: "im-2500a",
    name: "IM 2500A All-in-One Printer",
    category: "printers",
    brand: "ricoh",
    image: productPrinter,
    description: "Versatile all-in-one printer that combines printing, copying, scanning, and faxing in one compact device.",
    features: ["All-in-One", "Compact Design", "Cloud Integration", "Auto Duplex", "Network Ready", "Touchscreen Panel"],
    specs: { "Print Speed": "25 ppm", "Resolution": "600 x 600 dpi", "Scan Speed": "80 ipm", "Memory": "2 GB RAM" },
    isFeatured: true,
  },
  {
    id: "im-350fse",
    name: "IM 350FSE All-in-One Printer",
    category: "printers",
    brand: "ricoh",
    image: productPrinter,
    description: "Small and powerful all-in-one printer perfect for small offices and workgroups.",
    features: ["Compact All-in-One", "Fast Printing", "Easy Setup", "Low Cost per Page"],
    specs: { "Print Speed": "35 ppm", "Resolution": "600 x 600 dpi", "Paper Capacity": "500 sheets" },
  },
  // Scanner products from scannerProducts.ts
  ...scannerProducts,
  // Whiteboard products from whiteboardProducts.ts
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
