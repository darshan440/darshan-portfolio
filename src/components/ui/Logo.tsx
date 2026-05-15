import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  withText?: boolean;
}

export function Logo({ className, size = "md", withText = true, ...props }: LogoProps) {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-10 w-10",
    lg: "h-16 w-16",
    xl: "h-24 w-24",
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl",
    xl: "text-6xl",
  };

  return (
    <div className={cn("flex items-center gap-3 group", className)} {...props}>
      {withText && (
        <span className={cn("font-black tracking-tighter hidden sm:inline-block uppercase", textSizeClasses[size])}>
          <span className="text-foreground transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-muted-foreground">
            Darshan
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-primary to-secondary ml-0.5 mr-0.5">
            .
          </span>
          <span className="text-foreground transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-muted-foreground">
            dev
          </span>
        </span>
      )}
    </div>
  );
}
