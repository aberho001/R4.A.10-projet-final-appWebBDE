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
        Schema::create('reservations', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->string(
                'email',
                191
            );
            $table->string(
                'telephone',
                20
            );
            $table->foreignId('id_soiree')->reference('id')->on('soirees')->onDelete('cascade');
            $table->enum(
                'statut',
                ['en_attente', 'valide', 'annule']
            )->default('en_attente');
            $table->datetime('date_reservation')->useCurrent();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservations');
    }
};
