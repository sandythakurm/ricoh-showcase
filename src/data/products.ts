import productProjector from "@/assets/product-projector.jpg";
import productPrinter from "@/assets/product-printer.jpg";
import productScanner from "@/assets/product-scanner.jpg";
import productWhiteboard from "@/assets/product-whiteboard.jpg";
import productMeeting from "@/assets/product-meeting.jpg";
import productLaptop from "@/assets/product-laptop.jpg";
import productSublimation from "@/assets/product-sublimation.jpg";
import productMonitor from "@/assets/product-monitor.jpg";
import { scannerProducts } from "./scannerProducts";
import { projectorProducts } from "./projectorProducts";
import { whiteboardProducts } from "./whiteboardProducts";
import { printerProducts } from "./printerProducts";
import { meetingProducts } from "./meetingProducts";
import { monitorProducts } from "./monitorProducts";
import { optomaProjectorProducts } from "./optomaProjectorProducts";
import { epsonScannerProducts } from "./epsonScannerProducts";
import { epsonDocScannerProducts } from "./epsonDocScannerProducts";

export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  brand: string;
  image: string;
  gallery?: string[];
  description: string;
  tagline?: string;
  colorType?: "bw" | "color";
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
  { id: "portable-monitors", name: "Portable Monitors", image: productMonitor },
  { id: "laptops", name: "Laptops", image: productLaptop },
  { id: "sublimation", name: "Sublimation", image: productSublimation },
];

export const brands = [
  { id: "ricoh", name: "Ricoh", isPrimary: true },
  { id: "epson", name: "Epson" },
  { id: "optoma", name: "Optoma" },
  { id: "logitech", name: "Logitech" },
  { id: "chromaluxe", name: "ChromaLuxe" },
  { id: "iq", name: "IQ" },
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
  // Smart Meeting products
  ...meetingProducts,
  // Portable Monitor products
  ...monitorProducts,
  // Optoma Projector products
  ...optomaProjectorProducts,
  // Epson Photo & Graphic Scanners
  ...epsonScannerProducts,
  // Epson Document Scanners
  ...epsonDocScannerProducts,
];

export const getProductsByCategory = (categoryId: string) =>
  products.filter((p) => p.category === categoryId);

export const getProductsByBrand = (brandId: string) =>
  products.filter((p) => p.brand === brandId);

const featuredIds = [
  "fi-8170",         // Scanner
  "im-370",          // Printer B&W
  "im-c300",         // Printer Colour
  "im-430fse",       // Multi-function Printer
  "pj-wul5a50",      // Projector
  "a7510-whiteboard", // Interactive Board
  "pm-150",          // Portable Monitor
  "meeting-360",     // Smart Meeting
];

export const getFeaturedProducts = () =>
  featuredIds
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is Product => !!p);

export const getRicohProducts = () =>
  products.filter((p) => p.brand === "ricoh");

export const getProductById = (id: string) =>
  products.find((p) => p.id === id);
