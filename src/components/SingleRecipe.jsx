import React, {useEffect, useState} from 'react';
import {forEach} from "react-bootstrap/ElementChildren";
import facade from "../apiFacade.js";
import apiFacade from "../apiFacade.js";
import MealPlanModal from "./MealPlanModal.jsx";
import DatePicker from 'react-date-picker';

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
    const [mplanJson, setMplanJson] = useState(initMealPlanJSON)
    const [mealplanUI, setMealplanUI] = useState(false);
    const [mDate, setMDate] = useState(new Date());
    // const [open, setOpen] = React.useState(false);

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

    const addToMealPlan = (e) => {
        setMealplanUI(!mealplanUI);
        if (e.target.innerHTML === "Add to mealplan")
            e.target.innerHTML = "Save"
        else {
            // addToMealPlan2(e)
            console.log(mDate);

            e.target.innerHTML = "Add to mealplan";
        }
    }

    const addToMealPlan2 = async (e) => {
        setMealplanUI(true);
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
                {mealplanUI ? (
                    <>
                        <label htmlFor="start">Date:</label>
                        <DatePicker onChange={setMDate} value={mDate} />
                    </>) : ""}
            </div>
            <br/>
            }}
            <div>
                <button onClick={addToBookmark}>Add to bookmark</button>
                {/*<MealPlanModal setMplanJson={setMplanJson} open={open} setOpen={setOpen}/>*/}
            </div>

        </div>
    );
}

export default SingleRecipe;