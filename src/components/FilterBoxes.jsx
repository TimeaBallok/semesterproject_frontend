import React, {useEffect, useRef, useMemo, useState} from 'react';
import {Outlet} from "react-router-dom";
import InputMinMax from "./InputMinMax.jsx";

function FilterBoxes({filters}) {

    const [toggle, setToggle] = useState(false)

    const onCheck = (e) => {
        setToggle(!toggle)
        const id = e.target.id.toString().substring(6);

        const tempObj = filters.get(id)
        tempObj.boxValue = e.target.checked;
        filters.set(id, tempObj)
    }

    const onChangeValue = (e) => {
        const id = e.target.id.substring(3);
        const inputTarget = e.target.id.substring(0,3);

        const tempObj = filters.get(id)
        console.log(tempObj);
        inputTarget === "min"  ? tempObj.min = e.target.value : tempObj.max = e.target.value;
        console.log(tempObj);
        filters.set(id, tempObj)
    }


    return (
        <div>
            <br/>
            <div>
                {Array.from(filters).map(([typeName, values], index) => (
                        <div className="inputFilterBoxes" key={typeName}>
                            <label htmlFor={"filter"+typeName}>{typeName}</label>
                            <input onChange={onCheck} id={"filter" + typeName} type="checkbox"
                                   name={"filter" + typeName}/>
                            {values.boxValue ? <InputMinMax typeName={typeName} onChangeValue={onChangeValue}/> : ""}
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