import React, { useState } from "react";

function Bmi(props) {

    const [bmi, setBmi] = useState();
    const [info, setInfo] = useState();
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const handleBmi = () => {
        let val = (
            [Number(weight) / Number(height) / Number(height)] * 10000
        ).toFixed(1);
        setBmi(val);
        if (val < 18.5) {
            setInfo("Under Weight");
        } else if (val > 18.5 && val <= 24.9) {
            setInfo("Healthy");
        } else if (val > 24.9 && val < 30) {
            setInfo("Overweight");
        } else {
            setInfo("Obese");
        }
    };


    return (
        <div className="column middle">
            <h1>BMI Calculator</h1>
            <br/>
            <input className="inputLogin"
                type="text"
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Height in cm"
            />
            <input className="inputLogin"
                type="text"
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Weight in kg"
            />
            <br/>
            <button onClick={handleBmi}>Calculate</button>
            <br/><br/>
            <div>
            <h3>Your BMI: {bmi} - {info}</h3>
            </div>
        </div>
    );
}

export default Bmi;