import type { Demo, DemoPhoto } from "@/types/demo";
import { WhatsAppButton } from "./whatsapp-button";

type TeamSectionProps = {
  demo: Demo;
  teamPhoto: DemoPhoto;
};

export function TeamSection({ demo, teamPhoto }: TeamSectionProps) {
  return (
    <section className="bg-white px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-left sm:text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-[#8a5f2b]">
            Nuestro equipo
          </p>
          <h2 className="text-3xl font-black text-[#171717] sm:text-5xl">
            Conocé al equipo detrás de {demo.businessName}.
          </h2>
          <p className="mt-5 text-base leading-7 text-[#5b5148] sm:text-lg">
            Tres profesionales apasionados por el detalle, el estilo y la
            experiencia de cada cliente.
          </p>
        </div>

        <figure className="mx-auto mt-10 max-w-5xl overflow-hidden border border-[#171717]/10 bg-[#171717] p-1 shadow-[0_10px_34px_rgba(23,23,23,0.08)]">
          <img
            src={teamPhoto.src}
            alt={teamPhoto.alt}
            className="h-auto max-h-[620px] w-full object-contain"
          />
        </figure>

        <div className="mx-auto mt-8 flex max-w-3xl flex-col items-start gap-6 sm:items-center sm:text-center">
          <p className="text-base leading-7 text-[#5b5148] sm:text-lg">
            En {demo.businessName} creemos que un buen corte va más allá de la
            técnica. Buscamos que cada persona se sienta cómoda, bien atendida y
            salga con una imagen que la represente.
          </p>
          <WhatsAppButton
            phone={demo.whatsapp}
            businessName={demo.businessName}
            label="Reservar horario"
          />
        </div>
      </div>
    </section>
  );
}
