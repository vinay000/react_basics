import React from 'react'

function IndexAsKey() {
    const names = ['A','B','C','C','D']
    
    const nameList = names.map((name,index)=> <h1 key={index}>{name}</h1>)
}

export default IndexAsKey


//last opion for key, if there is other unique feilds go with