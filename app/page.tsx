import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";
import { InstructorCard } from "@/components/InstructorCard";
import { LessonCard } from "@/components/LessonCard";
import { NewsList } from "@/components/NewsList";
import { SectionHeading } from "@/components/SectionHeading";
import { lessons, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title:
    "ひだまりのヨガ｜三重県津市・久居のシニア・初心者向けやさしいヨガ教室",
  description:
    "三重県津市・久居エリアとオンラインで楽しめる、シニア・初心者にも安心のやさしいヨガ教室。土曜日の朝ヨガ、オンラインヨガ、出張チェアヨガ、企業・施設向けレッスンにも対応しています。",
};

const concerns = [
  "忙しくて運動の時間が取れない",
  "ぐっすり眠れない",
  "疲れが取れにくい",
  "体力に自信がない",
  "体が硬くて不安",
  "人目を気にせず続けたい",
  "激しい運動は苦手",
  "自分のペースで続けたい",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: siteConfig.name,
  description:
    "三重県津市・久居エリアとオンラインで楽しめる、シニア・初心者向けのやさしいヨガ教室。",
  areaServed: ["三重県津市", "久居", "オンライン"],
  serviceType: ["ヨガ教室", "オンラインヨガ", "出張ヨガ", "チェアヨガ", "シニアヨガ"],
  url: siteConfig.url,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />

      <section className="px-5 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="こんなお悩みに"
            title="無理なく、心地よく続けられるヨガを。"
            description="体調や生活リズムは人それぞれです。ひだまりのヨガでは、がんばりすぎず、自分のペースで体を動かす時間を大切にしています。"
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {concerns.map((concern) => (
              <div
                key={concern}
                className="rounded-3xl border border-white bg-white/85 px-5 py-4 text-base font-bold leading-7 text-stone-800 shadow-sm"
              >
                {concern}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/55 px-5 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="特徴"
            title="オンラインも、地域の場も、やさしく寄り添います。"
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            <FeatureCard title="おうちで気軽に楽しめるオンラインヨガ" label="オンライン">
              自宅から参加できるオンラインヨガ。移動の負担がなく、自分のペースで続けやすいレッスンです。
            </FeatureCard>
            <FeatureCard title="津市・久居で楽しめる対面ヨガ" label="対面">
              三重県津市・久居エリアで、初心者やシニアにもやさしい対面ヨガを行います。
            </FeatureCard>
            <FeatureCard title="施設・企業・地域サロン向けの出張ヨガ" label="出張">
              高齢者施設、地域サロン、公民館、企業向けに、チェアヨガややさしいヨガをお届けします。
            </FeatureCard>
          </div>
        </div>
      </section>

      <section className="px-5 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="レッスン一覧"
            title="目的や暮らし方に合わせて選べます。"
            description="オンライン、津市久居での対面レッスン、施設や企業への出張ヨガまで対応しています。"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {lessons.map((lesson) => (
              <LessonCard key={lesson.title} lesson={lesson} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] px-5 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="講師" title="安心して参加できる、やさしい案内を大切に。" />
          <div className="mt-8">
            <InstructorCard />
          </div>
        </div>
      </section>

      <section className="px-5 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="地域・出張ヨガ"
            title="地域の集まりや施設に、やさしいヨガをお届けします。"
            description="15-45分程度で調整可能です。内容・人数・料金はお気軽にご相談ください。"
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            <FeatureCard title="高齢者施設向けチェアヨガ">
              椅子に座ったままできる、無理のないヨガを行います。
            </FeatureCard>
            <FeatureCard title="地域サロン・公民館向けヨガ">
              地域の集まりや健康づくりイベントに合わせて、やさしいヨガをお届けします。
            </FeatureCard>
            <FeatureCard title="企業・オフィス向けチェアヨガ">
              仕事の合間に取り入れやすい、短時間のチェアヨガやリフレッシュヨガに対応します。
            </FeatureCard>
          </div>
          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-12 items-center rounded-full bg-[var(--color-sun)] px-6 py-3 text-base font-bold text-stone-950 hover:bg-[var(--color-sun-strong)]"
          >
            出張ヨガについて相談する
          </Link>
        </div>
      </section>

      <section className="bg-white/55 px-5 py-14">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="新着情報" title="ひだまりからのお知らせ" />
          <NewsList />
        </div>
      </section>

      <CTASection />
    </>
  );
}
