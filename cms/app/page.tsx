import Image from "next/image";
import React from 'react';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-4">Selamat Datang di E-Ruang UTI</h1>
      <p className="text-lg italic text-center">Platform Digital Peminjaman Ruangan Universitas Teknokrat Indonesia</p>
      <div className="flex justify-center items-center mt-8">
      <div className="flex items-center">
        <div className="flex flex-col items-center">
          <Image
            src="/images/gedunguti.png"
            alt="Gambar 1"
            width={1200}
            height={5-0}
            priority
            className="object-contain mb-6"
          />
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-5">Peminjaman Ruangan Mudah & Cepat</h2>
            <p className="text-base">Platform digital berbasis web yang dirancang untuk mempermudah proses peminjaman ruangan di Lingkungan Kampus.</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
