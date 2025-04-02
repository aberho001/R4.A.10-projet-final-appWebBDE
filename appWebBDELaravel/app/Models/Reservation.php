<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{

    use HasFactory;

    protected $fillable = [
        'nom',
        'email',
        'telephone',
        'id_soiree',
        'statut',
        'date_reservation',
    ];

    public function soiree()
    {
        return $this->belongsTo(Soiree::class, 'id_soiree');
    }

    public function reservationGoodies()
    {
        return $this->hasMany(ReservationGoodie::class, 'id_reservation');
    }
    
}
