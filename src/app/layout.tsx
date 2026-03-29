import type { Metadata } from "next";
import { Syne, DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlobalEffects from "@/components/GlobalEffects";

const fontSyne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const fontDmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const fontSpaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anambra Web3 Community | Building the Future of Web3 in Southeast Nigeria",
  description: "Southeast Nigeria's fastest-growing blockchain ecosystem.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fontSyne.variable} ${fontDmSans.variable} ${fontSpaceMono.variable}`}
    >
      <body>
        <GlobalEffects />
        <div className="relative z-10">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
