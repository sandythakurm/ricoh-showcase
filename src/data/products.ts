import productProjector from "@/assets/product-projector.jpg";
import productScanner from "@/assets/product-scanner.jpg";
import productWhiteboard from "@/assets/product-whiteboard.jpg";
import productMeeting from "@/assets/product-meeting.jpg";
import productMonitor from "@/assets/product-monitor.jpg";
import { scannerProducts } from "./scannerProducts";
import { projectorProducts } from "./projectorProducts";
import { whiteboardProducts } from "./whiteboardProducts";
import { meetingProducts } from "./meetingProducts";
import { monitorProducts } from "./monitorProducts";
import { optomaProjectorProducts } from "./optomaProjectorProducts";
import { epsonScannerProducts } from "./epsonScannerProducts";
import { epsonDocScannerProducts } from "./epsonDocScannerProducts";
import { epsonReceiptScannerProducts } from "./epsonReceiptScannerProducts";

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
  { id: "scanners", name: "Scanners", image: productScanner },
  { id: "projectors", name: "Projectors", image: productProjector },
  { id: "whiteboards", name: "Interactive Whiteboards", image: productWhiteboard },
  { id: "smart-meeting", name: "Cameras", image: productMeeting },
  { id: "portable-monitors", name: "Portable Monitors", image: productMonitor },
];

export const brands = [
  { id: "ricoh", name: "Ricoh", isPrimary: true },
  { id: "epson", name: "Epson" },
  { id: "optoma", name: "Optoma" },
];

export const products: Product[] = [
  ...projectorProducts,
  ...scannerProducts,
  ...whiteboardProducts,
  ...meetingProducts,
  ...monitorProducts,
  ...optomaProjectorProducts,
  ...epsonScannerProducts,
  ...epsonDocScannerProducts,
  ...epsonReceiptScannerProducts,
];

export const getProductsByCategory = (categoryId: string) =>
  products.filter((p) => p.category === categoryId);

export const getProductsByBrand = (brandId: string) =>
  products.filter((p) => p.brand === brandId);

const featuredIds = [
  "fi-8170",
  "fi-8290",
  "pj-wul5a50",
  "optoma-zu920t",
  "a7510-whiteboard",
  "pm-150",
  "meeting-360",
  "epson-v850",
];

export const getFeaturedProducts = () =>
  featuredIds
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is Product => !!p);

export const getRicohProducts = () =>
  products.filter((p) => p.brand === "ricoh");

export const getProductById = (id: string) =>
  products.find((p) => p.id === id);
