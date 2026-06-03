import type { TrustItem } from "@/types/demo";

type TrustSectionProps = {
  trustItems: TrustItem[];
};

export function TrustSection({ trustItems }: TrustSectionProps) {
  return (
    <section className="bg-[#222826] px-5 py-16 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-[#d6ad62]">
            Confianza
          </p>
          <h2 className="text-3xl font-black sm:text-5xl">
            Datos claros antes de reservar.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {trustItems.map((item) => (
            <article key={item.title} className="border border-white/12 p-6">
              <h3 className="text-xl font-black">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/72">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
