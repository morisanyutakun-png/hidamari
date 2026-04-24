import { Breadcrumbs } from "@/components/Breadcrumbs";

type PageHeroProps = {
  title: string;
  description: string;
  breadcrumbs?: { label: string; href?: string }[];
};

export function PageHero({ title, description, breadcrumbs }: PageHeroProps) {
  return (
    <section className="bg-[linear-gradient(135deg,#fff8df_0%,#ffffff_48%,#edf7e7_100%)] px-5 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
        <div className="mt-8 max-w-4xl">
          <p className="mb-3 text-sm font-bold tracking-[0.08em] text-[var(--color-brown)]">
            ひだまりのヨガ
          </p>
          <h1 className="text-4xl font-bold leading-tight text-stone-950 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-9 text-stone-700">{description}</p>
        </div>
      </div>
    </section>
  );
}
