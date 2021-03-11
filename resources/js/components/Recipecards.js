import React from 'react';
import ReactDOM from 'react-dom';
import RecipeCard from './Recipecard.js';
import ConfirmationModal from './ConfirmationModal.js';

class RecipeCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show_confirm: false,
            delete_id: undefined,
            recipes: []
        };

        this.handleConfirmation = this.handleConfirmation.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

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
                                handleConfirmation={this.handleConfirmation}
                            />
                        )
                    });
                }
            );
    }

    handleConfirmation(id) {
        let confirm = !this.state.show_confirm;
        this.setState({show_confirm: confirm});

        // Locking scrolling
        if (confirm) {
            this.state.delete_id = id;
            document.body.style.overflow = "hidden";
            document.body.classList.add("no-scroll");
        } else {
            this.state.delete_id = undefined;
            document.body.style.overflow = "";
            document.body.classList.remove("no-scroll");
        }
    }

    handleSubmit() {
        fetch("/api/recipes/" + this.state.delete_id, {
            method: 'DELETE'
        }).then(() => {
            let updated_recipes = [];
            this.state.recipes.forEach((recipe, index) => {
                if (recipe.key != this.state.delete_id) {
                    updated_recipes.push(recipe);
                }
            });

            this.setState({show_confirm: false});
            this.setState({recipes: updated_recipes});
        });
        document.body.style.overflow = "";
        document.body.classList.remove("no-scroll");

    }

    render() {
        return (
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-10 sm:p-8">
                {this.state.recipes}
                <ConfirmationModal
                    show={ this.state.show_confirm }
                    handleConfirmation={ this.handleConfirmation }
                    handleSubmit={ this.handleSubmit }
                    type="danger"
                    header="Delete Recipe"
                    body="Would you like to delete this recipe?"
                    primary_btn_msg="Delete"
                ></ConfirmationModal>
            </div>
        );
    }
}

export default RecipeCards;
