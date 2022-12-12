import React, {useRef} from 'react';
import '../style/App.css'

function InputMinMax({typeName, onChangeValue}) {
    const refInputMax = useRef()
    console.log(refInputMax);

    const limit = (e) => {
        if (refInputMax.current.value < e.target.value)
        {
            refInputMax.current.value = e.target.value;
        }
        refInputMax.current.min = e.target.value;
    }


    return (
        <div>
            <input className="inputMinMax" type="number" placeholder={"min"} name={"min"+typeName} id={"min"+typeName} min={0} onChange={e=> {
                onChangeValue(e)
                limit(e);
            }}/>
            <input className="inputMinMax" type="number" placeholder={"max"} name={"max"+typeName} id={"max"+typeName} onChange={onChangeValue} ref={refInputMax}/>
        </div>
    );
}

export default InputMinMax;