import { defaultBarberPhotos, defaultBarberTrustItems } from "@/lib/defaults";
import type { Demo } from "@/types/demo";
import { FinalCTA } from "./final-cta";
import { Footer } from "./footer";
import { GallerySection } from "./gallery-section";
import { HeroSection } from "./hero-section";
import { LocationSection } from "./location-section";
import { ServicesSection } from "./services-section";
import { TrustSection } from "./trust-section";
import { WhatsAppButton } from "./whatsapp-button";

type BarberLandingProps = {
  demo: Demo;
};

export function BarberLanding({ demo }: BarberLandingProps) {
  const completeDemo: Demo = {
    ...demo,
    photos: demo.photos.length > 0 ? demo.photos : defaultBarberPhotos,
    trustItems:
      demo.trustItems && demo.trustItems.length > 0
        ? demo.trustItems
        : defaultBarberTrustItems,
  };

  return (
    <>
      <HeroSection demo={completeDemo} />
      <ServicesSection services={completeDemo.services} />
      <GallerySection
        businessName={completeDemo.businessName}
        photos={completeDemo.photos}
      />
      <TrustSection trustItems={completeDemo.trustItems ?? []} />
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
