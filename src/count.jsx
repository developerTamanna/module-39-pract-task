import { useState } from "react"

export default function Count(){

    const [man, setMan] = useState(0)

    const handleIncrease =()=>{
        setMan(man+1)
    }
    const handleDecrease =()=>{
        setMan(man-1)
    }
    const handleReset =()=>{
        setMan(0)
    }
    const countStyle ={
        border:'2px solid gray',
        // marginTom:'4px'
    }
    return(
        <div style={countStyle} >
            <h3>Count: {man}</h3>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}