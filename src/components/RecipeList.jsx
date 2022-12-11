import React, {useEffect, useState} from 'react';
import facade from "../apiFacade.js";
import {Link, useOutletContext} from "react-router-dom";
import apiFacade from "../apiFacade.js";

function RecipeList({dataFromServer, fetchSingleRecipe}) {


    return (

        <div className="container">
            {dataFromServer.results.map((recipe) => (
                <Link to={"/singleRecipe"} key={recipe.id}>

                <div onClick={fetchSingleRecipe} id={recipe.id} className="row">
                    <div className="col">
                        <img className="imgList1" src={recipe.image}/>
                    </div>
                    <div className="col-6">
                        <p>{recipe.title}</p>
                    </div>
                    <div className="col">
                        3 out of 5 stars... kekw
                    </div>
                </div>
                    <br/>
                </Link>


            ))}
        </div>

    );
}

export default RecipeList;