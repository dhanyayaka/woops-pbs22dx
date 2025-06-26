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

  setErrors({
      namaPeminjam: !namaPeminjam,
      npm: !npm,
      namaRuangan: !namaRuangan,
      tanggalPeminjam: !tanggalPeminjam,
      waktuMulai: !waktuMulai,
      waktuAkhir: !waktuAkhir,
      keterangan: !keterangan,
    });


  return (
    <div>
      <title>Tambah Data Peminjaman</title>
      <fieldset className="fieldset">
        <legend className="fieldset-legend text-[14px]">Nama Peminjam</legend>
        <input type="text" className="input" placeholder="Isi Nama Peminjam" />
        {errors.namaPeminjam && <p className="label text-red-700">Nama Peminjam harus diisi</p>}
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend text-[14px]">NPM</legend>
        <input type="text" className="input" placeholder="Isi NPM" />
        {errors.npm && <p className="label text-red-700">NPM harus diisi</p>}
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend text-[14px]">Nama Ruangan</legend>
        <input type="text" className="input" placeholder="Isi Nama Ruangan" />
        {errors.namaRuangan && <p className="label text-red-700">Nama Ruangan harus diisi</p>}
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend text-[14px]">Tanggal Peminjaman</legend>
        <input type="date" className="input" />
        {errors.tanggalPeminjam && <p className="label text-red-700">Tanggal Peminjaman harus diisi</p>}
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend text-[14px]">Waktu Mulai</legend>
        <input type="time" className="input" />
        {errors.waktuMulai && <p className="label text-red-700">Waktu Mulai harus diisi</p>}
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend text-[14px]">Waktu Akhir</legend>
        <input type="time" className="input" />
        {errors.waktuAkhir && <p className="label text-red-700">Waktu Akhir harus diisi</p>}
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend text-[14px]">Keterangan</legend>
        <input  type="text" className="input" placeholder="Isi Keterangan" />
        {errors.keterangan && <p className="label text-red-700">Keterangan harus diisi</p>}
      </fieldset>

      <section className="mt-5">
        <button className="btn btn-success mr-1.5 w-32">
          Simpan
        </button>
        <button  className="btn btn-error ml-1.5 w-32">
          Batal
        </button>
      </section>
    </div>
  );
}