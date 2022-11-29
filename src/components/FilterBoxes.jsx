import React from 'react';
import {Outlet} from "react-router-dom";
import TimisSlider from "./TimisSlider.jsx";

function FilterBoxes(props) {

    const checkBoxFilterType = ["Calories", "Sugar", "Cholesterol", "Fat"]

    return (
        <div>
            <br/>
            <div>
                {/*{checkBoxFilterType.map(typeName => (*/}
                {/*        <label htmlFor="filter">{typeName}</label>,*/}
                {/*            <input type="checkbox" name={"filter" + typeName}/>*/}
                {/*    )*/}
                {/*)}*/}

                <Outlet/>

                {/*Check if boxed is checked, then render min/max. below is simple prototype*/}
                {/*<input type="number" placeholder={"Max amount of calories"} name={"calNumberMax"}/>*/}
                {/*<input type="number" placeholder={"Min amount of calories"} name={"calNumberMin"}/>*/}
            </div>

        </div>
    );
}

export default FilterBoxes;