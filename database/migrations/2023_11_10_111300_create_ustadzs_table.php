<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ustadzs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_user')->references('id')->on('users'); // Membuat relasi dengan kolom "id" di tabel "users"
            $table->string('gambar')->nullable();
            $table->string('nama', 50);
            $table->string('jabatan', 100);
            $table->date('tgl_masuk');
<<<<<<<< HEAD:database/migrations/2023_12_01_020813_create_ustadzs_table.php
            $table->foreignId('id_halaqoh')->references('id')->on('halaqohs')->nullable(); //Membuat relasi dengan kolom "id" di tabel "halaqohs"
========
            $table->unsignedBigInteger('id_halaqoh')->nullable();//Membuat relasi dengan kolom "id" di tabel "halaqohs"
>>>>>>>> 619cd923e6b8429df2dbfc2bd5001042374be50b:database/migrations/2023_11_10_111300_create_ustadzs_table.php
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ustadzs');
    }
};
