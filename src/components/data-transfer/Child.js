import React from 'react'

const Child = (props)=>{
    return (
        <div>
            {/* 1 */}
            <button onClick={props.greetHandler}>Greet your parent(passing parent to child)</button> 
            {/* 2 */}
            <br/>
            <button onClick={()=> props.greetHandler2("vin")}>Greet your child(passing child to parent</button> 
        </div>
    )
}


export default Child

// (1) Passing parameter from parent to child
// (2) Passing parameter from child to parent
