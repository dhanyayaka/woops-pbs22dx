"use client";
import { useEffect, useState } from "react";

export default function DataPeminjamPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/api/peminjaman")
      .then((res) => res.json())
      .then((result) => {
        setData(result.data_user || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-8 mt-12">
      <h2 className="text-2xl font-bold">Data Peminjam</h2>
      {loading ? <p>Loading data...</p> : <div>Data berhasil dimuat</div>}
    </div>
  );
}
