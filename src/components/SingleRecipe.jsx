import React, {useEffect, useState} from 'react';
import {forEach} from "react-bootstrap/ElementChildren";
import facade from "../apiFacade.js";
import apiFacade from "../apiFacade.js";

function SingleRecipe({singleRecipe}) {

    const initBookmarkJSON =
        {
            "userName": "user",
            "recipeId": 654812
        }

    const initMealPlanJSON = {
        "userName": "",
        "recipeId": "",
        "type": "CHOOSE YOUR DESTINY.... FIGHT!",
        "date": {
            "year": " +now.getFullYear() + ",
            "month": " +now.getMonth() + ",
            "day": " +now.getDay() + ",
        }
    }

    const [bookmarkJSON, setBookmarkJSON] = useState(initBookmarkJSON)
    const [mplanJson, setMplanJson] = useState(initBookmarkJSON)
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
                singleRecipe.nutrition.nutrients.map((name, amount, unit, percentOfDailyNeeds) => (
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
        const currentUser = apiFacade.getUserName();
        let recipeId = singleRecipe.id;
        let recipeSaved = false;
        await apiFacade.postData("recipe/", (data) => {
            console.log("Recipe with ID:" + data + " was successfully saved to DB or was already");
            if (data === recipeId)
                recipeSaved = true;
            console.log(recipeSaved);
        }, "Failed to save recipe to local DB", singleRecipe)

        if (recipeSaved) {
            setMplanJson(prevMealPlan => {
                return {
                    ...prevMealPlan,
                    userName: currentUser,
                    recipeId: recipeId,
                    type: "CHOOSE YOUR DESTINY.... FIGHT!",
                    date: {
                        year: new Date().getFullYear(),
                        month: new Date().getMonth(),
                        day: new Date().getDay()
                    }
                }
            })
            console.log(mplanJson);
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

    const addToBookmark = async (e) => {
        const userName2 = apiFacade.getUserName();
        let recipeId2 = singleRecipe.id;
        let recipeSaved = false;
        await apiFacade.postData("recipe/", (data) => {
            console.log("Recipe with ID:" + data + " was successfully saved to DB or was already");
            if (data === recipeId2)
                recipeSaved = true;
            console.log(recipeSaved);
        }, "Failed to save recipe to local DB", singleRecipe)

        if (recipeSaved) {
            // let bookmarkJSON = "{\n";
            // bookmarkJSON += "\t\"userName\": \""+userName+"\"\n";
            // bookmarkJSON += "\t\"recipeId\": \""+recipeId+"\"\n";
            // bookmarkJSON += "}";

            console.log(bookmarkJSON);

            console.log("You can add to bookmark now! :D")
            apiFacade.postData("bookmark/", (data) => {
                console.log("Bookmark to recipeId: " + data.recipeId + " userName: " + data.userName);
            }, "Failed to add to bookmark", bookmarkJSON)
            console.log("Saved in DB")
        }
    }

    return (
        <div className='column middle'>
            <h3>{singleRecipe.title}</h3>
            <b>Diet('s): </b>
            {singleRecipe.diets ? (singleRecipe.diets.map((diet, index) => (
                <i>{diet}{singleRecipe.diets.length - 1 == index ? "" : ", "}</i>
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
                )) : ""}
            </ul>
            <div>
                <button onClick={addToMealPlan}>Add to mealplan</button>
            </div>
            <br/>
            <div>
                <button onClick={addToBookmark}>Add to bookmark</button>
            </div>

        </div>
    );
}

export default SingleRecipe;