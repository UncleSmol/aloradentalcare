import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Alora Dental Care | Boutique Dentistry & 3D Smile Design",
  description: "Experience gentle, zero-anxiety dental care with state-of-the-art 3D smile design, porcelain veneers, Invisalign, and luxury comfort.",
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
        <div className="site-layout">
          <Navbar />
          <main className="main-content-wrapper">{children}</main>
        </div>
      </body>
    </html>
  );
}
