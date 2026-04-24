import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/レッスン内容-レッスン料金/",
        destination: "/lessons",
        permanent: true,
      },
      {
        source: "/レッスン内容-レッスン料金",
        destination: "/lessons",
        permanent: true,
      },
      {
        source: "/おうちで楽しむヨガ/",
        destination: "/online-yoga",
        permanent: true,
      },
      {
        source: "/おうちで楽しむヨガ",
        destination: "/online-yoga",
        permanent: true,
      },
      {
        source: "/地域で楽しむヨガ/",
        destination: "/local-yoga",
        permanent: true,
      },
      {
        source: "/地域で楽しむヨガ",
        destination: "/local-yoga",
        permanent: true,
      },
      {
        source: "/お問い合わせ/",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/お問い合わせ",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/インストラクター/",
        destination: "/instructor",
        permanent: true,
      },
      {
        source: "/インストラクター",
        destination: "/instructor",
        permanent: true,
      },
      {
        source: "/土曜日の朝ヨガ/",
        destination: "/saturday-morning-yoga",
        permanent: true,
      },
      {
        source: "/土曜日の朝ヨガ",
        destination: "/saturday-morning-yoga",
        permanent: true,
      },
      {
        source: "/楽天シニアイベントレッスン/",
        destination: "/rakuten-senior",
        permanent: true,
      },
      {
        source: "/楽天シニアイベントレッスン",
        destination: "/rakuten-senior",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
