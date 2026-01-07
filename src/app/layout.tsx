import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "You Can Heal | Online Therapy & Coaching",
  description: "Gentle, evidence-based support to help you move from overwhelmed to clarity — from anywhere, online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
