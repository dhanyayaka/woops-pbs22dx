"use client";
import { useState } from "react";

const dummyData = [
  { id: 1, nama: "Rizki Ramadhan", npm: "2212345678", tanggal: "2025-05-24" },
  { id: 2, nama: "Dewi Sartika", npm: "2212345679", tanggal: "2025-05-23" },
  { id: 3, nama: "Ahmad Subekti", npm: "2212345680", tanggal: "2025-05-22" },
];

export default function DataPeminjamPage() {
  const [data, setData] = useState(dummyData);

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-xl p-8 mt-12 border border-yellow-200">
      <h2 className="text-right text-3xl font-bold text-yellow-700 mb-6">
        📑 Data Peminjam | E-Ruang UTI
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse text-sm rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-yellow-300 to-yellow-400 text-white text-center uppercase tracking-wide text-xs font-semibold">
              <th className="py-4 px-4 text-black">Nama Peminjam</th>
              <th className="py-4 px-4 text-black">NPM</th>
              <th className="py-4 px-4 text-black">Tanggal</th>
              <th className="py-4 px-4 text-black">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={item.npm}
                className={`text-center ${
                  index % 2 === 0 ? "bg-yellow-50" : "bg-white"
                } hover:bg-yellow-100 transition`}
              >
                <td className="py-3 px-4 font-medium text-yellow-900">
                  {item.nama}
                </td>
                <td className="py-3 px-4 text-gray-700">{item.npm}</td>
                <td className="py-3 px-4 text-gray-700">{item.tanggal}</td>
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
