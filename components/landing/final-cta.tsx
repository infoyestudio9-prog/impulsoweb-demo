import type { Demo } from "@/types/demo";
import { WhatsAppButton } from "./whatsapp-button";

type FinalCTAProps = {
  demo: Demo;
};

export function FinalCTA({ demo }: FinalCTAProps) {
  return (
    <section className="bg-[#171717] px-5 py-16 text-white sm:px-8">
      <div className="mx-auto flex max-w-4xl flex-col items-start gap-6 text-left sm:items-center sm:text-center">
        <p className="text-sm font-bold uppercase tracking-wide text-[#d6ad62]">
          Reservas
        </p>
        <h2 className="text-4xl font-black leading-tight sm:text-6xl">
          Reservá tu próximo corte.
        </h2>
        <p className="max-w-2xl text-lg leading-8 text-white/72">
          Consultá disponibilidad y coordiná tu horario directo por WhatsApp.
        </p>
        <WhatsAppButton
          phone={demo.whatsapp}
          businessName={demo.businessName}
          label="Escribir por WhatsApp"
        />
      </div>
    </section>
  );
}
