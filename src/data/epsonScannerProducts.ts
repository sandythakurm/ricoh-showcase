import imgV19II from "@/assets/scanners/epson-v19ii.jpg";
import imgV19IIOpen from "@/assets/scanners/epson-v19ii-open.jpg";
import imgV19IIBook from "@/assets/scanners/epson-v19ii-book.jpg";
import imgV19IIStanding from "@/assets/scanners/epson-v19ii-standing.jpg";
import imgV19IILaptop from "@/assets/scanners/epson-v19ii-laptop.jpg";
import imgV19IIClarity from "@/assets/scanners/epson-v19ii-clarity.jpg";
import imgV19IIRestore from "@/assets/scanners/epson-v19ii-restore.jpg";

import imgV39II from "@/assets/scanners/epson-v39ii.jpg";
import imgV39IIOpen from "@/assets/scanners/epson-v39ii-open.jpg";
import imgV39IIBook from "@/assets/scanners/epson-v39ii-book.jpg";
import imgV39IIStanding from "@/assets/scanners/epson-v39ii-standing.jpg";
import imgV39IILaptop from "@/assets/scanners/epson-v39ii-laptop.jpg";
import imgV39IIClarity from "@/assets/scanners/epson-v39ii-clarity.jpg";
import imgV39IIStitching from "@/assets/scanners/epson-v39ii-stitching.jpg";

import imgFF680W from "@/assets/scanners/epson-ff680w.jpg";

import imgV850 from "@/assets/scanners/epson-v850.jpg";
import imgV850Color from "@/assets/scanners/epson-v850-color.jpg";
import imgV850ICE from "@/assets/scanners/epson-v850-ice.jpg";
import imgV850Holders from "@/assets/scanners/epson-v850-holders.jpg";
import imgV850LED from "@/assets/scanners/epson-v850-led.jpg";

import img13000XL from "@/assets/scanners/epson-13000xl.jpg";
import img13000XLOpen from "@/assets/scanners/epson-13000xl-open.jpg";
import img13000XLMedia from "@/assets/scanners/epson-13000xl-media.jpg";
import img13000XLSide from "@/assets/scanners/epson-13000xl-side.jpg";
import img13000XLLifestyle from "@/assets/scanners/epson-13000xl-lifestyle.jpg";
import img13000XLBed from "@/assets/scanners/epson-13000xl-bed.jpg";
import img13000XLClarity from "@/assets/scanners/epson-13000xl-clarity.jpg";
import img13000XLColor from "@/assets/scanners/epson-13000xl-color.jpg";
import img13000XLFeatures from "@/assets/scanners/epson-13000xl-features.jpg";

import type { Product } from "./products";

export const epsonScannerProducts: Product[] = [
  {
    id: "epson-v19ii",
    name: "Epson Perfection V19 II",
    category: "scanners",
    subcategory: "Photo & Graphic",
    brand: "epson",
    image: imgV19II,
    gallery: [imgV19II, imgV19IIOpen, imgV19IIBook, imgV19IIStanding, imgV19IILaptop],
    tagline: "Affordable, easy-to-use photo scanning for everyday needs",
    description:
      "The affordable, easy-to-use, high-resolution photo scanner for everyday scanning and sharing. 4800 dpi optical resolution with USB-powered portability, built-in kickstand, and Epson ScanSmart software.",
    overview:
      "The Epson Perfection V19 II is the ideal entry-level flatbed scanner for digitising photos, documents, artwork, and illustrations. With 4800 dpi optical resolution, it delivers amazing image clarity and detail — perfect for photo enlargements. One-touch scanning buttons let you scan in fewer steps, while Easy Photo Fix technology restores colour to faded photos with a single click. The high-rise, removable lid accommodates books and photo albums. USB-powered with a 3.1 lb weight and a space-saving built-in kickstand for vertical placement.",
    highlights: [
      {
        title: "Amazing Image Clarity & Detail",
        text: "4800 dpi optical resolution ideal for photo enlargements, artwork, illustrations, documents and more. Capture every detail with precision flatbed scanning.",
        image: imgV19IIClarity,
      },
      {
        title: "One-Touch Scanning",
        text: "Scan in fewer steps with easy-to-use buttons. Epson ScanSmart software provides an intuitive interface for scanning, saving, and sharing.",
        image: imgV19IILaptop,
      },
      {
        title: "Restore Colour to Faded Photos",
        text: "With one click, Easy Photo Fix technology makes it simple to bring old photos back to life. Basic image stitching lets you scan oversized items in sections.",
        image: imgV19IIRestore,
      },
      {
        title: "USB-Powered Portability",
        text: "At just 3.1 lbs with USB power and a space-saving built-in kickstand for vertical placement, the V19 II goes wherever you need it.",
        image: imgV19IIStanding,
      },
    ],
    features: [
      "4800 dpi Optical Resolution",
      "Flatbed Photo & Document Scanner",
      "Easy Photo Fix Colour Restoration",
      "Basic Image Stitching",
      "One-Touch Scanning Buttons",
      "Epson ScanSmart Software",
      "Scan to Cloud Services",
      "USB-Powered — No AC Adapter Needed",
      "Built-in Kickstand for Vertical Placement",
      "High-Rise Removable Lid for Books",
      "Windows & macOS Compatible",
    ],
    specs: {
      "Scanner Type": "Flatbed",
      "Optical Resolution": "4800 dpi",
      "Flatbed Size": '8.5" x 11.7"',
      "Colour Depth": "48-bit input / 24-bit output",
      "Image Sensor": "CIS",
      "Light Source": "LED",
      "Connectivity": "Hi-Speed USB 2.0",
      "Weight": "1.4 kg (3.1 lbs)",
      "OS Support": "Windows, macOS",
    },
    specsGrouped: {
      Scanning: {
        "Scanner Type": "Flatbed",
        "Optical Resolution": "4800 dpi",
        "Flatbed Size": '8.5" x 11.7"',
        "Colour Depth": "48-bit input / 24-bit output",
        "Image Sensor": "CIS",
        "Light Source": "LED",
      },
      Connectivity: {
        Interface: "Hi-Speed USB 2.0 (USB-powered)",
      },
      Physical: {
        Weight: "1.4 kg (3.1 lbs)",
        "Special Features": "Built-in kickstand, removable high-rise lid",
      },
      Software: {
        Included: "Epson ScanSmart, Easy Photo Fix",
        "Cloud Support": "Scan to Cloud services",
      },
    },
    isNew: true,
  },
  {
    id: "epson-v39ii",
    name: "Epson Perfection V39 II",
    category: "scanners",
    subcategory: "Photo & Graphic",
    brand: "epson",
    image: imgV39II,
    gallery: [imgV39II, imgV39IIOpen, imgV39IIBook, imgV39IIStanding, imgV39IILaptop],
    tagline: "High-resolution scanner for restoring, archiving, and sharing",
    description:
      "The easy-to-use, high-resolution scanner for restoring, archiving, and sharing photos and documents. 4800 dpi optical resolution with advanced image stitching and Epson ScanSmart software.",
    overview:
      "The Epson Perfection V39 II builds on the V19 II with advanced image stitching for oversized originals and enhanced scanning capabilities. With 4800 dpi optical resolution, it captures amazing clarity and detail for photo enlargements, artwork, illustrations, and documents. Epson ScanSmart software boosts scanning capability by stitching oversized images together and sending scans to cloud storage. One-touch scanning buttons and Easy Photo Fix colour restoration make it easy for anyone to use.",
    highlights: [
      {
        title: "Amazing Image Clarity & Detail",
        text: "4800 dpi optical resolution ideal for photo enlargements, artwork, illustrations, documents and more. Capture sharp, vibrant scans every time.",
        image: imgV39IIClarity,
      },
      {
        title: "Advanced Image Stitching",
        text: "Stitch oversized images together seamlessly with Epson ScanSmart software. Send scans directly to cloud storage services for easy access and sharing.",
        image: imgV39IIStitching,
      },
      {
        title: "Restore Colour to Faded Photos",
        text: "Easy Photo Fix technology restores colour and detail to old, faded photos with just one click — bringing memories back to life effortlessly.",
        image: imgV39IILaptop,
      },
      {
        title: "Scan Books & Photo Albums",
        text: "High-rise, removable lid accommodates books, photo albums, and other bound materials for versatile scanning beyond standard documents.",
        image: imgV39IIBook,
      },
    ],
    features: [
      "4800 dpi Optical Resolution",
      "Flatbed Photo & Document Scanner",
      "Advanced Image Stitching",
      "Easy Photo Fix Colour Restoration",
      "One-Touch Scanning Buttons",
      "Epson ScanSmart Software",
      "Scan to Cloud Services",
      "USB-Powered Portability",
      "High-Rise Removable Lid for Books",
      "Windows & macOS Compatible",
    ],
    specs: {
      "Scanner Type": "Flatbed",
      "Optical Resolution": "4800 dpi",
      "Flatbed Size": '8.5" x 11.7"',
      "Colour Depth": "48-bit input / 24-bit output",
      "Image Sensor": "CIS",
      "Light Source": "LED",
      "Connectivity": "Hi-Speed USB 2.0",
      "OS Support": "Windows, macOS",
    },
    specsGrouped: {
      Scanning: {
        "Scanner Type": "Flatbed",
        "Optical Resolution": "4800 dpi",
        "Flatbed Size": '8.5" x 11.7"',
        "Colour Depth": "48-bit input / 24-bit output",
        "Image Sensor": "CIS",
        "Light Source": "LED",
      },
      Connectivity: {
        Interface: "Hi-Speed USB 2.0 (USB-powered)",
      },
      Software: {
        Included: "Epson ScanSmart, Easy Photo Fix",
        "Cloud Support": "Scan to Cloud services",
        "Image Stitching": "Advanced",
      },
    },
  },
  {
    id: "epson-ff680w",
    name: "Epson FastFoto FF-680W",
    category: "scanners",
    subcategory: "Photo & Graphic",
    brand: "epson",
    image: imgFF680W,
    gallery: [imgFF680W],
    tagline: "World's fastest personal photo scanner",
    description:
      "High-speed wireless photo scanning system that scans a single 4×6 photo in about one second. 100-page ADF handles multiple sizes in one batch with 600 dpi resolution and USB/Wi-Fi connectivity.",
    overview:
      "The Epson FastFoto FF-680W is the world's fastest personal photo scanner, capable of scanning a single 4×6 photo in approximately one second. Its 100-page auto document feeder handles multiple photo sizes in a single batch — from wallet-size prints to panoramics up to 36 inches long. With both USB and Wi-Fi connectivity, you can scan wirelessly from your computer. The included Epson FastFoto software automatically enhances, de-skews, and crops photos, and can even capture handwritten notes on the back of prints. At 45 ppm / 90 ipm, it's built for digitising entire photo collections quickly.",
    highlights: [
      {
        title: "Lightning-Fast Photo Scanning",
        text: "Scan a single 4×6 photo in about one second at 300 dpi. At 45 ppm / 90 ipm, you can digitise entire photo collections in a fraction of the time.",
        image: imgFF680W,
      },
      {
        title: "100-Page Auto Document Feeder",
        text: "Load up to 100 photos at once and handle multiple sizes in one batch — from wallet-size prints to panoramics up to 36 inches long.",
        image: imgFF680W,
      },
      {
        title: "Wireless Connectivity",
        text: "Scan wirelessly via Wi-Fi or use the USB connection. Upload directly to cloud services and share your digitised memories instantly.",
        image: imgFF680W,
      },
      {
        title: "Intelligent Photo Enhancement",
        text: "FastFoto software automatically enhances, de-skews, crops, and restores colour to photos. Even captures handwritten notes on the back of prints.",
        image: imgFF680W,
      },
    ],
    features: [
      "45 ppm / 90 ipm Scan Speed",
      "600 dpi Optical Resolution",
      "100-Page ADF Capacity",
      "Wi-Fi & USB Connectivity",
      "Handles Multiple Sizes in One Batch",
      "Auto Photo Enhancement & Colour Restoration",
      "Captures Handwritten Notes on Back",
      'Scans Photos Up to 36" Long',
      "Safe Photo Handling Technology",
      "Epson FastFoto Software",
      "Windows & macOS Compatible",
    ],
    specs: {
      "Scanner Type": "Sheet-fed with ADF",
      "Scan Speed": "45 ppm / 90 ipm",
      "Optical Resolution": "600 dpi",
      "ADF Capacity": "100 sheets",
      "Max Scan Length": '36"',
      Connectivity: "USB 3.0, Wi-Fi (802.11 b/g/n)",
      "OS Support": "Windows, macOS",
    },
    specsGrouped: {
      Scanning: {
        "Scanner Type": "Sheet-fed with ADF",
        "Scan Speed": "45 ppm / 90 ipm (300 dpi)",
        "Optical Resolution": "600 dpi",
        "ADF Capacity": "100 sheets",
        "Max Scan Length": '36"',
        "Photo Sizes": "Wallet to panoramic",
      },
      Connectivity: {
        USB: "USB 3.0",
        "Wi-Fi": "802.11 b/g/n",
      },
      Software: {
        Included: "Epson FastFoto, ScanSmart",
        Features: "Auto enhancement, colour restoration, back-side capture",
      },
    },
    isBestSeller: true,
  },
  {
    id: "epson-v850",
    name: "Epson Perfection V850 Pro",
    category: "scanners",
    subcategory: "Photo & Graphic",
    brand: "epson",
    image: imgV850,
    gallery: [imgV850, imgV850Color, imgV850ICE, imgV850Holders, imgV850LED],
    tagline: "Pro-quality scanner for archiving film and photos",
    description:
      "Professional-quality photo scanner with 6400 dpi optical resolution, 4.0 Dmax, exclusive Dual Lens System, Digital ICE Technologies, and ReadyScan LED. Ideal for archiving slides, negatives, and film.",
    overview:
      "The Epson Perfection V850 Pro delivers the quality and control you need to preserve priceless originals right in your studio. With 6400 dpi optical resolution, a 4.0 Dmax, advanced optics, and an exclusive Dual Lens System, it ensures extraordinary results whether scanning slides, negatives, or film. Digital ICE Technologies remove surface defects from film and prints, while two sets of film holders (35mm slides, 35mm film strips, medium format, and 4×5) boost productivity. The ReadyScan LED light source provides fast scans with no warmup time. SilverFast SE Plus and X-Rite i1 colour management software add professional versatility.",
    highlights: [
      {
        title: "Professional Colour & Detail",
        text: "State-of-the-art 6400 dpi optical resolution with advanced optics and a high-reflection mirror with anti-reflective coatings for unparalleled scan quality.",
        image: imgV850Color,
      },
      {
        title: "Exclusive Dual Lens System",
        text: "Automatically selects from two lenses for optimum results based on the media being scanned — delivering the best possible quality for every original.",
        image: imgV850LED,
      },
      {
        title: "Digital ICE Technologies",
        text: "Automatically remove dust and scratches from film and prints to minimise costly retouching. Works with 35mm and medium-format film.",
        image: imgV850ICE,
      },
      {
        title: "ReadyScan LED & Film Holders",
        text: "Fast scans with no warmup time. Two sets of film holders included for batch scanning slides, negatives, medium- and large-format film.",
        image: imgV850Holders,
      },
    ],
    features: [
      "6400 dpi Optical Resolution",
      "4.0 Dmax Density Range",
      "Exclusive Dual Lens System",
      "Digital ICE for Film & Prints",
      "ReadyScan LED — No Warmup",
      "Two Sets of Film Holders Included",
      '8" x 10" Transparency Unit Built-in',
      "SilverFast SE Plus Software",
      "X-Rite i1 Colour Management",
      "Fluid Mount Option Available",
      "48-bit Colour Depth",
      "Hi-Speed USB 2.0",
    ],
    specs: {
      "Scanner Type": "Flatbed with Transparency Unit",
      "Optical Resolution": "6400 dpi (Dual Lens)",
      "Flatbed Size": '8.5" x 11.7"',
      "Transparency Unit": '8" x 10" (built-in)',
      Dmax: "4.0",
      "Colour Depth": "48-bit",
      "Image Sensor": "CCD (Dual Lens)",
      "Light Source": "ReadyScan LED",
      "Digital ICE": "35mm and medium-format",
      Connectivity: "Hi-Speed USB 2.0",
    },
    specsGrouped: {
      Scanning: {
        "Scanner Type": "Flatbed with Transparency Unit",
        "Optical Resolution": "6400 dpi (Dual Lens System)",
        "Film Optical Resolution": "6400 dpi",
        "Flatbed Size": '8.5" x 11.7"',
        "Transparency Unit": '8" x 10" (built-in)',
        Dmax: "4.0",
        "Colour Depth": "48-bit input / 24-bit output",
      },
      "Optics & Sensor": {
        "Image Sensor": "CCD with Dual Lens System",
        "Light Source": "ReadyScan LED (no warmup)",
        Mirror: "High-reflection with anti-reflective coatings",
        "Digital ICE": "35mm and medium-format film & prints",
      },
      "Film Holders": {
        "35mm Slides": "2 holders included",
        "35mm Film Strips": "2 holders included",
        "Medium Format 6×20cm": "2 holders included",
        '4" x 5"': "2 holders included",
      },
      Connectivity: {
        Interface: "Hi-Speed USB 2.0",
      },
      Software: {
        Included: "SilverFast SE Plus, X-Rite i1Scanner",
        "IT8 Targets": "Reflective & transparent included",
      },
    },
  },
  {
    id: "epson-13000xl",
    name: "Epson Expression 13000XL",
    category: "scanners",
    subcategory: "Photo & Graphic",
    brand: "epson",
    image: img13000XL,
    gallery: [img13000XL, img13000XLOpen, img13000XLMedia, img13000XLSide, img13000XLLifestyle, img13000XLFeatures],
    tagline: "Large-format archival scanner for extraordinary photo & graphics scanning",
    description:
      'Professional large-format archival scanner accommodating reflective media up to 12.2" x 17.2". 2400 x 4800 dpi resolution, 3.8 Dmax, MatrixCCD and ReadyScan LED technologies for brilliant colour accuracy.',
    overview:
      'Take large-format photo and graphics scanning to a new level with the Epson Expression 13000XL. Engineered for demanding applications such as photo archiving and graphic arts, this powerful scanner uses 2400 x 4800 dpi resolution with an optical density of 3.8 Dmax for clean, sharp images. Epson MatrixCCD and ReadyScan LED technologies plus 48-bit colour depth deliver brilliant, vibrant colours with incredible accuracy. The extra-large scan bed accommodates reflective and other media up to 12.2" x 17.2". Add the optional Transparency Unit to scan film and transparent materials up to 12" x 16.5". One-touch colour restoration, batch scanning, and SilverFast Ai software enhance productivity.',
    highlights: [
      {
        title: "Extra-Large Scan Bed",
        text: 'Accommodates reflective media up to 12.2" x 17.2" — perfect for oversized photos, artwork, graphic prints, and archival materials.',
        image: img13000XLBed,
      },
      {
        title: "Brilliant Clarity & Detail",
        text: "2400 x 4800 dpi resolution, Epson Micro Step Drive technology and 3.8 Dmax provide exceptional archival scanning quality.",
        image: img13000XLClarity,
      },
      {
        title: "Extraordinary Colour Accuracy",
        text: "Epson MatrixCCD and ReadyScan LED technologies with 48-bit colour depth produce scans true to the originals with vibrant, accurate colours.",
        image: img13000XLColor,
      },
      {
        title: "Optional Transparency Unit",
        text: 'Scan film up to 12" x 16.5" with the optional Transparency Unit accessory. Supports 35mm, medium-format, and large-format film with included holders.',
        image: img13000XLLifestyle,
      },
    ],
    features: [
      "2400 x 4800 dpi Resolution",
      "3.8 Dmax Optical Density",
      '12.2" x 17.2" Scan Bed',
      "Epson MatrixCCD Technology",
      "ReadyScan LED — No Warmup",
      "48-bit Colour Depth",
      "One-Touch Colour Restoration",
      "TWAIN Driver Support",
      'Optional Transparency Unit (12" x 16.5")',
      "SilverFast Ai Software",
      "Hi-Speed USB 2.0",
      "Windows & macOS Compatible",
    ],
    specs: {
      "Scanner Type": "Flatbed, Large Format",
      "Optical Resolution": "2400 x 4800 dpi",
      "Flatbed Size": '12.2" x 17.2"',
      "Optional Transparency Unit": '12" x 16.5"',
      Dmax: "3.8",
      "Colour Depth": "48-bit",
      "Image Sensor": "MatrixCCD",
      "Light Source": "ReadyScan LED",
      Connectivity: "Hi-Speed USB 2.0",
      "Driver Support": "TWAIN",
    },
    specsGrouped: {
      Scanning: {
        "Scanner Type": "Flatbed, Large Format",
        "Optical Resolution": "2400 x 4800 dpi",
        "Flatbed Size": '12.2" x 17.2"',
        "Optional Transparency Unit": '12" x 16.5"',
        Dmax: "3.8",
        "Colour Depth": "48-bit input / 24-bit output",
      },
      "Optics & Sensor": {
        "Image Sensor": "Epson MatrixCCD",
        "Light Source": "ReadyScan LED (no warmup)",
        Technology: "Micro Step Drive",
      },
      Connectivity: {
        Interface: "Hi-Speed USB 2.0",
        "Driver Support": "TWAIN, ISIS",
      },
      Software: {
        Included: "LaserSoft Imaging SilverFast Ai",
        "Colour Restoration": "Easy Photo Fix (one-touch)",
      },
    },
  },
];
