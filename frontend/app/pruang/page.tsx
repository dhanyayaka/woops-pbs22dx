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
    <div>
      <title>Tambah Data Peminjaman</title>
      <fieldset className="fieldset">
        <legend className="fieldset-legend text-[14px]">Nama Peminjam</legend>
        <input ref={namaPeminjamRef} type="text" className="input" placeholder="Isi Nama Peminjam" />
        {errors.namaPeminjam && <p className="label text-red-700">Nama Peminjam harus diisi</p>}
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend text-[14px]">NPM</legend>
        <input ref={npmRef} type="text" className="input" placeholder="Isi NPM" />
        {errors.npm && <p className="label text-red-700">NPM harus diisi</p>}
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend text-[14px]">Nama Ruangan</legend>
        <input ref={namaRuanganRef} type="text" className="input" placeholder="Isi Nama Ruangan" />
        {errors.namaRuangan && <p className="label text-red-700">Nama Ruangan harus diisi</p>}
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend text-[14px]">Tanggal Peminjaman</legend>
        <input ref={tanggalPeminjamRef} type="date" className="input" />
        {errors.tanggalPeminjam && <p className="label text-red-700">Tanggal Peminjaman harus diisi</p>}
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend text-[14px]">Waktu Mulai</legend>
        <input ref={waktuMulaiRef} type="time" className="input" />
        {errors.waktuMulai && <p className="label text-red-700">Waktu Mulai harus diisi</p>}
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend text-[14px]">Waktu Akhir</legend>
        <input ref={waktuAkhirRef} type="time" className="input" />
        {errors.waktuAkhir && <p className="label text-red-700">Waktu Akhir harus diisi</p>}
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend text-[14px]">Keterangan</legend>
        <input ref={keteranganRef} type="text" className="input" placeholder="Isi Keterangan" />
        {errors.keterangan && <p className="label text-red-700">Keterangan harus diisi</p>}
      </fieldset>

      <section className="mt-5">
        <button onClick={setSave} className="btn btn-success mr-1.5 w-32">
          Simpan
        </button>
        <button onClick={setReload} className="btn btn-error ml-1.5 w-32">
          Batal
        </button>
      </section>
    </div>
  );
}