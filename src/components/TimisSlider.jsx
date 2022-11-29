import React from 'react';
import '../style/App.css'

function TimisSlider(props) {
    return (
        <div>
            <input type="number" placeholder={"Max amount of calories"} name={"calNumberMax"}/>
            <input type="number" placeholder={"Min amount of calories"} name={"calNumberMin"}/>
        </div>
    );
}

export default TimisSlider;