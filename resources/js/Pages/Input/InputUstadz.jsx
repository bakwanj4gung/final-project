import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react'; // BUAT APA??
import { Head } from '@inertiajs/react';
import JavaScript from '@/Components/Scripts';


export default function InputUstadz({ auth, halaqoh }) {
    console.log(halaqoh)
    return (
        <>
        <Head title="Input Data Ustadz" /> {/* PENGEN Data Santri - Asisten Tahfidz */}
        <AuthenticatedLayout
            user={auth.user}
            header={<p className="font-semibold text-lg text-gray-800 leading-tight">Santri</p>}
        >
                
                <div className="flex flex-wrap -mx-3">
                    <div className="flex-none w-full max-w-full px-3">
                        <div className="relative py-5 px-8 flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border">
                            <div className="flex items-center justify-between mb-6">
                                <div className="p-6 pb-0 bg-white rounded-t-2xl">
                                    <h6 className="font-bold py-2 px-3 shadow-lg text-center rounded-lg">Tambah Data Ustadz</h6>
                                </div>
                                <a href={route('inputustadz')} className="flex items-center gap-2 fill-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    <h5 className="hidden text-white font-semibold md:block ">Tambah Data</h5>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                                </a>
                            </div>
                            <div className="flex-auto px-0 pt-0 pb-2">
                                <div className="overflow-x-auto m-auto w-11/12">
                                    <form>
                                        <div className="grid md:grid-cols-3 gap-6 mb-6">
                                            <div className="col-span-2">
                                                <label for="name" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Nama Ustadz</label>
                                                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 placeholder:text-slate-300 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Muhammad Faqih Ali" required />
                                            </div>
                                            <div>
                                                <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white" for="file_input">Foto 3x4</label>
                                                <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
                                            </div>
                                            <div>
                                                <label for="kelas" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Jabatan</label>
                                                <input type="text" id="kelas" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 placeholder:text-slate-300 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Musyrif Halaqoh" required />
                                            </div>
                                            <div>
                                                <label for="kamar" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Tanggal Masuk</label>
                                                <input type="date" id="kamar" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                            </div>
                                            <div>
                                                <label for="nama_halaqoh" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Halaqoh</label>
                                                <select id="nama_halaqoh" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                                    <option selected>Nama Halaqoh</option>
                                                    {halaqoh.map((halaqohs) => (
                                                        <option>{halaqohs.nama_halaqoh}</option>
                                                    )
                                                    )}
                                                    
                                                </select>                                            
                                            </div>
                                        </div>
                                        <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 my-2">Simpan</button>                                    
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




