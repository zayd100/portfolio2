import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { BorderBeam } from "@/components/magicui/border-beam";

interface Props {
  title: string;
  headline?: string;
  href?: string;
  description: string;
  tags?: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function TestiCard({
  title,
  headline,
  href,
  description,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <Card className={cn("flex flex-col overflow-hidden border-2 border-border/50 hover:shadow-xl transition-all duration-300 ease-out h-full relative group bg-gradient-to-br from-card via-card to-muted/20", className)}>
      
      <CardHeader className="px-8 pt-8 pb-6">
        <div className="flex items-start gap-6">
          {image && (
            <div className="flex-shrink-0">
              <Image
                src={image}
                alt={title}
                width={80}
                height={80}
                className="w-20 h-20 rounded-full object-cover ring-2 ring-primary/20"
              />
            </div>
          )}
          <div className="flex-1 space-y-4">
            <div>
              <CardTitle className="text-xl font-bold text-foreground mb-1">
                {title}
              </CardTitle>
              {headline && (
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                  {headline}
                </p>
              )}
            </div>
            
            <div className="relative">
              <div className="absolute -left-4 -top-2 text-5xl text-primary/20 font-serif leading-none">
                "
              </div>
              <Markdown className="prose max-w-full text-pretty font-sans text-base text-muted-foreground dark:prose-invert pl-8 pr-8 leading-relaxed">
                {description}
              </Markdown>
              <div className="absolute -right-4 -bottom-2 text-5xl text-primary/20 font-serif leading-none rotate-180">
                "
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <BorderBeam
        duration={8}
        size={200}
        className="from-transparent via-primary/30 to-transparent opacity-40"
      />
    </Card>
  );
}