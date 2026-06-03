import type { Demo } from "@/types/demo";
import { WhatsAppButton } from "./whatsapp-button";

type LocationSectionProps = {
  demo: Demo;
};

export function LocationSection({ demo }: LocationSectionProps) {
  return (
    <section className="bg-[#f8f7f4] px-5 py-16 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-[#8a5f2b]">
            Ubicación
          </p>
          <h2 className="text-3xl font-black text-[#171717] sm:text-5xl">
            Visitá {demo.businessName} en {demo.neighborhood}.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#5b5148]">
            Encontranos en {demo.address}. Escribí por WhatsApp para confirmar
            disponibilidad antes de pasar.
          </p>
        </div>

        <div className="border border-[#171717]/10 bg-white p-6 shadow-[0_10px_34px_rgba(23,23,23,0.05)]">
          <dl className="grid gap-5">
            <div>
              <dt className="text-xs font-bold uppercase tracking-wide text-[#8a5f2b]">
                Dirección
              </dt>
              <dd className="mt-2 text-lg font-bold text-[#171717]">
                {demo.address}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-wide text-[#8a5f2b]">
                Zona
              </dt>
              <dd className="mt-2 text-lg font-bold text-[#171717]">
                {demo.neighborhood}, {demo.city}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-wide text-[#8a5f2b]">
                Instagram
              </dt>
              <dd className="mt-2 text-lg font-bold text-[#171717]">
                {demo.instagram}
              </dd>
            </div>
          </dl>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton
              phone={demo.whatsapp}
              businessName={demo.businessName}
              label="Consultar disponibilidad"
            />
            {demo.instagram ? (
              <a
                href={`https://www.instagram.com/${demo.instagram.replace("@", "")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center border border-[#171717]/15 px-5 text-sm font-bold text-[#171717] transition hover:border-[#171717]/35"
              >
                Ver trabajos
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
