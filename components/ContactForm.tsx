"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/Button";

const inquiryTypes = [
  "オンラインヨガ",
  "対面ヨガ",
  "出張ヨガ",
  "企業・施設向け",
  "その他",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-[1.75rem] border border-[var(--color-leaf)] bg-white p-7 shadow-[0_18px_45px_rgba(91,64,45,0.08)]">
        <h2 className="text-2xl font-bold text-stone-950">お問い合わせを受け付けました</h2>
        <p className="mt-4 text-lg leading-8 text-stone-700">
          こちらは仮の送信完了表示です。実運用時は API Routes や外部フォームサービスへ接続できます。
        </p>
        <Button type="button" variant="secondary" className="mt-6" onClick={() => setSent(false)}>
          内容をもう一度入力する
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-[1.75rem] border border-[var(--color-cream-dark)] bg-white p-6 shadow-[0_18px_45px_rgba(91,64,45,0.08)] sm:p-8"
    >
      <label className="grid gap-2 text-base font-bold text-stone-800">
        お名前
        <input
          required
          name="name"
          className="min-h-12 rounded-2xl border border-[var(--color-cream-dark)] bg-white px-4 text-base font-normal outline-none focus:border-[var(--color-leaf)]"
          autoComplete="name"
        />
      </label>
      <label className="grid gap-2 text-base font-bold text-stone-800">
        メールアドレス
        <input
          required
          type="email"
          name="email"
          className="min-h-12 rounded-2xl border border-[var(--color-cream-dark)] bg-white px-4 text-base font-normal outline-none focus:border-[var(--color-leaf)]"
          autoComplete="email"
        />
      </label>
      <label className="grid gap-2 text-base font-bold text-stone-800">
        お問い合わせ種別
        <select
          name="type"
          className="min-h-12 rounded-2xl border border-[var(--color-cream-dark)] bg-white px-4 text-base font-normal outline-none focus:border-[var(--color-leaf)]"
          defaultValue="オンラインヨガ"
        >
          {inquiryTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-base font-bold text-stone-800">
        メッセージ
        <textarea
          required
          name="message"
          rows={7}
          className="rounded-2xl border border-[var(--color-cream-dark)] bg-white px-4 py-3 text-base font-normal leading-8 outline-none focus:border-[var(--color-leaf)]"
        />
      </label>
      <Button type="submit" className="w-full sm:w-auto">
        送信内容を確認する
      </Button>
    </form>
  );
}
