
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  longDescription: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Scale Calibration",
    description: "Professional calibration services to ensure your weighing scales maintain peak accuracy.",
    icon: "service",
    benefits: [
      "NIST-traceable calibration certificates",
      "On-site service available",
      "Regularly scheduled maintenance plans",
      "Comprehensive accuracy verification"
    ],
    longDescription: "Our professional calibration service ensures your weighing equipment performs at its optimal level. Using NIST-traceable standards, our certified technicians perform comprehensive calibration procedures to verify and adjust your scales to meet manufacturer specifications. We can provide same-day service for many scale types, and our calibration certificates meet ISO and regulatory requirements. Regular calibration not only ensures accuracy but also extends the lifespan of your scales and helps maintain compliance with industry regulations."
  },
  {
    id: 2,
    title: "Repair & Maintenance",
    description: "Expert repair services for all types of scales with fast turnaround times.",
    icon: "service",
    benefits: [
      "Factory-trained technicians",
      "Genuine replacement parts",
      "90-day repair warranty",
      "Preventative maintenance programs"
    ],
    longDescription: "Our repair and maintenance service keeps your weighing equipment operational and reliable. Our factory-trained technicians can diagnose and repair virtually any scale issue, from simple mechanical problems to complex electronic failures. We maintain an extensive inventory of genuine parts for rapid repairs. Our preventative maintenance programs help identify potential issues before they cause downtime. All repairs come with a 90-day warranty, and we offer emergency service for critical equipment failures. Regular maintenance not only prevents costly breakdowns but also ensures continuous accuracy and performance."
  },
  {
    id: 3,
    title: "Custom Integration",
    description: "Seamless integration of weighing systems with your existing software and hardware.",
    icon: "service",
    benefits: [
      "Custom software development",
      "ERP/CRM/WMS integration",
      "Data collection and analysis",
      "Automated reporting systems"
    ],
    longDescription: "Our integration services connect your weighing systems with your business software for seamless data flow and process automation. Whether you need scales integrated with inventory management, ERP systems, or custom software, our team of software engineers and scale technicians can develop tailored solutions. We specialize in data capture, automated reporting, and system integration that eliminates manual data entry and reduces errors. Our solutions can include barcode scanning, RFID technology, cloud connectivity, and mobile access to weighing data. Each integration project begins with a thorough assessment of your requirements and existing systems."
  },
  {
    id: 4,
    title: "Scale Rental",
    description: "Short and long-term rental options for various weighing equipment needs.",
    icon: "service",
    benefits: [
      "Flexible rental periods",
      "Wide range of equipment available",
      "Calibrated and ready to use",
      "Delivery and setup included"
    ],
    longDescription: "Our scale rental service provides flexible access to high-quality weighing equipment without capital investment. Whether you need scales for a special event, seasonal production increase, or to try before you buy, we offer daily, weekly, and monthly rental options. All rental equipment is professionally maintained, calibrated, and delivered ready to use. We provide delivery, setup, and training as part of our service. Our rental inventory includes precision laboratory balances, floor scales, counting scales, crane scales, and specialized weighing equipment for virtually any application."
  },
  {
    id: 5,
    title: "Consultation & Training",
    description: "Expert advice on scale selection and comprehensive training programs.",
    icon: "service",
    benefits: [
      "Needs assessment and recommendations",
      "Operator training programs",
      "Regulatory compliance guidance",
      "Process optimization"
    ],
    longDescription: "Our consultation services help you select the right weighing equipment for your specific needs and ensure your team knows how to operate it correctly. Our weighing experts can assess your requirements, recommend appropriate solutions, and help you navigate regulatory requirements. We offer comprehensive training programs for your staff, covering proper operation, basic maintenance, troubleshooting, and best practices. With decades of industry experience, our consultants can also help optimize your weighing processes for efficiency and accuracy. Whether you're setting up a new facility or upgrading existing equipment, our guidance ensures you make informed decisions."
  }
];

export default services;
