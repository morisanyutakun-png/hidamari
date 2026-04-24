import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "レッスンにあたっての同意事項｜ひだまりのヨガ",
  description:
    "ひだまりのヨガに参加される前にご確認いただきたい、体調管理や安全に関する同意事項です。",
};

const items = [
  "体調に不安がある場合、持病・怪我・妊娠中などの場合は、事前に医師へ相談し、講師にもお知らせください。",
  "レッスン中は無理をせず、ご自身の体調に合わせて休憩してください。",
  "痛みや強い違和感がある場合は、すぐに動きを中止してください。",
  "レッスン中に体調の変化を感じた場合は、自己判断で続けず、速やかに講師へお申し出ください。",
  "レッスン内容は健康づくりやリフレッシュを目的としたもので、医療行為ではありません。",
  "参加者ご自身の体調管理のもと、安全に配慮してご参加ください。",
  "オンライン参加の場合は、周囲に動けるスペースを確保し、転倒や接触にご注意ください。",
];

export default function AgreementPage() {
  return (
    <>
      <PageHero
        title="レッスンにあたっての同意事項"
        description="安心してヨガを楽しんでいただくために、ご予約前に以下の内容をご確認ください。"
        breadcrumbs={[{ label: "レッスンにあたっての同意事項" }]}
      />
      <section className="px-5 py-14">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-black/[0.06] bg-white/78 p-7 shadow-[var(--shadow-soft)] backdrop-blur sm:p-9">
          <h2 className="text-3xl font-extrabold text-stone-950">ご参加前の確認事項</h2>
          <ul className="mt-6 grid gap-4 text-lg font-medium leading-9 text-stone-600">
            {items.map((item) => (
              <li key={item} className="rounded-2xl border border-black/[0.06] bg-stone-50 px-5 py-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTASection />
    </>
  );
}
