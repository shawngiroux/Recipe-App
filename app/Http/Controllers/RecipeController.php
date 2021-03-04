<?php

namespace App\Http\Controllers;

use App\Models\Recipes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RecipeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $recipe_name = $request->input('recipe_name');
        $prep_time = $request->input('prep_time');
        $cook_time = $request->input('cook_time');
        $ingredients = $request->input('ingredients');
        $utensil = $request->input('utensil');
        $description = $request->input('description');

        DB::table('recipes')->insert([
            'name' => $recipe_name,
            'prep_time' => $prep_time,
            'cook_time' => $cook_time,
            'description' => $description
        ]);

        error_log(print_r($request->all(), true));
        return response(true, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $recipe = DB::table('recipes')
            ->select('name', 'cook_time', 'prep_time')
            ->where("id", $id)
            ->get();
        return response($recipe, 200);
    }

    /**
     * Gets all recipes
     *
     * @return \Illuminate\Htpp\Response
     */
    public function getAll()
    {
        $recipes = DB::table('recipes')
            ->select('id', 'name', 'cook_time', 'prep_time')
            ->get();
        return response($recipes, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
