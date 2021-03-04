<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RecipeUtensils extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recipe_utensils', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('recipe_id');
            $table->unsignedBigInteger('utensil_id');
            $table->unsignedInteger('quantity');
            $table->timestamps();
            $table
                ->foreign('recipe_id')
                ->references('id')
                ->on('recipes')
            ;
            $table
                ->foreign('utensil_id')
                ->references('id')
                ->on('utensils')
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
        Schema::drop('recipe_utensils');
    }
}
