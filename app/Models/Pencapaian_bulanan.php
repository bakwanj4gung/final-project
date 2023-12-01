<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pencapaian_bulanan extends Model
{
    use HasFactory;

    protected $fillable = ['id_santri', 'bulan', 'awal_tasmi_bulanan', 'akhir_tasmi_bulanan', 'total_halaman_bulanan', 'total_hafalan', 'murojaah'];

    public function santris()
    {
        return $this->belongsTo(Santri::class, 'id_santri');
    }

}
