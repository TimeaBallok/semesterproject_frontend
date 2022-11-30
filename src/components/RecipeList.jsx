import React, {useEffect, useState} from 'react';
import facade from "../apiFacade.js";
import {Link, useOutletContext} from "react-router-dom";
import apiFacade from "../apiFacade.js";

function RecipeList({dataFromServer}) {

    const [singleRecipe, setSingleRecipe] = useState("")

    // const [toggle, setToggle] = useState(false);
    //
    // useEffect(() => {
    //
    // }, [toggle])

    const fetchSingleRecipe = () => {
        apiFacade.fetchData("recipe/singleRecipe/324694", (data) => {
            console.log(data);
            setSingleRecipe(data.ex)
            console.log(singleRecipe.id);
        }, "")
    }

    return (
        <div className="container">
            {dataFromServer.results.map((recipe) => (
                <div onClick={fetchSingleRecipe} singleRecipe={singleRecipe} id={recipe.id} key={recipe.id} className="row">
                    <div className="col">
                        <img src={recipe.image}/>
                    </div>
                    <div className="col-6">
                        <p>{recipe.title}</p>
                    </div>
                    <div className="col">
                        3 out of 5 stars... kekw
                    </div>
                </div>
            ))}
        </div>

    );
}

export default RecipeList;