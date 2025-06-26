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

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8 mt-12 border border-yellow-200">
      <h2 className="text-right text-3xl font-bold text-yellow-700 mb-6">
        📘 Data Ruangan | E-Ruang UTI
      </h2>
    </div>
  );
}
