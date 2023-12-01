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
        Schema::create('halaqohs', function (Blueprint $table) {
            $table->id();
            $table->string('nama_halaqoh');
            $table->foreignId('id_ustadz')->references('id')->on('ustadzs')->nullable(); // Membuat relasi dengan kolom "id" di tabel "ustadzs"
            $table->foreignId('id_santri')->references('id')->on('santris')->nullable(); // Membuat relasi dengan kolom "id" di tabel "santris"
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('halaqohs');
    }
};
