export type Service = {
  title: string;
  description: string;
  price: string;
  details: string[];
};

export const services: Service[] = [
  {
    title: "Business Websites",
    description:
      "Responsive websites for businesses, professionals, restaurants, cafes, real estate companies, organizations, and service providers.",
    price: "₱8,000",
    details: [
      "Business information and service presentation",
      "Gallery and menu or catalog sections",
      "Maps and social links",
      "Inquiry forms and SEO fundamentals",
    ],
  },
  {
    title: "Dynamic Websites",
    description:
      "Websites that require server-side functionality, data handling, accounts, content management, integrations, or custom workflows.",
    price: "₱15,000",
    details: [
      "Database-backed content and forms",
      "Authentication and user flows",
      "Booking, reservation, and dashboard logic",
      "API and third-party integrations",
    ],
  },
  {
    title: "Custom Web Systems",
    description:
      "Custom browser-based software designed around specific business operations and internal workflows.",
    price: "₱25,000",
    details: [
      "Inventory, attendance, and QR workflows",
      "Employee and management dashboards",
      "CRM-style tools and monitoring systems",
      "Internal business tools and process automation",
    ],
  },
];
