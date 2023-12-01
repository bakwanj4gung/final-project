<?php

namespace App\Http\Controllers;

use App\Models\Halaqoh;
use App\Models\Pencapaian_bulanan;
use App\Models\Santri;
use App\Models\Ustadz;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SantriController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function dataSantri(Request $request)
    {
        // dd(Pencapaian_bulanan::select('id_santri', 'total_hafalan'));
        return Inertia::render('Data/Santri', [
            'santris' => Santri::with('halaqoh')->paginate(10),
            'totalJuz' => Pencapaian_bulanan::select('id_santri', 'total_hafalan')
                ->get()
                ->keyBy('id_santri') // Menggunakan id_santri sebagai kunci untuk mengakses total_hafalan
                ->pluck('total_hafalan', 'id_santri')
        ]);
    }

    public function inputSantri(Request $request)
    {
        return Inertia::render('Input/InputSantri', [
            'ustadzs' => Ustadz::select('id', 'nama')->get(),
            'halaqoh' => Halaqoh::select('id', 'nama_halaqoh', 'id_ustadz')->get()
        ]);
    }


}
