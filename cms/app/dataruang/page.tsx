"use client";
import { useState, useEffect } from "react";

interface Ruangan {
  id: number;
  namaRuangan: string;
  kapasitas: number;
  keterangan: string;
}

export default function DataRuangPage() {
  const [data, setData] = useState<Ruangan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRuangan = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/ruangan", {
          cache: "no-store",
        });
        const result = await res.json();
  
        if (res.ok && result.data_ruangan) {
          setData(result.data_ruangan);
        } else {
          console.error(result.metaData?.message || "Terjadi kesalahan");
        }
      } catch (error) {
        console.error("Gagal mengambil data ruangan:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchRuangan();
  }, []);
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8 mt-12 border border-yellow-200">
      <h2 className="text-right text-3xl font-bold text-yellow-700 mb-6">
        📘 Data Ruangan | E-Ruang UTI
      </h2>
      {loading ? (
  <p className="text-center text-yellow-600 font-medium">Memuat data...</p>
) : data.length === 0 ? (
  <p className="text-center text-gray-500">Tidak ada data ruangan.</p>
) : (
  <div className="overflow-x-auto">
  <table className="w-full table-auto border-collapse text-sm rounded-lg overflow-hidden">
    <thead>
      <tr className="bg-gradient-to-r from-yellow-300 to-yellow-400 text-white text-center uppercase tracking-wide text-xs font-semibold">
        <th className="py-4 px-4 text-black">Nama Ruangan</th>
        <th className="py-4 px-4 text-black">Kapasitas</th>
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
          } hover:bg-yellow-100 transition-colors duration-200`}
        >
          <td className="py-3 px-4 text-gray-800 font-medium">{item.namaRuangan}</td>
          <td className="py-3 px-4 text-gray-800 font-medium">{item.kapasitas}</td>
          <td className="py-3 px-4 text-gray-800 font-medium">{item.keterangan}</td>
          <td className="py-3 px-4 text-gray-800 font-medium">
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
)}
    </div>
    
  );
}
