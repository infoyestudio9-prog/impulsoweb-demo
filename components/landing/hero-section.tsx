import type { Demo, DemoPhoto } from "@/types/demo";
import { WhatsAppButton } from "./whatsapp-button";

type HeroSectionProps = {
  demo: Demo;
  heroPhoto: DemoPhoto;
};

export function HeroSection({ demo, heroPhoto }: HeroSectionProps) {
  const location = [demo.neighborhood, demo.city].filter(Boolean).join(", ");
  const highlights = [
    "Cortes clásicos y modernos",
    "Barba y afeitado tradicional",
    `Ubicación cómoda en ${demo.neighborhood ?? demo.city}`,
  ];

  return (
    <section className="bg-[#171717] text-white">
      <div className="mx-auto grid min-h-[92vh] max-w-7xl grid-cols-1 items-center gap-10 px-5 py-8 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:py-10">
        <div className="relative z-10 flex flex-col justify-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-wide text-[#d6ad62]">
            Barbería en {location}
          </p>
          <h1 className="max-w-xl text-4xl font-black leading-none sm:text-5xl lg:text-5xl">
            {demo.businessName}
          </h1>
          <p className="mt-4 max-w-lg text-base font-bold leading-7 text-[#d6ad62] sm:text-lg">
            Tradición, detalle y estilo en cada corte.
          </p>
          <p className="mt-4 max-w-lg text-lg leading-8 text-white/78 sm:text-xl">
            Cortes modernos, barba y afeitado tradicional en{" "}
            {demo.neighborhood ?? demo.city}.
          </p>

          <div className="mt-8">
            <WhatsAppButton
              phone={demo.whatsapp}
              businessName={demo.businessName}
              label="Reservar horario"
              className="sm:min-w-52"
            />
          </div>

          <div className="mt-8">
            <p className="mb-3 text-sm font-bold text-[#d6ad62]">
              Por qué elegir {demo.businessName}
            </p>
            <div className="grid gap-2 text-sm text-white/78 sm:grid-cols-3">
              {highlights.map((highlight) => (
                <span key={highlight} className="border border-white/14 px-3 py-2">
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/72">
            {demo.rating ? (
              <span className="border border-white/14 px-3 py-2">
                {demo.rating} rating público
              </span>
            ) : null}
            {demo.reviewCount ? (
              <span className="border border-white/14 px-3 py-2">
                {demo.reviewCount} reseñas
              </span>
            ) : null}
            <span className="border border-white/14 px-3 py-2">
              WhatsApp directo
            </span>
          </div>
        </div>

        <div className="relative min-h-[380px] overflow-hidden border border-white/10 bg-[#2a2520] sm:min-h-[520px]">
          <img
            src={heroPhoto.src}
            alt={heroPhoto.alt}
            className="h-full min-h-[380px] w-full object-cover sm:min-h-[520px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/8 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 border border-white/14 bg-black/50 p-4 backdrop-blur">
            <p className="text-sm font-bold text-[#d6ad62]">
              {demo.neighborhood ?? demo.city}
            </p>
            <p className="mt-1 text-sm leading-6 text-white/82">
              Reservá tu horario y salí con un look prolijo, moderno y cuidado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
