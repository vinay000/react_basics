import React from 'react'
import '../style/style.css'

function Stylesheet(props) {
    let className = props.primary ? 'primary': ''       //when conditinaly css class
    return (
        <div>
            <h1 className="peimary">CSS styling</h1>
            {/* <h1 className={`${className}`}>CSS styling</h1> */}
        </div>
    )
}

export default Stylesheet
