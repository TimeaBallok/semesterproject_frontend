import React from 'react';
import '../style/App.css'

function InputMinMax({typeName}) {
    return (
        <div>
            <input type="number" placeholder={"min"} name={"min"+typeName} id={"min"+typeName} min={0}/>
            <input type="number" placeholder={"max"} name={"max"+typeName} id={"max"+typeName} min={0}/>
        </div>
    );
}

export default InputMinMax;