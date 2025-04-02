<?php

namespace App\Http\Controllers;

use App\Models\Goodie;
use Illuminate\Http\Request;

class GoodieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $goodies = Goodie::all();

        return response()->json($goodies);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nom' => 'required|string|max:255',
            'quantitee' => 'required|integer',
            'description' => 'string|max:255',
            'cout' => 'required|numeric',
        ]);

        $goodie = Goodie::create($request->all());

        return response()->json($goodie, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $goodie = Goodie::find($id);

        if (!$goodie) {
            return response()->json(['message' => 'Goodie not found'], 404);
        }

        return response()->json($goodie);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'nom' => 'string|max:255',
            'quantitee' => 'integer',
            'description' => 'string|max:255',
            'cout' => 'numeric',
        ]);

        $goodie = Goodie::find($id);

        if (!$goodie) {
            return response()->json(['message' => 'Goodie not found'], 404);
        }

        $goodie->update($request->all());

        return response()->json($goodie);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $goodie = Goodie::find($id);

        if (!$goodie) {
            return response()->json(['message' => 'Goodie not found'], 404);
        }

        $goodie->delete();

        return response()->json(['message' => 'Goodie deleted successfully']);
    }
}
