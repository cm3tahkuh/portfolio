import { TypographyH1, TypographyH2, TypographyP } from "@/shared/ui";
import { SplitText } from "@/shared/ui";

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4">
      <SplitText
        text={<TypographyH1>Одинцов Эдуард</TypographyH1>}
        delay={100}
        duration={0.3}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        textAlign="center"
      />

      <SplitText
        text={
          <TypographyH2 className="text-2xl md:text-3xl font-medium mb-4 md:mb-8">
            Фронтенд-разработчик
          </TypographyH2>
        }
        delay={50}
        duration={0.1}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />

      <TypographyP className="max-w-xl text-center text-md md:text-xl">
        Привет! Я создаю современные, удобные и визуально привлекательные
        интерфейсы с чистым и поддерживаемым кодом.
      </TypographyP>
    </section>
  );
};
