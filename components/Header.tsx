"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/Button";
import { navigation, siteConfig } from "@/data/site";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-white/75 backdrop-blur-2xl">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between px-5">
        <Link
          href="/"
          className="text-lg font-extrabold leading-none text-stone-950"
          aria-label={`${siteConfig.name} トップへ`}
        >
          <span className="block text-xs font-bold text-[var(--color-brown)]">三重県津市・久居</span>
          <span>{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="主要ナビゲーション">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-stone-700 hover:text-stone-950"
            >
              {item.label}
            </Link>
          ))}
          <Button href="/contact" className="min-h-10 px-5 text-sm">
            予約・お問い合わせ
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-black/[0.08] bg-white/80 text-stone-900 shadow-sm lg:hidden"
          aria-label="メニューを開閉する"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="grid gap-1.5" aria-hidden="true">
            <span className="block h-0.5 w-6 bg-stone-800" />
            <span className="block h-0.5 w-6 bg-stone-800" />
            <span className="block h-0.5 w-6 bg-stone-800" />
          </span>
        </button>
      </div>

      {isOpen ? (
        <nav className="border-t border-black/[0.06] bg-white/90 px-5 py-4 backdrop-blur-2xl lg:hidden">
          <div className="mx-auto grid max-w-6xl gap-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-base font-bold text-stone-800 hover:bg-stone-100"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button href="/contact" className="mt-2 w-full" onClick={() => setIsOpen(false)}>
              予約・お問い合わせ
            </Button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
