import React, {useEffect, useState} from 'react';
import facade from "../apiFacade.js";
import {Link, useOutletContext} from "react-router-dom";
import apiFacade from "../apiFacade.js";

function RecipeList({dataFromServer, fetchSingleRecipe}) {


    return (

        <div className="container">
            {dataFromServer.results.map((recipe) => (
                <>
                <div className="card">
                    <Link to={"/singleRecipe"} key={recipe.id}>

                        <div onClick={fetchSingleRecipe} id={recipe.id} className="row">
                            <div className="col">
                                <img className="imgList1" src={recipe.image}/>
                            </div>
                            <div className="col-6">
                                <p>{recipe.title}</p>
                            </div>
                            <div className="col">
                                ⭐⭐⭐
                            </div>
                        </div>
                    </Link>
                </div>
                    <br/>
                </>


            ))}
        </div>

    );
}

export default RecipeList;