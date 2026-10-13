import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeProvider from "@/components/shared/theme-provider";
import "./globals.css";
import Script from "next/script";
import { AnalyticsProvider } from "@/analytics/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Secretpass · Cloud",
  description:
    "Encrypt and decrypt your secrets with your passkey on your device, store encrypted secrets in your codebase or on a our hosted service.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <title>Secretpass · Cloud</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased flex flex-col min-h-screen`}
      >
        <AnalyticsProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </AnalyticsProvider>
      </body>
    </html>
  );
}
