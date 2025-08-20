import { About } from "@/widgets/About";
import { Certificates } from "@/widgets/Certificates";
import { Hero } from "@/widgets/Hero";
import { Projects } from "@/widgets/Projects";
import { Skills } from "@/widgets/Skills";

export const MainPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-16">
      <Hero />
      <About />
      <Skills />
      <Certificates />
      <Projects />
    </div>
  );
};
