<?php

namespace Database\Seeders;

use App\Models\Reservation;
use Illuminate\Database\Seeder;

class ReservationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Reservation::create([
            'nom' => 'John Doe',
            'email' => 'johndoe@example.com',
            'telephone' => '1234567890',
            'id_soiree' => 1, // Assurez-vous que cette soirée existe (id = 1)
            'statut' => 'valide',
            'date_reservation' => now(),
        ]);

        Reservation::create([
            'nom' => 'Jane Doe',
            'email' => 'janedoe@example.com',
            'telephone' => '0987654321',
            'id_soiree' => 2, // Assurez-vous que cette soirée existe (id = 2)
            'statut' => 'en_attente',
            'date_reservation' => now(),
        ]);

        // Ajoute d'autres réservations si nécessaire
    }
}
