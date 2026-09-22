import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales, type Locale } from "@/lib/i18n/config";

const COOKIE_NAME = "NEXT_LOCALE";

function detectFromAcceptLanguage(header: string | null): Locale {
  if (!header) return defaultLocale;
  const preferred = header
    .split(",")
    .map((part) => part.split(";")[0].trim().toLowerCase())
    .find((lang) => lang.startsWith("en") || lang.startsWith("uk"));
  if (preferred?.startsWith("en")) return "en";
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // /uk or /uk/... is not a canonical URL (uk is served unprefixed) —
  // redirect to the clean path so there's only ever one URL per page.
  if (pathname === "/uk" || pathname.startsWith("/uk/")) {
    const stripped = pathname.replace(/^\/uk/, "") || "/";
    const url = request.nextUrl.clone();
    url.pathname = stripped;
    return NextResponse.redirect(url);
  }

  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  if (isEnglish) {
    const response = NextResponse.next();
    response.cookies.set(COOKIE_NAME, "en", { path: "/", maxAge: 60 * 60 * 24 * 365 });
    return response;
  }

  // No /en prefix: this is a uk-routed path. Decide whether the visitor
  // should actually land on uk (rewrite, URL stays clean) or be sent to
  // /en (redirect), based on their saved preference or browser language.
  const cookieLocale = request.cookies.get(COOKIE_NAME)?.value;
  const locale: Locale =
    cookieLocale && (locales as readonly string[]).includes(cookieLocale)
      ? (cookieLocale as Locale)
      : detectFromAcceptLanguage(request.headers.get("accept-language"));

  if (locale === "en") {
    const url = request.nextUrl.clone();
    url.pathname = `/en${pathname}`;
    return NextResponse.redirect(url);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/uk${pathname}`;
  const response = NextResponse.rewrite(url);
  if (!cookieLocale) {
    response.cookies.set(COOKIE_NAME, "uk", { path: "/", maxAge: 60 * 60 * 24 * 365 });
  }
  return response;
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
