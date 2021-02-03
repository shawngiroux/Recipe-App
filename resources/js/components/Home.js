import React from 'react';
import { Link } from 'react-router-dom';
import RecipeCards from './Recipecards.js';
import Topbar from './Topbar.js';

function Home() {
    return (
        <div>
            <Topbar></Topbar>
            <RecipeCards></RecipeCards>
        </div>
    );
}

export default Home;
