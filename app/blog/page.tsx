import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { blogPosts } from "@/data/site";

export const metadata: Metadata = {
  title: "ひだまりブログ｜ひだまりのヨガ",
  description:
    "シニアヨガ、オンラインヨガ、チェアヨガなど、健やかな毎日に役立つ情報をお届けするブログです。",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="ひだまりブログ"
        description="シニアヨガ、オンラインヨガ、チェアヨガなど、将来的にSEO記事を追加できるブログ一覧です。"
        breadcrumbs={[{ label: "ひだまりブログ" }]}
      />
      <section className="px-5 py-14">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="rounded-[1.75rem] border border-[var(--color-cream-dark)] bg-white p-6 shadow-[0_18px_45px_rgba(91,64,45,0.08)]">
              <div className="flex flex-wrap items-center gap-2 text-sm font-bold text-[var(--color-brown)]">
                <time>{post.date}</time>
                <span>{post.category}</span>
              </div>
              <h2 className="mt-3 text-xl font-bold leading-snug text-stone-950">{post.title}</h2>
              <p className="mt-3 text-base leading-8 text-stone-700">{post.description}</p>
              <Button href="/blog" variant="secondary" className="mt-6 w-full">
                詳しく見る
              </Button>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
