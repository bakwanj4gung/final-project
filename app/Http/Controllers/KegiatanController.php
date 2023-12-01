<?php

namespace App\Http\Controllers;

use App\Models\Kegiatan;
use Illuminate\Http\Request;

class KegiatanController extends Controller
{
    public function index() {
        $kegiatan = Kegiatan::orderBy('tgl_mulai_kegiatan', 'desc')->first();

        if($kegiatan->count() > 0){
        return response()->json([
            'nama'                  => $kegiatan->nama,
            'tgl_mulai_kegiatan'    => $kegiatan->tgl_mulai_kegiatan,
            'tgl_selesai_kegiatan'  => $kegiatan->tgl_selesai_kegiatan,
            'tempat'                => $kegiatan->tempat,
            'id_santri'             => $kegiatan->id_santri,
            'id_ustadz'             => $kegiatan->id_ustadz,
            'id_halaqoh'            => $kegiatan->id_halaqoh,
        ]);
    } else {
        return response()->json([
            'message' => 'Tidak ada Kegiatan',
        ], 404);
    }
    }
}
