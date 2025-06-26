"use client";
import { useState } from "react";

export default function DataPeminjamPage() {
  const [data, setData] = useState([]);

  return (
    <div className="max-w-7xl mx-auto p-8 mt-12">
      <h2 className="text-2xl font-bold">Data Peminjam</h2>
    </div>
  );
}
