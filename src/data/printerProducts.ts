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

// Highlight images
import hlCloudTech from "@/assets/printers/highlights/cloud-technology.jpg";
import hlSmallPowerful from "@/assets/printers/highlights/small-powerful.jpg";
import hlEcoDevices from "@/assets/printers/highlights/eco-friendly-devices.jpg";
import hlAlwaysCurrentTech from "@/assets/printers/highlights/always-current-tech.webp";
import hlSmartPanel from "@/assets/printers/highlights/smart-operation-panel.webp";
import hlSustainability from "@/assets/printers/highlights/sustainability.webp";
import hlSustainabilityC300 from "@/assets/printers/highlights/sustainability-c300.webp";
import hlSmartDeviceConnector from "@/assets/printers/highlights/smart-device-connector.jpg";
import hlIntuitivePerformance from "@/assets/printers/highlights/intuitive-performance.png";
import hlEcoDesign from "@/assets/printers/highlights/eco-design.png";
import hlSmartPanelClose from "@/assets/printers/highlights/smart-panel-close.jpg";
import hlAlwaysOnSecurity from "@/assets/printers/highlights/always-on-security.png";

export const printerProducts: Product[] = [
  // ── B&W All-in-One Printers ────────────────────────────────
  {
    id: "im-350fse",
    name: "RICOH IM 350FSE",
    category: "printers",
    subcategory: "B&W All-in-One",
    brand: "ricoh",
    image: imgIm350fse,
    gallery: [imgIm350fse, imgIm350fseRight],
    tagline: "B&W Multifunction Printer",
    colorType: "bw",
    description: "Fast 35 ppm A4 mono all-in-one with fax, quiet operation, and low energy consumption of 0.5 kWh TEC.",
    overview: "Introducing the IM 350FSE, a versatile and intelligent all-in-one printer designed to enhance your workflow and efficiency. Leveraging cloud technology, the advanced device automates daily document tasks, freeing you to focus on essential business operations. Perfectly suited for dynamic work environments, the IM 350FSE seamlessly integrates with existing systems to deliver exceptional performance and reliability.",
    highlights: [
      { title: "Benefit from Cloud Technology Innovation", text: "The IM 350FSE intelligent all-in-one printer leverages cloud technology to automate daily document tasks, allowing you to concentrate on essential business operations. Users can easily and securely print and scan from their mobile devices, with the flexibility to scan documents in colour to cloud storage. This seamless integration enables printing from any device with secure connections, enhancing both productivity and convenience in a fast-paced work environment.", image: hlCloudTech },
      { title: "Small but Powerful", text: "This intelligent all-in-one mono device is compact in design without compromising on all the benefits you expect from a Ricoh device. The low noise design makes this device suitable for small spaces and private offices spaces. Not just a black and white printer, the IM 350FSE also has full colour scan capabilities for more flexibility.", image: hlSmallPowerful },
      { title: "Boost Sustainability with the Eco-Friendly IM 350FSE", text: "Ensure your print devices fit your sustainability objectives with the IM 350FSE – Blue Angel Mark certified, one of the highest standards of environmental, health and functional quality. Packed full of features to save energy, toner and costs, the A4 black and white intelligent device features a TEC value of 0.5kWh and EcoMode, the energy efficient timer setting for sleep mode to reduce energy waste.", image: hlEcoDevices },
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
    subcategory: "B&W All-in-One",
    brand: "ricoh",
    image: imgIm370,
    gallery: [imgIm370, imgIm370Right, imgIm370Detail],
    tagline: "B&W Multifunction Printer",
    colorType: "bw",
    description: "37 ppm A4 mono all-in-one with 1,200 dpi scan resolution and industry-leading low 0.37 kWh energy consumption.",
    overview: "The IM 370 unlocks new value in your print infrastructure with secure, cloud-based printing and scanning. Remote collaboration is easier than ever before with a host of integrated software options. This intelligent A4 mono device offers an output speed of 37 ppm and the added flexibility of A3 capabilities, helping you make the most of your office space. Made using recycled plastics and offering industry leading low TEC value (0.37 kWh), it is the perfect addition to any future-focused business.",
    highlights: [
      { title: "RICOH Always Current Technology", text: "RICOH Always Current Technology is a firmware delivered directly to your device, ensuring optimal efficiency and security. With the ability to add new apps without the need for new hardware, you can expand your device capabilities and create a true digital workplace. It provides scalable intelligence that can optimise workflows, allowing you to stay prepared for whatever the future holds.", image: hlAlwaysCurrentTech },
      { title: "RICOH Smart Operation Panel", text: "With the intuitive 10.1 inch Smart Operation Panel, complete with soft-key operation, your Ricoh multi-function printer is even easier to touch, swipe and get the job done, thanks to a range of helpful features, including a completely customisable home screen and full internet browser capability.", image: hlSmartPanel },
      { title: "Improve Your Carbon Footprint", text: "Ricoh devices prove that it's possible to achieve more with less. By adopting a smaller footprint, the device offers enhanced functionality while reducing plastic waste and energy consumption, resulting in a lower environmental impact. This all-in-one printer is designed to deliver optimal performance in an eco-friendly and compact design.", image: hlSustainability },
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
    subcategory: "B&W All-in-One",
    brand: "ricoh",
    image: imgIm370f,
    gallery: [imgIm370f, imgIm370fRight, imgIm370fLeft],
    tagline: "B&W Multifunction Printer",
    colorType: "bw",
    description: "37 ppm A4 mono all-in-one with fax, integrated software updates, and low 0.381 kWh energy consumption.",
    overview: "The IM 370F offers your organisation a productivity boost with easier access to dynamic and collaborative digital working practices. Access the latest cloud-based solutions for maximum security and seamless workflows. Optimise your office space with a compact mono device delivering fast, high quality output and the added flexibility of A3 scan and copy capabilities. This intelligent all-rounder also helps you do business responsibly, with industry leading low Typical Energy Consumption (TEC) values.",
    highlights: [
      { title: "Secure Your Data", text: "Intelligent devices fortified with a resilient operating system and up-to-date security features such as encryption, authentication, restricted print output access and data overwrite. RICOH Always Current Technology ensures continuous protection.", image: hlAlwaysOnSecurity },
      { title: "Reduce Environmental Impact", text: "Smaller footprint with enhanced functionality while reducing plastic waste and energy consumption. Designed to deliver optimal performance in an eco-friendly and compact design.", image: hlSustainability },
      { title: "Smart Operation Panel", text: "10.1-inch Smart Operation Panel with soft-key operation, customisable home screen and full internet browser capability for high quality printing and low running costs.", image: hlSmartPanel },
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
    subcategory: "B&W All-in-One",
    brand: "ricoh",
    image: imgIm430fse,
    gallery: [imgIm430fse, imgIm430fseRight, imgIm430fseLeft, imgIm430fseDetail],
    tagline: "B&W Multifunction Printer",
    colorType: "bw",
    description: "Fast 43 ppm A4 mono all-in-one with quiet operation, duplex scanning at 80 ipm, and 0.59 kWh TEC.",
    overview: "This intelligent black and white device offers quick print speeds, fax and colour scan capability, making it an ideal choice for any dynamic work environment. The IM 430FSE delivers exceptional performance and reliability, helping you streamline your daily document tasks and focus on essential business operations.",
    highlights: [
      { title: "Eco-Friendly Design", text: "Certified with the Blue Angel Mark, the IM 430FSE aligns with sustainability goals. With a TEC value of 0.59kWh and eco-mode for automated sleep mode, it significantly reduces energy waste.", image: hlEcoDevices },
      { title: "Compact and Versatile", text: "This all-in-one device is compact while offering features typical of a Ricoh device. Low noise output makes it suitable for small and individual office spaces, plus fax and full colour scanning.", image: hlSmallPowerful },
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
    subcategory: "B&W All-in-One",
    brand: "ricoh",
    image: imgIm2702,
    gallery: [imgIm2702, imgIm2702Right, imgIm2702Left],
    tagline: "B&W Multifunction Printer",
    colorType: "bw",
    description: "27 ppm A4 mono multifunction printer with print, copy, scan and fax. Paper capacity up to 1,600 sheets.",
    overview: "Endlessly versatile, the IM 2702 prints and copies in black and white, and scans in colour. Fax functionality is also available as an option. The ARDF quickly scans double-sided originals and multipage documents are printed at speed. With up to three trays on line, it is easy to print onto different paper sizes and to feed envelopes and labels. Localisation is simple as the MFP supports a variety of languages, including Arabic. And, with the IM 2702 easy to install and self-maintain, reliable performance is guaranteed.",
    highlights: [
      { title: "RICOH Intelligent Support", text: "A multi-faceted service platform that gives instant assistance and enhanced customer experience with a comprehensive suite of tools, diagnostics and help.", image: hlSmartPanelClose },
      { title: "Smart Operation Panel", text: "10.1-inch Smart Operation Panel with soft-key operation, customisable home screen and full internet browser capability.", image: hlSmartPanel },
      { title: "Outstanding Security", text: "Security is in the DNA of our entire digital workplace portfolio. Ricoh enables secure access to data whilst ensuring security features don't hinder productivity.", image: hlAlwaysOnSecurity },
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
    subcategory: "B&W All-in-One",
    brand: "ricoh",
    image: imgM2701,
    tagline: "B&W Multifunction Printer",
    colorType: "bw",
    description: "27 ppm A4 mono all-in-one with print, copy, scan and fax. Paper capacity up to 1,600 sheets for busy workgroups.",
    features: ["27 ppm Print Speed", "Print, Copy, Scan, Fax", "Paper Capacity up to 1,600 Sheets", "600 × 600 dpi Resolution", "Compact Design", "Low Power Consumption"],
    specs: { "Print Speed": "27 ppm", "Resolution": "600 × 600 dpi", "Paper Size": "A4", "Functions": "Print, Copy, Scan, Fax", "Paper Capacity": "Up to 1,600 sheets", "Power": "< 1,550 W" },
  },
  {
    id: "m-320",
    name: "RICOH M 320",
    category: "printers",
    subcategory: "B&W All-in-One",
    brand: "ricoh",
    image: imgM320,
    tagline: "B&W Multifunction Printer",
    colorType: "bw",
    description: "Compact 32 ppm A4 mono all-in-one with 1,200 dpi resolution, 550-sheet paper capacity, and ultra-low 0.423 kWh energy.",
    features: ["32 ppm Print Speed", "Print, Copy, Scan, Fax", "1,200 × 1,200 dpi Resolution", "550-Sheet Paper Capacity", "TEC 0.423 kWh/week", "Compact Desktop Design"],
    specs: { "Print Speed": "32 ppm", "Resolution": "1,200 × 1,200 dpi", "Paper Size": "A4", "Functions": "Print, Copy, Scan, Fax", "Paper Capacity": "Up to 550 sheets", "TEC": "0.423 kWh/week" },
  },
  {
    id: "m-320f",
    name: "RICOH M 320F",
    category: "printers",
    subcategory: "B&W All-in-One",
    brand: "ricoh",
    image: imgM320f,
    tagline: "B&W Multifunction Printer",
    colorType: "bw",
    description: "32 ppm A4 mono all-in-one with fax, 1,200 dpi print, 550-sheet capacity, and 0.423 kWh TEC.",
    features: ["32 ppm Print Speed", "Print, Copy, Scan, Fax", "1,200 × 1,200 dpi Resolution", "550-Sheet Paper Capacity", "TEC 0.423 kWh/week", "Compact Desktop Design"],
    specs: { "Print Speed": "32 ppm", "Resolution": "1,200 × 1,200 dpi", "Paper Size": "A4", "Functions": "Print, Copy, Scan, Fax", "Paper Capacity": "Up to 550 sheets", "TEC": "0.423 kWh/week" },
  },
  {
    id: "m-320fse",
    name: "RICOH M 320FSE",
    category: "printers",
    subcategory: "B&W All-in-One",
    brand: "ricoh",
    image: imgM320fse,
    tagline: "B&W Multifunction Printer",
    colorType: "bw",
    description: "32 ppm A4 mono all-in-one with fax, enhanced security, 1,200 dpi, and ultra-low 0.423 kWh energy consumption.",
    features: ["32 ppm Print Speed", "Print, Copy, Scan, Fax", "Enhanced Security Features", "1,200 × 1,200 dpi Resolution", "550-Sheet Paper Capacity", "TEC 0.423 kWh/week"],
    specs: { "Print Speed": "32 ppm", "Resolution": "1,200 × 1,200 dpi", "Paper Size": "A4", "Functions": "Print, Copy, Scan, Fax", "Paper Capacity": "Up to 550 sheets", "TEC": "0.423 kWh/week" },
  },
  {
    id: "m-320se",
    name: "RICOH M 320SE",
    category: "printers",
    subcategory: "B&W All-in-One",
    brand: "ricoh",
    image: imgM320se,
    tagline: "B&W Multifunction Printer",
    colorType: "bw",
    description: "32 ppm A4 mono all-in-one (print, copy, scan — no fax) with enhanced security and 0.423 kWh TEC.",
    features: ["32 ppm Print Speed", "Print, Copy, Scan", "Enhanced Security Features", "1,200 × 1,200 dpi Resolution", "550-Sheet Paper Capacity", "TEC 0.423 kWh/week"],
    specs: { "Print Speed": "32 ppm", "Resolution": "1,200 × 1,200 dpi", "Paper Size": "A4", "Functions": "Print, Copy, Scan", "Paper Capacity": "Up to 550 sheets", "TEC": "0.423 kWh/week" },
  },

  // ── Colour All-in-One Printers ─────────────────────────────
  {
    id: "im-c300",
    name: "RICOH IM C300",
    category: "printers",
    subcategory: "Colour All-in-One",
    brand: "ricoh",
    image: imgImC300,
    gallery: [imgImC300, imgImC300Left, imgImC300Right, imgImC300Detail],
    tagline: "Color Laser Multifunction Printer",
    colorType: "color",
    description: "30 ppm A4 colour all-in-one with 1,200 dpi, up to 2,000-sheet paper capacity, and low 0.34 kWh TEC.",
    overview: "This colour MFP has a smart touch-screen control panel and is always running the latest technology. Software that automatically updates, along with the ability to add additional functionality that your business may need in future. Your MFP is always ready to operate. You can print, copy and scan more materials, faster and remotely from wherever you are. The IM C300 is a high performance, durable and powerful A4 colour MFP and the first Ricoh A4 device to feature Ricoh 'Always current technology'.",
    highlights: [
      { title: "Sustainable Performance", text: "Designed for eco-friendly performance, it features low power consumption, energy-saving modes and minimal heat emissions. With quiet operation for a comfortable workspace and auto-off timers to reduce energy use.", image: hlSustainabilityC300 },
      { title: "Smart Operation Panel", text: "10.1-inch Smart Operation Panel with soft-key operation, customisable home screen and full internet browser capability.", image: hlSmartPanel },
      { title: "Secure Your Data", text: "Devices fortified with a resilient operating system and up-to-date security features such as encryption, authentication, restricted print output access and data overwrite.", image: hlAlwaysOnSecurity },
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
    subcategory: "Colour All-in-One",
    brand: "ricoh",
    image: imgImC300f,
    gallery: [imgImC300f, imgImC300fLeft, imgImC300fRight, imgImC300fDetail],
    tagline: "Color Laser Multifunction Printer",
    colorType: "color",
    description: "30 ppm A4 colour all-in-one with fax, 1,200 dpi, paper capacity up to 2,000 sheets, and 0.34 kWh TEC.",
    overview: "The IM C300F is an intelligent and powerful A4 colour MFP and the first Ricoh A4 device to feature Ricoh 'Always current technology' ensuring it will always utilise the most up-to-date technology. Designed to improve your workflow it effortlessly prints, copies, scans and faxes more materials, faster and remotely from wherever you are.",
    highlights: [
      { title: "Sustainable Design", text: "Designed for eco-friendly performance, it features low power consumption, energy-saving modes and minimal heat emissions. With quiet operation for a comfortable workspace and auto-off timers to reduce energy use, it helps lower environmental impact.", image: hlSustainabilityC300 },
      { title: "Ricoh Smart Device Connector", text: "Provides an easier and faster way to send documents for printing and collect scanned images using your Apple or NFC-compatible Android-based smart device. Quickly establish a secure connection without the need to register your device or join your organisation's network.", image: hlSmartDeviceConnector },
      { title: "Ricoh Always Current Technology", text: "RICOH Always Current Technology is a firmware delivered directly to your device, ensuring optimal efficiency and security. With the ability to add new apps without the need for new hardware, you can expand your device capabilities and create a true digital workplace.", image: hlAlwaysCurrentTech },
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
    subcategory: "Colour All-in-One",
    brand: "ricoh",
    image: imgImC320f,
    gallery: [imgImC320f, imgImC320fLeft, imgImC320fRight],
    tagline: "Color Laser Multifunction Printer",
    colorType: "color",
    description: "32 ppm A4 colour all-in-one with 60 ipm duplex scan, 7-inch Smart Operation Panel, and 0.30 kWh TEC.",
    overview: "The IM C320F All-in-one printer that offers high-quality printing, scanning, copying, and faxing. Designed to fit small spaces with a compact and sleek design that blends in with any office environment. It features low energy consumption and eco-friendly materials, making the IM C320F ideal for organisations that care about sustainability.",
    highlights: [
      { title: "Compact & Powerful", text: "Space-saving solution with 32ppm single-sided and 16ppm double-sided print speed, plus enhanced scan speed of up to 60 ipm duplex for quick digitisation.", image: hlSmallPowerful },
      { title: "Eco-Friendly Pioneer", text: "Over 50% post-consumer recycled plastic materials, 100% plastic-free toner packaging, and low TEC value of 0.30kWh. Blue Angel Mark certified.", image: hlEcoDesign },
      { title: "Always Current Technology", text: "Download the latest software updates and security patches directly to your device, ensuring it is always up to date, secure and performing at its best.", image: hlAlwaysCurrentTech },
      { title: "Smart Operation Panel", text: "7-inch Smart Operation Panel with capacitive touch supporting RICOH Intelligent Support, Smart Integration, and Always Current Technology.", image: hlSmartPanelClose },
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
    subcategory: "Colour All-in-One",
    brand: "ricoh",
    image: imgImC400f,
    tagline: "Color Laser Multifunction Printer",
    colorType: "color",
    description: "43 ppm A4 colour all-in-one with 1,200 dpi, up to 2,300-sheet capacity, and 0.48 kWh TEC.",
    features: ["43 ppm Colour Print Speed", "Print, Copy, Scan, Fax", "1,200 × 1,200 dpi Resolution", "Up to 2,300 Sheets", "TEC 0.48 kWh/week", "Cloud Integration"],
    specs: { "Print Speed": "43 ppm", "Resolution": "1,200 × 1,200 dpi", "Paper Size": "A4", "Functions": "Print, Copy, Scan, Fax", "Paper Capacity": "Up to 2,300 sheets", "TEC": "0.48 kWh/week" },
  },
  {
    id: "im-c401f",
    name: "RICOH IM C401F",
    category: "printers",
    subcategory: "Colour All-in-One",
    brand: "ricoh",
    image: imgImC401f,
    gallery: [imgImC401f, imgImC401fRight, imgImC401fDetail],
    tagline: "Color Laser Multifunction Printer",
    colorType: "color",
    description: "40 ppm colour / 43 ppm B&W A4 all-in-one with 80 ipm duplex scan, 1,200 dpi, and 0.48 kWh TEC.",
    overview: "Experience cutting-edge technology with the IM C401F, designed to deliver exceptional performance and reliability. Whether you're a small business or a large enterprise, this A4 colour all-in-one intelligent device caters to all your printing needs with speed, efficiency and durability. Built for high-demand environments, the IM C401F ensures long-lasting performance and exceptional image quality.",
    highlights: [
      { title: "Intuitive, Fast and Seamless Performance", text: "Enhance productivity with the IM C401F, designed for speed, efficiency and ease of use. Print at an impressive 40 pages per minute, reducing wait times and keeping workflows smooth. Enjoy rapid scanning at up to 80 images per minute (duplex), ensuring seamless document processing while 6GB RAM enables effortless multitasking.", image: hlIntuitivePerformance },
      { title: "Energy-Efficient and Eco-Friendly Design", text: "Reduce your environmental impact with the IM C401F. This all-in-one consumes low energy, with a TEC range of just 0.47kWh reducing power usage. It includes a reduction in plastic packaging and uses up to 13% post-consumer recycled materials. Blue Angel Mark certified.", image: hlEcoDesign },
      { title: "Intuitive Control at Your Fingertips", text: "Experience seamless device interaction with the 10.1-inch Smart Operation Panel. Its user-friendly interface simplifies navigation and streamlines workflows for enhanced productivity.", image: hlSmartPanelClose },
      { title: "Always-On Security", text: "The IM C401F is built with robust security features to safeguard your sensitive information. Equipped with Trusted Platform Module (TPM) 2.0, it encrypts critical data and protects against cyber threats. RICOH Always Current Technology ensures continuous protection against emerging risks.", image: hlAlwaysOnSecurity },
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
    subcategory: "Colour All-in-One",
    brand: "ricoh",
    image: imgImC401srf,
    gallery: [imgImC401srf, imgImC401srfRight, imgImC401srfTop],
    tagline: "Color Laser Multifunction Printer",
    colorType: "color",
    description: "40 ppm colour / 43 ppm B&W A4 all-in-one with staple finisher, 80 ipm duplex scan, and 0.48 kWh TEC.",
    overview: "Engineered to provide exceptional performance and reliability. Suitable for small businesses to large enterprises, this A4 colour all-in-one intelligent device meets all your printing requirements with speed, efficiency, and durability. Designed for high-demand environments, the IM C401SRF guarantees long-lasting performance and outstanding image quality with online finishing capability.",
    highlights: [
      { title: "Continuous Security", text: "Utilising TPM 2.0 to encrypt critical data and defend against cyber threats. RICOH Always Current Technology ensures continuous protection against emerging risks.", image: hlAlwaysOnSecurity },
      { title: "Eco-Friendly Colour Print", text: "TEC of 0.48kWh, reduced plastic packaging, up to 11% post-consumer recycled materials. Blue Angel Mark certified.", image: hlEcoDesign },
      { title: "Intuitive & Fast Performance", text: "40 ppm print speed with 80 ipm duplex scanning, 6GB RAM, built-in Wi-Fi and internal finisher staple option for streamlined document handling.", image: hlIntuitivePerformance },
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
    subcategory: "Colour All-in-One",
    brand: "ricoh",
    image: imgM320f,
    tagline: "Color Laser Multifunction Printer",
    colorType: "color",
    description: "Compact 32 ppm A4 colour all-in-one with 1,200 dpi, 550-sheet capacity, and 0.423 kWh TEC.",
    features: ["32 ppm Print Speed", "Print, Copy, Scan, Fax", "1,200 × 1,200 dpi Resolution", "550-Sheet Paper Capacity", "TEC 0.423 kWh/week", "Compact Design"],
    specs: { "Print Speed": "32 ppm", "Resolution": "1,200 × 1,200 dpi", "Paper Size": "A4", "Functions": "Print, Copy, Scan, Fax", "Paper Capacity": "Up to 550 sheets", "TEC": "0.423 kWh/week" },
  },
  {
    id: "m-c320fse",
    name: "RICOH M C320FSE",
    category: "printers",
    subcategory: "Colour All-in-One",
    brand: "ricoh",
    image: imgMC320fw,
    tagline: "Color Laser Multifunction Printer",
    colorType: "color",
    description: "32 ppm A4 colour all-in-one with 30 ipm scan, 4.3-inch colour touch panel, and 0.33 kWh TEC.",
    features: ["32 ppm Print Speed", "30 ipm Simplex Scan", "4.3\" Colour Touch Panel", "512 MB RAM", "TEC 0.33 kWh/week", "Enhanced Security"],
    specs: { "Print Speed": "32 ppm", "Resolution": "1,200 × 1,200 dpi", "Paper Size": "A4", "Functions": "Print, Copy, Scan, Fax", "Scan Speed": "30 ipm (simplex)", "RAM": "512 MB", "TEC": "0.33 kWh/week" },
  },
  {
    id: "m-c320fw",
    name: "RICOH M C320FW",
    category: "printers",
    subcategory: "Colour All-in-One",
    brand: "ricoh",
    image: imgMC320fw,
    tagline: "Color Laser Multifunction Printer",
    colorType: "color",
    description: "32 ppm A4 colour all-in-one with Wi-Fi, 30 ipm scan, 4.3-inch touch panel, and 0.33 kWh TEC.",
    features: ["32 ppm Print Speed", "Wi-Fi Connectivity", "30 ipm Simplex Scan", "4.3\" Colour Touch Panel", "512 MB RAM", "TEC 0.33 kWh/week"],
    specs: { "Print Speed": "32 ppm", "Resolution": "1,200 × 1,200 dpi", "Paper Size": "A4", "Functions": "Print, Copy, Scan, Fax", "Scan Speed": "30 ipm (simplex)", "RAM": "512 MB", "TEC": "0.33 kWh/week", "Wi-Fi": "Yes" },
  },
];
