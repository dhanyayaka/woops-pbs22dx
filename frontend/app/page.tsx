"use client";

export default function Home() {
  return (
    <div className="mt-5">
      <div className="w-full overflow-x-auto">
        <div className="min-w-max rounded-box border border-base-content/10 bg-base-100">
          <table className="table w-full min-w-[1900px]">
            {/* head */}
            <thead>
              <tr>
                <th className="text-center w-2/9">Aksi</th>
                <th className="text-center w-1/9">Nama Peminjam</th>
                <th className="text-center w-1/9">NPM</th>
                <th className="text-center w-1/9">Tanggal Peminjam</th>
                <th className="text-center w-1/9">Nama Ruangan</th>
                <th className="text-center w-1/9">Waktu Awal</th>
                <th className="text-center w-1/9">Waktu Akhir</th>
                <th className="text-center w-2/9">Keterangan</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
