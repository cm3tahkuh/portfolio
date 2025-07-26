import { TypographyH1 } from "@/shared/ui";
import { TypographyH2 } from "@/shared/ui";
import { About } from "@/widgets/About";
import { Hero } from "@/widgets/Hero";

export const MainPage: React.FC = () => {
  return (
    <>
      <Hero />
      <About/>
    </>
  );
};
