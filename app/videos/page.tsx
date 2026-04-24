import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { videos } from "@/data/site";

export const metadata: Metadata = {
  title: "簡単ヨガ動画｜ひだまりのヨガ",
  description:
    "シニアや初心者の方にも取り入れやすい、簡単ヨガ動画をまとめています。",
};

export default function VideosPage() {
  return (
    <>
      <PageHero
        title="簡単ヨガ動画"
        description="ご自宅で短時間から取り入れやすい、やさしいヨガ動画を整理しています。"
        breadcrumbs={[{ label: "簡単ヨガ動画" }]}
      />
      <section className="px-5 py-14">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {videos.map((video) => (
            <article key={video.title} className="rounded-[1.75rem] border border-[var(--color-cream-dark)] bg-white p-6 shadow-[0_18px_45px_rgba(91,64,45,0.08)]">
              <p className="text-sm font-bold text-[var(--color-brown)]">{video.target}</p>
              <h2 className="mt-2 text-xl font-bold leading-snug text-stone-950">{video.title}</h2>
              <p className="mt-3 text-base leading-8 text-stone-700">{video.description}</p>
              <p className="mt-4 font-bold text-stone-800">所要時間: {video.duration}</p>
              <Button href={video.href} variant="secondary" className="mt-6 w-full" target="_blank" rel="noreferrer">
                動画を見る
              </Button>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
