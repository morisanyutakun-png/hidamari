import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "お問い合わせ｜ひだまりのヨガ",
  description:
    "オンラインヨガ、対面ヨガ、出張ヨガ、企業・施設向けチェアヨガに関するお問い合わせはこちらから。",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="お問い合わせ"
        description="どのレッスンが合うか迷ったら、お気軽にご相談ください。オンラインヨガ、対面ヨガ、出張ヨガのご依頼もこちらから承ります。"
        breadcrumbs={[{ label: "お問い合わせ" }]}
      />
      <section className="px-5 py-14">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-[1.75rem] bg-[var(--color-cream)] p-6">
            <h2 className="text-2xl font-bold text-stone-950">ご相談いただけること</h2>
            <ul className="mt-5 grid gap-3 text-lg leading-8 text-stone-700">
              <li>オンラインヨガの参加について</li>
              <li>土曜日の朝ヨガの予約について</li>
              <li>高齢者施設・地域サロンへの出張ヨガ</li>
              <li>企業・オフィス向けチェアヨガ</li>
              <li>体力や年齢に合わせた参加方法</li>
            </ul>
            <p className="mt-6 text-base leading-8 text-stone-600">
              メールでの直接連絡先は運用時に差し替えてください。
              現在の設定: {siteConfig.email}
            </p>
          </aside>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
