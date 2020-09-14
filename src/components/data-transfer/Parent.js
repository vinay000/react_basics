import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            // 1
            parentName: "Rama"  
             
        }
        this.greetParent = this.greetParent.bind(this)      //bind this
        this.greetChild = this.greetChild.bind(this)
    }
    // 1
    greetParent(){
        alert(`Hello this is ${this.state.parentName}` )
    }
    // 2
    greetChild(childname){
        alert(`Hello this is child ${childname}` )
    }
   

    render() {
        return (
            <div>
                {/* 1 / 2*/}
                <Child greetHandler={this.greetParent} greetHandler2={this.greetChild}/>
            </div>
        )
    }
}

export default Parent
