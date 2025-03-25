import { useState } from "react"

export default function ShowHideText(){
   const [visible, setVisible]= useState(false);


   function toggleText(){
    if(visible=== true){
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
                    visible? "hide": "show"
                } 
                Text</button>

                {
                    visible && <h3>hello react lerner</h3>
                }
        </div>
    )
}