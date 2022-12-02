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
                console.log("singleRecipe:");
                console.log(temp);
            }
        },
        [singleRecipe]
    )

    return (
        <div className='column middle'>
            <h3>{singleRecipe.title}</h3>
            <b>Diet('s): </b>
            {singleRecipe.analyzedInstructions ? (singleRecipe.diets.map((diet, index) => (
                <i>{diet}{singleRecipe.diets.length-1  == index ? "" : ", "}</i>
            ))) : ""}
            <img src={singleRecipe.image}/>{/*Style me....*/}
            {/*<p>{singleRecipe.summary}</p>*/} {/* <---  is bad */}
            <p>Ready in minutes: {singleRecipe.readyInMinutes}</p>
            <p>Servings: {singleRecipe.servings}</p>
            <h4>Instruction</h4>
            {singleRecipe.analyzedInstructions ? singleRecipe.analyzedInstructions.map((instruction, steps) => (
                <>
                    <h5>{instruction.name}</h5>
                    <ol>
                        {instruction.steps.map((step, number) => (
                        <li>{step.step}</li>
                    ))}
                    </ol>
                </>
                )) : ""}
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