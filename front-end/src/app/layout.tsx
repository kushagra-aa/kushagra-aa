import type { Metadata } from "next";
import { Sora } from "next/font/google";
import ModeButton from "@/components/UI/modeButton/ModeButton";
import "./globals.css";
import Nav from "@/components/layout/nav/Nav";
import Main from "@/components/layout/main/Main";
import Footer from "@/components/layout/footer/Footer";

const fontFam = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kushagra AA",
  description:
    "I help people bring their ideas to life. Powered by Designs, Code and coffee, A lot of code and coffee.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fontFam.className}>
        <ModeButton />
        <Nav />
        <Main>
          {children}
          <Footer />
        </Main>
      </body>
    </html>
  );
}
