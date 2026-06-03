import type { Demo } from "@/types/demo";

type FooterProps = {
  demo: Demo;
};

export function Footer({ demo }: FooterProps) {
  return (
    <footer className="bg-[#0f0f0f] px-5 py-8 text-white sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm text-white/58 sm:flex-row sm:items-center sm:justify-between">
        <p>
          {demo.businessName} · Barbería en {demo.city}
        </p>
        <p>Demo creada por ImpulsoWeb</p>
      </div>
    </footer>
  );
}
