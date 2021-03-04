import React from 'react';
import TopBar from './Topbar.js'; import RecipeFormList from './Recipeformlist.js';

class RecipeForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recipe_name: "",
            prep_time: "",
            cook_time: "",
            ingredients: [],
            utensil: [],
            description: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddListItem = this.handleAddListItem.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        fetch('/api/recipes', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(this.state);
        event.preventDefault();
    }

    // Handler for adding list items to form state
    handleAddListItem(key, item) {
        // Setting to lower to match the state's index
        this.setState({[key.toLowerCase()]: item});
    }

    render() {
        return (
            <div className="w-full h-full">
                <TopBar></TopBar>
                <form onSubmit={this.handleSubmit} className="bg-gray-100 w-full h-full p-8">
                    <div className="p-8 bg-white rounded-xl">
                        <h1 className="text-center text-xl mb-8 border-b-2 border-purple-300 pb-2">Add New Recipe</h1>
                        <div className="mb-8">
                            <label className="font-bold">
                                Recipe Name:
                                <input type="text"
                                    name="recipe_name"
                                    placeholder="Your recipe"
                                    onChange={this.handleChange}
                                />
                            </label>
                        </div>
                        <div className="flex mb-8">
                            <label className="font-bold w-full mr-4">
                                Prep Time:
                                <input type="number"
                                    name="prep_time"
                                    placeholder="Minutes"
                                    onChange={this.handleChange}
                                />
                            </label>
                            <label className="font-bold w-full">
                                Cook Time:
                                <input type="number"
                                    name="cook_time"
                                    placeholder="Minutes"
                                    onChange={this.handleChange}
                                />
                            </label>
                        </div>
                        <div className="mb-4">
                            <RecipeFormList handleAddListItem={this.handleAddListItem} id="ingredient-list" header="Ingredients" hasQty={true} />
                        </div>
                        <div className="mb-4">
                            <RecipeFormList handleAddListItem={this.handleAddListItem} id="utensils-list" header="Utensils" />
                        </div>
                        <div className="mb-8">
                            <label className="font-bold">
                                Description:
                                <textarea name="description"
                                    cols="30"
                                    rows="10"
                                    onChange={this.handleChange}
                                />
                            </label>
                        </div>
                        <input type="submit" className="w-full" value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
}

export default RecipeForm;
