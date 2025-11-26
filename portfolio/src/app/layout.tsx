import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar/Navbar";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Own Portfolio-Website",
  description:
    "Own Portfolio Website is a modern, full-stack personal branding platform built using Next.js, React, Tailwind CSS, and Node.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}antialiased bg-neutral-100 dark:bg-neutral-700`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

// Yha p like jo andar ki chize hai wo like use change nahi kar sakte okkh!..
