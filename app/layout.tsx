import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Xiaohang Li — Data Scientist & Software Engineer",
  description:
    "Portfolio of Xiaohang Li (Mark), a Data Scientist & Software Engineer building at the intersection of AI, data, and software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased bg-white text-slate-900 font-sans">
        {children}
      </body>
    </html>
  );
}
