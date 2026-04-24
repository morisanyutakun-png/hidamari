import Image from "next/image";
import { Button } from "@/components/Button";
import { qualifications } from "@/data/site";

export function InstructorCard() {
  return (
    <article className="grid gap-8 rounded-[2.25rem] border border-black/[0.06] bg-white/78 p-7 shadow-[var(--shadow-soft)] backdrop-blur lg:grid-cols-[0.85fr_1.15fr] lg:p-9">
      <Image
        src="/images/instructor-placeholder.svg"
        alt="インストラクター mori miwa（森 美和）のやさしい雰囲気を表したイラスト"
        width={560}
        height={520}
        className="h-auto w-full rounded-[1.75rem] bg-[var(--color-cream)] shadow-sm"
      />
      <div>
        <p className="text-sm font-bold text-[var(--color-brown)]">
          インストラクター
        </p>
        <h3 className="mt-3 text-4xl font-extrabold text-stone-950">mori miwa（森 美和）</h3>
        <p className="mt-5 text-lg font-medium leading-9 text-stone-600">
          三重県津市・久居地域を拠点に、オンラインヨガと対面ヨガを行っています。
          地域福祉の現場で培った寄り添う姿勢を大切にしながら、シニアの方や初心者の方にも安心して参加していただける、やさしいヨガをお届けしています。
        </p>
        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {qualifications.map((qualification) => (
            <li key={qualification} className="rounded-2xl border border-black/[0.06] bg-stone-50 px-4 py-3 text-sm font-bold text-stone-700">
              {qualification}
            </li>
          ))}
        </ul>
        <Button href="/instructor" variant="secondary" className="mt-6">
          インストラクター紹介を見る
        </Button>
      </div>
    </article>
  );
}
