import React, {useEffect} from 'react';
import facade from "../apiFacade.js";
import {useOutletContext} from "react-router-dom";

function RecipeList({dataFromServer}) {
    // dataFromServer = useOutletContext()

    // let hackTheSystem = [
    //     {}
    // ];
    //
    // useEffect( () => {
    //     hackTheSystem = dataFromServer.results
    //         console.log("Hack the system updated:");
    //         console.log(hackTheSystem)
    //     },
    //     [dataFromServer]
    // )

    return (
        <div className="container">
            {dataFromServer.results.map((recipe) => (
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