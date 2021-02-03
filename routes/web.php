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

Route::view('/{path?}', 'app')->where('path', '^((?!api).)*$');

Route::get("/api/recipes", [RecipeController::class, "getAll"]);
Route::get("/api/recipes/{id}", [RecipeController::class, "show"]);
