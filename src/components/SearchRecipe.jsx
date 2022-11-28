import React from 'react';
import apiFacade from "../apiFacade.js";

const SearchRecipe = () => {
const basicComplexSearchClick = (e) => {
    apiFacade.fetchData("recipe/search/" + e.target.value, (data) => console.log(data))
    }

    return (
    <div className='column middle'>
        <div className='searchbar'>
        <p>Search for recipes</p>    
        <input type="text" name="search" placeholder="Search recipes..."></input>
        </div>
        <div className='button'>
        <button type="button" onClick={basicComplexSearchClick}><i class="fa fa-search"></i></button>
        </div>
    </div>    
    );
};


export default SearchRecipe;