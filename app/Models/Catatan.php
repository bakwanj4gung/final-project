<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Catatan extends Model
{
    use HasFactory;
    protected $fillable = ['id_santri', 'catatan'];

    public function santris()
    {
        return $this->belongsTo(Santri::class, 'id_santri');
    }
}
