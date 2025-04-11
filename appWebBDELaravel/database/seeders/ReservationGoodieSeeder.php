<?php

namespace Database\Seeders;

use App\Models\ReservationGoodie;
use Illuminate\Database\Seeder;

class ReservationGoodieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ReservationGoodie::create([
            'id_reservation' => 1, // Assurez-vous que cette réservation existe (id = 1)
            'id_goodie' => 1, // Assurez-vous que ce goodie existe (id = 1)
            'quantitee' => 2
        ]);

        ReservationGoodie::create([
            'id_reservation' => 2, // Assurez-vous que cette réservation existe (id = 2)
            'id_goodie' => 2, // Assurez-vous que ce goodie existe (id = 2)
            'quantitee' => 1
        ]);

        // Ajoute d'autres associations si nécessaire
    }
}
