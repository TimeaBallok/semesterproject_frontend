import React from 'react';
import '../style/App.css'

function TimisSlider(props) {
    return <>
        <div className="range_container">
            <div className="sliders_control">
                <input id="fromSlider" type="range" value="10" min="0" max="100"/>
                <input id="toSlider" type="range" value="40" min="0" max="100"/>
            </div>
            <div className="form_control">
                <div className="form_control_container">
                    <div className="form_control_container__time">Min</div>
                    <input className="form_control_container__time__input" type="number" id="fromInput" value="10"
                           min="0"
                           max="100"/>
                </div>
                <div className="form_control_container">
                    <div className="form_control_container__time">Max</div>
                    <input className="form_control_container__time__input" type="number" id="toInput" value="40" min="0"
                           max="100"/>
                </div>
            </div>
        </div>
    </>;
}

export default TimisSlider;