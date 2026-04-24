import Link from "next/link";
import {
  externalLinks,
  footerMainLinks,
  footerSubLinks,
  siteConfig,
} from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[#1d1d1f] px-5 py-14 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_2fr]">
        <div>
          <p className="text-sm font-bold text-[var(--color-sun)]">三重県津市・久居</p>
          <p className="mt-2 text-3xl font-extrabold">{siteConfig.name}</p>
          <p className="mt-5 whitespace-pre-line text-base font-medium leading-8 text-stone-200">
            {siteConfig.tagline}
          </p>
          <p className="mt-6 max-w-md text-sm leading-7 text-stone-400">
            ご予約の際には、レッスンにあたっての同意事項を必ずお読みいただき、同意のうえお申し込みください。
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h2 className="text-base font-bold">サイトマップ</h2>
            <ul className="mt-4 grid gap-2 text-sm font-medium text-stone-300">
              {footerMainLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-base font-bold">その他</h2>
            <ul className="mt-4 grid gap-2 text-sm font-medium text-stone-300">
              {footerSubLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-base font-bold">外部リンク</h2>
            <ul className="mt-4 grid gap-2 text-sm font-medium text-stone-300">
              {externalLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-white" target="_blank" rel="noreferrer">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-sm text-stone-400">
        © {new Date().getFullYear()} {siteConfig.name}
      </p>
    </footer>
  );
}
