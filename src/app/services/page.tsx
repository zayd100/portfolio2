import BlurFade from "@/components/magicui/blur-fade";
import dynamic from "next/dynamic";
import { DATA } from "@/data/resume";
import { ProjectSkeleton } from "@/components/skeletons/project-skeleton";
import { ServicesSkeleton } from "@/components/skeletons/services-skeleton";

import { BorderBeam } from "@/components/magicui/border-beam";

export const metadata = {
  title: "Projects",
  description: "Check out my latest projects and experiments.",
};

const BLUR_FADE_DELAY = 0.04;

const ServicesCard = dynamic(() => import("@/components/services-card").then(mod => mod.ServicesCard), {
  loading: () => <ServicesSkeleton />
});

export default function ServicesPage() {
  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">Services I provide</h1>
      </BlurFade>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {DATA.services.map((service, id) => (
          <BlurFade key={service.title} delay={BLUR_FADE_DELAY * 2 + id * 0.05}>
            <div className="relative overflow-hidden rounded-xl">
              <BorderBeam
                duration={4}
                size={300}
                reverse
                className="from-transparent via-purple-500 to-transparent"
              />
              <ServicesCard {...service} />
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
