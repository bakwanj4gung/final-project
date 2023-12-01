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
        Schema::create('kegiatans', function (Blueprint $table) {
            $table->id();
            $table->string('nama', 200)->nullable();
            $table->dateTime('tgl_mulai_kegiatan')->nullable();
            $table->dateTime('tgl_selesai_kegiatan')->nullable();
            $table->string('tempat', 200)->nullable();
            $table->text('deskripsi')->nullable();
            $table->string('gambar')->nullable();
            $table->foreignId('id_santri')->references('id')->on('santris')->nullable();
            $table->foreignId('id_ustadz')->references('id')->on('ustadzs')->nullable();
            $table->foreignId('id_halaqoh')->references('id')->on('halaqohs')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kegiatans');
    }
};
