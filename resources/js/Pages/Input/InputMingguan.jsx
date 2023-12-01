import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React, { useState } from 'react'; // BUAT APA??
import { Head } from '@inertiajs/react';
import JavaScript from '@/Components/Scripts';


export default function InputMingguan({ auth, surahs}) {
    return (
        <>
        <Head title="Input Data Santri" /> {/* PENGEN Data Santri - Asisten Tahfidz */}
        <AuthenticatedLayout
            user={auth.user}
            header={<p className="font-semibold text-lg text-gray-800 leading-tight">Laporan</p>}
        >
                {/* KAITKAN API KE BULAN/NamaSurat/Ayat  NAMA HALAQOH & NAMA SANTRI AMBIL DARI DATA BASE!!!*/}
            <div className="flex flex-wrap -mx-3">
                <div className="flex-none w-full max-w-full px-3">
                    <div className="relative py-5 px-8 flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border">
                        <div className="flex-auto px-0 pt-0 pb-2">
                            <div className="overflow-x-auto m-auto w-11/12">
                                <form>
                                    <div className="md:flex gap-3 mb-9 items-center justify-between">
                                        <div className="pb-0 mb-6 bg-white rounded-t-2xl">
                                            <h6 className="font-bold py-2 px-5 shadow-lg text-center rounded-lg">Laporan Pekanan</h6>
                                        </div>
                                        <div className="md:flex items-center md:justify-center gap-3"> {/* LIHAT LAGI!!! */}
                                            {/* BULAN tasmi */}
                                            <div className="flex gap-2 items-center mb-6">
                                                <label for="bulan_tasmi" className="font-bold text-sm">Bulan :</label>
                                                <select id="bulan_tasmi" className="col-span-2 p-1 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                                    <option selected>Bulan</option>
                                                    {/* BLOMM */}
                                                </select>
                                            </div>
                                            {/* PEKAN tasmi */}
                                            <div className="flex gap-2 items-center mb-6">
                                                <label for="bulan_tasmi" className="font-bold text-sm">Pekan :</label>
                                                <select id="bulan_tasmi" className="col-span-2 p-1 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                                    <option selected>Bulan</option>
                                                    {/* BLOMMM */}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-7 mb-6">
                                    <div>
                                            {/* <label for="nama_halaqoh" className="block mb-2 font-semibold text-sm text-gray-900 dark:text-white">Halaqoh</label> */}
                                            <select id="nama_halaqoh" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                                <option selected>Nama Halaqoh</option>
                                                
                                                
                                            </select>                                            
                                        </div>
                                        <div>
                                            {/* <label for="nama" className="block mb-2 font-semibold text-sm text-gray-900 dark:text-white">Santri</label> */}
                                            <select id="nama" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                                <option selected>Nama Santri</option>
                                                
                                                
                                            </select>
                                        </div>
                                        <div className="border-2 rounded-2xl py-5 px-4">
                                            <label for="awal_tasmi_pekanan" className="font-bold text-sm mb-3">Awal Tasmi'</label>
                                            <div className="grid grid-cols-3 gap-3">
                                                <select id="awal_tasmi_pekanan" className="block col-span-2 pt-3 pb-2.5 px-4 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                                    <option selected>Nama Surat</option>
                                                    {surahs.data.map((surah,index) => (
                                                    <option key={surah.nomor}>{surah.namaLatin}</option>
                                                    ))}
                                                </select>

                                                <select id="awal_tasmi_pekanan" className="block pt-3 pb-2.5 px-4 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                                    <option selected>Ayat</option>
                                                    <option >Ayat</option>
                                                </select>
                                                        
                                            </div>
                                        </div>  
                                        <div className="border-2 rounded-2xl py-5 px-4">
                                            <label for="underline_select" className="font-bold text-sm mb-3">Akhir Tasmi'</label>
                                            <div className="grid grid-cols-3 gap-3">
                                                <select id="underline_select" className="block col-span-2 pt-3 pb-2.5 px-4 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                                    <option selected>Nama Surat</option>
                                                    {surahs.data.map((surah,index) => (
                                                    <option key={surah.nomor}>{surah.namaLatin}</option>
                                                ))}
                                                </select>
                                                <select id="underline_select" className="block pt-3 pb-2.5 px-4 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                                    <option selected>Ayat</option>
                                                </select>
                                            </div>
                                        </div>  
                                        
                                        
                                    </div>
                                    <div className="flex justify-end">
                                        <button type="button" className="text-white tracking-wide border-2 border-blue-700 bg-blue-700 hover:bg-blue-100 hover:border-2  hover:text-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold rounded-xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Simpan</button>
                                    </div>
                                    </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
        <JavaScript />
        </>
    )
}




