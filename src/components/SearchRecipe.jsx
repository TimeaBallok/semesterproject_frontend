import React, {useState} from 'react';
import {Outlet} from "react-router-dom";
import apiFacade from "../apiFacade.js";
import FilterBoxes from "./FilterBoxes.jsx";

//region This is a gobal variable
const filters = new Map([
    [ "Calories", {boxValue: false, min: 0, max:0} ],
    [ "Sugar", {boxValue: false, min: 0, max:0} ],
    ["Cholesterol", {boxValue: false, min: 0, max:0}],
    ["Fat", {boxValue: false, min: 0, max:0}]
]);
//endregion

function SearchRecipe({dataFromServer, setDataFromServer, setErrorMessage}) {

    const [searchInput, setSearchInput] = useState([{}])

    const basicComplexSearchClick = (e) => {
        // console.log("query= "+searchInput);
        //arr.map(function(val, index){
        //             return {key:index, value:val*val};
        //         })
        setDataFromServer({"results": []});
        const selectedFilters = Array.from(filters).map(([key, values], index) => {
            if (values.boxValue)
                return "&min"+key+"="+values.min+"&max"+key+"="+values.max;
        }).join("")
        // console.log("selectedFilters: "+selectedFilters)
        apiFacade.fetchData("recipe/search/"+searchInput +selectedFilters, (data) => {
            // console.log(data);
            setDataFromServer(data)
            // console.log(data.results[0]);
        }, setErrorMessage)
        // console.log(filters)
        // apiFacade.fetchData("recipe/search/" + searchInput+selectedFilters, (data) => {
        //     console.log(data);
        //     setDataFromServer(data)
        //     console.log(data.results[0]);
        // }, "")
        // console.log(filters)
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
                    <input className="inputSearch" type="search" name="search" placeholder="Search recipes..." onChange={changeHandler}></input>
                    <button type="button" onClick={basicComplexSearchClick}><i className="fa fa-search" style={{}}></i></button>
                </div>
                <div >
                < FilterBoxes filters={filters}/>
                </div>
                <br/><br/>
                <div className="filterBox">
                <Outlet context={dataFromServer}/>
                </div>
            </div>
        {/*    Her er vores recipes    */}
        </>
    );
}

export default SearchRecipe;