import React from 'react';
import { Link } from 'react-router-dom';
import RecipeCards from './Recipecards.js';
import Topbar from './Topbar.js';

function Home() {
    return (
        <div className="h-full">
            <Topbar></Topbar>
            <RecipeCards></RecipeCards>
        </div>
    );
}

export default Home;
