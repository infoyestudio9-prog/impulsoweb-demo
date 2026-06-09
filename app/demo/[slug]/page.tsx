import { BarberLanding } from "@/components/landing/barber-landing";
import { getMockDemoBySlug } from "@/lib/demos";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type DemoPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}

function toAbsoluteUrl(path: string) {
  return new URL(path, getSiteUrl()).toString();
}

export async function generateMetadata({
  params,
}: DemoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const demo = getMockDemoBySlug(slug);

  if (!demo) {
    return {
      title: "Demo no encontrada",
    };
  }

  const title = demo.businessName;
  const description =
    demo.description ??
    `Conocé ${demo.businessName}, barbería en ${demo.neighborhood ?? demo.city}.`;
  const url = toAbsoluteUrl(`/demo/${demo.slug}`);
  const imageUrl = toAbsoluteUrl(demo.heroPhoto?.src ?? `/demos/${demo.slug}/hero.jpg`);

  return {
    metadataBase: new URL(getSiteUrl()),
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "es_UY",
      url,
      title,
      description,
      siteName: demo.businessName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `Imagen principal de ${demo.businessName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function DemoPage({ params }: DemoPageProps) {
  const { slug } = await params;
  const demo = getMockDemoBySlug(slug);

  if (!demo) {
    notFound();
  }

  return <BarberLanding demo={demo} />;
}
