import React from 'react';
import Topbar from './Topbar.js';
import CategoryCard from './Categorycard.js';

class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe_name: "",
            cook_time: "",
            prep_time: "",
            description: "",
            directions: "",
            image_path: ""
        }

        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');

        fetch('/api/recipes/' + id)
            .then(response => response.json())
            .then(
                recipe => {
                    this.setState({
                        recipe_name: recipe.name,
                        cook_time: recipe.cook_time,
                        prep_time: recipe.prep_time,
                        description: recipe.description,
                        directions: recipe.directions,
                        image_path: recipe.image_path
                    });

                    let ingredients = <ul className="grid grid-cols-2 gap-10">{ recipe.ingredients.map(
                        (item) => {
                            return <li
                                className="
                                    p-0.5
                                    flex
                                    items-center
                                    justify-center
                                    bg-purple-600
                                    text-white
                                    text-sm
                                    rounded-full
                                "
                                key={ item.ingredient }> { item.ingredient }
                                </li>;
                        }
                    )}</ul>;

                    let utensils = <ul className="grid grid-cols-2 gap-10">{ recipe.utensils.map(
                        (item) => {
                            return <li
                                className="
                                    p-0.5
                                    flex
                                    items-center
                                    justify-center
                                    bg-purple-600
                                    text-white
                                    text-sm
                                    rounded-full
                                "
                                key={ item.name }>{ item.name }
                            </li>;
                        }
                    )}</ul>;
                    this.setState({
                        ingredients: ingredients,
                        utensils: utensils
                    });
                }
            );
    }

    render() {
        const tint = {
            zIndex: "1",
            height: "100%",
            width: "100%",
            background: "rgba(0, 0, 0, 0.9)"
        };

        const img_style = {
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            filter: "blur(4px)",
            transform: "scale(1.03)",
            width: "100%",
            height: "24rem",
            backgroundImage: "url(" + this.state.image_path + ")",
            backgroundColor: "rgba(0,0,0,0.5)",
            backgroundBlendMode: "multiply"
        };

        const body = <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>;


        return (
            <div>
                <Topbar></Topbar>
                <div className="p-8 bg-gray-100 w-full">
                    <div className="overflow-hidden w-full relative rounded-tl-xl rounded-tr-xl">
                        <div className="w-full h-full flex items-center justify-center absolute">
                            <h1 className="text-white z-10 text-6xl">{ this.state.recipe_name }</h1>
                        </div>
                        <div style={ img_style }>
                        </div>
                    </div>
                    <div className="pl-8 pr-8 pt-8 w-full bg-white rounded-bl-xl rounded-br-xl flex flex-col space-evenly">
                        <CategoryCard header="Description" body={ this.state.description }></CategoryCard>
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
                            <CategoryCard header="Ingredients" body={ this.state.ingredients }></CategoryCard>
                            <CategoryCard header="Bust Out" body={ this.state.utensils }></CategoryCard>
                        </div>
                        <CategoryCard header="Directions" body={ this.state.directions }></CategoryCard>
                    </div>
                </div>
            </div>
        );
    }
}

export default Recipe;
