import type { ReactNode } from "react";
import { Navbar } from "@/components";

export default function LocalManagerLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main>
      <Navbar />
      Local secret manager
      {children}
    </main>
  );
}
