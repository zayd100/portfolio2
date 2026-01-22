import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import { TestiCard } from "@/components/testi-card";
import { Metadata } from "next";

const BLUR_FADE_DELAY = 0.04;

export const metadata: Metadata = {
  title: "Testimonials",
  description: "What clients and collaborators say about working with me.",
};

export default function TestimonialsPage() {
  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">Testimonials</h1>
      </BlurFade>
      
      <div className="space-y-6">
        {DATA.testimonials.map((testimonial, id) => (
          <BlurFade
            key={testimonial.name}
            delay={BLUR_FADE_DELAY * 2 + id * 0.05}
          >
            <div className="w-full max-w-4xl mx-auto">
              <TestiCard
                title={testimonial.name}
                headline={testimonial.headline}
                image={testimonial.image}
                description={testimonial.description}
                  linkedin={testimonial.linkedin} 
              />
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}