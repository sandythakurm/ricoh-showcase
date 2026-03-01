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
    highlights: [
      {
        title: "Enhance Productivity",
        text: "The RICOH IWB A Series simplifies business workflows, allowing employees to focus on essential tasks and save time with easy-to-use features. IWBs integrate with productivity tools, improving project management and reducing miscommunication. In classrooms, IWBs engage students with interactive lessons and instant feedback.",
      },
      {
        title: "Empower Collaboration",
        text: "Share screen images and annotations in real-time so team members can collaborate more effectively, regardless of their location. The interactive features make it easier to communicate ideas visually, leading to more dynamic and productive meetings.",
      },
      {
        title: "Customise Your Environment",
        text: "Ricoh's open architecture allows businesses to customise and integrate the whiteboard into their existing systems, ensuring it fits perfectly within the company's IT ecosystem — from small meeting rooms to large conference spaces.",
      },
      {
        title: "Reduce Environmental Impact",
        text: "Interactive whiteboards offer a sustainable alternative to traditional paper-based methods by digitising lessons and notes, significantly reducing paper consumption. RICOH Interactive whiteboards are designed with energy efficiency in mind.",
      },
    ],
    features: [
      '65" 4K UHD Display (3840 × 2160)',
      "Up to 40 Multi-Touch Points",
      "Embedded Android OS & Google EDLA Certified",
      "Expandable with Windows Controller",
      "Wired & Wireless Connectivity",
      "Built-in Whiteboard App & Google Play Store",
      "Infrared Touch with Zero Bonding",
      "50,000-Hour LED Lifetime",
      "OPS Slot for Expandability",
      "Energy Efficient & Eco-Friendly",
    ],
    specs: {
      "Panel Size": '65" wide',
      Resolution: "3,840 × 2,160 (4K UHD)",
      Brightness: "400 cd/m²",
      "Contrast Ratio": "5,000 : 1",
      "Touch Points": "40",
      "Touch Technology": "Infrared Touch Frame / Zero Bonding",
      "Front Interface": "HDMI ×1, USB-C ×1, USB-A 3.0 ×2, USB-B 3.0 ×1, MIC In ×1",
      "Rear Interface": "USB-A ×3, USB-C ×1, USB-B ×3, HDMI In ×2, DP ×1, OPS ×1, RS232 ×1, Audio Out ×1, SPDIF ×1, HDMI Out ×1, LAN ×2",
      "Dimensions (W×D×H)": "1,513 × 93 × 953 mm",
      Weight: "40 kg",
      "LED Lifetime": "50,000 hours",
      "Viewing Angle": "178° / 178°",
      "Refresh Rate": "60 Hz",
      VESA: "600 × 400 mm",
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
    highlights: [
      {
        title: "Enhance Productivity",
        text: "Simplifies business workflows and allows employees to focus on essential tasks with easy-to-use features. Integrates with productivity tools to improve project management and reduce miscommunication by keeping all team members aligned.",
      },
      {
        title: "Empower Collaboration",
        text: "Share screen images and annotations in real-time so team members can collaborate more effectively, regardless of their location. In educational settings, these interactive features facilitate remote learning and participation.",
      },
      {
        title: "Customise Your Environment",
        text: "Ricoh's open architecture allows businesses to customise and integrate the whiteboard into their existing systems. This adaptability makes it a valuable tool for various business environments, from small meeting rooms to large conference spaces.",
      },
      {
        title: "Reduce Environmental Impact",
        text: "A sustainable alternative to traditional paper-based methods. By storing all resources digitally, these devices eliminate the need for extensive printing while conserving natural resources.",
      },
    ],
    features: [
      '75" 4K UHD Display (3840 × 2160)',
      "Up to 40 Multi-Touch Points",
      "Embedded Android OS & Google EDLA Certified",
      "Expandable with Windows Controller",
      "Wired & Wireless Connectivity",
      "Built-in Whiteboard App & Google Play Store",
      "Infrared Touch with Zero Bonding",
      "50,000-Hour LED Lifetime",
      "OPS Slot for Expandability",
      "Energy Efficient & Eco-Friendly",
    ],
    specs: {
      "Panel Size": '75" wide',
      Resolution: "3,840 × 2,160 (4K UHD)",
      Brightness: "400 cd/m²",
      "Contrast Ratio": "5,500 : 1",
      "Touch Points": "40",
      "Touch Technology": "Infrared Touch Frame / Zero Bonding",
      "Front Interface": "HDMI ×1, USB-C ×1, USB-A 3.0 ×2, USB-B 3.0 ×1, MIC In ×1",
      "Rear Interface": "USB-A ×3, USB-C ×1, USB-B ×3, HDMI In ×2, DP ×1, OPS ×1, RS232 ×1, Audio Out ×1, SPDIF ×1, HDMI Out ×1, LAN ×2",
      "Dimensions (W×D×H)": "1,735 × 92 × 1,077 mm",
      Weight: "52 kg",
      "LED Lifetime": "50,000 hours",
      "Viewing Angle": "178° / 178°",
      "Refresh Rate": "60 Hz",
      VESA: "800 × 400 mm",
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
    highlights: [
      {
        title: "Enhance Productivity",
        text: "The RICOH IWB A Series simplifies business workflows, allowing employees to focus on essential tasks. IWBs engage students with interactive lessons, making learning more efficient and allowing teachers to provide instant feedback.",
      },
      {
        title: "Empower Collaboration",
        text: "Share screen images and annotations in real-time so team members can collaborate more effectively, regardless of their location. The interactive features make it easier to communicate ideas visually.",
      },
      {
        title: "Customise Your Environment",
        text: "Ricoh's open architecture allows businesses to customise and integrate the whiteboard into their existing systems. Similarly, in classrooms, IWBs can be tailored to meet educational needs across various subjects.",
      },
      {
        title: "Reduce Environmental Impact",
        text: "Interactive whiteboards offer a sustainable alternative to traditional paper-based methods by digitising lessons and notes, significantly reducing paper consumption and minimising waste.",
      },
    ],
    features: [
      '86" 4K UHD Display (3840 × 2160)',
      "Up to 40 Multi-Touch Points",
      "Embedded Android OS & Google EDLA Certified",
      "Expandable with Windows Controller",
      "Wired & Wireless Connectivity",
      "Built-in Whiteboard App & Google Play Store",
      "Infrared Touch with Zero Bonding",
      "50,000-Hour LED Lifetime",
      "OPS Slot for Expandability",
      "Energy Efficient & Eco-Friendly",
    ],
    specs: {
      "Panel Size": '86" wide',
      Resolution: "3,840 × 2,160 (4K UHD)",
      Brightness: "400 cd/m²",
      "Contrast Ratio": "4,000 : 1",
      "Touch Points": "40",
      "Touch Technology": "Infrared Touch Frame / Zero Bonding",
      "Front Interface": "HDMI ×1, USB-C ×1, USB-A 3.0 ×2, USB-B 3.0 ×1, MIC In ×1",
      "Rear Interface": "USB-A ×3, USB-C ×1, USB-B ×3, HDMI In ×2, DP ×1, OPS ×1, RS232 ×1, Audio Out ×1, SPDIF ×1, HDMI Out ×1, LAN ×2",
      "Dimensions (W×D×H)": "1,981 × 92 × 1,217 mm",
      Weight: "65 kg",
      "LED Lifetime": "50,000 hours",
      "Viewing Angle": "178° / 178°",
      "Refresh Rate": "60 Hz",
      VESA: "800 × 400 mm",
    },
    isFeatured: true,
    isNew: true,
  },
];
