-- CreateTable
CREATE TABLE `tb_peminjaman` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `namaPeminjam` VARCHAR(50) NOT NULL,
    `npm` VARCHAR(20) NOT NULL,
    `namaRuangan` VARCHAR(50) NOT NULL,
    `tanggalPeminjam` DATE NOT NULL,
    `waktuMulai` VARCHAR(10) NOT NULL,
    `waktuAkhir` VARCHAR(10) NOT NULL,
    `keterangan` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
