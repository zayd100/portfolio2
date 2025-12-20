import dynamic from 'next/dynamic';
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { VideoCard } from "@/components/video-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { PersonSchema } from "@/components/schema/person-schema";
import { Metadata } from 'next';
import { Icons } from "@/components/icons";
import ShinyButton from "@/components/ui/shiny-button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { SocialIconLink } from "@/components/social-icon-link";
import { GithubSkeleton } from "@/components/skeletons/github-skeleton";
import { ProjectSkeleton } from "@/components/skeletons/project-skeleton";
import { HackathonSkeleton } from "@/components/skeletons/hackathon-skeleton";
import { BorderBeam } from "@/components/magicui/border-beam";
import { GhibliSkyBackground } from "@/components/ghibli-elements";
import DonatePopup from './donate/page';
import { TestiCard } from '@/components/testi-card';
import ServicesPage from './services/page';
import { ServicesSkeleton } from '@/components/skeletons/services-skeleton';
import { ServicesCard } from '@/components/services-card';
import { TestiSkeleton } from '@/components/skeletons/testi-skeleton';
const BLUR_FADE_DELAY = 0.04;
export const metadata: Metadata = {
  title: DATA.name,
  description: DATA.summary,
  openGraph: {
    title: DATA.name,
    description: DATA.summary,
    url: DATA.url,
    siteName: DATA.name,

    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: DATA.name,
    description: DATA.summary,
    creator: '@' + 'Star_Knight12',
    images: [''],
  },
};


const GithubContributions = dynamic(() => import("@/components/github-calendar").then(mod => mod.GithubContributions), {
  ssr: false,
  loading: () => <GithubSkeleton />
});

const ProjectCardDynamic = dynamic(() => import("@/components/project-card").then(mod => mod.ProjectCard), {
  ssr: true,
  loading: () => <ProjectSkeleton />
});

const HackathonCardDynamic = dynamic(() => import("@/components/hackathon-card").then(mod => mod.HackathonCard), {
  ssr: true,
  loading: () => <HackathonSkeleton />
});

export default function Page() {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <GhibliSkyBackground />
      </div>
      
      <main className="flex flex-col min-h-[100dvh] space-y-10">
        <PersonSchema />
        <section id="hero">
  <div className="mx-auto w-full max-w-4xl space-y-8">
    <div className="gap-8 flex justify-between items-center">
      <div className="flex-col flex flex-1 space-y-2">
        <BlurFadeText
          delay={BLUR_FADE_DELAY}
          className="text-2xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
          yOffset={8}
          text={`${DATA.name.split(" ")[0]} Chaudhary `}
        />
          <BlurFadeText
            className="max-w-[700px] md:text-xl text-muted-foreground whitespace-pre-line"
            delay={BLUR_FADE_DELAY}
            text={DATA.description}
          />
      </div>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="profile-wrapper flex-shrink-0">
          <Avatar className="size-40 relative z-10 ring-4 ring-background shadow-2xl">
            <AvatarImage
              alt={DATA.name}
              src={DATA.avatarUrl}
              width={160}
              height={160}
              loading="eager"
              className="object-cover"
            />
            <AvatarFallback className="text-2xl font-semibold">{DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
      </BlurFade>
    </div>
  </div>
</section>

<section id="about">
  <div className="mx-auto w-full max-w-4xl">
    <BlurFade delay={BLUR_FADE_DELAY * 3}>
      <h2 className="text-2xl font-bold mb-4">About</h2>
    </BlurFade>
    <BlurFade delay={BLUR_FADE_DELAY * 4}>
      <Markdown className="prose max-w-full text-pretty font-sans text-base text-muted-foreground dark:prose-invert">
        {DATA.summary}
      </Markdown>
    </BlurFade>
  </div>
</section>

        <section id="connect">
          <BlurFade delay={BLUR_FADE_DELAY * 4.5}>
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Let's Connect</h2>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
                {Object.entries(DATA.contact.social).map(([name, social], idx) => (
                  <SocialIconLink
                    key={name}
                    name={name}
                    url={social.url}
                    icon={<social.icon />}
                    delay={BLUR_FADE_DELAY * 5 + idx * 0.05}
                  />
                ))}
              </div>
            </div>
          </BlurFade>
        </section>

        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge key={skill}>{skill}</Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        <section id="contributions">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <h2 className="text-xl font-bold">GitHub Contributions</h2>
            <GithubContributions />
          </BlurFade>
        </section>

        <section id="projects">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold">Featured Projects</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 8}>
              <div className="grid gap-4 sm:grid-cols-2">
                {DATA.projects.slice(0, 4).map((project) => (
                  <div key={project.title} className="relative overflow-hidden rounded-xl">
                    <ProjectCard
                      {...project}
                      tags={Array.from(project.technologies)}
                    />
                  </div>
                ))}
              </div>
              <Link
                href="/projects"
                className="mt-4 block"
              >
                <ShinyButton
                  className="w-full sm:w-auto group transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] font-semibold"
                >
                  View All Projects →
                </ShinyButton>
              </Link>
            </BlurFade>
          </div>
        </section>


       

        <section id="hackathons">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Research & Writing
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                   Technical Writing & Documentation
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                   I have done research which covers breakthrough technologies like spatial audio and blockchain, where I've created comprehensive knowledge infrastructures for innovative startups. I'm passionate about political science research in my free time.
                  </p>
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                {DATA.hackathons.map((project, id) => (
                  <BlurFade
                    key={project.title + project.dates}
                    delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                  >
                    <HackathonCardDynamic
                      title={project.title}
                      description={project.description}
                      location={project.location}
                      dates={project.dates}
                      image={project.image}
                      links={project.links}
                    />
                  </BlurFade>
                ))}
              </ul>
            </BlurFade>
          </div>
        </section>
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
  {/* Background decoration */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 dark:from-blue-950/10 dark:via-gray-900 dark:to-purple-950/10" />
  <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
  <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
  
  <div className="max-w-6xl mx-auto relative">
    <div className="flex min-h-0 flex-col gap-y-12">
      <BlurFade delay={BLUR_FADE_DELAY * 9}>
        <div className="text-center space-y-6">
         
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
              Services I Offer
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Scalable solutions that drive real results for forward-thinking entrepreneurs.
          </p>
        </div>
      </BlurFade>
      
      <BlurFade delay={BLUR_FADE_DELAY * 10}>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {DATA.services.slice(0, 4).map((service, index) => (
            <div 
              key={service.title} 
              className="group relative"
            >
              {/* Glowing background */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-700 group-hover:duration-300 animate-gradient-x" />
              
              {/* Card container */}
              <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-800/50 overflow-hidden transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10 p-8">
                  <ServicesCard {...service} />
                </div>
                
                {/* Bottom shine effect */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-16">
          <Link
            href="/services"
            className="group relative inline-flex items-center justify-center"
          >
            {/* Glowing background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-700 group-hover:duration-300 animate-pulse" />
            
            {/* Button */}
            <div className="relative flex items-center gap-3 px-10 py-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl font-semibold text-gray-900 dark:text-white transition-all duration-300 group-hover:scale-105 group-hover:bg-gray-50 dark:group-hover:bg-gray-800 shadow-lg group-hover:shadow-xl">
              <span>Explore All Services</span>
              <div className="flex items-center justify-center w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-transform duration-300 group-hover:translate-x-1">
                <svg 
                  className="w-3 h-3 text-white" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </BlurFade>
    </div>
  </div>
</section>
<section id="testimonials">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    Testimonials
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    What People Say
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Feedback from clients and collaborators I've had the pleasure of working with.
                  </p>
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 12}>
              <div className="space-y-6">
                {DATA.testimonials.slice(0, 3).map((testimonial, id) => (
                  <BlurFade
                    key={testimonial.name}
                    delay={BLUR_FADE_DELAY * 13 + id * 0.05}
                  >
                    <div className="w-full max-w-4xl mx-auto">
                      <TestiCard
                        title={testimonial.name}
                        headline={testimonial.headline}
                        image={testimonial.image}
                        description={testimonial.description}
                        href="#"
                      />
                    </div>
                  </BlurFade>
                ))}
              </div>
              <BlurFade delay={BLUR_FADE_DELAY * 14}>
                <div className="flex justify-center mt-8">
                  <Link href="/testimonials">
                    <ShinyButton
                      className="w-full sm:w-auto group transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] font-semibold"
                    >
                      View All Testimonials →
                    </ShinyButton>
                  </Link>
                </div>
              </BlurFade>
            </BlurFade>
          </div>
        </section>
            <section id="contact">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Contact</h2>
              
              <p className="text-muted-foreground">
                Always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
              </p>
              
              <div className="mt-6 space-y-4">
                <a
                  href="mailto:zaidshabbir666@gmail.com"
                  className="flex items-center gap-2 underline underline-offset-4 hover:opacity-70 transition-opacity"
                >
                  <Icons.email className="size-4" />
                  zaidshabbir666@gmail.com
                </a>

                
              </div>
            </div>
          </BlurFade>
          </section>
          <br/>
             <br/>
                <br/>
                   <br/>
                      <br/>
<section id="calendar">
  <BlurFade delay={BLUR_FADE_DELAY * 18}>
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Book a Call</h2>
      <p className="text-muted-foreground">
        Schedule a free consultation
      </p>
      <a
        href="https://calendly.com/zaidshabbir/free-consultancy"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 mt-4 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
      >
        Book via Calendly
      </a>
    </div>
  </BlurFade>
</section>

<section id="donate">
  <BlurFade delay={BLUR_FADE_DELAY * 17}>
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Support</h2>
      <p className="text-muted-foreground">
        Your support helps me continue building amazing projects.
      </p>
      <div className="mt-6 space-y-4">
        <DonatePopup />
      </div>
    </div>
  </BlurFade>

  <br/>
   <br/>
    <br/>
     <br/>
      <br/>
       <br/>
</section>
        <footer className="mt-20 border-t py-8">
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-sm text-muted-foreground space-y-2">
                  <p>© {new Date().getFullYear()} {DATA.name}. All rights reserved.</p>
                  <p>
            
                  </p>
                </div>
         
              </div>
            </div>
          </BlurFade>
        </footer>
      </main>
    </>
  );
}
