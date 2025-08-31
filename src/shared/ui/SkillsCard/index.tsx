import type { ReactNode } from "react";
import { Card, CardContent, CardTitle } from "../Card/card";
import { motion } from "motion/react";

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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <Card className="h-full border-2 bg-card-foreground dark:bg-card flex flex-col items-center justify-center text-center p-4">
        <CardContent className="flex flex-col items-center justify-center flex-1">
          <img src={image} alt={image} className="w-[200px] h-auto mb-4" />
          <CardTitle className="text-secondary">{children}</CardTitle>
        </CardContent>
      </Card>
    </motion.div>
  );
};
