import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { BorderBeam } from "@/components/magicui/border-beam";

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  image?: string;
  className?: string;
}

export function ServicesCard({ 
  title, 
  price, 
  description, 
  image,
  className 
}: ServiceCardProps) {
  return (
    <Card className={cn(
      "flex flex-col overflow-hidden border-2 border-border/50 hover:shadow-xl transition-all duration-300 ease-out h-full relative group",
      "bg-gradient-to-br from-card via-card to-muted/20",
      className
    )}>
      {image && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
        </div>
      )}
      
      <CardHeader className="px-4 sm:px-6 pt-6 pb-3">
        <div className="flex items-start justify-between gap-3 mb-2">
          <CardTitle className="text-lg sm:text-xl font-bold text-foreground leading-tight">
            {title}
          </CardTitle>
          <Badge 
            variant="secondary" 
            className="flex-shrink-0 bg-primary/10 text-primary border border-primary/20 font-semibold px-2 sm:px-3 py-1 text-xs sm:text-sm"
          >
            {price}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="px-4 sm:px-6 pb-6 flex-1">
        <CardDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
      
      <BorderBeam
        duration={8}
        size={200}
        className="from-transparent via-primary/30 to-transparent opacity-40"
      />
    </Card>
  );
}