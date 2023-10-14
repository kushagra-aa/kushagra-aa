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
    "Kushagra Agnihotri, Web Developer passionate about bringing your ideas to life through elegant designs and robust code. Explore my portfolio and discover how I turn creativity into reality.",
  keywords: [
    "Web Developer",
    "Portfolio Website",
    "Website Projects",
    "Responsive Web Design",
    "Web Development Services",
    "Custom Website Development",
    "Coding Skills",
    "Learn Web Development",
    "Portfolio",
    "Projects",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "ReactJS",
    "Next.js",
  ],
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
