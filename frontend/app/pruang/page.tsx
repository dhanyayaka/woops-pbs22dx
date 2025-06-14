"use client";
import React, { useState } from 'react';

export default function PeminjamanRuang() {
  const [namaPeminjam, setNamaPeminjam] = useState('');
  const [npm, setNpm] = useState('');
  const [namaRuang, setNamaRuang] = useState('');
  const [waktuAwal, setWaktuAwal] = useState('');
  const [waktuAkhir, setWaktuAkhir] = useState('');
  const [keterangan, setKeterangan] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulasi penyimpanan data
    setShowSuccess(true);
    // Reset form jika perlu
    setNamaPeminjam('');
    setNpm('');
    setNamaRuang('');
    setWaktuAwal('');
    setWaktuAkhir('');
    setKeterangan('');
    // Sembunyikan alert setelah beberapa detik
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-4">Peminjaman Ruang</h1>
      <div className="mt-8 max-w-2xl mx-auto">
        {showSuccess && (
          <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
            Data berhasil disimpan!
          </div>
        )}
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="namaPeminjam">
              Nama Peminjam *
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="namaPeminjam"
              type="text"
              value={namaPeminjam}
              onChange={(e) => setNamaPeminjam(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="npm">
              NPM *
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="npm"
              type="text"
              value={npm}
              onChange={(e) => setNpm(e.target.value)}
              required
              pattern="[0-9]{10}"
              title="NPM harus terdiri dari 10 digit angka"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="namaRuang">
              Nama Ruang *
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="namaRuang"
              type="text"
              value={namaRuang}
              onChange={(e) => setNamaRuang(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="waktuAwal">
              Waktu Awal *
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="waktuAwal"
              type="datetime-local"
              value={waktuAwal}
              onChange={(e) => setWaktuAwal(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="waktuAkhir">
              Waktu Akhir *
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="waktuAkhir"
              type="datetime-local"
              value={waktuAkhir}
              onChange={(e) => setWaktuAkhir(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="keterangan">
              Keterangan
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="keterangan"
              value={keterangan}
              onChange={(e) => setKeterangan(e.target.value)}
              rows={4}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Ajukan Peminjaman
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}