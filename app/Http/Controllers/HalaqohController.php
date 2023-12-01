<?php

namespace App\Http\Controllers;

use App\Models\Halaqoh;
use Illuminate\Http\Request;

class HalaqohController extends Controller
{
    public function index() {
        $jumlahHalaqoh = Halaqoh::all()->count();
        return response()->json([ 'jumlahHalaqoh' => $jumlahHalaqoh ]);
    }
}
