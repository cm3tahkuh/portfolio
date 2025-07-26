import { TypographyH1 } from "@/shared/ui";
import { motion } from "motion/react";

export const Page404: React.FC = () => {
  return (
    <motion.section
      whileInView={{ y: 0 ,opacity:1}}
      initial={{ y: -50, opacity:0 }}
      transition={{ duration: 1.2, ease:"easeInOut" }}
      className="h-[100vh] flex items-center justify-center"
    >
      <TypographyH1>Произошла ошибка! :(</TypographyH1>
    </motion.section>
  );
};
