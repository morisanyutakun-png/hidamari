import type { ReactNode } from "react";

type FeatureCardProps = {
  title: string;
  children: ReactNode;
  label?: string;
};

export function FeatureCard({ title, children, label }: FeatureCardProps) {
  return (
    <article className="h-full rounded-[1.75rem] border border-white/70 bg-white/85 p-6 shadow-[0_18px_45px_rgba(91,64,45,0.08)]">
      {label ? (
        <p className="mb-4 inline-flex rounded-full bg-[var(--color-leaf-soft)] px-4 py-1.5 text-sm font-bold text-stone-800">
          {label}
        </p>
      ) : null}
      <h3 className="text-xl font-bold leading-snug text-stone-950">{title}</h3>
      <div className="mt-3 text-base leading-8 text-stone-700">{children}</div>
    </article>
  );
}
