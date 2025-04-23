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
  imageAlt: string;
  description: string;
  features: string[];
  specifications: {
    [key: string]: string;
  };
  isFeatured?: boolean;
  isNewArrival?: boolean;
  stock: number;
  images?: string[];
}

const generateProducts = (): Product[] => {
  const products: Product[] = [];
  let id = 1;

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

  const removedProducts = [
    'Retail POS System',
    'Retail POS Software System',
    'Restaurant POS System',
    'Table Top Electronic Weighing Machine',
    'Laboratory Balances',
    'Electronic Precision Balance Price',
    'Electronic Micro Balances Price',
    'Digital Electronic Densimeter Balance Price',
    'Precision Electronic Weighing Balance',
    'Ultra Micro Balance-Touch Screen',
    'Semi Micro Balance',
    'Aczet Digital Weighing Scale',
    'Precision Weighing Scale Dual Rang',
    'High Precision Balance',
    'Electronic Analytical Balances',
    'Roller Platform Weighing Scale',
    'MS Heavy Duty Platform Weighing Scale',
    'Flame Proof Platform Scales (304 Stainless Steel) Price'
  ];

  const validProductNames = productNames.filter(name => !removedProducts.includes(name));

  validProductNames.forEach((name, index) => {
    const info = getProductCategoryInfo(name);
    if (info) {
      const price = Math.floor(Math.random() * 9900) + 100;
      const hasDiscount = Math.random() < 0.3;
      const discountedPrice = hasDiscount ? Math.floor(price * 0.85) : undefined;
      const rating = (Math.random() * 1.5) + 3.5;
      const isFeatured = Math.random() < 0.2;
      const isNewArrival = Math.random() < 0.15;
      const stock = Math.floor(Math.random() * 46) + 5;

      const description = descriptions[Math.floor(Math.random() * descriptions.length)];

      const features = [
        `High-quality ${info.subtypeName.toLowerCase()} for professional use`,
        `Easy to use interface with intuitive controls`,
        `Durable construction for long-lasting performance`,
        `Precision measurement capability for accurate results`,
        `Compact design that saves space while maintaining functionality`
      ];

      const specifications: { [key: string]: string } = {
        "Model": `${info.subtypeId.toUpperCase()}-${Math.floor(Math.random() * 1000)}`,
        "Power": "AC adapter (included) or rechargeable battery",
        "Warranty": "1 Year manufacturer warranty",
        "Material": Math.random() < 0.5 ? "Stainless Steel" : "High-grade ABS plastic"
      };

      if (info.subtypeId.includes("scale")) {
        const capacities = ["5kg", "10kg", "20kg", "50kg", "100kg", "500kg", "1000kg"];
        specifications["Maximum Capacity"] = capacities[Math.floor(Math.random() * capacities.length)];
      }

      let mainImage = `/lovable-uploads/8941770d-1914-45fc-b2da-b9459a89f014.png`;
      let additionalImages = [
        `/lovable-uploads/efd16d19-89a3-45c3-8739-ccc1d0e036b2.png`,
        `/lovable-uploads/d0c50158-c003-4b19-ae1f-ad31a2d617c7.png`,
        `/lovable-uploads/353335d0-7595-4490-8276-f0fb962a619a.png`,
        `/lovable-uploads/49fffbe9-07c1-4638-a0dd-970073f7fbaa.png`
      ];

      if (index === 0) {
        mainImage = "/lovable-uploads/8941770d-1914-45fc-b2da-b9459a89f014.png";
        additionalImages = [
          "/lovable-uploads/efd16d19-89a3-45c3-8739-ccc1d0e036b2.png",
          "/lovable-uploads/d0c50158-c003-4b19-ae1f-ad31a2d617c7.png",
          "/lovable-uploads/353335d0-7595-4490-8276-f0fb962a619a.png",
          "/lovable-uploads/49fffbe9-07c1-4638-a0dd-970073f7fbaa.png"
        ];
      }

      if (index === 1) {
        mainImage = "/lovable-uploads/8941770d-1914-45fc-b2da-b9459a89f014.png";
        additionalImages = [
          "/lovable-uploads/efd16d19-mkse-45c3-8739-ccc1d0e036b2.png",
          "/lovable-uploads/d0c50158-mkmsl-4b19-ae1f-ad31a2d617c7.png",
          "/lovable-uploads/353335d0-0khh-4490-8276-f0fb962a619a.png",
          "/lovable-uploads/49fffbe9-nj89-4638-a0dd-970073f7fbaa.png"
        ];
      }

      if (index === 2) {
        mainImage = "/lovable-uploads/8941770d-8976-45fc-b2da-b9459a89f014.png";
        additionalImages = [
          "/lovable-uploads/efd16d19-89a3-mkl0-8739-ccc1d0e036b2.png",
          "/lovable-uploads/d0c50158-sdhb-4b19-ae1f-ad31a2d617c7.png",
          "/lovable-uploads/353335d0-75fg-4490-8276-f0fb962a619a.png",
          "/lovable-uploads/49fffbe9-ml23-4638-a0dd-970073f7fbaa.png"
        ];
      }

      const altText = `${name} - ${info.categoryId === 'machine' ? 'Weighing Machine' : 'Spare Part'} (${info.subtypeName})`;

      const imageInfo = `Product ID: ${id}, Main Image: ${mainImage.split('/').pop()}, Additional Images: ${additionalImages.map(img => img.split('/').pop()).join(', ')}`;
      specifications["ImageInfo"] = imageInfo;

      products.push({
        id,
        name,
        type: info.categoryId as 'machine' | 'spare-part',
        subtype: info.subtypeId,
        price,
        discountedPrice,
        rating,
        image: mainImage,
        imageAlt: altText,
        description,
        features,
        specifications,
        isFeatured,
        isNewArrival,
        stock,
        images: additionalImages
      });

      id++;
    }
  });

  return products;
};

const products: Product[] = generateProducts();

export default products;
