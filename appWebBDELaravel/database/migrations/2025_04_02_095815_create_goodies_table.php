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
        Schema::create('goodies', function (Blueprint $table) {
            $table->id("id_goodie");
            $table->string('nom');
            $table->string('quantitee');
            $table->string('image')->nullable();
            $table->string('description');
            $table->decimal('cout', 8, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('goodies');
    }
};
