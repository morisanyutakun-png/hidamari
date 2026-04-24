import { Breadcrumbs } from "@/components/Breadcrumbs";

type PageHeroProps = {
  title: string;
  description: string;
  breadcrumbs?: { label: string; href?: string }[];
};

export function PageHero({ title, description, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-5 py-14 sm:py-20">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#ffffff_0%,#fbfaf7_100%)]" />
      <div className="absolute right-0 top-0 -z-10 h-80 w-80 rounded-full bg-[rgba(245,201,85,0.18)] blur-3xl" />
      <div className="mx-auto max-w-6xl">
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
        <div className="mt-8 max-w-4xl">
          <p className="mb-4 text-sm font-bold text-[var(--color-brown)]">
            ひだまりのヨガ
          </p>
          <h1 className="text-5xl font-extrabold leading-[1.12] text-stone-950 sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg font-medium leading-9 text-stone-600">{description}</p>
        </div>
      </div>
    </section>
  );
}
