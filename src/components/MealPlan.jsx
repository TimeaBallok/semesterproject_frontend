import React, {useEffect, useState} from 'react';
import apiFacade from "../apiFacade.js";
import {Link} from "react-router-dom";

function MealPlan({mealplanList, fetchSingleRecipe}) {




    useEffect(() => {
        const currentUser = apiFacade.getUserName();
        console.log("Hello from hell (MealPlan.jsx)");
        console.log(mealplanList);
        mealplanList.map(async (mealplan, mi) => {
            console.log("mapindex:" + mi);
            console.log(mealplan)
        })
    }, [mealplanList])




    return (
        <div className="column middle">
            <h2>Mealplan</h2>
            {/*<button onClick={() => setMyBool(!myBool)}>yo work plz</button>*/}

            {mealplanList.map((re, ci) => (
                <Link to={"/singleRecipe"} key={re.id}>

                    <div onClick={fetchSingleRecipe} id={re.id} className="row">
                        <div className="col">
                            <img src={re.image}/>
                        </div>
                        <div className="col-6">
                            <p>{re.title}</p>
                        </div>
                        <div className="col">
                            3 out of 5 stars... kekw
                        </div>
                    </div>
                    <br/>
                </Link>
            ))}
        </div>
    );
}

export default MealPlan;