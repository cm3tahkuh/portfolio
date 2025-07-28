import { Container, TypographyH2, TypographyP } from "@/shared/ui";

// border-secondary-foreground bg-secondary border-2 rounded-2xl

export const About: React.FC = () => {
  return (
    <Container className="space-y-2">
      <TypographyH2>Обо мне</TypographyH2>

      <div className="text-justify leading-relaxed text-base md:text-lg">
        <TypographyP>
          Привет! Меня зовут Эдуард, я фронтенд-разработчик с фокусом на
          создание современных, удобных и визуально привлекательных интерфейсов.
        </TypographyP>

        <TypographyP>
          Я специализируюсь на работе с React, TypeScript и Tailwind CSS, а
          также люблю делать интерфейсы живыми с помощью анимаций и библиотек
          вроде Framer Motion.
        </TypographyP>

        <TypographyP>
          Пишу чистый, поддерживаемый код, внимательно подхожу к UX/UI и всегда
          стремлюсь сделать интерфейс не только красивым, но и быстрым.
        </TypographyP>

        <TypographyP>
          Мне нравится учиться новому и применять это на практике — будь то
          свежие фреймворки, подходы или инструменты разработки.
        </TypographyP>
      </div>
    </Container>
  );
};
