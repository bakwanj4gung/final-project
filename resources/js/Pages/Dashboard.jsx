import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react'; // BUAT APA??
import { Head } from '@inertiajs/react';
import JavaScript from '@/Components/Scripts';

export default function Dashboard({ auth }) {
    return (
        <>
        <Head title="Dashboard" /> {/* PENGEN DASHBOARD - Asisten Tahfidz */}
        <AuthenticatedLayout
            user={auth.user}
            header={<p className="font-semibold text-gray-800 leading-tight">Dashboard</p>}
        >

            
            <div className="flex flex-col h-full">
                <p className="pt-2 mb-1 font-semibold">Built by developers</p>
                <h5 className="font-bold">Soft UI Dashboard</h5>
                <p className="mb-12">From colors, cards, typography to complex elements, you will find the full documentation.</p>
                <a className="mt-auto mb-0 font-semibold leading-normal text-sm group text-slate-500">
                    Read More
                    <i className="fas fa-arrow-right ease-bounce text-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200"></i>
                </a>
            </div>
            
        </AuthenticatedLayout>
        <JavaScript />
        </>
    );
}
