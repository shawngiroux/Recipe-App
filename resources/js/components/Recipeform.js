import React from 'react';
import TopBar from './Topbar.js';
import RecipeFormList from './Recipeformlist.js';

class RecipeForm extends React.Component {
    render() {
        return (
            <div className="w-full h-full">
                <TopBar></TopBar>
                <form className="bg-gray-100 w-full h-full p-8">
                    <div className="p-8 bg-white rounded-xl">
                        <h1 className="text-center text-xl mb-8 border-b-2 border-purple-300 pb-2">Add New Recipe</h1>
                        <div className="mb-8">
                            <label className="font-bold">
                                Recipe Name:
                                <input type="text" name="recipe-name" placeholder="Your recipe" />
                            </label>
                        </div>
                        <div className="flex mb-8">
                            <label className="font-bold w-full mr-4">
                                Prep Time:
                                <input type="number" name="prep-time" placeholder="Minutes" />
                            </label>
                            <label className="font-bold w-full">
                                Cook Time:
                                <input type="number" name="cook-time" placeholder="Minutes" />
                            </label>
                        </div>
                        <div className="mb-4">
                            <RecipeFormList id="ingredient-list" header="Ingredients" hasQty={true} />
                        </div>
                        <div className="mb-4">
                            <RecipeFormList id="utensils-list" header="Utensils" />
                        </div>
                        <div className="mb-8">
                            <label className="font-bold">
                                Description:
                                <textarea name="description" cols="30" rows="10"></textarea>
                            </label>
                        </div>
                        <button type="submit" className="w-full">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default RecipeForm;
