import { useState } from "react"

export default function ShowHideText(){
   const [isVisible, setVisible]= useState(false);


   function toggleText(){
    if(isVisible){
        setVisible(false)
    }
    else{
        setVisible(true)
    }
   }
    return(
        <div>
            <button onClick={toggleText}>
                 {
                    isVisible? "hide": "show"
                } 
                Text</button>

                {
                    isVisible && <h3>hello react lerner</h3>
                }
        </div>
    )
}