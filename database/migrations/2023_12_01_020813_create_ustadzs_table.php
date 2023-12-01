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
            $table->foreignId('id_halaqoh')->references('id')->on('halaqohs')->nullable(); //Membuat relasi dengan kolom "id" di tabel "halaqohs"
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
