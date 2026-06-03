import { defaultBarberServices } from "@/lib/defaults";

type ServicesSectionProps = {
  services: string[];
};

const serviceDescriptions: Record<string, string> = {
  "Corte masculino": "Cortes clásicos y modernos adaptados a tu estilo.",
  "Arreglo de barba": "Perfilado, rebaje y terminación cuidada.",
  "Corte + barba": "Una experiencia completa para renovar tu look.",
  "Afeitado tradicional": "Técnica clásica, precisión y una terminación prolija.",
  "Corte fade": "Degradados limpios con terminación cuidada.",
  Color: "Opciones de color para renovar el estilo con asesoramiento.",
  Perfilado: "Detalles limpios para mantener el estilo por más tiempo.",
  Tratamientos: "Cuidado capilar para mantener el pelo sano y prolijo.",
  "Cursos barberos": "Formación para quienes quieren aprender técnica barbería.",
  "Productos barbería": "Productos seleccionados para el cuidado diario.",
  "Insumos barbería": "Insumos y productos vinculados al trabajo de barbería.",
};

export function ServicesSection({ services }: ServicesSectionProps) {
  const visibleServices = services.length > 0 ? services : defaultBarberServices;

  return (
    <section id="servicios" className="bg-[#f8f7f4] px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-[#8a5f2b]">
            Servicios
          </p>
          <h2 className="text-3xl font-black text-[#171717] sm:text-5xl">
            Todo lo necesario para salir impecable.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {visibleServices.map((service) => (
            <article
              key={service}
              className="border border-[#171717]/10 bg-white p-5 shadow-[0_10px_34px_rgba(23,23,23,0.05)]"
            >
              <h3 className="text-lg font-black text-[#171717]">{service}</h3>
              <p className="mt-3 text-sm leading-6 text-[#5b5148]">
                {serviceDescriptions[service] ??
                  "Terminación prolija y lista para el día a día."}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
