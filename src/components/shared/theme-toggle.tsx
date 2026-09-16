"use client";

import { Button } from "@heroui/react";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { updateTheme } from "@/actions/theme";
import { UiTheme } from "@/constants";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const theme = useTheme();

  return (
    <Button
      variant="ghost"
      isIconOnly
      onClick={() =>
        updateTheme(theme === UiTheme.Dark ? UiTheme.Light : UiTheme.Dark)
      }
      aria-label="Toggle theme"
    >
      <IconSun className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <IconMoon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
