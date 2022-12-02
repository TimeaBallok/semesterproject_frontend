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
                const temp = singleRecipe;
                console.log("analyzedInstructions:");
                console.log(temp);
                // temp.map((name, steps) => {
                //     console.log("name:" + name);
                //     console.log(name);
                //     console.log(name.name);
                //     console.log(name.steps);
                //     name.steps.map((step, number) => {
                //         console.log("number:");
                //         console.log(number);
                //         console.log("step:");
                //         console.log(step);
                //         console.log(step.step);
                //     })
                //     console.log("steps:");
                //     console.log(steps);
                // })
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
            {singleRecipe.analyzedInstructions ? singleRecipe.analyzedInstructions.map((instruction, steps) => (
                <>
                    <h4>{instruction.name}</h4>
                    <ol>
                        {instruction.steps.map((step, number) => (
                        <li>{step.step}</li>
                    ))}
                    </ol>
                </>
                )) : ""}
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