import { news } from "@/data/site";

export function NewsList() {
  return (
    <div className="rounded-[2rem] border border-black/[0.06] bg-white/78 p-6 shadow-[var(--shadow-soft)] backdrop-blur">
      <ul className="divide-y divide-black/[0.06]">
        {news.map((item) => (
          <li key={`${item.date}-${item.title}`} className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr]">
            <time className="font-bold text-stone-500">{item.date}</time>
            <p className="font-medium leading-8 text-stone-800">{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
