<?php

namespace Database\Seeders;

use App\Models\Soiree;
use Illuminate\Database\Seeder;

class SoireeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Soiree::create([
            'nom' => 'Soirée de lancement',
            'lieu' => 'Salle des fêtes',
            'date' => '2025-05-01',
            'heure' => '20:00:00',
            'prix' => 15.00,
            'capacite' => 100,
            'theme' => 'Lancement du BDE'
        ]);

        Soiree::create([
            'nom' => 'Soirée Halloween',
            'lieu' => 'Club le 8',
            'date' => '2025-10-31',
            'heure' => '22:00:00',
            'prix' => 10.00,
            'capacite' => 200,
            'theme' => 'Halloween'
        ]);

        // Ajoute d'autres soirées si nécessaire
    }
}
