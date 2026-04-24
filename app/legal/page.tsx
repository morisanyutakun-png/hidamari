import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記｜ひだまりのヨガ",
  description: "ひだまりのヨガの特定商取引法に基づく表記です。",
};

const rows = [
  ["販売事業者", "TODO: 事業者名を記載"],
  ["運営責任者", "mori miwa（森 美和）"],
  ["所在地", "TODO: 所在地を記載"],
  ["メールアドレス", "TODO: メールアドレスを記載"],
  ["販売価格", "各レッスンページに記載の料金をご確認ください。"],
  ["商品代金以外の必要料金", "オンライン参加に伴う通信料、会場までの交通費などは参加者のご負担となります。"],
  ["支払い方法", "TODO: 支払い方法を記載"],
  ["サービス提供時期", "ご予約いただいたレッスン日時に提供します。"],
  ["キャンセルについて", "TODO: キャンセル規定を記載"],
  ["返金について", "TODO: 返金規定を記載"],
];

export default function LegalPage() {
  return (
    <>
      <PageHero
        title="特定商取引法に基づく表記"
        description="オンラインレッスン等の提供に関する表記です。未確定の項目は TODO として残しています。"
        breadcrumbs={[{ label: "特定商取引法に基づく表記" }]}
      />
      <section className="px-5 py-14">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-black/[0.06] bg-white/78 shadow-[var(--shadow-soft)] backdrop-blur">
          <dl>
            {rows.map(([label, value]) => (
              <div key={label} className="grid gap-2 border-b border-black/[0.06] p-5 last:border-0 sm:grid-cols-[12rem_1fr]">
                <dt className="font-bold text-stone-500">{label}</dt>
                <dd className="font-medium leading-8 text-stone-700">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
