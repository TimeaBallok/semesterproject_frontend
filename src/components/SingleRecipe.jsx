import React, {useEffect, useState} from 'react';
import {forEach} from "react-bootstrap/ElementChildren";
import facade from "../apiFacade.js";

function SingleRecipe({singleRecipe}) {
    // let myIng;
    // console.log(singleRecipe.extendedIngredients)
    //
    // const click1 = () => {
    //     myIng = singleRecipe.extendedIngredients
    //     console.log(myIng)
    //     myIng.map((ing) =>{
    //         console.log(ing.nameClean)
    //     })
    // }
    // const [myBoolean, setMyBoolean] = useState(false)

    //"analyzedInstructions": [
    //     {
    //       "name": "",
    //       "steps": [
    //         {
    //           "number": 1,
    //           "step": "Preheat the oven to 200 degrees F."
    //         },
    useEffect(() => {
            if (singleRecipe.analyzedInstructions) {
                const temp = singleRecipe.analyzedInstructions[0].steps;
                console.log(temp[0].step);
                temp.map((name, steps) => {
                    console.log("name:");
                    console.log(name);
                    console.log("steps:");
                    console.log(steps);
                    // values.map((number, step) => {
                    //     console.log(number)
                    //     console.log(step)
                    // })
                    // console.log(temp[0].name);
                    // console.log(temp);
                })
            }
        },
        [singleRecipe]
    )

    return (
        <div className='column middle'>
            {/*<button onClick={click1}>click</button>*/}
            <h3>{singleRecipe.title}</h3>
            <p>Ready in minutes: {singleRecipe.readyInMinutes}</p>
            <p>Servings: {singleRecipe.servings}</p>
            {/*{singleRecipe.analyzedInstructions ? singleRecipe.analyzedInstructions.map((typeName, values) => {*/}
            {/*    <div>{values.map((number, step) => {*/}
            {/*        <p>{number}{step}</p>*/}
            {/*    })}</div>*/}
            {/*}) : ""}*/}
            {/*<p>Instructions: {singleRecipe.analyzedInstructions}</p>*/}
            <img src={singleRecipe.image}/>
            <br/>
            <ul>
                {singleRecipe.extendedIngredients ? (singleRecipe.extendedIngredients.map(ing =>
                    <li key={ing.nameClean}>{ing.nameClean}: {ing.amount} {ing.unit}</li>
                )) : ""}
            </ul>

        </div>
    );
}

export default SingleRecipe;