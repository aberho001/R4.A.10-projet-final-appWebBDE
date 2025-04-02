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
        Schema::create('reservation_goodie', function (Blueprint $table) {
            $table->id(); // Crée une colonne 'id' auto-incrémentée
            $table->foreignId('id_reservation')->constrained('reservations');
            $table->foreignId('id_goodie')->constrained('goodies');
            $table->integer('quantitee');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservation_goodie');
    }
};
