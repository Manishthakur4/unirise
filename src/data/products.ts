
import { getProductCategoryInfo } from './productCategories';

export interface Product {
  id: number;
  name: string;
  type: 'machine' | 'spare-part';
  subtype: string;
  price: number;
  discountedPrice?: number;
  rating: number;
  image: string;
  imageAlt: string; // Added explicit alt text field
  description: string;
  features: string[];
  specifications: {
    [key: string]: string;
  };
  isFeatured?: boolean;
  isNewArrival?: boolean;
  stock: number;
}

// Generate products based on the product categories
const generateProducts = (): Product[] => {
  const products: Product[] = [];
  let id = 1;
  
  // Product descriptions
  const descriptions = [
    "High-precision digital scale perfect for laboratory environments, offering exceptional accuracy with advanced calibration features.",
    "Rugged industrial floor scale designed for warehouse and manufacturing environments. Built to withstand harsh conditions.",
    "Professional retail scale with built-in price computing functionality, perfect for delis, candy shops, and specialty food stores.",
    "Ultra-precise jewelry scale with diamond weighing mode and carat measurement. Perfect for jewelers requiring absolute accuracy.",
    "Digital postal scale designed for shipping departments and mail rooms. Accurately weigh packages with postage calculation features.",
    "Fully waterproof industrial scale with IP68 rating, perfect for food processing, fisheries, and wet environments.",
    "Heavy-duty platform scale with a capacity of 1000kg, ideal for industrial and commercial applications requiring durability.",
    "Compact and portable weighing scale with precision measurement capabilities, perfect for laboratories and research facilities."
  ];
  
  // Extract all product names and create product objects
  const productNames = [
    'Floor Counting Scale Price',
    'Pieces Weighing & Counting Scales with Barcode Label Printing',
    'Counting and Weighing Scale with inbuilt barcode label printer',
    'Table Top Weighing & Counting Scale Price',
    'Bench Scales-Industrial Price',
    'Stainless Steel Bench Scales',
    'Bench Scale-HIGH Precision Scale Price',
    'Touch Screen Table Top Scale',
    'Table Top Non-Touch Intelligent Scale with External Printer',
    'Label Printing Floor Scales',
    'Label Printing Platform Weighing Scale',
    'Retail POS System',
    'Retail POS Software System',
    'Hanging Scales Price',
    'Hanging Scales for Precision Weighing',
    'Luggage Hanging Scale',
    'Digital Pocket Weighing Scales',
    'Jewellery Weighing Scale',
    'Precision Digital Weighing Scale',
    'Digital Industrial Weighing Scale',
    'Restaurant POS System',
    'Table Top Electronic Weighing Machine',
    'MS Platform Weighing Scale',
    'Laboratory Balances',
    'Flameproof Table Top Scale',
    'Electronic Weighing Scale',
    '100 Ton Dharam kanta price',
    '80 Ton Weighbridge cost',
    'Dharam Kanta 100 Ton price',
    'Digital Display Laboratory Balance',
    'Electronic Precision Balance Price',
    'S-Type Load Cell',
    'Compression Load Cell',
    'Weighbridge Load Cell',
    'Double Ended Shear Beam Ball Type Load Cell',
    'Double Ended Shear Load Cell',
    'Industrial Weight Box',
    'Digital Load Cell',
    'High Capacity Compression Load Cell',
    
    'Roller Platform Weighing Scale',
    'MS Heavy Duty Platform Weighing Scale',
    'Flame Proof Platform Scales (304 Stainless Steel) Price',
    
    'Digital Industrial Flameproof Floor Weighing Machine Price',
    'Floor Weighing Scales with inbuilt thermal Printer Price',
    'Low Profile Weighing Scale with two side ramps',
    
    'Stainless Steel Table Top Weighing Scale',
    'Table Top Weighing Scale',
    'Table Top Weighing Machine Price',
    'Counter Scale',
    'Retail Table Top Weighing Scale',
    'Abs Waterproof Body Table Top Price',
    'Waterproof Stainless-Steel Weight Machine Price',
    
    'Digital Crane Scale',
    'Thermal Protection Crane Scale', 
    'Heavy Duty Wireless Hanging Scale',
    'Heavy Duty Hanging Crane Scale With Heat Proof',
    'Wireless Digital Crane Scale',
    
    'Heavy Duty Electronic Platform Weighing Scale with thermal Printer',
    'Fully Stainless Steel Floor Weighing Scales',
    'Weighing Scale With Label Printer',
    'Heavy Duty Platform Weighing Scale',
    'Floor Weighing Scale with Ramp'
  ];
  
  // Generate image paths based on product type and subtype
  const getProductImageInfo = (name: string, type: string, subtype: string, productId: number) => {
    // Clean the subtype and name to be used in file path - replace spaces with hyphens and remove special characters
    const cleanSubtype = subtype.replace(/-/g, '_').replace(/\s+/g, '-').toLowerCase();
    const cleanName = name.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '').toLowerCase();
    
    // Create directory structure based on product type and subtype
    const typeFolder = type === 'machine' ? 'weighing-machines' : 'spare-parts';
    const subtypeFolder = cleanSubtype;
    
    // Generate main image path
    const mainImagePath = `/lovable-uploads/${typeFolder}/${subtypeFolder}/${cleanName}-${productId}`;
    
    // Generate alternate images paths (for the product gallery)
    const altImages = [
      `${mainImagePath}-1`,
      `${mainImagePath}-2`,
      `${mainImagePath}-3`,
      `${mainImagePath}-4`
    ];
    
    // Generate meaningful alt text based on product name and type
    const altText = `${name} - ${type === 'machine' ? 'Weighing Machine' : 'Spare Part'} (${subtype.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')})`;
    
    return { 
      mainImagePath, 
      altImages,
      altText 
    };
  };
  
  productNames.forEach(name => {
    const info = getProductCategoryInfo(name);
    if (info) {
      // Generate random price between 100 and 10000
      const price = Math.floor(Math.random() * 9900) + 100;
      // 30% chance of having a discount
      const hasDiscount = Math.random() < 0.3;
      const discountedPrice = hasDiscount ? Math.floor(price * 0.85) : undefined;
      // Random rating between 3.5 and 5.0
      const rating = (Math.random() * 1.5) + 3.5;
      // 20% chance of being featured
      const isFeatured = Math.random() < 0.2;
      // 15% chance of being a new arrival
      const isNewArrival = Math.random() < 0.15;
      // Random stock between 5 and 50
      const stock = Math.floor(Math.random() * 46) + 5;
      
      // Random description from the array
      const description = descriptions[Math.floor(Math.random() * descriptions.length)];
      
      // Create features based on the product name
      const features = [
        `High-quality ${info.subtypeName.toLowerCase()} for professional use`,
        `Easy to use interface with intuitive controls`,
        `Durable construction for long-lasting performance`,
        `Precision measurement capability for accurate results`,
        `Compact design that saves space while maintaining functionality`
      ];
      
      // Create specifications
      const specifications: { [key: string]: string } = {
        "Model": `${info.subtypeId.toUpperCase()}-${Math.floor(Math.random() * 1000)}`,
        "Power": "AC adapter (included) or rechargeable battery",
        "Warranty": "1 Year manufacturer warranty",
        "Material": Math.random() < 0.5 ? "Stainless Steel" : "High-grade ABS plastic"
      };
      
      // Add capacity specification based on subtype
      if (info.subtypeId.includes("scale")) {
        const capacities = ["5kg", "10kg", "20kg", "50kg", "100kg", "500kg", "1000kg"];
        specifications["Maximum Capacity"] = capacities[Math.floor(Math.random() * capacities.length)];
      }
      
      // Get image info with structured paths
      const imageInfo = getProductImageInfo(name, info.categoryId, info.subtypeId, id);
      
      // For now, use placeholder.svg since we don't have actual images
      const actualImagePath = "/placeholder.svg";
      
      // Add product to array
      products.push({
        id,
        name,
        type: info.categoryId as 'machine' | 'spare-part',
        subtype: info.subtypeId,
        price,
        discountedPrice,
        rating,
        image: actualImagePath, // Using placeholder for now, but storing the structured path in specifications
        imageAlt: imageInfo.altText,
        description,
        features,
        specifications: {
          ...specifications,
          "ImagePath": imageInfo.mainImagePath, // Store the structured path for reference
          "AltImages": JSON.stringify(imageInfo.altImages) // Store alternate image paths
        },
        isFeatured,
        isNewArrival,
        stock
      });
      
      id++;
    }
  });
  
  return products;
};

const products: Product[] = generateProducts();

export default products;
