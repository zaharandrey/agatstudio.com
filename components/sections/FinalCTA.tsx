import MagneticButton from "@/components/MagneticButton";
import Reveal from "@/components/Reveal";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

export default function FinalCTA({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="theme-dark panel-dark relative mb-3 mt-16 overflow-hidden lg:mb-5 lg:mt-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,_rgba(255,90,41,0.16),_transparent_60%)]" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10 lg:py-32">
        <Reveal>
          <h2 className="text-balance font-display text-5xl font-semibold tracking-tight text-fg sm:text-6xl lg:text-7xl">
            {dict.finalCta.title1}
            <br />
            <span className="text-accent">{dict.finalCta.title2}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 flex justify-center">
            <MagneticButton href={localizeHref(locale, "/contact")}>{dict.finalCta.cta}</MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
