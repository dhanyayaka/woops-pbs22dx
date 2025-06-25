import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../general";

// DELETE ruangan by id
export const DELETE = async (
    request: NextRequest,
    props: { params: Promise<{ id: string }> }
) => {
    try {
        const params = await props.params;
        const check = await prisma.tb_ruangan.findUnique({
            where: {
                id: Number(params.id),
            },
        });

        if (!check) {
            return NextResponse.json(
                {
                    metaData: {
                        error: 1,
                        message: "Data Ruangan Tidak Ditemukan !!!",
                        status: 404,
                    },
                },
                {
                    status: 200,
                }
            );
        }

        await prisma.tb_ruangan.delete({
            where: {
                id: Number(params.id),
            },
        });

        return NextResponse.json(
            {
                metaData: {
                    error: 0,
                    message: "Data Ruangan Berhasil Dihapus !!!",
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

// GET ruangan detail by id
export const GET = async (
    request: NextRequest,
    props: { params: Promise<{ id: string }> }
) => {
    try {
        const params = await props.params;
        const check = await prisma.tb_ruangan.findUnique({
            where: {
                id: Number(params.id),
            },
        });

        if (!check) {
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

        return NextResponse.json(
            {
                metaData: {
                    error: 0,
                    message: null,
                    status: 200,
                },
                data_ruangan: check,
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

// PUT update ruangan by id
export const PUT = async (
    request: NextRequest,
    props: { params: Promise<{ id: string }> }
) => {
    const params = await props.params;

    const check = await prisma.tb_ruangan.findUnique({
        where: {
            id: Number(params.id),
        },
    });

    if (!check) {
        return NextResponse.json(
            {
                metaData: {
                    error: 1,
                    message: process.env.RUANGAN_NOT_FOUND_MESSAGE,
                    status: 404,
                },
            },
            {
                status: 404,
            }
        );
    }

    // Ganti field sesuai dengan struktur tb_ruangan Anda
    const { namaRuangan, kapasitas, keterangan } = await request.json();

    await prisma.tb_ruangan.update({
        where: {
            id: Number(params.id),
        },
        data: {
            namaRuangan,
            kapasitas,
            keterangan,
        },
    });

    return NextResponse.json(
        {
            metaData: {
                error: 0,
                message: "Data Ruangan Berhasil Diupdate !!!",
                status: 200,
            },
        },
        {
            status: 200,
        },
    );
};
