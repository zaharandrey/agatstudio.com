import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import Hero from "@/components/sections/Hero";
import BrandStatement from "@/components/sections/BrandStatement";
import Pillars from "@/components/sections/Pillars";
import Showcase from "@/components/sections/Showcase";
import AgatSystem from "@/components/sections/AgatSystem";
import Process from "@/components/sections/Process";
import Portfolio from "@/components/sections/Portfolio";
import LabPreview from "@/components/sections/LabPreview";
import Tools from "@/components/sections/Tools";
import WebsiteCare from "@/components/sections/WebsiteCare";
import ProjectBrief from "@/components/sections/ProjectBrief";
import FinalCTA from "@/components/sections/FinalCTA";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <BrandStatement dict={dict} />
      <Pillars locale={locale} dict={dict} />
      <Showcase dict={dict} />
      <AgatSystem dict={dict} />
      <Process dict={dict} compact />
      <Portfolio locale={locale} dict={dict} limit={4} />
      <LabPreview locale={locale} dict={dict} />
      <Tools dict={dict} />
      <WebsiteCare locale={locale} dict={dict} />
      <ProjectBrief dict={dict} />
      <FinalCTA locale={locale} dict={dict} />
    </>
  );
}
