import React, { Component } from 'react'

class SetStateUsage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0        //state
         
        }
    }

    increament() {
        // this.state.count += 1;       NEVER MODIFY STATE DIRECTLY USE setState()
        this.setState(
            { count: this.state.count + 1 }, () => { console.log("statecount", this.state.count) }
        )
        
        //another way to increase by 5
        // this.setState(prevState => ({
        //     count : prevState.count + 1
        // }))


    }

    increamentFive(){
        this.increament()
        this.increament()
        this.increament()
        this.increament()
        this.increament()
       
    }

    render() {
        return (
        <div>
            count 1 value is - {this.state.count} <br/>
            <button onClick={() => this.increament()}>Increament by 1</button>
            <button onClick={() => this.increamentFive()}>Increament by 5</button>

        </div>
        )
    }

}

export default SetStateUsage