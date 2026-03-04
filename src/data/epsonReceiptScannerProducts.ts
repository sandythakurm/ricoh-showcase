import imgRR60 from "@/assets/scanners/epson-rr60.jpg";
import imgRR70W from "@/assets/scanners/epson-rr70w.jpg";
import imgRR400W from "@/assets/scanners/epson-rr400w.jpg";
import imgRR600W from "@/assets/scanners/epson-rr600w.jpg";
import type { Product } from "./products";

export const epsonReceiptScannerProducts: Product[] = [
  {
    id: "epson-rr60",
    name: "Epson RapidReceipt RR-60",
    category: "scanners",
    subcategory: "Receipt Scanner",
    brand: "epson",
    image: imgRR60,
    tagline: "Mobile receipt and document scanner",
    description:
      "Ultra-portable mobile receipt and document scanner with 600 dpi resolution, 10 ppm scan speed, USB connectivity, and built-in receipt management software.",
    overview:
      "The Epson RapidReceipt RR-60 is an ultra-compact mobile scanner designed for receipts, business cards, and documents. At just 600 dpi and 10 ppm, it delivers sharp scans in seconds. USB-powered with no AC adapter required — simply plug into your laptop and start scanning. Includes RapidReceipt receipt management software for automatic data extraction, categorisation, and export to accounting platforms like QuickBooks and Excel.",
    highlights: [
      { title: "Ultra-Portable Design", text: "Compact and lightweight mobile scanner that fits easily in a laptop bag. USB-powered with no AC adapter needed.", image: imgRR60 },
      { title: "Receipt Management Software", text: "Includes RapidReceipt software for automatic data extraction from receipts, categorisation, and export to QuickBooks, Excel, and other platforms.", image: imgRR60 },
    ],
    features: [
      "600 dpi Optical Resolution",
      "10 ppm Scan Speed",
      "USB Connectivity",
      "RapidReceipt Software Included",
      "Auto Data Extraction",
      "Export to QuickBooks & Excel",
      "Business Card Scanning",
      "Compact Portable Design",
      "USB-Powered — No AC Adapter",
      "Windows & macOS Compatible",
    ],
    specs: {
      "Scanner Type": "Mobile, Single-Sheet Feed",
      "Scan Speed": "10 ppm",
      "Optical Resolution": "600 dpi",
      Connectivity: "USB",
      "Receipt Software": "RapidReceipt",
    },
    specsGrouped: {
      Scanning: {
        "Scanner Type": "Mobile, Single-Sheet Feed",
        "Scan Speed": "10 ppm",
        "Optical Resolution": "600 dpi",
      },
      Connectivity: { Interface: "USB (USB-powered)" },
      Software: { Included: "RapidReceipt", "Export": "QuickBooks, Excel, CSV" },
    },
  },
  {
    id: "epson-rr70w",
    name: "Epson RapidReceipt RR-70W",
    category: "scanners",
    subcategory: "Receipt Scanner",
    brand: "epson",
    image: imgRR70W,
    tagline: "Wireless mobile receipt and document scanner",
    description:
      "Wireless mobile receipt and document scanner with 600 dpi resolution, 15 ppm scan speed, USB and Wi-Fi connectivity, and built-in receipt management software.",
    overview:
      "The Epson RapidReceipt RR-70W adds wireless freedom to mobile receipt scanning. With Wi-Fi and USB connectivity, scan receipts and documents to your computer, tablet, or smartphone. At 15 ppm with 600 dpi resolution, it handles receipts, invoices, business cards, and documents quickly. Includes RapidReceipt software for automatic data extraction and organisation.",
    highlights: [
      { title: "Wireless Mobile Scanning", text: "Wi-Fi and USB connectivity let you scan wirelessly to computers, tablets, and smartphones. Perfect for mobile professionals and field workers.", image: imgRR70W },
      { title: "Smart Receipt Management", text: "RapidReceipt software automatically extracts key data from receipts and organises them for easy export to accounting software.", image: imgRR70W },
    ],
    features: [
      "600 dpi Optical Resolution",
      "15 ppm Scan Speed",
      "Wi-Fi & USB Connectivity",
      "RapidReceipt Software Included",
      "Auto Data Extraction",
      "Scan to Mobile Devices",
      "Export to QuickBooks & Excel",
      "Compact Portable Design",
      "Windows, macOS, iOS & Android",
    ],
    specs: {
      "Scanner Type": "Mobile, Wireless, Single-Sheet Feed",
      "Scan Speed": "15 ppm",
      "Optical Resolution": "600 dpi",
      Connectivity: "USB, Wi-Fi",
      "Receipt Software": "RapidReceipt",
    },
    specsGrouped: {
      Scanning: {
        "Scanner Type": "Mobile, Wireless, Single-Sheet Feed",
        "Scan Speed": "15 ppm",
        "Optical Resolution": "600 dpi",
      },
      Connectivity: { USB: "USB", "Wi-Fi": "802.11 b/g/n" },
      Software: { Included: "RapidReceipt", "Export": "QuickBooks, Excel, CSV" },
    },
  },
  {
    id: "epson-rr400w",
    name: "Epson RapidReceipt RR-400W",
    category: "scanners",
    subcategory: "Receipt Scanner",
    brand: "epson",
    image: imgRR400W,
    isFeatured: true,
    tagline: "Wireless compact desktop receipt and document scanner",
    description:
      "Wireless compact desktop receipt and document scanner with 600 dpi resolution, 30 ppm/60 ipm duplex speed, 20-page ADF, USB and Wi-Fi connectivity, and receipt management software.",
    overview:
      "The Epson RapidReceipt RR-400W is a compact desktop scanner built for efficient receipt and document management. With 30 ppm / 60 ipm duplex scanning and a 20-page ADF, it handles batches of receipts, invoices, and multi-page documents with ease. Wi-Fi and USB connectivity enable flexible placement, while the included RapidReceipt software automatically extracts and categorises data from scanned receipts for seamless export to accounting platforms.",
    highlights: [
      { title: "Fast Duplex Scanning", text: "30 ppm / 60 ipm duplex scanning with 20-page ADF handles batches of receipts and documents quickly. Compact desktop form factor saves space.", image: imgRR400W },
      { title: "Intelligent Receipt Management", text: "RapidReceipt software automatically extracts vendor, date, amount, and category data from receipts. Export directly to QuickBooks, Excel, and more.", image: imgRR400W },
    ],
    features: [
      "600 dpi Optical Resolution",
      "30 ppm / 60 ipm Duplex Speed",
      "20-Page ADF",
      "Wi-Fi & USB Connectivity",
      "RapidReceipt Software Included",
      "Auto Data Extraction & Categorisation",
      "Export to QuickBooks & Excel",
      "Compact Desktop Design",
      "Windows & macOS Compatible",
    ],
    specs: {
      "Scanner Type": "Compact Desktop, Wireless, Duplex, ADF",
      "Scan Speed": "30 ppm / 60 ipm",
      "Optical Resolution": "600 dpi",
      "ADF Capacity": "20 sheets",
      Connectivity: "USB, Wi-Fi",
      "Receipt Software": "RapidReceipt",
    },
    specsGrouped: {
      Scanning: {
        "Scanner Type": "Compact Desktop, Wireless, Duplex with ADF",
        "Scan Speed": "30 ppm / 60 ipm",
        "Optical Resolution": "600 dpi",
        "ADF Capacity": "20 sheets",
      },
      Connectivity: { USB: "USB", "Wi-Fi": "802.11 b/g/n" },
      Software: { Included: "RapidReceipt", "Export": "QuickBooks, Excel, CSV" },
    },
  },
  {
    id: "epson-rr600w",
    name: "Epson RapidReceipt RR-600W",
    category: "scanners",
    subcategory: "Receipt Scanner",
    brand: "epson",
    image: imgRR600W,
    tagline: "Wireless desktop receipt and document scanner with touchscreen",
    description:
      "Wireless desktop receipt and document scanner with 4.3\" colour touchscreen, 600 dpi resolution, 35 ppm/70 ipm duplex speed, 100-page ADF, and receipt management software.",
    overview:
      "The Epson RapidReceipt RR-600W is the flagship receipt scanner featuring a 4.3\" colour touchscreen for intuitive PC-less operation. With 35 ppm / 70 ipm duplex scanning and a generous 100-page ADF, it handles high-volume receipt and document batches effortlessly. Scan directly to cloud services, email, or folders from the touchscreen. RapidReceipt software provides intelligent data extraction and organisation for seamless accounting workflows.",
    highlights: [
      { title: "4.3\" Colour Touchscreen", text: "Intuitive touchscreen enables PC-less scanning directly to cloud services, email, and network folders. Set up custom scan profiles for one-touch operation.", image: imgRR600W },
      { title: "High-Volume Performance", text: "35 ppm / 70 ipm duplex speed with 100-page ADF handles large batches of receipts and documents. Perfect for busy offices and accounting departments.", image: imgRR600W },
    ],
    features: [
      "600 dpi Optical Resolution",
      "35 ppm / 70 ipm Duplex Speed",
      "100-Page ADF",
      "4.3\" Colour Touchscreen",
      "Wi-Fi & USB Connectivity",
      "PC-Less Scanning",
      "RapidReceipt Software Included",
      "Auto Data Extraction & Categorisation",
      "Scan to Cloud, Email & Folders",
      "Export to QuickBooks & Excel",
    ],
    specs: {
      "Scanner Type": "Desktop, Wireless, Touchscreen, Duplex, ADF",
      "Scan Speed": "35 ppm / 70 ipm",
      "Optical Resolution": "600 dpi",
      "ADF Capacity": "100 sheets",
      Display: "4.3\" Colour Touchscreen",
      Connectivity: "USB, Wi-Fi",
      "Receipt Software": "RapidReceipt",
    },
    specsGrouped: {
      Scanning: {
        "Scanner Type": "Desktop, Wireless, Duplex with ADF",
        "Scan Speed": "35 ppm / 70 ipm",
        "Optical Resolution": "600 dpi",
        "ADF Capacity": "100 sheets",
      },
      Display: { Touchscreen: "4.3\" Colour LCD" },
      Connectivity: { USB: "USB", "Wi-Fi": "802.11 b/g/n" },
      Software: { Included: "RapidReceipt", "PC-Less": "Scan to cloud, email, folders", "Export": "QuickBooks, Excel, CSV" },
    },
  },
];
