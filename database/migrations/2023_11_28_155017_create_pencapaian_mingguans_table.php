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
        Schema::create('pencapaian_mingguans', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_santri')->references('id')->on('santris'); // Membuat relasi dengan kolom "id" di tabel "santris"
            $table->string('bulan');
            $table->enum('pekan_ke', ['Pertama','Kedua','Ketiga','Keempat','Kelima']);
            $table->string('awal_tasmi_pekanan');
            $table->string('akhir_tasmi_pekanan');
            $table->integer('total_halaman_pekanan');
            $table->string('murojaah');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pencapaian_mingguans');
    }
};
