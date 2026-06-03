import Link from "next/link";

export default function DemoNotFound() {
  return (
    <main className="min-h-screen px-5 py-8 sm:px-8">
      <section className="mx-auto max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#8a5f2b]">
          Demo no encontrada
        </p>
        <h1 className="text-3xl font-bold text-[#171717] sm:text-4xl">
          No encontramos esta demo
        </h1>
        <Link
          href="/"
          className="mt-6 inline-flex min-h-12 items-center justify-center bg-[#171717] px-5 text-sm font-semibold text-white transition hover:bg-[#2d2d2d]"
        >
          Volver al inicio
        </Link>
      </section>
    </main>
  );
}
