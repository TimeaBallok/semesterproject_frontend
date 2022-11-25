import React from 'react';

<<<<<<< HEAD
function SearchRecipe(props) {
    return (
        <div className="column middle">
            <h2>Test search</h2>

        </div>
    );
}
=======

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
>>>>>>> 2e600790a37fd476a44ce0351ac108662f92342a

export default SearchRecipe;