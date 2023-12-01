<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Artikel extends Model
{
    use HasFactory;

    protected $fillable = ['id_ustadz', 'judul', 'gambar', 'isi'];

    protected $hidden = ['slug'];

    public function ustadzs()
    {
        return $this->belongsTo(Ustadz::class,'id_ustadz');
    }
}
