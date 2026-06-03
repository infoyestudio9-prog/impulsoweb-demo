import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen px-5 py-8 sm:px-8">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl flex-col justify-center gap-8">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#8a5f2b]">
            ImpulsoWeb MVP 0
          </p>
          <h1 className="text-4xl font-bold leading-tight text-[#171717] sm:text-6xl">
            Demo Generator
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[#4a4037]">
            Crea una landing simple y profesional para una barbería local,
            publícala en una URL compartible y úsala para validar respuestas
            comerciales.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/new"
            className="inline-flex min-h-12 items-center justify-center bg-[#171717] px-5 text-sm font-semibold text-white transition hover:bg-[#2d2d2d]"
          >
            Crear demo
          </Link>
          <Link
            href="/demo/classic-barber-studio"
            className="inline-flex min-h-12 items-center justify-center border border-[#171717]/20 px-5 text-sm font-semibold text-[#171717] transition hover:border-[#171717]/50"
          >
            Ver demo ejemplo
          </Link>
        </div>
      </section>
    </main>
  );
}
