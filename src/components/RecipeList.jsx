import React, {useEffect, useState} from 'react';
import facade from "../apiFacade.js";
import {Link, useOutletContext} from "react-router-dom";
import apiFacade from "../apiFacade.js";
import {Alert} from "react-bootstrap";

function RecipeList({dataFromServer, fetchSingleRecipe, errorMessage}) {


    return (

        <div className="container">
            {dataFromServer.results.length > 0 || errorMessage === "Logged in" ? dataFromServer.results.map((recipe) => (
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


            )) : <Alert key={"secondary"} variant={"secondary"} className="mt-4" >{errorMessage}</Alert>}

        </div>

    );
}

export default RecipeList;