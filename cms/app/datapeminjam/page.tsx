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
    <div className="bg-white p-6 shadow-md rounded-md">
      <h1 className="text-3xl font-bold text-blue-800 text-right mb-4 pr-2">E-Ruang UTI</h1>

      <table className="w-full border border-black text-center">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-black py-2">Aksi</th>
            <th className="border border-black py-2">Nama Peminjam</th>
            <th className="border border-black py-2">NPM</th>
            <th className="border border-black py-2">Tanggal</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td className="border border-black py-2">
                <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                  Hapus
                </button>
              </td>
              <td className="border border-black py-2">{row.nama}</td>
              <td className="border border-black py-2">{row.npm}</td>
              <td className="border border-black py-2">{row.tanggal}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-blue-500 mt-6 text-sm text-center">
        Copyright © 2025 Woops - ERuang UTI
      </p>
    </div>
  );
}
