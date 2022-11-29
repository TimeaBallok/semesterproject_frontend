import React from 'react';
import facade from "../apiFacade.js";
import {useOutletContext} from "react-router-dom";

function RecipeList({dataFromServer}) {
    // dataFromServer = useOutletContext()

    const hackTheSystem = dataFromServer.results;

    return (
        <div className="container">
            {hackTheSystem.map(recipe => (
                <div key={recipe.id} className="row">
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