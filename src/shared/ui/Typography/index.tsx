import type { PropsWithChildren } from "react";

export const TypographyH1: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
      {children}
    </h1>
  );
};

export const TypographyH2: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
};

export const TypographyP: React.FC<PropsWithChildren> = ({ children }) => {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
};
