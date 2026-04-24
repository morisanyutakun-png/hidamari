import { NextResponse, type NextRequest } from "next/server";

const redirects = new Map([
  ["/レッスン内容-レッスン料金", "/lessons"],
  ["/おうちで楽しむヨガ", "/online-yoga"],
  ["/地域で楽しむヨガ", "/local-yoga"],
  ["/お問い合わせ", "/contact"],
  ["/インストラクター", "/instructor"],
  ["/土曜日の朝ヨガ", "/saturday-morning-yoga"],
  ["/楽天シニアイベントレッスン", "/rakuten-senior"],
]);

export function proxy(request: NextRequest) {
  const pathname = decodeURIComponent(request.nextUrl.pathname).replace(/\/$/, "");
  const destination = redirects.get(pathname);

  if (!destination) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL(destination, request.url), 308);
}

export const config = {
  matcher: [
    "/レッスン内容-レッスン料金/:path*",
    "/おうちで楽しむヨガ/:path*",
    "/地域で楽しむヨガ/:path*",
    "/お問い合わせ/:path*",
    "/インストラクター/:path*",
    "/土曜日の朝ヨガ/:path*",
    "/楽天シニアイベントレッスン/:path*",
  ],
};
