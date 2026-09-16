"use client";

import { createContext, type ReactNode, useContext } from "react";
import { UiTheme } from "@/constants";

const ThemeContext = createContext<UiTheme>(UiTheme.Light);

export default function ThemeProvider({
  theme,
  children,
}: {
  theme: UiTheme;
  children: ReactNode;
}) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const theme = useContext(ThemeContext);
  return theme;
}
