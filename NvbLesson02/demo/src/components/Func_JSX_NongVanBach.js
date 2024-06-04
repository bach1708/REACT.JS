import React from 'react'

export default function Func_JSX_NongVanBach(props){
    const users = {
        name:"Nong Van Bach",
        age:22
    }
    return (
        <div>
            <h2> Function Component Demo</h2>
            <h3>
                Welcome to , {users.name} - {users.age}
            </h3>
            <hr/>
            <h3>Props:
                <br/> fullName: {props.fullName}
                <br/> Age:{props.age}
            </h3>
        </div>
    )
}