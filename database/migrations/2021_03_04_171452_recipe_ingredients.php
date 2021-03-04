<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RecipeIngredients extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recipe_ingredients', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('recipe_id');
            $table->unsignedBigInteger('ingredients_id');
            $table->unsignedInteger('quantity');
            $table->timestamps();
            $table
                ->foreign('recipe_id')
                ->references('id')
                ->on('recipes')
            ;
            $table
                ->foreign('ingredients_id')
                ->references('id')
                ->on('ingredients')
            ;
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('recipe_ingredients');
    }
}
