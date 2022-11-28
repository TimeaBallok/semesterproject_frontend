import React from 'react';

function SearchRecipe({onClick, changeHandler}) {
    return (
        <div className='column middle'>
            <div className='searchbar'>
                <p>Search for recipes</p>
                <input type="search" name="search" placeholder="Search recipes..." onChange={changeHandler}></input>
            </div>
            <div className='button'>
                <button type="button" onClick={onClick}><i className="fa fa-search"></i></button>
            </div>
        </div>
    );
}

export default SearchRecipe;