import React from 'react'

function EvenHandelling(){
    function Onsubmit(){
        console.log("clicked")
    }
    return (
        <div>
            {/* <button onClick={()=> Onsubmit()}>Click</button> */}
            <button onClick={Onsubmit}>Click</button> 
        </div>
    )
}
export default EvenHandelling

//handler is same used in class based component but with this kyyword