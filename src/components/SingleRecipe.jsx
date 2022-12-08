import React, {useEffect, useRef, useState} from 'react';
import {forEach} from "react-bootstrap/ElementChildren";
import facade from "../apiFacade.js";
import apiFacade from "../apiFacade.js";
import MealPlanModal from "./MealPlanModal.jsx";

function SingleRecipe({singleRecipe}) {

    const initBookmarkJSON =
        {
            "userName": "user",
            "recipeId": 654812
        }

    const initMealPlanJSON = {
        "userName": "DIN TÅBE",
        "recipeId": -1,
        "type": "CHOOSE YOUR DESTINY.... FIGHT!",
        "date": {
            "year": " +now.getFullYear() + ",
            "month": " +now.getMonth() + ",
            "day": " +now.getDay() + ",
        }
    }

    const [bookmarkJSON, setBookmarkJSON] = useState(initBookmarkJSON)
    const [mplanJson, setMplanJson] = useState(initMealPlanJSON)
    const [mealplanUI, setMealplanUI] = useState(false);
    const [mDate, setMDate] = useState({"year": new Date().getFullYear(), "month": new Date().getMonth(), "day":new Date().getDay()});
    const [mType, setMType] = useState("");
    // const [open, setOpen] = React.useState(false);

    useEffect(() => {
            // if (singleRecipe.analyzedInstructions) {
            //     const temp = singleRecipe.nutrition;
            //     console.log("singleRecipe:");
            //     console.log(temp.nutrients);
            //     singleRecipe.nutrition.nutrients.map((name, amount, unit, percentOfDailyNeeds) => (
            //         console.log("name:"),
            //             console.log(name.name),
            //             console.log("amount:"),
            //             console.log(amount)
            //     ))
            // }
            console.log(mplanJson);
            console.log(mDate.year)
        },
        [mplanJson]
    )


    const addToMealPlanButton = (e) => {
        e.preventDefault()
        // console.log(mealplanUI)
        setMealplanUI(!mealplanUI);
    }

    const saveToMealPlan = (e) => {
        e.preventDefault()
        addToMealPlan2(e)
        setMealplanUI(!mealplanUI);
    }

    const addToMealPlan2 = async (e) => {
        setMealplanUI(!mealplanUI);
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
                    type: mType,
                    date: {
                        // year: mdate.current.value.toString().substring(0,4),
                        year: mDate.year,
                        month: mDate.month,
                        day: mDate.day
                    }
                }
            })
            await apiFacade.postData("mealPlan/", (data) => {
                console.log("MEALPLAN with ID:" + data + " was successfully saved to DB or was already");
            }, "Failed to save mealplan to local DB", mplanJson)

            console.log(mplanJson);
            console.log("You can add to mealplan now! :D")
        }
    }

    const addToBookmark = async (e) => {
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
            setBookmarkJSON(prevBookmark => {
                return {
                    ...prevBookmark,
                    userName: currentUser,
                    recipeId: recipeId,
                }
            })

            console.log(bookmarkJSON);

            console.log("You can add to bookmark now! :D")
            apiFacade.postData("bookmark/", (data) => {
                console.log("Bookmark to recipeId: " + data.recipeId + " userName: " + data.userName);
            }, "Failed to add to bookmark", bookmarkJSON)
            console.log("Saved in DB")
        }
    }

    const onDateChange = (e) => {
        console.log(e.target.value)
        setMDate({"year": new Date(e.target.value).getFullYear(), "month": new Date(e.target.value).getMonth(), "day":new Date(e.target.value).getDay()})
        console.log(mDate);
    }

    const onTypeChange = (e) => {
        setMType(e.target.value)
        console.log(mType);
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
                {mealplanUI ? (
                    <>
                        <label htmlFor="start">Date:</label>

                        <input type="date" id="start" name="trip-start"
                               min={new Date().toISOString().split("T")[0]} max="2025-12-31" onChange={onDateChange}/>
                        {/*value={mDate.year+"-"+mDate.month+"-"+mDate.day}*/}
                        <label htmlFor="mealTypeSelect">Choose a meal type:</label>
                        <select name="mealTypeSelect" id="mealTypeSelect" onChange={onTypeChange}>
                                <option value="BREAKFAST">Breakfast</option>
                                <option value="LUNCH">Lunch</option>
                                <option value="DINNER">Dinner</option>
                        </select>

                        <button onClick={saveToMealPlan}>Save me plz oh lord.... just work damn u</button>
                    </>) : <button onClick={addToMealPlanButton}>Add to mealplan</button>}
            </div>
            <br/>
            <div>
                <button onClick={addToBookmark}>Add to bookmark</button>
            </div>

        </div>
    );
}

export default SingleRecipe;