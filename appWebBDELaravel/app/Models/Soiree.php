<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Soiree extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom',
        'lieu',
        'date',
        'heure',
        'prix',
        'capacite',
        'theme',
        'image',
    ];

    public function reservations()
    {
        return $this->hasMany(Reservation::class);
    }
}
