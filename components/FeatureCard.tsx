import type { ReactNode } from "react";

type FeatureCardProps = {
  title: string;
  children: ReactNode;
  label?: string;
};

export function FeatureCard({ title, children, label }: FeatureCardProps) {
  return (
    <article className="h-full rounded-[2rem] border border-black/[0.06] bg-white/72 p-7 shadow-[var(--shadow-soft)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]">
      {label ? (
        <p className="mb-5 inline-flex rounded-full border border-black/[0.06] bg-[var(--color-leaf-soft)] px-4 py-1.5 text-sm font-bold text-stone-700">
          {label}
        </p>
      ) : null}
      <h3 className="text-2xl font-extrabold leading-snug text-stone-950">{title}</h3>
      <div className="mt-4 text-base font-medium leading-8 text-stone-600">{children}</div>
    </article>
  );
}
