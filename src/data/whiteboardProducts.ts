import type { Product } from "./products";
import imgA6510 from "@/assets/whiteboards/a6510.webp";
import imgA6510Detail from "@/assets/whiteboards/a6510-detail.webp";
import imgA6510Detail2 from "@/assets/whiteboards/a6510-detail2.webp";
import imgA6510Back from "@/assets/whiteboards/a6510-back.webp";
import imgA7510 from "@/assets/whiteboards/a7510.webp";
import imgA7510Side from "@/assets/whiteboards/a7510-side.webp";
import imgA7510Detail from "@/assets/whiteboards/a7510-detail.webp";
import imgA7510Back from "@/assets/whiteboards/a7510-back.webp";
import imgA8610 from "@/assets/whiteboards/a8610.webp";
import imgA8610Side from "@/assets/whiteboards/a8610-side.webp";
import imgA8610Detail from "@/assets/whiteboards/a8610-detail.webp";
import imgA8610Back from "@/assets/whiteboards/a8610-back.webp";

// Highlight images
import hlProductivity from "@/assets/whiteboards/highlights/productivity.jpg";
import hlCollaboration from "@/assets/whiteboards/highlights/collaboration.jpg";
import hlCustomisation from "@/assets/whiteboards/highlights/customisation.jpg";
import hlEcoFriendly from "@/assets/whiteboards/highlights/eco-friendly.jpg";

const sharedHighlights = [
  {
    title: "Enhance Productivity",
    text: "The RICOH IWB A Series simplifies business workflows, allowing employees to focus on essential tasks and save time with easy-to-use features. IWBs integrate with productivity tools, improving project management and reducing miscommunication. In classrooms, IWBs engage students with interactive lessons and instant feedback.",
    image: hlProductivity,
  },
  {
    title: "Empower Collaboration",
    text: "Share screen images and annotations in real-time so team members can collaborate more effectively, regardless of their location. The interactive features make it easier to communicate ideas visually, leading to more dynamic and productive meetings.",
    image: hlCollaboration,
  },
  {
    title: "Customise Your Environment",
    text: "Ricoh's open architecture allows businesses to customise and integrate the whiteboard into their existing systems, ensuring it fits perfectly within the company's IT ecosystem — from small meeting rooms to large conference spaces.",
    image: hlCustomisation,
  },
  {
    title: "Reduce Environmental Impact",
    text: "Interactive whiteboards offer a sustainable alternative to traditional paper-based methods by digitising lessons and notes, significantly reducing paper consumption. RICOH Interactive whiteboards are designed with energy efficiency in mind.",
    image: hlEcoFriendly,
  },
];

const sharedFeatures = [
  "Embedded Android OS & Google EDLA Certified",
  "Up to 40 Multi-Touch Points",
  "Expandable with Windows Controller",
  "Wired & Wireless Connectivity",
  "Built-in Whiteboard App & Google Play Store",
  "Infrared Touch with Zero Bonding",
  "50,000-Hour LED Lifetime",
  "OPS Slot for Expandability",
  "Wi-Fi 5/6 & Bluetooth 5.2",
  "Energy Efficient & Eco-Friendly",
];

export const whiteboardProducts: Product[] = [
  {
    id: "a6510-whiteboard",
    name: "RICOH A6510 Interactive Whiteboard",
    category: "whiteboards",
    brand: "ricoh",
    image: imgA6510,
    gallery: [imgA6510, imgA6510Detail, imgA6510Detail2, imgA6510Back],
    description:
      "65-inch 4K UHD interactive whiteboard with embedded Android OS, Google EDLA certified, and up to 40 touch points — ideal for huddle rooms and classrooms.",
    overview:
      "In today's dynamic hybrid work and learning environments, leveraging advanced technology is essential for boosting productivity and fostering innovation. The RICOH Interactive Whiteboard A6510 is a cutting-edge tool for modern workplaces, offering state-of-the-art features designed to elevate communication and streamline collaboration, no matter where you are.",
    highlights: sharedHighlights,
    features: ['65" 4K UHD Display (3840 × 2160)', ...sharedFeatures],
    specs: {},
    specsGrouped: {
      General: {
        "Front Interface": "HDMI ×1, USB-C ×1, USB-A 3.0 ×2, USB-B 3.0 ×1, MIC In ×1",
        "Rear Interface": "USB-A ×3, USB-C ×1, USB-B ×3, HDMI In ×2, DisplayPort ×1, OPS Slot ×1, RS232 ×1, Audio Out ×1, Line out/Headphone ×1, SPDIF ×1, HDMI Out ×1, LAN 1000Base-T ×2",
        "Pre-installed Apps": "Whiteboard, Picture-In-Picture, Eshare, Browser, Settings, Google Play Store, Chrome, Gmail, YouTube, Drive, Meet, Photos",
        "Dimensions (W×D×H)": "1,513 × 93 × 953 mm",
        "Package Size (W×D×H)": "1,630 × 185 × 1,057 mm",
        Weight: "40 kg",
        "Housing Material": "Aluminium / Metal plate",
        "Housing Colour": "Black / Black",
        VESA: "4-M8 screw hole 600 × 400 mm",
      },
      "Display Panel": {
        "Panel Size": '65" wide',
        "Effective Area (W×H)": "1,428 × 803 mm",
        Resolution: "3,840 × 2,160 (4K UHD)",
        "Colours (max)": "1,070,000,000",
        "Brightness (max)": "400 cd/m²",
        "Contrast Ratio": "5,000 : 1",
        "Pixel Pitch": "0.124 × 0.372 mm",
        "Response (grey to grey)": "6.5 ms",
        "Refresh Rate": "60 Hz",
        "Viewing Angle (H/V)": "178° / 178°",
        "LED Lifetime": "50,000 hours",
      },
      "Touch System": {
        "Touch Technology": "Infrared Touch Frame / Zero Bonding",
        "Accuracy": "1 mm",
        "Multi Touch OS": "Win11/10/8/7/XP, Android",
        "Single Touch OS": "Linux, Mac OS X, Chrome",
        "Glass Thickness (incl. AR coating)": "3.2 mm",
        "Maximum Touch Points": "40",
        Coating: "Anti-glare, Anti-fingerprint",
        Hardness: "8H",
      },
      Ecology: {
        "Power (Standard Mode)": "< 200 W",
        "Power (Eco Mode)": "< 133 W",
        "Power (Standby)": "< 0.5 W",
        "Power (with OPS)": "< 380 W",
        "Operating Temperature": "0 – 40 °C",
        "Operating Humidity": "20 – 80%",
        "Altitude Limitation": "Lower than 5,000 m",
        "Max Daily Operation": "18 hours",
        "Storage Temperature": "-10°C ~ +50°C",
        "Storage Humidity": "15% ~ 80% RH Non-Condensing",
      },
      "Controller / Electrical": {
        OS: "Android 13.0 EDLA",
        "Audio Output Power": "15 W × 2",
        RAM: "8 GB",
        "ROM Storage": "128 GB",
        "Wi-Fi": "Wi-Fi 5 Module, Wi-Fi 6 Module",
        Bluetooth: "BT 5.2",
      },
      Accessories: {
        "Included Items": "Power cable, Touch pen ×2, Read this first sheet, Quick guide sheet, Batteries AAA ×2, Remote control, USB-C cable (2m), HDMI 2.0 cable (3m), USB A-B 3.0 cable (3m), Plastic clamp (3+3 pcs)",
      },
    },
    isFeatured: true,
    isNew: true,
  },
  {
    id: "a7510-whiteboard",
    name: "RICOH A7510 Interactive Whiteboard",
    category: "whiteboards",
    brand: "ricoh",
    image: imgA7510,
    gallery: [imgA7510, imgA7510Side, imgA7510Detail, imgA7510Back],
    description:
      "75-inch 4K UHD interactive whiteboard with embedded Android OS, Google EDLA certified, and up to 40 touch points — perfect for meeting rooms and large classrooms.",
    overview:
      "The RICOH Interactive Whiteboard A7510 is a cutting-edge tool for modern workplaces, offering state-of-the-art features designed to elevate communication and streamline collaboration. With real-time screen sharing, annotations, and customisable open architecture, it fits seamlessly into any IT ecosystem.",
    highlights: sharedHighlights,
    features: ['75" 4K UHD Display (3840 × 2160)', ...sharedFeatures],
    specs: {},
    specsGrouped: {
      General: {
        "Front Interface": "HDMI ×1, USB-C ×1, USB-A 3.0 ×2, USB-B 3.0 ×1, MIC In ×1",
        "Rear Interface": "USB-A ×3, USB-C ×1, USB-B ×3, HDMI In ×2, DisplayPort ×1, OPS Slot ×1, RS232 ×1, Audio Out ×1, Line out/Headphone ×1, SPDIF ×1, HDMI Out ×1, LAN 1000Base-T ×2",
        "Pre-installed Apps": "Whiteboard, Picture-In-Picture, Eshare, Browser, Settings, Google Play Store, Chrome, Gmail, YouTube, Drive, Meet, Photos",
        "Dimensions (W×D×H)": "1,735 × 92 × 1,077 mm",
        "Package Size (W×D×H)": "1,859 × 227 × 1,190 mm",
        Weight: "52 kg",
        "Housing Material": "Aluminium / Metal plate",
        "Housing Colour": "Black / Black",
        VESA: "4-M8 screw hole 800 × 400 mm",
      },
      "Display Panel": {
        "Panel Size": '75" wide',
        "Effective Area (W×H)": "1,650 × 928 mm",
        Resolution: "3,840 × 2,160 (4K UHD)",
        "Colours (max)": "1,070,000,000",
        "Brightness (max)": "400 cd/m²",
        "Contrast Ratio": "5,500 : 1",
        "Pixel Pitch": "0.14325 × 0.42975 mm",
        "Response (grey to grey)": "6.5 ms",
        "Refresh Rate": "60 Hz",
        "Viewing Angle (H/V)": "178° / 178°",
        "LED Lifetime": "50,000 hours",
      },
      "Touch System": {
        "Touch Technology": "Infrared Touch Frame / Zero Bonding",
        "Accuracy": "1 mm",
        "Multi Touch OS": "Win11/10/8/7/XP, Android",
        "Single Touch OS": "Linux, Mac OS X, Chrome",
        "Glass Thickness (incl. AR coating)": "3.2 mm",
        "Maximum Touch Points": "40",
        Coating: "Anti-glare, Anti-fingerprint",
        Hardness: "8H",
      },
      Ecology: {
        "Power (Standard Mode)": "< 200 W",
        "Power (Eco Mode)": "< 150 W",
        "Power (Standby)": "< 0.5 W",
        "Power (with OPS)": "< 420 W",
        "Operating Temperature": "0 – 40 °C",
        "Operating Humidity": "20 – 80%",
        "Altitude Limitation": "Lower than 5,000 m",
        "Max Daily Operation": "18 hours",
        "Storage Temperature": "-10°C ~ +50°C",
        "Storage Humidity": "15% ~ 80% RH Non-Condensing",
      },
      "Controller / Electrical": {
        OS: "Android 13.0 EDLA",
        "Audio Output Power": "15 W × 2",
        RAM: "8 GB",
        "ROM Storage": "128 GB",
        "Wi-Fi": "Wi-Fi 5 Module, Wi-Fi 6 Module",
        Bluetooth: "BT 5.2",
      },
      Accessories: {
        "Included Items": "Power cable, Touch pen ×2, Read this first sheet, Quick guide sheet, Batteries AAA ×2, Remote control, USB-C cable (2m), HDMI 2.0 cable (3m), USB A-B 3.0 cable (3m), Plastic clamp (3+3 pcs)",
      },
    },
    isFeatured: true,
    isNew: true,
  },
  {
    id: "a8610-whiteboard",
    name: "RICOH A8610 Interactive Whiteboard",
    category: "whiteboards",
    brand: "ricoh",
    image: imgA8610,
    gallery: [imgA8610, imgA8610Side, imgA8610Detail, imgA8610Back],
    description:
      "86-inch 4K UHD interactive whiteboard with embedded Android OS, Google EDLA certified, and up to 40 touch points — designed for large conference rooms and auditoriums.",
    overview:
      "The RICOH Interactive Whiteboard A8610 is the largest in the A Series, delivering an immersive 86-inch display for maximum visibility in large spaces. With real-time collaboration features, customisable open architecture, and energy-efficient design, it transforms how teams work and learn.",
    highlights: sharedHighlights,
    features: ['86" 4K UHD Display (3840 × 2160)', ...sharedFeatures],
    specs: {},
    specsGrouped: {
      General: {
        "Front Interface": "HDMI ×1, USB-C ×1, USB-A 3.0 ×2, USB-B 3.0 ×1, MIC In ×1",
        "Rear Interface": "USB-A ×3, USB-C ×1, USB-B ×3, HDMI In ×2, DisplayPort ×1, OPS Slot ×1, RS232 ×1, Audio Out ×1, Line out/Headphone ×1, SPDIF ×1, HDMI Out ×1, LAN 1000Base-T ×2",
        "Pre-installed Apps": "Whiteboard, Picture-In-Picture, Eshare, Browser, Settings, Google Play Store, Chrome, Gmail, YouTube, Drive, Meet, Photos",
        "Dimensions (W×D×H)": "1,981 × 92 × 1,217 mm",
        "Package Size (W×D×H)": "2,119 × 225 × 1,320 mm",
        Weight: "65 kg",
        "Housing Material": "Aluminium / Metal plate",
        "Housing Colour": "Black / Black",
        VESA: "4-M8 screw hole 800 × 400 mm",
      },
      "Display Panel": {
        "Panel Size": '86" wide',
        "Effective Area (W×H)": "1,895 × 1,065 mm",
        Resolution: "3,840 × 2,160 (4K UHD)",
        "Colours (max)": "1,070,000,000",
        "Brightness (max)": "400 cd/m²",
        "Contrast Ratio": "4,000 : 1",
        "Pixel Pitch": "0.4935 × 0.4935 mm",
        "Response (grey to grey)": "8 ms",
        "Refresh Rate": "60 Hz",
        "Viewing Angle (H/V)": "178° / 178°",
        "LED Lifetime": "50,000 hours",
      },
      "Touch System": {
        "Touch Technology": "Infrared Touch Frame / Zero Bonding",
        "Accuracy": "1 mm",
        "Multi Touch OS": "Win11/10/8/7/XP, Android",
        "Single Touch OS": "Linux, Mac OS X, Chrome",
        "Glass Thickness (incl. AR coating)": "3.2 mm",
        "Maximum Touch Points": "40",
        Coating: "Anti-glare, Anti-fingerprint",
        Hardness: "8H",
      },
      Ecology: {
        "Power (Standard Mode)": "< 200 W",
        "Power (Eco Mode)": "< 168 W",
        "Power (Standby)": "< 0.5 W",
        "Power (with OPS)": "< 520 W",
        "Operating Temperature": "0 – 40 °C",
        "Operating Humidity": "20 – 80%",
        "Altitude Limitation": "Lower than 5,000 m",
        "Max Daily Operation": "18 hours",
        "Storage Temperature": "-10°C ~ +50°C",
        "Storage Humidity": "15% ~ 80% RH Non-Condensing",
      },
      "Controller / Electrical": {
        OS: "Android 13.0 EDLA",
        "Audio Output Power": "15 W × 2",
        RAM: "8 GB",
        "ROM Storage": "128 GB",
        "Wi-Fi": "Wi-Fi 5 Module, Wi-Fi 6 Module",
        Bluetooth: "BT 5.2",
      },
      Accessories: {
        "Included Items": "Power cable, Touch pen ×2, Read this first sheet, Quick guide sheet, Batteries AAA ×2, Remote control, USB-C cable (2m), HDMI 2.0 cable (3m), USB A-B 3.0 cable (3m), Plastic clamp (3+3 pcs)",
      },
    },
    isFeatured: true,
    isNew: true,
  },
];
