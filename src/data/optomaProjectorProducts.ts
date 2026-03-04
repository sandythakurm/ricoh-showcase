import type { Product } from "./products";
import brandOptoma from "@/assets/brand-optoma.webp";

// Using brand logo as placeholder since we don't have individual product images
const optomaImg = brandOptoma;

export const optomaProjectorProducts: Product[] = [
  // ── Professional Interchangeable Lens ──────────────────
  {
    id: "optoma-zk1320",
    name: "Optoma ProScene ZK1320",
    category: "projectors",
    subcategory: "High End",
    brand: "optoma",
    image: optomaImg,
    tagline: "13,500 lumen, 4K UHD+ laser projector",
    description:
      "The ZK1320 is a new-generation projector delivering bright 4K UHD+ laser projection with enhanced contrast and flexible installation options in a compact, lightweight design.",
    overview:
      "The ZK1320 delivers 13,500 lumens of high-brightness 4K UHD+ WQUXGA (3840 x 2400) projection with DuraCore laser technology. Compact and lightweight at 37 lbs (without lens), it supports ArtNet for seamless stage lighting synchronization and remote device management via Optoma Management Suite (OMS). A full range of interchangeable lenses is available (sold separately).",
    features: [
      "13,500 Lumens High Brightness",
      "4K UHD+ WQUXGA (3840 x 2400) Resolution",
      "DuraCore Laser Light Source",
      "Compact & Lightweight (37 lbs without lens)",
      "ArtNet Support for Stage Lighting",
      "Optoma Management Suite (OMS)",
      "Full Range of Interchangeable Lenses",
      "24/7 Operation Capable",
    ],
    specs: {},
    specsGrouped: {
      "Projection System": {
        Resolution: "WQUXGA 4K UHD+ (3840 × 2400)",
        "Light Source": "DuraCore Laser",
        Brightness: "13,500 lumens",
      },
      "Lens & Optics": {
        "Lens Type": "Interchangeable (sold separately)",
      },
      "Physical": {
        Weight: "37 lbs (without lens)",
      },
    },
    warranty: "Contact Optoma for warranty details.",
    isNew: true,
  },
  {
    id: "optoma-zk1120",
    name: "Optoma ProScene ZK1120",
    category: "projectors",
    subcategory: "High End",
    brand: "optoma",
    image: optomaImg,
    tagline: "11,000 lumen, 4K UHD+ laser projector",
    description:
      "The ZK1120 is a new-generation projector delivering bright 4K UHD+ laser projection with enhanced contrast and flexible installation options in a compact, lightweight design.",
    overview:
      "The ZK1120 delivers 11,000 ISO lumens of high-brightness 4K UHD+ WQUXGA (3840 x 2400) projection with DuraCore laser technology. Compact and lightweight at 37 lbs (without lens), it supports ArtNet for seamless stage lighting synchronization and remote management via Optoma Management Suite (OMS). Full range of interchangeable lenses available.",
    features: [
      "11,000 ISO Lumens High Brightness",
      "4K UHD+ WQUXGA (3840 x 2400) Resolution",
      "DuraCore Laser Light Source",
      "Compact & Lightweight (37 lbs without lens)",
      "ArtNet Support for Stage Lighting",
      "Optoma Management Suite (OMS)",
      "Full Range of Interchangeable Lenses",
    ],
    specs: {},
    specsGrouped: {
      "Projection System": {
        Resolution: "WQUXGA 4K UHD+ (3840 × 2400)",
        "Light Source": "DuraCore Laser",
        Brightness: "11,000 ISO lumens",
      },
      "Lens & Optics": {
        "Lens Type": "Interchangeable (sold separately)",
      },
      "Physical": {
        Weight: "37 lbs (without lens)",
      },
    },
    warranty: "Contact Optoma for warranty details.",
  },

  // ── Professional Fixed Lens ────────────────────────────
  {
    id: "optoma-zu920tnl",
    name: "Optoma ProScene ZU920TNL",
    category: "projectors",
    subcategory: "High End",
    brand: "optoma",
    image: optomaImg,
    tagline: "High-Brightness Professional Laser Projector",
    description:
      "The ProScene ZU920TNL WUXGA Laser Projector delivers 9,800 lumens of brilliant brightness with 4K and HDR compatibility — built for demanding environments that require reliable, around-the-clock performance.",
    overview:
      "The ZU920TNL features an IP5X-certified, dust-resistant optical engine supporting 24/7 operation and up to 30,000 hours of maintenance-free projection in Eco mode. Motorized zoom, focus, and full lens shift with built-in warping and edge-blending for seamless multi-projector setups. Dual 10W speakers included. Ideal for House of Worship installations.",
    features: [
      "9,800 Lumens Brightness",
      "WUXGA Resolution",
      "4K & HDR Compatible",
      "IP5X Dust-Resistant Optical Engine",
      "24/7 Operation",
      "30,000 Hours Laser Life (Eco Mode)",
      "Motorized Zoom, Focus & Full Lens Shift",
      "Built-in Warping & Edge-Blending",
      "Dual 10W Speakers",
    ],
    specs: {},
    specsGrouped: {
      "Projection System": {
        Resolution: "WUXGA (1920 × 1200)",
        "Light Source": "Laser",
        Brightness: "9,800 lumens",
        "HDR": "Compatible",
        "4K Input": "Compatible",
      },
      "Installation": {
        "Dust Protection": "IP5X Certified",
        "24/7 Operation": "Yes",
        "Laser Life": "Up to 30,000 hours (Eco Mode)",
        "Edge Blending": "Built-in",
      },
      "Physical": {
        Speaker: "Dual 10W",
      },
    },
    warranty: "Contact Optoma for warranty details.",
  },
  {
    id: "optoma-zu820tnl",
    name: "Optoma ProScene ZU820TNL",
    category: "projectors",
    subcategory: "High End",
    brand: "optoma",
    image: optomaImg,
    tagline: "High-Brightness Professional Laser Projector",
    description:
      "The ProScene ZU820TNL WUXGA Laser Projector delivers 8,800 lumens with 4K and HDR compatibility — built for demanding environments with IP5X certification and 24/7 operation.",
    overview:
      "The ZU820TNL features 8,800 lumens, IP5X-certified dust-resistant optical engine, 24/7 operation, and up to 30,000 hours of maintenance-free projection. Motorized zoom, focus, and full lens shift with built-in warping and edge-blending. Dual 10W speakers included.",
    features: [
      "8,800 Lumens Brightness",
      "WUXGA Resolution",
      "4K & HDR Compatible",
      "IP5X Dust-Resistant Optical Engine",
      "24/7 Operation",
      "30,000 Hours Laser Life (Eco Mode)",
      "Motorized Zoom, Focus & Full Lens Shift",
      "Built-in Warping & Edge-Blending",
      "Dual 10W Speakers",
    ],
    specs: {},
    specsGrouped: {
      "Projection System": {
        Resolution: "WUXGA (1920 × 1200)",
        "Light Source": "Laser",
        Brightness: "8,800 lumens",
        "HDR": "Compatible",
      },
      "Installation": {
        "Dust Protection": "IP5X Certified",
        "24/7 Operation": "Yes",
        "Laser Life": "Up to 30,000 hours (Eco Mode)",
        "Edge Blending": "Built-in",
      },
      "Physical": {
        Speaker: "Dual 10W",
      },
    },
    warranty: "Contact Optoma for warranty details.",
  },
  {
    id: "optoma-zu920tst",
    name: "Optoma ProScene ZU920TST",
    category: "projectors",
    subcategory: "Short Throw",
    brand: "optoma",
    image: optomaImg,
    tagline: "High brightness professional short throw laser projector",
    description:
      "9,800 lumens with 4K and HDR compatibility. IP5X certified optical engine for 24/7 operation with a short throw lens, ideal for digital signage, edge-blending, projection mapping, and simulation.",
    overview:
      "The ProScene ZU920TST features a dust-resistant IP5X certified optical engine for 24/7 operation capabilities, offering true maintenance-free projection for up to 30,000 hours in Eco mode. Motorized zoom and focus, full motorized lens shift, and built-in dual 10W speakers. Short throw lens ideal for digital signage, edge-blending, projection mapping, simulation, and immersive installations. HDBaseT and LAN control flexibility.",
    features: [
      "9,800 Lumens Brightness",
      "WUXGA Resolution",
      "Short Throw Lens",
      "4K & HDR Compatible",
      "IP5X Dust-Resistant",
      "24/7 Operation",
      "30,000 Hours Laser Life (Eco Mode)",
      "Motorized Zoom, Focus & Lens Shift",
      "HDBaseT & LAN Control",
      "Dual 10W Speakers",
    ],
    specs: {},
    specsGrouped: {
      "Projection System": {
        Resolution: "WUXGA (1920 × 1200)",
        "Light Source": "Laser",
        Brightness: "9,800 lumens",
      },
      "Installation": {
        "Throw Type": "Short Throw",
        "Dust Protection": "IP5X Certified",
        "24/7 Operation": "Yes",
        "Laser Life": "Up to 30,000 hours (Eco Mode)",
      },
      "Connectivity": {
        HDBaseT: "Yes",
        LAN: "Yes",
      },
    },
    warranty: "Contact Optoma for warranty details.",
  },
  {
    id: "optoma-zu920t",
    name: "Optoma ProScene ZU920T",
    category: "projectors",
    subcategory: "Standard Throw",
    brand: "optoma",
    image: optomaImg,
    tagline: "High brightness professional laser projector",
    description:
      "9,800 lumens with 4K and HDR compatibility. IP5X certified optical engine for 24/7 operation with a standard throw lens for digital signage, edge-blending, projection mapping, and simulation.",
    overview:
      "The ProScene ZU920T delivers 9,800 lumens with a standard throw lens. IP5X dust-resistant optical engine supports 24/7 operation and up to 30,000 hours of projection in Eco mode. Motorized zoom, focus, and full lens shift. HDBaseT and LAN for flexible control. Dual 10W speakers included.",
    features: [
      "9,800 Lumens Brightness",
      "WUXGA Resolution",
      "Standard Throw Lens",
      "4K & HDR Compatible",
      "IP5X Dust-Resistant",
      "24/7 Operation",
      "30,000 Hours Laser Life (Eco Mode)",
      "Motorized Zoom, Focus & Lens Shift",
      "HDBaseT & LAN Control",
      "Dual 10W Speakers",
    ],
    specs: {},
    specsGrouped: {
      "Projection System": {
        Resolution: "WUXGA (1920 × 1200)",
        "Light Source": "Laser",
        Brightness: "9,800 lumens",
      },
      "Installation": {
        "Throw Type": "Standard Throw",
        "Dust Protection": "IP5X Certified",
        "24/7 Operation": "Yes",
      },
      "Connectivity": {
        HDBaseT: "Yes",
        LAN: "Yes",
      },
    },
    warranty: "Contact Optoma for warranty details.",
  },
  {
    id: "optoma-zu820tst",
    name: "Optoma ProScene ZU820TST",
    category: "projectors",
    subcategory: "Short Throw",
    brand: "optoma",
    image: optomaImg,
    tagline: "High brightness professional short throw laser projector",
    description:
      "8,200 lumens with 4K and HDR compatibility. IP5X certified optical engine for 24/7 operation with short throw lens and 1.26x zoom for simulation, edge-blending, and immersive installations.",
    features: [
      "8,200 Lumens Brightness",
      "WUXGA Resolution",
      "Short Throw Lens (1.26x Zoom)",
      "4K & HDR Compatible",
      "IP5X Dust-Resistant",
      "24/7 Operation",
      "30,000 Hours Laser Life (Eco Mode)",
      "Motorized Zoom, Focus & Lens Shift",
      "HDBaseT & LAN Control",
      "Dual 10W Speakers",
    ],
    specs: {},
    specsGrouped: {
      "Projection System": {
        Resolution: "WUXGA (1920 × 1200)",
        "Light Source": "Laser",
        Brightness: "8,200 lumens",
      },
      "Installation": {
        "Throw Type": "Short Throw",
        "Zoom": "1.26x",
        "Dust Protection": "IP5X Certified",
      },
    },
    warranty: "Contact Optoma for warranty details.",
  },
  {
    id: "optoma-zu820t",
    name: "Optoma ProScene ZU820T",
    category: "projectors",
    subcategory: "Standard Throw",
    brand: "optoma",
    image: optomaImg,
    tagline: "High brightness professional laser projector",
    description:
      "8,800 lumens with 4K and HDR compatibility. IP5X certified optical engine for 24/7 operation with 1.6x zoom for simulation, edge-blending, projection mapping, and immersive installations.",
    features: [
      "8,800 Lumens Brightness",
      "WUXGA Resolution",
      "Standard Throw (1.6x Zoom)",
      "4K & HDR Compatible",
      "IP5X Dust-Resistant",
      "24/7 Operation",
      "30,000 Hours Laser Life (Eco Mode)",
      "Motorized Zoom, Focus & Lens Shift",
      "HDBaseT & LAN Control",
      "Dual 10W Speakers",
    ],
    specs: {},
    specsGrouped: {
      "Projection System": {
        Resolution: "WUXGA (1920 × 1200)",
        "Light Source": "Laser",
        Brightness: "8,800 lumens",
      },
      "Installation": {
        "Throw Type": "Standard Throw",
        "Zoom": "1.6x",
        "Dust Protection": "IP5X Certified",
      },
    },
    warranty: "Contact Optoma for warranty details.",
  },
  {
    id: "optoma-zu725tst",
    name: "Optoma ProScene ZU725TST",
    category: "projectors",
    subcategory: "Short Throw",
    brand: "optoma",
    image: optomaImg,
    tagline: "Ultra bright professional installation laser projector",
    description:
      "7,200 lumens with 4K and HDR compatibility. IP5X certified optical engine with 24/7 operation, 1.26x zoom, and full motorized lens shift for professional installations.",
    features: [
      "7,200 Lumens Brightness",
      "WUXGA Resolution",
      "Short Throw (1.26x Zoom)",
      "4K & HDR Compatible",
      "IP5X Dust-Resistant",
      "24/7 Operation",
      "30,000 Hours Laser Life (Eco Mode)",
      "Motorized Zoom, Focus & Lens Shift",
      "HDBaseT & LAN Control",
      "Dual 10W Speakers",
    ],
    specs: {},
    specsGrouped: {
      "Projection System": {
        Resolution: "WUXGA (1920 × 1200)",
        "Light Source": "Laser",
        Brightness: "7,200 lumens",
      },
      "Installation": {
        "Throw Type": "Short Throw",
        "Zoom": "1.26x",
        "Dust Protection": "IP5X Certified",
      },
    },
    warranty: "Contact Optoma for warranty details.",
  },
  {
    id: "optoma-zu707t",
    name: "Optoma ZU707T",
    category: "projectors",
    subcategory: "Standard Throw",
    brand: "optoma",
    image: optomaImg,
    tagline: "High brightness professional laser projector",
    description:
      "7,000 lumens with 4K and HDR compatibility. IP6X certified optical engine with 24/7 operation. Perfect for large venues, classrooms, lecture halls, museums, and houses of worship.",
    overview:
      "The ZU707T features a dust-resistant IP6X certified optical engine for 24/7 operational capabilities and low maintenance. Long-life laser technology, manual horizontal and vertical lens shift, and built-in 15W speakers. HDBaseT 3.0 and LAN for control flexibility. Suitable for large venues, classrooms, lecture halls, museums, houses of worship, digital signage, simulation, and immersive installations.",
    features: [
      "7,000 Lumens Brightness",
      "WUXGA Resolution",
      "4K & HDR Compatible",
      "IP6X Dust-Resistant Optical Engine",
      "24/7 Operation",
      "Long-Life Laser Technology",
      "Manual Lens Shift (H & V)",
      "HDBaseT 3.0 & LAN Control",
      "Built-in 15W Speakers",
    ],
    specs: {},
    specsGrouped: {
      "Projection System": {
        Resolution: "WUXGA (1920 × 1200)",
        "Light Source": "Laser",
        Brightness: "7,000 lumens",
      },
      "Installation": {
        "Dust Protection": "IP6X Certified",
        "24/7 Operation": "Yes",
        "Lens Shift": "Manual H & V",
      },
      "Connectivity": {
        HDBaseT: "3.0",
        LAN: "Yes",
      },
      "Physical": {
        Speaker: "15W Built-in",
      },
    },
    warranty: "Contact Optoma for warranty details.",
  },

  // ── Standard Throw / Compact Laser ─────────────────────
  {
    id: "optoma-zh551",
    name: "Optoma ZH551",
    category: "projectors",
    subcategory: "Standard Throw",
    brand: "optoma",
    image: optomaImg,
    tagline: "Compact Laser Projector with Wireless Sharing",
    description:
      "5,600 lumens Full HD laser projector featuring Miracast wireless screen sharing, centralized control via OMS, and energy-efficient DuraCore Laser with up to 30,000 hours of operation.",
    overview:
      "The ZH551 Full HD laser projector delivers 5,600 ISO lumens of high-brightness performance with Miracast wireless projection for effortless content sharing. Centralized management via Optoma Management Suite (OMS) and OTA updates keep devices current. DuraCore Laser ensures up to 30,000 hours of energy-efficient operation. Ideal for classrooms, meeting rooms, and simulation environments.",
    features: [
      "5,600 ISO Lumens Brightness",
      "Full HD 1080p Resolution",
      "Miracast Wireless Projection",
      "DuraCore Laser (30,000 Hours)",
      "Optoma Management Suite (OMS)",
      "OTA Over-the-Air Updates",
      "Energy Efficient",
    ],
    specs: {},
    specsGrouped: {
      "Projection System": {
        Resolution: "Full HD 1080p (1920 × 1080)",
        "Light Source": "DuraCore Laser",
        Brightness: "5,600 ISO lumens",
        "Laser Life": "Up to 30,000 hours",
      },
      "Features": {
        "Wireless": "Miracast",
        "Management": "Optoma Management Suite (OMS)",
        "Updates": "OTA (Over-the-Air)",
      },
    },
    warranty: "Contact Optoma for warranty details.",
  },
  {
    id: "optoma-zk551",
    name: "Optoma ZK551",
    category: "projectors",
    subcategory: "Standard Throw",
    brand: "optoma",
    image: optomaImg,
    tagline: "Compact 4K UHD Laser Projector with Wireless Sharing",
    description:
      "5,100 lumens 4K UHD laser projector with Miracast wireless sharing, centralized OMS control, and energy-efficient DuraCore Laser with up to 30,000 hours of operation.",
    overview:
      "The ZK551 4K UHD laser projector delivers 5,100 ISO lumens of high-brightness performance with Miracast wireless projection. Centralized management via OMS and OTA updates. DuraCore Laser ensures up to 30,000 hours of energy-efficient operation. Ideal for classrooms, meeting rooms, and simulation environments.",
    features: [
      "5,100 ISO Lumens Brightness",
      "4K UHD Resolution",
      "Miracast Wireless Projection",
      "DuraCore Laser (30,000 Hours)",
      "Optoma Management Suite (OMS)",
      "OTA Over-the-Air Updates",
    ],
    specs: {},
    specsGrouped: {
      "Projection System": {
        Resolution: "4K UHD (3840 × 2160)",
        "Light Source": "DuraCore Laser",
        Brightness: "5,100 ISO lumens",
        "Laser Life": "Up to 30,000 hours",
      },
      "Features": {
        "Wireless": "Miracast",
        "Management": "Optoma Management Suite (OMS)",
      },
    },
    warranty: "Contact Optoma for warranty details.",
  },
  {
    id: "optoma-zh401e",
    name: "Optoma ZH401e",
    category: "projectors",
    subcategory: "Compact",
    brand: "optoma",
    image: optomaImg,
    tagline: "Cost effective high brightness 1080p Full HD laser projector",
    description:
      "4,500 lumens Full HD 1080p DuraCore laser projector with 2x HDMI 2.0, VGA, RJ-45, RS232. Up to 34% smaller than previous models — ideal for small to medium conference rooms and classrooms.",
    overview:
      "The ZH401e is a hassle-free 4,500 lumen Full HD 1080p DuraCore laser projector featuring 2x HDMI 2.0, VGA-In, RJ-45, RS232, and more. Designed for maintenance-free continuous operation in a sleek, compact form factor up to 34% smaller than previous Optoma models. Ideal for small to medium conference rooms, training rooms, and small classrooms. Features 1.1x zoom, RS232 control, and a built-in speaker. Compatible with SmartApp for Android and iOS for remote control.",
    features: [
      "4,500 Lumens Brightness",
      "Full HD 1080p Resolution",
      "DuraCore Laser Technology",
      "2x HDMI 2.0",
      "Up to 34% Smaller Form Factor",
      "1.1x Zoom",
      "RS232 Control",
      "RJ-45 Network",
      "Built-in Speaker",
      "SmartApp Compatible (Android & iOS)",
      "Maintenance-Free Operation",
    ],
    specs: {},
    specsGrouped: {
      "Projection System": {
        Resolution: "Full HD 1080p (1920 × 1080)",
        "Light Source": "DuraCore Laser",
        Brightness: "4,500 lumens",
      },
      "Connectivity": {
        HDMI: "2x HDMI 2.0",
        VGA: "Yes",
        Network: "RJ-45",
        RS232: "Yes",
      },
      "Lens & Optics": {
        Zoom: "1.1x",
      },
    },
    warranty: "Contact Optoma for warranty details.",
  },
  {
    id: "optoma-zx350e",
    name: "Optoma ZX350e",
    category: "projectors",
    subcategory: "Compact",
    brand: "optoma",
    image: optomaImg,
    tagline: "Compact high brightness laser projector",
    description:
      "3,700 lumens XGA DuraCore laser projector in a compact form factor. Up to 30,000 hours maintenance-free, mercury-free, and 45% less power consumption vs lamp-based models.",
    overview:
      "The ZX350e is one of Optoma's most compact XGA DuraCore laser projectors. Designed for maintenance-free continuous operation at 3,700 lumens with up to 30,000 hours laser life. Cuts power consumption by up to 45% vs lamp-based projectors. External power supply for reliability and portability. Eco-friendly packaging with up to 97% recyclable materials. Ideal for conference rooms, boardrooms, and corporate spaces. RS232 control and built-in speaker included.",
    features: [
      "3,700 Lumens Brightness",
      "XGA (1024 x 768) Resolution",
      "DuraCore Laser (30,000 Hours)",
      "Mercury-Free",
      "45% Less Power Consumption",
      "Up to 34% Smaller Form Factor",
      "External Power Supply",
      "RS232 Control",
      "Built-in Speaker",
      "97% Recyclable Packaging",
    ],
    specs: {},
    specsGrouped: {
      "Projection System": {
        Resolution: "XGA (1024 × 768)",
        "Light Source": "DuraCore Laser",
        Brightness: "3,700 lumens",
        "Laser Life": "Up to 30,000 hours",
      },
    },
    warranty: "Contact Optoma for warranty details.",
  },
  {
    id: "optoma-zw350e",
    name: "Optoma ZW350e",
    category: "projectors",
    subcategory: "Compact",
    brand: "optoma",
    image: optomaImg,
    tagline: "Compact high brightness WXGA laser projector",
    description:
      "4,000 lumens WXGA DuraCore laser projector. Maintenance-free for up to 30,000 hours with 45% lower power consumption and eco-friendly design. Ideal for conference rooms and boardrooms.",
    features: [
      "4,000 Lumens Brightness",
      "WXGA (1280 x 800) Resolution",
      "DuraCore Laser (30,000 Hours)",
      "Mercury-Free",
      "45% Less Power Consumption",
      "External Power Supply",
      "RS232 Control",
      "Built-in Speaker",
      "Eco-Friendly Design",
    ],
    specs: {},
    specsGrouped: {
      "Projection System": {
        Resolution: "WXGA (1280 × 800)",
        "Light Source": "DuraCore Laser",
        Brightness: "4,000 lumens",
        "Laser Life": "Up to 30,000 hours",
      },
    },
    warranty: "Contact Optoma for warranty details.",
  },

  // ── Short Throw ────────────────────────────────────────
  {
    id: "optoma-zw350st",
    name: "Optoma ZW350ST",
    category: "projectors",
    subcategory: "Short Throw",
    brand: "optoma",
    image: optomaImg,
    tagline: "Compact short throw WXGA laser projector",
    description:
      "3,600 lumens WXGA DuraCore laser short throw projector. Positioned just a few feet from any wall, with 30,000 hours maintenance-free life and eco-friendly compact design.",
    features: [
      "3,600 Lumens Brightness",
      "WXGA (1280 x 800) Resolution",
      "Short Throw Lens",
      "DuraCore Laser (30,000 Hours)",
      "Mercury-Free",
      "45% Less Power Consumption",
      "External Power Supply",
      "RS232 Control",
      "Built-in Speaker",
    ],
    specs: {},
    specsGrouped: {
      "Projection System": {
        Resolution: "WXGA (1280 × 800)",
        "Light Source": "DuraCore Laser",
        Brightness: "3,600 lumens",
        "Laser Life": "Up to 30,000 hours",
      },
      "Lens & Optics": {
        "Throw Type": "Short Throw",
      },
    },
    warranty: "Contact Optoma for warranty details.",
  },

  // ── Ultra Short Throw ──────────────────────────────────
  {
    id: "optoma-zw410ust",
    name: "Optoma ZW410UST",
    category: "projectors",
    subcategory: "Ultra Short Throw",
    brand: "optoma",
    image: optomaImg,
    tagline: "Compact eco-friendly ultra short throw projector",
    description:
      "4,000 lumens WXGA DuraCore laser ultra short throw projector. Projects 100\" from less than two feet away. Up to 50% PCR plastics chassis and 97% recyclable packaging.",
    overview:
      "The ZW410UST delivers 4,000 lumens in an ultra short throw design that projects a 100\" image from less than two feet away, avoiding presenter shadows. DuraCore laser ensures 30,000 hours of mercury-free, maintenance-free operation. Eco-friendly chassis with up to 50% PCR (Post-Consumer Recycled) plastics and 97% recyclable packaging. Four corner adjustment, external power supply, RS232 control, and built-in speaker. Ideal for meeting rooms and classrooms.",
    features: [
      "4,000 Lumens Brightness",
      "WXGA Resolution",
      "Ultra Short Throw Lens",
      "100\" Image from < 2 Feet",
      "DuraCore Laser (30,000 Hours)",
      "Mercury-Free",
      "50% PCR Plastics Chassis",
      "Four Corner Adjustment",
      "External Power Supply",
      "RS232 Control",
      "Built-in Speaker",
    ],
    specs: {},
    specsGrouped: {
      "Projection System": {
        Resolution: "WXGA (1280 × 800)",
        "Light Source": "DuraCore Laser",
        Brightness: "4,000 lumens",
        "Laser Life": "Up to 30,000 hours",
      },
      "Lens & Optics": {
        "Throw Type": "Ultra Short Throw",
        "Image Size": "100\" from < 2 feet",
      },
    },
    warranty: "Contact Optoma for warranty details.",
  },
  {
    id: "optoma-ml1080ust",
    name: "Optoma Photon Go ML1080UST",
    category: "projectors",
    subcategory: "Ultra Short Throw",
    brand: "optoma",
    image: optomaImg,
    tagline: "Smart 1080p Triple Laser (RGB) Google TV Portable UST Projector",
    description:
      "Stream your favorites wirelessly with built-in Google TV. Enjoy 100\" from less than 10 inches away. Triple Laser RGB for vibrant colors, built-in battery, and Dolby Audio.",
    overview:
      "The Photon Go ML1080UST lets you stream shows with built-in Google TV right out of the box. Enjoy a 100\" image from less than 10 inches away — ideal for small spaces. Triple Laser RGB technology delivers vibrant, true-to-life colors. Lightweight with built-in battery and Dolby Audio for the ultimate portable experience.",
    features: [
      "Full HD 1080p Resolution",
      "Triple Laser RGB Light Source",
      "Ultra Short Throw",
      "100\" Image from < 10 Inches",
      "Built-in Google TV",
      "Built-in Battery",
      "Dolby Audio",
      "Lightweight & Portable",
      "Wireless Streaming",
    ],
    specs: {},
    specsGrouped: {
      "Projection System": {
        Resolution: "Full HD 1080p (1920 × 1080)",
        "Light Source": "Triple Laser RGB",
      },
      "Lens & Optics": {
        "Throw Type": "Ultra Short Throw",
        "Image Size": "100\" from < 10 inches",
      },
      "Smart Features": {
        "Built-in OS": "Google TV",
        "Audio": "Dolby Audio",
        "Battery": "Built-in",
      },
    },
    warranty: "Contact Optoma for warranty details.",
    isNew: true,
  },

  // ── Home Theater / Home Entertainment ──────────────────
  {
    id: "optoma-uhz36",
    name: "Optoma UHZ36",
    category: "projectors",
    subcategory: "Broad Use",
    brand: "optoma",
    image: optomaImg,
    tagline: "Home Entertainment 4K UHD Projector",
    description:
      "3,500 lumens 4K UHD laser projector with HDR support, PureEngine technology, and long-lasting laser. Delivers vibrant color and smooth performance for movies, shows, and games.",
    overview:
      "Transform your space with cinema-quality 4K. The UHZ36 delivers 3,500 lumens of bright 4K UHD visuals with HDR support. PureEngine technology includes PureDetail for crisp textures, PureContrast for richer blacks, PureMotion for fluid action, and vibrant true-to-life colors. One-click Filmmaker Mode restores original frame rate, color grading, and aspect ratios. Long-life laser light source provides thousands of hours of maintenance-free viewing.",
    features: [
      "4K UHD Resolution",
      "3,500 Lumens Brightness",
      "HDR Support",
      "PureEngine Technology",
      "PureDetail, PureContrast, PureMotion",
      "Filmmaker Mode",
      "Long-Life Laser Light Source",
      "Compact Design",
    ],
    specs: {},
    specsGrouped: {
      "Projection System": {
        Resolution: "4K UHD (3840 × 2160)",
        "Light Source": "Laser",
        Brightness: "3,500 lumens",
        "HDR": "Supported",
      },
      "Image Enhancement": {
        "PureEngine": "PureDetail + PureContrast + PureMotion",
        "Filmmaker Mode": "Yes",
      },
    },
    warranty: "Contact Optoma for warranty details.",
  },
  {
    id: "optoma-uhz58lv",
    name: "Optoma UHZ58LV",
    category: "projectors",
    subcategory: "Broad Use",
    brand: "optoma",
    image: optomaImg,
    tagline: "4K UHD Dual Laser HDR10+ Projector",
    description:
      "True 4K UHD dual-laser projector with HDR10+, 95% DCI-P3 color, and Filmmaker Mode — engineered for brilliant home cinema performance with stunning clarity and detail.",
    overview:
      "Experience brilliant home cinema with Optoma's UHZ58LV. True 4K UHD, dual-laser projection delivers razor-sharp images and vibrant color with HDR10+ and 95% DCI-P3 wide color gamut. Filmmaker Mode preserves the director's vision. The additional red laser enhances color accuracy without lamp replacements.",
    features: [
      "True 4K UHD Resolution",
      "Dual-Laser Projection",
      "HDR10+",
      "95% DCI-P3 Wide Color Gamut",
      "Filmmaker Mode",
      "No Lamp Replacements",
      "Stunning Clarity & Detail",
    ],
    specs: {},
    specsGrouped: {
      "Projection System": {
        Resolution: "4K UHD (3840 × 2160)",
        "Light Source": "Dual Laser",
        "Color Gamut": "95% DCI-P3",
        "HDR": "HDR10+",
      },
    },
    warranty: "Contact Optoma for warranty details.",
    isNew: true,
  },
  {
    id: "optoma-uhz68",
    name: "Optoma UHZ68",
    category: "projectors",
    subcategory: "Broad Use",
    brand: "optoma",
    image: optomaImg,
    tagline: "Dolby Vision Ultra High-Bright 4K UHD Laser Home Theater Projector",
    description:
      "4,500 lumens 4K UHD with Dolby Vision, HDR10+, 90%+ DCI-P3 wide color gamut, and 2,800,000:1 contrast. Ultra-smooth gaming on 120\" with virtually zero input lag.",
    overview:
      "Bring cinematic visuals and immersive sound to your living room. The UHZ68 features stunning 4K UHD resolution, 4,500 lumens, and 2,800,000:1 contrast delivering unmatched clarity and vibrant color. Powered by Dolby Vision and HDR10+ with 90%+ DCI-P3 wide color gamut for true-to-life color reproduction. Ultra-smooth gameplay on 120\" with virtually zero input lag. One display for both cinematic movies and immersive gaming.",
    features: [
      "4K UHD Resolution",
      "4,500 Lumens Brightness",
      "Dolby Vision & HDR10+",
      "2,800,000:1 Contrast Ratio",
      "90%+ DCI-P3 Wide Color Gamut",
      "Low Input Lag Gaming",
      "120\" Gaming Canvas",
      "Laser Light Source",
    ],
    specs: {},
    specsGrouped: {
      "Projection System": {
        Resolution: "4K UHD (3840 × 2160)",
        "Light Source": "Laser",
        Brightness: "4,500 lumens",
        "Contrast Ratio": "2,800,000:1",
        "Color Gamut": "90%+ DCI-P3",
        "HDR": "Dolby Vision, HDR10+",
      },
    },
    warranty: "Contact Optoma for warranty details.",
    isBestSeller: true,
  },

  // ── Portable / Compact Home ────────────────────────────
  {
    id: "optoma-pk31",
    name: "Optoma Photon Life PK31",
    category: "projectors",
    subcategory: "Compact",
    brand: "optoma",
    image: optomaImg,
    tagline: "4K UHD 3LED Compact Home Entertainment Projector",
    description:
      "Vibrant 4K UHD visuals with ultra-low 4.6ms input lag — perfect for gaming, streaming, and more. 3LED light source with 900 lumens, built-in speaker, and compact plug-and-play design.",
    features: [
      "4K UHD Resolution",
      "3LED Light Source (900 Lumens)",
      "4.6ms Low Input Lag",
      "Built-in Speaker",
      "Compact & Portable",
      "Plug-and-Play Setup",
    ],
    specs: {},
    specsGrouped: {
      "Projection System": {
        Resolution: "4K UHD (3840 × 2160)",
        "Light Source": "3LED",
        Brightness: "900 lumens",
      },
      "Performance": {
        "Input Lag": "4.6ms",
      },
    },
    warranty: "Contact Optoma for warranty details.",
  },
  {
    id: "optoma-pk32",
    name: "Optoma Photon Life PK32",
    category: "projectors",
    subcategory: "Compact",
    brand: "optoma",
    image: optomaImg,
    tagline: "4K UHD 4LED Compact Home Entertainment and Gaming Projector",
    description:
      "Crisp 4K visuals in a compact, easy-to-carry design. 4LED brightness, HDR support, 4.6ms low input lag, auto focus, and auto keystone correction for effortless setup.",
    features: [
      "4K UHD Resolution",
      "4LED Light Source",
      "HDR Support",
      "4.6ms Low Input Lag",
      "Auto Focus",
      "Auto Keystone Correction",
      "Compact & Portable",
    ],
    specs: {},
    specsGrouped: {
      "Projection System": {
        Resolution: "4K UHD (3840 × 2160)",
        "Light Source": "4LED",
        "HDR": "Supported",
      },
      "Performance": {
        "Input Lag": "4.6ms",
      },
      "Convenience": {
        "Auto Focus": "Yes",
        "Auto Keystone": "Yes",
      },
    },
    warranty: "Contact Optoma for warranty details.",
    isNew: true,
  },
  {
    id: "optoma-ph31",
    name: "Optoma Photon Life PH31",
    category: "projectors",
    subcategory: "Compact",
    brand: "optoma",
    image: optomaImg,
    tagline: "1080p Full HD LED Compact Portable Projector",
    description:
      "Compact Full HD projector with 1,500 lumens for bright, clear viewing up to 150\". Auto vertical keystone correction and built-in speaker for easy setup and everyday entertainment.",
    features: [
      "Full HD 1080p Resolution",
      "1,500 Lumens LED",
      "Up to 150\" Image Size",
      "Auto Vertical Keystone",
      "Wide Color Gamut",
      "Built-in Speaker",
      "Compact & Portable",
    ],
    specs: {},
    specsGrouped: {
      "Projection System": {
        Resolution: "Full HD 1080p (1920 × 1080)",
        "Light Source": "LED",
        Brightness: "1,500 lumens",
        "Max Image Size": "150 inches",
      },
      "Convenience": {
        "Auto Keystone": "Vertical",
        Speaker: "Built-in",
      },
    },
    warranty: "Contact Optoma for warranty details.",
  },
];
