import React, {Component} from 'react'


// function base component
const Destructuring = ({name, hereoname}) =>{
    return (
        <diV>
            <h2>
                Hero name is {name} a.k.a {hereoname}           
            </h2>
        </diV>
    )
}


class Welcome extends Component{
    render(){
        const {name, heroname} = this.props
        return (<div>
            <h3>Hero name is: {name} a.k.a {heroname}</h3>

        </div>)
    }
}

export default Destructuring

//ways to destructure props