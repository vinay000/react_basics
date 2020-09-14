import React, { Component } from 'react'

export default class ConditionalRendring extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLogin: false
        }
    }


    render() {
        if (true) {
            return <div>Hello Ui</div>
        }
        else {
            return <div>else UI rendering</div>
        }
    }
}

/*There are 4 approches to conditionally render UI

1. if (true) {
        return <div>Hello Ui</div>
    }
    else {
        return <div>else UI rendering</div>
    }

2. let ui;
    if(true){
        ui = <div>Hello Ui</div>
    }
    else{
        ui = <div>else UI rendering</div>
    }

    return ui

3.  return this.state.isLogin ?(<div>Hello Ui</div>) : (<div>else UI rendering</div>)

4.  return this.state.isLogin && <div>Hello Ui</div>

*/