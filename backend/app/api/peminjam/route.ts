import { NextRequest, NextResponse } from "next/server";
// menarik fungsi prisma dari folder general
import { prisma, setBycrypt } from "@/app/api/general";

// buat service "GET" untuk peminjaman
export const GET = async () => {
  // tampilkan data/record dari peminjaman
  const view = await prisma.tb_peminjaman.findMany({});

  //   jika data kosong
  if (view.length == 0) {
    // return getResponseUserNotFound
    return NextResponse.json(
      {
        metaData: {
          error: 1,
          message: process.env.USER_NOT_FOUND_MESSAGE,
          status: 404,
        },
      },
      {
        status: 404,
      }
    );
  }

  // proses/response API
  return NextResponse.json(
    {
      metaData: {
        error: 0,
        message: null,
        status: 200,
      },
      data_user: view,
    },
    {
      status: 200,
    }
  );
};

// buat service POST (tb_user) untuk simpan data
export const POST = async (request: NextRequest) => {
  // buat object untuk data isian
  const { namaPeminjam_value, npm_value, namaRuangan_value, tanggalPeminjam_value, waktuMulai_value, waktuAkhir_value, keterangan_value } = await request.json();

  // cek apakah username sudah pernah digunakan
  const check = await prisma.tb_peminjaman.findMany({
    where: {
      tanggalPeminjam: tanggalPeminjam_value,
    },
  });

  // jika username ditemukan
  if (check.length == 1) {
    return NextResponse.json(
      {
        metaData: {
          error: 1,
          message: "Data Peminjaman Gagal Disimpan : Ruangan sudah Terpinjam",
          status: 409,
        },
      },
      {
        status: 409,
      }
    );
  }
  // simpan data
  const save = await prisma.tb_peminjaman.create({
    data: {
      namaPeminjam: namaPeminjam_value,
      npm: npm_value,
      namaRuangan: namaRuangan_value,
      tanggalPeminjam: new Date(tanggalPeminjam_value),
      waktuMulai: waktuMulai_value,
      waktuAkhir: waktuAkhir_value,
      keterangan: keterangan_value,
    },
  });

  // proses/response API
  return NextResponse.json(
    {
      metaData: {
        error: 0,
        message: "Data Peminjaman berhasil disimpan",
        status: 201,
      },
      // data_user: save,
    },
    {
      status: 201,
    }
  );
};
