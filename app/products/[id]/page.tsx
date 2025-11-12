import { Navigation } from "@/components/navigation";
import { ProductDetail } from "@/components/product-detail";
import { Footer } from "@/components/footer";
import { notFound } from "next/navigation";

const products = [
  // All your original audio products (IDs 1-21)
  {
    id: 1,
    name: "MIL6080",
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
    name: "MIL6020B",
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
    name: "MILA4012",
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
    name: "MILA6007",
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
    name: "MIL6090",
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
    name: "MIL6010B",
    images: [
      "/images/products/mil6010b.jpg",
      "/images/products/mil6010b.jpg",
      "/images/products/mil6010b.jpg",
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
    id: 7,
    name: "MILS505",
    images: [
      "/images/products/mils505.jpg",
      "/images/products/mils505.jpg",
      "/images/products/mils505.jpg",
    ],
    category: "Soundbars",
    brand: "MI+",
    inStock: true,
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
    id: 8,
    name: "MIL6060",
    images: [
      "/images/products/mil6060.png",
      "/images/products/mil6060.png",
      "/images/products/mil6060.png",
    ],
    category: "Entertainment Systems",
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
    name: "MIL6030B",
    images: [
      "/images/products/mil6030b.jpg",
      "/images/products/mil6030b.jpg",
      "/images/products/mil6030b.jpg",
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
    name: "MILA6005",
    images: [
      "/images/products/mila6005.jpg",
      "/images/products/mila6005.jpg",
      "/images/products/mila6005.jpg",
    ],
    category: "Entertainment Systems",
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
    name: "MIM6085",
    images: [
      "/images/products/mim6085.jpg",
      "/images/products/mim6085.jpg",
      "/images/products/mim6085.jpg",
    ],
    category: "Entertainment Systems",
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
    name: "MIM662",
    images: [
      "/images/products/mim662.jpg",
      "/images/products/mim662.jpg",
      "/images/products/mim662.jpg",
    ],
    category: "Multimedia Systems",
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
    name: "MIM602",
    images: [
      "/images/products/mim602.jpg",
      "/images/products/mim602.jpg",
      "/images/products/mim602.jpg",
    ],
    category: "Multimedia Systems",
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
    name: "MIG805S",
    images: [
      "/images/products/mig805s.jpg",
      "/images/products/mig805s.jpg",
      "/images/products/mig805s.jpg",
    ],
    category: "Premium Home Theater",
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
    name: "MIG813S",
    images: [
      "/images/products/mig813s.jpg",
      "/images/products/mig813s.jpg",
      "/images/products/mig813s.jpg",
    ],
    category: "Premium Home Theater",
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
    name: "MIG815S",
    images: [
      "/images/products/mig815s.jpg",
      "/images/products/mig815s.jpg",
      "/images/products/mig815s.jpg",
    ],
    category: "Premium Home Theater",
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
    name: "MIM6530B-H",
    images: [
      "/images/products/mim6530b-h.jpg",
      "/images/products/mim6530b-h.jpg",
      "/images/products/mim6530b-h.jpg",
    ],
    category: "Premium Home Theater",
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
    name: "MIM6065",
    images: [
      "/images/products/mim6065.jpg",
      "/images/products/mim6065.jpg",
      "/images/products/mim6065.jpg",
    ],
    category: "Entertainment Systems",
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
    name: "MIM663",
    images: [
      "/images/products/mim663a.jpg",
      "/images/products/mim663a.jpg",
      "/images/products/mim663a.jpg",
    ],
    category: "Entertainment Systems",
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
    name: "MIMA6508-H",
    images: [
      "/images/products/mima6508h.jpg",
      "/images/products/mima6508h.jpg",
      "/images/products/mima6508h.jpg",
    ],
    category: "Premium Home Theater",
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
    name: "MIG803S",
    images: [
      "/images/products/mig803s.jpg",
      "/images/products/mig803s.jpg",
      "/images/products/mig803s.jpg",
    ],
    category: "Premium Home Theater",
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
    name: "MI-S32T1A",
    images: [
      "/images/products/65t1-mountain.jpg",
      "/images/products/65t1-mountain.jpg",
      "/images/products/65t1-mountain.jpg",
    ],
    category: "Television",
    brand: "MI+",
    inStock: true,
    description: "32-inch HD TV",
    features: [
      "Louder Speaker",
      "Super bright",
      "Overvoltage Protection",
      "Music TV"
    ],
    specifications: {
      "System Type": "32-inch HD TV",
      "TV Signal": "DVB-T2/DVB-S2",
      "Panel Size": "32\"",
      "Speaker": "2*10W",
      "Power Consumption": "60W",
      "Carton Size": "780*120*512mm",
      "Resolution": "HD",
      "Viewing Angle": "178º/178º",
      "Brightness": "180 cd/m²",
      "Connectivity": "Tuner/HDMI/AV/USB/Headphones/Coaxial"
    }
  },
  {
    id: 23,
    name: "MI-S40T1AX",
    images: [
      "/images/products/75t1-abstract.jpg",
      "/images/products/75t1-abstract.jpg",
      "/images/products/75t1-abstract.jpg",
    ],
    category: "Television",
    brand: "MI+",
    inStock: true,
    description: "40-inch HD TV",
    features: [
      "Louder Speaker",
      "Super bright",
      "Overvoltage Protection",
      "Music TV"
    ],
    specifications: {
      "System Type": "40-inch HD TV",
      "TV Signal": "DVB-T2/DVB-S2",
      "Panel Size": "40\"",
      "Speaker": "2*10W",
      "Power Consumption": "90W",
      "Carton Size": "892*87*507mm",
      "Resolution": "HD",
      "Viewing Angle": "178º/178º",
      "Brightness": "200 cd/m²",
      "Connectivity": "Tuner/HDMI/AV/USB/Headphones/Coaxial"
    }
  },
  {
    id: 24,
    name: "MIG9050",
    images: [
      "/images/products/mig9050s.jpg",
      "/images/products/mig9050s.jpg",
      "/images/products/mig9050s.jpg",
    ],
    category: "Premium Home Theater",
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
    id: 25,
    name: "MI-S43N1A-X",
    images: [
      "/images/products/85t1-balloons.jpg",
      "/images/products/85t1-balloons.jpg",
      "/images/products/85t1-balloons.jpg",
    ],
    category: "Television",
    brand: "MI+",
    inStock: true,
    description: "43-inch FHD TV",
    features: [
      "Louder Speaker",
      "Super bright",
      "Overvoltage Protection",
      "Music TV"
    ],
    specifications: {
      "System Type": "43-inch FHD TV",
      "TV Signal": "DVB-T2/DVB-S2",
      "Panel Size": "43\"",
      "Speaker": "2*10W",
      "Power Consumption": "90W",
      "Carton Size": "1105*125*675mm",
      "Resolution": "FHD",
      "Viewing Angle": "178º/178º",
      "Brightness": "200 cd/m²",
      "Connectivity": "Tuner/HDMI/AV/USB/Headphones/Coaxial"
    }
  },
  {
    id: 26,
    name: "MI-W43T1H",
    images: [
      "/images/products/75t1-mountain.jpg",
      "/images/products/75t1-mountain.jpg",
      "/images/products/75t1-mountain.jpg",
    ],
    category: "Television",
    brand: "MI+",
    inStock: true,
    description: "43-inch FHD TV",
    features: [
      "Louder Speaker",
      "Super bright",
      "Overvoltage Protection",
      "Music TV"
    ],
    specifications: {
      "System Type": "43-inch FHD TV",
      "TV Signal": "TV/DVB-T2/DVB-S2",
      "Panel Size": "43\"",
      "Speaker": "2*10W",
      "Power Consumption": "90W",
      "Carton Size": "1060*125*655mm",
      "Resolution": "FHD",
      "Viewing Angle": "178º/178º",
      "Brightness": "200 cd/m²",
      "Connectivity": "Tuner/HDMI/AV/USB/Headphones/Coaxial"
    }
  },
  {
    id: 27,
    name: "MI-W43T1X",
    images: [
      "/images/products/65t1-venice.jpg",
      "/images/products/65t1-venice.jpg",
      "/images/products/65t1-venice.jpg",
    ],
    category: "Television",
    brand: "MI+",
    inStock: true,
    description: "43-inch FHD TV",
    features: [
      "Louder Speaker",
      "Super bright",
      "Overvoltage Protection",
      "Music TV"
    ],
    specifications: {
      "System Type": "43-inch FHD TV",
      "TV Signal": "TV/ATV/DVB.T2/DVB.S2",
      "Panel Size": "43\"",
      "Speaker": "2*10W",
      "Power Consumption": "90W",
      "Carton Size": "1060*125*655mm",
      "Resolution": "FHD",
      "Viewing Angle": "178º/178º",
      "Brightness": "200 cd/m²",
      "Connectivity": "Tuner/HDMI/AV/USB/Headphones/Coaxial"
    }
  },
  {
    id: 28,
    name: "MIGS1801W",
    images: [
      "/images/products/migs1801w.jpg",
      "/images/products/migs1801w.jpg",
      "/images/products/migs1801w.jpg",
    ],
    category: "Soundbars",
    brand: "MI+",
    inStock: true,
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
    id: 29,
    name: "MI-W50T1X",
    images: [
      "/images/products/55t1-a12.jpg",
      "/images/products/55t1-a12.jpg",
      "/images/products/55t1-a12.jpg",
    ],
    category: "Television",
    brand: "MI+",
    inStock: true,
    description: "50-inch UHD TV",
    features: [
      "Louder Speaker",
      "Super bright",
      "Overvoltage Protection",
      "Music TV"
    ],
    specifications: {
      "System Type": "50-inch UHD TV",
      "TV Signal": "TV/ATV/DVB.T2/S2/VIDAA/WEBOS/whale TV",
      "Panel Size": "50\"",
      "Speaker": "2*10W",
      "Power Consumption": "108W",
      "Carton Size": "1195*113*730mm",
      "Resolution": "UHD",
      "Viewing Angle": "178º/178º",
      "Brightness": "230 cd/m²",
      "Connectivity": "Tuner/HDMI/VA/USB/Headphones/Coaxial"
    }
  },
  {
    id: 30,
    name: "MI-W55T1X",
    images: [
      "/images/products/55t1-b10-voice.jpg",
      "/images/products/55t1-b10-voice.jpg",
      "/images/products/55t1-b10-voice.jpg",
    ],
    category: "Television",
    brand: "MI+",
    inStock: true,
    description: "55-inch UHD TV",
    features: [
      "Louder Speaker",
      "Super bright",
      "Overvoltage Protection",
      "Music TV"
    ],
    specifications: {
      "System Type": "55-inch UHD TV",
      "TV Signal": "TV/ATV/DVB.T2/S2/VIDAA/WEBOS/whale TV",
      "Panel Size": "55\"",
      "Speaker": "2*10W",
      "Power Consumption": "138W",
      "Carton Size": "1315*118*805mm",
      "Resolution": "UHD",
      "Viewing Angle": "178º/178º",
      "Brightness": "250 cd/m²",
      "Connectivity": "Tuner/HDMI/AV/USB/Headphones/Coaxial"
    }
  },
  {
    id: 31,
    name: "MI-W65T1X",
    images: [
      "/images/products/55t1-t5-steel.jpg",
      "/images/products/55t1-t5-steel.jpg",
      "/images/products/55t1-t5-steel.jpg",
    ],
    category: "Television",
    brand: "MI+",
    inStock: true,
    description: "65-inch UHD TV",
    features: [
      "Louder Speaker",
      "Super bright",
      "Overvoltage Protection",
      "Music TV"
    ],
    specifications: {
      "System Type": "65-inch UHD TV",
      "TV Signal": "TV/ATV/DVB.T2/S2/VIDAA/WEBOS/whale TV",
      "Panel Size": "65\"",
      "Speaker": "2*10W",
      "Power Consumption": "138W",
      "Carton Size": "1560*133*945mm",
      "Resolution": "UHD",
      "Viewing Angle": "178º/178º",
      "Brightness": "250 cd/m²",
      "Connectivity": "Tuner/HDMI/AV/USB/Headphones/Coaxial"
    }
  },
  {
    id: 32,
    name: "MI-W75T1X",
    images: [
      "/images/products/55t1-b1.jpg",
      "/images/products/55t1-b1.jpg",
      "/images/products/55t1-b1.jpg",
    ],
    category: "Television",
    brand: "MI+",
    inStock: true,
    description: "75-inch UHD TV",
    features: [
      "Louder Speaker",
      "Super bright",
      "Overvoltage Protection",
      "Music TV"
    ],
    specifications: {
      "System Type": "75-inch UHD TV",
      "TV Signal": "TV/ATV/DVB.T2/S2/VIDAA/WEBOS/whale TV",
      "Panel Size": "75\"",
      "Speaker": "2*10W",
      "Power Consumption": "168W",
      "Carton Size": "1784*148*1045mm",
      "Resolution": "UHD",
      "Viewing Angle": "178º/178º",
      "Brightness": "280 cd/m²",
      "Connectivity": "Tuner/HDMI/AV/USB/Headphones/Coaxial"
    }
  },
  {
    id: 33,
    name: "MI-W85T1X",
    images: [
      "/images/products/55t1-a13.jpg",
      "/images/products/55t1-a13.jpg",
      "/images/products/55t1-a13.jpg",
    ],
    category: "Television",
    brand: "MI+",
    inStock: true,
    description: "85-inch UHD TV",
    features: [
      "Louder Speaker",
      "Super bright",
      "Overvoltage Protection",
      "Music TV"
    ],
    specifications: {
      "System Type": "85-inch UHD TV",
      "TV Signal": "TV/ATV/DVB.T2/S2/VIDAA/WEBOS/whale TV",
      "Panel Size": "85\"",
      "Speaker": "2*10W",
      "Power Consumption": "198W",
      "Carton Size": "2008*148*1170mm",
      "Resolution": "UHD",
      "Viewing Angle": "178º/178º",
      "Brightness": "300 cd/m²",
      "Connectivity": "Tuner/HDMI/AV/USB/Headphones/Coaxial"
    }
  },
  {
    id: 34,
    name: "MI-V55T1",
    images: [
      "/images/products/55t1-a25.jpg",
      "/images/products/55t1-a25.jpg",
      "/images/products/55t1-a25.jpg",
    ],
    category: "Television",
    brand: "MI+",
    inStock: true,
    description: "55-inch UHD/4K TV",
    features: [
      "Louder Speaker",
      "Super bright",
      "Overvoltage Protection",
      "Music TV",
      "Voice remote control"
    ],
    specifications: {
      "System Type": "55-inch UHD/4K TV",
      "TV Signal": "DVB-T2/DVB-S2/ATV",
      "Panel Size": "55\"",
      "Speaker": "2*10W",
      "Power Consumption": "135W",
      "Carton Size": "1315*118*805mm",
      "Resolution": "UHD/4K",
      "Viewing Angle": "178º/178º",
      "Brightness": "270 cd/m²",
      "Connectivity": "COAX/RJ45/USB/(Mini)CVBS/AUDIO IN/HDMI/ATV/DVT-T/C/T2/DVT-S/S2/EARPHONE OUT"
    }
  },
  {
    id: 35,
    name: "MI-V50T1",
    images: [
      "/images/products/55t1-b10-public.jpg",
      "/images/products/55t1-b10-public.jpg",
      "/images/products/55t1-b10-public.jpg",
    ],
    category: "Television",
    brand: "MI+",
    inStock: true,
    description: "50-inch UHD Smart TV",
    features: [
      "Louder Speaker",
      "Super bright",
      "Overvoltage Protection",
      "Music TV",
      "Voice remote control"
    ],
    specifications: {
      "System Type": "50-inch UHD Smart TV",
      "TV Signal": "DVB-T2/DVB-S2",
      "Panel Size": "50\"",
      "Speaker": "2*10W",
      "Power Consumption": "135W",
      "Carton Size": "1195*113*730mm",
      "Resolution": "UHD/4K",
      "Viewing Angle": "178º/178º",
      "Brightness": "270 cd/m²",
      "Connectivity": "COAX/RJ45/USB/(Mini)CVBS/AUDIO IN/HDMI/ATV/DVT-T/C/T2/DVT-S/S2/EARPHONE OUT",
      "Remote Control": "Voice remote control"
    }
  },
  {
    id: 36,
    name: "MI-V65T1",
    images: [
      "/images/products/55t1-t5-lake.jpg",
      "/images/products/55t1-t5-lake.jpg",
      "/images/products/55t1-t5-lake.jpg",
    ],
    category: "Television",
    brand: "MI+",
    inStock: true,
    description: "65-inch UHD/4K TV",
    features: [
      "Louder Speaker",
      "Super bright",
      "Overvoltage Protection",
      "Music TV",
      "Voice remote control"
    ],
    specifications: {
      "System Type": "65-inch UHD/4K TV",
      "TV Signal": "DVB-T2/DVB-S2/ATV",
      "Panel Size": "65\"",
      "Speaker": "2*10W",
      "Power Consumption": "180W",
      "Carton Size": "1560*133*945mm",
      "Resolution": "UHD/4K",
      "Viewing Angle": "178º/178º",
      "Brightness": "270 cd/m²",
      "Connectivity": "COAX/RJ45/USB/(Mini)CVBS/AUDIO IN/HDMI/ATV/DVT-T/C/T2/DVT-S/S2/EARPHONE OUT"
    }
  },
  {
    id: 37,
    name: "MI-V75T1",
    images: [
      "/images/products/55t1-b1-public.jpg",
      "/images/products/55t1-b1-public.jpg",
      "/images/products/55t1-b1-public.jpg",
    ],
    category: "Television",
    brand: "MI+",
    inStock: true,
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
    {
    id: 38,
    name: "MIL401",
    images: [
      "/product img/product img/2.1 Home Theater MIL401.jpg",
      "/product img/product img/2.1 Home Theater MIL401.jpg",
      "/product img/product img/2.1 Home Theater MIL401.jpg",
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
      "System Type": "2.1 Bluetooth Speaker System",
      "Total Power": "36W",
      "Remote Control": "Yes",
      "Box Size": "L305*W198*H380",
    },
  },
  {
    id: 39,
    name: "MILA4011",
    images: [
      "/product img/product img/2.1 Home Theater MILA4011.png",
      "/product img/product img/2.1 Home Theater MILA4011.png",
      "/product img/product img/2.1 Home Theater MILA4011.png",
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
      "System Type": "2.1 Home Theater System",
      "Total Power": "50W",
      "Remote Control": "Yes",
      "Box Size": "L342*W232*H398",
    },
  },
  {
    id: 40,
    name: "MILA4013",
    images: [
      "/product img/product img/2.1 Home Theater MILA4013.png",
      "/product img/product img/2.1 Home Theater MILA4013.png",
      "/product img/product img/2.1 Home Theater MILA4013.png",
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
      "System Type": "2.1 Home Theater System",
      "Total Power": "50W",
      "Remote Control": "Yes",
      "Box Size": "L342*W232*H398",
    },
  },
  {
    id: 41,
    name: "MILA4015",
    images: [
      "/product img/product img/2.1 Home Theater MILA4015.png",
      "/product img/product img/2.1 Home Theater MILA4015.png",
      "/product img/product img/2.1 Home Theater MILA4015.png",
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
      "System Type": "2.1 Home Theater System",
      "Total Power": "50W",
      "Remote Control": "Yes",
      "Box Size": "L342*W232*H398",
    },
  },
  {
    id: 42,
    name: "MIL6060",
    images: [
      "/product img/product img/3.1 Home Theater MIL6060.png",
      "/product img/product img/3.1 Home Theater MIL6060.png",
      "/product img/product img/3.1 Home Theater MIL6060.png",
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
    id: 43,
    name: "MIL601A",
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
    id: 44,
    name: "MIL901A",
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
    id: 45,
    name: "MIMS708",
    images: [
      "/images/products/mims708.png",
      "/images/products/mims708.png",
      "/images/products/mims708.png",
    ],
    category: "Soundbars",
    brand: "MI+",
    inStock: true,
    features: [
      "Material: Wooden Subwoofer",
      "Audio output: 135W",
      "Remote control: Yes",
      "Connection: Bluetooth, AC/DC, USB, SD, AUX, Coaxial, Optical, HDMI",
    ],
    specifications: {
      "System Type": "2.1 Soundbar System",
      "Total Power": "135W",
      "Remote Control": "Yes",
      "Box Size": "N/A",
    },
  },
  {
    id: 46,
    name: "MIMB1502",
    images: [
      "/images/products/mimb1502.jpg",
      "/images/products/mimb1502.jpg",
      "/images/products/mimb1502.jpg",
    ],
    category: "Public Address",
    brand: "MI+",
    inStock: true,
    features: [
      "Material: Plastic",
      "Audio output: 60W",
      "Remote control: Yes",
      "Connection: Bluetooth, AC/DC, USB, SD, AUX",
      'Subwoofer size: 15"',
      "Box Size: L460*W370*H630",
    ],
    specifications: {
      "System Type": "Public Address System",
      "Total Power": "60W",
      "Remote Control": "Yes",
      "Box Size": "L460*W370*H630",
    },
  },
  {
    id: 47,
    name: "MIMB1506",
    images: [
      "/images/products/mimb1506.png",
      "/images/products/mimb1506.png",
      "/images/products/mimb1506.png",
    ],
    category: "Public Address",
    brand: "MI+",
    inStock: true,
    features: [
      "Material: Plastic",
      "Audio output: 60W",
      "Remote control: Yes",
      "Connection: Bluetooth, AC/DC, USB, SD, AUX",
      'Subwoofer size: 15"',
      "Box Size: L460*W370*H630",
    ],
    specifications: {
      "System Type": "Public Address System",
      "Total Power": "60W",
      "Remote Control": "Yes",
      "Box Size": "L460*W370*H630",
    },
  },
  {
    id: 48,
    name: "MI-A23S195",
    images: [
      "/TV/TV/MI-A23S195.png",
      "/TV/TV/MI-A23S195.png",
      "/TV/TV/MI-A23S195.png",
    ],
    category: "Television",
    brand: "MI+",
    inStock: true,
    features: [
      "23-inch LED Display",
      "AC/DC Music TV",
      "HDMI Connectivity",
      "USB Port",
      "Music TV Features",
      "Compact Design"
    ],
    specifications: {
      "Screen Size": "23 inches",
      "Display Type": "LED Music TV",
      "Connectivity": "HDMI, USB",
      "Power Supply": "AC/DC"
    }
  },
  {
    id: 49,
    name: "MI-F55T06M",
    images: [
      "/TV/TV/Image_20251023123923_497_11.jpg",
      "/TV/TV/Image_20251023123923_497_11.jpg",
      "/TV/TV/Image_20251023123923_497_11.jpg",
    ],
    category: "Television",
    brand: "MI+",
    inStock: true,
    description: "55-inch 4K Interactive Display",
    features: [
      "A grade panel",
      "Infrared touch screen",
      "Explosion-proof toughened glass",
      "40 points multi-touch",
      "Quad core processor"
    ],
    specifications: {
      "System Type": "55-inch 4K Interactive Display",
      "Panel Grade": "A grade",
      "Effective Display Area": "1209.6(H)X680.4(V)mm",
      "Resolution": "3840X2160(4k)",
      "Brightness": ">250 cd/m²",
      "Color Gamut": "72% NTSC",
      "Contrast": "4000:1",
      "Viewing Angle": "178°(H)/178°(V)",
      "Touch Type": "Infrared touch",
      "Touch Points": "40 points",
      "Processor": "Quad core ARM Cortex-A73*4@1.5GHz",
      "Speaker": "8Ω/10W × 2",
      "Power Consumption": "≤180W",
      "Product Size": "1257.6*84*743.6mm",
      "Package Size": "1358*175*855mm"
    }
  },
  {
    id: 50,
    name: "MI-V85T1",
    images: [
      "/TV/TV/MI-Y32K6A.jpg",
      "/TV/TV/MI-Y32K6A.jpg",
      "/TV/TV/MI-Y32K6A.jpg",
    ],
    category: "Television",
    brand: "MI+",
    inStock: true,
    description: "85-inch UHD/4K TV",
    features: [
      "Louder Speaker",
      "Super bright",
      "Overvoltage Protection",
      "Music TV",
      "Voice remote control"
    ],
    specifications: {
      "System Type": "85-inch UHD/4K TV",
      "TV Signal": "DVB-T2/DVB-S2",
      "Panel Size": "85\"",
      "Speaker": "2*10W",
      "Power Consumption": "300W",
      "Carton Size": "2008*148*1170mm",
      "Resolution": "UHD/4K",
      "Viewing Angle": "178º/178º",
      "Brightness": "300 cd/m²",
      "Connectivity": "COAX/RJ45/USB/(Mini)CVBS/AUDIO IN/HDMI/ATV/DVT-T/C/T2/DVT-S/S2/EARPHONE OUT"
    }
  },
  {
    id: 51,
    name: "MI-F65T09M",
    images: [
      "/TV/TV/MI-S32T1A.jpg",
      "/TV/TV/MI-S32T1A.jpg",
      "/TV/TV/MI-S32T1A.jpg",
    ],
    category: "Television",
    brand: "MI+",
    inStock: true,
    description: "65-inch 4K Interactive Display",
    features: [
      "A grade panel",
      "Infrared touch screen",
      "Explosion-proof toughened glass",
      "40 points multi-touch",
      "Quad core processor"
    ],
    specifications: {
      "System Type": "65-inch 4K Interactive Display",
      "Panel Grade": "A grade",
      "Effective Display Area": "1428.48(H)x803.52(V)mm",
      "Resolution": "3840X2160(4k)",
      "Brightness": ">300 cd/m²",
      "Color Gamut": "72% NTSC",
      "Contrast": "4000:1",
      "Viewing Angle": "178°(H)/178°(V)",
      "Touch Type": "Infrared touch",
      "Touch Points": "40 points",
      "Processor": "Quad core ARM Cortex-A73*4@1.5GHz",
      "Speaker": "8Ω/15W × 2",
      "Power Consumption": "≤220W",
      "Product Size": "1485.01*120.2*877.58mm",
      "Package Size": "1605*200*1020mm"
    }
  },
  {
    id: 52,
    name: "MI-F75T09M",
    images: [
      "/TV/TV/MI-S43T1MXW.jpg",
      "/TV/TV/MI-S43T1MXW.jpg",
      "/TV/TV/MI-S43T1MXW.jpg",
    ],
    category: "Television",
    brand: "MI+",
    inStock: true,
    description: "75-inch 4K Interactive Display",
    features: [
      "A grade panel",
      "Infrared touch screen",
      "Explosion-proof toughened glass",
      "40 points multi-touch",
      "Quad core processor"
    ],
    specifications: {
      "System Type": "75-inch 4K Interactive Display",
      "Panel Grade": "A grade",
      "Effective Display Area": "1650.24(H)X928.26(V)mm",
      "Resolution": "3840X2160(4k)",
      "Brightness": ">300 cd/m²",
      "Color Gamut": "72% NTSC",
      "Contrast": "4000:1",
      "Viewing Angle": "178°(H)/178°(V)",
      "Touch Type": "Infrared touch",
      "Touch Points": "40 points",
      "Processor": "Quad core ARM Cortex-A73*4@1.5GHz",
      "Speaker": "8Ω/15W × 2",
      "Power Consumption": "≤320W",
      "Product Size": "1707.16*120.43*1012.72mm",
      "Package Size": "1830*200*1142mm"
    }
  },
  {
    id: 53,
    name: "MI-F86T09M",
    images: [
      "/TV/TV/TV-S65T1V.jpg",
      "/TV/TV/TV-S65T1V.jpg",
      "/TV/TV/TV-S65T1V.jpg",
    ],
    category: "Television",
    brand: "MI+",
    inStock: true,
    description: "86-inch 4K Interactive Display",
    features: [
      "A grade panel",
      "Infrared touch screen",
      "Explosion-proof toughened glass",
      "40 points multi-touch",
      "Quad core processor"
    ],
    specifications: {
      "System Type": "86-inch 4K Interactive Display",
      "Panel Grade": "A grade",
      "Effective Display Area": "1895.04(H)X1065.96(V)mm",
      "Resolution": "3840X2160(4k)",
      "Brightness": ">300 cd/m²",
      "Color Gamut": "72% NTSC",
      "Contrast": "4000:1",
      "Viewing Angle": "178°(H)/178°(V)",
      "Touch Type": "Infrared touch",
      "Touch Points": "40 points",
      "Processor": "Quad core ARM Cortex-A73*4@1.5GHz",
      "Speaker": "8Ω/15W × 2",
      "Power Consumption": "≤400W",
      "Product Size": "1953.36*120.4*1151.42mm",
      "Package Size": "2076*200*1294mm"
    }
  },
  {
    id: 54,
    name: "MI-D26S19C",
    images: [
      "/images/products/tely.jpg",
      "/images/products/tely.jpg",
      "/images/products/tely.jpg",
    ],
    category: "Television",
    brand: "MI+",
    inStock: true,
    description: "19-inch HD TV",
    features: [
      "Louder Speaker",
      "Overvoltage Protection",
      "AC/DC",
      "Music TV"
    ],
    specifications: {
      "System Type": "19-inch HD TV",
      "TV Signal": "DVB-T2/DC/AC",
      "Panel Size": "19\"",
      "Speaker": "2*8W",
      "Power Consumption": "28W",
      "Carton Size": "615*95*405mm",
      "Resolution": "HD",
      "Viewing Angle": "170º/170º",
      "Brightness": "150 cd/m²",
      "Connectivity": "Tuner*1/HDMI*1/AV*1/USB*1/VGA*1/Headphones*1/Coaxial*1"
    }
  },
  {
    id: 55,
    name: "MI-D32F1MC",
    images: [
      "/TV/TV/MI-D32F1MC.jpg",
      "/TV/TV/MI-D32F1MC.jpg",
      "/TV/TV/MI-D32F1MC.jpg",
    ],
    category: "Television",
    brand: "MI+",
    inStock: true,
    description: "32-inch HD TV",
    features: [
      "Louder Speaker",
      "Super bright",
      "Overvoltage Protection",
      "Music TV"
    ],
    specifications: {
      "System Type": "32-inch HD TV",
      "TV Signal": "Analog TV",
      "Panel Size": "32\"",
      "Speaker": "2*10W",
      "Power Consumption": "60W",
      "Carton Size": "780*120*512mm",
      "Resolution": "HD",
      "Viewing Angle": "178º/178º",
      "Brightness": "180 cd/m²",
      "Connectivity": "Tuner/HDMI/AV/USB/Headphones/Coaxial"
    }
  },
  {
    id: 56,
    name: "MI-Y32K6A",
    images: [
      "/TV/TV/MI-Y32K6A.jpg",
      "/TV/TV/MI-Y32K6A.jpg",
      "/TV/TV/MI-Y32K6A.jpg",
    ],
    category: "Television",
    brand: "MI+",
    inStock: true,
    description: "32-inch HD TV",
    features: [
      "Louder Speaker",
      "Super bright",
      "Overvoltage Protection",
      "Music TV"
    ],
    specifications: {
      "System Type": "32-inch HD TV",
      "TV Signal": "Analog TV",
      "Panel Size": "32\"",
      "Speaker": "2*10W",
      "Power Consumption": "60W",
      "Carton Size": "780*120*512mm",
      "Resolution": "HD",
      "Viewing Angle": "178º/178º",
      "Brightness": "180 cd/m²",
      "Connectivity": "Tuner/HDMI/AV/USB/Headphones/Coaxial"
    }
  },
  {
    id: 57,
    name: "MI-D43F1MC",
    images: [
      "/TV/TV/Image_20251023123901_496_11.jpg",
      "/TV/TV/Image_20251023123901_496_11.jpg",
      "/TV/TV/Image_20251023123901_496_11.jpg",
    ],
    category: "Television",
    brand: "MI+",
    inStock: true,
    description: "43-inch FHD TV",
    features: [
      "Louder Speaker",
      "Super bright",
      "Overvoltage Protection",
      "Music TV"
    ],
    specifications: {
      "System Type": "43-inch FHD TV",
      "TV Signal": "Analog TV",
      "Panel Size": "43\"",
      "Speaker": "2*10W",
      "Power Consumption": "90W",
      "Carton Size": "1105*125*675mm",
      "Resolution": "FHD",
      "Viewing Angle": "178º/178º",
      "Brightness": "200 cd/m²",
      "Connectivity": "Tuner/HDMI/AV/USB/Headphones/Coaxial"
    }
  }
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