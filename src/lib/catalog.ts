export type ProductCategory = "doors" | "kitchens" | "dressing-rooms";

export type Product = {
  slug: string;
  sku: string;
  name: string;
  subtitle: string;
  category: ProductCategory;
  collection: string;
  finish: string;
  tagline: string;
  material: string;
  finishDetail: string;
  design: string;
  customization: string;
  image: string;
  gallery: string[];
  startingAt: number;
  currency: "USD";
  leadTime: string;
  specs: { label: string; value: string }[];
};

export const CATEGORIES: {
  id: ProductCategory;
  label: string;
  blurb: string;
  href: string;
}[] = [
  {
    id: "doors",
    label: "Doors",
    blurb: "Crafted entrances. Timeless impressions.",
    href: "/collections?category=doors",
  },
  {
    id: "kitchens",
    label: "Kitchens",
    blurb: "Designed for living. Crafted to inspire.",
    href: "/collections?category=kitchens",
  },
  {
    id: "dressing-rooms",
    label: "Dressing Rooms",
    blurb: "Designed around you.",
    href: "/collections?category=dressing-rooms",
  },
];

export const PRODUCTS: Product[] = [
  {
    slug: "cairo-oak-01",
    sku: "AB-DR-01",
    name: "Cairo Oak 01",
    subtitle: "Natural Oak Finish",
    category: "doors",
    collection: "Contemporary",
    finish: "Natural Oak",
    tagline: "The perfect balance of simplicity and warmth.",
    material: "Solid wood core with HPL veneer finish",
    finishDetail: "HPL (High-Pressure Laminate)",
    design: "Minimal recessed panel design",
    customization: "Sizes, finishes, and hardware available",
    image: "/images/products/cairo-oak-01.jpg",
    gallery: [
      "/images/products/cairo-oak-01.jpg",
      "/images/catalog-cairo-oak.jpg",
      "/images/lifestyle/heritage.jpg",
    ],
    startingAt: 1480,
    currency: "USD",
    leadTime: "8–12 weeks",
    specs: [
      { label: "Leaf thickness", value: "2 in" },
      { label: "Core", value: "Kiln-dried solid wood" },
      { label: "System", value: "Pre-hung" },
      { label: "Jambs", value: "2 in solid wood, notched" },
    ],
  },
  {
    slug: "nile-walnut-02",
    sku: "AB-DR-02",
    name: "Nile Walnut 02",
    subtitle: "Walnut Finish",
    category: "doors",
    collection: "Modern",
    finish: "Walnut",
    tagline: "Deep tones inspired by timeless materials.",
    material: "Solid wood core with HPL veneer finish",
    finishDetail: "HPL (High-Pressure Laminate)",
    design: "Linear vertical detailing",
    customization: "Sizes, finishes, and hardware available",
    image: "/images/products/nile-walnut-02.jpg",
    gallery: [
      "/images/products/nile-walnut-02.jpg",
      "/images/catalog-nile-walnut.jpg",
    ],
    startingAt: 1620,
    currency: "USD",
    leadTime: "8–12 weeks",
    specs: [
      { label: "Leaf thickness", value: "2 in" },
      { label: "Core", value: "Kiln-dried solid wood" },
      { label: "System", value: "Pre-hung" },
      { label: "Detail", value: "Vertical linear grooves" },
    ],
  },
  {
    slug: "luxor-line-03",
    sku: "AB-DR-03",
    name: "Luxor Line 03",
    subtitle: "Walnut Structured Finish",
    category: "doors",
    collection: "Contemporary",
    finish: "Walnut Structured",
    tagline: "Architectural precision with bold character.",
    material: "Hardwood core with natural walnut veneer",
    finishDetail: "Matte lacquer",
    design: "Geometric linear composition",
    customization: "Fully customizable configurations",
    image: "/images/products/luxor-line-03.jpg",
    gallery: [
      "/images/products/luxor-line-03.jpg",
      "/images/catalog-luxor-line.jpg",
    ],
    startingAt: 2140,
    currency: "USD",
    leadTime: "10–14 weeks",
    specs: [
      { label: "Leaf thickness", value: "2 in" },
      { label: "Core", value: "Hardwood" },
      { label: "Surface", value: "Natural walnut veneer" },
      { label: "Finish", value: "Matte lacquer" },
    ],
  },
  {
    slug: "giza-duo-04",
    sku: "AB-DR-04",
    name: "Giza Duo 04",
    subtitle: "Dual Tone Finish",
    category: "doors",
    collection: "Contemporary",
    finish: "Dual Tone",
    tagline: "Balanced contrast inspired by symmetry.",
    material: "Solid wood core with HPL veneer finish",
    finishDetail: "HPL (High-Pressure Laminate)",
    design: "Central panel contrast layout",
    customization: "Sizes, panel colors, and hardware",
    image: "/images/products/giza-duo-04.jpg",
    gallery: [
      "/images/products/giza-duo-04.jpg",
      "/images/catalog-giza-duo.jpg",
    ],
    startingAt: 1890,
    currency: "USD",
    leadTime: "8–12 weeks",
    specs: [
      { label: "Leaf thickness", value: "2 in" },
      { label: "Core", value: "Kiln-dried solid wood" },
      { label: "Layout", value: "Contrasting center panels" },
      { label: "System", value: "Pre-hung" },
    ],
  },
  {
    slug: "aswan-grain-05",
    sku: "AB-DR-05",
    name: "Aswan Grain 05",
    subtitle: "Light Wood Finish",
    category: "doors",
    collection: "Contemporary",
    finish: "Light Wood",
    tagline: "Warm minimalism inspired by natural textures.",
    material: "Solid wood core with HPL veneer finish",
    finishDetail: "HPL (High-Pressure Laminate)",
    design: "Natural horizontal grain with seamless panel look",
    customization: "Sizes, wood tones, and hardware options",
    image: "/images/products/aswan-grain-05.jpg",
    gallery: [
      "/images/products/aswan-grain-05.jpg",
      "/images/catalog-aswan-grain.jpg",
    ],
    startingAt: 1480,
    currency: "USD",
    leadTime: "8–12 weeks",
    specs: [
      { label: "Leaf thickness", value: "2 in" },
      { label: "Core", value: "Kiln-dried solid wood" },
      { label: "Grain", value: "Horizontal seamless" },
      { label: "System", value: "Pre-hung" },
    ],
  },
  {
    slug: "delta-gray-06",
    sku: "AB-DR-06",
    name: "Delta Gray 06",
    subtitle: "Urban Gray Finish",
    category: "doors",
    collection: "Modern",
    finish: "Urban Gray",
    tagline: "Modern edge with refined detailing.",
    material: "Solid wood core with HPL veneer finish",
    finishDetail: "HPL (High-Pressure Laminate)",
    design: "Horizontal metal inlay detailing",
    customization: "Multiple finishes and options available",
    image: "/images/products/delta-gray-06.jpg",
    gallery: [
      "/images/products/delta-gray-06.jpg",
      "/images/catalog-delta-gray.jpg",
    ],
    startingAt: 1760,
    currency: "USD",
    leadTime: "8–12 weeks",
    specs: [
      { label: "Leaf thickness", value: "2 in" },
      { label: "Core", value: "Kiln-dried solid wood" },
      { label: "Inlay", value: "Brushed metal, horizontal" },
      { label: "System", value: "Pre-hung" },
    ],
  },
  {
    slug: "kitchen-01-mahogany",
    sku: "AB-KT-01",
    name: "Kitchen 01",
    subtitle: "Classic Mahogany Collection",
    category: "kitchens",
    collection: "Classic",
    finish: "Mahogany",
    tagline: "A perfect blend of warmth, functionality, and refined craftsmanship.",
    material: "Natural mahogany veneer",
    finishDetail: "Refined cabinet lacquer over mahogany",
    design: "Efficient L-shape with integrated appliances",
    customization: "Layouts, stone, hardware, and lighting",
    image: "/images/products/kitchen-mahogany.jpg",
    gallery: [
      "/images/products/kitchen-mahogany.jpg",
      "/images/catalog-kitchen-01.jpg",
    ],
    startingAt: 32000,
    currency: "USD",
    leadTime: "12–18 weeks",
    specs: [
      { label: "Layout", value: "L-shape, high storage" },
      { label: "Palette", value: "Mahogany + granite" },
      { label: "Hardware", value: "Soft-close, stainless" },
      { label: "Finish", value: "Moisture-resistant veneer" },
    ],
  },
  {
    slug: "kitchen-02-natural",
    sku: "AB-KT-02",
    name: "Kitchen 02",
    subtitle: "Natural Elegance Collection",
    category: "kitchens",
    collection: "Natural Elegance",
    finish: "Natural Oak",
    tagline: "Warmth, function, and a quiet material palette.",
    material: "Natural wood grain cabinetry with stone surfaces",
    finishDetail: "Durable, moisture-resistant wood finish",
    design: "L-shape with island and undercabinet lighting",
    customization: "Stone, hardware, and storage configurations",
    image: "/images/products/kitchen-natural.jpg",
    gallery: [
      "/images/products/kitchen-natural.jpg",
      "/images/catalog-kitchen-02.jpg",
    ],
    startingAt: 28500,
    currency: "USD",
    leadTime: "12–18 weeks",
    specs: [
      { label: "Layout", value: "L-shape + island" },
      { label: "Palette", value: "Oak + amber stone" },
      { label: "Lighting", value: "Undercabinet LED" },
      { label: "Storage", value: "Soft-close, carousel" },
    ],
  },
  {
    slug: "dressing-rooms-atelier",
    sku: "AB-DRW-01",
    name: "Dressing Rooms",
    subtitle: "Designed Around You",
    category: "dressing-rooms",
    collection: "Atelier",
    finish: "Oak & Cream",
    tagline: "Function, elegance, and quiet light — made to last.",
    material: "High-quality boards, soft-close hardware, durable finishes",
    finishDetail: "Oak, cream lacquer, optional smoked glass",
    design: "Tailored layouts with vertical LED reveals",
    customization: "Fully custom to room, wardrobe, and lighting",
    image: "/images/products/dressing-room.jpg",
    gallery: [
      "/images/products/dressing-room.jpg",
      "/images/catalog-dressing.jpg",
    ],
    startingAt: 14800,
    currency: "USD",
    leadTime: "10–16 weeks",
    specs: [
      { label: "Lighting", value: "Concealed vertical LED" },
      { label: "Storage", value: "Drawers, hanging, islands" },
      { label: "Glass", value: "High-definition optional" },
      { label: "Hardware", value: "Soft-close, premium" },
    ],
  },
];

export const PERFORMANCE = {
  construction: [
    "Pre-hung door system for precise installation and alignment",
    "2-inch thick door leaf for structure and acoustic performance",
    "Kiln-dried solid wood for stability and resistance to warping",
    "2-inch solid wood jambs with precision notched construction",
    "Engraved rubber gasket for dust and air insulation",
    "Solid wood factory-finished trims",
  ],
  sealing: [
    "Concealed gasket technology integrated inside grooves",
    "Long-term durability with no risk of detachment",
    "Air-tight sealing against dust infiltration",
    "Soft, controlled door closing",
    "Enhanced acoustic insulation for privacy",
  ],
  finishes: [
    {
      name: "HPL",
      detail:
        "High resistance to scratches, moisture, and daily wear. Excellent color stability. Ideal for modern, high-traffic environments.",
    },
    {
      name: "Natural Wood Veneer",
      detail:
        "Authentic wood surface with rich natural grain. Warm, sophisticated aesthetic. Fully customizable with stains and finishing options.",
    },
  ],
  cores: [
    "Solid core",
    "Solid core with honeycomb structure for lighter weight",
    "Solid core with high-density foam for lighter weight and sound insulation",
  ],
  hardware: [
    "Heavy-duty, thick gauge stainless steel hinges",
    "Designed for smooth operation and long-term corrosion resistance",
  ],
};

export function formatPrice(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function productsByCategory(category?: string) {
  if (!category || category === "all") return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === category);
}

export const SITE = {
  name: "ABWAB & More",
  tagline: "Crafted with integrity. Designed to last.",
  blurb: "Doors · Kitchens · Dressing Rooms & More",
  email: "atelier@abwabandmore.com",
  cities: ["Chicago", "Cairo"],
  philosophy:
    "Craftsmanship is not just a process — it is a legacy. Rooted in Egyptian heritage and built on decades of combined experience, our work reflects a deep commitment to precision, material integrity, and timeless design.",
};
