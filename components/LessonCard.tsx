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
    <article className="flex h-full flex-col rounded-[2rem] border border-black/[0.06] bg-white/78 p-7 shadow-[var(--shadow-soft)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]">
      <div className="flex-1">
        <h3 className="text-2xl font-extrabold leading-snug text-stone-950">{lesson.title}</h3>
        <p className="mt-4 text-base font-medium leading-8 text-stone-600">{lesson.summary}</p>
        <dl className="mt-6 grid gap-3 text-base">
          <div className="flex gap-3">
            <dt className="min-w-16 font-bold text-stone-500">日時</dt>
            <dd className="text-stone-800">{lesson.schedule}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="min-w-16 font-bold text-stone-500">時間</dt>
            <dd className="text-stone-800">{lesson.duration}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="min-w-16 font-bold text-stone-500">料金</dt>
            <dd className="text-stone-800">{lesson.price}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="min-w-16 font-bold text-stone-500">形式</dt>
            <dd className="text-stone-800">{lesson.format}</dd>
          </div>
        </dl>
        <div className="mt-5 flex flex-wrap gap-2">
          {lesson.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-black/[0.06] bg-stone-50 px-3 py-1 text-sm font-bold text-stone-600"
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
