import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "楽天シニアイベントレッスン｜ひだまりのヨガ",
  description:
    "楽天シニアイベントで参加できる、シニア向けのやさしいヨガレッスンについてご案内します。",
};

export default function RakutenSeniorPage() {
  return (
    <>
      <PageHero
        title="楽天シニアイベントレッスン"
        description="楽天シニアイベント経由で参加される方向けに、やさしいヨガレッスンの内容と参加前の確認事項をご案内します。"
        breadcrumbs={[{ label: "楽天シニアイベントレッスン" }]}
      />
      <section className="px-5 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 lg:grid-cols-3">
            <FeatureCard title="シニア向けのやさしい内容">
              呼吸やゆっくりした動きを中心に、無理のない範囲で参加できます。
            </FeatureCard>
            <FeatureCard title="参加方法">
              楽天シニアイベントの案内に沿ってお申し込みください。詳細リンクは運用時に差し替えできます。
            </FeatureCard>
            <FeatureCard title="注意事項">
              体調に不安がある場合は、事前に医師へ相談し、当日は無理をせずご参加ください。
            </FeatureCard>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={siteConfig.rakutenSeniorReservationUrl}>予約・詳細を見る</Button>
            <Button href="/agreement" variant="secondary">
              同意事項を確認する
            </Button>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
