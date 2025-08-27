import {
  Container,
  DecryptedText,
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "@/shared/ui";
import { Card, CardContent } from "@/shared/ui/Card/card";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export const Projects: React.FC = () => {
  return (
    <Container id="projects" className="scroll-mt-[100px]">
      <DecryptedText
        text={<TypographyH2>Мои проекты</TypographyH2>}
        animateOn="view"
        revealDirection="start"
        speed={100}
        maxIterations={1}
        sequential={true}
      />

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="grid gap-6 md:grid-cols-2"
      >
        <Card className="overflow-hidden rounded-2xl py-0 border-2 shadow-lg hover:shadow-xl transition-shadow">
          <img
            src="https://i.ibb.co/vxwWKY37/image.png"
            alt="ToDo App preview"
            className="w-full h-[205px] object-cover"
          />
          <CardContent className="p-4 py-2">
            <TypographyH3 className="text-lg font-semibold mb-2">
              Сайт для лагеря "Лесная застава"
            </TypographyH3>
            <TypographyP className="mb-6">
              Адаптивный сайт с информацией о сменах, программах, галереей.
              Сделан на React, TypeScript и Tailwind CSS.
            </TypographyP>
            <div className="flex items-center mb-2 justify-between text-sm font-medium">
              <a
                href="https://github.com/cm3tahkuh/"
                target="_blank"
                className="hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://test.lzastava.com"
                target="_blank"
                className="flex items-center gap-1 hover:underline"
              >
                Демо <ArrowRight size={14} />
              </a>
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden rounded-2xl py-0 border-2 shadow-lg hover:shadow-xl transition-shadow">
          <img
            src="https://i.ibb.co/8Dk1yW60/image.png"
            alt="ToDo App preview"
            className="w-full h-[205px] object-cover"
          />
          <CardContent className="p-4 py-2 h-full flex flex-col justify-between">
            <div>
              <TypographyH3 className="text-lg font-semibold mb-2">
                "Игры Будущего"
              </TypographyH3>
              <TypographyP className="mb-6">
                Платформа для проведения фиджитал-соревнований в учебных
                заведениях.
              </TypographyP>
            </div>
            <div className="flex items-center mb-2 justify-between text-sm font-medium">
              <a
                href="https://github.com/username/todo-app"
                target="_blank"
                className="hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://todo-app-demo.vercel.app"
                target="_blank"
                className="flex items-center gap-1 hover:underline"
              >
                Демо <ArrowRight size={14} />
              </a>
            </div>
          </CardContent>
        </Card>
      </motion.section>
    </Container>
  );
};
