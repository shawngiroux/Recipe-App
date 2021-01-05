import React from 'react';
import ReactDOM from 'react-dom';
import Recipes from './Recipes.js';

function Example() {
    return (
        <div className="w-full h-full">
            <Recipes></Recipes>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
