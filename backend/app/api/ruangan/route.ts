import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../general";

// DELETE peminjam by id
export const DELETE = async (
    request: NextRequest,
    props: { params: Promise<{ id: string }> }
) => {
    try {
        const params = await props.params;
        const check = await prisma.tb_peminjaman.findUnique({
            where: {
                id: Number(params.id),
            },
        });

        if (!check) {
            return NextResponse.json(
                {
                    metaData: {
                        error: 1,
                        message: process.env.PEMINJAM_NOT_FOUND_MESSAGE,
                        status: 404,
                    },
                },
                {
                    status: 200,
                }
            );
        }

        await prisma.tb_peminjaman.delete({
            where: {
                id: Number(params.id),
            },
        });

        return NextResponse.json(
            {
                metaData: {
                    error: 0,
                    message: "Data Peminjam Berhasil Dihapus !!!"   ,
                    status: 200,
                },
            },
            {
                status: 200,
            }
        );
    } catch (e: any) {
        return NextResponse.json(
            {
                metaData: {
                    error: 1,
                    message: process.env.PARAMETER_MUST_BE_NUMERIC_MESSAGE,
                    status: 400,
                },
            },
            {
                status: 400,
            }
        );
    }
};

// GET peminjam detail by id
export const GET = async (
    request: NextRequest,
    props: { params: Promise<{ id: string }> }
) => {
    try {
        const params = await props.params;
        const check = await prisma.tb_peminjaman.findUnique({
            where: {
                id: Number(params.id),
            },
        });

        if (!check) {
            return NextResponse.json(
                {
                    metaData: {
                        error: 1,
                        message: "Data Peminjam Tidak Ditemukan !!!",
                        status: 404,
                    },
                },
                {
                    status: 404,
                }
            );
        }

        return NextResponse.json(
            {
                metaData: {
                    error: 0,
                    message: null,
                    status: 200,
                },
                data_peminjam: check,
            },
            {
                status: 200,
            }
        );
    } catch (e: any) {
        return NextResponse.json(
            {
                metaData: {
                    error: 1,
                    message: "Parameter harus berupa angka !!!",
                    status: 400,
                },
            },
            {
                status: 400,
            }
        );
    }
};

// PUT update peminjam by id
export const PUT = async (
    request: NextRequest,
    props: { params: Promise<{ id: string }> }
) => {
    const params = await props.params;

    const check = await prisma.tb_peminjaman.findUnique({
        where: {
            id: Number(params.id),
        },
    });

    if (!check) {
        return NextResponse.json(
            {
                metaData: {
                    error: 1,
                    message: process.env.PEMINJAM_NOT_FOUND_MESSAGE,
                    status: 404,
                },
            },
            {
                status: 404,
            }
        );
    }

    // Ganti field sesuai dengan struktur tb_peminjam Anda
    const { namaPeminjam, npm, namaRuangan, tanggalPeminjam, waktuMulai, waktuAkhir, keterangan } = await request.json();

    await prisma.tb_peminjaman.update({
        where: {
            id: Number(params.id),
        },
        data: {
            namaPeminjam,
            npm,
            namaRuangan,
            tanggalPeminjam,
            waktuMulai,
            waktuAkhir,
            keterangan,
        },
    });

    return NextResponse.json(
        {
            metaData: {
                error: 0,
                message: "Data Peminjam Berhasil Diupdate !!!",
                status: 200,
            },
        },
        {
            status: 200,
        }
    );
};
