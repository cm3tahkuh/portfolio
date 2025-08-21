import {
  Container,
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "@/shared/ui";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/ui/Card/card";
import { ChevronRight } from "lucide-react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import yandexCertificate from "@/shared/assets/certificates/yandex.png";

export const Certificates: React.FC = () => {
  return (
    <Container id="certificates" className="scroll-mt-[100px]">
      <TypographyH2>Сертификаты</TypographyH2>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <PhotoProvider>
          <PhotoView src={yandexCertificate}>
            <Card className="group cursor-pointer rounded-xl border-2 shadow-sm hover:shadow-md transition">
              <CardHeader>
                <CardTitle className="font-semibold text-lg">
                  <TypographyH3>
                    Javascript от Яндекса: с нуля до веб-разработчика
                  </TypographyH3>
                  <TypographyP>Яндекс · Октябрь 2023 - Май 2024</TypographyP>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between text-lg font-medium">
                <span
                  className="relative 
    after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
    after:bg-current after:transition-all after:duration-300
    group-hover:after:w-full"
                >
                  Посмотреть сертификат
                </span>
                <ChevronRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 text-muted-foreground" />
              </CardContent>
            </Card>
          </PhotoView>
        </PhotoProvider>
      </section>
    </Container>
  );
};
