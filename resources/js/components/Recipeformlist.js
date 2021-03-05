import React from 'react';
import ReactDOM from 'react-dom';
import CategoryCard from './Categorycard.js';

class RecipeFormList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            qty: 1,
            measurement: "qty",
            list: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleAdd() {
        let item = {
            name: this.state.name,
            qty: this.state.qty,
            measurement: this.state.measurement
        };

        this.state.list.push(item);
        this.props.handleAddListItem(this.props.header, this.state.list);

        let list = <ul className="grid grid-cols-3 gap-10">{this.state.list.map(
            (item) => {
                let item_qty = ""
                if (this.props.hasQty) {
                    item_qty = undefined ?? 1;
                    item_qty = ` ${item.qty} ${item.measurement}`;
                }
                return <li
                    className="
                        p-0.5
                        flex
                        items-center
                        justify-center
                        bg-purple-600
                        text-white
                        text-md
                        font-semibold
                        rounded-full
                    "
                    key={item.name}>{item.name}{item_qty}
                    </li>;
            }
        )}
        </ul>;

        let element = <CategoryCard header={this.props.header} body={list}></CategoryCard>;

        // Reset to defaults
        this.setState({name: ''});
        this.refs.[this.props.header].value = "";

        if (this.props.hasQty === true) {
            this.setState({qty: 1});
            this.refs.qty.value = 1;

            this.setState({measurement: "qty"});
            this.refs.measurement.value = "qty";
        }

        ReactDOM.render(element, document.getElementById(this.props.id));
    }

    render() {
        let qty;
        let measurement;

        if (this.props.hasQty === true) {
            qty = <input className="w-32 mr-4"
                type="number"
                name="qty"
                onChange={this.handleChange}
                placeholder="Amount"
                ref="qty"
                min="1"
            />

            measurement = <select className="w-48"
                name="measurement"
                onChange={this.handleChange}
                ref="measurement"
                min="1"
            >
                <option value="qty">Qty</option>
                <option value="lbs">Lbs</option>
                <option value="oz">Oz</option>
                <option value="tsp">Tsp</option>
                <option value="tsbp">Tbsp</option>
            </select>
        }
        return (
            <div>
                <label className="font-bold">
                    {this.props.header}:
                    <div className="flex mb-8">
                        <button className="mr-4" type="button" onClick={this.handleAdd} >
                            Add
                        </button>
                        <input className={this.props.hasQty == true ? "w-full mr-4" : " w-full"}
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            placeholder={this.props.header}
                            ref={this.props.header}
                        />
                        {qty}
                        {measurement}
                    </div>
                </label>
                <div id={this.props.id}>
                </div>
            </div>
        )
    }
}

export default RecipeFormList;
