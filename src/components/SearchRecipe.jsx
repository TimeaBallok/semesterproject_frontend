import React from 'react';


const SearchRecipe = () => {
    return (
    <div className='column middle'>
        <div className='searchbar'>
        <p>Search for recipe</p>    
        <input type="text" name="search" placeholder="Search recipes..."></input>
        </div>
        <div className='button'>
        <button type="submit"><i class="fa fa-search"></i></button>
        </div>

        

    </div>    
    );
};

export default SearchRecipe;