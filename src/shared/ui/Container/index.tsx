import { cn } from "@/shared/lib/utils";
import type { ReactNode } from "react";

interface ContainerProps {
  className?: string;
  children: ReactNode;
  id?: string;
}

export const Container: React.FC<ContainerProps> = ({
  className,
  children,
  id,
}) => {
  return (
    <div
      id={id}
      className={cn("w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", className)}
    >
      {children}
    </div>
  );
};
