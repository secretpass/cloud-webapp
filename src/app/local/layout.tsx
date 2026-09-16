import { CommonNavbar } from "@/components";
import type { ReactNode } from "react";

export default function LocalManagerLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main>
      <CommonNavbar />
      Local secret manager
      {children}
    </main>
  );
}
