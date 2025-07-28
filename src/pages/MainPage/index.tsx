

import { About } from "@/widgets/About";
import { Hero } from "@/widgets/Hero";
import { Skills } from "@/widgets/Skills";

export const MainPage: React.FC = () => {
  return (
    <>
      <Hero />
      <About/>
      <Skills/>
    </>
  );
};
