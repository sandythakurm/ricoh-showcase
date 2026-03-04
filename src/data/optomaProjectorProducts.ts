import type { Product } from "./products";

// Product images
import imgZK1320 from "@/assets/projectors/optoma-zk1320.jpg";
import imgZK1120 from "@/assets/projectors/optoma-zk1120.jpg";
import imgZU920TNL from "@/assets/projectors/optoma-zu920tnl.jpg";
import imgZU920TST from "@/assets/projectors/optoma-zu920tst.jpg";
import imgZU920T from "@/assets/projectors/optoma-zu920t.jpg";
import imgZU820TST from "@/assets/projectors/optoma-zu820tst.jpg";
import imgZU820T from "@/assets/projectors/optoma-zu820t.jpg";
import imgZU725TST from "@/assets/projectors/optoma-zu725tst.jpg";
import imgZU707T from "@/assets/projectors/optoma-zu707t.jpg";
import imgZH551 from "@/assets/projectors/optoma-zh551.jpg";
import imgZK551 from "@/assets/projectors/optoma-zh551.jpg"; // Same body as ZH551
import imgZH401E from "@/assets/projectors/optoma-zh401e.webp";
import imgZX350E from "@/assets/projectors/optoma-zx350e.jpg";
import imgZW350E from "@/assets/projectors/optoma-zw350e.jpg";
import imgZW350ST from "@/assets/projectors/optoma-zw350st.jpg";
import imgZW410UST from "@/assets/projectors/optoma-zw410ust.jpg";
import imgUHZ68 from "@/assets/projectors/optoma-uhz68.jpg";
import imgUHZ58LV from "@/assets/projectors/optoma-uhz58lv.jpg";
import imgUHZ36 from "@/assets/projectors/optoma-uhz36.jpg";
import imgPK31 from "@/assets/projectors/optoma-pk31.jpg";
import imgPK32 from "@/assets/projectors/optoma-pk32.jpg";

// Reuse images for similar models
const imgZU820TNL = imgZU920TNL; // Same chassis
const imgML1080UST = imgPK31; // Similar portable form
const imgPH31 = imgPK31; // Similar portable form

export const optomaProjectorProducts: Product[] = [
  // ── Professional Interchangeable Lens ──────────────────
  {
    id: "optoma-zk1320",
    name: "Optoma ProScene ZK1320",
    category: "projectors",
    subcategory: "High End",
    brand: "optoma",
    image: imgZK1320,
    gallery: [imgZK1320],
    tagline: "13,500 lumen, 4K UHD+ laser projector",
    description:
      "The ZK1320 is a new-generation projector delivering bright 4K UHD+ laser projection with enhanced contrast and flexible installation options in a compact, lightweight design.",
    overview:
      "The ZK1320 delivers 13,500 lumens of high-brightness 4K UHD+ WQUXGA (3840 x 2400) projection with DuraCore laser technology. Compact and lightweight at 37 lbs (without lens), it supports ArtNet for seamless stage lighting synchronization and remote device management via Optoma Management Suite (OMS). Optoma's advanced imaging technology, powered by the latest TI HEP DLP chip with a larger tilt angle and micromirror pitch, boosts image brightness, enhances contrast, improves efficiency, and delivers realistic colors and sharper images. The front-facing snorkel UST lens enables zero offset projection, even in the most confined spaces. A full range of interchangeable lenses is available (sold separately).",
    highlights: [
      {
        title: "Crystal-Clear 4K UHD+ Image Quality",
        text: "With 4K UHD+ WQUXGA (3840 x 2400) resolution and 9.22 million pixels, this projector delivers ultra-sharp, crystal-clear projection — ideal for immersive backgrounds in any large venue installation.",
      },
      {
        title: "Advanced Design, Superior Imaging",
        text: "Optoma's advanced imaging technology, powered by the latest TI HEP DLP chip with a larger tilt angle and micromirror pitch, boosts image brightness, enhances contrast, improves efficiency, and delivers realistic colors and sharper images.",
      },
      {
        title: "Sleek, Lightweight Design for Easy Installation",
        text: "Weighing just 16.8 kg (without lens), this sleek, lightweight projector enables easy and flexible installation, even in confined or overhead spaces. 49% lighter and 41% more compact than the previous generation.",
      },
    ],
    features: [
      "13,500 Lumens High Brightness",
      "4K UHD+ WQUXGA (3840 x 2400) Resolution",
      "DuraCore Laser Light Source",
      "Compact & Lightweight (37 lbs without lens)",
      "ArtNet Support for Stage Lighting",
      "Optoma Management Suite (OMS)",
      "Full Range of Interchangeable Lenses",
      "24/7 Operation Capable",
      "50% Post-Consumer Recycled Chassis",
      "Microsoft Teams Front Row Support",
    ],
    specs: {},
    specsGrouped: {
      "Projection System": {
        "Display Technology": "TI 0.8\" HEP DLP single chip",
        Resolution: "WQUXGA 4K UHD+ (3840 × 2400)",
        "Light Source": "DuraCore Laser",
        Brightness: "13,500 ISO lumens / 11,500 ANSI lumens",
        "Contrast Ratio": "4,000,000:1",
        "Native Aspect Ratio": "16:10",
      },
      "Lens & Optics": {
        "Lens Type": "Interchangeable (sold separately)",
        "Screen Size": "80\" – 300\" (Optical)",
        "Keystone Correction": "±20° (H & V)",
      },
      "Light Source": {
        Type: "DuraCore Laser",
        Life: "20,000 hours (bright) / 30,000 hours (eco)",
      },
      Physical: {
        Weight: "37 lbs (without lens)",
        "Sustainability": "50% PCR plastics chassis, 98% recycled packaging",
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
    image: imgZK1120,
    gallery: [imgZK1120],
    tagline: "11,000 lumen, 4K UHD+ laser projector",
    description:
      "The ZK1120 is a new-generation projector delivering bright 4K UHD+ laser projection with enhanced contrast and flexible installation options in a compact, lightweight design.",
    overview:
      "The ZK1120 delivers 11,000 ISO lumens of high-brightness 4K UHD+ WQUXGA (3840 x 2400) projection with DuraCore laser technology. Like its sibling the ZK1320, it features advanced TI HEP DLP chip technology for superior contrast and color accuracy. Compact and lightweight at 37 lbs (without lens), it supports ArtNet for seamless stage lighting synchronization and remote management via Optoma Management Suite (OMS). Full range of interchangeable lenses available, including a front-facing snorkel UST lens for zero offset projection in confined spaces.",
    highlights: [
      {
        title: "Crystal-Clear 4K UHD+ Image Quality",
        text: "With 4K UHD+ WQUXGA (3840 x 2400) resolution and 9.22 million pixels, this projector delivers ultra-sharp, crystal-clear projection — ideal for immersive backgrounds in any large venue installation.",
      },
      {
        title: "Seamless, Concealed Projection",
        text: "Optoma's front-facing snorkel UST lens enables zero offset projection, even in the most confined spaces, allowing the projector to be fully concealed within the ceiling or furniture for a clean, unobtrusive aesthetic.",
      },
      {
        title: "Live Event Synchronization",
        text: "With integrated Art-Net support, the ZK1120 enables seamless synchronization with stage lighting and visual effects for live events. Art-Net allows direct control from lighting consoles via Ethernet (RJ45).",
      },
    ],
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
      Physical: {
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
    image: imgZU920TNL,
    gallery: [imgZU920TNL],
    tagline: "High-Brightness Professional Laser Projector",
    description:
      "The ProScene ZU920TNL WUXGA Laser Projector delivers 9,800 lumens of brilliant brightness with 4K and HDR compatibility — built for demanding environments that require reliable, around-the-clock performance.",
    overview:
      "The ZU920TNL features an IP5X-certified, dust-resistant optical engine supporting 24/7 operation and up to 30,000 hours of maintenance-free projection in Eco mode. Motorized zoom, focus, and full lens shift with built-in warping and edge-blending for seamless multi-projector setups. Dual 10W speakers included. Ideal for House of Worship installations, large venues, and immersive experiences.",
    highlights: [
      {
        title: "IP5X Dust-Resistant Engine",
        text: "Independently tested and certified IP5X dust resistance rating ensures outstanding durability — paramount for 24/7 maintenance-free operation in challenging environments like warehouses, churches, and exhibition halls.",
      },
      {
        title: "Motorized Lens for Flexible Installation",
        text: "Full motorized zoom, focus, and lens shift allow precise image adjustment without physically accessing the projector. Built-in warping and edge-blending enable seamless multi-projector setups.",
      },
      {
        title: "HDBaseT & Network Control",
        text: "HDBaseT delivers uncompressed Full HD video, audio, and control over a single CAT cable up to 100 meters. LAN and RS232 control provide flexible integration with AMX, Crestron, and Extron systems.",
      },
    ],
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
        HDR: "Compatible",
        "4K Input": "Compatible",
      },
      Installation: {
        "Dust Protection": "IP5X Certified",
        "24/7 Operation": "Yes",
        "Laser Life": "Up to 30,000 hours (Eco Mode)",
        "Edge Blending": "Built-in",
      },
      Physical: {
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
    image: imgZU820TNL,
    gallery: [imgZU820TNL],
    tagline: "High-Brightness Professional Laser Projector",
    description:
      "The ProScene ZU820TNL WUXGA Laser Projector delivers 8,800 lumens with 4K and HDR compatibility — built for demanding environments with IP5X certification and 24/7 operation.",
    overview:
      "The ZU820TNL features 8,800 lumens, IP5X-certified dust-resistant optical engine, 24/7 operation, and up to 30,000 hours of maintenance-free projection. Motorized zoom, focus, and full lens shift with built-in warping and edge-blending. Dual 10W speakers included.",
    highlights: [
      {
        title: "IP5X Certified for 24/7 Operation",
        text: "Dust-resistant IP5X certified optical engine ensures reliable, maintenance-free projection in challenging environments with 24/7 operational capabilities.",
      },
      {
        title: "Built-in Edge-Blending & Warping",
        text: "Seamlessly blend multiple projectors for immersive large-scale installations with built-in warping and edge-blending capabilities.",
      },
    ],
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
        HDR: "Compatible",
      },
      Installation: {
        "Dust Protection": "IP5X Certified",
        "24/7 Operation": "Yes",
        "Laser Life": "Up to 30,000 hours (Eco Mode)",
        "Edge Blending": "Built-in",
      },
      Physical: {
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
    image: imgZU920TST,
    gallery: [imgZU920TST],
    tagline: "High brightness professional short throw laser projector",
    description:
      "9,800 lumens with 4K and HDR compatibility. IP5X certified optical engine for 24/7 operation with a short throw lens, ideal for digital signage, edge-blending, projection mapping, and simulation.",
    overview:
      "The ProScene ZU920TST features a dust-resistant IP5X certified optical engine for 24/7 operation capabilities, offering true maintenance-free projection for up to 30,000 hours in Eco mode. Motorized zoom and focus, full motorized lens shift, and built-in dual 10W speakers. Short throw lens ideal for digital signage, edge-blending, projection mapping, simulation, and immersive installations. HDBaseT and LAN control flexibility.",
    highlights: [
      {
        title: "Short Throw for Tight Spaces",
        text: "The short throw lens enables large-format projection from minimal distance, perfect for digital signage, edge-blending, projection mapping, simulation, and immersive installations where space is limited.",
      },
      {
        title: "IP5X Certified 24/7 Operation",
        text: "Independently tested and certified IP5X dust-resistant optical engine ensures reliable, maintenance-free operation around the clock — even in challenging environments.",
      },
    ],
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
      Installation: {
        "Throw Type": "Short Throw",
        "Dust Protection": "IP5X Certified",
        "24/7 Operation": "Yes",
        "Laser Life": "Up to 30,000 hours (Eco Mode)",
      },
      Connectivity: {
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
    image: imgZU920T,
    gallery: [imgZU920T],
    tagline: "High brightness professional laser projector",
    description:
      "9,800 lumens with 4K and HDR compatibility. IP5X certified optical engine for 24/7 operation with a standard throw lens for digital signage, edge-blending, projection mapping, and simulation.",
    overview:
      "The ProScene ZU920T delivers 9,800 lumens with a standard throw lens. IP5X dust-resistant optical engine supports 24/7 operation and up to 30,000 hours of projection in Eco mode. Motorized zoom, focus, and full lens shift. HDBaseT and LAN for flexible control. Dual 10W speakers included.",
    highlights: [
      {
        title: "Professional-Grade Brightness",
        text: "With 9,800 lumens of high-brightness WUXGA projection, the ZU920T delivers vivid, clear images even in fully lit rooms — ideal for large venues, lecture halls, and houses of worship.",
      },
      {
        title: "Flexible Network Control",
        text: "HDBaseT delivers uncompressed Full HD video, audio, and control over a single CAT cable up to 100 meters. Compatible with AMX, Crestron RoomView, and Extron IPLink for enterprise-grade management.",
      },
    ],
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
      Installation: {
        "Throw Type": "Standard Throw",
        "Dust Protection": "IP5X Certified",
        "24/7 Operation": "Yes",
      },
      Connectivity: {
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
    image: imgZU820TST,
    gallery: [imgZU820TST],
    tagline: "High brightness professional short throw laser projector",
    description:
      "8,200 lumens with 4K and HDR compatibility. IP5X certified optical engine for 24/7 operation with short throw lens and 1.26x zoom for simulation, edge-blending, and immersive installations.",
    highlights: [
      {
        title: "Short Throw with 1.26x Zoom",
        text: "Project large-format images from short distances with flexible 1.26x zoom for precise sizing — ideal for simulation, edge-blending, and immersive installations.",
      },
      {
        title: "IP5X Certified for Reliability",
        text: "Dust-resistant IP5X certified engine with 24/7 operation and up to 30,000 hours maintenance-free laser life ensures reliable, long-term performance.",
      },
    ],
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
      Installation: {
        "Throw Type": "Short Throw",
        Zoom: "1.26x",
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
    image: imgZU820T,
    gallery: [imgZU820T],
    tagline: "High brightness professional laser projector",
    description:
      "8,800 lumens with 4K and HDR compatibility. IP5X certified optical engine for 24/7 operation with 1.6x zoom for simulation, edge-blending, projection mapping, and immersive installations.",
    highlights: [
      {
        title: "Versatile 1.6x Zoom",
        text: "Standard throw with flexible 1.6x zoom allows precise image sizing for a wide variety of installation scenarios — from classrooms to large venues.",
      },
      {
        title: "Maintenance-Free Performance",
        text: "IP5X dust-resistant engine with up to 30,000 hours laser life delivers reliable, maintenance-free projection for 24/7 operation in demanding environments.",
      },
    ],
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
      Installation: {
        "Throw Type": "Standard Throw",
        Zoom: "1.6x",
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
    image: imgZU725TST,
    gallery: [imgZU725TST],
    tagline: "Ultra bright professional installation laser projector",
    description:
      "7,200 lumens with 4K and HDR compatibility. IP5X certified optical engine with 24/7 operation, 1.26x zoom, and full motorized lens shift for professional installations.",
    highlights: [
      {
        title: "Professional Short Throw Installation",
        text: "1.26x zoom with full motorized lens shift provides precise image positioning from short distances — ideal for boardrooms, houses of worship, and digital signage.",
      },
      {
        title: "IP5X Certified 24/7 Operation",
        text: "Dust-resistant optical engine ensures reliable, maintenance-free performance with up to 30,000 hours laser life in eco mode.",
      },
    ],
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
      Installation: {
        "Throw Type": "Short Throw",
        Zoom: "1.26x",
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
    image: imgZU707T,
    gallery: [imgZU707T],
    tagline: "High brightness professional laser projector",
    description:
      "7,000 lumens with 4K and HDR compatibility. IP6X certified optical engine with 24/7 operation. Perfect for large venues, classrooms, lecture halls, museums, and houses of worship.",
    overview:
      "At 7,000 lumens, with 4K and HDR compatibility, the ZU707T features a dust-resistant IP6X certified optical engine for 24/7 operational capabilities and low maintenance. Long-life laser technology, manual horizontal and vertical lens shift, and built-in 15W speakers. The added control flexibility of HDBaseT 3.0 and LAN make this projector an affordable set-and-forget solution. Suitable for large venues, classrooms, lecture halls, museums, houses of worship, digital signage, simulation, and immersive installations.",
    highlights: [
      {
        title: "DuraCore Laser Technology",
        text: "Industry-leading long lifetime achieved using Optoma's DuraCore technology, implementing advanced laser diode cooling techniques and an innovative dust-resistant design for reliable, maintenance-free operation.",
      },
      {
        title: "IP6X Airtight Optical Engine",
        text: "Independently tested and certified to IEC standard 60529 with an IP6X dust resistance rating. Outstanding dust resistance combined with exceptional brightness ensures industry-leading durability for 24/7 operation.",
      },
      {
        title: "HDBaseT 3.0 Network Control",
        text: "Uncompressed Full HD video, audio, network and control commands delivered on a single CAT cable up to 100 meters. Compatible with RS232, AMX, Crestron RoomView, and Extron IPLink.",
      },
    ],
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
      "Golf Sim Picture Mode",
      "Full 3D Support",
      "360° & Portrait Projection",
    ],
    specs: {},
    specsGrouped: {
      "Projection System": {
        "Display Technology": "DLP®",
        Resolution: "WUXGA (1920 × 1200)",
        "Light Source": "Laser",
        Brightness: "7,000 lumens",
        "Contrast Ratio": "300,000:1",
        "Native Aspect Ratio": "16:10",
      },
      Installation: {
        "Dust Protection": "IP6X Certified",
        "24/7 Operation": "Yes",
        "Lens Shift": "Manual H & V",
        "Keystone Correction": "±30° (H & V)",
        "Auto Keystone": "Vertical",
      },
      Connectivity: {
        HDBaseT: "3.0",
        LAN: "Yes",
        RS232: "Yes",
      },
      Physical: {
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
    image: imgZH551,
    gallery: [imgZH551],
    tagline: "Compact Laser Projector with Wireless Sharing",
    description:
      "5,600 lumens Full HD laser projector featuring Miracast wireless screen sharing, centralized control via OMS, and energy-efficient DuraCore Laser with up to 30,000 hours of operation.",
    overview:
      "The ZH551 is a compact, DuraCore laser projector designed for seamless collaboration and effortless management. Deliver wireless presentations and content sharing with Miracast and streamline your operations with the support of Optoma Management Suite (OMS®) to remotely monitor and control your devices. With 5,600 lumens of high brightness, ZH551 delivers vivid Full HD projection even in rooms with ambient light. Supports over-the-air (OTA) firmware updates and flexible installation with ±30° keystone correction, 1.6x digital zoom, and lens shift.",
    highlights: [
      {
        title: "Share Wirelessly With Miracast",
        text: "Wirelessly share content from a wide range of devices with ease. Screen mirroring compatibility with Miracast technology enables peer-to-peer wireless sharing of presentations, photos, and videos across Windows, macOS, Android, and iOS without requiring a LAN connection.",
      },
      {
        title: "Long-Lasting DuraCore Laser",
        text: "Powered by DuraCore laser technology, the ZH551 offers up to 30,000 hours of maintenance-free operation in eco mode, consistent brightness, instant on/off and greater energy efficiency than lamp-based projectors.",
      },
      {
        title: "Convenient Remote Control via OMS",
        text: "OMS lets IT administrators remotely monitor, control, and troubleshoot projectors effortlessly. Schedule power settings, adjust images, and receive real-time alerts to ensure smooth operation and minimize downtime.",
      },
    ],
    features: [
      "5,600 ISO Lumens Brightness",
      "Full HD 1080p Resolution",
      "Miracast Wireless Projection",
      "DuraCore Laser (30,000 Hours)",
      "Optoma Management Suite (OMS)",
      "OTA Over-the-Air Updates",
      "Energy Efficient",
      "±30° Keystone Correction",
      "1.6x Digital Zoom",
      "Vertical Lens Shift",
    ],
    specs: {},
    specsGrouped: {
      "Projection System": {
        "Display Technology": "DLP™",
        Resolution: "Full HD 1080p (1920 × 1080)",
        "Light Source": "DuraCore Laser",
        Brightness: "5,600 ISO lumens",
        "Contrast Ratio": "3,000,000:1",
        "Laser Life": "Up to 30,000 hours (Eco Mode)",
      },
      "Lens & Optics": {
        "Throw Ratio": "1.4:1 – 2.24:1",
        "Optical Zoom": "1.6x",
        "Digital Zoom": "0.8 – 2.0x",
        "Screen Size": "28\" – 145\" diagonal",
      },
      Features: {
        Wireless: "Miracast",
        Management: "Optoma Management Suite (OMS)",
        Updates: "OTA (Over-the-Air)",
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
    image: imgZK551,
    gallery: [imgZK551],
    tagline: "Compact 4K UHD Laser Projector with Wireless Sharing",
    description:
      "5,100 lumens 4K UHD laser projector with Miracast wireless sharing, centralized OMS control, and energy-efficient DuraCore Laser with up to 30,000 hours of operation.",
    overview:
      "The ZK551 4K UHD laser projector delivers 5,100 ISO lumens of high-brightness performance with Miracast wireless projection. Centralized management via OMS and OTA updates. DuraCore Laser ensures up to 30,000 hours of energy-efficient operation. Ideal for classrooms, meeting rooms, and simulation environments.",
    highlights: [
      {
        title: "4K UHD Resolution",
        text: "Experience stunning 4K UHD visuals with four times the resolution of Full HD, delivering sharper, more vibrant content for classrooms, meeting rooms, and professional presentations.",
      },
      {
        title: "Miracast Wireless & OMS Control",
        text: "Wirelessly share content via Miracast and manage devices remotely with Optoma Management Suite. OTA updates keep your projector current without manual intervention.",
      },
    ],
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
      Features: {
        Wireless: "Miracast",
        Management: "Optoma Management Suite (OMS)",
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
    image: imgZH401E,
    gallery: [imgZH401E],
    tagline: "Cost effective high brightness 1080p Full HD laser projector",
    description:
      "4,500 lumens Full HD 1080p DuraCore laser projector with 2x HDMI 2.0, VGA, RJ-45, RS232. Up to 34% smaller than previous models — ideal for small to medium conference rooms and classrooms.",
    overview:
      "The ZH401e is a hassle-free 4,500 lumen Full HD 1080p DuraCore laser projector featuring 2x HDMI 2.0, VGA-In, RJ-45, RS232, and more. Designed for maintenance-free continuous operation in a sleek, compact form factor up to 34% smaller than previous Optoma models. Compatible with SmartApp for Android and iOS for remote control.",
    highlights: [
      {
        title: "Ultra-Compact Design",
        text: "Up to 34% smaller than previous Optoma models, the ZH401e fits easily into tight installation spaces while delivering powerful 4,500-lumen Full HD projection.",
      },
      {
        title: "Maintenance-Free DuraCore Laser",
        text: "DuraCore laser technology provides reliable, maintenance-free operation with consistent brightness and instant on/off — no lamp replacements needed.",
      },
    ],
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
    ],
    specs: {},
    specsGrouped: {
      "Projection System": {
        Resolution: "Full HD 1080p (1920 × 1080)",
        "Light Source": "DuraCore Laser",
        Brightness: "4,500 lumens",
      },
      Connectivity: {
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
    image: imgZX350E,
    gallery: [imgZX350E],
    tagline: "Compact high brightness laser projector",
    description:
      "3,700 lumens XGA DuraCore laser projector in a compact form factor. Up to 30,000 hours maintenance-free, mercury-free, and 45% less power consumption vs lamp-based models.",
    overview:
      "The ZX350e is one of Optoma's most compact XGA DuraCore laser projectors. Designed for maintenance-free continuous operation at 3,700 lumens with up to 30,000 hours laser life. Cuts power consumption by up to 45% vs lamp-based projectors. Eco-friendly packaging with up to 97% recyclable materials.",
    highlights: [
      {
        title: "Eco-Friendly Design",
        text: "Mercury-free DuraCore laser reduces power consumption by up to 45% vs lamp-based projectors. Eco-friendly packaging with up to 97% recyclable materials for a greener footprint.",
      },
      {
        title: "Ultra-Compact Form Factor",
        text: "Up to 34% smaller than previous models with external power supply for added reliability and portability. Ideal for conference rooms, boardrooms, and corporate spaces.",
      },
    ],
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
    image: imgZW350E,
    gallery: [imgZW350E],
    tagline: "Compact high brightness WXGA laser projector",
    description:
      "4,000 lumens WXGA DuraCore laser projector. Maintenance-free for up to 30,000 hours with 45% lower power consumption and eco-friendly design. Ideal for conference rooms and boardrooms.",
    highlights: [
      {
        title: "Energy-Efficient WXGA Projection",
        text: "4,000 lumens WXGA projection with DuraCore laser technology delivering 45% less power consumption than lamp-based models and up to 30,000 hours of maintenance-free operation.",
      },
    ],
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
    image: imgZW350ST,
    gallery: [imgZW350ST],
    tagline: "Compact short throw WXGA laser projector",
    description:
      "3,600 lumens WXGA DuraCore laser short throw projector. Positioned just a few feet from any wall, with 30,000 hours maintenance-free life and eco-friendly compact design.",
    highlights: [
      {
        title: "Short Throw Convenience",
        text: "Position the projector just a few feet from any wall to display large, vivid images — minimizing shadows and maximizing usable space in classrooms and meeting rooms.",
      },
      {
        title: "Eco-Friendly & Maintenance-Free",
        text: "Mercury-free DuraCore laser with 30,000 hours life and 45% less power consumption. External power supply and eco-friendly recyclable packaging.",
      },
    ],
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
    image: imgZW410UST,
    gallery: [imgZW410UST],
    tagline: "Compact eco-friendly ultra short throw projector",
    description:
      "4,000 lumens WXGA DuraCore laser ultra short throw projector. Projects 100\" from less than two feet away. Up to 50% PCR plastics chassis and 97% recyclable packaging.",
    overview:
      "The ZW410UST delivers 4,000 lumens in an ultra short throw design that projects a 100\" image from less than two feet away, avoiding presenter shadows. DuraCore laser ensures 30,000 hours of mercury-free, maintenance-free operation. Eco-friendly chassis with up to 50% PCR (Post-Consumer Recycled) plastics and 97% recyclable packaging.",
    highlights: [
      {
        title: "Ultra Short Throw Projection",
        text: "Project a 100\" image from less than two feet away, eliminating presenter shadows and maximizing floor space. Ideal for meeting rooms and interactive classrooms.",
      },
      {
        title: "Eco-Friendly Construction",
        text: "Chassis crafted from up to 50% post-consumer recycled plastics with 97% recyclable packaging. Mercury-free DuraCore laser delivers 30,000 hours of maintenance-free operation.",
      },
    ],
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
    image: imgML1080UST,
    gallery: [imgML1080UST],
    tagline: "Smart 1080p Triple Laser (RGB) Google TV Portable UST Projector",
    description:
      "Stream your favorites wirelessly with built-in Google TV. Enjoy 100\" from less than 10 inches away. Triple Laser RGB for vibrant colors, built-in battery, and Dolby Audio.",
    overview:
      "The Photon Go ML1080UST lets you stream shows with built-in Google TV right out of the box. Enjoy a 100\" image from less than 10 inches away — ideal for small spaces. Triple Laser RGB technology delivers vibrant, true-to-life colors. Lightweight with built-in battery and Dolby Audio for the ultimate portable experience.",
    highlights: [
      {
        title: "Built-in Google TV",
        text: "Stream your favorite shows and movies right out of the box with built-in Google TV — no external streaming devices needed. Access thousands of apps and content providers.",
      },
      {
        title: "Triple Laser RGB Technology",
        text: "Triple Laser RGB light source delivers vibrant, true-to-life colors with exceptional brightness and color accuracy for a stunning viewing experience.",
      },
      {
        title: "Ultra Portable with Built-in Battery",
        text: "Lightweight design with built-in battery and Dolby Audio lets you take cinematic projection anywhere. Project 100\" from less than 10 inches away.",
      },
    ],
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
        Audio: "Dolby Audio",
        Battery: "Built-in",
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
    image: imgUHZ36,
    gallery: [imgUHZ36],
    tagline: "Home Entertainment 4K UHD Projector",
    description:
      "3,500 lumens 4K UHD laser projector with HDR support, PureEngine technology, and long-lasting laser. Delivers vibrant color and smooth performance for movies, shows, and games.",
    overview:
      "Transform your space with cinema-quality 4K. The UHZ36 delivers 3,500 lumens of bright 4K UHD visuals with HDR support. PureEngine technology includes PureDetail for crisp textures, PureContrast for richer blacks, PureMotion for fluid action, and vibrant true-to-life colors. One-click Filmmaker Mode restores original frame rate, color grading, and aspect ratios.",
    highlights: [
      {
        title: "PureEngine™ Visual Enhancement",
        text: "PureEngine technology boosts color output, contrast, and image detail. PureDetail for crisp textures, PureContrast for richer blacks, and PureMotion for fluid action sequences.",
      },
      {
        title: "Filmmaker Mode™",
        text: "One-click Filmmaker Mode preserves the director's creative intent by maintaining accurate color temperature, colors, contrast, and gamma — ensuring every scene is displayed as originally envisioned.",
      },
    ],
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
        HDR: "Supported",
      },
      "Image Enhancement": {
        PureEngine: "PureDetail + PureContrast + PureMotion",
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
    image: imgUHZ58LV,
    gallery: [imgUHZ58LV],
    tagline: "4K UHD Dual Laser HDR10+ Projector",
    description:
      "True 4K UHD dual-laser projector with HDR10+, 95% DCI-P3 color, and Filmmaker Mode — engineered for brilliant home cinema performance with stunning clarity and detail.",
    overview:
      "Experience brilliant home cinema with Optoma's UHZ58LV. True 4K UHD, dual-laser projection delivers razor-sharp images and vibrant color with HDR10+ and 95% DCI-P3 wide color gamut. Filmmaker Mode preserves the director's vision. The additional red laser enhances color accuracy without lamp replacements.",
    highlights: [
      {
        title: "Dual-Laser Technology",
        text: "An additional red laser enhances color accuracy beyond what single-laser projectors can achieve, delivering 95% DCI-P3 wide color gamut for stunning, true-to-life color reproduction.",
      },
      {
        title: "HDR10+ & Filmmaker Mode",
        text: "HDR10+ dynamically optimizes brightness, contrast, and color on a scene-by-scene basis. Filmmaker Mode preserves the director's creative intent for an authentic cinematic experience.",
      },
    ],
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
        HDR: "HDR10+",
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
    image: imgUHZ68,
    gallery: [imgUHZ68],
    tagline: "Dolby Vision Ultra High-Bright 4K UHD Laser Home Theater Projector",
    description:
      "4,500 lumens 4K UHD with Dolby Vision, HDR10+, 90%+ DCI-P3 wide color gamut, and 2,800,000:1 contrast. Ultra-smooth gaming on 120\" with virtually zero input lag.",
    overview:
      "Bring cinematic visuals and immersive sound straight to your living room. The UHZ68 features stunning 4K UHD resolution, 4,500 lumens and a 2,800,000:1 contrast delivering unmatched clarity and vibrant color. Powered by Dolby Vision and HDR10+ with 90%+ DCI-P3 wide color gamut for true-to-life color reproduction. Ultra-smooth gameplay on an enormous 120-inch canvas with virtually zero input lag. HDMI 2.1 Auto Low Latency Mode (ALLM) automatically optimizes the display for ultra-smooth, low-lag gaming.",
    highlights: [
      {
        title: "Stunning 4K UHD with Dolby Vision",
        text: "Experience stunning 4K UHD visuals with Dolby Vision optimizing each frame for remarkable brightness, contrast, and color. Every frame bursts with cinematic depth, lifelike skin tones, and brilliant highlights.",
      },
      {
        title: "True-to-Life DCI-P3 Color",
        text: "Delivering 100% Rec.709 and 90%+ DCI-P3 wide color gamut, this projector ensures accurate, lifelike colors. Deeper blacks, vibrant hues, and stunning contrast without rainbow effects.",
      },
      {
        title: "Big Screen Gaming with ALLM",
        text: "HDMI 2.1 Auto Low Latency Mode lets your device automatically optimize the display for ultra-smooth, low-lag gaming. Enjoy gameplay on an enormous 120-inch canvas with virtually zero input lag.",
      },
    ],
    features: [
      "4K UHD Resolution",
      "4,500 Lumens Brightness",
      "Dolby Vision & HDR10+",
      "2,800,000:1 Contrast Ratio",
      "90%+ DCI-P3 Wide Color Gamut",
      "HDMI 2.1 Auto Low Latency Mode (ALLM)",
      "120\" Gaming Canvas",
      "Laser Light Source",
      "PureEngine™ Ultra",
      "Filmmaker Mode™",
      "ISF Day/Night Modes",
      "WiSA SoundSend Certified",
      "eARC Audio",
    ],
    specs: {},
    specsGrouped: {
      "Projection System": {
        "Display Technology": "DLP®",
        Resolution: "4K UHD (3840 × 2160)",
        "Light Source": "Laser",
        Brightness: "4,500 lumens",
        "Contrast Ratio": "2,800,000:1",
        "Color Gamut": "90%+ DCI-P3 | 100% REC.709",
        HDR: "Dolby Vision, HDR10+",
      },
      Gaming: {
        "ALLM": "HDMI 2.1 Auto Low Latency Mode",
        "Input Lag (4K60)": "20ms",
        "Input Lag (1080p240)": "8.4ms",
        "Screen Size": "30.6\" – 301.1\" diagonal",
      },
      "Image Enhancement": {
        PureEngine: "PureEngine™ Ultra",
        "Filmmaker Mode": "Yes",
        ISF: "Day/Night Modes",
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
    image: imgPK31,
    gallery: [imgPK31],
    tagline: "4K UHD 3LED Compact Home Entertainment Projector",
    description:
      "Vibrant 4K UHD visuals with ultra-low 4.6ms input lag — perfect for gaming, streaming, and more. 3LED light source with 900 lumens, built-in speaker, and compact plug-and-play design.",
    highlights: [
      {
        title: "Ultra-Low Input Lag Gaming",
        text: "With just 4.6ms input lag, the PK31 delivers ultra-responsive gaming on a big screen — perfect for competitive and casual gamers alike.",
      },
      {
        title: "Compact Plug-and-Play Design",
        text: "Simply plug in and project — the PK31's compact form factor and built-in speaker make it the perfect entertainment companion for any room.",
      },
    ],
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
      Performance: {
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
    image: imgPK32,
    gallery: [imgPK32],
    tagline: "4K UHD 4LED Compact Home Entertainment and Gaming Projector",
    description:
      "Crisp 4K visuals in a compact, easy-to-carry design. 4LED brightness, HDR support, 4.6ms low input lag, auto focus, and auto keystone correction for effortless setup.",
    highlights: [
      {
        title: "Effortless Auto Setup",
        text: "Auto focus and auto keystone correction ensure a perfectly aligned, sharp image every time — no manual adjustments needed for instant big-screen entertainment.",
      },
      {
        title: "4K UHD with HDR",
        text: "Crisp 4K UHD resolution with HDR support delivers stunning visuals with vibrant colors and deep contrast. 4LED technology provides enhanced brightness and color accuracy.",
      },
    ],
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
        HDR: "Supported",
      },
      Performance: {
        "Input Lag": "4.6ms",
      },
      Convenience: {
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
    image: imgPH31,
    gallery: [imgPH31],
    tagline: "1080p Full HD LED Compact Portable Projector",
    description:
      "Compact Full HD projector with 1,500 lumens for bright, clear viewing up to 150\". Auto vertical keystone correction and built-in speaker for easy setup and everyday entertainment.",
    highlights: [
      {
        title: "Big Screen Entertainment",
        text: "Project vivid Full HD content up to 150\" with 1,500 lumens of LED brightness — perfect for movie nights, gaming sessions, and presentations in any room.",
      },
      {
        title: "Easy Auto Keystone",
        text: "Auto vertical keystone correction delivers a perfectly aligned image even when the projector isn't centered, making setup effortless.",
      },
    ],
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
      },
    },
    warranty: "Contact Optoma for warranty details.",
  },
];
