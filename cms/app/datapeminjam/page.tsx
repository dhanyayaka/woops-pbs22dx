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
    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6 mt-10">
  <h2 className="text-right text-2xl font-bold text-purple-700 mb-4">
    E-Ruang UTI
  </h2>
  <table className="w-full table-auto border-collapse text-sm">
    <thead>
      <tr className="bg-gray-200 text-gray-700 text-left">
        <th className="py-3 px-4 font-semibold">Aksi</th>
        <th className="py-3 px-4 font-semibold">Nama Peminjam</th>
        <th className="py-3 px-4 font-semibold">NPM</th>
        <th className="py-3 px-4 font-semibold">Tanggal</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item) => (
        <tr key={item.npm} className="border-b hover:bg-gray-50">
          <td className="py-3 px-4">
            <button className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-1 rounded transition">
              Hapus
            </button>
          </td>
          <td className="py-3 px-4 text-gray-800 font-medium">{item.nama}</td>
          <td className="py-3 px-4 text-gray-700">{item.npm}</td>
          <td className="py-3 px-4 text-gray-700">{item.tanggal}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
}
