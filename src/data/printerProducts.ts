import type { Product } from "./products";
import imgIm350fse from "@/assets/printers/im-350fse.png";
import imgIm350fseRight from "@/assets/printers/im-350fse-right.png";
import imgIm370 from "@/assets/printers/im-370.png";
import imgIm370Right from "@/assets/printers/im-370-right.png";
import imgIm370Detail from "@/assets/printers/im-370-detail.png";
import imgIm370f from "@/assets/printers/im-370f.png";
import imgIm370fRight from "@/assets/printers/im-370f-right.png";
import imgIm370fLeft from "@/assets/printers/im-370f-left.png";
import imgIm430fse from "@/assets/printers/im-430fse.png";
import imgIm430fseRight from "@/assets/printers/im-430fse-right.png";
import imgIm430fseLeft from "@/assets/printers/im-430fse-left.png";
import imgIm430fseDetail from "@/assets/printers/im-430fse-detail.png";
import imgIm2702 from "@/assets/printers/im-2702.png";
import imgIm2702Right from "@/assets/printers/im-2702-right.png";
import imgIm2702Left from "@/assets/printers/im-2702-left.png";
import imgImC300 from "@/assets/printers/im-c300.png";
import imgImC300Left from "@/assets/printers/im-c300-left.png";
import imgImC300Right from "@/assets/printers/im-c300-right.png";
import imgImC300Detail from "@/assets/printers/im-c300-detail.png";
import imgImC300f from "@/assets/printers/im-c300f.png";
import imgImC300fLeft from "@/assets/printers/im-c300f-left.png";
import imgImC300fRight from "@/assets/printers/im-c300f-right.png";
import imgImC300fDetail from "@/assets/printers/im-c300f-detail.png";
import imgImC320f from "@/assets/printers/im-c320f.png";
import imgImC320fLeft from "@/assets/printers/im-c320f-left.png";
import imgImC320fRight from "@/assets/printers/im-c320f-right.png";
import imgImC400f from "@/assets/printers/im-c400f.png";
import imgImC401f from "@/assets/printers/im-c401f.png";
import imgImC401fRight from "@/assets/printers/im-c401f-right.png";
import imgImC401fDetail from "@/assets/printers/im-c401f-detail.png";
import imgImC401srf from "@/assets/printers/im-c401srf.png";
import imgImC401srfRight from "@/assets/printers/im-c401srf-right.png";
import imgImC401srfTop from "@/assets/printers/im-c401srf-top.png";
import imgM2701 from "@/assets/printers/m-2701.png";
import imgM320 from "@/assets/printers/m-320.png";
import imgM320f from "@/assets/printers/m-320f.png";
import imgM320fse from "@/assets/printers/m-320fse.png";
import imgM320se from "@/assets/printers/m-320se.png";
import imgMC320fw from "@/assets/printers/m-c320fw.png";

export const printerProducts: Product[] = [
  // ── B&W A4 Printers ────────────────────────────────
  {
    id: "im-350fse",
    name: "RICOH IM 350FSE",
    category: "printers",
    subcategory: "B&W A4",
    brand: "ricoh",
    image: imgIm350fse,
    gallery: [imgIm350fse, imgIm350fseRight],
    description: "Fast 35 ppm A4 mono all-in-one with fax, quiet operation, and low energy consumption of 0.5 kWh TEC.",
    overview: "Introducing the IM 350FSE, a versatile and intelligent all-in-one printer designed to enhance your workflow and efficiency. Leveraging cloud technology, the advanced device automates daily document tasks, freeing you to focus on essential business operations. Perfectly suited for dynamic work environments, the IM 350FSE seamlessly integrates with existing systems to deliver exceptional performance and reliability.",
    highlights: [
      { title: "Cloud Technology Innovation", text: "The IM 350FSE leverages cloud technology to automate daily document tasks. Users can easily and securely print and scan from their mobile devices, with the flexibility to scan documents in colour to cloud storage." },
      { title: "Small but Powerful", text: "This intelligent all-in-one mono device is compact in design without compromising on all the benefits you expect from a Ricoh device. The low noise design makes this device suitable for small spaces and private offices." },
      { title: "Boost Sustainability", text: "Blue Angel Mark certified, one of the highest standards of environmental, health and functional quality. Features a TEC value of 0.5kWh and EcoMode to reduce energy waste." },
    ],
    features: ["35 ppm Print Speed", "Print, Copy, Scan, Fax", "Scan 43.4 ipm Simplex / 80 ipm Duplex", "Low Noise Operation", "TEC 0.5 kWh/week", "Network Ready"],
    specs: { "Print Speed": "35 ppm", "Resolution": "1,200 × 1,200 dpi", "Paper Size": "A4", "Functions": "Print, Copy, Scan, Fax" },
    specsGrouped: {
      "General": { "Warm-up Time": "22 seconds", "First Copy Speed (B&W)": "6.5 seconds", "Continuous Output Speed": "35 ppm", "Memory": "2 GB", "HDD": "320 GB", "Weight": "30.5 kg", "Dimensions (W×D×H)": "476 × 442 × 510 mm", "Power Source": "220–240 V, 50–60 Hz" },
      "Copier": { "Multiple Copying": "Up to 999 copies", "Copy Resolution": "600 × 600 dpi", "Zoom": "25%–400% in 1% steps" },
      "Printer": { "CPU": "Intel Atom Bay Trail 1.46 GHz", "Printer Language": "PCL5e, PCL6, PostScript 3, PDF direct", "Print Resolution": "1,200 × 1,200 dpi", "Network Interface": "Ethernet 10/100/1000, USB Host 2.0", "Mobile Printing": "Apple AirPrint, Mopria, Ricoh Smart Device Connector", "Network Protocol": "TCP/IP (IPv4, IPv6)" },
      "Scanner": { "Scan Speed (SPDF)": "43.4 ipm (simplex) / 80 ipm (duplex)", "Max Resolution": "1,200 dpi", "File Formats": "TIFF, JPEG, PDF, High compression PDF, PDF/A", "Scan Modes": "E-mail, Folder, USB, SD Card" },
      "Fax": { "Circuit": "PSTN, PBX", "Transmission Speed": "2 seconds", "Modem Speed": "33.6 Kbps", "Compression": "MH, MR, MMR, JBIG", "Fax Scan Speed": "28 spm", "Memory": "4 MB (320 pages)" },
      "Paper Handling": { "Standard Tray Paper Size": "A4, A5, A6, B5, B6", "Paper Input (Standard)": "500 sheets", "Paper Input (Maximum)": "2,100 sheets", "Paper Output": "250 sheets", "Paper Weight (Trays)": "52–220 g/m²", "Paper Weight (Bypass)": "52–256 g/m²", "Paper Weight (Duplex)": "52–162 g/m²" },
      "Ecology": { "Power (Max)": "< 1,280 W", "Power (Operation)": "562 W", "Power (Ready)": "91.5 W", "Power (Sleep)": "1.1 W", "TEC": "0.5 kWh/week" },
      "Consumables": { "Starter Toner": "14,000 prints", "Drum": "70,000 sheets", "Toner (Black)": "14,000 prints" },
    },
  },
  {
    id: "im-370",
    name: "RICOH IM 370",
    category: "printers",
    subcategory: "B&W A4",
    brand: "ricoh",
    image: imgIm370,
    gallery: [imgIm370, imgIm370Right, imgIm370Detail],
    description: "37 ppm A4 mono all-in-one with 1,200 dpi scan resolution and industry-leading low 0.37 kWh energy consumption.",
    overview: "The IM 370 unlocks new value in your print infrastructure with secure, cloud-based printing and scanning. Remote collaboration is easier than ever before with a host of integrated software options. This intelligent A4 mono device offers an output speed of 37 ppm and the added flexibility of A3 capabilities, helping you make the most of your office space. Made using recycled plastics and offering industry leading low TEC value (0.37 kWh), it is the perfect addition to any future-focused business.",
    highlights: [
      { title: "RICOH Always Current Technology", text: "Firmware delivered directly to your device, ensuring optimal efficiency and security. Add new apps without the need for new hardware, expanding your device capabilities." },
      { title: "Smart Operation Panel", text: "Intuitive 10.1-inch Smart Operation Panel with soft-key operation, customisable home screen and full internet browser capability for simplified document processes." },
      { title: "Reduce Environmental Impact", text: "Smaller footprint with enhanced functionality while reducing plastic waste and energy consumption. Designed to deliver optimal performance in an eco-friendly and compact design." },
    ],
    features: ["37 ppm Print Speed", "Print, Copy, Scan", "1,200 dpi Scan Resolution", "First Copy 4.7 Seconds", "TEC 0.37 kWh/week", "Always Current Technology"],
    specs: { "Print Speed": "37 ppm", "Resolution": "1,200 × 1,200 dpi", "Paper Size": "A4", "Functions": "Print, Copy, Scan" },
    specsGrouped: {
      "General": { "Warm-up Time": "31 seconds", "First Copy Speed (B&W)": "4.7 seconds", "Continuous Output Speed": "37 ppm", "Memory": "6 GB", "Storage": "64 GB", "SSD (Optional)": "256 GB", "HDD (Optional)": "320 GB", "SPDF Capacity": "50 sheets", "Weight": "41 kg", "Dimensions (W×D×H)": "374 × 493 × 640 mm", "Power Source": "220–240 V, 50–60 Hz" },
      "Copier": { "Multiple Copying": "Up to 999 copies", "Resolution": "600 dpi", "Zoom": "25%–400% in 1% steps" },
      "Printer": { "First Print Speed (B&W)": "3.8 seconds", "CPU": "Marvell 88PA6270 1.2 GHz", "Printer Language": "PCL5e, PCL6, PostScript 3, PDF direct, MediaPrint (TIFF)", "Print Resolution": "1,200 × 1,200 dpi", "Network Interface": "Ethernet 10/100/1000, USB Type A, USB Type B, Bluetooth", "Network (Optional)": "Wireless LAN (802.11a/b/g/n), USB Device Server", "Mobile Printing": "Apple AirPrint, Mopria, Ricoh Smart Device Connector" },
      "Scanner": { "Scan Speed (SPDF)": "46 ipm (simplex) / 92 ipm (duplex)", "Max Resolution": "1,200 dpi", "File Formats": "TIFF, JPEG, PDF, High compression PDF, PDF/A, Encryption PDF, OCR (optional)", "Scan Modes": "E-mail, Folder, USB, URL, FTP, SMB" },
      "Paper Handling": { "Standard Tray Paper Size": "A4, A5, A6, B5, B6", "Bypass Tray Paper Size": "A3, A4, A5, A6, B5, B6, Envelopes, Custom", "Paper Input (Standard)": "500 sheets", "Paper Input (Bypass)": "100 sheets", "Paper Input (Maximum)": "2,100 sheets", "Paper Output": "250 sheets", "Paper Weight (Trays)": "60–162 g/m²", "Paper Weight (Bypass)": "52–216 g/m²", "Paper Weight (Duplex)": "52–162 g/m²" },
      "Ecology": { "Power (Max)": "< 1,780 W", "Power (Operation)": "528.8 W", "Power (Ready)": "26.4 W", "Power (Sleep)": "0.41 W", "TEC": "0.37 kWh/week" },
      "Consumables": { "Toner (Regular Yield)": "13,500 prints" },
    },
  },
  {
    id: "im-370f",
    name: "RICOH IM 370F",
    category: "printers",
    subcategory: "B&W A4",
    brand: "ricoh",
    image: imgIm370f,
    gallery: [imgIm370f, imgIm370fRight, imgIm370fLeft],
    description: "37 ppm A4 mono all-in-one with fax, integrated software updates, and low 0.381 kWh energy consumption.",
    overview: "The IM 370F offers your organisation a productivity boost with easier access to dynamic and collaborative digital working practices. Access the latest cloud-based solutions for maximum security and seamless workflows. Optimise your office space with a compact mono device delivering fast, high quality output and the added flexibility of A3 scan and copy capabilities. This intelligent all-rounder also helps you do business responsibly, with industry leading low Typical Energy Consumption (TEC) values.",
    highlights: [
      { title: "Secure Your Data", text: "Intelligent devices fortified with a resilient operating system and up-to-date security features such as encryption, authentication, restricted print output access and data overwrite." },
      { title: "Reduce Environmental Impact", text: "Smaller footprint with enhanced functionality while reducing plastic waste and energy consumption. Designed to deliver optimal performance in an eco-friendly and compact design." },
      { title: "Smart Operation Panel", text: "10.1-inch Smart Operation Panel with soft-key operation, customisable home screen and full internet browser capability for high quality printing and low running costs." },
    ],
    features: ["37 ppm Print Speed", "Print, Copy, Scan, Fax", "Integrated Security Updates", "First Copy 4.7 Seconds", "TEC 0.381 kWh/week", "Always Current Technology"],
    specs: { "Print Speed": "37 ppm", "Resolution": "1,200 × 1,200 dpi", "Paper Size": "A4", "Functions": "Print, Copy, Scan, Fax" },
    specsGrouped: {
      "General": { "Warm-up Time": "31 seconds", "First Copy Speed (B&W)": "4.7 seconds", "Continuous Output Speed": "37 ppm", "Memory": "6 GB", "Storage": "64 GB", "SSD (Optional)": "256 GB", "HDD (Optional)": "320 GB", "SPDF Capacity": "50 sheets", "Weight": "41 kg", "Dimensions (W×D×H)": "374 × 493 × 640 mm", "Power Source": "220–240 V, 50–60 Hz" },
      "Copier": { "Multiple Copying": "Up to 999 copies", "Resolution": "600 dpi", "Zoom": "25%–400% in 1% steps" },
      "Printer": { "First Print Speed (B&W)": "3.8 seconds", "CPU": "Marvell 88PA6270 1.2 GHz", "Printer Language": "PCL5e, PCL6, PostScript 3, PDF direct, MediaPrint (TIFF)", "Print Resolution": "1,200 × 1,200 dpi", "Network Interface": "Ethernet 10/100/1000, USB Type A, USB Type B, Bluetooth", "Network (Optional)": "Wireless LAN (802.11a/b/g/n), USB Device Server", "Mobile Printing": "Apple AirPrint, Mopria, Ricoh Smart Device Connector" },
      "Scanner": { "Scan Speed (SPDF)": "46 ipm (simplex) / 92 ipm (duplex)", "Max Resolution": "1,200 dpi", "File Formats": "TIFF, JPEG, PDF, High compression PDF, PDF/A, Encryption PDF, OCR (optional)", "Scan Modes": "E-mail, Folder, USB, URL, FTP, SMB" },
      "Fax": { "Circuit": "PSTN, PBX", "Transmission Speed": "3 seconds", "Modem Speed": "33.6 Kbps", "Compression": "MH, MR, MMR", "Fax Scan Speed": "46 spm", "Memory": "4 MB (320 pages)" },
      "Paper Handling": { "Standard Tray Paper Size": "A4, A5, A6, B5, B6", "Bypass Tray Paper Size": "A3, A4, A5, A6, B5, B6, Envelopes, Custom", "Paper Input (Standard)": "500 sheets", "Paper Input (Bypass)": "100 sheets", "Paper Input (Maximum)": "2,100 sheets", "Paper Output": "250 sheets", "Paper Weight (Trays)": "60–162 g/m²", "Paper Weight (Bypass)": "52–216 g/m²", "Paper Weight (Duplex)": "52–162 g/m²" },
      "Ecology": { "Power (Max)": "< 1,780 W", "Power (Operation)": "528.8 W", "Power (Ready)": "26.4 W", "Power (Sleep)": "0.41 W", "TEC": "0.37 kWh/week" },
      "Consumables": { "Toner (Regular Yield)": "13,500 prints" },
    },
  },
  {
    id: "im-430fse",
    name: "RICOH IM 430FSE",
    category: "printers",
    subcategory: "B&W A4",
    brand: "ricoh",
    image: imgIm430fse,
    gallery: [imgIm430fse, imgIm430fseRight, imgIm430fseLeft, imgIm430fseDetail],
    description: "Fast 43 ppm A4 mono all-in-one with quiet operation, duplex scanning at 80 ipm, and 0.59 kWh TEC.",
    overview: "This intelligent black and white device offers quick print speeds, fax and colour scan capability, making it an ideal choice for any dynamic work environment. The IM 430FSE delivers exceptional performance and reliability, helping you streamline your daily document tasks and focus on essential business operations.",
    highlights: [
      { title: "Eco-Friendly Design", text: "Certified with the Blue Angel Mark, the IM 430FSE aligns with sustainability goals. With a TEC value of 0.59kWh and eco-mode for automated sleep mode, it significantly reduces energy waste." },
      { title: "Compact and Versatile", text: "This all-in-one device is compact while offering features typical of a Ricoh device. Low noise output makes it suitable for small and individual office spaces, plus fax and full colour scanning." },
    ],
    features: ["43 ppm Print Speed", "Print, Copy, Scan, Fax", "Scan 43.4 ipm Simplex / 80 ipm Duplex", "Low Noise Operation", "TEC 0.59 kWh/week", "Network Ready"],
    specs: { "Print Speed": "43 ppm", "Resolution": "1,200 × 1,200 dpi", "Paper Size": "A4", "Functions": "Print, Copy, Scan, Fax" },
    specsGrouped: {
      "General": { "Warm-up Time": "22 seconds", "First Copy Speed (B&W)": "5.9 seconds", "Continuous Output Speed": "43 ppm", "Memory": "2 GB", "HDD": "320 GB", "Weight": "30.5 kg", "Dimensions (W×D×H)": "476 × 442 × 510 mm", "Power Source": "220–240 V, 50–60 Hz" },
      "Copier": { "Multiple Copying": "Up to 999 copies", "Copy Resolution": "600 × 600 dpi", "Zoom": "25%–400% in 1% steps" },
      "Printer": { "CPU": "Intel Atom Bay Trail 1.46 GHz", "Printer Language": "PCL5e, PCL6, PostScript 3, PDF direct", "Print Resolution": "1,200 × 1,200 dpi", "Network Interface": "Ethernet 10/100/1000, USB Host 2.0", "Mobile Printing": "Apple AirPrint, Mopria, Ricoh Smart Device Connector", "Network Protocol": "TCP/IP (IPv4, IPv6)" },
      "Scanner": { "Scan Speed (SPDF)": "43.4 ipm (simplex) / 80 ipm (duplex)", "Max Resolution": "1,200 dpi", "File Formats": "TIFF, JPEG, PDF, High compression PDF, PDF/A", "Scan Modes": "E-mail, Folder, USB, SD Card" },
      "Fax": { "Circuit": "PSTN, PBX", "Transmission Speed": "2 seconds", "Modem Speed": "33.6 Kbps", "Compression": "MH, MR, MMR, JBIG", "Fax Scan Speed": "28 spm", "Memory": "4 MB (320 pages)" },
      "Paper Handling": { "Standard Tray Paper Size": "A4, A5, A6, B5, B6", "Paper Input (Standard)": "500 sheets", "Paper Input (Maximum)": "2,100 sheets", "Paper Output": "250 sheets", "Paper Weight (Trays)": "52–220 g/m²", "Paper Weight (Bypass)": "52–256 g/m²", "Paper Weight (Duplex)": "52–162 g/m²" },
      "Ecology": { "Power (Max)": "< 1,290 W", "Power (Operation)": "625 W", "Power (Ready)": "91.5 W", "Power (Sleep)": "1.1 W", "TEC": "0.59 kWh/week" },
      "Consumables": { "Starter Toner": "17,400 prints", "Drum": "70,000 sheets", "Toner (Black)": "17,400 prints" },
    },
  },
  {
    id: "im-2702",
    name: "RICOH IM 2702",
    category: "printers",
    subcategory: "B&W A4",
    brand: "ricoh",
    image: imgIm2702,
    gallery: [imgIm2702, imgIm2702Right, imgIm2702Left],
    description: "27 ppm A4 mono multifunction printer with print, copy, scan and fax. Paper capacity up to 1,600 sheets.",
    overview: "Endlessly versatile, the IM 2702 prints and copies in black and white, and scans in colour. Fax functionality is also available as an option. The ARDF quickly scans double-sided originals and multipage documents are printed at speed. With up to three trays on line, it is easy to print onto different paper sizes and to feed envelopes and labels. Localisation is simple as the MFP supports a variety of languages, including Arabic. And, with the IM 2702 easy to install and self-maintain, reliable performance is guaranteed.",
    highlights: [
      { title: "RICOH Intelligent Support", text: "A multi-faceted service platform that gives instant assistance and enhanced customer experience with a comprehensive suite of tools, diagnostics and help." },
      { title: "Smart Operation Panel", text: "10.1-inch Smart Operation Panel with soft-key operation, customisable home screen and full internet browser capability." },
      { title: "Outstanding Security", text: "Security is in the DNA of our entire digital workplace portfolio. Ricoh enables secure access to data whilst ensuring security features don't hinder productivity." },
    ],
    features: ["27 ppm Print Speed", "Print, Copy, Scan, Fax", "Paper Capacity up to 1,600 Sheets", "600 × 600 dpi Resolution", "Compact Design", "Network Ready"],
    specs: { "Print Speed": "27 ppm", "Resolution": "600 × 600 dpi", "Paper Size": "A4", "Functions": "Print, Copy, Scan, Fax" },
    specsGrouped: {
      "General": { "Warm-up Time": "25 seconds", "First Copy Speed (B&W)": "6.5 seconds", "Continuous Output Speed": "27 ppm", "Memory": "2 GB", "Weight": "46.5 kg", "Dimensions (W×D×H)": "587 × 581 × 677 mm", "Power Source": "220–240 V, 50–60 Hz", "Laser Classification": "Class 1 (IEC60825-1:2014)" },
      "Copier": { "Multiple Copying": "Up to 999 copies", "Resolution": "600 × 600 dpi", "Zoom": "25%–400%" },
      "Printer": { "Printer Language": "PCL5e, PCL6, PostScript 3", "Print Resolution": "600 × 600 dpi", "Network Interface": "Ethernet 10/100/1000, USB 2.0 Type B, Wireless LAN (802.11a/b/g/n), USB Host 2.0", "Mobile Printing": "Apple AirPrint, Mopria, Google Cloud Print" },
      "Scanner": { "Scanning Speed (B&W)": "50 ipm", "Scanning Speed (Full Colour)": "50 ipm", "Max Resolution": "1,200 dpi", "Bundled Drivers": "Network TWAIN" },
      "Fax": { "Compatibility": "ITU-T (CCITT) G3", "Modem Speed": "33.6 Kbps" },
      "Paper Handling": { "Paper Input (Standard)": "500 sheets", "Paper Input (Maximum)": "1,600 sheets", "Paper Output": "250 sheets", "Paper Weight (Trays)": "52–105 g/m²", "Paper Weight (Bypass)": "52–216 g/m²" },
      "Ecology": { "Power (Max)": "< 1,550 W", "Power (Operation B&W)": "500 W" },
      "Consumables": { "Toner (Regular Yield)": "4,000 prints" },
    },
  },
  {
    id: "m-2701",
    name: "RICOH M 2701",
    category: "printers",
    subcategory: "B&W A4",
    brand: "ricoh",
    image: imgM2701,
    description: "27 ppm A4 mono all-in-one with print, copy, scan and fax. Paper capacity up to 1,600 sheets for busy workgroups.",
    features: ["27 ppm Print Speed", "Print, Copy, Scan, Fax", "Paper Capacity up to 1,600 Sheets", "600 × 600 dpi Resolution", "Compact Design", "Low Power Consumption"],
    specs: { "Print Speed": "27 ppm", "Resolution": "600 × 600 dpi", "Paper Size": "A4", "Functions": "Print, Copy, Scan, Fax", "Paper Capacity": "Up to 1,600 sheets", "Power": "< 1,550 W" },
  },
  {
    id: "m-320",
    name: "RICOH M 320",
    category: "printers",
    subcategory: "B&W A4",
    brand: "ricoh",
    image: imgM320,
    description: "Compact 32 ppm A4 mono all-in-one with 1,200 dpi resolution, 550-sheet paper capacity, and ultra-low 0.423 kWh energy.",
    features: ["32 ppm Print Speed", "Print, Copy, Scan, Fax", "1,200 × 1,200 dpi Resolution", "550-Sheet Paper Capacity", "TEC 0.423 kWh/week", "Compact Desktop Design"],
    specs: { "Print Speed": "32 ppm", "Resolution": "1,200 × 1,200 dpi", "Paper Size": "A4", "Functions": "Print, Copy, Scan, Fax", "Paper Capacity": "Up to 550 sheets", "TEC": "0.423 kWh/week" },
  },
  {
    id: "m-320f",
    name: "RICOH M 320F",
    category: "printers",
    subcategory: "B&W A4",
    brand: "ricoh",
    image: imgM320f,
    description: "32 ppm A4 mono all-in-one with fax, 1,200 dpi print, 550-sheet capacity, and 0.423 kWh TEC.",
    features: ["32 ppm Print Speed", "Print, Copy, Scan, Fax", "1,200 × 1,200 dpi Resolution", "550-Sheet Paper Capacity", "TEC 0.423 kWh/week", "Compact Desktop Design"],
    specs: { "Print Speed": "32 ppm", "Resolution": "1,200 × 1,200 dpi", "Paper Size": "A4", "Functions": "Print, Copy, Scan, Fax", "Paper Capacity": "Up to 550 sheets", "TEC": "0.423 kWh/week" },
  },
  {
    id: "m-320fse",
    name: "RICOH M 320FSE",
    category: "printers",
    subcategory: "B&W A4",
    brand: "ricoh",
    image: imgM320fse,
    description: "32 ppm A4 mono all-in-one with fax, enhanced security, 1,200 dpi, and ultra-low 0.423 kWh energy consumption.",
    features: ["32 ppm Print Speed", "Print, Copy, Scan, Fax", "Enhanced Security Features", "1,200 × 1,200 dpi Resolution", "550-Sheet Paper Capacity", "TEC 0.423 kWh/week"],
    specs: { "Print Speed": "32 ppm", "Resolution": "1,200 × 1,200 dpi", "Paper Size": "A4", "Functions": "Print, Copy, Scan, Fax", "Paper Capacity": "Up to 550 sheets", "TEC": "0.423 kWh/week" },
  },
  {
    id: "m-320se",
    name: "RICOH M 320SE",
    category: "printers",
    subcategory: "B&W A4",
    brand: "ricoh",
    image: imgM320se,
    description: "32 ppm A4 mono all-in-one (print, copy, scan — no fax) with enhanced security and 0.423 kWh TEC.",
    features: ["32 ppm Print Speed", "Print, Copy, Scan", "Enhanced Security Features", "1,200 × 1,200 dpi Resolution", "550-Sheet Paper Capacity", "TEC 0.423 kWh/week"],
    specs: { "Print Speed": "32 ppm", "Resolution": "1,200 × 1,200 dpi", "Paper Size": "A4", "Functions": "Print, Copy, Scan", "Paper Capacity": "Up to 550 sheets", "TEC": "0.423 kWh/week" },
  },

  // ── Colour A4 Printers ─────────────────────────────
  {
    id: "im-c300",
    name: "RICOH IM C300",
    category: "printers",
    subcategory: "Colour A4",
    brand: "ricoh",
    image: imgImC300,
    gallery: [imgImC300, imgImC300Left, imgImC300Right, imgImC300Detail],
    description: "30 ppm A4 colour all-in-one with 1,200 dpi, up to 2,000-sheet paper capacity, and low 0.34 kWh TEC.",
    overview: "This colour MFP has a smart touch-screen control panel and is always running the latest technology. Software that automatically updates, along with the ability to add additional functionality that your business may need in future. Your MFP is always ready to operate. You can print, copy and scan more materials, faster and remotely from wherever you are. The IM C300 is a high performance, durable and powerful A4 colour MFP and the first Ricoh A4 device to feature Ricoh 'Always current technology'.",
    highlights: [
      { title: "Reduce Environmental Impact", text: "Smaller footprint with enhanced functionality while reducing plastic waste and energy consumption. Designed to deliver optimal performance in an eco-friendly and compact design." },
      { title: "Smart Operation Panel", text: "10.1-inch Smart Operation Panel with soft-key operation, customisable home screen and full internet browser capability." },
      { title: "Secure Your Data", text: "Devices fortified with a resilient operating system and up-to-date security features such as encryption, authentication, restricted print output access and data overwrite." },
    ],
    features: ["30 ppm Colour Print Speed", "Print, Copy, Scan", "Optional Fax", "1,200 × 1,200 dpi Resolution", "Up to 2,000 Sheets", "TEC 0.34 kWh/week"],
    specs: { "Print Speed": "30 ppm", "Resolution": "1,200 × 1,200 dpi", "Paper Size": "A4", "Functions": "Print, Copy, Scan, Optional Fax" },
    specsGrouped: {
      "General": { "Warm-up Time": "19 seconds", "First Copy Speed (B&W)": "7.2 seconds", "First Copy Speed (Colour)": "8.6 seconds", "Continuous Output Speed": "30 ppm", "Memory": "2 GB", "HDD": "320 GB", "Weight": "47 kg", "Dimensions (W×D×H)": "498 × 561 × 510 mm", "Power Source": "220–240 V, 50–60 Hz" },
      "Copier": { "Multiple Copying": "Up to 999 copies", "Resolution": "600 dpi", "Zoom": "25%–400% in 1% steps" },
      "Printer": { "Printer Language": "PCL5c, PCL6, PostScript 3, PDF direct", "Print Resolution": "1,200 × 1,200 dpi", "Network Interface": "Ethernet 10/100/1000, USB Type A, USB Type B", "Network (Optional)": "IEEE 1284, Wireless LAN (802.11a/b/g/n)", "Mobile Printing": "Apple AirPrint, Mopria, Google Cloud Print, NFC, Ricoh Smart Device Connector" },
      "Scanner": { "Scan Speed (SPDF)": "40 ipm (simplex) / 80 ipm (duplex)", "Max Resolution": "1,200 dpi", "Scan Modes": "SD Card, URL, FTP, E-mail, Folder, USB" },
      "Paper Handling": { "Recommended Paper Size": "A4, A5, B5", "Paper Input (Standard)": "250 sheets", "Paper Input (Bypass)": "100 sheets", "Paper Input (Maximum)": "2,000 sheets", "Paper Output": "200 sheets", "Paper Weight (Trays)": "60–163 g/m²", "Paper Weight (Bypass)": "60–220 g/m²", "Paper Weight (Duplex)": "60–163 g/m²" },
      "Ecology": { "Power (Max)": "< 1,200 W", "Power (Ready)": "50.6 W", "TEC": "0.37 kWh/week" },
      "Consumables": { "Toner (Black)": "17,000 prints", "Toner (Cyan/Magenta/Yellow)": "6,000 prints" },
    },
    isFeatured: true,
  },
  {
    id: "im-c300f",
    name: "RICOH IM C300F",
    category: "printers",
    subcategory: "Colour A4",
    brand: "ricoh",
    image: imgImC300f,
    gallery: [imgImC300f, imgImC300fLeft, imgImC300fRight, imgImC300fDetail],
    description: "30 ppm A4 colour all-in-one with fax, 1,200 dpi, paper capacity up to 2,000 sheets, and 0.34 kWh TEC.",
    overview: "The IM C300F is an intelligent and powerful A4 colour MFP and the first Ricoh A4 device to feature Ricoh 'Always current technology' ensuring it will always utilise the most up-to-date technology. Designed to improve your workflow it effortlessly prints, copies, scans and faxes more materials, faster and remotely from wherever you are.",
    highlights: [
      { title: "Sustainable Design", text: "Low power consumption, energy-saving modes and minimal heat emissions. Quiet operation for a comfortable workspace and auto-off timers to reduce energy use." },
      { title: "Smart Device Connector", text: "Provides an easier and faster way to send documents for printing and collect scanned images using your Apple or NFC-compatible Android-based smart device." },
      { title: "Always Current Technology", text: "Firmware delivered directly to your device, ensuring optimal efficiency and security. Add new apps without the need for new hardware." },
    ],
    features: ["30 ppm Colour Print Speed", "Print, Copy, Scan, Fax", "1,200 × 1,200 dpi Resolution", "Up to 2,000 Sheets", "TEC 0.34 kWh/week", "Always Current Technology"],
    specs: { "Print Speed": "30 ppm", "Resolution": "1,200 × 1,200 dpi", "Paper Size": "A4", "Functions": "Print, Copy, Scan, Fax" },
    specsGrouped: {
      "General": { "Warm-up Time": "19 seconds", "First Copy Speed (B&W)": "7.2 seconds", "First Copy Speed (Colour)": "8.6 seconds", "Continuous Output Speed": "30 ppm", "Memory": "2 GB", "HDD": "320 GB", "Weight": "47 kg", "Dimensions (W×D×H)": "498 × 561 × 510 mm", "Power Source": "220–240 V, 50–60 Hz" },
      "Copier": { "Multiple Copying": "Up to 999 copies", "Resolution": "600 dpi", "Zoom": "25%–400% in 1% steps" },
      "Printer": { "Printer Language": "PCL5c, PCL6, PostScript 3, PDF direct", "Print Resolution": "1,200 × 1,200 dpi", "Network Interface": "Ethernet 10/100/1000, USB Type A, USB Type B", "Network (Optional)": "IEEE 1284, Wireless LAN (802.11a/b/g/n)", "Mobile Printing": "Apple AirPrint, Mopria, Google Cloud Print, NFC, Ricoh Smart Device Connector" },
      "Scanner": { "Scan Speed (SPDF)": "40 ipm (simplex) / 80 ipm (duplex)", "Max Resolution": "1,200 dpi", "Scan Modes": "SD Card, URL, FTP, E-mail, Folder, USB" },
      "Fax": { "Circuit": "PSTN, PBX", "Compatibility": "ITU-T (CCITT) G3", "Compression": "MH, MR, MMR, JBIG", "Fax Scan Speed": "80 spm" },
      "Paper Handling": { "Recommended Paper Size": "A4, A5, B5", "Paper Input (Standard)": "250 sheets", "Paper Input (Bypass)": "100 sheets", "Paper Input (Maximum)": "2,000 sheets", "Paper Output": "200 sheets", "Paper Weight (Trays)": "60–163 g/m²", "Paper Weight (Bypass)": "60–220 g/m²", "Paper Weight (Duplex)": "60–163 g/m²" },
      "Ecology": { "Power (Max)": "< 1,200 W", "Power (Ready)": "50.6 W", "TEC": "0.37 kWh/week" },
      "Consumables": { "Toner (Black)": "17,000 prints", "Toner (Cyan/Magenta/Yellow)": "6,000 prints" },
    },
  },
  {
    id: "im-c320f",
    name: "RICOH IM C320F",
    category: "printers",
    subcategory: "Colour A4",
    brand: "ricoh",
    image: imgImC320f,
    gallery: [imgImC320f, imgImC320fLeft, imgImC320fRight],
    description: "32 ppm A4 colour all-in-one with 60 ipm duplex scan, 7-inch Smart Operation Panel, and 0.30 kWh TEC.",
    overview: "The IM C320F All-in-one printer that offers high-quality printing, scanning, copying, and faxing. Designed to fit small spaces with a compact and sleek design that blends in with any office environment. It features low energy consumption and eco-friendly materials, making the IM C320F ideal for organisations that care about sustainability.",
    highlights: [
      { title: "Compact & Powerful", text: "Space-saving solution with 32ppm single-sided and 16ppm double-sided print speed, plus enhanced scan speed of up to 60 ipm duplex for quick digitisation." },
      { title: "Eco-Friendly Pioneer", text: "Over 50% post-consumer recycled plastic materials, 100% plastic-free toner packaging, and low TEC value of 0.30kWh. Blue Angel Mark certified." },
      { title: "Always Current Technology", text: "Download the latest software updates and security patches directly to your device, ensuring it is always up to date, secure and performing at its best." },
      { title: "Smart Operation Panel", text: "7-inch Smart Operation Panel with capacitive touch supporting RICOH Intelligent Support, Smart Integration, and Always Current Technology." },
    ],
    features: ["32 ppm Print Speed", "16 ppm Duplex", "60 ipm Duplex Scan", "7\" Smart Operation Panel", "Always Current Technology", "TEC 0.30 kWh/week"],
    specs: { "Print Speed": "32 ppm (simplex) / 16 ppm (duplex)", "Resolution": "1,200 × 1,200 dpi", "Paper Size": "A4", "Functions": "Print, Copy, Scan, Fax" },
    specsGrouped: {
      "General": { "Warm-up Time": "32 seconds", "First Copy Speed (B&W)": "5.8 seconds", "First Copy Speed (Colour)": "6.6 seconds", "Output Speed (1-sided)": "B&W: 32 cpm, Colour: 32 cpm", "Output Speed (2-sided)": "B&W: 16 cpm, Colour: 16 cpm", "Memory": "6 GB", "Storage": "64 GB", "SSD (Optional)": "256 GB", "SPDF Capacity": "50 sheets", "Weight": "29.9 kg", "Dimensions (W×D×H)": "410 × 429 × 483 mm", "Power Source": "220–240 V, 50–60 Hz" },
      "Copier": { "Multiple Copying": "Up to 999 copies", "Resolution": "600 dpi", "Zoom": "25%–400% in 1% steps" },
      "Printer": { "First Print Speed (B&W)": "3.6 seconds", "First Print Speed (Colour)": "4.8 seconds", "CPU": "QB6640-23UF 1.2 GHz", "Printer Language": "PCL5c, PCL6, PostScript 3, PDF direct", "Print Resolution": "1,200 × 1,200 dpi", "Network Interface": "Ethernet 10/100/1000, USB Type A, USB Type B, Bluetooth", "Network (Optional)": "Wireless LAN (802.11a/b/g/n/ac)", "Mobile Printing": "Apple AirPrint, Mopria, Ricoh Smart Device Connector" },
      "Scanner": { "Scan Speed (SPDF)": "30 ipm (simplex) / 60 ipm (duplex)", "Max Resolution": "600 dpi", "File Formats": "TIFF, JPEG, PDF, High compression PDF, PDF/A, Encryption PDF, OCR (optional)", "Scan Modes": "E-mail, Folder, USB" },
      "Fax": { "Circuit": "PSTN, PBX", "Transmission Speed": "3 seconds", "Modem Speed": "33.6 Kbps", "Compression": "MH, MR, MMR, JBIG", "Fax Scan Speed": "30 spm", "Memory": "4 MB (320 pages)" },
      "Paper Handling": { "Standard Tray Paper Size": "A4, A5, A6, B5, B6", "Bypass Tray Paper Size": "A4, A5, A6, B5, B6, Envelopes, Custom", "Paper Input (Standard)": "250 sheets", "Paper Input (Bypass)": "50 sheets", "Paper Input (Maximum)": "800 sheets", "Paper Output": "150 sheets", "Paper Weight (Trays)": "60–200 g/m²", "Paper Weight (Bypass)": "60–200 g/m²", "Paper Weight (Duplex)": "60–163 g/m²" },
      "Ecology": { "Power (Max)": "< 1,420 W", "Power (Operation B&W)": "452.3 W", "Power (Operation Colour)": "468.9 W", "Power (Ready)": "28.3 W", "Power (Sleep)": "0.31 W", "TEC": "0.3 kWh/week" },
      "Consumables": { "Toner (Black)": "16,000 prints", "Toner (Cyan/Magenta/Yellow)": "10,000 prints" },
    },
    isNew: true,
  },
  {
    id: "im-c400f",
    name: "RICOH IM C400F",
    category: "printers",
    subcategory: "Colour A4",
    brand: "ricoh",
    image: imgImC400f,
    description: "43 ppm A4 colour all-in-one with 1,200 dpi, up to 2,300-sheet capacity, and 0.48 kWh TEC.",
    features: ["43 ppm Colour Print Speed", "Print, Copy, Scan, Fax", "1,200 × 1,200 dpi Resolution", "Up to 2,300 Sheets", "TEC 0.48 kWh/week", "Cloud Integration"],
    specs: { "Print Speed": "43 ppm", "Resolution": "1,200 × 1,200 dpi", "Paper Size": "A4", "Functions": "Print, Copy, Scan, Fax", "Paper Capacity": "Up to 2,300 sheets", "TEC": "0.48 kWh/week" },
  },
  {
    id: "im-c401f",
    name: "RICOH IM C401F",
    category: "printers",
    subcategory: "Colour A4",
    brand: "ricoh",
    image: imgImC401f,
    gallery: [imgImC401f, imgImC401fRight, imgImC401fDetail],
    description: "40 ppm colour / 43 ppm B&W A4 all-in-one with 80 ipm duplex scan, 1,200 dpi, and 0.48 kWh TEC.",
    overview: "Experience cutting-edge technology with the IM C401F, designed to deliver exceptional performance and reliability. Whether you're a small business or a large enterprise, this A4 colour all-in-one intelligent device caters to all your printing needs with speed, efficiency and durability. Built for high-demand environments, the IM C401F ensures long-lasting performance and exceptional image quality.",
    highlights: [
      { title: "Intuitive & Fast Performance", text: "Print at 40 ppm, rapid scanning at 80 ipm duplex, 6GB RAM for effortless multitasking, and built-in Wi-Fi for wireless printing from anywhere in the office." },
      { title: "Energy-Efficient & Eco-Friendly", text: "TEC of 0.47kWh, reduced plastic packaging, up to 13% post-consumer recycled materials. Blue Angel Mark certified for highest sustainability standards." },
      { title: "Smart Operation Panel", text: "10.1-inch Smart Operation Panel with user-friendly interface that simplifies navigation and streamlines workflows for enhanced productivity." },
      { title: "Always-On Security", text: "Trusted Platform Module (TPM) 2.0 encrypts critical data. RICOH Always Current Technology ensures the latest security enhancements and firmware updates." },
    ],
    features: ["40 ppm Colour / 43 ppm B&W", "Print, Copy, Scan, Fax", "80 ipm Duplex Scan", "1,200 × 1,200 dpi Resolution", "TEC 0.48 kWh/week", "Smart Operation Panel"],
    specs: { "Print Speed": "40 ppm (colour) / 43 ppm (B&W)", "Resolution": "1,200 × 1,200 dpi", "Paper Size": "A4", "Functions": "Print, Copy, Scan, Fax" },
    specsGrouped: {
      "General": { "Warm-up Time": "24 seconds", "First Copy Speed (B&W)": "6.2 seconds", "First Copy Speed (Colour)": "7.4 seconds", "Continuous Output Speed": "B&W: 43 cpm, Colour: 40 cpm", "Memory": "6 GB", "SSD": "256 GB", "SSD (Optional)": "1 TB", "HDD (Optional)": "320 GB", "Weight": "50 kg", "Dimensions (W×D×H)": "498 × 561 × 590 mm", "Power Source": "220–240 V, 50–60 Hz" },
      "Copier": { "Multiple Copying": "Up to 999 copies", "Resolution": "600 dpi", "Zoom": "25%–400% in 1% steps" },
      "Printer": { "CPU": "ApolloLake E3930 1.3 GHz", "Printer Language": "PCL5c, PCL6, PostScript 3, PDF direct", "Printer Language (Optional)": "Adobe PostScript 3, XPS, PDF Direct from Adobe", "Print Resolution": "1,200 × 1,200 dpi", "Network Interface": "Ethernet 10/100/1000, USB Type A, USB Type B, Bluetooth, Wi-Fi (802.11a/b/g/n/ac)", "Network (Optional)": "Additional NIC (2nd port)", "Mobile Printing": "Apple AirPrint, Mopria, Ricoh Smart Device Connector" },
      "Scanner": { "Scan Speed (SPDF)": "40 ipm (simplex) / 80 ipm (duplex)", "Max Resolution": "1,200 dpi", "File Formats": "TIFF, JPEG, PDF, High compression PDF, PDF/A, Encryption PDF, OCR (optional)", "Scan Modes": "E-mail, Folder, USB, URL, FTP" },
      "Fax": { "Circuit": "PSTN, PBX", "Compatibility": "ITU-T (CCITT) G3", "Modem Speed": "33.6 Kbps", "Compression": "MH, MR, MMR, JBIG", "Fax Scan Speed": "80 spm" },
      "Paper Handling": { "Standard Tray Paper Size": "A4, A5, B5", "Bypass Tray Paper Size": "A4, A5, A6, B5, B6", "Paper Input (Standard)": "550 sheets", "Paper Input (Bypass)": "100 sheets", "Paper Input (Maximum)": "2,300 sheets", "Paper Output": "200 sheets", "Paper Weight (Trays)": "60–163 g/m²", "Paper Weight (Bypass)": "60–220 g/m²", "Paper Weight (Duplex)": "60–163 g/m²" },
      "Ecology": { "Power (Max)": "< 1,350 W", "Power (Ready)": "40.6 W", "TEC": "0.47 kWh/week" },
      "Consumables": { "Toner (Black)": "17,500 prints", "Toner (Cyan/Magenta/Yellow)": "8,000 prints" },
    },
    isNew: true,
  },
  {
    id: "im-c401srf",
    name: "RICOH IM C401SRF",
    category: "printers",
    subcategory: "Colour A4",
    brand: "ricoh",
    image: imgImC401srf,
    gallery: [imgImC401srf, imgImC401srfRight, imgImC401srfTop],
    description: "40 ppm colour / 43 ppm B&W A4 all-in-one with staple finisher, 80 ipm duplex scan, and 0.48 kWh TEC.",
    overview: "Engineered to provide exceptional performance and reliability. Suitable for small businesses to large enterprises, this A4 colour all-in-one intelligent device meets all your printing requirements with speed, efficiency, and durability. Designed for high-demand environments, the IM C401SRF guarantees long-lasting performance and outstanding image quality with online finishing capability.",
    highlights: [
      { title: "Continuous Security", text: "Utilising TPM 2.0 to encrypt critical data and defend against cyber threats. RICOH Always Current Technology ensures continuous protection against emerging risks." },
      { title: "Eco-Friendly Colour Print", text: "TEC of 0.48kWh, reduced plastic packaging, up to 11% post-consumer recycled materials. Blue Angel Mark certified." },
      { title: "Intuitive & Fast Performance", text: "40 ppm print speed with 80 ipm duplex scanning, 6GB RAM, built-in Wi-Fi and internal finisher staple option for streamlined document handling." },
    ],
    features: ["40 ppm Colour / 43 ppm B&W", "Built-in Staple Finisher", "Print, Copy, Scan, Fax", "80 ipm Duplex Scan", "1,200 × 1,200 dpi", "TEC 0.48 kWh/week"],
    specs: { "Print Speed": "40 ppm (colour) / 43 ppm (B&W)", "Resolution": "1,200 × 1,200 dpi", "Paper Size": "A4", "Functions": "Print, Copy, Scan, Fax" },
    specsGrouped: {
      "General": { "Warm-up Time": "24 seconds", "First Copy Speed (B&W)": "6.7 seconds", "First Copy Speed (Colour)": "7.9 seconds", "Continuous Output Speed": "B&W: 43 cpm, Colour: 40 cpm", "Memory": "6 GB", "SSD": "256 GB", "SSD (Optional)": "1 TB", "HDD (Optional)": "320 GB", "Weight": "60 kg", "Dimensions (W×D×H)": "615 × 561 × 706 mm", "Power Source": "220–240 V, 50–60 Hz" },
      "Copier": { "Multiple Copying": "Up to 999 copies", "Resolution": "600 dpi", "Zoom": "25%–400% in 1% steps" },
      "Printer": { "CPU": "ApolloLake E3930 1.3 GHz", "Printer Language": "PCL5c, PCL6, PostScript 3, PDF direct", "Printer Language (Optional)": "Adobe PostScript 3, XPS, PDF Direct from Adobe", "Print Resolution": "1,200 × 1,200 dpi", "Network Interface": "Ethernet 10/100/1000, USB Type A, USB Type B, Bluetooth, Wi-Fi (802.11a/b/g/n/ac)", "Network (Optional)": "Additional NIC (2nd port)", "Mobile Printing": "Apple AirPrint, Mopria, Ricoh Smart Device Connector" },
      "Scanner": { "Scan Speed (SPDF)": "40 ipm (simplex) / 80 ipm (duplex)", "Max Resolution": "1,200 dpi", "File Formats": "TIFF, JPEG, PDF, High compression PDF, PDF/A, Encryption PDF, OCR (optional)", "Scan Modes": "E-mail, Folder, USB, URL, FTP" },
      "Fax": { "Circuit": "PSTN, PBX", "Compatibility": "ITU-T (CCITT) G3", "Modem Speed": "33.6 Kbps", "Compression": "MH, MR, MMR, JBIG", "Fax Scan Speed": "80 spm" },
      "Paper Handling": { "Standard Tray Paper Size": "A4, A5, B5", "Bypass Tray Paper Size": "A4, A5, A6, B5, B6", "Paper Input (Standard)": "550 sheets", "Paper Input (Bypass)": "100 sheets", "Paper Input (Maximum)": "2,300 sheets", "Paper Output": "250 sheets", "Paper Weight (Trays)": "60–163 g/m²", "Paper Weight (Bypass)": "60–220 g/m²", "Paper Weight (Duplex)": "60–163 g/m²" },
      "Finisher": { "Internal Finisher Capacity": "250 sheets", "Staple Capacity": "50 sheets", "Staple Paper Size": "A3, A4, A5, A6, B3, B4, B5, B6", "Staple Paper Weight": "64–81 g/m²", "Staple Positions": "Top, Bottom, 2 staples, Top-slant" },
      "Ecology": { "Power (Max)": "< 1,350 W", "Power (Ready)": "48.5 W", "TEC": "0.48 kWh/week" },
      "Consumables": { "Toner (Black)": "17,500 prints", "Toner (Cyan/Magenta/Yellow)": "8,000 prints" },
    },
    isNew: true,
  },
  {
    id: "m-c2000",
    name: "RICOH M C2000",
    category: "printers",
    subcategory: "Colour A4",
    brand: "ricoh",
    image: imgM320f,
    description: "Compact 32 ppm A4 colour all-in-one with 1,200 dpi, 550-sheet capacity, and 0.423 kWh TEC.",
    features: ["32 ppm Print Speed", "Print, Copy, Scan, Fax", "1,200 × 1,200 dpi Resolution", "550-Sheet Paper Capacity", "TEC 0.423 kWh/week", "Compact Design"],
    specs: { "Print Speed": "32 ppm", "Resolution": "1,200 × 1,200 dpi", "Paper Size": "A4", "Functions": "Print, Copy, Scan, Fax", "Paper Capacity": "Up to 550 sheets", "TEC": "0.423 kWh/week" },
  },
  {
    id: "m-c320fse",
    name: "RICOH M C320FSE",
    category: "printers",
    subcategory: "Colour A4",
    brand: "ricoh",
    image: imgMC320fw,
    description: "32 ppm A4 colour all-in-one with 30 ipm scan, 4.3-inch colour touch panel, and 0.33 kWh TEC.",
    features: ["32 ppm Print Speed", "30 ipm Simplex Scan", "4.3\" Colour Touch Panel", "512 MB RAM", "TEC 0.33 kWh/week", "Enhanced Security"],
    specs: { "Print Speed": "32 ppm", "Resolution": "1,200 × 1,200 dpi", "Paper Size": "A4", "Functions": "Print, Copy, Scan, Fax", "Scan Speed": "30 ipm (simplex)", "RAM": "512 MB", "TEC": "0.33 kWh/week" },
  },
  {
    id: "m-c320fw",
    name: "RICOH M C320FW",
    category: "printers",
    subcategory: "Colour A4",
    brand: "ricoh",
    image: imgMC320fw,
    description: "32 ppm A4 colour all-in-one with Wi-Fi, 30 ipm scan, 4.3-inch touch panel, and 0.33 kWh TEC.",
    features: ["32 ppm Print Speed", "Wi-Fi Connectivity", "30 ipm Simplex Scan", "4.3\" Colour Touch Panel", "512 MB RAM", "TEC 0.33 kWh/week"],
    specs: { "Print Speed": "32 ppm", "Resolution": "1,200 × 1,200 dpi", "Paper Size": "A4", "Functions": "Print, Copy, Scan, Fax", "Scan Speed": "30 ipm (simplex)", "RAM": "512 MB", "TEC": "0.33 kWh/week", "Wi-Fi": "Yes" },
  },
];
