<?php

namespace Database\Seeders;

use App\Models\Goodie;
use Illuminate\Database\Seeder;

class GoodieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Goodie::create([
            'nom' => 'T-shirt BDE',
            'quantitee' => '50',
            'description' => 'T-shirt officiel du BDE',
            'cout' => 12.00
        ]);

        Goodie::create([
            'nom' => 'Mug BDE',
            'quantitee' => '100',
            'description' => 'Mug à l\'effigie du BDE',
            'cout' => 8.00
        ]);

        // Ajoute d'autres goodies si nécessaire
    }
}
