<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Halaqoh extends Model
{
    use HasFactory;

    protected $fillable = ['nama_halaqoh'];

    public function santris()
    {
        return $this->hasMany(Santri::class, 'id_halaqoh');
    }

    public function ustadzs()
    {
        return $this->hasMany(Ustadz::class, 'id_halaqoh');
    }

}
