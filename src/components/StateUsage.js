import React, { Component } from "react";


class StateUsage extends Component{

    constructor(){
        super();
        this.state = {
            message:'StateUsage ==> state: welocome visitor'
        }

    }

    changeMessage(){
        this.setState(
            {
                message:'Thanks for changinging me'
            }
        )
    }


    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Change above message</button>
            </div>
        )
    }
}


export default StateUsage