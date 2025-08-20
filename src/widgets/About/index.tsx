import { Container, TypographyH2 } from "@/shared/ui";
import { Card, CardContent } from "@/shared/ui/Card/card";

export const About: React.FC = () => {
  return (
    <Container className="mx-auto">
      <TypographyH2>Обо мне</TypographyH2>
      <div
        className="
        grid 
        grid-cols-1 
        grid-rows-auto 
        gap-4 
        sm:grid-cols-2
        sm:grid-rows-3
        md:grid-cols-3
        items-stretch
        md:grid-rows-3
      "
      >
        <Card className="col-span-1 sm:col-span-2 md:col-span-2 border-2">
          <CardContent className="font-bold text-xl">
            Привет! Меня зовут Эдуард, я фронтенд-разработчик с фокусом на
            создание современных, удобных и визуально привлекательных
            интерфейсов.
          </CardContent>
        </Card>

        <Card className="col-span-1 row-span-1 sm:row-span-2 sm:col-start-2 md:row-span-2 md:col-start-3 border-2">
          <CardContent className="font-bold text-xl">
            Пишу чистый, поддерживаемый код, внимательно подхожу к UX и всегда
            стремлюсь делать интерфейсы не только красивыми.
          </CardContent>
        </Card>

        <Card className="col-span-1 sm:col-span-2 sm:row-span-1 md:col-span-2 md:row-span-3 md:row-start-2 border-2">
          <CardContent className="font-bold text-xl">
            Мне нравится учиться новому и применять это на практике — будь то
            свежие фреймворки, подходы или инструменты.
          </CardContent>
        </Card>

        <Card className="col-span-1 sm:col-span-1 sm:row-start-2 sm:row-span-2 md:col-start-3 md:row-start-3 border-2">
          <CardContent className="font-bold text-xl">
            Я специализируюсь на работе с React, TypeScript и Tailwind CSS.
          </CardContent>
        </Card>
      </div>
    </Container>
  );
};
