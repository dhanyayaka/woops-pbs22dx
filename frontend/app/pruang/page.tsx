"use client";
import axios from "axios";
import React, { useRef, useState } from "react";

export default function AddPeminjaman() {
  
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

  return (
    <div>
      <title>Tambah Data Peminjaman</title>
      <fieldset className="fieldset">
        <legend className="fieldset-legend text-[14px]">Nama Peminjam</legend>
        <input type="text" className="input" placeholder="Isi Nama Peminjam" />
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend text-[14px]">NPM</legend>
        <input type="text" className="input" placeholder="Isi NPM" />
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend text-[14px]">Nama Ruangan</legend>
        <input type="text" className="input" placeholder="Isi Nama Ruangan" />
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend text-[14px]">Tanggal Peminjaman</legend>
        <input type="date" className="input" />
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend text-[14px]">Waktu Mulai</legend>
        <input type="time" className="input" />
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend text-[14px]">Waktu Akhir</legend>
        <input type="time" className="input" />
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend text-[14px]">Keterangan</legend>
        <input  type="text" className="input" placeholder="Isi Keterangan" />
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