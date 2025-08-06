import type { ReactNode } from "react";

interface SkillsCardProps {
  children: ReactNode;
  image: string;
}

export const SkillsCard: React.FC<SkillsCardProps> = ({ children, image }) => {
  return (
    <article className="rounded-2xl bg-foreground text-background">
      <img src={image} alt={image} className="sepia invert"/>
      {children}
    </article>
  );
};
