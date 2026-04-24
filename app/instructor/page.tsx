import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { InstructorCard } from "@/components/InstructorCard";
import { PageHero } from "@/components/PageHero";
import { qualifications } from "@/data/site";

export const metadata: Metadata = {
  title: "インストラクター紹介｜mori miwa｜ひだまりのヨガ",
  description:
    "三重県津市・久居を拠点に活動するヨガインストラクター mori miwa（森 美和）のプロフィール、想い、保有資格をご紹介します。",
};

export default function InstructorPage() {
  return (
    <>
      <PageHero
        title="インストラクター紹介"
        description="三重県津市・久居を拠点に、オンラインヨガと対面ヨガをお届けしています。"
        breadcrumbs={[{ label: "インストラクター紹介" }]}
      />
      <section className="px-5 py-14">
        <div className="mx-auto max-w-6xl">
          <InstructorCard />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[1.75rem] bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-stone-950">レッスンへの想い</h2>
              <p className="mt-4 text-lg leading-9 text-stone-700">
                ヨガが初めての方、体が硬いと感じている方、運動に苦手意識がある方にも、安心して参加していただける時間を大切にしています。
                地域福祉の現場で培った寄り添う姿勢を活かし、一人ひとりのペースに合わせて声をかけます。
              </p>
            </article>
            <article className="rounded-[1.75rem] bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-stone-950">保有資格</h2>
              <ul className="mt-4 grid gap-2 text-base font-bold text-stone-800">
                {qualifications.map((qualification) => (
                  <li key={qualification} className="rounded-2xl bg-[var(--color-cream)] px-4 py-3">
                    {qualification}
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <Button href="/contact" className="mt-8">
            レッスンについて相談する
          </Button>
        </div>
      </section>
      <CTASection />
    </>
  );
}
