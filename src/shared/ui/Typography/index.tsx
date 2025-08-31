import type { ReactNode } from "react";

import { cn } from "@/shared/lib/utils";

type TypographyProps = {
  children: ReactNode;
  className?: string;
};

export const TypographyH1: React.FC<TypographyProps> = ({
  children,
  className,
}) => {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl md:text-6xl font-extrabold tracking-tight text-balance",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const TypographyH2: React.FC<TypographyProps> = ({
  children,
  className,
}) => {
  return (
    <h2
      className={cn(
        "scroll-m-20 mb-4 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  );
};

export const TypographyH3: React.FC<TypographyProps> = ({
  children,
  className,
}) => {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const TypographyP: React.FC<TypographyProps> = ({
  children,
  className,
}) => {
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-2", className)}>
      {children}
    </p>
  );
};

export const TypographyLead: React.FC<TypographyProps> = ({
  children,
  className,
}) => {
  return (
    <p className={cn("text-muted-foreground text-xl text-justify", className)}>
      {children}
    </p>
  );
};
