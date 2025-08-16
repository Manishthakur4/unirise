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
    // 'Retail POS System',
    // 'Retail POS Software System',
    'Hanging Scales Price',
    'Hanging Scales for Precision Weighing',
    'Luggage Hanging Scale',
    'Digital Pocket Weighing Scales',
    'Jewellery Weighing Scale',
    'Precision Digital Weighing Scale',
    'Digital Industrial Weighing Scale',
    // 'Restaurant POS System',
    // 'Table Top Electronic Weighing Machine',
    'MS Platform Weighing Scale',
    // 'Laboratory Balances',
    'Flameproof Table Top Scale',
    'Electronic Weighing Scale',
    '100 Ton Dharam kanta price',
    '80 Ton Weighbridge cost',
    'Dharam Kanta 100 Ton price',
    'Digital Display Laboratory Balance',
    // 'Electronic Precision Balance Price',
    'S-Type Load Cell',
    'Compression Load Cell',
    'Weighbridge Load Cell',
    'Double Ended Shear Beam Ball Type Load Cell',
    'Double Ended Shear Load Cell',
    'Industrial Weight Box',
    'Digital Load Cell',
    'High Capacity Compression Load Cell',
    
    // 'Roller Platform Weighing Scale',
    // 'MS Heavy Duty Platform Weighing Scale',
    // 'Flame Proof Platform Scales (304 Stainlesxs Steel) Price',
    
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
    // 'Retail POS System',
    // 'Retail POS Software System',
    // 'Restaurant POS System',
    // 'Table Top Electronic Weighing Machine',
    // 'Laboratory Balances',
    // 'Electronic Precision Balance Price',
    // 'Electronic Micro Balances Price',
    // 'Digital Electronic Densimeter Balance Price',
    // 'Precision Electronic Weighing Balance',
    // 'Ultra Micro Balance-Touch Screen',
    // 'Semi Micro Balance',
    // 'Aczet Digital Weighing Scale',
    // 'Precision Weighing Scale Dual Rang',
    // 'High Precision Balance',
    // 'Electronic Analytical Balances',
    // 'Roller Platform Weighing Scale',
    // 'MS Heavy Duty Platform Weighing Scale',
    // 'Flame Proof Platform Scales (304 Stainless Steel) Price'
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
      
      // Default placeholder image and additional images
      let mainImage = `/placeholder.svg`;
      let additionalImages = [
        `/lovable-uploads/efd16d19-89a3-45c3-8739-ccc1d0e036b2.png`,
        `/lovable-uploads/d0c50158-c003-4b19-ae1f-ad31a2d617c7.png`,
        `/lovable-uploads/353335d0-7595-4490-8276-f0fb962a619a.png`,
        `/lovable-uploads/49fffbe9-07c1-4638-a0dd-970073f7fbaa.png`
      ];
      
      // Product-specific image overrides
      if (index === 0) {
        mainImage = "/lovable-uploads/PHOENIX Stainless Steel Digital Floor Scales, For Industrial, Model Name_Number_ Nep (1).jpg";
        additionalImages = [
          "/lovable-uploads/PHOENIX Stainless Steel Digital Floor Scales, For Industrial, Model Name_Number_ Nep.jpg",
          "/lovable-uploads/PHOENIX Stainless Steel Digital Floor Scales, For Industrial, Model Name_Number_ Nep (2).jpg",
        ];
      }

      if (index === 1) {
        mainImage = "/lovable-uploads/Metal Bantch Model CAS CL3000b Label Printing Weighing Scale, 30Kg, Accuracy_ 0.01Gm.jpg";
        additionalImages = [
          "/lovable-uploads/Metal Bantch Model CAS CL3000b Label Printing Weighing Scale, 30Kg, Accuracy_ 0.01Gm (1).jpg",
          "/lovable-uploads/Metal Bantch Model CAS CL3000b Label Printing Weighing Scale, 30Kg, Accuracy_ 0.01Gm (2).jpg",
          "/lovable-uploads/Metal Bantch Model CAS CL3000b Label Printing Weighing Scale, 30Kg, Accuracy_ 0.01Gm (3).jpg",
        ];
      }

      if (index === 2) {
        mainImage = "/lovable-uploads/Label Printing Scales.jpg";
        additionalImages = [
          "/lovable-uploads/Label Printing Scales (1).jpg",
          "/lovable-uploads/Label Printing Scales (2).jpg",
        ];
      }

      if (index === 3) {
        mainImage = "/lovable-uploads/DLX-061-05.jpg";
        additionalImages = [
          "/lovable-uploads/DLX-061-06.jpg",
          "/lovable-uploads/DLX-061-Back.jpg",
          "/lovable-uploads/DLX-061-Right-View.jpg",
          "/lovable-uploads/DLX-061-Right-View (1).jpg"
        ];
      }

      if (index === 4) {
        mainImage = "/lovable-uploads/ECON-Series-Bench-Scale-1.jpg";
        additionalImages = [
          "/lovable-uploads/ECON-Series-Bench-Scale-8.jpg",
          "/lovable-uploads/ECON-Series-Bench-Scale-9.jpg",
          "/lovable-uploads/ECON-Series-Bench-Scale-10.jpg",
          "/lovable-uploads/ECON-Series-Bench-Scale-11.jpg"
        ];
      }

      if (index === 5) {
        mainImage = "/lovable-uploads/670e6ad7eac81831175b0d95-selleton-sl-916-16x12-industrial-bench.jpg";
        additionalImages = [
          "/lovable-uploads/670e6ad7eac81831175b0d96-selleton-sl-916-16x12-industrial-bench.jpg",
          "/lovable-uploads/670e6ad7eac81831175b0d97-selleton-sl-916-16x12-industrial-bench.jpg",
          "/lovable-uploads/670e6ad7eac81831175b0d98-selleton-sl-916-16x12-industrial-bench.jpg",
          "/lovable-uploads/670e6ad7eac81831175b0d99-selleton-sl-916-16x12-industrial-bench.jpg"
        ];
      }
      
      if (index === 6) {
        mainImage = "/lovable-uploads/4120SCy1j6L._SX425_.jpg";
        additionalImages = [
          "/lovable-uploads/4176U-tArIL._SX425_.jpg",
          "/lovable-uploads/41UUQGaP2nL._SX425_.jpg",
          "/lovable-uploads/41fDYUqlorL._SX425_.jpg"
        ];
      }

      if (index === 7) {
        mainImage = "/lovable-uploads/Pasted image.png";
        additionalImages = [
          "/lovable-uploads/Pasted image (2).png",
          "/lovable-uploads/Pasted image (3).png"
        ];
      }

      if (index === 8) {
        mainImage = "/lovable-uploads/rm50_WP02_01.png";
        additionalImages = [
          "/lovable-uploads/rm50_WP04_01.jpg"
        ];
      }

      if (index === 9) {
        mainImage = "/lovable-uploads/Screenshot from 2025-04-16 11-44-30.png";
        additionalImages = [
          "/lovable-uploads/Screenshot from 2025-04-16 11-44-36.png",
          "/lovable-uploads/Screenshot from 2025-04-16 11-44-47.png",

        ];
      }

      // Label Printing Platform Weighing Scale
      if (index === 10) {
        mainImage = "/lovable-uploads/Label-Printing-Platform-.jpg";
        additionalImages = [
          "/lovable-uploads/Label-Printing-Platform-2.jpg"

        ];
      }
      
      // Retail POS System
      // if (index === 11) {
      //   mainImage = "/lovable-uploads/Sunrise 30kg 10 Inch Touch POS Scale, For Hotel, Capacity_ 50Kg.jpg";
      //   additionalImages = [
      //     "/lovable-uploads/Sunrise 30kg 10 Inch Touch POS Scale, For Hotel, Capacity_ 50Kg (1).jpg",
      //     "/lovable-uploads/Sunrise 30kg 10 Inch Touch POS Scale, For Hotel, Capacity_ 50Kg (2).jpg",
      //     "/lovable-uploads/Sunrise 30kg 10 Inch Touch POS Scale, For Hotel, Capacity_ 50Kg (3).jpg",
      //     "/lovable-uploads/Sunrise 30kg 10 Inch Touch POS Scale, For Hotel, Capacity_ 50Kg (4).jpg",

      //   ];
      // }

      // Retail POS Software System
      // if (index === 12) {
      //   mainImage = "/lovable-uploads/SM5500XPCS15ECR-Intelligent-POS-Checkout-Scale-front__FitMaxWzEwMzAsMTAzMF0.jpg";
      //   additionalImages = [
      //     "/lovable-uploads/SM5500XPCS15ECR-Intelligent-POS-Checkout-Scale-customer-display__FitMaxWzEwMzAsMTAzMF0.jpg",

      //   ];
      // }

      // Hanging Scales Price
      if (index === 11) {
        mainImage = "/lovable-uploads/Venus Metal PK Hanging Weighing Scale, For Agriculture, Capacity Tons_ upto 150 kg.jpg";
        additionalImages = [
          "/lovable-uploads/Venus Metal PK Hanging Weighing Scale, For Agriculture, Capacity Tons_ upto 150 kg (1).jpg",
          "/lovable-uploads/Venus Metal PK Hanging Weighing Scale, For Agriculture, Capacity Tons_ upto 150 kg (2).jpg",
        ];
      }

      // Hanging Scales for Precision Weighing
      if (index === 12) {
        mainImage = "/lovable-uploads/MS Hanging Scale 200 Kg x 20 Gm, For Business, Model Name_Number_ HS200.jpg";
        additionalImages = [
          "/lovable-uploads/MS Hanging Scale 200 Kg x 20 Gm, For Business, Model Name_Number_ HS200 (1).jpg",
          "/lovable-uploads/MS Hanging Scale 200 Kg x 20 Gm, For Business, Model Name_Number_ HS200 (2).jpg",
        ];
      }

      // Luggage Hanging Scale
      if (index === 13) {
        mainImage = "/lovable-uploads/Screenshot from 2025-04-17 11-47-48.png";
        additionalImages = [
          "/lovable-uploads/Screenshot from 2025-04-17 11-48-05.png",
          "/lovable-uploads/Screenshot from 2025-04-17 11-48-16.png",
        ];
      }

      // Digital Pocket Weighing Scales
      if (index === 14) {
        mainImage = "/lovable-uploads/Dhaara Fully Automatic Pocket Weighing Scale, Model Name_Number_ ps001, Accuracy_ High.jpg";
        additionalImages = [
          "/lovable-uploads/Dhaara Fully Automatic Pocket Weighing Scale, Model Name_Number_ ps001, Accuracy_ High (1).jpg",
          "/lovable-uploads/Dhaara Fully Automatic Pocket Weighing Scale, Model Name_Number_ ps001, Accuracy_ High (2).jpg",
        ];
      }

      // Jewellery Weighing Scale
      if (index === 15) {
        mainImage = "/lovable-uploads/Electric Essae JX Series Jewellery Weighing Machine, 300 gm.jpg";
        additionalImages = [
          "/lovable-uploads/Electric Essae JX Series Jewellery Weighing Machine, 300 gm (1).jpg",
          "/lovable-uploads/Essae AX Series Jewellery Weighing Balance, 1 kg.jpg",
          "/lovable-uploads/Essae AX Series Jewellery Weighing Balance, 1 kg (1).jpg",

        ];
      }

      // Precision Digital Weighing Scale
      if (index === 16) {
        mainImage = "/lovable-uploads/Essae DS 852g Precsion Balance.jpg";
        additionalImages = [
          "/lovable-uploads/Essae DS 852g Precsion Balance (1).jpg",
          "/lovable-uploads/Essae DS 852g Precsion Balance (2).jpg",
        ];
      }

      // Digital Industrial Weighing Scale
      if (index === 17) {
        mainImage = "/lovable-uploads/Industrial Weighing Scale, For Business Use, 500 Kg.jpg";
        additionalImages = [
          "/lovable-uploads/Industrial Weighing Scale, For Business Use, 500 Kg (1).jpg",
          "/lovable-uploads/Industrial Weighing Scale, For Business Use, 500 Kg (2).jpg",
          "/lovable-uploads/Industrial Weighing Scale, For Business Use, 500 Kg (3).jpg",
        ];
      }

      // Restaurant POS System
      // if (index === 20) {
      //   mainImage = "/lovable-uploads/restaurant-image-1.png";
      //   additionalImages = [
      //     "/lovable-uploads/0000494_used-elite-ii-restaurant-point-of-sale-system-standalone_550.jpeg",
      //     "/lovable-uploads/0000495_used-elite-ii-restaurant-point-of-sale-system-standalone_550.png",
      //   ];
      // }

      // Table Top Electronic Weighing Machine
      // if (index === 21) {
      //   mainImage = "/lovable-uploads/Screenshot from 2025-04-17 13-15-07.png";
      //   additionalImages = [
      //     "/lovable-uploads/Screenshot from 2025-04-17 13-15-20.png",
      //     "/lovable-uploads/Screenshot from 2025-04-17 13-15-30.png",
      //   ];
      // }

      // MS Platform Weighing Scale
      if (index === 18) {
        mainImage = "/lovable-uploads/71jh5lkjxkL._SL1500_.jpg";
        additionalImages = [
          "/lovable-uploads/71o8cqUB2iL._SL1500_.jpg",
          "/lovable-uploads/ms-platform-weighing-scale-1000x1000 (1).jpg",
          "/lovable-uploads/71S2MAnQ6pL._SL1500_.jpg",

        ];
      }

      // Laboratory Balances
      // if (index === 23) {
      //   mainImage = "/lovable-uploads/lab-balance-2.jpg";
      //   additionalImages = [
      //     "/lovable-uploads/41UUQGaP2nL._SX425_.jpg",
      //     "/lovable-uploads/4120SCy1j6L._SX425_.jpg",

      //   ];
      // }

      // Flameproof Table Top Scale
      if (index === 19) {
        mainImage = "/lovable-uploads/Screenshot from 2025-04-18 12-00-02.png";
        additionalImages = [
          "/lovable-uploads/flame-proof-weighing-scale-1663153824-6538806.jpeg",

        ];
      }

      // Electronic Weighing Scale
      if (index === 20) {
        mainImage = "/lovable-uploads/weighing-machine-for-shop3.png";
        additionalImages = [
          "/lovable-uploads/weighing-machine-for-shop-2-2.png",
          "/lovable-uploads/weighing-machine-for-shop4.png"
        ];
      }

      // 100 Ton Dharam kanta price
      if (index === 21) {
        mainImage = "/lovable-uploads/Screenshot from 2025-04-18 12-05-56.png";
        additionalImages = [
          "/lovable-uploads/Screenshot from 2025-04-18 12-06-01.png",
          "/lovable-uploads/Screenshot from 2025-04-18 12-06-17.png",
        ];
      }

      // 80 Ton Weighbridge cost
      if (index === 22) {
        mainImage = "/lovable-uploads/Screenshot from 2025-04-18 12-09-24.png";
        additionalImages = [
          "/lovable-uploads/Screenshot from 2025-04-18 12-09-43.png",
          "/lovable-uploads/Screenshot from 2025-04-18 12-09-52.png",
          "/lovable-uploads/Screenshot from 2025-04-18 12-08-58.png",

        ];
      }

      // Dharam Kanta 100 Ton price
      if (index === 23) {
        mainImage = "/lovable-uploads/Screenshot from 2025-04-18 12-13-10.png";
        additionalImages = [
          "/lovable-uploads/Screenshot from 2025-04-18 12-13-24.png",
          "/lovable-uploads/Screenshot from 2025-04-18 12-13-32.png",
        ];
      }

      // Digital Display Laboratory Balance
      if (index === 24) {
        mainImage = "/lovable-uploads/Screenshot from 2025-04-18 12-16-39.png";
        additionalImages = [
          "/lovable-uploads/Screenshot from 2025-04-18 12-16-09.png",
          "/lovable-uploads/Screenshot from 2025-04-18 12-16-50.png",
          "/lovable-uploads/Screenshot from 2025-04-18 12-17-15.png",

        ];
      }

      // Electronic Precision Balance Price
      // if (index === 30) {
      //   mainImage = "/lovable-uploads/61I-UdFPq3L._SL1500_.jpg";
      //   additionalImages = [
      //     "/lovable-uploads/51rGvi0nwmL.jpg",
      //     "/lovable-uploads/51hkwl6Ev+L.jpg",
      //     "/lovable-uploads/617u7BIhKwL.jpg",
      //   ];
      // }

      // S-Type Load Cell
      if (index === 25) {
        mainImage = "/lovable-uploads/Thames T61-501 S Load Cell, 50 Kg- 1000 Kg.jpg";
        additionalImages = [
          "/lovable-uploads/Thames T61-501 S Load Cell, 50 Kg- 1000 Kg (1).jpg",
          "/lovable-uploads/Thames T61-501 S Load Cell, 50 Kg- 1000 Kg (2).jpg",
        ];
      }

      // Compression Load Cell
      if (index === 26) {
        mainImage = "/lovable-uploads/Compression Load Cells (1).jpg";
        additionalImages = [
          "/lovable-uploads/Compression Load Cells.jpg",
          "/lovable-uploads/Compression Load Cells (2).jpg",
        ];
      }

      // Weighbridge Load Cell
      if (index === 27) {
        mainImage = "/lovable-uploads/Zemic Weighbridge Load Cells, 40-400tf.jpg";
        additionalImages = [
          "/lovable-uploads/Zemic Weighbridge Load Cells, 40-400tf (1).jpg",
          "/lovable-uploads/Zemic Weighbridge Load Cells, 40-400tf (2).jpg",
          "/lovable-uploads/Zemic Weighbridge Load Cells, 40-400tf (3).jpg",

        ];
      }

      // Double Ended Shear Beam Ball Type Load Cell
      if (index === 28) {
        mainImage = "/lovable-uploads/Screenshot from 2025-04-18 13-22-21.png";
        additionalImages = [
          "/lovable-uploads/ADI 70610 Weighbridge Load Cells, 30 Ton.jpg",
          "/lovable-uploads/Keli QS Weigh bridge Load Cell, 30 Ton.jpg",
        ];
      }

      // Double Ended Shear Load Cell
      if (index === 29) {
        mainImage = "/lovable-uploads/doppelscherstab_waegezelle-d10n_02_1280x1280.png";
        additionalImages = [
          "/lovable-uploads/doppelscherstab_waegezelle_d10n_03_1280x1280.png",
          "/lovable-uploads/doppelscherstabwaegezelle_d10_hauptbild_1280x1280.jpg",
        ];
      }

      // Industrial Weight Box
      if (index === 30) {
        mainImage = "/lovable-uploads/31TG7C9pvtL.jpg";
        additionalImages = [
          "/lovable-uploads/31koAVhpTkL.jpg",
          "/lovable-uploads/41pDy2KPSWL.jpg",
          "/lovable-uploads/31gd6CfdavL.jpg",

        ];
      }

      // Digital Load Cell
      if (index === 31) {
        mainImage = "/lovable-uploads/Digital Load Cell.jpg";
        additionalImages = [
          "/lovable-uploads/Digital Load Cell (1).jpg",
          "/lovable-uploads/Digital Load Cell (2).jpg",
        ];
      }

      // High Capacity Compression Load Cell
      if (index === 32) {
        mainImage = "/lovable-uploads/Screenshot from 2025-04-18 16-07-43.png";
        additionalImages = [
          "/lovable-uploads/Screenshot from 2025-04-18 15-58-34.png",
          "/lovable-uploads/Screenshot from 2025-04-18 15-58-54.png",
        ];
      }

      // Roller Platform Weighing Scale
      // if (index === 39) {
      //   mainImage = "/lovable-uploads/Screenshot from 2025-04-18 16-12-26.png";
      //   additionalImages = [
      //     "/lovable-uploads/Screenshot from 2025-04-18 16-12-35.png",
      //   ];
      // }

      // MS Heavy Duty Platform Weighing Scale
      // if (index === 40) {
      //   mainImage = "/lovable-uploads/Screenshot from 2025-04-18 16-17-28.png";
      //   additionalImages = [
      //     "/lovable-uploads/Screenshot from 2025-04-18 16-17-47.png",
      //   ];
      // }

      // Flame Proof Platform Scales (304 Stainless Steel) Price
      // if (index === 41) {
      //   mainImage = "/lovable-uploads/flame-proof-weighing-scale.jpg";
      //   additionalImages = [
      //     "/lovable-uploads/600-x-600-200-kg-platform-scale-with-flame-proof-indicator.jpg",
      //     "/lovable-uploads/900-x-900-Platform-Scale-Regular-Loadcell-500-K-G.jpg",
      //   ];
      // }

      // Digital Industrial Flameproof Floor Weighing Machine Price
      if (index === 33) {
        mainImage = "/lovable-uploads/flame-proof-weighing-scale-1663153824-6538806.jpeg";
        additionalImages = [
          "/lovable-uploads/900-x-900-Platform-Scale-Regular-Loadcell-500-K-G.jpg",
          "/lovable-uploads/Industrial Weighing Scale, For Business Use, 500 Kg (3).jpg",
        ];
      }

      // Floor Weighing Scales with inbuilt thermal Printer Price
      if (index === 34) {
        mainImage = "/lovable-uploads/Pasted image (4).png";
        additionalImages = [
          "/lovable-uploads/1-4.png",
        ];
      }

      // Low Profile Weighing Scale with two side ramps
      if (index === 35) {
        mainImage = "/lovable-uploads/low-profile-weighing-scale-with-two-side-ramps.png";
        additionalImages = [
          "/lovable-uploads/platform-weighing-scale.jpg",
          "/lovable-uploads/images.jpeg",
        ];
      }

      // Stainless Steel Table Top Weighing Scale
      if (index === 36) {
        mainImage = "/lovable-uploads/electronic-weighing-scale-1000x1000.jpg";
        additionalImages = [
          "/lovable-uploads/precision-scale-1000x1000.jpg",
          "/lovable-uploads/Screenshot from 2025-04-19 00-39-13.png",
        ];
      }

      // Table Top Weighing Scale
      if (index === 37) {
        mainImage = "/lovable-uploads/Screenshot from 2025-04-19 01-21-07.png";
        additionalImages = [
          "/lovable-uploads/Screenshot from 2025-04-19 01-21-22.png",
          "/lovable-uploads/Screenshot from 2025-04-19 01-21-27.png",
          "/lovable-uploads/Screenshot from 2025-04-19 01-21-33.png",

        ];
      }

      // Table Top Weighing Machine Price
      if (index === 38) {
        mainImage = "/lovable-uploads/Screenshot from 2025-04-19 01-24-56.png";
        additionalImages = [
          "/lovable-uploads/Screenshot from 2025-04-19 01-25-42.png",
        ];
      }

      // Counter Scale
      if (index === 39) {
        mainImage = "/lovable-uploads/Screenshot from 2025-04-19 01-31-04.png";
        additionalImages = [
          "/lovable-uploads/Screenshot from 2025-04-19 01-31-11.png",
          "/lovable-uploads/Screenshot from 2025-04-19 01-31-19.png",
          "/lovable-uploads/Screenshot from 2025-04-19 01-31-26.png",

        ];
      }

      // Retail Table Top Weighing Scale
      if (index ===  40) {
        mainImage = "/lovable-uploads/Pasted image (5).png";
        additionalImages = [
          "/lovable-uploads/precision-scale-1000x1000.jpg",
          "/lovable-uploads/Screenshot from 2025-04-19 01-24-56.png",
        ];
      }

      // Abs Waterproof Body Table Top Price
      if (index === 41) {
        mainImage = "/lovable-uploads/Screenshot from 2025-04-19 02-14-04.png";
        additionalImages = [
          "/lovable-uploads/Screenshot from 2025-04-19 02-14-16.png",
          "/lovable-uploads/Screenshot from 2025-04-19 02-14-26.png",
        ];
      }

      // Waterproof Stainless-Steel Weight Machine Price
      if (index === 42) {
        mainImage = "/lovable-uploads/Pasted image (6).png";
        additionalImages = [
          "/lovable-uploads/Screenshot from 2025-04-19 02-18-39.png",
          "/lovable-uploads/Screenshot from 2025-04-19 02-18-44.png",
          "/lovable-uploads/Screenshot from 2025-04-19 02-18-48.png",
          "/lovable-uploads/Screenshot from 2025-04-19 02-18-54.png",

        ];
      }

      // Digital Crane Scale
      if (index === 43) {
        mainImage = "/lovable-uploads/Digital Crane Scale.jpg";
        additionalImages = [
          "/lovable-uploads/Digital Crane Scale (1).jpg",
          "/lovable-uploads/Digital Crane Scale (2).jpg",
        ];
      }

      // Thermal Protection Crane Scale
      if (index === 44) {
        mainImage = "/lovable-uploads/Screenshot from 2025-04-19 02-28-58.png";
        additionalImages = [
          "/lovable-uploads/Screenshot from 2025-04-19 02-29-04.png",
          "/lovable-uploads/Screenshot from 2025-04-19 02-29-10.png",
          "/lovable-uploads/Screenshot from 2025-04-19 02-29-25.png",

        ];
      }

      // Heavy Duty Wireless Hanging Scale
      if (index === 45) {
        mainImage = "/lovable-uploads/Screenshot from 2025-04-19 02-34-12.png";
        additionalImages = [
          "/lovable-uploads/Screenshot from 2025-04-19 02-34-17.png",
          "/lovable-uploads/Screenshot from 2025-04-19 02-34-21.png",
          "/lovable-uploads/Screenshot from 2025-04-19 02-34-30.png",

        ];
      }

      // Heavy Duty Hanging Crane Scale With Heat Proof
      if (index === 46) {
        mainImage = "/lovable-uploads/Screenshot from 2025-04-19 02-38-05.png";
        additionalImages = [
          "/lovable-uploads/Screenshot from 2025-04-19 02-38-38.png",
          "/lovable-uploads/Screenshot from 2025-04-19 02-38-58.png",
        ];
      }

      // Wireless Digital Crane Scale
      if (index === 47) {
        mainImage = "/lovable-uploads/Screenshot from 2025-04-19 02-45-25.png";
        additionalImages = [
          "/lovable-uploads/Screenshot from 2025-04-19 02-45-31.png",
          "/lovable-uploads/Screenshot from 2025-04-19 02-45-35.png",
          "/lovable-uploads/Screenshot from 2025-04-19 02-45-39.png",
          "/lovable-uploads/Screenshot from 2025-04-19 02-45-44.png"

        ];
      }

      // Heavy Duty Electronic Platform Weighing Scale with thermal Printer
      if (index === 48) {
        mainImage = "/lovable-uploads/Screenshot from 2025-04-19 02-48-03.png";
        additionalImages = [
          "/lovable-uploads/Screenshot from 2025-04-19 02-48-54.png",
        ];
      }

      // Fully Stainless Steel Floor Weighing Scales
      if (index === 49) {
        mainImage = "/lovable-uploads/Industrial Weighing Scale, For Business Use, 500 Kg (2).jpg";
        additionalImages = [
          "/lovable-uploads/Industrial Weighing Scale, For Business Use, 500 Kg (1).jpg",
          "/lovable-uploads/670e6ad7eac81831175b0d97-selleton-sl-916-16x12-industrial-bench.jpg",
        ];
      }

      // Weighing Scale With Label Printer
      if (index === 50) {
        mainImage = "/lovable-uploads/353335d0-7595-4490-8276-f0fb962a619a.png";
        additionalImages = [
          "/lovable-uploads/d0c50158-c003-4b19-ae1f-ad31a2d617c7.png",
          "/lovable-uploads/Pasted image (4).png",
        ];
      }

      // Heavy Duty Platform Weighing Scale
      if (index === 51) {
        mainImage = "/lovable-uploads/Pasted image (7).png";
        additionalImages = [
          "/lovable-uploads/71o8cqUB2iL._SL1500_.jpg",
          "/lovable-uploads/900-x-900-Platform-Scale-Regular-Loadcell-500-K-G.jpg",
        ];
      }

      // Floor Weighing Scale with Ramp
      if (index === 52) {
        mainImage = "/lovable-uploads/Pasted image (8).png";
        additionalImages = [
          "/lovable-uploads/adam-equipment-700100200-accessory-floor-scale-ramp-1171034.jpg",
          "/lovable-uploads/platform-weighing-scale.jpg",
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
