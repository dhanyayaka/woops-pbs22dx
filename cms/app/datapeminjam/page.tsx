"use client";
import { useState } from "react";

const dummyData = [
  {
    id: 1,
    namaPeminjam: "Rizki Ramadhan",
    npm: "2212345678",
    namaRuangan: "Ruang Rapat A",
    tanggalPeminjam: "2025-05-24",
    waktuMulai: "09:00",
    waktuAkhir: "11:00",
    keterangan: "Presentasi tugas akhir",
  },
  {
    id: 2,
    namaPeminjam: "Dewi Sartika",
    npm: "2212345679",
    namaRuangan: "Lab Komputer 1",
    tanggalPeminjam: "2025-05-23",
    waktuMulai: "13:00",
    waktuAkhir: "15:00",
    keterangan: "Praktikum jaringan komputer",
  },
  {
    id: 3,
    namaPeminjam: "Ahmad Subekti",
    npm: "2212345680",
    namaRuangan: "Aula Serbaguna",
    tanggalPeminjam: "2025-05-22",
    waktuMulai: "08:00",
    waktuAkhir: "12:00",
    keterangan: "Seminar teknologi informasi",
  },
];

export default function DataPeminjamPage() {
  const [data, setData] = useState(dummyData);

  return (
    <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-xl p-8 mt-12 border border-yellow-200">
      <h2 className="text-right text-3xl font-bold text-yellow-700 mb-6">
        📑 Data Peminjam | E-Ruang UTI
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse text-sm rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-yellow-300 to-yellow-400 text-white text-center uppercase tracking-wide text-xs font-semibold">
              <th className="py-4 px-4 text-black">Nama Peminjam</th>
              <th className="py-4 px-4 text-black">NPM</th>
              <th className="py-4 px-4 text-black">Ruangan</th>
              <th className="py-4 px-4 text-black">Tanggal</th>
              <th className="py-4 px-4 text-black">Waktu</th>
              <th className="py-4 px-4 text-black">Keterangan</th>
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
                <td className="py-3 px-4 text-gray-800 font-medium">
                  {item.namaPeminjam}
                </td>
                <td className="py-3 px-4 text-gray-800 font-medium">{item.npm}</td>
                <td className="py-3 px-4 text-gray-800 font-medium">{item.namaRuangan}</td>
                <td className="py-3 px-4 text-gray-800 font-medium">
                  {item.tanggalPeminjam}
                </td>
                <td className="py-3 px-4 text-gray-800 font-medium">
                  {item.waktuMulai} - {item.waktuAkhir}
                </td>
                <td className="py-3 px-4 text-gray-800 font-medium">{item.keterangan}</td>
                <td className="py-3 px-4">
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded-full transition transform hover:scale-105"
                    title="Hapus Peminjam"
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
