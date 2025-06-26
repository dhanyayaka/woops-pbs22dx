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
        {errors.namaPeminjam && (
          <span className="text-red-500 text-xs">Nama Peminjam tidak boleh kosong</span>
        )}
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend text-[14px]">NPM</legend>
        <input type="text" className="input" placeholder="Isi NPM" />
        {errors.npm && (
          <span className="text-red-500 text-xs">NPM tidak boleh kosong</span>
        )}
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend text-[14px]">Nama Ruangan</legend>
        <input type="text" className="input" placeholder="Isi Nama Ruangan" />
        {errors.namaRuangan && (
          <span className="text-red-500 text-xs">Nama Ruangan tidak boleh kosong</span>
        )}
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend text-[14px]">Tanggal Peminjaman</legend>
        <input type="date" className="input" />
        {errors.tanggalPeminjam && (
          <span className="text-red-500 text-xs">Tanggal Peminjaman tidak boleh kosong</span>
        )}
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend text-[14px]">Waktu Mulai</legend>
        <input type="time" className="input" />
        {errors.waktuMulai && (
          <span className="text-red-500 text-xs">Waktu Mulai tidak boleh kosong</span>
        )}
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend text-[14px]">Waktu Akhir</legend>
        <input type="time" className="input" />
        {errors.waktuAkhir && (
          <span className="text-red-500 text-xs">Waktu Akhir tidak boleh kosong</span>
        )}
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend text-[14px]">Keterangan</legend>
        <input  type="text" className="input" placeholder="Isi Keterangan" />
        {errors.keterangan && (
          <span className="text-red-500 text-xs">Keterangan tidak boleh kosong</span>
        )}
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