import Image from "next/image";
import { Button } from "@/components/Button";
import { qualifications } from "@/data/site";

export function InstructorCard() {
  return (
    <article className="grid gap-8 rounded-[2rem] border border-[var(--color-cream-dark)] bg-white p-6 shadow-[0_18px_45px_rgba(91,64,45,0.08)] lg:grid-cols-[0.85fr_1.15fr] lg:p-8">
      <Image
        src="/images/instructor-placeholder.svg"
        alt="インストラクター mori miwa（森 美和）のやさしい雰囲気を表したイラスト"
        width={560}
        height={520}
        className="h-auto w-full rounded-[1.5rem] bg-[var(--color-cream)]"
      />
      <div>
        <p className="text-sm font-bold tracking-[0.08em] text-[var(--color-brown)]">
          インストラクター
        </p>
        <h3 className="mt-2 text-3xl font-bold text-stone-950">mori miwa（森 美和）</h3>
        <p className="mt-4 text-lg leading-9 text-stone-700">
          三重県津市・久居地域を拠点に、オンラインヨガと対面ヨガを行っています。
          地域福祉の現場で培った寄り添う姿勢を大切にしながら、シニアの方や初心者の方にも安心して参加していただける、やさしいヨガをお届けしています。
        </p>
        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {qualifications.map((qualification) => (
            <li key={qualification} className="rounded-2xl bg-[var(--color-cream)] px-4 py-3 text-sm font-bold text-stone-800">
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
