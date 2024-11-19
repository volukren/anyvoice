import { FC } from "react";

interface LoadingDotsProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: "w-1.5 h-1.5",
  md: "w-2.5 h-2.5",
  lg: "w-4 h-4",
};

const gaps = {
  sm: "gap-1",
  md: "gap-2",
  lg: "gap-3",
};

export const LoadingDots: FC<LoadingDotsProps> = ({
  size = "md",
  className = "",
}) => {
  return (
    <div className={`flex ${gaps[size]} ${className}`}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`${sizes[size]} bg-primary rounded-full animate-bounce`}
          style={{
            animationDelay: `${i * 0.15}s`,
            animationDuration: "0.6s",
          }}
        />
      ))}
    </div>
  );
};
