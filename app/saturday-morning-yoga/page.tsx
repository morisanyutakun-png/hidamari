import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "土曜日の朝ヨガ｜津市久居のやさしい対面ヨガ｜ひだまりのヨガ",
  description:
    "三重県津市久居で開催する土曜日の朝ヨガ。初心者やシニアにも安心のやさしい対面ヨガレッスンです。",
};

const details = [
  ["日時", "土曜日 10:00-"],
  ["時間", "約1時間"],
  ["料金", "2,000円（初回1,000円）"],
  ["会場", "津市久居アルスプラザ"],
  ["対象", "初心者歓迎・シニア歓迎"],
];

export default function SaturdayMorningYogaPage() {
  return (
    <>
      <PageHero
        title="土曜日の朝、久居でゆったりヨガ時間。"
        description="三重県津市久居で開催する対面ヨガです。週末の朝に、呼吸とやさしい動きで心と体を整える時間を過ごしませんか。"
        breadcrumbs={[{ label: "土曜日の朝ヨガ" }]}
      />
      <section className="px-5 py-14">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[1.75rem] border border-[var(--color-cream-dark)] bg-white p-6 shadow-[0_18px_45px_rgba(91,64,45,0.08)]">
            <h2 className="text-2xl font-bold text-stone-950">レッスン詳細</h2>
            <dl className="mt-5 grid gap-4 text-lg">
              {details.map(([label, value]) => (
                <div key={label} className="grid gap-1 border-b border-[var(--color-cream-dark)] pb-4 sm:grid-cols-[8rem_1fr]">
                  <dt className="font-bold text-[var(--color-brown)]">{label}</dt>
                  <dd className="text-stone-800">{value}</dd>
                </div>
              ))}
            </dl>
            <Button href="/contact" className="mt-6 w-full">
              土曜日の朝ヨガを予約する
            </Button>
          </div>
          <div className="grid gap-5">
            <FeatureCard title="初めての方も安心">
              難しいポーズを目指すのではなく、呼吸と一緒にやさしく体を動かします。
            </FeatureCard>
            <FeatureCard title="持ち物">
              動きやすい服装、飲み物、タオル、ヨガマットをお持ちください。マットについて不安がある方は事前にご相談ください。
            </FeatureCard>
            <FeatureCard title="久居周辺でヨガを探している方へ">
              地域の方が通いやすい対面レッスンとして、無理なく続けられる時間を大切にしています。
            </FeatureCard>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
