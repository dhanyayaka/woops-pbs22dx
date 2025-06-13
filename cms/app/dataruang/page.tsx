"use client";
import { useState } from "react";

const dummyRuang = [
  {
    id: 1,
    nama: "Ruang Rapat A",
    lokasi: "Gedung A Lt. 2",
    kapasitas: 20,
    peminjam: "Andi Saputra",
    npm: "123456789",
    tanggal: "2025-06-14",
    mulai: "09:00",
    akhir: "11:00",
    keterangan: "Rapat koordinasi internal",
  },
  {
    id: 2,
    nama: "Lab Komputer 1",
    lokasi: "Gedung B Lt. 1",
    kapasitas: 30,
    peminjam: "Dewi Lestari",
    npm: "987654321",
    tanggal: "2025-06-15",
    mulai: "13:00",
    akhir: "15:00",
    keterangan: "Ujian praktik pemrograman",
  },
  {
    id: 3,
    nama: "Lab Komputer 2",
    lokasi: "Gedung B Lt. 1",
    kapasitas: 30,
    peminjam: "Fani Patricia Dewi",
    npm: "987654321",
    tanggal: "2025-06-15",
    mulai: "13:00",
    akhir: "15:00",
    keterangan: "Seminar Pemrograman",
  },
];

export default function DataRuangPage() {
  const [data, setData] = useState(dummyRuang);

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-xl p-8 mt-12 border border-yellow-200">
      <h2 className="text-right text-3xl font-bold text-yellow-700 mb-6">
        📘 Data Ruang | E-Ruang UTI
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse text-sm rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-yellow-300 to-yellow-400 text-white text-center uppercase tracking-wide text-xs font-semibold">
              <th className="py-4 px-4 text-black">Nama Peminjam</th>
              <th className="py-4 px-4 text-black">NPM</th>
              <th className="py-4 px-4 text-black">Nama Ruangan</th>
              <th className="py-4 px-4 text-black">Lokasi</th>
              <th className="py-4 px-4 text-black">Kapasitas</th>
              <th className="py-4 px-4 text-black">Tanggal</th>
              <th className="py-4 px-4 text-black">Waktu Mulai</th>
              <th className="py-4 px-4 text-black">Waktu Akhir</th>
              <th className="py-4 px-4 text-black">Keperluan</th>
              <th className="py-4 px-4 text-black">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={item.id}
                className={`text-center ${
                  index % 2 === 0 ? "bg-yellow-50" : "bg-white"
                } hover:bg-yellow-100 transition`} 
              >
                <td className="py-3 px-4 text-yellow-900 font-medium">
                  {item.peminjam}
                </td>
                <td className="py-3 px-4 text-black">{item.npm}</td>
                <td className="py-3 px-4 text-black">{item.nama}</td>
                <td className="py-3 px-4 text-black">{item.lokasi}</td>
                <td className="py-3 px-4 text-black">{item.kapasitas}</td>
                <td className="py-3 px-4 text-black">{item.tanggal}</td>
                <td className="py-3 px-4 text-black">{item.mulai}</td>
                <td className="py-3 px-4 text-black">{item.akhir}</td>
                <td className="py-3 px-4 text-black">{item.keterangan}</td>
                <td className="py-3 px-4 text-black">
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded-full transition transform hover:scale-105"
                    title="Hapus Ruang"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
