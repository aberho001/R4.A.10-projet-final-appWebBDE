<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;

class ReservationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Reservation::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nom' => 'required|string|max:255',
            'email' => 'required|email|max:191',
            'telephone' => 'required|string|max:20',
            'id_soiree' => 'required|exists:soirees,id',
            'statut' => 'nullable|in:en_attente,valide,annule',
        ]);

        // Valeur par défaut si non fournie
        $validated['statut'] = $validated['statut'] ?? 'en_attente';

        $reservation = Reservation::create($validated);

        return response()->json($reservation, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $reservation = Reservation::find($id);

        if (!$reservation) {
            return response()->json(['message' => 'Reservation not found'], 404);
        }

        return response()->json($reservation);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $reservation = Reservation::find($id);

        if (!$reservation) {
            return response()->json(['message' => 'Reservation not found'], 404);
        }

        $validated = $request->validate([
            'nom' => 'sometimes|required|string|max:255',
            'email' => 'sometimes|required|email|max:191',
            'telephone' => 'sometimes|required|string|max:20',
            'id_soiree' => 'sometimes|required|exists:soirees,id',
            'statut' => 'sometimes|required|in:en_attente,valide,annule',
        ]);

        $reservation->update($validated);

        return response()->json($reservation);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $reservation = Reservation::find($id);

        if (!$reservation) {
            return response()->json(['message' => 'Reservation not found'], 404);
        }

        $reservation->delete();

        return response()->json(['message' => 'Reservation deleted successfully']);
    }

    /**
     * Get the reservations for a specific soirée.
     */
    public function getReservationsBySoiree($id)
    {
        $reservations = Reservation::where('id_soiree', $id)->get();

        return response()->json($reservations);
    }
}
