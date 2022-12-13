import React, {useEffect} from 'react';
import {Link} from "react-router-dom";

function MealPlans({mealplanDatesList, fetchMealplansByDate}) {
    // useEffect(() => {
    //     console.log(mealplanDatesList)
    //     console.log("map:")
    //     mealplanDatesList.map((mealPlan, ci) => {
    //         console.log("mealplan nr: "+ ci);
    //         console.log(mealPlan);
    //     })
    // }, [mealplanDatesList])
    return (
        <div className="column middle">
            <h2>Mealpans</h2>
            <br/>
            {mealplanDatesList.map((mealPlan, ci) => (

                <Link to={"/SingleMealplan"} key={ci}>

                <div id={ci} className="row">

                    <div className="col">
                        <p className="calender">📅</p>
                        <p onClick={fetchMealplansByDate} >{mealPlan.year}-{mealPlan.month}-{mealPlan.day}</p>
                    </div>
                    <br/>
                </div>
                </Link>
            ))}
        </div>
    );
}

export default MealPlans;

// <div onClick={fetchMealplansByDate} id={ci} className="row">
//                         <div className="col">
//                             <button value={"{\n\"year\": \""+mealPlan.year+"\",\n \"month\": \""+mealPlan.month+"\",\n \"day\":\""+mealPlan.day+"\"\n}"}>{mealPlan.year}-{mealPlan.month}-{mealPlan.day}</button>
//                         </div>
//                         <br/>
//                     </div>