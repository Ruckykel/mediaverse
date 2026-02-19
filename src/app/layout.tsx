import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ContactModalProvider } from "../components/ContactModalContext";
import { NavigationProgress } from "../components/NavigationProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fastmedia24 — Where Vision Meets Digital Reality",
  description:
    "Fastmedia24 is a full-scale creative and digital production company helping brands, creators, and businesses tell powerful stories through visuals, design, and technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <ContactModalProvider>
          <NavigationProgress />
          <div className="app-gradient" />
          <Navbar />
          {children}
          <Footer />
        </ContactModalProvider>
      </body>
    </html>
  );
}
