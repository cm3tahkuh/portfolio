import type { ReactNode } from "react";
import { Card, CardContent, CardTitle } from "../Card/card";

interface SkillsCardProps {
  children: ReactNode;
  image: string;
}

/*
 <article className="rounded-2xl p-4 bg-foreground text-background text-4xl flex flex-col gap-4 justify-center items-center">
      <img src={image} alt={image} className="max-w-[185px] max-h-[185px]" />
      {children}
    </article>
*/

export const SkillsCard: React.FC<SkillsCardProps> = ({ children, image }) => {
  return (
    <Card className="border-2 text-center bg-card-foreground dark:bg-card">
      <CardContent>
        <img src={image} alt={image} className="mx-auto" />
      </CardContent>
      <CardTitle className="text-secondary">{children}</CardTitle>
    </Card>
  )
};
