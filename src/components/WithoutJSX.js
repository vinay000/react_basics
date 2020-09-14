import  React from 'react'

const WithoutJSX = () => {
    return React.createElement('div', {id:'doom', className:'doom1'}, React.createElement('h1', null, 'WithoutJSX.js => without JSX') )
}

export default WithoutJSX