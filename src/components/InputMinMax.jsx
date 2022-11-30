import React, {useRef} from 'react';
import '../style/App.css'

function InputMinMax({typeName, onChangeValue}) {
    const refMin = useRef()
    console.log(refMin);
    return (
        <div>
            <input ref={refMin} type="number" placeholder={"min"} name={"min"+typeName} id={"min"+typeName} min={0} onChange={onChangeValue}/>
            <input type="number" placeholder={"max"} name={"max"+typeName} id={"max"+typeName} min={refMin.value} onChange={onChangeValue}/>
        </div>
    );
}

export default InputMinMax;