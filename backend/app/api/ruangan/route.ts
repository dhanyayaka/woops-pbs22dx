import { NextRequest, NextResponse } from "next/server";
// menarik fungsi prisma dari folder general
import { prisma } from "@/app/api/general";

// buat service "GET" untuk ruangan
export const GET = async () => {
    // tampilkan data/record dari ruangan
    const view = await prisma.tb_ruangan.findMany({});

    // jika data kosong
    if (view.length == 0) {
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
    const { namaRuangan_value, kapasitas_value, keterangan_value } = await request.json();

    // cek apakah ruangan sudah pernah digunakan
    const check = await prisma.tb_ruangan.findMany({
        where: {
            namaRuangan: namaRuangan_value,
        },
    });

    // jika ruangan ditemukan
    if (check.length >= 1) {
        return NextResponse.json(
            {
                metaData: {
                    error: 1,
                    message: "Data Ruangan Gagal Disimpan : Ruangan sudah ada",
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
            namaRuangan: namaRuangan_value,
            kapasitas: kapasitas_value,
            keterangan: keterangan_value,
        },
    });

    // proses/response API
    return NextResponse.json(
        {
            metaData: {
                error: 0,
                message: "Data Ruangan berhasil disimpan",
                status: 201,
            },
            // data_ruangan: save,
        },
        {
            status: 201,
        }
    );
};
