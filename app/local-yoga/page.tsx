import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "地域で楽しむヨガ・出張ヨガ｜三重県津市・久居｜ひだまりのヨガ",
  description:
    "三重県津市・久居エリアを中心に、地域サロン、公民館、高齢者施設、企業向けの出張ヨガ・チェアヨガを行っています。",
};

export default function LocalYogaPage() {
  return (
    <>
      <PageHero
        title="地域の集まりや施設に、やさしいヨガをお届けします。"
        description="高齢者施設、地域サロン、公民館、企業など、参加される方の体力や目的に合わせて内容を調整します。"
        breadcrumbs={[{ label: "地域で楽しむヨガ・出張ヨガ" }]}
      />
      <section className="px-5 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="椅子に座ったままでも、やさしく体を動かせます。"
            description="15-45分程度で調整可能です。内容・人数・料金は、会場や参加者に合わせてご相談ください。"
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            <FeatureCard title="高齢者施設向けチェアヨガ" label="施設向け">
              椅子に座ったままできる内容を中心に、無理なく参加できる時間をつくります。
            </FeatureCard>
            <FeatureCard title="地域サロン・公民館向けヨガ" label="地域向け">
              健康づくりイベントや地域の集まりに合わせて、やさしいヨガをお届けします。
            </FeatureCard>
            <FeatureCard title="企業向けチェアヨガ" label="企業向け">
              仕事の合間に取り入れやすい、短時間のリフレッシュヨガにも対応します。
            </FeatureCard>
          </div>
          <div className="mt-8 rounded-[2rem] border border-black/[0.06] bg-white/78 p-7 text-lg font-medium leading-9 text-stone-600 shadow-[var(--shadow-soft)] backdrop-blur">
            会場の広さ、椅子の有無、参加人数、目的に合わせて内容を整えます。
            初めての企画でも、どうぞお気軽にご相談ください。
          </div>
          <Button href="/contact" className="mt-8">
            出張ヨガを相談する
          </Button>
        </div>
      </section>
      <CTASection />
    </>
  );
}
