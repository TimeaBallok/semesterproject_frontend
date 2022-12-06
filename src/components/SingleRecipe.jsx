import React, {useEffect, useState} from 'react';
import {forEach} from "react-bootstrap/ElementChildren";
import facade from "../apiFacade.js";
import apiFacade from "../apiFacade.js";

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
                const temp = singleRecipe.nutrition;
                console.log("singleRecipe:");
                console.log(temp.nutrients);
                singleRecipe.nutrition.nutrients.map((name,amount,unit, percentOfDailyNeeds) =>(
                   console.log("name:"),
                   console.log(name.name),
                   console.log("amount:"),
                   console.log(amount)
                ))
            }
        },
        []
    )

    const addToMealPlan = async (e) => {
        const userName = apiFacade.getUserName();
        let recipeId = singleRecipe.id;
        let recipeSaved = false;
        await apiFacade.postData("recipe/", (data) => {
            console.log("Recipe with ID:" + data + " was successfully saved to DB or was already");
            if (data === recipeId)
                recipeSaved = true;
            console.log(recipeSaved);
        }, "Failed to save recipe to local DB", singleRecipe)

        if (recipeSaved) {
            let mealPlanJSON = "{\n";
            mealPlanJSON += "\t\"userName\": \""+userName+"\"\n";
            mealPlanJSON += "\t\"recipeId\": \""+recipeId+"\"\n";
            mealPlanJSON += "\t\"type\": \""+"CHOOSE YOUR DESTINY.... FIGHT!"+"\"\n";
            mealPlanJSON += "\t\"date\": {\n";
            const now = new Date();
            mealPlanJSON += "\t\t\"year\": "+now.getFullYear()+"\n";
            mealPlanJSON += "\t\t\"month\": "+now.getMonth()+"\n";
            mealPlanJSON += "\t\t\"day\": "+now.getDay()+"\n";
            mealPlanJSON += "\t}\n";
            mealPlanJSON += "}";
            console.log(mealPlanJSON);
            //"userName": "user",
            //"recipeId": 324694,
            //   "type": "DINNER",
            //   "date": {
            //     "year": 2022,
            //     "month": 12,
            //     "day": 6
            //   }
            console.log("You can add to mealplan now! :D")
            // apiFacade.postData("mealPlan/", (data) => {
            //     console.log("Recipe with ID:" + data + " was successfully saved to DB or was already");
            //     // console.log(data.results[0]);
            // }, "Failed to save recipe to local DB", singleRecipe)
        }
        // console.log(recipeId);
        // console.log("username: "+ userName +"|||recipeId: " +recipeId);
    }

    return (
        <div className='column middle'>
            <h3>{singleRecipe.title}</h3>
            <b>Diet('s): </b>
            {singleRecipe.diets ? (singleRecipe.diets.map((diet, index) => (
                <i>{diet}{singleRecipe.diets.length-1  == index ? "" : ", "}</i>
            ))) : ""}
            <br/>
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
            <h4>Ungh-gradients</h4>
            <ul>
                {singleRecipe.extendedIngredients ? (singleRecipe.extendedIngredients.map(ing =>
                    <li key={ing.nameClean}>{ing.nameClean}: {ing.amount} {ing.unit}</li>
                )) : ""}
            </ul>
            <h4>Nutriooons:</h4>
            <i>per serving</i>
            <ul>
            {singleRecipe.nutrition ? singleRecipe.nutrition.nutrients.map((nutrient) => (
                <li><b>{nutrient.name}:</b> {nutrient.amount} {nutrient.unit}</li>
            )): ""}
            </ul>
            <button onClick={addToMealPlan}>Add to mealplan</button>
        </div>
    );
}

export default SingleRecipe;