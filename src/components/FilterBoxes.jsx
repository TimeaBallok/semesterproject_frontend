import React, {useEffect, useRef, useMemo, useState} from 'react';
import {Outlet} from "react-router-dom";
import TimisSlider from "./TimisSlider.jsx";

function FilterBoxes(props) {

    const [toggle, setToggle] = useState(false)
    const [checkBox, setCheckBox] = useState([false, false, false, false])

    const checkBoxFilterType = ["Calories", "Sugar", "Cholesterol", "Fat"]

    const inputRefs = useMemo(() => checkBoxFilterType.map(i=> React.createRef()), []);

    const ref = useRef(null);

    useEffect(() => {
        // 👇️ use a ref (best)
        // const el2 = ref.current;
        // console.log(el2);

        // 👇️ use document.querySelector()
        // should only be used when you can't set a ref prop on the element
        // (you don't have access to the element)
        checkBoxFilterType.map( (typeName, index) => {
            const el2 = inputRefs[index].current.checked
            // const el = document.querySelector("#filter" + typeName).checked

            console.log(el2)
        })
    }, [toggle]);

    const onCheck = () => {
        setToggle(!toggle)

        setCheckBox(...[], !checkBox)
    }


    return (
        <div>
            <br/>
            <div >
                {checkBoxFilterType.map((typeName, index) => (
                    <>
                        <label htmlFor="filter">{typeName}</label>
                            <input onChange={onCheck} ref={inputRefs[index]} id={"filter" + typeName} type="checkbox" name={"filter" + typeName}/>
                        {/*{document.querySelector("#filter" + typeName).checked ? <TimisSlider /> : ""}*/}
                        {checkBox ? <TimisSlider /> : ""}
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