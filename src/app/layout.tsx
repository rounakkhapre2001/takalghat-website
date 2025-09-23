import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { LanguageProvider } from "../context/LanguageContext"; // ✅ Import LanguageProvider

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Takalghat Website",
  description: "Official website for Takalghat, a local community initiative.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* ✅ Wrap the whole app with LanguageProvider */}
        <LanguageProvider>
          <Header />
          <main className="relative">
            {children}
          </main>
         <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
