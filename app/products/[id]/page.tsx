import { Navigation } from "@/components/navigation";
import { ProductDetail } from "@/components/product-detail";
import { Footer } from "@/components/footer";
import { notFound } from "next/navigation";

const products = [
  {
    id: 1,
    name: "MIL6080 Premium Home Theater System",
    images: [
      "/images/products/mil6080.png",
      "/images/products/mil6080.png",
      "/images/products/mil6080.png",
    ],
    category: "Home Theater",
    brand: "MI+",
    inStock: true,
    features: [
      "Material: Wooden Subwoofer",
      "Audio output: 36W",
      "Remote control: Yes",
      "Connection: Bluetooth, AC/DC, USB, SD, AUX",
      'Subwoofer size: 4"',
      "Box Size: L305*W198*H380",
    ],
    specifications: {
      "System Type": "3.1 Home Theater System",
      "Total Power": "36W",

      "Remote Control": "Yes",
      "Box Size": "L305*W198*H380",
    },
  },
  {
    id: 2,
    name: "MIL6020B Digital Home Theater System",
    images: [
      "/images/products/mil6020b.jpg",
      "/images/products/mil6020b.jpg",
      "/images/products/mil6020b.jpg",
    ],
    category: "Home Theater",
    brand: "MI+",
    inStock: true,
    features: [
      "Material: Wooden Subwoofer",
      "Audio output: 50W",
      "Remote control: Yes",
      "Connection: Bluetooth, AC/DC, USB, SD, AUX",
      'Subwoofer size: 4"',
      "Box Size: L342*W232*H398",
    ],
    specifications: {
      "System Type": "3.1 Home Theater System",
      "Total Power": "50W",

      "Remote Control": "Yes",
      "Box Size": "L342*W232*H398",
    },
  },
  {
    id: 3,
    name: "MILA4012 Compact Stereo System",
    images: [
      "/images/products/mila4012.jpg",
      "/images/products/mila4012.jpg",
      "/images/products/mila4012.jpg",
    ],
    category: "Stereo Systems",
    brand: "MI+",
    inStock: true,
    features: [
      "Material: Wooden Subwoofer",
      "Audio output: 36W",
      "Remote control: Yes",
      "Connection: Bluetooth, AC/DC, USB, SD, AUX",
      'Subwoofer size: 4"',
      "Box Size: L342*W232*H398",
    ],
    specifications: {
      "System Type": "2.1 Stereo System",
      "Total Power": "36W",

      "Remote Control": "Yes",
      "Box Size": "L342*W232*H398",
    },
  },
  {
    id: 4,
    name: "MILA6007 Complete Home Theater System",
    images: [
      "/images/products/mila6007.png",
      "/images/products/mila6007.png",
      "/images/products/mila6007.png",
    ],
    category: "Home Theater",
    brand: "MI+",
    inStock: true,
    features: [
      "Material: Wooden Subwoofer",
      "Audio output: 50W",
      "Remote control: Yes",
      "Connection: Bluetooth, AC/DC, USB, SD, AUX",
      'Subwoofer size: 4"',
      "Box Size: L342*W232*H398",
    ],
    specifications: {
      "System Type": "5.1 Home Theater System",
      "Total Power": "50W",

      "Remote Control": "Yes",
      "Box Size": "L342*W232*H398",
    },
  },
  {
    id: 5,
    name: "MIL6090 RGB Gaming Audio System",
    images: [
      "/images/products/mil6090.jpg",
      "/images/products/mil6090.jpg",
      "/images/products/mil6090.jpg",
    ],
    category: "Gaming Audio",
    brand: "MI+",
    inStock: true,
    features: [
      "Material: Wooden Subwoofer",
      "Audio output: 50W",
      "Remote control: Yes",
      "Connection: Bluetooth, AC/DC, USB, SD, AUX",
      'Subwoofer size: 4"',
      "Box Size: L342*W232*H398",
    ],
    specifications: {
      "System Type": "3.1 Gaming Audio System",
      "Total Power": "50W",

      "Remote Control": "Yes",
      "Box Size": "L342*W232*H398",
    },
  },
  {
    id: 6,
    name: "MIL601A Home Theater System",
    images: [
      "/images/products/mil601a.jpg",
      "/images/products/mil601a.jpg",
      "/images/products/mil601a.jpg",
    ],
    category: "Home Theater",
    brand: "MI+",
    inStock: true,
    features: [
      "Material: Wooden Subwoofer",
      "Audio output: 70W",
      "Remote control: Yes",
      "Connection: Bluetooth, AC/DC, USB, SD, AUX",
      'Subwoofer size: 6.5"',
      "Box Size: L370*W370*H340",
    ],
    specifications: {
      "System Type": "3.1 Home Theater System",
      "Total Power": "70W",

      "Remote Control": "Yes",
      "Box Size": "L370*W370*H340",
    },
  },
  {
    id: 7,
    name: "MIL901A Home Theater System",
    images: [
      "/images/products/mil901a.jpg",
      "/images/products/mil901a.jpg",
      "/images/products/mil901a.jpg",
    ],
    category: "Home Theater",
    brand: "MI+",
    inStock: true,
    features: [
      "Material: Wooden Subwoofer",
      "Audio output: 70W",
      "Remote control: Yes",
      "Connection: Bluetooth, AC/DC, USB, SD, AUX",
      'Subwoofer size: 6.5"',
      "Box Size: L370*W370*H340",
    ],
    specifications: {
      "System Type": "3.1 Home Theater System",
      "Total Power": "70W",

      "Remote Control": "Yes",
      "Box Size": "L370*W370*H340",
    },
  },
  {
    id: 8,
    name: "MIM6065 Home Theater System",
    images: [
      "/images/products/mim6065.jpg",
      "/images/products/mim6065.jpg",
      "/images/products/mim6065.jpg",
    ],
    category: "Home Theater",
    brand: "MI+",
    inStock: true,
    features: [
      "Material: Wooden Subwoofer",
      "Audio output: 70W",
      "Remote control: Yes",
      "Connection: Bluetooth, AC/DC, USB, SD, AUX",
      'Subwoofer size: 6.5"',
      "Box Size: L370*W370*H340",
    ],
    specifications: {
      "System Type": "3.1 Home Theater System",
      "Total Power": "70W",

      "Remote Control": "Yes",
      "Box Size": "L370*W370*H340",
    },
  },
  {
    id: 9,
    name: "MIM6085 Home Theater System",
    images: [
      "/images/products/mim6085.jpg",
      "/images/products/mim6085.jpg",
      "/images/products/mim6085.jpg",
    ],
    category: "Home Theater",
    brand: "MI+",
    inStock: true,
    features: [
      "Material: Wooden Subwoofer",
      "Audio output: 80W",
      "Remote control: Yes",
      "Connection: Bluetooth, AC/DC, USB, SD, AUX",
      'Subwoofer size: 6.5"',
      "Box Size: L415*W364*H390",
    ],
    specifications: {
      "System Type": "3.1 Home Theater System",
      "Total Power": "80W",

      "Remote Control": "Yes",
      "Box Size": "L415*W364*H390",
    },
  },
  {
    id: 10,
    name: "MIM602 Home Theater System",
    images: [
      "/images/products/mim602.jpg",
      "/images/products/mim602.jpg",
      "/images/products/mim602.jpg",
    ],
    category: "Home Theater",
    brand: "MI+",
    inStock: true,
    features: [
      "Material: Wooden Subwoofer",
      "Audio output: 80W",
      "Remote control: Yes",
      "Connection: Bluetooth, AC/DC, USB, SD, AUX",
      'Subwoofer size: 6.5"',
      "Box Size: L415*W375*H390",
    ],
    specifications: {
      "System Type": "3.1 Home Theater System",
      "Total Power": "80W",

      "Remote Control": "Yes",
      "Box Size": "L415*W375*H390",
    },
  },
  {
    id: 11,
    name: "MIM662 Home Theater System",
    images: [
      "/images/products/mim662.jpg",
      "/images/products/mim662.jpg",
      "/images/products/mim662.jpg",
    ],
    category: "Home Theater",
    brand: "MI+",
    inStock: true,
    features: [
      "Material: Wooden Subwoofer",
      "Audio output: 80W",
      "Remote control: Yes",
      "Connection: Bluetooth, AC/DC, USB, SD, AUX",
      'Subwoofer size: 6.5"',
      "Box Size: L370*W340*H340",
    ],
    specifications: {
      "System Type": "3.1 Home Theater System",
      "Total Power": "80W",

      "Remote Control": "Yes",
      "Box Size": "L370*W340*H340",
    },
  },
  {
    id: 12,
    name: "MIM663A Home Theater System",
    images: [
      "/images/products/mim663a.jpg",
      "/images/products/mim663a.jpg",
      "/images/products/mim663a.jpg",
    ],
    category: "Home Theater",
    brand: "MI+",
    inStock: true,
    features: [
      "Material: Wooden Subwoofer",
      "Audio output: 70W",
      "Remote control: Yes",
      "Connection: Bluetooth, AC/DC, USB, SD, AUX",
      'Subwoofer size: 6.5"',
      "Box Size: L380*W322*H416",
    ],
    specifications: {
      "System Type": "3.1 Home Theater System",
      "Total Power": "70W",

      "Remote Control": "Yes",
      "Box Size": "L380*W322*H416",
    },
  },
  {
    id: 13,
    name: "MIM6510B-H Home Theater System",
    images: [
      "/images/products/mim6510b-h.jpg",
      "/images/products/mim6510b-h.jpg",
      "/images/products/mim6510b-h.jpg",
    ],
    category: "Home Theater",
    brand: "MI+",
    inStock: true,
    features: [
      "Material: Wooden Subwoofer",
      "Audio output: 70W",
      "Remote control: Yes",
      "Connection: Bluetooth, AC/DC, USB, SD, AUX",
      'Subwoofer size: 6.5"',
      "Box Size: L380*W322*H416",
    ],
    specifications: {
      "System Type": "3.1 Home Theater System",
      "Total Power": "70W",

      "Remote Control": "Yes",
      "Box Size": "L380*W322*H416",
    },
  },
  {
    id: 14,
    name: "MIM6520B-H Home Theater System",
    images: [
      "/images/products/mim6520b-h.jpg",
      "/images/products/mim6520b-h.jpg",
      "/images/products/mim6520b-h.jpg",
    ],
    category: "Home Theater",
    brand: "MI+",
    inStock: true,
    features: [
      "Material: Wooden Subwoofer",
      "Audio output: 65W",
      "Remote control: Yes",
      "Connection: Bluetooth, AC/DC, USB, SD, AUX",
      'Subwoofer size: 6.5"',
      "Box Size: L405*W374*H408",
    ],
    specifications: {
      "System Type": "3.1 Home Theater System",
      "Total Power": "65W",

      "Remote Control": "Yes",
      "Box Size": "L405*W374*H408",
    },
  },
  {
    id: 15,
    name: "MIM6530B-H Home Theater System",
    images: [
      "/images/products/mim6530b-h.jpg",
      "/images/products/mim6530b-h.jpg",
      "/images/products/mim6530b-h.jpg",
    ],
    category: "Home Theater",
    brand: "MI+",
    inStock: true,
    features: [
      "Material: Wooden Subwoofer",
      "Audio output: 65W",
      "Remote control: Yes",
      "Connection: Bluetooth, AC/DC, USB, SD, AUX",
      'Subwoofer size: 6.5"',
      "Box Size: L420*W364*H422",
    ],
    specifications: {
      "System Type": "3.1 Home Theater System",
      "Total Power": "65W",

      "Remote Control": "Yes",
      "Box Size": "L420*W364*H422",
    },
  },
  {
    id: 16,
    name: "MIM6508-H Home Theater System",
    images: [
      "/images/products/mim6508-h.jpg",
      "/images/products/mim6508-h.jpg",
      "/images/products/mim6508-h.jpg",
    ],
    category: "Home Theater",
    brand: "MI+",
    inStock: true,
    features: [
      "Material: Wooden Subwoofer",
      "Audio output: 65W",
      "Remote control: Yes",
      "Connection: Bluetooth, AC/DC, USB, SD, AUX",
      'Subwoofer size: 6.5"',
      "Box Size: L410*W390*H410",
    ],
    specifications: {
      "System Type": "3.1 Home Theater System",
      "Total Power": "65W",

      "Remote Control": "Yes",
      "Box Size": "L410*W390*H410",
    },
  },
  {
    id: 17,
    name: "MIG803S Home Theater System",
    images: [
      "/images/products/mig803s.jpg",
      "/images/products/mig803s.jpg",
      "/images/products/mig803s.jpg",
    ],
    category: "Home Theater",
    brand: "MI+",
    inStock: true,
    features: [
      "Material: Wooden Subwoofer",
      "Audio output: 105W",
      "Remote control: Yes",
      "Connection: Bluetooth, AC/DC, USB, SD, AUX",
      'Subwoofer size: 6.5"',
      "Box Size: L410*W390*H410",
    ],
    specifications: {
      "System Type": "3.1 Home Theater System",
      "Total Power": "105W",

      "Remote Control": "Yes",
      "Box Size": "L410*W390*H410",
    },
  },
  {
    id: 18,
    name: "MIG813S Home Theater System",
    images: [
      "/images/products/mig813s.jpg",
      "/images/products/mig813s.jpg",
      "/images/products/mig813s.jpg",
    ],
    category: "Home Theater",
    brand: "MI+",
    inStock: true,
    features: [
      "Material: Wooden Subwoofer",
      "Audio output: 105W",
      "Remote control: Yes",
      "Connection: Bluetooth, AC/DC, USB, SD, AUX",
      'Subwoofer size: 6.5"',
      "Box Size: L410*W390*H410",
    ],
    specifications: {
      "System Type": "3.1 Home Theater System",
      "Total Power": "105W",

      "Remote Control": "Yes",
      "Box Size": "L410*W390*H410",
    },
  },
  {
    id: 19,
    name: "MIG805S Home Theater System",
    images: [
      "/images/products/mig805s.jpg",
      "/images/products/mig805s.jpg",
      "/images/products/mig805s.jpg",
    ],
    category: "Home Theater",
    brand: "MI+",
    inStock: true,
    features: [
      "Material: Wooden Subwoofer",
      "Audio output: 85W",
      "Remote control: Yes",
      "Connection: Bluetooth, AC/DC, USB, SD, AUX",
      'Subwoofer size: 6.5"',
      "Box Size: L410*W390*H410",
    ],
    specifications: {
      "System Type": "3.1 Home Theater System",
      "Total Power": "85W",

      "Remote Control": "Yes",
      "Box Size": "L410*W390*H410",
    },
  },
  {
    id: 20,
    name: "MIG815S Home Theater System",
    images: [
      "/images/products/mig815s.jpg",
      "/images/products/mig815s.jpg",
      "/images/products/mig815s.jpg",
    ],
    category: "Home Theater",
    brand: "MI+",
    inStock: true,
    features: [
      "Material: Wooden Subwoofer",
      "Audio output: 95W",
      "Remote control: Yes",
      "Connection: Bluetooth, AC/DC, USB, SD, AUX",
      'Subwoofer size: 6.5"',
      "Box Size: L468*W398*H400",
    ],
    specifications: {
      "System Type": "3.1 Home Theater System",
      "Total Power": "95W",

      "Remote Control": "Yes",
      "Box Size": "L468*W398*H400",
    },
  },
  {
    id: 21,
    name: "MIG9050S Home Theater System",
    images: [
      "/images/products/mig9050s.jpg",
      "/images/products/mig9050s.jpg",
      "/images/products/mig9050s.jpg",
    ],
    category: "Home Theater",
    brand: "MI+",
    inStock: true,
    features: [
      "Material: Wooden Subwoofer",
      "Audio output: 95W",
      "Remote control: Yes",
      "Connection: Bluetooth, AC/DC, USB, SD, AUX",
      'Subwoofer size: 6.5"',
      "Box Size: L468*W398*H400",
    ],
    specifications: {
      "System Type": "3.1 Home Theater System",
      "Total Power": "95W",

      "Remote Control": "Yes",
      "Box Size": "L468*W398*H400",
    },
  },
  {
    id: 22,
    name: "MIG1050S Home Theater System",
    images: [
      "/images/products/mig1050s.jpg",
      "/images/products/mig1050s.jpg",
      "/images/products/mig1050s.jpg",
    ],
    category: "Home Theater",
    brand: "MI+",
    inStock: true,
    features: [
      "Material: Wooden Subwoofer",
      "Audio output: 100W",
      "Remote control: Yes",
      "Connection: Bluetooth, AC/DC, USB, SD, AUX",
      'Subwoofer size: 6.5"',
      "Box Size: L436*W376*H396",
    ],
    specifications: {
      "System Type": "3.1 Home Theater System",
      "Total Power": "100W",

      "Remote Control": "Yes",
      "Box Size": "L436*W376*H396",
    },
  },
  {
    id: 23,
    name: "MILS505 Soundbar System",
    images: [
      "/images/products/mils505.jpg",
      "/images/products/mils505.jpg",
      "/images/products/mils505.jpg",
    ],
    category: "Soundbars",
    brand: "MI+",
    inStock: true,
    description:
      "Experience powerful audio with this 60W system, featuring a wooden subwoofer and versatile connectivity including Bluetooth, AC/DC, USB, SD, AUX, Coaxial, Optical, HDMI.",
    features: [
      "Material: Wooden Subwoofer",
      "Audio output: 60W",
      "Remote control: Yes",
      "Connection: Bluetooth, AC/DC, USB, SD, AUX, Coaxial, Optical, HDMI",
    ],
    specifications: {
      "System Type": "Soundbar System",
      "Total Power": "60W",

      "Remote Control": "Yes",
      "Box Size": "N/A",
    },
  },
  {
    id: 24,
    name: "MILS506 Soundbar System",
    images: [
      "/images/products/mils506.jpg",
      "/images/products/mils506.jpg",
      "/images/products/mils506.jpg",
    ],
    category: "Soundbars",
    brand: "MI+",
    inStock: true,
    description:
      "Experience powerful audio with this 75W system, featuring a wooden subwoofer and versatile connectivity including Bluetooth, AC/DC, USB, SD, AUX, Coaxial, Optical, HDMI.",
    features: [
      "Material: Wooden Subwoofer",
      "Audio output: 75W",
      "Remote control: Yes",
      "Connection: Bluetooth, AC/DC, USB, SD, AUX, Coaxial, Optical, HDMI",
    ],
    specifications: {
      "System Type": "Soundbar System",
      "Total Power": "75W",

      "Remote Control": "Yes",
      "Box Size": "N/A",
    },
  },
  {
    id: 25,
    name: "MILS508 Soundbar System",
    images: [
      "/images/products/mils508.jpg",
      "/images/products/mils508.jpg",
      "/images/products/mils508.jpg",
    ],
    category: "Soundbars",
    brand: "MI+",
    inStock: true,
    description:
      "Experience powerful audio with this 70W system, featuring a wooden subwoofer and versatile connectivity including Bluetooth, AC/DC, USB, SD, AUX, Coaxial, Optical, HDMI.",
    features: [
      "Material: Wooden Subwoofer",
      "Audio output: 70W",
      "Remote control: Yes",
      "Connection: Bluetooth, AC/DC, USB, SD, AUX, Coaxial, Optical, HDMI",
    ],
    specifications: {
      "System Type": "Soundbar System",
      "Total Power": "70W",

      "Remote Control": "Yes",
      "Box Size": "N/A",
    },
  },
  {
    id: 26,
    name: "MIMS706 Soundbar System",
    images: [
      "/images/products/mims706.jpg",
      "/images/products/mims706.jpg",
      "/images/products/mims706.jpg",
    ],
    category: "Soundbars",
    brand: "MI+",
    inStock: true,
    description:
      "Experience powerful audio with this 120W system, featuring a wooden subwoofer and versatile connectivity including Bluetooth, AC/DC, USB, SD, AUX, Coaxial, Optical, HDMI.",
    features: [
      "Material: Wooden Subwoofer",
      "Audio output: 120W",
      "Remote control: Yes",
      "Connection: Bluetooth, AC/DC, USB, SD, AUX, Coaxial, Optical, HDMI",
    ],
    specifications: {
      "System Type": "Soundbar System",
      "Total Power": "120W",

      "Remote Control": "Yes",
      "Box Size": "N/A",
    },
  },
  {
    id: 27,
    name: "MIGS1801W Professional Soundbar System",
    images: [
      "/images/products/migs1801w.jpg",
      "/images/products/migs1801w.jpg",
      "/images/products/migs1801w.jpg",
    ],
    category: "Soundbars",
    brand: "MI+",
    inStock: true,
    description:
      "Professional-grade soundbar system with wireless subwoofer. The MIGS1801W delivers exceptional audio quality with sleek design perfect for modern entertainment setups.",
    features: [
      "Professional soundbar design",
      "Wireless subwoofer system",
      "Exceptional audio quality",
      "Sleek modern aesthetics",
      "Wall-mount compatibility",
      "Premium build materials",
    ],
    specifications: {
      "System Type": "2.1 Professional Soundbar",
      "Total Power": "200W",
      "Build Quality": "Professional-grade materials",
    },
  },
  {
    id: 28,
    name: "85T1 Large Format Ultra HD Television",
    images: [
      "/images/products/85t1-balloons.jpg",
      "/images/products/85t1-balloons.jpg",
      "/images/products/85t1-balloons.jpg",
    ],
    category: "Television",
    brand: "MI+",
    inStock: true,
    description:
      "Experience cinema-quality entertainment at home with the massive 85T1 Ultra HD Television. Features large format display, stunning 4K resolution, and comprehensive smart features.",
    features: [
      "Massive 85-inch display",
      "Cinema-quality 4K resolution",
      "Large format viewing experience",
      "Comprehensive smart features",
      "Premium stand design",
      "Advanced connectivity options",
    ],
    specifications: {
      "Screen Size": "85 inches",
      "Display Type": "Large format LED with HDR",
      "Smart Features": "Comprehensive smart platform",
    },
  },
  {
    id: 29,
    name: "75T1 Mountain Series Ultra HD TV",
    images: [
      "/images/products/75t1-mountain.jpg",
      "/images/products/75t1-mountain.jpg",
      "/images/products/75t1-mountain.jpg",
    ],
    category: "Television",
    brand: "MI+",
    inStock: true,
    description:
      "Discover breathtaking entertainment with the 75T1 Mountain Series. Features stunning 75-inch 4K display, natural color reproduction, and smart connectivity for immersive viewing.",
    features: [
      "75-inch 4K Ultra HD display",
      "Natural color reproduction",
      "Mountain series design",
      "Smart connectivity features",
      "Immersive viewing experience",
      "Modern aesthetic appeal",
    ],
    specifications: {
      "Screen Size": "75 inches",
      "Display Type": "LED with natural color tech",
      "Smart Features": "Smart platform with apps",
    },
  },
  {
    id: 30,
    name: "65T1 Venice Series Smart Television",
    images: [
      "/images/products/65t1-venice.jpg",
      "/images/products/65t1-venice.jpg",
      "/images/products/65t1-venice.jpg",
    ],
    category: "Television",
    brand: "MI+",
    inStock: true,
    description:
      "Elegant entertainment with the 65T1 Venice Series Smart Television. Features sophisticated 65-inch display, smart features, and elegant design inspired by classic architecture.",
    features: [
      "Elegant 65-inch display",
      "Venice series sophistication",
      "Smart television features",
      "Classic-inspired design",
      "Premium viewing quality",
      "Sophisticated aesthetics",
    ],
    specifications: {
      "Screen Size": "65 inches",
      "Display Type": "LED with sophisticated processing",
      "Smart Features": "Smart platform with streaming",
    },
  },
  {
    id: 31,
    name: "65T1 Ultra HD Smart Television",
    images: [
      "/images/products/65t1-mountain.jpg",
      "/images/products/65t1-mountain.jpg",
      "/images/products/65t1-mountain.jpg",
    ],
    category: "Television",
    brand: "MI+",
    inStock: true,
    description:
      "Experience stunning 65-inch Ultra HD entertainment with the 65T1 Smart Television. Features 4K resolution, smart connectivity, and sleek modern design perfect for any living space.",
    features: [
      "65-inch Ultra HD 4K display",
      "Smart TV connectivity",
      "HDR support for vivid colors",
      "Multiple HDMI and USB ports",
      "Sleek modern stand design",
      "Energy-efficient LED backlight",
    ],
    specifications: {
      "Screen Size": "65 inches",
      "Display Type": "LED with HDR support",
      "Smart Features": "Built-in Wi-Fi, streaming apps",
    },
  },
  {
    id: 32,
    name: "75T1 Premium Ultra HD Television",
    images: [
      "/images/products/75t1-abstract.jpg",
      "/images/products/75t1-abstract.jpg",
      "/images/products/75t1-abstract.jpg",
    ],
    category: "Television",
    brand: "MI+",
    inStock: true,
    description:
      "Immerse yourself in premium entertainment with the 75T1 Ultra HD Television. Features massive 75-inch display, vibrant colors, and advanced smart features for the ultimate viewing experience.",
    features: [
      "75-inch premium Ultra HD display",
      "Advanced color technology",
      "Smart TV platform",
      "Multiple connectivity options",
      "Premium build quality",
      "Enhanced audio system",
    ],
    specifications: {
      "Screen Size": "75 inches",
      "Display Type": "Premium LED with advanced color",
      "Smart Features": "Advanced smart platform, streaming",
    },
  },
  {
    id: 33,
    name: "55T1-A12 Abstract Series Smart TV",
    images: [
      "/images/products/55t1-a12.jpg",
      "/images/products/55t1-a12.jpg",
      "/images/products/55t1-a12.jpg",
    ],
    category: "Television",
    brand: "MI+",
    inStock: true,
    description:
      "Experience artistic entertainment with the 55T1-A12 Abstract Series. Features stunning 55-inch 4K display with vibrant abstract visuals, smart connectivity, and modern design perfect for contemporary spaces.",
    features: [
      "55-inch 4K Ultra HD display",
      "Abstract series design aesthetics",
      "Smart TV platform with apps",
      "Vibrant color reproduction",
      "Modern contemporary styling",
      "Energy-efficient LED technology",
    ],
    specifications: {
      "Screen Size": "55 inches",
      "Display Type": "LED with vibrant color tech",
      "Smart Features": "Smart platform with streaming apps",
    },
  },
  {
    id: 34,
    name: "55T1-B10 Voice Control Smart TV",
    images: [
      "/images/products/55t1-b10-voice.jpg",
      "/images/products/55t1-b10-voice.jpg",
      "/images/products/55t1-b10-voice.jpg",
    ],
    category: "Television",
    brand: "MI+",
    inStock: true,
    description:
      "Advanced voice-controlled entertainment with the 55T1-B10. Features 55-inch 4K display, integrated voice control system, and smart features for hands-free operation and convenience.",
    features: [
      "55-inch 4K Ultra HD display",
      "Integrated voice control system",
      "Hands-free operation",
      "Smart TV with voice commands",
      "Advanced connectivity options",
      "Premium audio integration",
    ],
    specifications: {
      "Screen Size": "55 inches",
      "Display Type": "LED with voice control integration",
      "Smart Features": "Voice control, smart platform, streaming",
      "Voice Control": "Built-in voice recognition system",
    },
  },
  {
    id: 35,
    name: "55T1-T5 Steel Stand Smart TV",
    images: [
      "/images/products/55t1-t5-steel.jpg",
      "/images/products/55t1-t5-steel.jpg",
      "/images/products/55t1-t5-steel.jpg",
    ],
    category: "Television",
    brand: "MI+",
    inStock: true,
    description:
      "Tropical entertainment experience with the 55T1-T5 featuring premium steel tube stand design. Combines 55-inch 4K display with robust steel construction for stability and style.",
    features: [
      "55-inch 4K Ultra HD display",
      "Premium steel tube stand design",
      "Tropical series aesthetics",
      "Robust construction",
      "Smart TV functionality",
      "Stable steel base design",
    ],
    specifications: {
      "Screen Size": "55 inches",
      "Display Type": "LED with tropical color enhancement",
      "Smart Features": "Smart platform with apps",
      "Stand Design": "Premium steel tube construction",
    },
  },
  {
    id: 36,
    name: "55T1-B1 Eagle Series Smart TV",
    images: [
      "/images/products/55t1-b1.jpg",
      "/images/products/55t1-b1.jpg",
      "/images/products/55t1-b1.jpg",
    ],
    category: "Television",
    brand: "MI+",
    inStock: true,
    description:
      "Majestic viewing experience with the 55T1-B1 Eagle Series. Features 55-inch 4K display with nature-inspired design, smart connectivity, and premium build quality for immersive entertainment.",
    features: [
      "55-inch 4K Ultra HD display",
      "Eagle series nature-inspired design",
      "Majestic viewing experience",
      "Smart TV platform",
      "Premium build quality",
      "Nature-enhanced color processing",
    ],
    specifications: {
      "Screen Size": "55 inches",
      "Display Type": "LED with nature color enhancement",
      "Smart Features": "Smart platform with streaming",
    },
  },
  {
    id: 37,
    name: "55T1-A13 Forest Series Smart TV",
    images: [
      "/images/products/55t1-a13.jpg",
      "/images/products/55t1-a13.jpg",
      "/images/products/55t1-a13.jpg",
    ],
    category: "Television",
    brand: "MI+",
    inStock: true,
    description:
      "Natural entertainment with the 55T1-A13 Forest Series. Features 55-inch 4K display with forest-inspired aesthetics, smart features, and eco-friendly design for nature lovers.",
    features: [
      "55-inch 4K Ultra HD display",
      "Forest series eco-inspired design",
      "Natural color reproduction",
      "Smart TV with eco features",
      "Forest-themed aesthetics",
      "Energy-efficient operation",
    ],
    specifications: {
      "Screen Size": "55 inches",
      "Display Type": "LED with natural color processing",
      "Smart Features": "Eco-smart platform with apps",
      "Eco Features": "Energy-efficient, eco-friendly materials",
    },
  },
  {
    id: 38,
    name: "55T1-A25 Minimalist Smart TV",
    images: [
      "/images/products/55t1-a25.jpg",
      "/images/products/55t1-a25.jpg",
      "/images/products/55t1-a25.jpg",
    ],
    category: "Television",
    brand: "MI+",
    inStock: true,
    description:
      "Elegant simplicity with the 55T1-A25 Minimalist design. Features 55-inch 4K display with clean aesthetics, single-button operation, and streamlined smart features for modern living.",
    features: [
      "55-inch 4K Ultra HD display",
      "Minimalist design aesthetics",
      "Single-button operation",
      "Clean modern styling",
      "Streamlined smart features",
      "Elegant simplicity",
    ],
    specifications: {
      "Screen Size": "55 inches",
      "Display Type": "LED with minimalist processing",
      "Smart Features": "Streamlined smart platform",
    },
  },
  {
    id: 39,
    name: "55T1-B10 Arctic Series Smart TV",
    images: [
      "/images/products/55t1-b10-public.jpg",
      "/images/products/55t1-b10-public.jpg",
      "/images/products/55t1-b10-public.jpg",
    ],
    category: "Television",
    brand: "MI+",
    inStock: true,
    description:
      "Cool elegance with the 55T1-B10 Arctic Series. Features 55-inch 4K display with arctic-inspired design, cool color processing, and premium smart features for refreshing entertainment.",
    features: [
      "55-inch 4K Ultra HD display",
      "Arctic series cool design",
      "Cool color processing technology",
      "Premium smart features",
      "Arctic-inspired aesthetics",
      "Refreshing visual experience",
    ],
    specifications: {
      "Screen Size": "55 inches",
      "Display Type": "LED with cool color enhancement",
      "Smart Features": "Premium smart platform with apps",
      "Color Processing": "Arctic-inspired cool tones",
    },
  },
  {
    id: 40,
    name: "55T1-T5 Lake Reflection Smart TV",
    images: [
      "/images/products/55t1-t5-lake.jpg",
      "/images/products/55t1-t5-lake.jpg",
      "/images/products/55t1-t5-lake.jpg",
    ],
    category: "Television",
    brand: "MI+",
    inStock: true,
    description:
      "Serene entertainment with the 55T1-T5 Lake Reflection series. Features 55-inch 4K display with tranquil lake-inspired design, reflection processing, and peaceful viewing experience.",
    features: [
      "55-inch 4K Ultra HD display",
      "Lake reflection series design",
      "Tranquil viewing experience",
      "Reflection processing technology",
      "Peaceful aesthetics",
      "Serene color enhancement",
    ],
    specifications: {
      "Screen Size": "55 inches",
      "Display Type": "LED with reflection processing",
      "Smart Features": "Tranquil smart platform",
      "Special Processing": "Lake reflection color technology",
    },
  },
  {
    id: 41,
    name: "55T1-B1 Eagle Series Public Model",
    images: [
      "/images/products/55t1-b1-public.jpg",
      "/images/products/55t1-b1-public.jpg",
      "/images/products/55t1-b1-public.jpg",
    ],
    category: "Television",
    brand: "MI+",
    inStock: true,
    description:
      "Public model excellence with the 55T1-B1 Eagle Series. Features 55-inch 4K display with eagle-inspired design, public model reliability, and commercial-grade build quality.",
    features: [
      "55-inch 4K Ultra HD display",
      "Eagle series public model design",
      "Commercial-grade reliability",
      "Public model build quality",
      "Eagle-inspired aesthetics",
      "Enhanced durability",
    ],
    specifications: {
      "System Type": "5.1 Eagle Series Public Model",
      "Total Power": "210W",
      "Satellite Speakers": "2 x 45W",
      "Center Channel": "50W",
      "LED Effects": "Eagle-inspired dynamic lighting",
    },
  },
];

interface ProductPageProps {
  params: Promise<{ id: string }>;
}
export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number.parseInt(id));

  if (!product) {
    notFound();
  }

  return (
    <>
      <ProductDetail product={product} />
    </>
  );
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}
