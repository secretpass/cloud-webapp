import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cookies } from "next/headers";
import ThemeProvider from "@/components/shared/theme-provider";
import { UI_THEME_COOKIE_NAME, UiTheme } from "@/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Secret Pass",
  description:
    "Encrypt and decrypt your secrets with your passkey on your device, store encrypted secrets in your codebase or on a our hosted service.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const _cookies = await cookies();
  const theme = _cookies.get(UI_THEME_COOKIE_NAME)?.value ?? UiTheme.Light;
  return (
    <html lang="en" data-theme={theme}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${theme} font-sans antialiased flex flex-col min-h-screen`}
      >
        <ThemeProvider theme={theme as UiTheme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
