import { news } from "@/data/site";

export function NewsList() {
  return (
    <div className="rounded-[1.75rem] border border-[var(--color-cream-dark)] bg-white p-6 shadow-[0_18px_45px_rgba(91,64,45,0.08)]">
      <ul className="divide-y divide-[var(--color-cream-dark)]">
        {news.map((item) => (
          <li key={`${item.date}-${item.title}`} className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr]">
            <time className="font-bold text-[var(--color-brown)]">{item.date}</time>
            <p className="leading-8 text-stone-800">{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
