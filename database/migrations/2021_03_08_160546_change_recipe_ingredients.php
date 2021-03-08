<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeRecipeIngredients extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('recipe_ingredients', function (Blueprint $table) {
            $table->dropForeign('recipe_ingredients_ingredient_id_foreign');
            $table->dropForeign('recipe_ingredients_recipe_id_foreign');
            $table->dropColumn('ingredient_id');
            $table->dropColumn('quantity');
            $table->dropColumn('measurement');
            $table->string('ingredient');
            $table->dropUnique('recipe_ingredients_recipe_id_ingredient_id_unique');
            $table
                ->foreign('recipe_id')
                ->references('id')
                ->on('recipes')
            ;
        });
        Schema::drop('ingredients');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::create('ingredients', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->timestamps();
        });

        Schema::table('recipe_ingredients', function (Blueprint $table) {
            $table->dropColumn('ingredient');
            $table->unsignedBigInteger('ingredient_id');
            $table->unsignedInteger('quantity');
            $table->string('measurement');
            $table
                ->foreign('ingredient_id')
                ->references('id')
                ->on('ingredients')
            ;
            $table->unique(['recipe_id', 'ingredient_id']);
        });
    }
}
