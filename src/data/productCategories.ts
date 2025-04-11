
export interface ProductSubtype {
  id: string;
  name: string;
  products: string[];
}

export interface ProductCategory {
  id: string;
  name: string;
  subtypes: ProductSubtype[];
}

export const productCategories: ProductCategory[] = [
  {
    id: 'machine',
    name: 'Machine',
    subtypes: [
      {
        id: 'counting-scale',
        name: 'Counting Scale',
        products: [
          'Floor Counting Scale Price',
          'Pieces Weighing & Counting Scales with Barcode Label Printing',
          'Counting and Weighing Scale with inbuilt barcode label printer',
          'Table Top Weighing & Counting Scale Price'
        ]
      },
      {
        id: 'bench-scale',
        name: 'Bench Scale',
        products: [
          'Bench Scales-Industrial Price',
          'Stainless Steel Bench Scales',
          'Bench Scale-HIGH Precision Scale Price'
        ]
      },
      {
        id: 'label-printing-scale',
        name: 'Label Printing Scale',
        products: [
          'Touch Screen Table Top Scale',
          'Table Top Non-Touch Intelligent Scale with External Printer',
          'Label Printing Floor Scales',
          'Label Printing Platform Weighing Scale'
        ]
      },
      {
        id: 'pos-system',
        name: 'POS System',
        products: [
          'Retail POS System',
          'Retail POS Software System'
        ]
      },
      {
        id: 'digital-hanging-scale',
        name: 'Digital Hanging Scale',
        products: [
          'Hanging Scales Price',
          'Hanging Scales for Precision Weighing',
          'Luggage Hanging Scale'
        ]
      },
      {
        id: 'jewellery-scale',
        name: 'Jewellery Scale',
        products: [
          'Digital Pocket Weighing Scales',
          'Jewellery Weighing Scale',
          'Precision Digital Weighing Scale'
        ]
      },
      {
        id: 'industrial-scale',
        name: 'Industrial Scale',
        products: [
          'Digital Industrial Weighing Scale'
        ]
      },
      {
        id: 'supermarket-scale',
        name: 'Supermarket Scale',
        products: [
          'Restaurant POS System'
        ]
      },
      {
        id: 'electronic-weighing-scale',
        name: 'Electronic Weighing Scale',
        products: [
          'Table Top Electronic Weighing Machine'
        ]
      },
      {
        id: 'platform-scale',
        name: 'Platform Scale',
        products: [
          'MS Platform Weighing Scale'
        ]
      },
      {
        id: 'electronic-scale',
        name: 'Electronic Scale',
        products: [
          'Laboratory Balances'
        ]
      },
      {
        id: 'flameproof-scale',
        name: 'Flameproof Scale',
        products: [
          'Flameproof Table Top Scale'
        ]
      },
      {
        id: 'check-weighing-scale',
        name: 'Check Weighing Scale',
        products: [
          'Electronic Weighing Scale'
        ]
      },
      {
        id: 'weighbridge',
        name: 'Weighbridge',
        products: [
          '100 Ton Dharam kanta price',
          '80 Ton Weighbridge cost',
          'Dharam Kanta 100 Ton price'
        ]
      },
      {
        id: 'laboratory-scale',
        name: 'Laboratory Scale',
        products: [
          'Digital Display Laboratory Balance',
          'Electronic Precision Balance Price',
          'Electronic Micro Balances Price',
          'Digital Electronic Densimeter Balance Price',
          'Precision Electronic Weighing Balance',
          'Ultra Micro Balance-Touch Screen',
          'Semi Micro Balance',
          'Aczet Digital Weighing Scale',
          'Precision Weighing Scale Dual Rang',
          'High Precision Balance',
          'Electronic Analytical Balances'
        ]
      },
      {
        id: 'platform-weighing-scale',
        name: 'Platform Weighing Scale',
        products: [
          'Roller Platform Weighing Scale',
          'MS Heavy Duty Platform Weighing Scale',
          'Flame Proof Platform Scales (304 Stainless Steel) Price'
        ]
      },
      {
        id: 'floor-scale',
        name: 'Floor Scale',
        products: [
          'Digital Industrial Flameproof Floor Weighing Machine Price',
          'Floor Weighing Scales with inbuilt thermal Printer Price',
          'Low Profile Weighing Scale with two side ramps'
        ]
      },
      {
        id: 'table-top-weighing-scale',
        name: 'Table Top Weighing Scale',
        products: [
          'Stainless Steel Table Top Weighing Scale',
          'Table Top Weighing Scale',
          'Table Top Weighing Machine Price',
          'Counter Scale',
          'Retail Table Top Weighing Scale',
          'Abs Waterproof Body Table Top Price',
          'Waterproof Stainless-Steel Weight Machine Price'
        ]
      },
      {
        id: 'digital-crane-scale',
        name: 'Digital Crane Scale',
        products: [
          'Digital Crane Scale',
          'Thermal Protection Crane Scale',
          'Heavy Duty Wireless Hanging Scale',
          'Heavy Duty Hanging Crane Scale With Heat Proof',
          'Wireless Digital Crane Scale'
        ]
      },
      {
        id: 'heavy-duty-platform-scale',
        name: 'Heavy Duty Platform Scale',
        products: [
          'Heavy Duty Electronic Platform Weighing Scale with thermal Printer',
          'Fully Stainless Steel Floor Weighing Scales',
          'Weighing Scale With Label Printer',
          'Heavy Duty Platform Weighing Scale',
          'Floor Weighing Scale with Ramp'
        ]
      }
    ]
  },
  {
    id: 'spare-part',
    name: 'Spare Part',
    subtypes: [
      {
        id: 'load-cell',
        name: 'Load Cell',
        products: [
          'S-Type Load Cell',
          'Compression Load Cell',
          'Weighbridge Load Cell'
        ]
      },
      {
        id: 'shear-beam-load-cell',
        name: 'Shear Beam Load Cell',
        products: [
          'Double Ended Shear Beam Ball Type Load Cell',
          'Double Ended Shear Load Cell'
        ]
      },
      {
        id: 'weighing-scale-spare',
        name: 'Weighing Scale Spare',
        products: [
          'Industrial Weight Box'
        ]
      },
      {
        id: 'weigh-load-cells',
        name: 'Weigh Load Cells',
        products: [
          'Digital Load Cell'
        ]
      },
      {
        id: 'compression-load-cell',
        name: 'Compression Load Cell',
        products: [
          'High Capacity Compression Load Cell'
        ]
      }
    ]
  }
];

// Helper function to get all product names
export const getAllProductNames = (): string[] => {
  const products: string[] = [];
  
  productCategories.forEach(category => {
    category.subtypes.forEach(subtype => {
      products.push(...subtype.products);
    });
  });
  
  return products;
};

// Helper function to get category and subtype for a product
export const getProductCategoryInfo = (productName: string): { 
  categoryId: string;
  categoryName: string;
  subtypeId: string;
  subtypeName: string;
} | null => {
  for (const category of productCategories) {
    for (const subtype of category.subtypes) {
      if (subtype.products.includes(productName)) {
        return {
          categoryId: category.id,
          categoryName: category.name,
          subtypeId: subtype.id,
          subtypeName: subtype.name
        };
      }
    }
  }
  return null;
};
