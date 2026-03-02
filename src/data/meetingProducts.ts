import type { Product } from "./products";
import imgMeeting360 from "@/assets/meeting/meeting-360.jpg";
import productMeeting from "@/assets/product-meeting.jpg";

export const meetingProducts: Product[] = [
  {
    id: "meeting-360",
    name: "RICOH Meeting 360",
    category: "smart-meeting",
    brand: "ricoh",
    tagline: "3-in-1 Video Conferencing Camera",
    image: imgMeeting360,
    gallery: [imgMeeting360],
    description: "Intelligent 3-in-1 video conferencing camera with 360° panoramic video, omnidirectional audio, and active speaker detection for immersive hybrid meetings.",
    overview: "The RICOH Meeting 360 is a 3-in-1 video conferencing camera designed to enhance hybrid meetings with an immersive 360° experience. Dual high-resolution panoramic cameras ensure everyone is visible, while an omnidirectional microphone array and integrated 360° speakers deliver crystal-clear audio for all participants. Advanced speech detection automatically focuses on and highlights active speakers, giving everyone a seat at the table. With a lightweight, plug-and-play design, Meeting 360 is the flexible solution for effortless collaboration—anytime, anywhere.",
    highlights: [
      {
        title: "Immersive 360° Video",
        text: "Dual high-resolution panoramic cameras capture the entire room in stunning clarity, making every meeting more engaging and inclusive. 360° panoramic video ensures remote attendees never miss a thing.",
        image: productMeeting,
      },
      {
        title: "Crystal-Clear Audio",
        text: "A powerful omnidirectional microphone array captures voices up to 20 feet away, while three 8W speakers ensure remote participants sound as if they're in the room. Hear every voice clearly.",
      },
      {
        title: "Active Speaker Focus",
        text: "Meeting 360 intelligently identifies and highlights active speakers as the conversation flows. Automatically detects up to 8 people, delivering a panoramic view while highlighting up to 3 active speakers.",
      },
      {
        title: "Multi-Platform Compatibility",
        text: "Certified for Zoom® and works seamlessly with most video conferencing platforms including Microsoft Teams®, Cisco Webex®, Google Meet®, and more. USB-C plug-and-play connectivity simplifies setup.",
      },
    ],
    features: [
      "360° Panoramic Dual Cameras",
      "Omnidirectional Microphone Array (20 ft range)",
      "3x 8W Integrated Speakers",
      "Active Speaker Detection (up to 8 people)",
      "USB-C Plug & Play",
      "Multi-Platform: Zoom, Teams, Webex, Google Meet",
      "Built-in Touch Sensor for Layout Switching",
      "Lightweight & Portable (1.13 kg)",
    ],
    specs: {
      "Resolution": "1080p HD",
      "Cameras": "Dual Panoramic",
      "Microphone Range": "20 ft",
      "Speaker Detection": "Up to 8 people",
      "Connectivity": "USB-C",
      "Weight": "2.49 lb / 1.13 kg",
    },
    specsGrouped: {
      "Video": {
        "Resolution": "1080p HD",
        "Cameras": "Dual High-Resolution Panoramic",
        "Field of View": "360° Panoramic",
        "Speaker Detection": "Up to 8 people, highlights up to 3 active speakers",
        "Discernible Distance": "12 ft",
      },
      "Audio": {
        "Microphones": "Omnidirectional Array",
        "Microphone Pickup Range": "20 ft",
        "Speakers": "3 × 8W",
        "Audio Type": "360° Omnidirectional",
      },
      "Connectivity": {
        "Interface": "USB-C",
        "Compatibility": "Zoom (Certified), Microsoft Teams, Cisco Webex, Google Meet",
        "Setup": "Plug & Play",
      },
      "Physical": {
        "Dimensions (W × D × H)": "4.34\" × 4.34\" × 10.73\" (110 × 110 × 273 mm)",
        "Weight": "2.49 lb / 1.13 kg",
        "Controls": "Built-in Touch Sensor",
      },
    },
    warranty: "Advance Exchange Priority Replacement available — overnight replacement service.",
    isNew: true,
    isFeatured: true,
  },
];
