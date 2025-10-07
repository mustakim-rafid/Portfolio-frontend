import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="p-10 max-w-5xl mx-auto space-y-8 pt-20">
      <div className="space-y-2">
        <Skeleton className="h-8 w-1/3" />
      </div>

      <div className="flex space-x-4">
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-10 w-24" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-32 w-full rounded-lg" />
        ))}
      </div>
      
      <Skeleton className="h-40 w-full rounded-md" />
    </div>
  );
}
