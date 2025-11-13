export interface Berita {
    id: string;
    nama: string;
    tanggal?: string;
    isi: string;
}
export const beritaList: Berita[] = [
    {
        id: '1',
        nama: 'Berita Pertama',
        isi: 'Ini adalah isi dari berita pertama.'
    },
    {
        id: '2',
        nama: 'Berita Kedua',

        tanggal: '2024-06-02',


        isi: 'Ini adalah isi dari berita kedua.'
    },
]