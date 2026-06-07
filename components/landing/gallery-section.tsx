import type { DemoPhoto } from "@/types/demo";

type GallerySectionProps = {
  businessName: string;
  photos: DemoPhoto[];
};

export function GallerySection({ businessName, photos }: GallerySectionProps) {
  return (
    <section className="bg-white px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-[#8a5f2b]">
              Trabajos y estilo
            </p>
            <h2 className="text-3xl font-black text-[#171717] sm:text-5xl">
              Resultados que se ven al salir.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[#5b5148] lg:ml-auto">
            Cortes, barbas y detalles que muestran el trabajo diario de{" "}
            {businessName} con resultados reales a la vista.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {photos.slice(0, 5).map((photo, index) => (
            <figure
              key={photo.src}
              className={`flex items-center justify-center overflow-hidden border border-[#171717]/10 bg-[#171717] p-1 shadow-[0_10px_34px_rgba(23,23,23,0.08)] ${
                index === 0 ? "sm:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className={`h-full w-full object-contain ${
                  index === 0
                    ? "min-h-[360px] max-h-[520px] sm:min-h-[460px] lg:min-h-[532px]"
                    : "min-h-[260px] max-h-[320px]"
                }`}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
