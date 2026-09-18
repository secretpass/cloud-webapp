import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeProvider from "@/components/shared/theme-provider";
import "./globals.css";
import Script from "next/script";

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
  return (
    <html lang="en" suppressHydrationWarning>
        <head>
            <Script id="set-theme" strategy="beforeInteractive">
                {`
                let theme = localStorage.getItem('ui-theme') || "system";
                if(theme === "system") {
                    theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                }
                document.body.parentElement.setAttribute("data-theme", theme)
                `}
            </Script><title>Secret Pass</title>
        </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased flex flex-col min-h-screen`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
