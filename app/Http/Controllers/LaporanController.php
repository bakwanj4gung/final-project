<?php

namespace App\Http\Controllers;

use App\Models\Pencapaian_mingguan;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class LaporanController extends Controller
{
    public function inputMingguan (Request $request)
    {
        try {
            $surahResponse = Http::get('https://equran.id/api/v2/surat');
            if ($surahResponse->successful()) {
                return Inertia::render('Input/InputMingguan', [
                    "surahs" => collect($surahResponse->json())
                ]);
            } else {
                 // Tanggapi ketika permintaan ke API tidak berhasil
                return response()->json(['error' => 'Failed to fetch surah list.'], $surahResponse->status());
            }
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    
    public function getAyat($nomorSurat)
    {
        try{
        $ayatResponse = Http::get('https://equran.id/api/v2/surat/$nomorSurat');

        if($ayatResponse->successful()){
            return response()->json($ayatResponse->json());
        }
        else {
            return response()->json(['error' => 'Failed to fetch ayat list.'], $ayatResponse->status());
        }
        } catch (Exception $e) 
            {
            return response()->json(['error' => $e->getMessage()], 500);
            }
    }
}
