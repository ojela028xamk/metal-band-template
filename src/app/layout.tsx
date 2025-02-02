import type { Metadata } from "next";
import Navigation from "./navigation/navigation";
import { Metal_Mania } from "next/font/google";
import css from "./page.module.scss";
import Footer from "./footer/footer";
import localFont from "next/font/local";

const metalMania = Metal_Mania({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const rockFont = localFont({ src: "./chinese_rocks.otf" });

export const metadata: Metadata = {
  title: "Beast Within",
  description: "Design by Jere Länsipii",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${css.layout} ${rockFont.className}`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
