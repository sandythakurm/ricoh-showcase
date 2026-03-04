import imgES50 from "@/assets/scanners/epson-es50.jpg";
import imgES60W from "@/assets/scanners/epson-es60w.jpg";
import imgES65WR from "@/assets/scanners/epson-es65wr.jpg";
import imgES200 from "@/assets/scanners/epson-es200.jpg";
import imgESC220 from "@/assets/scanners/epson-esc220.jpg";
import imgESC380W from "@/assets/scanners/epson-esc380w.jpg";
import imgESC320W from "@/assets/scanners/epson-esc320w.jpg";
import imgES300WR from "@/assets/scanners/epson-es300wr.jpg";
import imgES400II from "@/assets/scanners/epson-es400ii.jpg";
import imgES580W from "@/assets/scanners/epson-es580w.jpg";
import imgES500WII from "@/assets/scanners/epson-es500wii.jpg";
import imgES865 from "@/assets/scanners/epson-es865.jpg";
import type { Product } from "./products";

export const epsonDocScannerProducts: Product[] = [
  // ── Portable Scanners ───────────────────────────────
  {
    id: "epson-es50",
    name: "Epson WorkForce ES-50",
    category: "scanners",
    subcategory: "Document Scanner",
    brand: "epson",
    image: imgES50,
    tagline: "Ultra-portable single-sheet-fed document scanner",
    description:
      "Lightweight portable document scanner with 600 dpi resolution, 10 ppm scan speed, USB connectivity, and TWAIN driver support. Weighs under 1 lb for true on-the-go scanning.",
    overview:
      "The Epson WorkForce ES-50 is an ultra-portable single-sheet-fed scanner designed for professionals on the move. At under 1 lb, it slips easily into a laptop bag. With 600 dpi optical resolution and 10 ppm scan speed, it handles receipts, business cards, contracts, and documents up to 8.5\" x 72\" with ease. USB-powered with no AC adapter needed — just plug into your laptop and scan. TWAIN driver support ensures compatibility with virtually any scanning software.",
    highlights: [
      { title: "Ultra-Portable Design", text: "Weighing under 1 lb, the ES-50 is one of the lightest scanners available. USB-powered with no AC adapter needed — perfect for mobile professionals.", image: imgES50 },
      { title: "Versatile Document Handling", text: "Scans documents, receipts, business cards, photos, and even extra-long documents up to 72 inches. 600 dpi resolution captures every detail.", image: imgES50 },
    ],
    features: [
      "600 dpi Optical Resolution",
      "10 ppm Simplex Scan Speed",
      "Single-Sheet Feed",
      "USB-Powered — No AC Adapter",
      "Under 1 lb Portable Design",
      "Scans Up to 8.5\" x 72\"",
      "TWAIN Driver Support",
      "Epson ScanSmart Software",
      "Business Card Scanning",
      "Windows & macOS Compatible",
    ],
    specs: {
      "Scanner Type": "Portable, Single-Sheet Feed",
      "Scan Speed": "10 ppm (simplex)",
      "Optical Resolution": "600 dpi",
      Connectivity: "USB",
      "TWAIN Support": "Yes",
      "Max Scan Size": "8.5\" x 72\"",
    },
    specsGrouped: {
      Scanning: {
        "Scanner Type": "Portable, Single-Sheet Feed",
        "Scan Speed": "10 ppm (simplex)",
        "Optical Resolution": "600 dpi",
        "Max Scan Size": "8.5\" x 72\"",
        "Colour Depth": "48-bit input / 24-bit output",
      },
      Connectivity: { Interface: "USB (USB-powered)" },
      Software: { Included: "Epson ScanSmart", "Driver Support": "TWAIN, ISIS" },
    },
  },
  {
    id: "epson-es60w",
    name: "Epson WorkForce ES-60W",
    category: "scanners",
    subcategory: "Document Scanner",
    brand: "epson",
    image: imgES60W,
    tagline: "Wireless portable document scanner with battery power",
    description:
      "Wireless portable document scanner with 600 dpi resolution, 15 ppm scan speed, USB and Wi-Fi connectivity, TWAIN driver, and rechargeable battery for truly untethered mobile scanning.",
    overview:
      "The Epson WorkForce ES-60W adds wireless freedom and battery power to portable scanning. Scan wirelessly to your computer, tablet, or smartphone via Wi-Fi, or connect via USB. The built-in rechargeable lithium-ion battery provides up to 300 scans per charge. At 15 ppm, it's 50% faster than the ES-50, making it ideal for field workers, sales teams, and mobile professionals who need to digitise documents anywhere.",
    highlights: [
      { title: "Wireless & Battery-Powered", text: "Built-in Wi-Fi and rechargeable battery provide up to 300 scans per charge. Scan wirelessly to computers, tablets, and smartphones without cables.", image: imgES60W },
      { title: "Fast Portable Scanning", text: "15 ppm scan speed with 600 dpi resolution. Handles receipts, business cards, contracts, and documents up to 72 inches long.", image: imgES60W },
    ],
    features: [
      "600 dpi Optical Resolution",
      "15 ppm Simplex Scan Speed",
      "Wi-Fi & USB Connectivity",
      "Rechargeable Li-ion Battery",
      "Up to 300 Scans Per Charge",
      "Single-Sheet Feed",
      "Scans Up to 8.5\" x 72\"",
      "TWAIN Driver Support",
      "Epson ScanSmart Software",
      "Windows, macOS, iOS & Android",
    ],
    specs: {
      "Scanner Type": "Portable, Wireless, Single-Sheet Feed",
      "Scan Speed": "15 ppm (simplex)",
      "Optical Resolution": "600 dpi",
      Connectivity: "USB, Wi-Fi",
      Battery: "Rechargeable Li-ion (300 scans/charge)",
      "TWAIN Support": "Yes",
    },
    specsGrouped: {
      Scanning: {
        "Scanner Type": "Portable, Wireless, Single-Sheet Feed",
        "Scan Speed": "15 ppm (simplex)",
        "Optical Resolution": "600 dpi",
        "Max Scan Size": "8.5\" x 72\"",
      },
      Connectivity: { USB: "USB", "Wi-Fi": "802.11 b/g/n" },
      Power: { Battery: "Rechargeable Li-ion", "Battery Life": "Up to 300 scans per charge" },
      Software: { Included: "Epson ScanSmart", "Driver Support": "TWAIN, ISIS" },
    },
  },
  {
    id: "epson-es65wr",
    name: "Epson WorkForce ES-65WR",
    category: "scanners",
    subcategory: "Document Scanner",
    brand: "epson",
    image: imgES65WR,
    tagline: "Wireless portable scanner — Accounting Edition with receipt management",
    description:
      "Wireless portable document scanner with receipt management software, 600 dpi resolution, 15 ppm speed, USB/Wi-Fi connectivity, and TWAIN driver. Purpose-built for accounting professionals.",
    overview:
      "The Epson WorkForce ES-65WR Accounting Edition combines the portability of the ES-60W with specialised receipt management software. Designed for accountants, bookkeepers, and financial professionals, it includes Neat receipt management software for automatic data extraction, categorisation, and export to accounting platforms. Wireless scanning to computers and mobile devices, with a rechargeable battery for untethered operation.",
    highlights: [
      { title: "Receipt Management Built-In", text: "Includes Neat receipt management software for automatic data extraction, categorisation, and seamless export to QuickBooks, Excel, and other accounting platforms.", image: imgES65WR },
      { title: "Wireless & Portable", text: "Wi-Fi and USB connectivity with rechargeable battery. Scan receipts, invoices, and documents anywhere — perfect for on-site audits and field accounting.", image: imgES65WR },
    ],
    features: [
      "600 dpi Optical Resolution",
      "15 ppm Simplex Scan Speed",
      "Wi-Fi & USB Connectivity",
      "Neat Receipt Management Software",
      "Rechargeable Li-ion Battery",
      "Auto Data Extraction & Categorisation",
      "Export to QuickBooks & Excel",
      "TWAIN Driver Support",
      "Windows & macOS Compatible",
    ],
    specs: {
      "Scanner Type": "Portable, Wireless, Accounting Edition",
      "Scan Speed": "15 ppm (simplex)",
      "Optical Resolution": "600 dpi",
      Connectivity: "USB, Wi-Fi",
      Battery: "Rechargeable Li-ion",
      "Receipt Software": "Neat",
    },
    specsGrouped: {
      Scanning: {
        "Scanner Type": "Portable, Wireless, Single-Sheet Feed",
        "Scan Speed": "15 ppm (simplex)",
        "Optical Resolution": "600 dpi",
      },
      Connectivity: { USB: "USB", "Wi-Fi": "802.11 b/g/n" },
      Power: { Battery: "Rechargeable Li-ion" },
      Software: { Included: "Epson ScanSmart, Neat Receipt Management", "Driver Support": "TWAIN" },
    },
  },
  {
    id: "epson-es200",
    name: "Epson WorkForce ES-200",
    category: "scanners",
    subcategory: "Document Scanner",
    brand: "epson",
    image: imgES200,
    tagline: "Portable duplex document scanner with ADF",
    description:
      "Portable duplex document scanner with auto document feeder, 600 dpi resolution, USB connectivity, and compact design for professionals who need duplex scanning on the go.",
    overview:
      "The Epson WorkForce ES-200 brings duplex scanning and an auto document feeder to a portable form factor. Unlike single-sheet portable scanners, the ES-200 can batch scan multi-page documents with automatic two-sided scanning. Its compact design and USB power make it easy to carry, while the ADF handles stacks of documents without manual feeding. Ideal for professionals who need to scan contracts, multi-page reports, and double-sided documents in the field.",
    highlights: [
      { title: "Portable Duplex Scanning", text: "Automatic duplex scanning in a portable form factor. Scan both sides of documents in a single pass without flipping pages manually.", image: imgES200 },
      { title: "Auto Document Feeder", text: "Built-in ADF handles multi-page documents automatically, making it easy to digitise contracts, reports, and invoices on the go.", image: imgES200 },
    ],
    features: [
      "600 dpi Optical Resolution",
      "Duplex (Two-Sided) Scanning",
      "Auto Document Feeder",
      "USB-Powered Portable Design",
      "Epson ScanSmart Software",
      "TWAIN Driver Support",
      "Windows & macOS Compatible",
    ],
    specs: {
      "Scanner Type": "Portable, Duplex, ADF",
      "Optical Resolution": "600 dpi",
      Connectivity: "USB",
    },
    specsGrouped: {
      Scanning: {
        "Scanner Type": "Portable, Duplex with ADF",
        "Optical Resolution": "600 dpi",
        Duplex: "Automatic two-sided scanning",
      },
      Connectivity: { Interface: "USB" },
      Software: { Included: "Epson ScanSmart", "Driver Support": "TWAIN" },
    },
  },

  // ── Compact Desktop Scanners ────────────────────────
  {
    id: "epson-esc220",
    name: "Epson WorkForce ES-C220",
    category: "scanners",
    subcategory: "Document Scanner",
    brand: "epson",
    image: imgESC220,
    isNew: true,
    tagline: "Compact desktop scanner with 20-page ADF",
    description:
      "Compact desktop document scanner with 30 ppm/60 ipm duplex speed, 20-page ADF, 600 dpi resolution, USB connectivity, and TWAIN driver. Space-saving design for home offices.",
    overview:
      "The Epson WorkForce ES-C220 delivers desktop scanning performance in a remarkably compact footprint. At 30 ppm / 60 ipm with duplex scanning, it handles everyday office scanning tasks with ease. The 20-page ADF accommodates small batches of documents, receipts, and business cards. USB connectivity and TWAIN driver support ensure broad compatibility, while Epson ScanSmart software simplifies scan-to-cloud and document management workflows.",
    highlights: [
      { title: "Compact Desktop Design", text: "Space-saving compact form factor fits easily on any desk. 20-page ADF handles daily scanning needs without taking up valuable workspace.", image: imgESC220 },
      { title: "Fast Duplex Scanning", text: "30 ppm / 60 ipm duplex scanning speed makes quick work of multi-page documents. TWAIN driver ensures compatibility with your favourite software.", image: imgESC220 },
    ],
    features: [
      "600 dpi Optical Resolution",
      "30 ppm / 60 ipm Duplex Speed",
      "20-Page ADF",
      "USB Connectivity",
      "TWAIN Driver Support",
      "Epson ScanSmart Software",
      "Compact Desktop Form Factor",
      "Windows & macOS Compatible",
    ],
    specs: {
      "Scanner Type": "Compact Desktop, Duplex, ADF",
      "Scan Speed": "30 ppm / 60 ipm",
      "Optical Resolution": "600 dpi",
      "ADF Capacity": "20 sheets",
      Connectivity: "USB",
      "TWAIN Support": "Yes",
    },
    specsGrouped: {
      Scanning: {
        "Scanner Type": "Compact Desktop, Duplex with ADF",
        "Scan Speed": "30 ppm / 60 ipm",
        "Optical Resolution": "600 dpi",
        "ADF Capacity": "20 sheets",
      },
      Connectivity: { Interface: "USB" },
      Software: { Included: "Epson ScanSmart", "Driver Support": "TWAIN" },
    },
  },
  {
    id: "epson-esc320w",
    name: "Epson WorkForce ES-C320W",
    category: "scanners",
    subcategory: "Document Scanner",
    brand: "epson",
    image: imgESC320W,
    tagline: "Wireless compact desktop scanner with 20-page ADF",
    description:
      "Wireless compact desktop document scanner with 30 ppm/60 ipm duplex speed, 20-page ADF, 600 dpi resolution, USB and Wi-Fi connectivity, and TWAIN driver support.",
    overview:
      "The Epson WorkForce ES-C320W adds wireless freedom to compact desktop scanning. With Wi-Fi and USB connectivity, you can scan from anywhere in your home office. 30 ppm / 60 ipm duplex scanning and a 20-page ADF handle everyday document batches efficiently. Epson ScanSmart software streamlines workflows with scan-to-cloud, email, and folder destinations.",
    highlights: [
      { title: "Wireless Compact Scanning", text: "Wi-Fi and USB connectivity let you scan from anywhere in your office. Compact desktop design takes up minimal space while delivering 30 ppm duplex speed.", image: imgESC320W },
      { title: "Smart Document Management", text: "Epson ScanSmart software simplifies scanning to cloud services, email, and network folders. 20-page ADF handles daily document batches effortlessly.", image: imgESC320W },
    ],
    features: [
      "600 dpi Optical Resolution",
      "30 ppm / 60 ipm Duplex Speed",
      "20-Page ADF",
      "Wi-Fi & USB Connectivity",
      "TWAIN Driver Support",
      "Epson ScanSmart Software",
      "Scan to Cloud & Email",
      "Compact Desktop Form Factor",
      "Windows & macOS Compatible",
    ],
    specs: {
      "Scanner Type": "Compact Desktop, Wireless, Duplex, ADF",
      "Scan Speed": "30 ppm / 60 ipm",
      "Optical Resolution": "600 dpi",
      "ADF Capacity": "20 sheets",
      Connectivity: "USB, Wi-Fi",
    },
    specsGrouped: {
      Scanning: {
        "Scanner Type": "Compact Desktop, Wireless, Duplex with ADF",
        "Scan Speed": "30 ppm / 60 ipm",
        "Optical Resolution": "600 dpi",
        "ADF Capacity": "20 sheets",
      },
      Connectivity: { USB: "USB", "Wi-Fi": "802.11 b/g/n" },
      Software: { Included: "Epson ScanSmart", "Driver Support": "TWAIN" },
    },
  },
  {
    id: "epson-esc380w",
    name: "Epson WorkForce ES-C380W",
    category: "scanners",
    subcategory: "Document Scanner",
    brand: "epson",
    image: imgESC380W,
    isNew: true,
    tagline: "Wireless compact desktop scanner with touchscreen",
    description:
      "Wireless compact desktop document scanner with 2.4\" colour touchscreen, 30 ppm/60 ipm duplex speed, 20-page ADF, 600 dpi resolution, USB and Wi-Fi connectivity, and TWAIN driver.",
    overview:
      "The Epson WorkForce ES-C380W is the premium compact desktop scanner with a 2.4\" colour touchscreen for intuitive PC-less operation. Scan directly to cloud services, email, or network folders from the touchscreen without a computer. 30 ppm / 60 ipm duplex scanning with Wi-Fi and USB connectivity makes it the most versatile compact scanner in the lineup.",
    highlights: [
      { title: "2.4\" Colour Touchscreen", text: "Intuitive touchscreen enables PC-less scanning directly to cloud services, email, and network folders. Set up custom scan profiles for one-touch operation.", image: imgESC380W },
      { title: "Wireless Compact Performance", text: "Wi-Fi and USB connectivity with 30 ppm / 60 ipm duplex speed in a space-saving design. 20-page ADF handles daily scanning needs.", image: imgESC380W },
    ],
    features: [
      "600 dpi Optical Resolution",
      "30 ppm / 60 ipm Duplex Speed",
      "2.4\" Colour Touchscreen",
      "20-Page ADF",
      "Wi-Fi & USB Connectivity",
      "PC-Less Scanning",
      "Scan to Cloud, Email & Folders",
      "TWAIN Driver Support",
      "Epson ScanSmart Software",
      "Compact Desktop Form Factor",
    ],
    specs: {
      "Scanner Type": "Compact Desktop, Wireless, Touchscreen, Duplex, ADF",
      "Scan Speed": "30 ppm / 60 ipm",
      "Optical Resolution": "600 dpi",
      "ADF Capacity": "20 sheets",
      Display: "2.4\" Colour Touchscreen",
      Connectivity: "USB, Wi-Fi",
    },
    specsGrouped: {
      Scanning: {
        "Scanner Type": "Compact Desktop, Wireless, Duplex with ADF",
        "Scan Speed": "30 ppm / 60 ipm",
        "Optical Resolution": "600 dpi",
        "ADF Capacity": "20 sheets",
      },
      Display: { Touchscreen: "2.4\" Colour LCD" },
      Connectivity: { USB: "USB", "Wi-Fi": "802.11 b/g/n" },
      Software: { Included: "Epson ScanSmart", "Driver Support": "TWAIN", "PC-Less": "Scan to cloud, email, folders" },
    },
  },

  // ── Desktop Scanners ────────────────────────────────
  {
    id: "epson-es300wr",
    name: "Epson WorkForce ES-300WR",
    category: "scanners",
    subcategory: "Document Scanner",
    brand: "epson",
    image: imgES300WR,
    tagline: "Wireless duplex scanner — Accounting Edition",
    description:
      "Wireless duplex document scanner with receipt management software, designed for accounting professionals. Features Wi-Fi, USB, and ADF for efficient receipt and document digitisation.",
    overview:
      "The Epson WorkForce ES-300WR Accounting Edition is purpose-built for financial professionals. It combines wireless duplex scanning with Neat receipt management software for automatic data extraction and categorisation. Scan receipts, invoices, and financial documents wirelessly, then export directly to QuickBooks, Excel, and other accounting platforms. The ADF handles batch scanning for efficient end-of-day processing.",
    highlights: [
      { title: "Accounting-Ready Workflow", text: "Neat receipt management software automatically extracts data from receipts and invoices, categorises expenses, and exports to QuickBooks and Excel.", image: imgES300WR },
      { title: "Wireless Duplex Scanning", text: "Wi-Fi and USB connectivity with automatic two-sided scanning. ADF enables batch processing of receipts and multi-page financial documents.", image: imgES300WR },
    ],
    features: [
      "600 dpi Optical Resolution",
      "Duplex Scanning",
      "Wi-Fi & USB Connectivity",
      "Auto Document Feeder",
      "Neat Receipt Management Software",
      "Export to QuickBooks & Excel",
      "Auto Data Extraction",
      "TWAIN Driver Support",
      "Windows & macOS Compatible",
    ],
    specs: {
      "Scanner Type": "Desktop, Wireless, Duplex, ADF, Accounting Edition",
      "Optical Resolution": "600 dpi",
      Connectivity: "USB, Wi-Fi",
      "Receipt Software": "Neat",
    },
    specsGrouped: {
      Scanning: {
        "Scanner Type": "Desktop, Wireless, Duplex with ADF",
        "Optical Resolution": "600 dpi",
        Duplex: "Automatic two-sided scanning",
      },
      Connectivity: { USB: "USB", "Wi-Fi": "802.11 b/g/n" },
      Software: { Included: "Epson ScanSmart, Neat Receipt Management", "Driver Support": "TWAIN" },
    },
  },
  {
    id: "epson-es400ii",
    name: "Epson WorkForce ES-400 II",
    category: "scanners",
    subcategory: "Document Scanner",
    brand: "epson",
    image: imgES400II,
    tagline: "Fast duplex desktop scanner with 50-page ADF",
    description:
      "Desktop duplex document scanner with 35 ppm/70 ipm speed, 50-page ADF, 600 dpi resolution, USB connectivity, and TWAIN driver. Reliable everyday scanning for busy offices.",
    overview:
      "The Epson WorkForce ES-400 II delivers fast, reliable desktop scanning with 35 ppm / 70 ipm duplex speed and a generous 50-page ADF. It handles mixed-size documents, business cards, receipts, and ID cards with ease. USB connectivity and TWAIN driver support ensure broad compatibility, while Epson ScanSmart software automates scan-to-cloud and document management workflows.",
    highlights: [
      { title: "Fast 35 ppm Duplex Scanning", text: "35 ppm / 70 ipm duplex speed handles high-volume scanning tasks quickly. 50-page ADF minimises reloading for batch document processing.", image: imgES400II },
      { title: "Versatile Document Handling", text: "Scans mixed-size documents, business cards, receipts, ID cards, and more. Epson ScanSmart software streamlines scanning to cloud, email, and folders.", image: imgES400II },
    ],
    features: [
      "600 dpi Optical Resolution",
      "35 ppm / 70 ipm Duplex Speed",
      "50-Page ADF",
      "USB Connectivity",
      "TWAIN Driver Support",
      "Mixed Document Handling",
      "Epson ScanSmart Software",
      "Scan to Cloud & Email",
      "Windows & macOS Compatible",
    ],
    specs: {
      "Scanner Type": "Desktop, Duplex, ADF",
      "Scan Speed": "35 ppm / 70 ipm",
      "Optical Resolution": "600 dpi",
      "ADF Capacity": "50 sheets",
      Connectivity: "USB",
      "TWAIN Support": "Yes",
    },
    specsGrouped: {
      Scanning: {
        "Scanner Type": "Desktop, Duplex with ADF",
        "Scan Speed": "35 ppm / 70 ipm",
        "Optical Resolution": "600 dpi",
        "ADF Capacity": "50 sheets",
      },
      Connectivity: { Interface: "USB" },
      Software: { Included: "Epson ScanSmart", "Driver Support": "TWAIN" },
    },
  },
  {
    id: "epson-es500wii",
    name: "Epson WorkForce ES-500W II",
    category: "scanners",
    subcategory: "Document Scanner",
    brand: "epson",
    image: imgES500WII,
    tagline: "Wireless duplex desktop scanner with 50-page ADF",
    description:
      "Wireless duplex desktop document scanner with 35 ppm/70 ipm speed, 50-page ADF, 600 dpi resolution, USB and Wi-Fi connectivity, and TWAIN driver support.",
    overview:
      "The Epson WorkForce ES-500W II adds wireless freedom to high-performance desktop scanning. With 35 ppm / 70 ipm duplex speed, a 50-page ADF, and both Wi-Fi and USB connectivity, it handles demanding scanning workloads without cables. Scan wirelessly from anywhere in your office to cloud services, email, or network folders using Epson ScanSmart software.",
    highlights: [
      { title: "Wireless High-Speed Scanning", text: "35 ppm / 70 ipm duplex speed with Wi-Fi connectivity. Scan wirelessly from anywhere in your office without USB cables.", image: imgES500WII },
      { title: "50-Page ADF & Smart Software", text: "50-page ADF handles large document batches. Epson ScanSmart streamlines workflows with scan-to-cloud, email, and customisable destinations.", image: imgES500WII },
    ],
    features: [
      "600 dpi Optical Resolution",
      "35 ppm / 70 ipm Duplex Speed",
      "50-Page ADF",
      "Wi-Fi & USB Connectivity",
      "TWAIN Driver Support",
      "Epson ScanSmart Software",
      "Scan to Cloud & Email",
      "Mixed Document Handling",
      "Windows & macOS Compatible",
    ],
    specs: {
      "Scanner Type": "Desktop, Wireless, Duplex, ADF",
      "Scan Speed": "35 ppm / 70 ipm",
      "Optical Resolution": "600 dpi",
      "ADF Capacity": "50 sheets",
      Connectivity: "USB, Wi-Fi",
    },
    specsGrouped: {
      Scanning: {
        "Scanner Type": "Desktop, Wireless, Duplex with ADF",
        "Scan Speed": "35 ppm / 70 ipm",
        "Optical Resolution": "600 dpi",
        "ADF Capacity": "50 sheets",
      },
      Connectivity: { USB: "USB", "Wi-Fi": "802.11 b/g/n" },
      Software: { Included: "Epson ScanSmart", "Driver Support": "TWAIN" },
    },
    isBestSeller: true,
  },
  {
    id: "epson-es580w",
    name: "Epson WorkForce ES-580W",
    category: "scanners",
    subcategory: "Document Scanner",
    brand: "epson",
    image: imgES580W,
    isBestSeller: true,
    tagline: "Wireless duplex scanner with touchscreen & 100-page ADF",
    description:
      "Wireless duplex desktop document scanner with 4.3\" colour touchscreen, 35 ppm/70 ipm speed, 100-page ADF, 600 dpi resolution, USB and Wi-Fi, and TWAIN driver support.",
    overview:
      "The Epson WorkForce ES-580W is the flagship home/office document scanner featuring a 4.3\" colour touchscreen for intuitive PC-less operation. With 35 ppm / 70 ipm duplex speed and a generous 100-page ADF, it handles large scanning jobs without constant reloading. The touchscreen enables scanning directly to cloud services, email, or network folders without a computer. Wi-Fi and USB connectivity provide maximum flexibility.",
    highlights: [
      { title: "4.3\" Colour Touchscreen", text: "Large, intuitive touchscreen enables PC-less scanning directly to cloud services, email, and network folders. Create custom profiles for one-touch operation.", image: imgES580W },
      { title: "100-Page ADF & Fast Speed", text: "100-page ADF handles large document batches at 35 ppm / 70 ipm duplex speed. Minimises reloading for maximum productivity.", image: imgES580W },
    ],
    features: [
      "600 dpi Optical Resolution",
      "35 ppm / 70 ipm Duplex Speed",
      "4.3\" Colour Touchscreen",
      "100-Page ADF",
      "Wi-Fi & USB Connectivity",
      "PC-Less Scanning",
      "Scan to Cloud, Email & Folders",
      "TWAIN Driver Support",
      "Epson ScanSmart Software",
      "Custom Scan Profiles",
      "Windows & macOS Compatible",
    ],
    specs: {
      "Scanner Type": "Desktop, Wireless, Touchscreen, Duplex, ADF",
      "Scan Speed": "35 ppm / 70 ipm",
      "Optical Resolution": "600 dpi",
      "ADF Capacity": "100 sheets",
      Display: "4.3\" Colour Touchscreen",
      Connectivity: "USB, Wi-Fi",
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
      Software: { Included: "Epson ScanSmart", "Driver Support": "TWAIN", "PC-Less": "Scan to cloud, email, folders" },
    },
  },

  // ── High-Speed Desktop Scanner ──────────────────────
  {
    id: "epson-es865",
    name: "Epson ES-865",
    category: "scanners",
    subcategory: "Document Scanner",
    brand: "epson",
    image: imgES865,
    tagline: "High-speed departmental scanner with 100-page ADF",
    description:
      "High-speed desktop document scanner with 65 ppm/130 ipm duplex speed, 100-page ADF, 600 dpi resolution, colour LCD display, USB connectivity, and TWAIN driver for departmental workloads.",
    overview:
      "The Epson ES-865 is a high-speed departmental scanner designed for heavy-duty document processing. With 65 ppm / 130 ipm duplex speed and a 100-page ADF, it powers through large scanning workloads with ease. The colour LCD display provides scan status and profile selection. Built for shared departmental use, it handles mixed-size documents, long pages, and continuous batch scanning with reliable paper handling.",
    highlights: [
      { title: "Blazing 65 ppm Speed", text: "65 ppm / 130 ipm duplex speed handles departmental-level scanning workloads. Processes thousands of pages per day with reliable, continuous operation.", image: imgES865 },
      { title: "100-Page ADF & LCD Display", text: "100-page ADF minimises reloading for large batch jobs. Colour LCD display shows scan status and enables quick profile selection.", image: imgES865 },
    ],
    features: [
      "600 dpi Optical Resolution",
      "65 ppm / 130 ipm Duplex Speed",
      "100-Page ADF",
      "Colour LCD Display",
      "USB Connectivity",
      "TWAIN Driver Support",
      "Mixed Document Handling",
      "Long Page Scanning",
      "Epson ScanSmart Software",
      "Windows & macOS Compatible",
    ],
    specs: {
      "Scanner Type": "Desktop, High-Speed, Duplex, ADF",
      "Scan Speed": "65 ppm / 130 ipm",
      "Optical Resolution": "600 dpi",
      "ADF Capacity": "100 sheets",
      Display: "Colour LCD",
      Connectivity: "USB",
      "TWAIN Support": "Yes",
    },
    specsGrouped: {
      Scanning: {
        "Scanner Type": "Desktop, High-Speed, Duplex with ADF",
        "Scan Speed": "65 ppm / 130 ipm",
        "Optical Resolution": "600 dpi",
        "ADF Capacity": "100 sheets",
      },
      Display: { Screen: "Colour LCD" },
      Connectivity: { Interface: "USB" },
      Software: { Included: "Epson ScanSmart", "Driver Support": "TWAIN" },
    },
  },
];
