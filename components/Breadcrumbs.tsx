import Link from "next/link";

type BreadcrumbsProps = {
  items: { label: string; href?: string }[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="パンくずリスト" className="text-sm text-stone-600">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="font-bold text-stone-700 hover:text-stone-950">
            トップ
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {item.href ? (
              <Link href={item.href} className="font-bold text-stone-700 hover:text-stone-950">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
