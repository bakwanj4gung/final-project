import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react'; // BUAT APA??
import { Head } from '@inertiajs/react';
import JavaScript from '@/Components/Scripts';


export default function InputSantri({ auth, ustadzs, halaqoh}) {
    console.log(ustadzs)
    console.log(halaqoh)
    return (
        <>
        <Head title="Input Data Santri" /> {/* PENGEN Data Santri - Asisten Tahfidz */}
        <AuthenticatedLayout
            user={auth.user}
            header={<p className="font-semibold text-lg text-gray-800 leading-tight">Asatidzah</p>}
        >
                
            <div className="flex flex-wrap -mx-3">
                <div className="flex-none w-full max-w-full px-3">
                    <div className="relative py-5 px-8 flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border">
                        <div className="p-6 pb-0 mb-6 bg-white rounded-t-2xl">
                            <h6 className="md:w-1/4 xl:w-1/5 font-bold py-2 shadow-lg text-center rounded-lg">Tambah Data Ustadz</h6>
                        </div>
                        <div className="flex-auto px-0 pt-0 pb-2">
                            <div className="overflow-x-auto m-auto w-11/12">
                                <form>
                                    <div className="grid md:grid-cols-2 gap-7 mb-6">
                                        <div>
                                            <label for="name" className="block mb-2 font-semibold text-sm text-gray-900 dark:text-white">Nama Santri</label>
                                            <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg placeholder:text-slate-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Muhammad Faqih Ali" required />
                                        </div>
                                        <div>
                                            <label name="gambar" for="gambar" className="block mb-2 font-semibold text-sm text-gray-900 dark:text-white">Foto 3x4</label>
                                            <input name="gambar" id="gambar" type="file" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" />
                                            {/* <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p> */}
                                        </div>
                                        <div>
                                            <label for="kamar" className="block mb-2 font-semibold text-sm text-gray-900 dark:text-white">Kamar</label>
                                            <input type="text" id="kamar" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg placeholder:text-slate-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Damaskus 2" required />
                                        </div>
                                        <div>
                                            <label for="kelas" className="block mb-2 font-semibold text-sm text-gray-900 dark:text-white">Kelas (7 - 9)</label>
                                            <input type="text" id="kelas" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg placeholder:text-slate-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="8F" required />
                                        </div>  
                                        <div>
                                            <label for="tgl_masuk" className="block mb-2 font-semibold text-sm text-gray-900 dark:text-white">Tanggal Masuk</label>
                                            <input type="date" id="tgl_masuk" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                        </div>
                                        <div>
                                            <label for="hafalan_awal" className="block mb-2 font-semibold text-sm text-gray-900 dark:text-white">Hafalan Awal</label>
                                            <input type="text" id="hafalan_awal" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg placeholder:text-slate-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="An-Naba:1" required />
                                        </div>
                                        <div>
                                            <label for="nama_ustadz" className="block mb-2 font-semibold text-sm text-gray-900 dark:text-white">Muhaffidz</label>
                                            <select id="nama_ustadz" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                                <option selected>Nama Muhaffidz</option>
                                                {ustadzs.map((ustadz, index) => (

                                                <option key={halaqoh.id}> {ustadz.nama}</option>
                                                ))}
                                                
                                            </select>
                                        </div>
                                        <div>
                                            <label for="nama_halaqoh" className="block mb-2 font-semibold text-sm text-gray-900 dark:text-white">Halaqoh</label>
                                            <select id="nama_halaqoh" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                                <option selected>Nama Halaqoh</option>
                                                {halaqoh.map((halaqohs) => (
                                                    <option>{halaqohs.nama_halaqoh}</option>
                                                ))}
                                            </select>                                            
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <button type="button" class="text-white tracking-wide border-2 border-blue-700 bg-blue-700 hover:bg-blue-100 hover:border-2  hover:text-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold rounded-xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Simpan</button>
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




