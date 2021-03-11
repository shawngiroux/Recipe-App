<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RecipeController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("/recipes", [RecipeController::class, "getAll"]);
Route::get("/recipes/{id}", [RecipeController::class, "show"]);
Route::post("/recipes", [RecipeController::class, "store"]);
Route::delete("/recipes/{id}", [RecipeController::class, "destroy"]);
