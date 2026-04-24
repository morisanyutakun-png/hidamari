import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "プライバシーポリシー｜ひだまりのヨガ",
  description: "ひだまりのヨガの個人情報の取り扱いについてご案内します。",
};

const sections = [
  ["個人情報の取得", "お問い合わせやご予約の際に、お名前、メールアドレス、相談内容など必要な範囲で個人情報を取得することがあります。"],
  ["利用目的", "取得した個人情報は、お問い合わせへの返信、レッスン案内、予約管理、必要な連絡のために利用します。"],
  ["第三者提供", "法令に基づく場合を除き、ご本人の同意なく個人情報を第三者へ提供しません。"],
  ["管理方法", "取得した個人情報は、漏えい、紛失、改ざんなどが起こらないよう適切に管理します。"],
  ["お問い合わせ先", "個人情報の取り扱いに関するお問い合わせは、お問い合わせページよりご連絡ください。"],
  ["改定について", "本ポリシーは、必要に応じて内容を見直し、改定することがあります。"],
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="プライバシーポリシー"
        description="ひだまりのヨガにおける個人情報の取り扱いについてご案内します。"
        breadcrumbs={[{ label: "プライバシーポリシー" }]}
      />
      <section className="px-5 py-14">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-black/[0.06] bg-white/78 p-7 shadow-[var(--shadow-soft)] backdrop-blur sm:p-9">
          {sections.map(([title, body]) => (
            <section key={title} className="border-b border-black/[0.06] py-6 first:pt-0 last:border-0 last:pb-0">
              <h2 className="text-3xl font-extrabold text-stone-950">{title}</h2>
              <p className="mt-4 text-lg font-medium leading-9 text-stone-600">{body}</p>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
