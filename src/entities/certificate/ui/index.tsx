import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/ui/Card/card";
import { TypographyH3, TypographyP } from "@/shared/ui";
import { ChevronRight } from "lucide-react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import type { Certificate } from "../model/certificate";

export const CertificateCard: React.FC<Certificate> = ({
  name,
  organization,
  date,
  image,
}) => (
  <PhotoProvider>
    <PhotoView src={image}>
      <Card className="group cursor-pointer rounded-xl border-2 shadow-sm hover:shadow-md transition">
        <CardHeader>
          <CardTitle className="font-semibold text-lg">
            <TypographyH3>{name}</TypographyH3>
            <TypographyP>
              {organization} · {date}
            </TypographyP>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between text-lg font-medium">
          <span className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
            Посмотреть сертификат
          </span>
          <ChevronRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 text-muted-foreground" />
        </CardContent>
      </Card>
    </PhotoView>
  </PhotoProvider>
);
