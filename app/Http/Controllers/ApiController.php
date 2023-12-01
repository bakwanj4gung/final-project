<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ApiController extends Controller
{
    public function apiSatu (Request $request)
    {
        $response= Http::get('https://equran.id/api/v2/surat');

        if ($response->successful()) {
            // Ambil data surah dari respons API
            $surahList = $response->json();

            return response()->json(['surah_list' => $surahList]);
        }

        // Jika terjadi kesalahan saat melakukan permintaan ke API
        return response()->json(['error' => 'Failed to fetch surah list.'], $response->status());
    }
}
