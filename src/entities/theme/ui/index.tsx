import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/app/providers/ThemeProvider";
import { Switch } from "@/shared/ui/Switch";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-2">
      <Sun className="h-4 w-4" />
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        className="data-[state=checked]:bg-neutral-800 dark:data-[state=checked]:bg-neutral-200"
      />
      <Moon className="h-4 w-4" />
    </div>
  );
}
