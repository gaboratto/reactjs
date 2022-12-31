import { useState} from "react";

const ItemCount = ({onChangeCount}) =>{
    const [value,setValue] = useState(0)

    const handlerAddCount = () =>{
        setValue(value + 1)
        onChangeCount(value + 1)
        
    }

    const handlerSubtractionCount = () =>{
        setValue(value - 1)
        onChangeCount(value - 1)
    }
    
    return(
        <div>
            <h4>Agregar Cantidad</h4>
            <button onClick={()=>handlerSubtractionCount()}>-</button>
            <input type="text" value={value} onChange={(e)=> setValue(e.target.value)}/>
            <button onClick={()=>handlerAddCount()}>+</button>

        </div>
    )
}

export default ItemCount