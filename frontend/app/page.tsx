import Image from "next/image";
import React from 'react';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-4">Selamat Datang di E-Ruang UTI</h1>
      <p className="text-lg  italic text-center">Platform Digital Peminjaman Ruangan Universitas Teknokrat Indonesia</p>
      <div className="flex justify-center items-center mt-8">
        <Image
          src="/images/gambar1.png"
          alt="Gambar 1"
          width={1800}
          height={500}
          priority
          className="object-contain"
        />
      </div>
    </div>
  );
}
