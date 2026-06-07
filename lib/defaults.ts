import type { DemoPhoto, TrustItem } from "@/types/demo";

export const defaultBarberServices = [
  "Corte masculino",
  "Arreglo de barba",
  "Corte + barba",
  "Afeitado tradicional",
  "Perfilado",
];

export const defaultBarberHeroPhoto: DemoPhoto = {
  src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1400&q=85",
  alt: "Cliente con corte moderno terminado",
};

export const defaultBarberGalleryPhotos: DemoPhoto[] = [
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=85",
    alt: "Resultado final de corte masculino en barbería",
  },
  {
    src: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1200&q=85",
    alt: "Detalle de arreglo de barba",
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85",
    alt: "Herramientas profesionales de barbería",
  },
  {
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=85",
    alt: "Ambiente profesional de barbería",
  },
];

export const defaultBarberPhotos: DemoPhoto[] = [
  defaultBarberHeroPhoto,
  ...defaultBarberGalleryPhotos,
];

export const defaultBarberTrustItems: TrustItem[] = [
  {
    title: "Reservá por WhatsApp",
    description:
      "Escribí directo para consultar disponibilidad y coordinar tu horario.",
  },
  {
    title: "Cortes con detalle",
    description:
      "Cortes clásicos y modernos con terminaciones prolijas en barba y cabello.",
  },
  {
    title: "En Pocitos",
    description:
      "Ubicada en Cnel. Alegre 1252, con acceso cómodo dentro del barrio.",
  },
];
