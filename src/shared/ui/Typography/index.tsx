import type { PropsWithChildren } from "react";

export const TypographyH1: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
      {children}
    </h1>
  );
};
