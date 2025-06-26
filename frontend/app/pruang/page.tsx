"use client";
import axios from "axios";
import React, { useRef, useState } from "react";

export default function AddPeminjaman() {
  // State untuk error
  const [errors, setErrors] = useState({
    namaPeminjam: false,
    npm: false,
    namaRuangan: false,
    tanggalPeminjam: false,
    waktuMulai: false,
    waktuAkhir: false,
    keterangan: false,
  });

  // Ref untuk input
  const namaPeminjamRef = useRef<HTMLInputElement>(null);
  const npmRef = useRef<HTMLInputElement>(null);
  const namaRuanganRef = useRef<HTMLInputElement>(null);
  const tanggalPeminjamRef = useRef<HTMLInputElement>(null);
  const waktuMulaiRef = useRef<HTMLInputElement>(null);
  const waktuAkhirRef = useRef<HTMLInputElement>(null);
  const keteranganRef = useRef<HTMLInputElement>(null);

  // Fungsi reload
  const setReload = () => {
    location.href = "/pruang";
  };

  // Fungsi simpan
  const setSave = () => {
    const namaPeminjam = namaPeminjamRef.current?.value.trim() || "";
    const npm = npmRef.current?.value.trim() || "";
    const namaRuangan = namaRuanganRef.current?.value.trim() || "";
    const tanggalPeminjam = tanggalPeminjamRef.current?.value.trim() || "";
    const waktuMulai = waktuMulaiRef.current?.value.trim() || "";
    const waktuAkhir = waktuAkhirRef.current?.value.trim() || "";
    const keterangan = keteranganRef.current?.value.trim() || "";

    setErrors({
      namaPeminjam: !namaPeminjam,
      npm: !npm,
      namaRuangan: !namaRuangan,
      tanggalPeminjam: !tanggalPeminjam,
      waktuMulai: !waktuMulai,
      waktuAkhir: !waktuAkhir,
      keterangan: !keterangan,
    });

    if (
      namaPeminjam &&
      npm &&
      namaRuangan &&
      tanggalPeminjam &&
      waktuMulai &&
      waktuAkhir &&
      keterangan
    ) {
      axios
        .post("http://localhost:3001/api/peminjaman", {
          namaPeminjam,
          npm,
          namaRuangan,
          tanggalPeminjam,
          waktuMulai,
          waktuAkhir,
          keterangan,
        })
        .then((response) => {
          alert(response.data.metaData?.message || "Berhasil menyimpan data");
          setReload();
        })
        .catch((error) => {
          alert(error.response?.data?.metaData?.message || "Terjadi error");
        });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Tambah Data Peminjaman</h1>
        <form
          onSubmit={e => {
            e.preventDefault();
            setSave();
          }}
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nama Peminjam</label>
              <input
                ref={namaPeminjamRef}
                type="text"
                className={`input w-full ${errors.namaPeminjam ? "border-red-500" : ""}`}
                placeholder="Isi Nama Peminjam"
              />
              {errors.namaPeminjam && (
                <p className="text-xs text-red-600 mt-1">Nama Peminjam harus diisi</p>
              )}
            </div>
            <hr className="my-2 border-gray-200" />

            <div>
              <label className="block text-sm font-medium mb-1">NPM</label>
              <input
                ref={npmRef}
                type="text"
                className={`input w-full ${errors.npm ? "border-red-500" : ""}`}
                placeholder="Isi NPM"
              />
              {errors.npm && (
                <p className="text-xs text-red-600 mt-1">NPM harus diisi</p>
              )}
            </div>
            <hr className="my-2 border-gray-200" />

            <div>
              <label className="block text-sm font-medium mb-1">Nama Ruangan</label>
              <input
                ref={namaRuanganRef}
                type="text"
                className={`input w-full ${errors.namaRuangan ? "border-red-500" : ""}`}
                placeholder="Isi Nama Ruangan"
              />
              {errors.namaRuangan && (
                <p className="text-xs text-red-600 mt-1">Nama Ruangan harus diisi</p>
              )}
            </div>
            <hr className="my-2 border-gray-200" />

            <div>
              <label className="block text-sm font-medium mb-1">Tanggal Peminjaman</label>
              <input
                ref={tanggalPeminjamRef}
                type="date"
                className={`input w-full ${errors.tanggalPeminjam ? "border-red-500" : ""}`}
              />
              {errors.tanggalPeminjam && (
                <p className="text-xs text-red-600 mt-1">Tanggal Peminjaman harus diisi</p>
              )}
            </div>
            <hr className="my-2 border-gray-200" />

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Waktu Mulai</label>
                <input
                  ref={waktuMulaiRef}
                  type="time"
                  className={`input w-full ${errors.waktuMulai ? "border-red-500" : ""}`}
                />
                {errors.waktuMulai && (
                  <p className="text-xs text-red-600 mt-1">Waktu Mulai harus diisi</p>
                )}
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Waktu Akhir</label>
                <input
                  ref={waktuAkhirRef}
                  type="time"
                  className={`input w-full ${errors.waktuAkhir ? "border-red-500" : ""}`}
                />
                {errors.waktuAkhir && (
                  <p className="text-xs text-red-600 mt-1">Waktu Akhir harus diisi</p>
                )}
              </div>
            </div>
            <hr className="my-2 border-gray-200" />

            <div>
              <label className="block text-sm font-medium mb-1">Keterangan</label>
              <input
                ref={keteranganRef}
                type="text"
                className={`input w-full ${errors.keterangan ? "border-red-500" : ""}`}
                placeholder="Isi Keterangan"
              />
              {errors.keterangan && (
                <p className="text-xs text-red-600 mt-1">Keterangan harus diisi</p>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-8">
            <button
              type="submit"
              className="w-32 py-2 px-4 rounded-lg border-2 border-green-500 text-green-700 font-semibold bg-white hover:bg-green-700 hover:border-green-800 hover:text-white active:bg-green-900 transition-colors duration-200 shadow-sm flex items-center justify-center gap-2"
            >
              <svg
              className="w-5 h-5 text-green-500 group-hover:text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Simpan
            </button>
            <button
              type="button"
              onClick={setReload}
              className="w-32 py-2 px-4 rounded-lg border-2 border-red-500 text-red-700 font-semibold bg-white hover:bg-red-50 hover:border-red-600 transition-colors duration-200 shadow-sm flex items-center justify-center gap-2"
            >
              <svg
              className="w-5 h-5 text-red-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}