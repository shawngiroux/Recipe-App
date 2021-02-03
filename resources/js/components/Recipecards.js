import React from 'react';
import ReactDOM from 'react-dom';
import RecipeCard from './Recipecard.js';

class RecipeCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        };

        fetch("/api/recipes")
            .then(response => response.json())
            .then(
                data => {
                    this.setState({
                        recipes: data.map((recipe) =>
                            <RecipeCard
                                key={recipe.id}
                                id={recipe.id}
                                name={recipe.name}
                                cook_time={recipe.cook_time}
                                prep_time={recipe.prep_time}
                            />
                        )
                    });
                }
            );
    }

    render() {
        return (
            <div className="w-full bg-gray-100 grid lg:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-10 sm:p-8">
                {this.state.recipes}
                <a href="/new-recipe">
                    <div className="flex items-center justify-center max-w-sm w-84 h-full mx-auto bg-white rounded-xl shadow-md flex flex-col items-center space-x-4 mt-10 md:mt-0 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                        <div className="border-4 border-purple-400 border-dashed rounded-xl">
                            <svg className="h-40 w-40 text-purple-600 stroke-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </div>
                    </div>
                </a>
            </div>
        );
    }
}

export default RecipeCards;
