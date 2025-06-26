"use client";

import { useEffect, useState } from "react";

interface Peminjaman {
  id: number;
  namaPeminjam: string;
  npm: string;
  namaRuangan: string;
  tanggalPeminjam: string;
  waktuMulai: string;
  waktuAkhir: string;
  keterangan: string;
}

export default function DataPeminjamPage() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Peminjaman[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPeminjaman = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/peminjam", {
          cache: "no-store", // Untuk development, agar data selalu fresh
        });
        const result = await res.json();

        if (res.ok && result.data_user) {
          setData(result.data_user);
        } else {
          console.error(result.metaData?.message || "Terjadi kesalahan");
        }
      } catch (error) {
        console.error(error);
        setError("Gagal mengambil data dari server.");
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchPeminjaman();
  }, []);

  const filteredData = data.filter((item) =>
    item.namaPeminjam.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-xl p-8 mt-12 border border-yellow-200">
      <h2 className="text-right text-3xl font-bold text-yellow-700 mb-6">
        📑 Data Peminjam | E-Ruang UTI
      </h2>
      {loading ? (
        <p className="text-center text-yellow-600 font-semibold">
          Memuat data...
        </p>
      ) : data.length === 0 ? (
        <p className="text-center text-gray-500">Tidak ada data peminjaman.</p>
      ) : (
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
                  <td className="py-3 px-4 font-medium text-yellow-900">
                    {item.namaPeminjam}
                  </td>
                  <td className="py-3 px-4 text-gray-700">{item.npm}</td>
                  <td className="py-3 px-4 text-gray-700">
                    {item.namaRuangan}
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    {item.tanggalPeminjam}
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    {item.waktuMulai} - {item.waktuAkhir}
                  </td>
                  <td className="py-3 px-4 text-gray-700">{item.keterangan}</td>
                  <td className="py-3 px-4">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded-full transition transform hover:scale-105"
                      onClick={() => alert(`Hapus ID: ${item.id}`)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
              {error && (
                <p className="text-red-600 text-sm text-center mt-2">{error}</p>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
