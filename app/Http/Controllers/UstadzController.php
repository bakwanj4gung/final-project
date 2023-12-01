<?php

namespace App\Http\Controllers;

use App\Models\Halaqoh;
use App\Models\Santri;
use App\Models\Ustadz;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UstadzController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function dataUstadz(Request $request)
    {
        // dd(Ustadz::with('halaqoh')->get());
        return Inertia::render('Data/Ustadz', [
            "ustadzs" => Ustadz::with('halaqoh')->paginate(10)
        ]);
    }

    public function inputUstadz(Request $request)
    {
        return Inertia::render('Input/InputUstadz', [
            "halaqoh" => Halaqoh::select('id', 'nama_halaqoh')->get()
        ]);
    }
}
