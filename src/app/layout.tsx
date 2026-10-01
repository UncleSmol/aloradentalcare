import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Alora Dental Care | Gentle Family & Aesthetic Dentistry in eMalahleni",
  description: "Experience gentle, high-quality family and aesthetic dental care at Shop 18, Reyno Ridge Centre, eMalahleni. Direct medical aid billing, veneers, aligners, cleanings, and emergency care.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <div className="bg-noise-overlay" />
        <div className="site-layout">
          <Navbar />
          <main className="main-content-wrapper">{children}</main>
        </div>
      </body>
    </html>
  );
}
