import type { Product } from "./products";
import pm150 from "@/assets/monitors/pm-150.jpg";
import pm150bw from "@/assets/monitors/pm-150bw.jpg";
import stylusPen from "@/assets/monitors/stylus-pen.jpg";
import highlightUltralight from "@/assets/monitors/highlights/ultralight.jpg";
import highlightVivid from "@/assets/monitors/highlights/vivid-picture.jpg";
import highlightWireless from "@/assets/monitors/highlights/wireless-connectivity.jpg";

export const monitorProducts: Product[] = [
  {
    id: "pm-150",
    name: "RICOH Portable Monitor 150",
    category: "portable-monitors",
    subcategory: "Wired",
    brand: "ricoh",
    image: pm150,
    gallery: [pm150],
    tagline: "World's lightest 15.6\" OLED touchscreen portable monitor",
    description:
      "Ultra-light, high-performance 15.6\" OLED portable monitor with 10-point touch. Weighing just 1.23lb, it's the world's lightest touchscreen portable monitor in its class.",
    overview:
      "Unlock your productivity's limitless potential with the RICOH Portable Monitor 150. This wired model is light, sharp, and versatile — perfect for those on the go or looking to extend their screen real estate. Whether it's for work or play, the RICOH Portable Monitor 150 expands what is possible.",
    highlights: [
      {
        title: "Ultra-lightweight and portable",
        text: "The lightest 15.6\" touchscreen portable monitor on the market at just 1.23lb. At only 0.19\" at its slimmest section, it takes up very little bag space.",
        image: highlightUltralight,
      },
      {
        title: "Vivid OLED picture quality",
        text: "15.6\" OLED screen with full HD for higher brightness, better contrast, and a rapid response time — as low as 1ms. Plus a 10-point touch display to adapt to any task.",
        image: highlightVivid,
      },
      {
        title: "Wide range of connectivity",
        text: "2 USB-C connections for easy wired access to Windows, MacOS, iOS, and Android devices. Simple plug-and-play setup for instant dual-screen productivity.",
        image: highlightWireless,
      },
    ],
    features: [
      "15.6\" OLED Display with 1920x1080 resolution",
      "1ms response time",
      "10-point multi-touch with tempered glass",
      "Weighs only 1.23lb (19.8oz)",
      "Ultra-slim 5mm profile",
      "Integrated kickstand",
      "2x USB Type-C ports",
      "2 integrated 1.5W speakers",
      "Scratch and shatterproof tempered glass",
      "ENERGY STAR certified",
      "Compatible with Windows, MacOS, iOS, Android",
    ],
    specs: {
      Display: "15.6\" OLED / 1920x1080",
      "Response Time": "1ms",
      Touch: "10-point multi-touch",
      "I/F Ports": "USB Type-C x2",
      Audio: "2 integrated 1.5W speakers (rear)",
      Weight: "1.23lb / 19.8oz",
      Connectivity: "Wired (USB-C)",
    },
    specsGrouped: {
      Display: {
        "Screen Size": "15.6\"",
        Technology: "OLED",
        Resolution: "1920 x 1080 (Full HD)",
        "Response Time": "1ms",
        "Touch Points": "10-point multi-touch",
        Glass: "Scratch and shatterproof tempered glass",
      },
      Connectivity: {
        Ports: "USB Type-C x2",
        "Connection Type": "Wired",
        Compatibility: "Windows, MacOS, iOS, Android",
      },
      Audio: {
        Speakers: "2 integrated 1.5W speakers (rear)",
      },
      Physical: {
        Weight: "1.23lb / 19.8oz",
        "Thinnest Point": "0.19\" (5mm)",
        Stand: "Integrated kickstand",
      },
    },
    warranty: "1 Year Limited Warranty",
    isNew: true,
    isFeatured: true,
  },
  {
    id: "pm-150bw",
    name: "RICOH Portable Monitor 150BW",
    category: "portable-monitors",
    subcategory: "Wireless",
    brand: "ricoh",
    image: pm150bw,
    gallery: [pm150bw],
    tagline: "Wireless 15.6\" OLED touchscreen portable monitor",
    description:
      "Wireless portable monitor with 15.6\" OLED display and 10-point touch. Connect wirelessly via Miracast or wired via USB-C. Multicast to up to 5 monitors simultaneously.",
    overview:
      "The RICOH Portable Monitor 150BW adds wireless freedom to the award-winning Portable Monitor Series. Connect wirelessly to Windows, Mac, Android, and iOS devices via Miracast — or use wired USB-C. Multicast up to 5 150BW monitors at once for dynamic presentations and collaborative workflows.",
    highlights: [
      {
        title: "Ultra-lightweight and portable",
        text: "Among the lightest wireless touchscreen portable monitors at just 1.58lb. Ultra-slim 5mm profile with integrated kickstand and built-in speakers.",
        image: highlightUltralight,
      },
      {
        title: "Vivid OLED picture quality",
        text: "15.6\" OLED screen with full HD for higher brightness, better contrast, and a rapid response time — as low as 1ms. Plus a 10-point touch display to adapt to any task.",
        image: highlightVivid,
      },
      {
        title: "Wireless & wired connectivity",
        text: "2 USB-C connections plus Miracast wireless. Handle up to 2 devices on 1 monitor and wirelessly multicast up to 5 150BW portable monitors at a time.",
        image: highlightWireless,
      },
    ],
    features: [
      "15.6\" OLED Display with 1920x1080 resolution",
      "1ms response time",
      "10-point multi-touch with tempered glass",
      "Weighs only 1.58lb (25.2oz)",
      "Ultra-slim 5mm profile",
      "Integrated kickstand",
      "2x USB Type-C ports",
      "Miracast wireless connectivity",
      "Multicast up to 5 monitors simultaneously",
      "2 integrated 1.5W speakers",
      "Scratch and shatterproof tempered glass",
      "ENERGY STAR certified",
      "Compatible with Windows, MacOS, iOS, Android",
    ],
    specs: {
      Display: "15.6\" OLED / 1920x1080",
      "Response Time": "1ms",
      Touch: "10-point multi-touch",
      "I/F Ports": "USB Type-C x2",
      Wireless: "Miracast",
      Audio: "2 integrated 1.5W speakers (rear)",
      Weight: "1.58lb / 25.2oz",
    },
    specsGrouped: {
      Display: {
        "Screen Size": "15.6\"",
        Technology: "OLED",
        Resolution: "1920 x 1080 (Full HD)",
        "Response Time": "1ms",
        "Touch Points": "10-point multi-touch",
        Glass: "Scratch and shatterproof tempered glass",
      },
      Connectivity: {
        Ports: "USB Type-C x2",
        Wireless: "Miracast",
        "Wireless Multicast": "Up to 5 monitors",
        "Devices per Monitor": "Up to 2 via wireless",
        Compatibility: "Windows, MacOS, iOS, Android",
      },
      Audio: {
        Speakers: "2 integrated 1.5W speakers (rear)",
      },
      Physical: {
        Weight: "1.58lb / 25.2oz",
        "Thinnest Point": "0.19\" (5mm)",
        Stand: "Integrated kickstand",
      },
    },
    warranty: "1 Year Limited Warranty",
    isNew: true,
    isBestSeller: true,
  },
  {
    id: "stylus-pen-type-1",
    name: "RICOH Stylus Pen Type 1",
    category: "portable-monitors",
    subcategory: "Accessories",
    brand: "ricoh",
    image: stylusPen,
    gallery: [stylusPen],
    tagline: "Precision digital pen for RICOH Portable Monitors",
    description:
      "Active Electrostatic stylus pen with 4,096 levels of pressure sensitivity. Features two function buttons for precise digital pen input with RICOH Portable Monitors.",
    overview:
      "The optional RICOH Stylus Pen's Active Electrostatic technology enables a precise, power-efficient digital pen input experience with the RICOH Portable Monitors. Take notes, annotate documents, draw and write — so no great idea goes missing.",
    features: [
      "Active Electrostatic technology",
      "4,096 levels of pressure sensitivity",
      "Two function buttons",
      "Power-efficient design",
      "Compatible with RICOH Portable Monitor 150 & 150BW",
      "Precise digital pen input",
    ],
    specs: {
      Technology: "Active Electrostatic",
      "Pressure Sensitivity": "4,096 levels",
      Buttons: "2 function buttons",
      Compatibility: "RICOH Portable Monitor 150, 150BW",
    },
    specsGrouped: {
      General: {
        Technology: "Active Electrostatic",
        "Pressure Sensitivity": "4,096 levels",
        "Function Buttons": "2",
        Compatibility: "RICOH Portable Monitor 150, 150BW",
      },
    },
  },
];
