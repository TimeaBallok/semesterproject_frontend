import React, {useEffect, useRef, useMemo, useState} from 'react';
import {Outlet} from "react-router-dom";
import InputMinMax from "./InputMinMax.jsx";

function FilterBoxes({filterTypes}) {

    const [toggle, setToggle] = useState(false)

    const onCheck = (e) => {
        setToggle(!toggle)
        filterTypes.set(e.target.id.toString().substring(6), e.target.checked)
        console.log(filterTypes);
    }


    return (
        <div>
            <br/>
            <div>
                {Array.from(filterTypes).map(([typeName, {mybBool}], index) => (
                        <div key={typeName}>
                            <label htmlFor={"filter"+typeName}>{typeName}</label>
                            <input onChange={onCheck} id={"filter" + typeName} type="checkbox"
                                   name={"filter" + typeName}/>
                            {mybBool ? <InputMinMax typeName={typeName}/> : ""}
                        </div>
                    )
                )}

                {/*<Outlet/>*/}

                {/*Check if boxed is checked, then render min/max. below is simple prototype*/}
                {/*<input type="number" placeholder={"Max amount of calories"} name={"calNumberMax"}/>*/}
                {/*<input type="number" placeholder={"Min amount of calories"} name={"calNumberMin"}/>*/}
            </div>

        </div>
    );
}

export default FilterBoxes;