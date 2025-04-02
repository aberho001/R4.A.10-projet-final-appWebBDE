<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReservationGoodie extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_goodie',
        'id_reservation',
        'quantitee',
    ];

    public function reservation()
    {
        return $this->belongsTo(Reservation::class);
    }

    public function goodie()
    {
        return $this->belongsTo(Goodie::class);
    }
}
