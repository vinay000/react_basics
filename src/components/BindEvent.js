import React, { Component } from 'react'

//There 4 ways to bind events but only 2 are recommended by react team

class BindEvent extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
             message:"hello"
        }
        // this.changeMessage = this.changeMessage.bind(this) //(1) binding this keyword //binding in constructur
    }
    
    // changeMessage(){
    //     this.setState({
    //         message:"goobye"        //(1)
    //     })
    // }

    //without constructer
    changeMessage = () => {
        this.setState({
            message:"goobye"        //(2)
        })
    }

    render(){

        return(
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.changeMessage}>change</button>
            </div>
        )
    }
}

export default BindEvent