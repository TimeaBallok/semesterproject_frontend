import React from 'react';
import {NavLink, Link} from "react-router-dom";
import facade from "../apiFacade.js";


function SideBar(props) {
    return (
        <div className="column side">
            <nav>
                <br/>
                <div>
                    <NavLink to= {props.loggedIn ? "/search": "/login"}>Search recipes</NavLink>
                </div>
                <br/>
                <div>
                    <NavLink to={"/bookmark"} >My bookmarks</NavLink>
                </div>
                <br/>
                <div>
                    <NavLink to={"/mealplan"} >My meal plan</NavLink>
                </div>
                <br/>
                <div>
                    <NavLink to={"/bmi"} >BMI Calculator</NavLink>
                </div>
                <br/>
                <div>
                    <a target="_blank" href="https://www.globalgoals.org/goals/3-good-health-and-well-being/">FN Health goal</a>
                    <Link to={{ pathname: "https://www.globalgoals.org/goals/3-good-health-and-well-being/" }} target="_blank" />
                </div>

            </nav>
        </div>
    );
}

export default SideBar;