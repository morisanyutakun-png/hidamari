import { Button } from "@/components/Button";
import { cta, siteConfig } from "@/data/site";

export function CTASection() {
  return (
    <section className="px-5 py-16">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.25rem] border border-black/[0.06] bg-[linear-gradient(135deg,#ffffff_0%,#f8f2e8_58%,#edf4e9_100%)] p-8 shadow-[var(--shadow-hover)] sm:p-12">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold text-[var(--color-brown)]">CONTACT</p>
          <h2 className="text-4xl font-extrabold leading-tight text-stone-950 sm:text-5xl">{cta.title}</h2>
          <p className="mt-5 text-lg font-medium leading-9 text-stone-600">{cta.body}</p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href="/contact">お問い合わせ</Button>
          <Button href="/lessons" variant="secondary">
            レッスン内容を見る
          </Button>
          <Button href={siteConfig.lineUrl} variant="secondary" target="_blank" rel="noreferrer">
            公式LINE
          </Button>
          <Button href={siteConfig.instagramUrl} variant="ghost" target="_blank" rel="noreferrer">
            Instagram
          </Button>
        </div>
      </div>
    </section>
  );
}
