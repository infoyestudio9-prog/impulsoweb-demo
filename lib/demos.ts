import { defaultBarberTrustItems } from "@/lib/defaults";
import type { Demo } from "@/types/demo";
import { existsSync } from "fs";
import { join } from "path";

function createLocalDemoPhotos(
  slug: string,
  businessName: string,
  maxGalleryCount = 5,
) {
  const teamFileName = "team.jpg";
  const teamPhoto = existsSync(
    join(process.cwd(), "public", "demos", slug, teamFileName),
  )
    ? {
        src: `/demos/${slug}/${teamFileName}`,
        alt: `Equipo de ${businessName}`,
      }
    : undefined;
  const galleryPhotos = Array.from(
    { length: maxGalleryCount },
    (_, index) => {
      const photoNumber = index + 1;
      const fileName = `gallery-${photoNumber}.jpg`;

      return {
        fileName,
        photo: {
          src: `/demos/${slug}/${fileName}`,
          alt: `Galería ${photoNumber} de ${businessName}`,
        },
      };
    },
  )
    .filter(({ fileName }) =>
      existsSync(join(process.cwd(), "public", "demos", slug, fileName)),
    )
    .map(({ photo }) => photo);

  return {
    heroPhoto: {
      src: `/demos/${slug}/hero.jpg`,
      alt: `Resultado final de corte en ${businessName}`,
    },
    galleryPhotos,
    teamPhoto,
  };
}

function createTrustItems({
  neighborhood,
  address,
  reservationText = "Escribí directo para consultar disponibilidad y coordinar tu horario.",
}: {
  neighborhood: string;
  address: string;
  reservationText?: string;
}) {
  return [
    {
      title: "Reservá por WhatsApp",
      description: reservationText,
    },
    {
      title: "Cortes con detalle",
      description:
        "Cortes clásicos y modernos con terminaciones prolijas en barba y cabello.",
    },
    {
      title: `En ${neighborhood}`,
      description: `Ubicada en ${address}, con acceso cómodo dentro del barrio.`,
    },
  ];
}

export const classicBarberStudioDemo: Demo = {
  id: "demo-classic-barber-studio",
  slug: "classic-barber-studio",
  businessName: "Classic Barber Studio",
  category: "barberia",
  city: "Montevideo",
  neighborhood: "Pocitos",
  address: "Cnel. Alegre 1252, 11300 Montevideo",
  whatsapp: "+598 99 752 271",
  instagram: "@classic.studio.uy",
  description:
    "Classic Barber Studio es una barbería en Pocitos especializada en cortes masculinos, arreglo de barba y afeitado tradicional, con atención profesional y un estilo clásico y cuidado.",
  services: [
    "Corte masculino",
    "Arreglo de barba",
    "Corte + barba",
    "Afeitado tradicional",
    "Perfilado",
  ],
  ...createLocalDemoPhotos("classic-barber-studio", "Classic Barber Studio"),
  rating: "5.0",
  reviewCount: 5,
  trustItems: defaultBarberTrustItems,
  createdAt: "2026-06-03T00:00:00.000Z",
};

export const barberiaMmDemo: Demo = {
  id: "demo-barberia-m-m",
  slug: "barberia-m-m",
  businessName: "Barbería M&M",
  category: "barberia",
  city: "Montevideo",
  neighborhood: "Bella Vista",
  address: "Av. Agraciada 3056, Montevideo",
  whatsapp: "+598 95 936 602",
  instagram: "@mym_barberia_",
  description:
    "Barbería M&M es una barbería en Bella Vista con servicios de corte, color, tratamientos y recortes de barba.",
  services: [
    "Corte masculino",
    "Arreglo de barba",
    "Color",
    "Tratamientos",
    "Productos barbería",
  ],
  ...createLocalDemoPhotos("barberia-m-m", "Barbería M&M"),
  trustItems: createTrustItems({
    neighborhood: "Bella Vista",
    address: "Av. Agraciada 3056",
    reservationText:
      "Escribí por WhatsApp para consultar horarios de atención y coordinar tu visita.",
  }),
  createdAt: "2026-06-03T00:00:00.000Z",
};

export const grimaldiStudioDemo: Demo = {
  id: "demo-grimaldi-studio",
  slug: "grimaldi-studio",
  businessName: "Grimaldi Studio",
  category: "barberia",
  city: "Montevideo",
  neighborhood: "Paso de la Arena",
  address: "Av. Luis Batlle Berres 6594, Montevideo",
  whatsapp: "+598 92 482 814",
  instagram: "@grimaldistudio",
  description:
    "Grimaldi Studio es una barbería en Paso de la Arena con cortes fade, recortes de barba, color y atención por agenda u orden de llegada.",
  services: [
    "Corte masculino",
    "Corte fade",
    "Arreglo de barba",
    "Color",
    "Cursos barberos",
  ],
  ...createLocalDemoPhotos("grimaldi-studio", "Grimaldi Studio"),
  trustItems: createTrustItems({
    neighborhood: "Paso de la Arena",
    address: "Av. Luis Batlle Berres 6594",
    reservationText:
      "Consultá por WhatsApp si preferís agendar o pasar por orden de llegada.",
  }),
  createdAt: "2026-06-03T00:00:00.000Z",
};

export const progressHairStudioDemo: Demo = {
  id: "demo-progress-hair-studio",
  slug: "progress-hair-studio",
  businessName: "Progress Hair Studio",
  category: "barberia",
  city: "Montevideo",
  neighborhood: "Paso Molino",
  address: "San Quintín 4280, Montevideo",
  whatsapp: "+598 96 303 037",
  instagram: "@progresshairstudio",
  description:
    "Progress Hair Studio es una barbería en Paso Molino con cortes, color, productos de barbería y recortes de barba.",
  services: [
    "Corte masculino",
    "Arreglo de barba",
    "Color",
    "Productos barbería",
    "Insumos barbería",
  ],
  ...createLocalDemoPhotos("progress-hair-studio", "Progress Hair Studio"),
  trustItems: createTrustItems({
    neighborhood: "Paso Molino",
    address: "San Quintín 4280",
  }),
  createdAt: "2026-06-03T00:00:00.000Z",
};

const demosBySlug = new Map<string, Demo>([
  [classicBarberStudioDemo.slug, classicBarberStudioDemo],
  [barberiaMmDemo.slug, barberiaMmDemo],
  [grimaldiStudioDemo.slug, grimaldiStudioDemo],
  [progressHairStudioDemo.slug, progressHairStudioDemo],
]);

export function getMockDemoBySlug(slug: string) {
  return demosBySlug.get(slug) ?? null;
}
