import MagneticButton from "@/components/MagneticButton";
import Reveal from "@/components/Reveal";

export default function FinalCTA() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10 lg:py-32">
        <Reveal>
          <h2 className="text-balance font-display text-5xl font-semibold tracking-tight text-fg sm:text-6xl lg:text-7xl">
            Have an idea?
            <br />
            <span className="text-accent">Let&apos;s build the system.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 flex justify-center">
            <MagneticButton href="/contact">Start a project</MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
