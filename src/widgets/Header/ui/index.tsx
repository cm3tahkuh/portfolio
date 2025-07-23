import { ModeToggle } from "@/entities";
import { TypographyH1 } from "@/shared/ui";

export const Header: React.FC = () => {
  return (
    <div>
      <TypographyH1>Шапка</TypographyH1>
      <ModeToggle />
    </div>
  );
};
