import React, {useState} from 'react';
import {Outlet} from "react-router-dom";
import apiFacade from "../apiFacade.js";
import FilterBoxes from "./FilterBoxes.jsx";

function SearchRecipe({dataFromServer, setDataFromServer}) {

    // const filters = new Map([
    //     [ "Calories", false ],
    //     [ "Sugar", false ],
    //     ["Cholesterol", false],
    //     ["Fat", false]
    // ]);
    const filters = new Map([
        [ "Calories", {boxValue: false, min: 0, max:0} ],
        [ "Sugar", {boxValue: false, min: 0, max:0} ],
        ["Cholesterol", {boxValue: false, min: 0, max:0}],
        ["Fat", {boxValue: false, min: 0, max:0}]
    ]);

    const [searchInput, setSearchInput] = useState([{}])

    const basicComplexSearchClick = (e) => {
        console.log(searchInput);
        apiFacade.fetchData("recipe/search/" + searchInput, (data) => {
        // apiFacade.fetchData("recipe/search/" + searchInput+"filers_go_here", (data) => {
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
        <>
            <div className='column middle'>
                <div className='searchbar'>
                    <p>Search for recipes</p>
                    <input className={"inputLogin"} type="search" name="search" placeholder="Search recipes..." onChange={changeHandler}></input>
                </div>
                <div className='button'>
                    <button type="button" onClick={basicComplexSearchClick}><i className="fa fa-search"></i></button>
                </div>
                < FilterBoxes filterTypes={filters}/>
                {/*<Outlet context={dataFromServer}/>*/}
            </div>
        {/*    Her er vores recipes    */}
        </>
    );
}

export default SearchRecipe;