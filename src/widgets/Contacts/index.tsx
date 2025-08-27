import { Container, TypographyH2 } from "@/shared/ui";
import { Github, Mail } from "lucide-react";
import { motion } from "motion/react";

export const Contacts: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 50 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      id="contacts"
      className="pb-24"
    >
      <Container className="max-w-3xl mx-auto text-center space-y-8">
        <TypographyH2>Контакты</TypographyH2>

        <p className=" text-lg">
          Вы можете связаться со мной через Email или соцсети ниже
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="mailto:tekkenhikka@yandex.ru"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-accent shadow-md hover:scale-105  transition"
          >
            <Mail size={20} /> Email
          </a>
          <a
            href="https://github.com/cm3tahkuh"
            target="_blank"
            className="p-3 rounded-full shadow-md hover:shadow-lg bg-accent hover:scale-105 transition"
          >
            <Github size={28} />
          </a>
        </div>
      </Container>
    </motion.section>
  );
};
