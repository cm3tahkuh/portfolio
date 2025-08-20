import { ModeToggle } from "@/entities";

import { Container } from "@/shared/ui";
import { cn } from "@/shared/lib/utils";
import { useState } from "react";
import { Button } from "@/shared/ui/Button/button";
import { Dock } from "@/shared/ui";

const NAV = [
  { href: "#about", label: "Обо мне" },
  { href: "#skills", label: "Навыки" },
  { href: "#projects", label: "Проекты" },
  { href: "#certificates", label: "Сертификаты" },
  { href: "#contacts", label: "Контакты" },
];

const items = [
  { icon: "asd", label: "Home", onClick: () => alert("Home!") },
  {
    icon: "asd",
    label: "Archive",
    onClick: () => alert("Archive!"),
  },
  {
    icon: "asd",
    label: "Profile",
    onClick: () => alert("Profile!"),
  },
  {
    icon: "asd",
    label: "Settings",
    onClick: () => alert("Settings!"),
  },
];

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

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
      <div className="md:hidden block fixed mx-auto left-1/2 bottom-4">
        <Dock items={items} />
      </div>
    </>
  );
};
