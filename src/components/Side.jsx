import React from 'react';
import {NavLink} from "react-router-dom";

function Side(props) {
    return (
        <div className="column side">
            <nav>
                <div>
                    <NavLink to={"/about"} >Search recipes</NavLink>
                </div>
                <div>
                    <NavLink to={"/login"} >My bookmarks</NavLink>
                </div>
                <div>
                    <NavLink to={"/joke"} >My meal plan</NavLink>
                </div>

            </nav>
        </div>
    );
}

export default Side;