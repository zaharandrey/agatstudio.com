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

export default function Home() {
  return (
    <>
      <Hero />
      <BrandStatement />
      <Pillars />
      <Showcase />
      <AgatSystem />
      <Process compact />
      <Portfolio limit={4} />
      <LabPreview />
      <Tools />
      <WebsiteCare />
      <ProjectBrief />
      <FinalCTA />
    </>
  );
}
