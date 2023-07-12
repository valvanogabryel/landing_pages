import StyledComponentsRegistry from "@/lib/stylesheet";
import type { Metadata } from "next";
import { Montserrat, Elsie_Swash_Caps as Elsie } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-text",
});

const elsie = Elsie({
  weight: "900",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-title",
});

export const metadata: Metadata = {
  title: "Casa Verde",
  description: "Sua casa com as melhores plantas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
