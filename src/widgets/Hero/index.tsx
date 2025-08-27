import { TypographyH1, TypographyH2 } from "@/shared/ui";
import { DecryptedText } from "@/shared/ui";


export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4">
      <DecryptedText
        text={<TypographyH1>Одинцов Эдуард</TypographyH1>}
        animateOn="view"
        revealDirection="start"
        speed={100}
        maxIterations={10}
        sequential={true}
      />

      <DecryptedText
        text={
          <TypographyH2 className="text-2xl md:text-3xl font-medium mb-4 md:mb-8">
            Фронтенд-разработчик
          </TypographyH2>
        }
        animateOn="view"
        revealDirection="start"
        speed={100}
        maxIterations={10}
        sequential={true}
      />

    </section>
  );
};
