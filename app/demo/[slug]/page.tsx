import { BarberLanding } from "@/components/landing/barber-landing";
import { getMockDemoBySlug } from "@/lib/demos";
import { notFound } from "next/navigation";

type DemoPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function DemoPage({ params }: DemoPageProps) {
  const { slug } = await params;
  const demo = getMockDemoBySlug(slug);

  if (!demo) {
    notFound();
  }

  return <BarberLanding demo={demo} />;
}
