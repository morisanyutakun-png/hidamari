import Image from "next/image";
import { Button } from "@/components/Button";

const badges = ["初心者歓迎", "シニア向け", "オンライン対応", "出張ヨガ対応"];

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#ffffff_0%,#fbfaf7_62%,#f7f2e9_100%)]" />
      <div className="absolute left-1/2 top-10 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,201,85,0.22),transparent_68%)] blur-2xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <p className="mb-5 text-sm font-bold text-[var(--color-brown)]">
            三重県津市・久居エリアとオンライン
          </p>
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.08] text-stone-950 sm:text-6xl lg:text-7xl">
            シニア・初心者にも安心の、やさしいヨガ教室
          </h1>
          <p className="mt-7 max-w-2xl text-lg font-medium leading-9 text-stone-600 sm:text-xl">
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
                className="rounded-full border border-black/[0.06] bg-white/70 px-4 py-2 text-sm font-bold text-stone-700 shadow-sm backdrop-blur"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-4 top-10 h-24 w-24 rounded-full bg-[var(--color-sun)]/30 blur-2xl" />
          <Image
            src="/images/hidamari-yoga-placeholder.svg"
            alt="明るいひだまりの中で、やさしいヨガ時間をイメージしたイラスト"
            width={720}
            height={620}
            priority
            className="relative h-auto w-full rounded-[2.25rem] border border-white/80 shadow-[var(--shadow-hover)]"
          />
          <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/70 bg-white/72 p-4 shadow-[var(--shadow-soft)] backdrop-blur-2xl">
            <div className="grid grid-cols-3 gap-3 text-center">
              <div>
                <p className="text-xl font-extrabold text-stone-950">15分</p>
                <p className="mt-1 text-xs font-bold text-stone-500">短時間から</p>
              </div>
              <div>
                <p className="text-xl font-extrabold text-stone-950">久居</p>
                <p className="mt-1 text-xs font-bold text-stone-500">対面対応</p>
              </div>
              <div>
                <p className="text-xl font-extrabold text-stone-950">椅子</p>
                <p className="mt-1 text-xs font-bold text-stone-500">出張ヨガ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
