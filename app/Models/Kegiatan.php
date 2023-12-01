<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kegiatan extends Model
{
    use HasFactory;

    protected $fillable = ['nama', 'tgl_mulai_kegiatan', 'tgl_selesai_kegiatan', 'tempat', 'deskripsi', 'gambar', 'id_santri', 'id_ustadz', 'id_halaqoh'];
}
