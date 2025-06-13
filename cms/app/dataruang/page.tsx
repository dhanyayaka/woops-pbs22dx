"use client";
import { useState } from "react";

const dummyRuang = [
  { id: 1, nama: "Ruang Rapat A", lokasi: "Gedung A Lt. 2", kapasitas: 20 },
  { id: 2, nama: "Lab Komputer 1", lokasi: "Gedung B Lt. 1", kapasitas: 30 },
  { id: 3, nama: "Aula Utama", lokasi: "Gedung C Lt. 3", kapasitas: 100 },
];

export default function DataRuangPage() {
  const [data, setData] = useState(dummyRuang);

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6 mt-10">
      <h2 className="text-right text-2xl font-bold text-purple-700 mb-4">
        E-Ruang UTI
      </h2>
      <table className="w-full table-auto border-collapse text-sm">
        <thead>
          <tr className="bg-gray-200 text-gray-700 text-center">
            <th className="py-3 px-4 font-semibold">Nama Ruang</th>
            <th className="py-3 px-4 font-semibold">Lokasi</th>
            <th className="py-3 px-4 font-semibold">Kapasitas</th>
            <th className="py-3 px-4 font-semibold">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b hover:bg-gray-50">
              <td className="py-3 px-4 text-gray-800 font-medium">
                {item.nama}
              </td>
              <td className="py-3 px-4 text-gray-700">{item.lokasi}</td>
              <td className="py-3 px-4 text-gray-700">{item.kapasitas}</td>
              <td className="py-3 px-4">
                <button className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-1 rounded transition">
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
