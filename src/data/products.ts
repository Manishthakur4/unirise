
export interface Product {
  id: number;
  name: string;
  category: 'industrial' | 'commercial' | 'laboratory' | 'kitchen' | 'personal';
  price: number;
  discountedPrice?: number;
  rating: number;
  image: string;
  description: string;
  features: string[];
  specifications: {
    [key: string]: string;
  };
  isFeatured?: boolean;
  isNewArrival?: boolean;
  stock: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "PrecisionX Digital Scale",
    category: "laboratory",
    price: 899.99,
    discountedPrice: 799.99,
    rating: 4.8,
    image: "/placeholder.svg",
    description: "High-precision digital scale perfect for laboratory environments. The PrecisionX offers exceptional accuracy to 0.001g with advanced calibration features and data logging capabilities.",
    features: [
      "Ultra-high precision with 0.001g accuracy",
      "Automatic calibration system",
      "Data logging with USB and Bluetooth connectivity",
      "Stainless steel weighing platform",
      "Overload protection system"
    ],
    specifications: {
      "Maximum Capacity": "2000g",
      "Readability": "0.001g",
      "Pan Size": "180mm diameter",
      "Display": "LCD with backlight",
      "Power": "AC adapter (included) or rechargeable battery",
      "Dimensions": "310 x 220 x 90mm",
      "Weight": "4.2kg"
    },
    isFeatured: true,
    stock: 15
  },
  {
    id: 2,
    name: "IndustrialForce Heavy Duty Scale",
    category: "industrial",
    price: 1499.99,
    rating: 4.9,
    image: "/placeholder.svg",
    description: "Rugged industrial floor scale designed for warehouse and manufacturing environments. Built to withstand harsh conditions while providing reliable weight measurements for heavy items.",
    features: [
      "Heavy-duty steel construction",
      "10,000 lb capacity",
      "Large LED display visible from distance",
      "Anti-slip diamond plate surface",
      "Multiple unit conversion (kg, lb, oz)"
    ],
    specifications: {
      "Maximum Capacity": "10,000 lb (4,535 kg)",
      "Readability": "0.5 lb (0.2 kg)",
      "Platform Size": "4ft x 4ft (1.2m x 1.2m)",
      "Display": "High-brightness LED",
      "Power": "AC power with battery backup",
      "Construction": "Powder-coated steel",
      "Operating Temperature": "-10°C to 40°C"
    },
    isFeatured: true,
    stock: 8
  },
  {
    id: 3,
    name: "CulinaryPro Kitchen Scale",
    category: "kitchen",
    price: 59.99,
    discountedPrice: 49.99,
    rating: 4.7,
    image: "/placeholder.svg",
    description: "Sleek, accurate kitchen scale perfect for home chefs and baking enthusiasts. Measure ingredients with precision to ensure perfect results every time.",
    features: [
      "Accurate to 1g with 5kg capacity",
      "Easy-to-clean stainless steel surface",
      "Tare function",
      "Unit conversion (g, oz, lb, ml)",
      "Slim design for easy storage"
    ],
    specifications: {
      "Maximum Capacity": "5kg (11lb)",
      "Readability": "1g (0.1oz)",
      "Platform": "Stainless steel",
      "Display": "Backlit LCD",
      "Power": "2 AAA batteries (included)",
      "Auto-Off": "60 seconds",
      "Dimensions": "200 x 150 x 17mm"
    },
    isFeatured: true,
    isNewArrival: true,
    stock: 42
  },
  {
    id: 4,
    name: "HealthTrack Body Analyzer",
    category: "personal",
    price: 79.99,
    rating: 4.5,
    image: "/placeholder.svg",
    description: "Advanced digital body scale that measures weight, BMI, body fat, muscle mass, water percentage and more. Connect to the HealthTrack app to monitor your fitness journey.",
    features: [
      "Comprehensive body composition analysis",
      "Bluetooth connectivity with free mobile app",
      "Multi-user profiles",
      "High-accuracy sensors",
      "Tempered glass platform"
    ],
    specifications: {
      "Maximum Capacity": "180kg (396lb)",
      "Readability": "0.1kg (0.2lb)",
      "Platform": "Tempered glass",
      "Display": "Backlit LCD",
      "Power": "3 AAA batteries",
      "Connectivity": "Bluetooth 5.0",
      "App Compatibility": "iOS 10+ and Android 6.0+"
    },
    isNewArrival: true,
    stock: 35
  },
  {
    id: 5,
    name: "RetailPro Price Computing Scale",
    category: "commercial",
    price: 349.99,
    rating: 4.6,
    image: "/placeholder.svg",
    description: "Professional retail scale with built-in price computing functionality, perfect for delis, candy shops, and specialty food stores. Features easy-to-use interface and customizable preset keys.",
    features: [
      "Accurate weight and price calculation",
      "30 preset keys for common items",
      "Rechargeable battery for portable use",
      "Adjustable display for customer viewing",
      "RS-232 port for receipt printer connection"
    ],
    specifications: {
      "Maximum Capacity": "15kg (33lb)",
      "Readability": "5g (0.01lb)",
      "Platform": "Stainless steel",
      "Display": "Dual LCD (operator and customer)",
      "Power": "AC adapter and rechargeable battery",
      "Battery Life": "12 hours continuous use",
      "Memory": "99 PLU storage"
    },
    stock: 20
  },
  {
    id: 6,
    name: "MicroBalance Jewelry Scale",
    category: "commercial",
    price: 129.99,
    rating: 4.8,
    image: "/placeholder.svg",
    description: "Ultra-precise jewelry scale with diamond weighing mode and carat measurement. Perfect for jewelers, pawnshops, and precious metal dealers requiring absolute accuracy.",
    features: [
      "High precision with 0.01 carat resolution",
      "Multiple weighing units (g, ct, dwt, oz, ozt, gn)",
      "Protective draft shield included",
      "Calibration weights included",
      "Compact portable design"
    ],
    specifications: {
      "Maximum Capacity": "50g (250ct)",
      "Readability": "0.001g (0.01ct)",
      "Platform": "Stainless steel with draft shield",
      "Display": "Backlit LCD",
      "Power": "AC adapter or 2 AA batteries",
      "Calibration": "External with included weights",
      "Dimensions": "170 x 120 x 50mm"
    },
    isNewArrival: true,
    stock: 12
  },
  {
    id: 7,
    name: "ShippingMaster Postal Scale",
    category: "commercial",
    price: 199.99,
    discountedPrice: 179.99,
    rating: 4.4,
    image: "/placeholder.svg",
    description: "Digital postal scale designed for shipping departments, mail rooms, and home offices. Accurately weigh packages up to 150 lbs with postage calculation features.",
    features: [
      "150 lb capacity for all shipping needs",
      "Integrated postage rate calculator",
      "Hold function for large packages",
      "USB connection for computer integration",
      "Shipping label software included"
    ],
    specifications: {
      "Maximum Capacity": "150lb (68kg)",
      "Readability": "0.1lb (0.05kg)",
      "Platform Size": "30 x 30cm",
      "Display": "Backlit LCD with remote display",
      "Power": "AC adapter with battery backup",
      "Interface": "USB 2.0",
      "Compatible Services": "USPS, UPS, FedEx, DHL"
    },
    stock: 18
  },
  {
    id: 8,
    name: "AquaWeigh Waterproof Scale",
    category: "industrial",
    price: 399.99,
    rating: 4.7,
    image: "/placeholder.svg",
    description: "Fully waterproof industrial scale with IP68 rating, perfect for food processing, fisheries, and wet environments where regular scales would fail.",
    features: [
      "100% waterproof with IP68 certification",
      "Stainless steel construction",
      "Wash-down capability with high-pressure water",
      "Corrosion-resistant components",
      "Non-slip rubber feet"
    ],
    specifications: {
      "Maximum Capacity": "30kg (66lb)",
      "Readability": "10g (0.02lb)",
      "Platform Size": "350 x 300mm",
      "Display": "Sealed LED",
      "Power": "Sealed rechargeable battery",
      "Battery Life": "48 hours continuous use",
      "Material": "304 stainless steel"
    },
    stock: 10
  }
];

export default products;
