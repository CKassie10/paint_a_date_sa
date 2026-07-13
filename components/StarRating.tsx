import { Star } from "lucide-react";

export default function StarRating({ rating = 5, className = "" }: { rating?: number; className?: string }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-blush text-blush" : "fill-transparent text-blush/30"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
