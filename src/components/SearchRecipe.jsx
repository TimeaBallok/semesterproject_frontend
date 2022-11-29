import React, {useState} from 'react';
import {Outlet} from "react-router-dom";
import apiFacade from "../apiFacade.js";

function SearchRecipe({dataFromServer, setDataFromServer}) {
    const [searchInput, setSearchInput] = useState([{}])

    const basicComplexSearchClick = (e) => {
        console.log(searchInput);
        apiFacade.fetchData("recipe/search/" + searchInput, (data) => {
            console.log(data);
            setDataFromServer(data)
            console.log(data.results[0]);
        }, "")
    }

    const changeHandler = (e) => {
        setSearchInput(e.target.value);
        console.log(e.target.value);
    }

    return (
        <div className='column middle'>
            <div className='searchbar'>
                <p>Search for recipes</p>
                <input type="search" name="search" placeholder="Search recipes..." onChange={changeHandler}></input>
            </div>
            <div className='button'>
                <button type="button" onClick={basicComplexSearchClick}><i className="fa fa-search"></i></button>
            </div>
            <Outlet context={dataFromServer}/>
        </div>
    );
}

export default SearchRecipe;