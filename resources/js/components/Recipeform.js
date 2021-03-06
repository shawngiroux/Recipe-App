import React from 'react';
import TopBar from './Topbar.js'; import RecipeFormList from './Recipeformlist.js';
import ConfirmationModal from './ConfirmationModal.js';
import ImageUploader from 'react-images-upload';
import { Redirect } from 'react-router-dom';

class RecipeForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show_confirm: false,
            redirect: false,
            recipe_name: "",
            prep_time: "",
            cook_time: "",
            ingredients: [],
            utensils: [],
            description: "",
            directions: "",
            image: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleConfirmation = this.handleConfirmation.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddListItem = this.handleAddListItem.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleConfirmation(event) {
        event.preventDefault();

        let confirm = !this.state.show_confirm;
        this.setState({show_confirm: confirm});

        // Locking scrolling
        if (confirm) {
            document.body.style.overflow = "hidden";
            document.body.classList.add("no-scroll");
        } else {
            document.body.style.overflow = "";
            document.body.classList.remove("no-scroll");
        }
    }

    handleSubmit(event) {
        let formData = new FormData();
        formData.append('image', this.state.image[0]);
        formData.append('body', JSON.stringify(this.state));
        fetch('/api/recipes', {
            method: 'POST',
            body: formData,
        }).then(() => {
            this.setState({redirect: true});
            document.body.style.overflow = "";
            document.body.classList.remove("no-scroll");
        });
    }

    // Handler for adding list items to form state
    handleAddListItem(key, item) {
        // Setting to lower to match the state's index
        this.setState({[key.toLowerCase()]: item});
    }

    onDrop(image) {
        this.setState({
            image: image
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />;
        }

        return (
            <div className="w-full h-full">
                <TopBar></TopBar>
                <ConfirmationModal
                    show={ this.state.show_confirm }
                    handleConfirmation={ this.handleConfirmation }
                    handleSubmit={ this.handleSubmit }
                    type="submit"
                    header="Save Recipe"
                    body="Would you like to save this recipe?"
                    primary_btn_msg="Submit"
                ></ConfirmationModal>
                <form
                    onSubmit={this.handleConfirmation}
                    className="bg-gray-100 w-full md:p-8"
                    onKeyPress={event => {
                        if (event.which === 13 && event.shiftKey) {
                            event.preventDefault();
                        }
                    }}
                >
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
                            <RecipeFormList handleAddListItem={this.handleAddListItem} id="ingredient-list" header="Ingredients" />
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
                        <div className="mb-8">
                            <label className="font-bold">
                                Directions:
                                <textarea name="directions"
                                    cols="30"
                                    rows="10"
                                    onChange={this.handleChange}
                                />
                            </label>
                        </div>
                        <div>
                            <ImageUploader
                                withIcon={true}
                                withPreview={true}
                                singleImage={true}
                                buttonText="Choose image"
                                onChange={this.onDrop}
                                imgExtension={[".jpg", ".jpeg", ".png"]}
                                maxFileSize={5242880}
                            />
                        </div>
                        <input type="submit" className="w-full" value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
}

export default RecipeForm;
