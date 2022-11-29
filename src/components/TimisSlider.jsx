import React from 'react';
import '../style/App.css'

function TimisSlider({typeName}) {
    return (
        <div>
            <input type="number" placeholder={"min"} name={""}/>
            <input type="number" placeholder={"max"} name={"calNumberMin"}/>
        </div>
    );
}

export default TimisSlider;