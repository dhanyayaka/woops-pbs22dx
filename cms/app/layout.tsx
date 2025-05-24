import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-Ruang UTI",
  description: "Aplikasi Peminjaman Ruangan Universitas Teknokrat Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Header */}
        <header className="bg-yellow-500 py-4 border-b border-black">
          <div className="flex justify-between items-center px-10">
            <Image
              src="/images/logo.png"
              width={300}
              height={300}
              alt="Logo UTI"
            />
            <div className="flex space-x-6">
              <h1 className="font-bold text-white text-xl cursor-pointer">
                Data Peminjam
              </h1>
              <h2 className="font-bold text-white text-xl cursor-pointer">
                Data Ruang
              </h2>
            </div>
          </div>
        </header>

        {/* Konten Utama */}
        <section className="m-10 text-center text-2xl font-bold">
          {children}
        </section>

        {/* Footer */}
        <footer className="text-center text-yellow-500 border-t border-black py-4">
          Copyright &copy; 2025 Woops - ERuang UTI
        </footer>
      </body>
    </html>
  );
}
