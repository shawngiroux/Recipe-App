import React from 'react';
import ReactDOM from 'react-dom';
import Recipe from './Recipe.js';

class Recipes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        };

        fetch("http://localhost/recipes")
            .then(response => response.json())
            .then(
                data => {
                    console.log(data);
                    this.setState({
                        recipes: data.map((recipe) =>
                            <Recipe
                                key={recipe.id}
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
            <div>{this.state.recipes}</div>
        );
    }
}

export default Recipes;
