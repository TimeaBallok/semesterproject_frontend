import React from 'react';
import {forEach} from "react-bootstrap/ElementChildren";

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

    return (
        <div className='column middle'>
            {/*<button onClick={click1}>click</button>*/}
            <h3>{singleRecipe.title}</h3>
            <p>Ready in minutes: {singleRecipe.readyInMinutes}</p>
            <p>Servings: {singleRecipe.servings}</p>
            <p>Instructions: {singleRecipe.instructions}</p>
            <img src={singleRecipe.image}/>
            {singleRecipe.extendedIngredients.map(ing =>
            <p>{ing.nameClean}</p>
            )}

        </div>
    );
}

export default SingleRecipe;