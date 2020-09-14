import React from 'react'

function ListRendering() {
    const names = ['A', 'B', 'C', 'D']

    const personDetail = [
        {
            id: 1,
            name: "Bin",
            age: 22
        },

        {
            id: 2,
            name: "gin",
            age: 22
        }
    ]


const personList = personDetail.map(person =>  (<h5 key={person.id}> name is :{person.name} / age is:{person.age}</h5>))
return <div>{personList}</div>

   /* return (
        <div>
            {
                names.map(name => <h1>{name}</h1>)                  //method1
            }
        </div>
    )*/
}

export default ListRendering


//  {} ---> is used to evaluate any operation in jsx