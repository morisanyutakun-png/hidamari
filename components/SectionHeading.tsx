type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-bold text-[var(--color-brown)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-extrabold leading-[1.18] text-stone-950 sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-lg font-medium leading-9 text-stone-600">{description}</p>
      ) : null}
    </div>
  );
}
