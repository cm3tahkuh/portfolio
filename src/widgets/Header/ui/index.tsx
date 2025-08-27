import { ModeToggle } from "@/entities";
import { Container } from "@/shared/ui";
import { cn } from "@/shared/lib/utils";
import { Dock } from "@/shared/ui";
import {
  AwardIcon,
  CircleUserRoundIcon,
  FolderOpenDotIcon,
  HammerIcon,
  MailIcon,
} from "lucide-react";

const scrollToSection = ({
  id,
  offset = 80,
}: {
  id: string;
  offset?: number;
}): void => {
  const element = document.getElementById(id);
  if (element) {
    const top =
      element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

const NAV = [
  { href: "#about", label: "Обо мне" },
  { href: "#skills", label: "Навыки" },
  { href: "#certificates", label: "Сертификаты" },
  { href: "#projects", label: "Проекты" },
  { href: "#contacts", label: "Контакты" },
];

const items = [
  {
    icon: <CircleUserRoundIcon />,
    label: "Обо мне",
    onClick: () => scrollToSection({ id: "about" }),
  },
  {
    icon: <HammerIcon />,
    label: "Навыки",
    onClick: () => scrollToSection({ id: "skills" }),
  },
  {
    icon: <AwardIcon />,
    label: "Сертификаты",
    onClick: () => scrollToSection({ id: "certificates" }),
  },
  {
    icon: <FolderOpenDotIcon />,
    label: "Проекты",
    onClick: () => scrollToSection({ id: "projects" }),
  },

  {
    icon: <MailIcon />,
    label: "Контакты",
    onClick: () => scrollToSection({ id: "contacts" }),
  },
];

export const Header: React.FC = () => {
  return (
    <>
      <header className="sticky top-4 z-50 md:block hidden">
        <div
          className="mx-auto max-w-6xl rounded-4xl transition-all duration-300
            bg-white/50 dark:bg-neutral-900/40 backdrop-blur-xl
            border border-black/5 dark:border-white/10"
        >
          <Container className="flex h-14 items-center justify-between">
            <a href="#top" className="font-extrabold tracking-tight text-xl">
              Эдуард
            </a>

            {/* навигация — десктоп */}
            <nav className="hidden md:flex items-center gap-6">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors relative",
                    "text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white",
                    "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0",
                    "after:bg-current after:transition-all hover:after:w-full"
                  )}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <ModeToggle />
            </div>
          </Container>
        </div>
      </header>
      <div className="md:hidden block z-999999 fixed mx-auto left-1/2 bottom-4">
        <Dock items={items} />
      </div>
    </>
  );
};
