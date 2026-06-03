export type DemoCategory = "barberia";

export type DemoPhoto = {
  src: string;
  alt: string;
};

export type TrustItem = {
  title: string;
  description: string;
};

export type Demo = {
  id: string;
  slug: string;
  businessName: string;
  category: DemoCategory;
  city: string;
  neighborhood?: string;
  address?: string;
  whatsapp: string;
  instagram?: string;
  description?: string;
  services: string[];
  photos: DemoPhoto[];
  rating?: string;
  reviewCount?: number;
  trustItems?: TrustItem[];
  createdAt: string;
};
