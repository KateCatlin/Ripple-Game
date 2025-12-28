import { cn } from "@/lib/utils";

interface EventCardProps {
  event: string;
  isNew?: boolean;
}

export const EventCard = ({ event, isNew = false }: EventCardProps) => {
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-2xl p-6 mb-6",
        "bg-gradient-to-br from-primary to-secondary text-primary-foreground",
        "shadow-xl",
        isNew && "animate-float-up"
      )}
    >
      {/* Ripple decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl animate-wave">🌊</span>
          <span className="text-sm font-medium opacity-80 uppercase tracking-wide">Starting Ripple</span>
        </div>
        <p className="text-lg md:text-xl font-display leading-relaxed">
          {event}
        </p>
      </div>
    </div>
  );
};
