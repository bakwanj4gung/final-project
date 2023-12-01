import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react'; // BUAT APA??
import { Head } from '@inertiajs/react';
import JavaScript from '@/Components/Scripts';

export default function Ustadz({ustadzs, auth}) {
    console.log (ustadzs)
    return (
        <>
        <Head title="Data Ustadz" /> {/* PENGEN Data Ustadz - Asisten Tahfidz */}
        <AuthenticatedLayout
            user={auth.user}
            header={<p className="font-semibold text-gray-800 leading-tight">Asatidzah</p>}
        >
                
            <div className="flex flex-wrap -mx-3">
                <div className="flex-none w-full max-w-full px-3">
                    <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                        <div className="p-6 pb-0 mb-5 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent font-semibold flex items-center justify-between">
                            <h4>Data Ustadz</h4>
                            <a href={route('inputustadz')} className="flex items-center gap-2 fill-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                <h5 className="hidden text-white font-semibold md:block ">Tambah Data</h5>
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                            </a>
                        </div>
                        <div className="flex-auto px-0 pt-0 pb-2">
                            <div className="p-0 overflow-x-auto">
                            <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                                <thead className="align-bottom">
                                <tr>
                                    <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xs border-b-solid tracking-none whitespace-nowrap text-slate-900 opacity-70">Nama</th>
                                    <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xs border-b-solid tracking-none whitespace-nowrap text-slate-900 opacity-70">Kelas/Kamar</th>
                                    <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xs border-b-solid tracking-none whitespace-nowrap text-slate-900 opacity-70">Halaqoh</th>
                                    <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xs border-b-solid tracking-none whitespace-nowrap text-slate-900 opacity-70">Total Juz</th>
                                    <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70" />
                                </tr>
                                </thead>
                                <tbody>
                                    {ustadzs.data.map((ustadz, index) => (
                                    
                                <tr>
                                    <td className="py-2 pl-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                        <div className="flex px-2 py-1">
                                            <div>
                                                <img src="../assets/img/team-2.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl" alt="user1" />
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <h6 className="mb-0 text-sm leading-normal">{ustadz.nama}</h6>
                                                <p className="mb-0 text-xs leading-tight text-slate-400">john@creative-tim.com</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-2 align-middle text bg-transparent border-b whitespace-nowrap shadow-transparent">
                                        <p className="mb-0 text-xs font-semibold leading-tight">Manager</p>
                                        <p className="mb-0 text-xs leading-tight text-slate-400">Organization</p>
                                    </td>
                                    <td className="py-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                        <span className="text-xs font-semibold leading-tight text-slate-400">23/04/18</span>
                                    </td>
                                    <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                        <span className="bg-gradient-to-tl from-green-600 to-lime-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Online</span>
                                    </td>
                                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                        <a href="javascript:;" className="text-xs font-semibold leading-tight text-slate-400"> Edit </a>
                                    </td>
                                </tr>
                                    )
                                    )}
                                
                                </tbody>
                            </table>
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
