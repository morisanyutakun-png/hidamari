import Image from "next/image";
import { Button } from "@/components/Button";

const badges = ["初心者歓迎", "シニア向け", "オンライン対応", "出張ヨガ対応"];

export function Hero() {
  return (
    <section className="overflow-hidden bg-[linear-gradient(135deg,#fff7d7_0%,#ffffff_45%,#e9f5df_100%)] px-5 py-14 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-4 text-sm font-bold tracking-[0.08em] text-[var(--color-brown)]">
            三重県津市・久居エリアとオンライン
          </p>
          <h1 className="text-4xl font-bold leading-tight text-stone-950 sm:text-5xl lg:text-6xl">
            シニア・初心者にも安心の、やさしいヨガ教室
          </h1>
          <p className="mt-6 text-lg leading-9 text-stone-700">
            三重県津市・久居エリアの対面ヨガと、ご自宅で参加できるオンラインヨガ。
            ひだまりのような温もりで、心と体をゆるめる時間をお届けします。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/lessons">レッスンを見る</Button>
            <Button href="/contact" variant="secondary">
              お問い合わせ
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white bg-white/80 px-4 py-2 text-sm font-bold text-stone-700 shadow-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-4 top-10 h-24 w-24 rounded-full bg-[var(--color-sun)]/40 blur-2xl" />
          <Image
            src="/images/hidamari-yoga-placeholder.svg"
            alt="明るいひだまりの中で、やさしいヨガ時間をイメージしたイラスト"
            width={720}
            height={620}
            priority
            className="relative h-auto w-full rounded-[2rem] border border-white/70 shadow-[0_24px_70px_rgba(91,64,45,0.16)]"
          />
        </div>
      </div>
    </section>
  );
}
