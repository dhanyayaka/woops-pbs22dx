import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-yellow-400 drop-shadow-sm mb-4">
          Selamat Datang di <span className="text-white">E-Ruang UTI</span>
        </h1>
        <p className="text-lg italic text-gray-300">
          Platform Digital Peminjaman Ruangan Universitas Teknokrat Indonesia
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <div className="md:w-1/2">
          <Image
            src="/images/gedunguti.png"
            alt="Gedung UTI"
            width={800}
            height={500}
            priority
            className="rounded-xl shadow-lg border border-yellow-200"
          />
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            🏫 Peminjaman Ruangan Mudah & Cepat
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            Aplikasi ini merupakan solusi digital yang dirancang untuk
            mempermudah mahasiswa, dosen, maupun pihak kampus dalam mengelola
            dan melakukan peminjaman ruang pertemuan, laboratorium, atau aula
            secara online. Dengan tampilan yang intuitif dan proses peminjaman
            yang cepat, E-Ruang UTI hadir mendukung efisiensi kegiatan akademik
            dan non-akademik di kampus.
          </p>
        </div>
      </div>
    </div>
  );
}
