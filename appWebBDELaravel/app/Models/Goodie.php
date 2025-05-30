<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Goodie extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom',
        'quantitee',
        'description',
        'cout',
    ];

    public function reservations()
    {
        return $this->belongsTo(Reservation::class);
    }

    public function reservationGoodies()
    {
        return $this->hasMany(ReservationGoodie::class, 'id_goodie');
    }
}
