"use server";

import { cookies } from "next/headers";
import { UI_THEME_COOKIE_NAME, type UiTheme } from "@/constants";

export async function updateTheme(theme: UiTheme) {
  const _cookies = await cookies();
  _cookies.set({
    name: UI_THEME_COOKIE_NAME,
    value: theme,
  });
}
