import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { LessonCard } from "@/components/LessonCard";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { lessons } from "@/data/site";

export const metadata: Metadata = {
  title: "おうちで楽しむオンラインヨガ｜ひだまりのヨガ",
  description:
    "自宅で気軽に参加できるオンラインヨガ。水曜夜のプライベートレッスン、金曜朝のラジヨガ体操、金曜夜のやさしい夜ヨガなどを提供しています。",
};

export default function OnlineYogaPage() {
  const onlineLessons = lessons.filter((lesson) => lesson.format === "オンライン");

  return (
    <>
      <PageHero
        title="おうちで、無理なく、自分のペースで。"
        description="移動の負担なく、ご自宅から参加できるオンラインヨガです。人目を気にせず、落ち着いた環境でやさしく体を動かせます。"
        breadcrumbs={[{ label: "おうちで楽しむヨガ" }]}
      />
      <section className="px-5 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="オンラインヨガの楽しみ方" />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            <FeatureCard title="移動不要で参加できます">
              天候や移動時間を気にせず、慣れた場所から参加できます。
            </FeatureCard>
            <FeatureCard title="人目を気にせず続けやすい">
              体が硬い方や初心者の方も、ご自身のペースを大切にできます。
            </FeatureCard>
            <FeatureCard title="短時間の習慣づくりにも">
              15分の朝ヨガ・夜ヨガなど、暮らしに入れやすい内容があります。
            </FeatureCard>
          </div>
        </div>
      </section>
      <section className="bg-white/60 px-5 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="オンラインレッスン" description="水曜夜のプライベートレッスン、金曜朝と夜の短時間レッスンをご用意しています。" />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {onlineLessons.map((lesson) => (
              <LessonCard key={lesson.title} lesson={lesson} />
            ))}
          </div>
          <Button href="/contact" className="mt-8">
            オンラインヨガについて相談する
          </Button>
        </div>
      </section>
      <CTASection />
    </>
  );
}
