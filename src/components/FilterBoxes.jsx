import React, {useEffect, useRef, useMemo, useState} from 'react';
import {Outlet} from "react-router-dom";
import TimisSlider from "./TimisSlider.jsx";
const myMap = new Map([
    [ "Calories", false ],
    [ "Sugar", false ],
    ["Cholesterol", false],
    ["Fat", false]
]);
function FilterBoxes(props) {

    const onCheck = (e) => {
        console.log(myMap);
        myMap.set(e.target.id.toString().substring(6), e.target.checked)
    }


    return (
        <div>
            <br/>
            <div>
                {Array.from(myMap).map(([typeName, mybBool], index) => (
                        <>
                            <label htmlFor={"filter"+typeName}>{typeName}</label>
                            <input onChange={onCheck} id={"filter" + typeName} type="checkbox"
                                   name={"filter" + typeName}/>
                            {mybBool ? <TimisSlider/> : ""}
                        </>
                    )
                )}

                <Outlet/>

                {/*Check if boxed is checked, then render min/max. below is simple prototype*/}
                {/*<input type="number" placeholder={"Max amount of calories"} name={"calNumberMax"}/>*/}
                {/*<input type="number" placeholder={"Min amount of calories"} name={"calNumberMin"}/>*/}
            </div>

        </div>
    );
}

export default FilterBoxes;