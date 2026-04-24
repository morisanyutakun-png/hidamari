import { Button } from "@/components/Button";
import { cta, siteConfig } from "@/data/site";

export function CTASection() {
  return (
    <section className="px-5 py-14">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-[linear-gradient(135deg,#ffe9a8_0%,#fffaf0_52%,#dcefd1_100%)] p-7 shadow-[0_18px_45px_rgba(91,64,45,0.10)] sm:p-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold leading-tight text-stone-950">{cta.title}</h2>
          <p className="mt-4 text-lg leading-9 text-stone-700">{cta.body}</p>
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
