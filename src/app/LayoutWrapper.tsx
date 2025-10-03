"use client";

import { usePathname } from "next/navigation";
import ClientLayout from "./ClientLayout";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // jin routes pe header/footer nahi chahiye
  const noLayoutRoutes = ["/login"];

  const isNoLayout = noLayoutRoutes.includes(pathname);

  return (
    <>
      {isNoLayout ? (
        <main>{children}</main>
      ) : (
        <ClientLayout>{children}</ClientLayout>
      )}
    </>
  );
}
