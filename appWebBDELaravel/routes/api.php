<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

use App\Http\Controllers\GoodieController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\ReservationGoodieController;
use App\Http\Controllers\SoireeController;

Route::get('/goodies', [GoodieController::class, 'index']);
Route::get('/goodies/{id}', [GoodieController::class, 'show']);
Route::post('/goodies', [GoodieController::class, 'store']);
Route::put('/goodies/{id}', [GoodieController::class, 'update']);
Route::delete('/goodies/{id}', [GoodieController::class, 'destroy']);

Route::get('/reservations', [ReservationController::class, 'index']);
Route::get('/reservations/{id}', [ReservationController::class, 'show']);
Route::post('/reservations', [ReservationController::class, 'store']);
Route::put('/reservations/{id}', [ReservationController::class, 'update']);
Route::delete('/reservations/{id}', [ReservationController::class, 'destroy']);

Route::get('/reservation-goodies', [ReservationGoodieController::class, 'index']);
Route::get('/reservation-goodies/{id}', [ReservationGoodieController::class, 'show']);
Route::post('/reservation-goodies', [ReservationGoodieController::class, 'store']);
Route::put('/reservation-goodies/{id}', [ReservationGoodieController::class, 'update']);
Route::delete('/reservation-goodies/{id}', [ReservationGoodieController::class, 'destroy']);

Route::get('/soirees', [SoireeController::class, 'index']);
Route::get('/soirees/{id}', [SoireeController::class, 'show']);
Route::post('/soirees', [SoireeController::class, 'store']);
Route::put('/soirees/{id}', [SoireeController::class, 'update']);
Route::delete('/soirees/{id}', [SoireeController::class, 'destroy']);