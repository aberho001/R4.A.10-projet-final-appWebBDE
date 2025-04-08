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
        Schema::create('soirees', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->string('lieu');
            $table->date('date');
            $table->time('heure');
            $table->decimal('prix', 8, 2);
            $table->integer('capacite');
            $table->string('theme');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('soirees');
    }
};
