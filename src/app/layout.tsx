"use client";

import "./globals.css";
import { Poppins } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login"; // Vérifie si on est sur la page login

  return (
    <html lang="fr">
      <body className={`mx-[50px] ${poppins.className}`}>
        {!isLoginPage && (
          <header>
            <Navigation />
          </header>
        )}

        <main>{children}</main>

        {!isLoginPage && <Footer />} {/* Masque aussi le footer sur login si besoin */}
      </body>
    </html>
  );
}
