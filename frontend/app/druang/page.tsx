"use client";
import React, { useEffect, useState } from "react";

type Ruangan = {
    id: number;
    nama: string;
    kapasitas: number;
    keterangan: string;
};

export default function DaftarRuangan() {
    const [dataRuangan, setDataRuangan] = useState<Ruangan[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3001/api/ruangan") 
            .then((res) => res.json())
            .then((data) => {
                setDataRuangan(Array.isArray(data) ? data : [])
                setLoading(false);
            })
            .catch((error) => {
                console.error("Terjadi kesalahan saat mengambil data Ruangan:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Daftar Data Ruangan</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <table className="min-w-full border">
                    <thead>
                        <tr className="bg-gray-300">
                            <th className="border px-4 py-2">No</th>
                            <th className="border px-4 py-2">Nama Ruangan</th>
                            <th className="border px-4 py-2">Kapasitas</th>
                            <th className="border px-4 py-2">Keterangan</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataRuangan.map((ruangan, idx) => (
                            <tr key={ruangan.id}>
                                <td className="border px-4 py-2">{idx + 1}</td>
                                <td className="border px-4 py-2">{ruangan.nama}</td>
                                <td className="border px-4 py-2">{ruangan.kapasitas}</td>
                                <td className="border px-4 py-2">{ruangan.keterangan}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}