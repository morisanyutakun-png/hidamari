import { Button } from "@/components/Button";

type LessonCardProps = {
  lesson: {
    title: string;
    href: string;
    schedule: string;
    duration: string;
    price: string;
    format: string;
    audience: string;
    summary: string;
    tags: string[];
  };
};

export function LessonCard({ lesson }: LessonCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[1.75rem] border border-[var(--color-cream-dark)] bg-white p-6 shadow-[0_18px_45px_rgba(91,64,45,0.08)]">
      <div className="flex-1">
        <h3 className="text-xl font-bold leading-snug text-stone-950">{lesson.title}</h3>
        <p className="mt-3 text-base leading-8 text-stone-700">{lesson.summary}</p>
        <dl className="mt-5 grid gap-3 text-base">
          <div className="flex gap-3">
            <dt className="min-w-16 font-bold text-[var(--color-brown)]">日時</dt>
            <dd className="text-stone-800">{lesson.schedule}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="min-w-16 font-bold text-[var(--color-brown)]">時間</dt>
            <dd className="text-stone-800">{lesson.duration}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="min-w-16 font-bold text-[var(--color-brown)]">料金</dt>
            <dd className="text-stone-800">{lesson.price}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="min-w-16 font-bold text-[var(--color-brown)]">形式</dt>
            <dd className="text-stone-800">{lesson.format}</dd>
          </div>
        </dl>
        <div className="mt-5 flex flex-wrap gap-2">
          {lesson.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[var(--color-cream)] px-3 py-1 text-sm font-bold text-stone-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <Button href={lesson.href} variant="secondary" className="mt-6 w-full">
        詳しく見る
      </Button>
    </article>
  );
}
