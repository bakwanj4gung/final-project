<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pencapaian_mingguan extends Model
{
    use HasFactory;

    protected $fillable = ['id_santri', 'bulan', 'pekan_ke', 'awal_tasmi_pekanan', 'akhir_tasmi_pekanan', 'total_halaman_pekanan', 'murojaah'];

    public function santris()
    {
        return $this->belongsTo(Santri::class, 'id_santri');
    }
}
