import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { LessonCard } from "@/components/LessonCard";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { lessons } from "@/data/site";

export const metadata: Metadata = {
  title: "レッスン内容・料金｜ひだまりのヨガ",
  description:
    "オンラインヨガ、土曜日の朝ヨガ、出張ヨガ、チェアヨガなど、ひだまりのヨガのレッスン内容と料金をご案内します。",
};

export default function LessonsPage() {
  return (
    <>
      <PageHero
        title="レッスン内容・料金"
        description="オンラインヨガ、津市久居での対面ヨガ、施設・地域・企業向けの出張チェアヨガを一覧でご案内します。"
        breadcrumbs={[{ label: "レッスン内容・料金" }]}
      />
      <section className="px-5 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="レッスンを比較する"
            description="時間、料金、参加しやすさを見ながら、ご自身に合うレッスンをお選びください。迷う場合はお問い合わせからご相談いただけます。"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {lessons.map((lesson) => (
              <LessonCard key={lesson.title} lesson={lesson} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white/60 px-5 py-14">
        <div className="mx-auto max-w-6xl overflow-x-auto rounded-[1.75rem] border border-[var(--color-cream-dark)] bg-white p-5 shadow-[0_18px_45px_rgba(91,64,45,0.08)]">
          <table className="w-full min-w-[760px] border-collapse text-left text-base">
            <caption className="mb-4 text-left text-2xl font-bold text-stone-950">
              料金・対象者一覧
            </caption>
            <thead>
              <tr className="border-b border-[var(--color-cream-dark)] text-stone-700">
                <th className="py-4 pr-4">レッスン</th>
                <th className="py-4 pr-4">時間</th>
                <th className="py-4 pr-4">料金</th>
                <th className="py-4 pr-4">対象者</th>
                <th className="py-4">形式</th>
              </tr>
            </thead>
            <tbody>
              {lessons.map((lesson) => (
                <tr key={lesson.title} className="border-b border-[var(--color-cream-dark)] last:border-0">
                  <td className="py-4 pr-4 font-bold text-stone-950">{lesson.title}</td>
                  <td className="py-4 pr-4">{lesson.duration}</td>
                  <td className="py-4 pr-4">{lesson.price}</td>
                  <td className="py-4 pr-4">{lesson.audience}</td>
                  <td className="py-4">{lesson.format}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <CTASection />
    </>
  );
}
