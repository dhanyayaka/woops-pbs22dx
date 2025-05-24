import Image from "next/image";
import React from 'react';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-4">Selamat Datang di E-Ruang UTI</h1>
      <p className="text-lg font-italic text-center italic">Platform Digital Peminjaman Ruangan Universitas Teknokrat Indonesia</p>
      <div className="flex justify-center items-center mt-8">
        <Image
          src="/images/ruangan.png"
          alt="Gambar 1"
          width={500}
          height={300}
          layout="fixed"
        />
      </div>
    </div>
  );
}
