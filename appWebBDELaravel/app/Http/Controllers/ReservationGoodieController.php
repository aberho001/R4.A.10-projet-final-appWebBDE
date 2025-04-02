<?php

namespace App\Http\Controllers;

use App\Models\ReservationGoodie;
use Illuminate\Http\Request;

class ReservationGoodieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $reservationsGoodies = ReservationGoodie::all();

        return response()->json($reservationsGoodies);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|integer',
            'goodie_id' => 'required|integer',
            'quantite' => 'required|integer',
        ]);

        $reservationGoodie = ReservationGoodie::create($request->all());

        return response()->json($reservationGoodie, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $reservationGoodie = ReservationGoodie::find($id);

        if (!$reservationGoodie) {
            return response()->json(['message' => 'Reservation Goodie not found'], 404);
        }

        return response()->json($reservationGoodie);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'user_id' => 'integer',
            'goodie_id' => 'integer',
            'quantite' => 'integer',
        ]);

        $reservationGoodie = ReservationGoodie::find($id);

        if (!$reservationGoodie) {
            return response()->json(['message' => 'Reservation Goodie not found'], 404);
        }

        $reservationGoodie->update($request->all());

        return response()->json($reservationGoodie);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $reservationGoodie = ReservationGoodie::find($id);

        if (!$reservationGoodie) {
            return response()->json(['message' => 'Reservation Goodie not found'], 404);
        }

        $reservationGoodie->delete();

        return response()->json(['message' => 'Reservation Goodie deleted successfully']);
    }
}
