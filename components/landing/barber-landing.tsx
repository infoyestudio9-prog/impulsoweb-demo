import {
  defaultBarberGalleryPhotos,
  defaultBarberHeroPhoto,
  defaultBarberTrustItems,
} from "@/lib/defaults";
import type { Demo, DemoPhoto, TrustItem } from "@/types/demo";
import { FinalCTA } from "./final-cta";
import { Footer } from "./footer";
import { GallerySection } from "./gallery-section";
import { HeroSection } from "./hero-section";
import { LocationSection } from "./location-section";
import { ServicesSection } from "./services-section";
import { TeamSection } from "./team-section";
import { TrustSection } from "./trust-section";
import { WhatsAppButton } from "./whatsapp-button";

type BarberLandingProps = {
  demo: Demo;
};

type CompleteDemo = Demo & {
  heroPhoto: DemoPhoto;
  galleryPhotos: DemoPhoto[];
  trustItems: TrustItem[];
};

function uniquePhotos(photos: DemoPhoto[]) {
  const seen = new Set<string>();

  return photos.filter((photo) => {
    if (seen.has(photo.src)) {
      return false;
    }

    seen.add(photo.src);
    return true;
  });
}

export function BarberLanding({ demo }: BarberLandingProps) {
  const legacyPhotos = demo.photos ?? [];
  const heroPhoto = demo.heroPhoto ?? legacyPhotos[0] ?? defaultBarberHeroPhoto;
  const gallerySource =
    demo.galleryPhotos && demo.galleryPhotos.length > 0
      ? demo.galleryPhotos
      : legacyPhotos.slice(1);
  const galleryPhotos = uniquePhotos(
    (gallerySource.length > 0 ? gallerySource : defaultBarberGalleryPhotos).filter(
      (photo) => photo.src !== heroPhoto.src,
    ),
  );
  const safeGalleryPhotos =
    galleryPhotos.length > 0 ? galleryPhotos : defaultBarberGalleryPhotos;

  const completeDemo: CompleteDemo = {
    ...demo,
    heroPhoto,
    galleryPhotos: safeGalleryPhotos,
    trustItems:
      demo.trustItems && demo.trustItems.length > 0
        ? demo.trustItems
        : defaultBarberTrustItems,
  };

  return (
    <>
      <HeroSection demo={completeDemo} heroPhoto={completeDemo.heroPhoto} />
      <ServicesSection services={completeDemo.services} />
      <GallerySection
        businessName={completeDemo.businessName}
        photos={completeDemo.galleryPhotos}
      />
      <TrustSection trustItems={completeDemo.trustItems} />
      {completeDemo.teamPhoto ? (
        <TeamSection demo={completeDemo} teamPhoto={completeDemo.teamPhoto} />
      ) : null}
      <LocationSection demo={completeDemo} />
      <FinalCTA demo={completeDemo} />
      <Footer demo={completeDemo} />

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-black/10 bg-white/94 p-3 shadow-[0_-12px_30px_rgba(23,23,23,0.12)] backdrop-blur md:hidden">
        <WhatsAppButton
          phone={completeDemo.whatsapp}
          businessName={completeDemo.businessName}
          label="Reservar horario"
          className="w-full"
        />
      </div>
    </>
  );
}
