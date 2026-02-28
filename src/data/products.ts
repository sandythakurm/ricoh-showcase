import productProjector from "@/assets/product-projector.jpg";
import productPrinter from "@/assets/product-printer.jpg";
import productScanner from "@/assets/product-scanner.jpg";
import productWhiteboard from "@/assets/product-whiteboard.jpg";
import productMeeting from "@/assets/product-meeting.jpg";
import productLaptop from "@/assets/product-laptop.jpg";
import productSublimation from "@/assets/product-sublimation.jpg";

export interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  image: string;
  description: string;
  features: string[];
  specs: Record<string, string>;
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
  {
    id: "ricoh-wul5a50",
    name: "Ricoh WUL5A50 Business & Classroom Laser Projector",
    category: "projectors",
    brand: "ricoh",
    image: productProjector,
    description: "Higher lumen count of 5,200 lumens allows for users to project in a variety of settings, including brightly-lit meeting rooms. Integrates seamlessly with your preferred smart home system.",
    features: ["5,200 Lumens", "WUXGA Resolution", "Laser Light Source", "20,000 Hour Life", "Smart Home Integration", "HDBaseT Connectivity"],
    specs: { "Brightness": "5,200 lumens", "Resolution": "WUXGA (1920x1200)", "Light Source": "Laser", "Projection Size": "30\" - 300\"", "Connectivity": "HDMI, HDBaseT, USB" },
    isFeatured: true,
    isNew: true,
  },
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
  {
    id: "fi-8950",
    name: "fi-8950 Ricoh Scanner",
    category: "scanners",
    brand: "ricoh",
    image: productScanner,
    description: "Production-level scanner designed for high-volume document scanning with exceptional reliability.",
    features: ["High Volume Scanning", "A3 Support", "Intelligent Feed", "PaperStream Software", "LCD Display"],
    specs: { "Scan Speed": "130 ppm / 260 ipm", "ADF Capacity": "750 sheets", "Resolution": "600 dpi", "Paper Size": "Up to A3" },
    isFeatured: true,
    isBestSeller: true,
  },
  {
    id: "fi-70f",
    name: "fi-70F Ricoh Scanner",
    category: "scanners",
    brand: "ricoh",
    image: productScanner,
    description: "Ultra-compact flatbed scanner ideal for scanning ID cards, passports, and small documents.",
    features: ["Ultra Compact", "ID Card Scanning", "Passport Scanning", "USB Powered"],
    specs: { "Type": "Flatbed", "Resolution": "600 dpi", "Scan Area": "A6", "Interface": "USB 2.0" },
  },
  {
    id: "fi-8270",
    name: "fi-8270 Ricoh Scanner",
    category: "scanners",
    brand: "ricoh",
    image: productScanner,
    description: "Desktop scanner with ADF and flatbed for mixed document scanning.",
    features: ["ADF + Flatbed", "Mixed Batch Scanning", "PaperStream IP", "Automatic Feeding"],
    specs: { "Scan Speed": "70 ppm / 140 ipm", "ADF Capacity": "100 sheets", "Resolution": "600 dpi" },
  },
  {
    id: "a7510-whiteboard",
    name: "A7510 Interactive Whiteboard",
    category: "whiteboards",
    brand: "ricoh",
    image: productWhiteboard,
    description: "75-inch interactive whiteboard for modern meeting rooms and classrooms. Multi-touch capability with built-in collaboration tools.",
    features: ["75\" 4K Display", "Multi-Touch", "Built-in Camera", "Wireless Screen Sharing", "Whiteboard Software"],
    specs: { "Screen Size": "75 inches", "Resolution": "4K UHD", "Touch Points": "20", "Connectivity": "HDMI, USB-C, Wi-Fi" },
    isFeatured: true,
    isNew: true,
  },
  {
    id: "meeting-360",
    name: "RICOH Meeting 360",
    category: "smart-meeting",
    brand: "ricoh",
    image: productMeeting,
    description: "360-degree video conferencing camera that captures everyone in the room. AI-powered speaker tracking and noise cancellation.",
    features: ["360° Video Capture", "AI Speaker Tracking", "Noise Cancellation", "USB-C Plug & Play", "Teams & Zoom Compatible"],
    specs: { "Video": "4K 360°", "Audio": "8 Microphones", "Speaker": "Built-in", "Connectivity": "USB-C" },
    isFeatured: true,
    isNew: true,
  },
  {
    id: "wul5a40st",
    name: "Ricoh WUL5A40ST Short Throw Laser Projector",
    category: "projectors",
    brand: "ricoh",
    image: productProjector,
    description: "Short throw laser projector ideal for small rooms and interactive presentations.",
    features: ["Short Throw", "Laser Light Source", "WUXGA", "Interactive Ready"],
    specs: { "Brightness": "4,000 lumens", "Throw Ratio": "0.46:1", "Resolution": "WUXGA" },
  },
  {
    id: "a6510-whiteboard",
    name: "A6510 Interactive Whiteboard",
    category: "whiteboards",
    brand: "ricoh",
    image: productWhiteboard,
    description: "65-inch interactive display for huddle rooms and small meeting spaces.",
    features: ["65\" Display", "Multi-Touch", "Built-in Speakers", "Android OS"],
    specs: { "Screen Size": "65 inches", "Resolution": "4K UHD", "Touch Points": "20" },
  },
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
