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
        Schema::create('santris', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_user')->references('id')->on('users')->nullable(); // Membuat relasi dengan kolom "id" di tabel "users"
            $table->string('gambar')->nullable();
            $table->string('nama', 50);
            $table->string('kelas', 10);
            $table->string('kamar', 30);
            $table->date('tgl_masuk');
            $table->string('hafalan_awal', 20)->default('An-Naba');
            $table->foreignId('id_ustadz')->references('id')->on('ustadzs'); // Membuat relasi dengan kolom "id" di tabel "ustadzs"
            $table->unsignedBigInteger('id_halaqoh')->nullable(); //Membuat relasi dengan kolom "id" di tabel "halaqohs"
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('santris');
    }
};
