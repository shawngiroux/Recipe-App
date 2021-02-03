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
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleChange(type, event) {
        this.state[type] = event.target.value;
    }

    handleAdd() {
        this.state.list.push({
            name: this.state.name,
            qty: this.state.qty
        });

        let list = <ul className="grid grid-cols-3 gap-10">{this.state.list.map(
            (item) => {
                let item_qty = ""
                if (this.props.hasQty) {
                    item.qty = undefined ?? 1;
                    item_qty = ` (x${item.qty})`;
                }
                return <li key={item.name}>{item.name}{item_qty}</li>;
            }
        )}
        </ul>;

        let element = <CategoryCard header={this.props.header} body={list}></CategoryCard>;

        this.refs.ingredient.value = "";
        if (this.props.hasQty === true) {
            this.refs.qty.value = 1;
        }

        ReactDOM.render(element, document.getElementById(this.props.id));
    }

    render() {
        let qty;

        if (this.props.hasQty === true) {
            qty = <input className="w-1/4"
                type="number"
                onChange={(event) => this.handleChange("qty", event)}
                placeholder="Qty"
                ref="qty"
                min="1"
                value="1"
            />
        }
        return (
            <div>
                <label className="font-bold">
                    {this.props.header}:
                    <div className="flex mb-8">
                        <button className="mr-4" type="button" onClick={this.handleAdd} >
                            Add
                        </button>
                        <input className={this.props.hasQty == true ? "w-3/4 mr-4" : " w-full"}
                            type="text"
                            onChange={(event) => this.handleChange("name", event)}
                            placeholder={this.props.header}
                            ref={this.props.header}
                        />
                        {qty}
                    </div>
                </label>
                <div id={this.props.id}>
                </div>
            </div>
        )
    }
}

export default RecipeFormList;
