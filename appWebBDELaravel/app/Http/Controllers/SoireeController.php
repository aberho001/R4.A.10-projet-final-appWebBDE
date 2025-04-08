<?php

namespace App\Http\Controllers;

use App\Models\Soiree;
use Illuminate\Http\Request;

class SoireeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $soirees = Soiree::all();

        return response()->json($soirees);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nom' => 'required|string|max:255',
            'lieu' => 'required|string|max:255',
            'date' => 'required|date',
            'heure' => 'required|date_format:H:i',
            'prix' => 'required|numeric',
            'capacite' => 'required|integer',
            'theme' => 'required|string|max:255',
        ]);

        $soiree = Soiree::create($request->all());

        return response()->json($soiree, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $soiree = Soiree::find($id);

        if (!$soiree) {
            return response()->json(['message' => 'Soirée not found'], 404);
        }

        return response()->json($soiree);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'nom' => 'string|max:255',
            'lieu' => 'string|max:255',
            'date' => 'date',
            'heure' => 'date_format:H:i',
            'prix' => 'numeric',
            'capacite' => 'integer',
            'theme' => 'string|max:255',
        ]);

        $soiree = Soiree::find($id);

        if (!$soiree) {
            return response()->json(['message' => 'Soirée not found'], 404);
        }

        $soiree->update($request->all());

        return response()->json($soiree);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $soiree = Soiree::find($id);

        if (!$soiree) {
            return response()->json(['message' => 'Soirée not found'], 404);
        }

        $soiree->delete();

        return response()->json(['message' => 'Soirée deleted successfully']);
    }
}
