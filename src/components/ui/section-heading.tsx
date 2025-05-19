
import { AnimatedText } from "@/components/ui/animated-text";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  subtitleClassName?: string;
  showGradient?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  centered = false,
  className,
  subtitleClassName,
  showGradient = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4 mb-10", centered && "text-center", className)}>
      <AnimatedText
        text={title}
        className={cn(
          "text-3xl md:text-4xl font-bold tracking-tight",
          showGradient && "gradient-text"
        )}
      />
      {subtitle && (
        <p className={cn("text-lg text-muted-foreground", subtitleClassName)}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
