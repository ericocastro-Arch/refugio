import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastProvider } from "@/components/ToastProvider";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "DOG Rescue Guatemala | Refugio Independiente en Amatitlán",
  description: "Refugio independiente y sin fines de lucro en Amatitlán. Todos nuestros servicios son gratuitos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${nunito.variable} antialiased`} style={{ scrollBehavior: 'smooth' }}>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@4/fonts/remixicon.css" />
      </head>
      <body className="min-h-screen flex flex-col" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <ToastProvider>
          <Navbar />
          <main style={{ flex: 1 }}>
            {children}
          </main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
