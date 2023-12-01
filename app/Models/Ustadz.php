<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ustadz extends Model
{
    use HasFactory;

    protected $fillable = ['id_user', 'gambar', 'nama', 'jabatan', 'tgl_masuk', 'id_halaqoh'];

    //ID ustadz nyambung ke mana aja

    public function artikels()
    {
        return $this->hasMany(Artikel::class, 'id_ustadz');
    }

    public function santris()
    {
        return $this->hasMany(Santri::class, 'id_ustadz');
    }
    //stop

    //foreign key di table ustadzs
    public function user() //ini foreign key dari table user. di user tu namanya id.. 
    {
        return $this->belongsTo(User::class, 'id_user');
    }

    public function halaqoh()  
    {
        return $this->belongsTo(Halaqoh::class, 'id_halaqoh');
    }
}
