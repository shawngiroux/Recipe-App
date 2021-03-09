import React from 'react';
import ReactDOM from 'react-dom';
import CategoryCard from './Categorycard.js';

class RecipeFormList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            list: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    // Allow users to push shift+enter to add items
    handleKeyPress(event) {
        if (event.which === 13 && event.shiftKey) {
            this.handleAdd();
        }
    }

    handleAdd() {
        let item = {
            name: this.state.name,
        };

        this.state.list.push(item);
        this.props.handleAddListItem(this.props.header, this.state.list);

        let list = <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">{this.state.list.map(
            (item) => {
                return <li
                    className="
                        p-0.5
                        flex
                        items-center
                        justify-center
                        text-align
                        bg-purple-600
                        text-white
                        text-sm
                        rounded-full
                    "
                    key={item.name}>{item.name}
                    </li>;
            }
        )}
        </ul>;

        let element = <CategoryCard header={this.props.header} body={list}></CategoryCard>;

        // Reset to defaults
        this.setState({name: ''});
        this.refs.[this.props.header].value = "";

        ReactDOM.render(element, document.getElementById(this.props.id));
    }

    render() {
        return (
            <div>
                <label className="font-bold">
                    {this.props.header}:
                    <div className="flex mb-8">
                        <button className="mr-4" type="button" onClick={this.handleAdd} >
                            Add
                        </button>
                        <input className="w-full"
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            placeholder={this.props.header}
                            ref={this.props.header}
                            onKeyPress={this.handleKeyPress}
                        />
                    </div>
                </label>
                <div id={this.props.id}>
                </div>
            </div>
        )
    }
}

export default RecipeFormList;
