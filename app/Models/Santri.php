<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Santri extends Model
{
    use HasFactory;

    protected $fillable = ['id_user', 'gambar', 'nama', 'kelas', 'kamar', 'tgl_masuk', 'id_ustadz', 'id_halaqoh'];


    //id santri dipake di table lain. Dan jadilah dia foreign key.

    public function pencapaian_mingguans()
    {
        return $this->hasMany(Pencapaian_mingguan::class, 'id_santri');
    }
    public function pencapaian_bulanans()
    {
        return $this->hasMany(Pencapaian_bulanan::class, 'id_santri');
    }
    public function catatans()
    {
        return $this->hasMany(Catatan::class, 'id_santri');
    }
    //sampai sini. id santri dipake di 4 tabel. makanya pakai hasMany

    //Beberapa foreign key di table santri. 
    public function user() //ini foreign key dari table user. di user tu namanya id. di sini, ia terhubung. 
    {
        return $this->belongsTo(User::class, 'id_user');
    }
    
    public function ustadzs() {
        return $this->belongsTo(Ustadz::class,'id_ustadz');
    }

    public function halaqoh() {
        return $this->belongsTo(Halaqoh::class,'id_halaqoh');
    }
}
