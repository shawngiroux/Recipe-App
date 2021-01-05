<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RecipeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $recipes = [
        0 => [
            'name' => 'Beef Stew',
            'cook_time' => '30',
            'prep_time' => '10'
        ],
        1 => [
            'name' => 'Korean Beef Bibimbap',
            'cook_time' => '20',
            'prep_time' => '4'
        ]
    ];

    return view('app')
        ->with('name', 'Shawn')
        ->with('recipes', $recipes);
});

Route::get("/recipes", [RecipeController::class, "getAll"]);

Route::get("/recipes/{id}", [RecipeController::class, "show"]);
