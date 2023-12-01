<?php

use App\Http\Controllers\ApiController;
use App\Http\Controllers\LaporanController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SantriController;
use App\Http\Controllers\UstadzController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/data-santri', [SantriController::class, 'dataSantri'])->middleware(['auth', 'verified'])->name('datasantri');
Route::get('/input-santri', [SantriController::class, 'inputSantri'])->middleware(['auth', 'verified'])->name('inputsantri');

Route::get('/data-asatidzah', [UstadzController::class, 'dataUstadz'])->middleware(['auth', 'verified'])->name('dataustadz');
Route::get('/input-asatidzah', [UstadzController::class, 'inputUstadz'])->middleware(['auth', 'verified'])->name('inputustadz');

Route::get('/input-mingguan', [LaporanController::class, 'inputMingguan'])->middleware(['auth', 'verified'])->name('inputmingguan');
Route::get('/api/v2/surat', [ApiController::class, 'apiSatu'])->name('api.surah.list');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
