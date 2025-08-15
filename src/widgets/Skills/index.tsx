import { Container, SkillsCard, TypographyH2 } from "@/shared/ui";
import ReactLogo from "@/shared/assets/icons/react.png";
import HtmlLogo from "@/shared/assets/icons/html5.png";
import CssLogo from "@/shared/assets/icons/css.png";
import GitLogo from "@/shared/assets/icons/git.png";
import JsLogo from "@/shared/assets/icons/js.png";
import TsLogo from "@/shared/assets/icons/typescript.png";
import JestLogo from "@/shared/assets/icons/jest.png";
import MaterialuiLogo from "@/shared/assets/icons/materialui.png";
import NextjsLogo from "@/shared/assets/icons/nextjs.png";
import SassLogo from "@/shared/assets/icons/sass.png";
import ShadcnUiLogo from "@/shared/assets/icons/shadcnui.png";
import TailwindLogo from "@/shared/assets/icons/tailwind.png";

export const Skills: React.FC = () => {
  return (
    <Container>
      <TypographyH2>Мои навыки</TypographyH2>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <SkillsCard image={ReactLogo}>React</SkillsCard>
        <SkillsCard image={NextjsLogo}>Next.js</SkillsCard>
        <SkillsCard image={HtmlLogo}>HTML5</SkillsCard>
        <SkillsCard image={CssLogo}>CSS</SkillsCard>
        <SkillsCard image={GitLogo}>Git</SkillsCard>
        <SkillsCard image={JsLogo}>JavaScript</SkillsCard>
        <SkillsCard image={TsLogo}>TypeScript</SkillsCard>
        <SkillsCard image={MaterialuiLogo}>Material UI</SkillsCard>
        <SkillsCard image={SassLogo}>Sass/Scss</SkillsCard>
        <SkillsCard image={ShadcnUiLogo}>Shadcn UI</SkillsCard>
        <SkillsCard image={TailwindLogo}>Tailwind</SkillsCard>
        <SkillsCard image={JestLogo}>Jest</SkillsCard>
      </section>
    </Container>
  );
};
