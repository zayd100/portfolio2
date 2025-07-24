export function TestiSkeleton() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="h-[200px] animate-pulse bg-muted rounded-lg border-2 border-border/50 p-8">
        <div className="flex items-start gap-6 h-full">
          {/* Profile image skeleton */}
          <div className="w-20 h-20 bg-muted-foreground/20 rounded-full flex-shrink-0" />
          
          {/* Content skeleton */}
          <div className="flex-1 space-y-4">
            {/* Name skeleton */}
            <div className="h-6 bg-muted-foreground/20 rounded w-48" />
            
            {/* Testimonial text skeleton */}
            <div className="space-y-3">
              <div className="h-4 bg-muted-foreground/20 rounded w-full" />
              <div className="h-4 bg-muted-foreground/20 rounded w-full" />
              <div className="h-4 bg-muted-foreground/20 rounded w-3/4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}