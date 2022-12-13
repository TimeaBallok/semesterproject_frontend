import React, {useEffect, useState} from 'react';
import apiFacade from "../apiFacade.js";
import {Link} from "react-router-dom";

function SingleMealPlan({mealplanList, fetchSingleRecipe}) {

    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        const currentUser = apiFacade.getUserName();
        console.log("Hello from hell (MealPlan.jsx)");
        console.log(mealplanList);
        mealplanList.map(async (mealplan, mi) => {
            console.log("mapindex:" + mi);
            console.log(mealplan.type)
            console.log(mealplan.recipeJson)
            if (mealplan.recipeJson.id != "") setToggle(true)
            else setToggle(false)
            console.log(toggle)
        })
    }, [mealplanList])


    return (
        <div className="column middle">
            <h2>Single Mealplan</h2>
            <br/>
            {/*<button onClick={() => setMyBool(!myBool)}>yo work plz</button>*/}

            {toggle ? mealplanList.map((element, ci) => (
                <>
                    <div className="card2">
                    <h4>{element.type}</h4>
                    <Link to={"/singleRecipe"} key={ci}>
                        <div onClick={fetchSingleRecipe} id={element.recipeJson.id} className="row">
                            <div className="col">
                                <img className="imgList2" src={element.recipeJson.image}/>
                            </div>
                            <div className="col-6">
                                <p>{element.recipeJson.title}</p>
                            </div>
                            <div className="col">
                                ⭐⭐⭐ kekw
                            </div>
                        </div>
                        <br/>
                    </Link>
                    </div>
                    <br/>
                </>
            )) : ""}
        </div>
    );
}

export default SingleMealPlan;