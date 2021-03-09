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
                                description={recipe.description}
                                image_path={recipe.image_path}
                            />
                        )
                    });
                }
            );
    }

    render() {
        return (
            <div className="w-full h-full bg-gray-100 grid lg:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-10 sm:p-8">
                {this.state.recipes}
            </div>
        );
    }
}

export default RecipeCards;
