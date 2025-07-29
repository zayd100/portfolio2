import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  image?: string;
}

export function ServicesCard({ title, price, description, image }: ServiceCardProps) {
  return (
    <Card className="h-full border-0 bg-transparent shadow-none group">
      {image && (
        <div className="relative h-40 w-full overflow-hidden rounded-xl mb-6">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>
      )}
      <CardHeader className="pb-4 px-0">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
            {title}
          </CardTitle>
          <Badge 
            variant="secondary" 
            className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-800 dark:text-blue-200 border-0 font-semibold whitespace-nowrap px-3 py-1 text-sm"
          >
            {price}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="px-0 pt-0">
        <CardDescription className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}