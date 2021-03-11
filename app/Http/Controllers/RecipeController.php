<?php

namespace App\Http\Controllers;

use App\Models\Recipes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

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
        $data = json_decode($request->input('body'), true);

        $recipe_name = $data['recipe_name'];
        $prep_time = $data['prep_time'];
        $cook_time = $data['cook_time'];
        $description = $data['description'];
        $directions = $data['directions'];
        $image_path = $request->image->store('public');
        $ingredients = $data['ingredients'];
        $utensils = $data['utensils'];

        // Grabs id of entry in a given table
        $getId = function($table, $col_name, $col_val) {
            $id = DB::table($table)
                ->select('id')
                ->where($col_name, $col_val)
                ->get()[0]->id;
            return $id;
        };

        $recipe_id = DB::table('recipes')->insertOrIgnore
            ([
            'name' => $recipe_name,
            'prep_time' => $prep_time,
            'cook_time' => $cook_time,
            'description' => $description,
            'directions' => $directions,
            'image_path' => $image_path
        ]);

        $recipe_id = $getId(
            'recipes',
            'name',
            $recipe_name
        );

        foreach ($ingredients as $ingredient) {
            DB::table('recipe_ingredients')->insertOrIgnore([
                'recipe_id' => $recipe_id,
                'ingredient' => $ingredient['name']
            ]);
        }

        foreach ($utensils as $utensil) {
            DB::table('utensils')->insertOrIgnore([
                'name' => $utensil['name']
            ]);

            $utensil_id = $getId(
                'utensils',
                'name',
                $utensil['name']
            );

            DB::table('recipe_utensils')->insertOrIgnore([
                'recipe_id' => $recipe_id,
                'utensil_id' => $utensil_id
            ]);
        }

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
            ->select('id', 'name', 'cook_time', 'prep_time', 'description', 'directions', 'image_path')
            ->where("id", $id)
            ->get()[0];

        $ingredients = DB::table('recipe_ingredients')
            ->select('ingredient')
            ->where('recipe_id', $recipe->id)
            ->get();

        $utensils = DB::table('recipe_utensils')
            ->select('name')
            ->join('utensils', 'utensil_id', '=', 'utensils.id')
            ->where('recipe_id', $recipe->id)
            ->get();

        // Formatting response
        $response = [
            'name' => $recipe->name,
            'cook_time' => $recipe->cook_time,
            'prep_time' => $recipe->prep_time,
            'description' => $recipe->description,
            'directions' => $recipe->directions,
            'image_path' => Storage::url($recipe->image_path),
            'ingredients' => $ingredients,
            'utensils' => $utensils
        ];

        return response($response, 200);
    }

    /**
     * Gets all recipes
     *
     * @return \Illuminate\Htpp\Response
     */
    public function getAll()
    {
        $recipes = DB::table('recipes')
            ->select('id', 'name', 'cook_time', 'prep_time', 'description', 'image_path')
            ->get();

        // Getting image urls
        foreach ($recipes as &$recipe) {
            $recipe->image_path = Storage::url($recipe->image_path);
        }

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
        DB::table('recipe_ingredients')
            ->where('recipe_id', $id)
            ->delete();
        DB::table('recipe_utensils')
            ->where('recipe_id', $id)
            ->delete();
        DB::table('recipes')
            ->where('id', $id)
            ->delete();
    }
}
