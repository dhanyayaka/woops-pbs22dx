import { NextRequest, NextResponse } from "next/server";
// menarik fungsi prisma dari folder general
import { prisma } from "../general";

// buat service "GET" untuk tb_ruangan
export const GET = async () => {
    // tampilkan data/record dari tb_ruangan
    const view = await prisma.tb_ruangan.findMany({});

    //   jika data kosong
    if (view.length == 0) {
        // return getResponseRuanganNotFound
        return NextResponse.json(
            {
                metaData: {
                    error: 1,
                    message: "Data Ruangan Tidak Ditemukan !!!",
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
            data_ruangan: view,
        },
        {
            status: 200,
        }
    );
};

// buat service POST (tb_ruangan) untuk simpan data
export const POST = async (request: NextRequest) => {
    // buat object untuk data isian
    const { namaRuangan, kapasitas, keterangan } = await request.json();

    // cek apakah ruangan dengan nama_ruangan sudah pernah dibuat (contoh validasi)
    const check = await prisma.tb_ruangan.findMany({
        where: {
            namaRuangan: namaRuangan,
        },
    });

    // jika ruangan ditemukan
    if (check.length == 1) {
        return NextResponse.json(
            {
                metaData: {
                    error: 1,
                    message: "Data Ruangan Gagal Disimpan : Ruangan sudah terdaftar",
                    status: 409,
                },
            },
            {
                status: 409,
            }
        );
    }
    // simpan data
    const save = await prisma.tb_ruangan.create({
        data: {
            namaRuangan,
            kapasitas,
            keterangan
        },
    });

    // proses/response API
    return NextResponse.json(
        {
            metaData: {
                error: 0,
                message: "Data ruangan berhasil disimpan",
                status: 201,
            },
            data_ruangan: save,
        },
        {
            status: 201,
        }
    );
};
