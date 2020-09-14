import React, { Component } from "react";

const PropsUsage = (props) => {
    console.log("name>>>", props);
    return (
        <div>
            <h1>Props usage with props as name: {props.name}</h1>
            {props.children}
        </div>
    )
}

// class PropsUsage extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Polar.js === with props {this.props.name}</h1>
//                 {this.props.children}
//             </div>
//         )
//     }
// }


export default PropsUsage