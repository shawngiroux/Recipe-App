import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home.js';
import Recipe from './Recipe.js';
import RecipeForm from './Recipeform.js';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/recipe">
                    <Recipe />
                </Route>
                <Route path="/new-recipe">
                    <RecipeForm />
                </Route>
            </Switch>
        </Router>
    );
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
