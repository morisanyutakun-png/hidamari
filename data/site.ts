export const siteConfig = {
  name: "ひだまりのヨガ",
  tagline: "ひだまりのような温もりで\nずっと健やか！もっと笑顔に！",
  description:
    "三重県津市・久居エリアとオンラインで楽しめる、シニア・初心者にも安心のやさしいヨガ教室。",
  url: "https://hidamari-yoga.example.com",
  email: "TODO@example.com",
  privateLessonReservationUrl: "/contact",
  saturdayLessonReservationUrl: "/contact",
  rakutenSeniorReservationUrl: "/contact",
  googleFormSeniorYogaUrl: "/contact",
  googleFormOfficeYogaUrl: "/contact",
  instagramUrl: "https://www.instagram.com/",
  lineUrl: "https://line.me/",
  noteUrl: "https://note.com/",
};

export const navigation = [
  { label: "レッスン内容", href: "/lessons" },
  { label: "おうちヨガ", href: "/online-yoga" },
  { label: "地域・出張ヨガ", href: "/local-yoga" },
  { label: "インストラクター", href: "/instructor" },
  { label: "お問い合わせ", href: "/contact" },
];

export const footerMainLinks = [
  { label: "トップ", href: "/" },
  { label: "レッスン内容・料金", href: "/lessons" },
  { label: "おうちで楽しむヨガ", href: "/online-yoga" },
  { label: "地域で楽しむヨガ", href: "/local-yoga" },
  { label: "土曜日の朝ヨガ", href: "/saturday-morning-yoga" },
  { label: "楽天シニアイベントレッスン", href: "/rakuten-senior" },
  { label: "インストラクター紹介", href: "/instructor" },
  { label: "簡単ヨガ動画", href: "/videos" },
  { label: "ひだまりブログ", href: "/blog" },
  { label: "お問い合わせ", href: "/contact" },
];

export const footerSubLinks = [
  { label: "レッスンにあたっての同意事項", href: "/agreement" },
  { label: "プライバシーポリシー", href: "/privacy" },
  { label: "特定商取引法に基づく表記", href: "/legal" },
];

export const externalLinks = [
  { label: "note", href: siteConfig.noteUrl },
  { label: "Instagram", href: siteConfig.instagramUrl },
  { label: "公式LINE", href: siteConfig.lineUrl },
];

export const qualifications = [
  "全米ヨガアライアンス RYT500",
  "HYT（SOELU campus）",
  "シニアヨガインストラクター",
  "チェアヨガインストラクター",
  "IYCラジヨガ講師",
  "ヨガ安全指導員",
];

export const lessons = [
  {
    title: "ひだまりプライベートレッスン",
    href: "/online-yoga",
    schedule: "水曜日夜",
    duration: "30分",
    price: "1,100円",
    format: "オンライン",
    audience: "初心者・自分のペースで続けたい方",
    summary: "マンツーマンで、体調や目的に合わせて無理なく進めます。",
    tags: ["オンライン", "マンツーマン", "初心者にも安心"],
  },
  {
    title: "金曜朝のラジヨガ体操",
    href: "/online-yoga",
    schedule: "金曜日 朝7:00-7:15",
    duration: "15分",
    price: "300円",
    format: "オンライン",
    audience: "朝の習慣をつくりたい方",
    summary: "短い時間でやさしく体を動かし、健やかな一日の始まりを目指します。",
    tags: ["オンライン", "朝の習慣", "15分"],
  },
  {
    title: "やさしい夜ヨガ",
    href: "/online-yoga",
    schedule: "金曜日 夜8:00-8:15",
    duration: "15分",
    price: "300円",
    format: "オンライン",
    audience: "一日の終わりにゆるめたい方",
    summary: "ゆったり呼吸しながら、心と体を落ち着ける時間です。",
    tags: ["オンライン", "夜ヨガ", "15分"],
  },
  {
    title: "土曜日の朝ヨガ",
    href: "/saturday-morning-yoga",
    schedule: "土曜日 10:00-",
    duration: "約1時間",
    price: "2,000円（初回1,000円）",
    format: "津市久居アルスプラザ",
    audience: "初心者・シニア・久居周辺の方",
    summary: "対面で安心して参加できる、やさしい朝のヨガ時間です。",
    tags: ["対面レッスン", "津市久居", "初回1,000円"],
  },
  {
    title: "出張チェアヨガ",
    href: "/local-yoga",
    schedule: "15-45分程度で調整",
    duration: "相談",
    price: "内容・人数により相談",
    format: "施設・地域サロン・企業など",
    audience: "高齢者施設・公民館・企業向け",
    summary: "椅子に座ったままできる内容を中心に、場に合わせてお届けします。",
    tags: ["出張ヨガ", "チェアヨガ", "内容相談"],
  },
];

export const news = [
  { date: "2025/11/16", title: "noteを始めました" },
  {
    date: "2025/07/15",
    title: "椅子に座ったままできる「お疲れリセットヨガ」動画を投稿しました",
  },
];

export const cta = {
  title: "まずはお気軽にご相談ください",
  body: "オンラインヨガ、対面ヨガ、出張ヨガなど、目的や体力に合わせてご相談いただけます。初めての方も、どうぞ安心してお問い合わせください。",
};

export const blogPosts = [
  {
    date: "2025/11/16",
    title: "シニア世代がヨガを始めるときに大切にしたいこと",
    description:
      "無理なく、安全に、気持ちよく続けるための考え方をまとめました。",
    category: "シニアヨガ",
  },
  {
    date: "2025/07/15",
    title: "椅子に座ったままできる、やさしいリセット時間",
    description:
      "体力に自信がない方にも取り入れやすいチェアヨガの楽しみ方です。",
    category: "チェアヨガ",
  },
  {
    date: "2025/05/20",
    title: "オンラインヨガを続けやすくする小さな工夫",
    description:
      "ご自宅で落ち着いて参加するための準備や環境づくりをご紹介します。",
    category: "オンラインヨガ",
  },
];

export const videos = [
  {
    title: "椅子に座ったままできる お疲れリセットヨガ",
    description:
      "肩まわりや呼吸をやさしく整える、短時間のチェアヨガです。",
    target: "シニア・初心者",
    duration: "約10分",
    href: "https://www.youtube.com/",
  },
  {
    title: "朝におすすめのやさしいラジヨガ体操",
    description:
      "一日の始まりに取り入れやすい、無理のない体操です。",
    target: "朝の習慣をつくりたい方",
    duration: "約5分",
    href: "https://www.youtube.com/",
  },
  {
    title: "寝る前のゆったり呼吸ヨガ",
    description:
      "夜の静かな時間に、呼吸と一緒に心と体をゆるめます。",
    target: "夜に落ち着きたい方",
    duration: "約8分",
    href: "https://www.youtube.com/",
  },
];
